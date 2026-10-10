import fs from "node:fs";
import path from "node:path";

const BASE_URL = "https://rohan-portfolio-eta.vercel.app";

const PROJECTS_URL =
  "https://raw.githubusercontent.com/Rohan04022003/my-project-data-repo/main/data/projects.json";

const BLOGS_URL =
  "https://raw.githubusercontent.com/Rohan04022003/my-project-data-repo/main/data/blogs.json";

const STATIC_ROUTES = [
  "/",
  "/about",
  "/contact",
  "/projects",
  "/blog",
];

async function fetchJson(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch ${url}: ${response.status}`
    );
  }

  return response.json();
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function createUrlEntry(url) {
  return `  <url>
    <loc>${escapeXml(url)}</loc>
  </url>`;
}

async function generateSitemap() {
  console.log("Fetching projects and blogs...");

  const [projects, blogs] = await Promise.all([
    fetchJson(PROJECTS_URL),
    fetchJson(BLOGS_URL),
  ]);

  if (!Array.isArray(projects) || !Array.isArray(blogs)) {
    throw new Error(
      "Expected projects.json and blogs.json to contain JSON arrays."
    );
  }

  const urls = new Set();

  // Static pages
  for (const route of STATIC_ROUTES) {
    urls.add(`${BASE_URL}${route}`);
  }

  // Individual project pages
  for (const project of projects) {
    if (typeof project.slug === "string" && project.slug.trim()) {
      urls.add(
        `${BASE_URL}/projects/${encodeURIComponent(project.slug.trim())}`
      );
    }
  }

  // Individual blog pages
  for (const blog of blogs) {
    if (typeof blog.slug === "string" && blog.slug.trim()) {
      urls.add(
        `${BASE_URL}/blogs/${encodeURIComponent(blog.slug.trim())}`
      );
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...urls].map(createUrlEntry).join("\n")}
</urlset>
`;

  const publicDir = path.resolve("public");

  fs.mkdirSync(publicDir, { recursive: true });

  fs.writeFileSync(
    path.join(publicDir, "sitemap.xml"),
    xml,
    "utf8"
  );

  console.log(`Sitemap generated successfully!`);
  console.log(`Total URLs: ${urls.size}`);
  console.log("Output: public/sitemap.xml");
}

generateSitemap().catch((error) => {
  console.error("Sitemap generation failed:", error);
  process.exitCode = 1;
});