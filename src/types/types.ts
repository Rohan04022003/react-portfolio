export type Project = {
  title: string;
  slug: string;
  description: string;
  whyBuilt: string;
  techStack: string[];
  features: string[];
  folderStructure: Record<string, string[]>;
  screenshots: string[];
  githubLink: string;
  liveDemo: string;
  readmeHighlights: {
    installation: string;
    envSetup: string[];
    usage: string;
  };
  tags: string[];
  isLatest: boolean;
};

export type ProjectContextType = {
  projects: Project[];
  loading: boolean;
};

// for blog 

export type Blog = {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  date: string; // ISO format date string
  tags: string[];
  readTime: string;
  slug: string;
  projectSlug: string;
  author: {
    name: string;
    avatar: string;
  };
  content: {
    sections: Array<
      | {
          heading: string;
          text: string;
        }
      | {
          heading: string;
          list: string[];
        }
    >;
  };
};

export type BlogContextType = {
  blogs: Blog[];
  loading: boolean;
};