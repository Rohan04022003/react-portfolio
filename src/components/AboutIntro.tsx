import { useAppSettings } from "../context/AppSettingsContext";
import { Code2 } from "lucide-react";
import { motion } from "framer-motion";

const AboutIntro = () => {
  const { theme } = useAppSettings();

  return (
    <motion.section
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-800 text-100 rounded-lg md:p-5 p-2 shadow-lg lg:w-[65rem] w-full"
    >
      <div className="flex-between flex-col gap-10">
        {/* Introduction */}
        <div className="flex-1 space-y-4">
          <p className="text-lg leading-6 text-400">
            Hello! I’m{" "}
            <span style={{ color: theme }} className="font-medium">
              Rohan Kumar Mahto
            </span>
            , a frontend developer with a passion for crafting pixel-perfect,
            responsive, and high-performing web interfaces. With a strong
            foundation in{" "}
            <span className="font-medium text-300">React.js</span>,{" "}
            <span className="font-medium text-300">TypeScript</span>,{" "}
            <span className="font-medium text-300">Tailwind CSS</span>, and
            component libraries like{" "}
            <span className="font-medium text-300">shadcn/ui</span>, I
            specialize in building scalable UIs that not only look clean — but
            work flawlessly across devices.
          </p>
          <p className="text-lg leading-6 text-400">
            I enjoy transforming complex requirements into intuitive user
            experiences. Whether it's an AI-powered chatbot builder, a custom
            e-commerce platform, or a modern news application — I focus on
            performance, accessibility, and maintainability in everything I
            build.
          </p>
          <p className="text-lg leading-6 text-400">
            I'm a continuous learner who thrives on collaboration,
            problem-solving, and keeping up with the latest frontend trends.
            Let’s create something impactful together.
          </p>
        </div>

        <div className="flex-between w-full">
          {/* Stats */}
          <div className="flex gap-8 items-center justify-center md:justify-end">
            <div>
              <h2 className="text-2xl font-bold" style={{ color: theme }}>
                3+
              </h2>
              <p className="text-sm text-400">Major Projects</p>
            </div>
            <div>
              <h2
                className="text-2xl font-bold flex items-center gap-2"
                style={{ color: theme }}
              >
                1st <span className="t-lg">🎉</span>
              </h2>
              <p className="text-sm text-400">Coding Competition</p>
            </div>
          </div>

          {/* Icon */}
          <div className="flex justify-end mt-4">
            <Code2 className="w-6 h-6 text-neutral-500" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutIntro;
