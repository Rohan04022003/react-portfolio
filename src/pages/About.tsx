import { ExternalLink, Github } from "lucide-react";
import { useAppSettings } from "../context/AppSettingsContext";
import { Link } from "react-router-dom";
import { motion, spring } from "framer-motion";

const About = () => {
  const { theme } = useAppSettings();

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 1.3,
        type: spring,
        stiffness: 100,
        damping: 16,
      },
    }),
  };

  return (
    <div className="min-h-screen px-4 md:px-10 lg:px-20 py-10 flex justify-center">
      <motion.div
        className="lg:w-[65rem] w-full text-100 space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div custom={1} variants={fadeUp} className="space-y-2">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>

          <p className="text-400">
            Hey, I'm Rohan Kumar Mahto — a developer who enjoys working across
            data, cloud, and modern web technologies. I like turning ideas and
            requirements into practical solutions, with a strong focus on
            clean interfaces, usability, performance, and maintainable code.
            Alongside my professional work, I continue to explore full-stack
            development and AI-driven applications.
          </p>

          <p className="text-400">
            I currently work at Cognizant in Azure Data Operations, where I
            work with data and cloud-related workflows. My professional
            experience includes SQL, SSIS, Python, SaaS environments, and
            stored procedures, giving me hands-on exposure to enterprise data
            operations and production-oriented systems. Outside of work, I
            build modern web applications and experiment with different ideas
            to strengthen my development skills. You can reach out to me at{" "}
            <a
              className="underline hover-80"
              style={{ color: theme }}
              href="mailto:rohankumar993985@gmail.com"
            >
              rohankumar993985@gmail.com
            </a>
            , or check out my work on{" "}
            <a
              href="https://github.com/Rohan04022003"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover-80"
              style={{ color: theme }}
            >
              GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://linkedin.com/in/rohan-mahto-5521aa253"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover-80"
              style={{ color: theme }}
            >
              LinkedIn
            </a>
            .
          </p>
        </motion.div>

        <motion.div
          custom={2}
          variants={fadeUp}
          className="border-l-2 border-white/10 pl-4 mt-8 space-y-2"
        >
          <p className="text-neutral-300">
            • Started B.C.A. in 2021 with a deep interest in technology and
            problem-solving.
          </p>

          <p className="text-neutral-300">
            • Learned HTML, CSS, and JavaScript by building real-world UI
            components and web experiences.
          </p>

          <p className="text-neutral-300">
            • Explored React and TypeScript to develop scalable and
            component-driven web applications.
          </p>

          <p className="text-neutral-300">
            • Built real-world projects including news applications,
            portfolios, e-commerce platforms, and AI-powered chatbots.
          </p>

          <p className="text-neutral-300">
            • Currently expanding my experience across data operations,
            cloud, backend development, and AI while continuing to share
            learnings through my{" "}
            <Link
              to="/blog"
              style={{ color: theme }}
              className="underline hover-80"
            >
              Blog
            </Link>
            .
          </p>
        </motion.div>

        <motion.div custom={3} variants={fadeUp}>
          <h2 className="text-2xl font-semibold mb-2">Education</h2>

          <ul className="text-neutral-300 list-disc list-inside space-y-1">
            <li>
              <strong className="text-100">B.C.A.</strong> – Sirifort Institute
              of Management Studies (GGSIPU), 2021–2024 | CGPA: 8.85
            </li>

            <li>
              <strong className="text-100">XII</strong> – Bihar School
              Examination Board (BSEB), 2020 | 76.20%
            </li>
          </ul>
        </motion.div>

        <motion.div custom={3} variants={fadeUp}>
          <h2 className="text-2xl font-semibold mb-2">Certifications</h2>

          <ul className="text-neutral-300 list-disc list-inside space-y-1">
            <li>
              <strong className="text-100">Web Developer BootCamp</strong> –
              Udemy, 2024-2025
            </li>

            <li>
              <strong className="text-100">
                Advanced Diploma in Computer Application
              </strong>{" "}
              – Wizard Tech, 2020-2021 | 84%
            </li>
          </ul>
        </motion.div>

        <motion.div custom={5} variants={fadeUp} className="space-y-5">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>

          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold text-100">BotForge AI</h3>

            <p className="text-sm text-neutral-300 mb-2">
              A full-featured AI chatbot platform that allows users to interact
              with multiple AI models. The application includes custom bot
              creation, chat history, PDF export, code and markdown support,
              theme switching, onboarding flows, and a responsive user
              experience.
            </p>

            <div className="flex gap-3">
              <a
                href="https://bot-forge-ai.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm flex-center gap-1 hover-80"
                style={{ color: theme }}
              >
                <ExternalLink size={18} /> Live Demo
              </a>

              <a
                href="https://github.com/Rohan04022003/botForge-AI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm flex-center gap-1 hover-80"
                style={{ color: theme }}
              >
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>

          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <h3 className="text-xl font-semibold text-100">Fashion Market</h3>

            <p className="text-sm text-neutral-300 mb-2">
              A clean and responsive e-commerce frontend built to simulate a
              real shopping experience. It includes category filtering,
              product previews, dynamic cart updates, theme toggling, lazy
              loading, and a simulated checkout experience.
            </p>

            <div className="flex gap-4">
              <a
                href="https://fashion-market-x22z.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm flex-center gap-1 hover-80"
                style={{ color: theme }}
              >
                <ExternalLink size={18} /> Live Demo
              </a>

              <a
                href="https://github.com/Rohan04022003/fashion-market"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm flex-center gap-1 hover-80"
                style={{ color: theme }}
              >
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>

          <p className="text-400 text-sm">
            You can find more of my projects on the{" "}
            <Link
              to="/projects"
              className="underline hover-80"
              style={{ color: theme }}
            >
              Projects page
            </Link>{" "}
            or explore learning stories and tutorials on my{" "}
            <Link
              to="/blog"
              className="underline hover-80"
              style={{ color: theme }}
            >
              Blog
            </Link>
            .
          </p>
        </motion.div>

        <motion.div custom={6} variants={fadeUp} className="text-400 text-sm">
          If you’re looking for someone who enjoys solving problems, building
          practical products, and continuously learning across technology —
          <br />
          Let’s connect via the{" "}
          <Link
            to="/contact"
            className="underline hover-80"
            style={{ color: theme }}
          >
            contact page
          </Link>{" "}
          and create something impactful together.
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;