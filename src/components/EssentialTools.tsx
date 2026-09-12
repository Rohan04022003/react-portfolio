import { useAppSettings } from "../context/AppSettingsContext";
import { tools } from "../data/toolsData";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariant = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.1, 0.25, 1] as [
        number,
        number,
        number,
        number
      ],
    },
  },
};

const ToolsSection = () => {
  const { theme } = useAppSettings();

  return (
    <section className="text-100 lg:w-[65rem] w-full">

      {/* Header */}
      <div className="mb-9">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-center gap-2 mb-2"
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: theme }}
          />

          <span className="text-sm uppercase tracking-[0.18em] text-neutral-400">
            Skills & Tools
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl sm:text-4xl font-semibold tracking-tight"
        >
          Technologies &{" "}
          <span style={{ color: theme }}>
            Tools I Work With
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-neutral-400 mt-3 max-w-2xl leading-6"
        >
          A collection of technologies I use across data operations,
          cloud environments, web development, and building real-world
          applications.
        </motion.p>
      </div>

      {/* Tools */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {tools.map((tool) => (
          <motion.div
            key={tool.name}
            variants={itemVariant}
            whileHover={{
              y: -4,
              scale: 1.015,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 18,
              },
            }}
            className="
              group relative overflow-hidden
              rounded-xl
              px-4 py-4
              flex items-center gap-4
              cursor-default
              border
              transition-colors duration-300
            "
            style={{
              background: `linear-gradient(
                135deg,
                ${theme}08,
                rgba(255,255,255,0.015)
              )`,
              borderColor: `${theme}25`,
            }}
          >

            {/* Logo container */}
            <div
              className="
                relative z-10
                flex items-center justify-center
                w-11 h-11 shrink-0
                rounded-lg
                border
                bg-black/10
                transition-transform duration-300
                group-hover:scale-105
              "
              style={{
                borderColor: `${theme}20`,
              }}
            >
              <img
                src={tool.logo}
                alt={tool.name}
                className="w-8 h-8 object-contain"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 min-w-0">
              <p className="font-semibold text-[15px] text-200 truncate">
                {tool.name}
              </p>

              <p className="text-xs text-neutral-500 mt-0.5 truncate">
                {tool.desc}
              </p>
            </div>

            {/* Theme indicator */}
            <span
              className="
                absolute bottom-0 left-0
                h-[2px] w-0
                group-hover:w-full
                transition-all duration-500
              "
              style={{
                backgroundColor: theme,
              }}
            />
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default ToolsSection;