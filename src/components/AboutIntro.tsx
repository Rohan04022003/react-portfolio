import { useAppSettings } from "../context/AppSettingsContext";
import { BriefcaseBusiness, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const AboutIntro = () => {
  const { theme } = useAppSettings();


  // joining date calculation.

  const joiningDate = new Date("2026-02-14");
  const currentDate = new Date();

  let years = currentDate.getFullYear() - joiningDate.getFullYear();
  let months = currentDate.getMonth() - joiningDate.getMonth();

  if (currentDate.getDate() < joiningDate.getDate()) {
    months--;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const experienceText = [
    years > 0 ? `${years} ${years === 1 ? "year" : "years"}` : "",
    months > 0 ? `${months} ${months === 1 ? "month" : "months"}` : "",
  ]
    .filter(Boolean)
    .join(" ");


  return (
    <motion.section
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.9,
        delay: 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      viewport={{ once: true, amount: 0.15 }}
      className="relative overflow-hidden bg-800 text-100 rounded-2xl
        border border-white/5 shadow-xl lg:w-[65rem] w-full
        md:p-7 p-4"
    >
      {/* Subtle theme glow */}
      <div
        className="absolute -top-32 -right-32 w-72 h-72 rounded-full
          blur-3xl opacity-[0.06] pointer-events-none"
        style={{ backgroundColor: theme }}
      />

      <div className="relative z-10">

        {/* Header */}
        <div className="flex items-start justify-between gap-5 mb-7">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: theme }}
              />

              <span className="text-sm text-400 uppercase tracking-[0.18em]">
                About Me
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold">
              A developer who enjoys{" "}
              <span style={{ color: theme }}>
                building & solving.
              </span>
            </h2>
          </div>

          <div
            className="hidden sm:flex items-center justify-center
              w-11 h-11 rounded-xl border border-white/10
              bg-white/[0.03]"
          >
            <Code2 className="w-5 h-5 text-neutral-400" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-5">

          <p className="text-[16px] md:text-lg leading-7 text-400">
            Hello! I’m{" "}
            <span
              style={{ color: theme }}
              className="font-medium"
            >
              Rohan Kumar Mahto
            </span>
            . I enjoy turning ideas and requirements into clean, responsive,
            and intuitive digital experiences. I care about thoughtful UI,
            usability, performance, and writing solutions that are practical
            and maintainable.
          </p>

          <p className="text-[16px] md:text-lg leading-7 text-400">
            I currently work at{" "}
            <span
              style={{ color: theme }}
              className="font-medium"
            >
              Cognizant
            </span>{" "}
            in{" "}
            <span className="font-medium text-300">
              Azure Data Operations
            </span>
            . My professional experience includes working with data
            operations and cloud-based environments, along with hands-on work
            involving SQL, SSIS, Python, SaaS, and stored procedures.
          </p>

          <p className="text-[16px] md:text-lg leading-7 text-400">
            Alongside my professional work, I build modern web applications
            and explore full-stack development. I enjoy creating reusable
            interfaces, connecting applications with APIs, and turning
            complex requirements into simple user experiences.
          </p>

          <p className="text-[16px] md:text-lg leading-7 text-400">
            One of my ongoing projects is{" "}
            <span
              style={{ color: theme }}
              className="font-medium"
            >
              VYN0X
            </span>
            , where I’m exploring real-world application architecture and
            full-stack development. I’m continuously improving my ability to
            work across both data-driven systems and modern web applications.
          </p>

        </div>

        {/* Experience Highlight */}
        <div className="mt-8 pt-6 border-t border-white/5">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

{/* Current Role */}
<div
  className="group rounded-xl border border-white/[0.08] bg-white/[0.02]
    p-4 transition-colors duration-300 hover:bg-white/[0.04]"
>
  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

    {/* Left: Role Details */}
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center
        rounded-lg border border-white/[0.07] bg-white/[0.03]"
      >
        <BriefcaseBusiness
          className="h-[18px] w-[18px]"
          style={{ color: theme }}
        />
      </div>

      <div>
        <p className="text-xs text-500">
          Currently working at
        </p>

        <h3 className="mt-1 text-sm font-medium text-300">
          Cognizant
        </h3>

        <p className="mt-0.5 text-xs text-500">
          Azure Data Operations
        </p>
      </div>
    </div>

    {/* Right on desktop, bottom on mobile */}
    <div
      className="flex items-center justify-between border-t
        border-white/[0.07] pt-3
        sm:block sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0 sm:text-right"
    >
      <p className="text-xs text-500">
        Professional Experience
      </p>

      <p
        className="text-sm font-semibold"
        style={{ color: theme }}
      >
        {experienceText || "< 1 month"}
      </p>
    </div>

  </div>
</div>

            {/* Development */}
            <div
              className="group flex items-center gap-4 rounded-xl
                border border-white/[0.07]
                bg-white/[0.025] p-4
                transition-all duration-300
                hover:bg-white/[0.05]"
            >
              <div
                className="flex items-center justify-center
                  w-10 h-10 rounded-lg
                  bg-white/[0.04] border border-white/[0.06]"
              >
                <Code2
                  className="w-5 h-5"
                  style={{ color: theme }}
                />
              </div>

              <div>
                <p className="text-sm text-500">
                  Outside Work
                </p>

                <h3 className="font-medium text-300">
                  Building Web Applications
                </h3>

                <p className="text-xs text-500 mt-0.5">
                  Exploring Full-Stack Development
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default AboutIntro;