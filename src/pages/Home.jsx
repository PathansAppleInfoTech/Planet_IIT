import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Cpu,
  Layers3,
  Network,
  Play,
  Sparkles,
  Terminal,
} from "lucide-react";

import { motion } from "motion/react";

/* -------------------------------------------------------
   Animation helpers
------------------------------------------------------- */

const reveal = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const revealSlow = {
  hidden: {
    opacity: 0,
    y: 70,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const viewport = {
  once: true,
  amount: 0.2,
};

/* -------------------------------------------------------
   Data
------------------------------------------------------- */

const courses = [
  {
    number: "01",
    title: "Full Stack",
    subtitle: "Web Development",
    description:
      "Build modern web applications from interface to backend, databases and deployment.",
    icon: Code2,
  },
  {
    number: "02",
    title: "AI & Machine",
    subtitle: "Learning",
    description:
      "Explore intelligent systems, data-driven applications and practical machine learning.",
    icon: BrainCircuit,
  },
  {
    number: "03",
    title: "IoT &",
    subtitle: "Robotics",
    description:
      "Connect software with the physical world through sensors, devices, automation and robotics.",
    icon: Network,
  },
  {
    number: "04",
    title: "Embedded",
    subtitle: "Systems",
    description:
      "Learn the technology behind intelligent devices, controllers and connected hardware.",
    icon: Cpu,
  },
];

const technologies = [
  "FULL STACK",
  "ARTIFICIAL INTELLIGENCE",
  "MACHINE LEARNING",
  "IOT",
  "ROBOTICS",
  "EMBEDDED SYSTEMS",
  "PYTHON",
  "FLUTTER",
];

const capabilities = [
  "Web & Mobile Applications",
  "AI & Machine Learning Solutions",
  "IoT & Embedded Development",
  "Academic Project Guidance",
];

/* -------------------------------------------------------
   Home
------------------------------------------------------- */

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#f7faff]">

      {/* ==================================================
          HERO
      ================================================== */}

      <section className="relative min-h-screen pt-28 sm:pt-32">

        {/* Technical background */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.45]
            [background-image:linear-gradient(rgba(7,87,168,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(7,87,168,0.045)_1px,transparent_1px)]
            [background-size:72px_72px]
          "
        />

        {/* Blue atmospheric glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-[-15%]
            top-[12%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#1475d1]/10
            blur-[120px]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-[-15%]
            left-[-10%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#0757a8]/[0.06]
            blur-[100px]
          "
        />

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">

          <div className="grid min-h-[calc(100vh-128px)] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">

            {/* ------------------------------------------
                Hero copy
            ------------------------------------------ */}

            <div className="relative z-10 pt-5 pb-10 lg:pb-20">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  mb-7
                  flex
                  items-center
                  gap-3
                "
              >
                <span className="h-px w-9 bg-[#0757a8]" />

                <span
                  className="
                    font-mono
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.25em]
                    text-[#0757a8]
                  "
                >
                  Planet Institute & Information Technology
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  max-w-[850px]
                  font-[Manrope]
                  text-[clamp(3.6rem,7.2vw,7.8rem)]
                  font-extrabold
                  leading-[0.88]
                  tracking-[-0.075em]
                  text-[#10243a]
                "
              >
                Learn.
                <br />

                <span className="text-[#0757a8]">
                  Build.
                </span>

                <br />

                Shape
                <br />

                <span className="relative inline-block">
                  what's next.
                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      -bottom-2
                      left-1
                      h-[5px]
                      w-[72px]
                      rounded-full
                      bg-[#1475d1]
                      sm:w-[110px]
                    "
                  />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  pt-10
                  max-w-[570px]
                  text-base
                  leading-7
                  text-[#607086]
                  sm:text-lg
                "
              >
                A technology academy and IT company helping
                students, developers and organizations turn
                ideas into practical digital experiences.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.6,
                }}
                className="
                  mt-9
                  flex
                  flex-wrap
                  items-center
                  gap-5
                "
              >
                <a
                  href="/courses"
                  className="
                    group
                    inline-flex
                    h-13
                    items-center
                    gap-3
                    rounded-full
                    bg-[#0757a8]
                    px-6
                    text-sm
                    font-bold
                    !text-white
                    shadow-[0_15px_40px_rgba(7,87,168,0.2)]
                    transition-all
                    duration-300
                    hover:bg-[#043b78]
                    hover:shadow-[0_20px_50px_rgba(7,87,168,0.25)]
                  "
                >
                  Explore Courses

                  <ArrowUpRight
                    size={17}
                    className="
                      text-white
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </a>

                <a
                  href="/about"
                  className="
                     group
                    inline-flex
                    h-13
                    items-center
                    gap-3
                    rounded-full
                    bg-[#ffffff]
                    px-6
                    text-sm
                    font-bold
                    !text-[#0757a8]
                    shadow-[0_15px_40px_rgba(7,87,168,0.2)]
                    transition-all
                    duration-300
                  "
                >
                  Discover Planet IIT

                  <span
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#10243a]/15
                      transition-all
                      duration-300
                      group-hover:border-[#0757a8]
                      group-hover:bg-[#0757a8]
                      group-hover:text-white
                    "
                  >
                    <ArrowDownRight size={15} />
                  </span>
                </a>
              </motion.div>

              {/* Tiny trust line */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.9,
                  duration: 0.8,
                }}
                className="
                  mt-12
                  flex
                  items-center
                  gap-3
                  text-xs
                  text-[#8b99aa]
                "
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1475d1] opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1475d1]" />
                </span>

                Technology education · IT solutions · Kerala
              </motion.div>
            </div>

            {/* ------------------------------------------
                Hero visual
            ------------------------------------------ */}

            <motion.div
              initial={{
                opacity: 0,
                x: 60,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 1.2,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                relative
                min-h-[500px]
                lg:min-h-[680px]
              "
            >

              {/* Main image */}
              <div
                className="
                  absolute
                  right-0
                  top-[7%]
                  h-[72%]
                  w-[78%]
                  overflow-hidden
                  rounded-[2rem]
                  bg-[#dceafa]
                  shadow-[0_30px_100px_rgba(7,87,168,0.12)]
                  sm:w-[72%]
                "
              >
                <img
                  src="/assets/common/hero-coding.png"
                  alt="Close-up of a modern computer motherboard representing technology and engineering"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-[1.5s]
                    hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#052f5f]/35
                    via-transparent
                    to-white/5
                  "
                />
              </div>

              {/* Secondary image */}
              <div
                className="
                  absolute
                  bottom-[8%]
                  left-0
                  z-20
                  h-[38%]
                  w-[53%]
                  overflow-hidden
                  rounded-[1.5rem]
                  border-[8px]
                  border-[#f7faff]
                  bg-white
                  shadow-[0_25px_70px_rgba(7,50,90,0.18)]
                  sm:w-[48%]
                "
              >
                <img
                  src="/assets/common/hero-robotics.png"
                  alt="Technology professionals collaborating around a laptop"
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />
              </div>

              {/* Floating technology badge */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  right-[3%]
                  top-[2%]
                  z-30
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#0757a8]/15
                  bg-white/95
                  shadow-[0_20px_50px_rgba(7,87,168,0.14)]
                  backdrop-blur
                  sm:h-28
                  sm:w-28
                "
              >
                <div className="text-center">
                  <Sparkles
                    size={19}
                    className="mx-auto mb-2 text-[#0757a8]"
                  />

                  <span
                    className="
                      block
                      font-mono
                      text-[8px]
                      uppercase
                      tracking-[0.18em]
                      text-[#607086]
                    "
                  >
                    Think
                  </span>

                  <span
                    className="
                      block
                      font-[Manrope]
                      text-sm
                      font-extrabold
                      text-[#10243a]
                    "
                  >
                    Beyond
                  </span>
                </div>
              </motion.div>

              {/* Technical coordinate label */}
              <div
                className="
                  absolute
                  bottom-[3%]
                  right-[4%]
                  z-30
                  hidden
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.18em]
                  text-[#607086]
                  sm:block
                "
              >
                9°41'07"N · 76°31'52"E
              </div>

              {/* Vertical decorative line */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  bottom-[12%]
                  right-[-3%]
                  hidden
                  h-28
                  w-px
                  bg-[#0757a8]/20
                  lg:block
                "
              />

            </motion.div>

          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="
              absolute
              bottom-8
              left-6
              hidden
              items-center
              gap-3
              lg:flex
            "
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8b99aa]">
              Scroll to explore
            </span>

            <span className="h-px w-12 bg-[#0757a8]/25" />
          </motion.div>

        </div>
      </section>


      {/* ==================================================
          MOVING TECHNOLOGY STRIP
      ================================================== */}

      <section
        aria-label="Planet IIT technology areas"
        className="
          relative
          overflow-hidden
          border-y
          border-[#0757a8]/10
          bg-white
          py-5
        "
      >
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            flex
            w-max
            items-center
            gap-10
            whitespace-nowrap
          "
        >
          {[...technologies, ...technologies].map(
            (technology, index) => (
              <div
                key={`${technology}-${index}`}
                className="flex items-center gap-10"
              >
                <span
                  className="
                    font-mono
                    text-[10px]
                    font-medium
                    tracking-[0.2em]
                    text-[#607086]
                  "
                >
                  {technology}
                </span>

                <span className="h-1 w-1 rounded-full bg-[#1475d1]" />
              </div>
            )
          )}
        </motion.div>
      </section>


      {/* ==================================================
          INTRO / STATEMENT
      ================================================== */}

      <section className="relative bg-white py-28 sm:py-36 lg:py-44">

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

          <motion.div
            variants={revealSlow}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]"
          >

            <div>
              <span
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-[#0757a8]
                "
              >
                01 / Who we are
              </span>
            </div>

            <div>
              <h2
                className="
                  max-w-[1050px]
                  font-[Manrope]
                  text-[clamp(2.5rem,5vw,5.6rem)]
                  font-bold
                  leading-[0.98]
                  tracking-[-0.06em]
                  text-[#10243a]
                "
              >
                We don't believe technology
                should be learned only from
                <span className="text-[#0757a8]">
                  {" "}theory.
                </span>
              </h2>

              <div
                className="
                  mt-12
                  grid
                  gap-8
                  md:grid-cols-[1fr_auto]
                  md:items-end
                "
              >
                <p
                  className="
                    max-w-[650px]
                    text-base
                    leading-8
                    text-[#607086]
                    sm:text-lg
                  "
                >
                  Planet IIT brings education and technology
                  together. Students learn by building,
                  experimenting and solving real problems,
                  while our IT division transforms ideas into
                  practical digital products and solutions.
                </p>

                <a
                  href="/about"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    text-sm
                    font-bold
                    text-[#0757a8]
                  "
                >
                  Our story

                  <span
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#0757a8]/20
                      transition-all
                      duration-300
                      group-hover:bg-[#0757a8]
                      group-hover:text-white
                    "
                  >
                    <ArrowUpRight size={16} />
                  </span>
                </a>
              </div>
            </div>

          </motion.div>

        </div>
      </section>


      {/* ==================================================
          ACADEMY + IT
      ================================================== */}

      <section className="relative overflow-hidden bg-[#eef5fc] py-24 sm:py-32">

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="
              mb-16
              flex
              flex-col
              gap-5
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div>
              <span
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-[#0757a8]
                "
              >
                02 / One ecosystem
              </span>

              <h2
                className="
                  mt-4
                  max-w-[700px]
                  font-[Manrope]
                  text-4xl
                  font-extrabold
                  leading-[0.98]
                  tracking-[-0.05em]
                  text-[#10243a]
                  sm:text-5xl
                "
              >
                Two worlds.
                <br />
                One technology mindset.
              </h2>
            </div>

            <p className="max-w-[400px] text-sm leading-6 text-[#607086]">
              Learn the technology. Then use it to create
              something that matters.
            </p>
          </motion.div>


          <div
            className="
              grid
              overflow-hidden
              border
              border-[#0757a8]/10
              bg-white
              lg:grid-cols-2
            "
          >

            {/* Academy */}
            <motion.a
              href="/courses"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="
                group
                relative
                min-h-[430px]
                overflow-hidden
                border-b
                border-[#0757a8]/10
                p-8
                transition-colors
                duration-500
                hover:bg-[#0757a8]
                lg:border-b-0
                lg:border-r
                lg:p-12
              "
            >
              <div className="relative z-10 flex h-full flex-col justify-between">

                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#0757a8] transition-colors group-hover:text-white/60">
                    ACADEMY / 01
                  </span>

                  <ArrowUpRight
                    size={22}
                    className="
                      text-[#0757a8]
                      transition-all
                      duration-500
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      group-hover:text-white
                    "
                  />
                </div>

                <div>
                  <p className="mb-4 text-sm font-semibold text-[#607086] transition-colors group-hover:text-white/60">
                    Learn by building
                  </p>

                  <h3
                    className="
                      max-w-[500px]
                      font-[Manrope]
                      text-5xl
                      font-extrabold
                      leading-[0.9]
                      tracking-[-0.06em]
                      text-[#10243a]
                      transition-colors
                      group-hover:!text-white
                      sm:text-6xl
                    "
                  >
                    Tech
                    <br />
                    Academy
                  </h3>
                </div>

              </div>

              {/* decorative circle */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  -bottom-32
                  -right-20
                  h-80
                  w-80
                  rounded-full
                  border
                  border-[#0757a8]/10
                  transition-all
                  duration-700
                  group-hover:scale-125
                  group-hover:border-white/10
                "
              />

            </motion.a>


            {/* IT Solutions */}
            <motion.a
              href="/contact"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{
                ...viewport,
                amount: 0.1,
              }}
              className="
                group
                relative
                min-h-[430px]
                overflow-hidden
                bg-[#10243a]
                p-8
                transition-colors
                duration-500
                hover:bg-[#0757a8]
                lg:p-12
              "
            >
              <div className="relative z-10 flex h-full flex-col justify-between">

                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#71b8f8]">
                    IT DIVISION / 02
                  </span>

                  <ArrowUpRight
                    size={22}
                    className="
                      text-[#71b8f8]
                      transition-all
                      duration-500
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </div>

                <div>
                  <p className="mb-4 text-sm font-semibold text-white/50">
                    Ideas into products
                  </p>

                  <h3
                    className="
                      max-w-[500px]
                      font-[Manrope]
                      text-5xl
                      font-extrabold
                      leading-[0.9]
                      tracking-[-0.06em]
                      !text-white
                      sm:text-6xl
                    "
                  >
                    IT
                    <br />
                    Solutions
                  </h3>
                </div>

              </div>

              {/* decorative technical ring */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  -bottom-36
                  -right-20
                  h-96
                  w-96
                  rounded-full
                  border
                  border-white/10
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute
                  -bottom-20
                  -right-4
                  h-64
                  w-64
                  rounded-full
                  border
                  border-white/10
                "
              />

            </motion.a>

          </div>
        </div>
      </section>


      {/* ==================================================
          COURSES
      ================================================== */}

      <section className="bg-white py-28 sm:py-36">

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="
              grid
              gap-10
              lg:grid-cols-[0.65fr_1.35fr]
            "
          >

            <div>
              <span
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-[#0757a8]
                "
              >
                03 / Learning
              </span>

              <h2
                className="
                  mt-5
                  font-[Manrope]
                  text-4xl
                  font-extrabold
                  leading-[0.95]
                  tracking-[-0.055em]
                  text-[#10243a]
                  sm:text-5xl
                "
              >
                Learn the
                <br />
                <span className="text-[#0757a8]">
                  technologies
                </span>
                <br />
                shaping tomorrow.
              </h2>

              <p className="mt-7 max-w-[390px] text-sm leading-7 text-[#607086]">
                Practical courses designed around real
                development workflows, projects and
                technologies used beyond the classroom.
              </p>

              <a
                href="/courses"
                className="
                  group
                  mt-8
                  inline-flex
                  items-center
                  gap-3
                  border-b
                  border-[#0757a8]/25
                  pb-2
                  text-sm
                  font-bold
                  text-[#0757a8]
                "
              >
                View all courses

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>


            {/* Course list */}
            <div className="border-t border-[#0757a8]/10">

              {courses.map((course, index) => {
                const Icon = course.icon;

                return (
                  <motion.a
                    key={course.number}
                    href="/courses"
                    variants={reveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.15,
                    }}
                    transition={{
                      delay: index * 0.07,
                    }}
                    className="
                      group
                      relative
                      grid
                      gap-5
                      border-b
                      border-[#0757a8]/10
                      py-8
                      transition-all
                      duration-500
                      md:grid-cols-[70px_1fr_auto]
                      md:items-center
                      md:gap-8
                    "
                  >

                    <span
                      className="
                        font-mono
                        text-[10px]
                        text-[#8b99aa]
                        transition-colors
                        group-hover:text-[#0757a8]
                      "
                    >
                      {course.number}
                    </span>

                    <div className="flex items-start gap-5">

                      <div
                        className="
                          mt-1
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-[#eef5fc]
                          text-[#0757a8]
                          transition-all
                          duration-500
                          group-hover:bg-[#0757a8]
                          group-hover:text-white
                        "
                      >
                        <Icon size={19} />
                      </div>

                      <div>
                        <h3
                          className="
                            font-[Manrope]
                            text-2xl
                            font-bold
                            tracking-[-0.035em]
                            text-[#10243a]
                            transition-colors
                            group-hover:text-[#0757a8]
                            sm:text-3xl
                          "
                        >
                          {course.title}
                        </h3>

                        <p className="mt-1 text-sm font-medium text-[#607086]">
                          {course.subtitle}
                        </p>

                        <p
                          className="
                            mt-3
                            max-w-[550px]
                            text-sm
                            leading-6
                            text-[#8b99aa]
                          "
                        >
                          {course.description}
                        </p>
                      </div>
                    </div>

                    <span
                      className="
                        hidden
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#0757a8]/10
                        text-[#0757a8]
                        transition-all
                        duration-300
                        group-hover:bg-[#0757a8]
                        group-hover:text-white
                        md:flex
                      "
                    >
                      <ArrowUpRight size={16} />
                    </span>

                  </motion.a>
                );
              })}

            </div>
          </motion.div>

        </div>
      </section>


      {/* ==================================================
          TECHNOLOGY LAB
      ================================================== */}

      <section className="relative overflow-hidden bg-[#f7faff] py-28 sm:py-36">

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="
              mb-14
              flex
              flex-col
              gap-5
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <div>
              <span
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-[#0757a8]
                "
              >
                04 / Technology lab
              </span>

              <h2
                className="
                  mt-4
                  font-[Manrope]
                  text-4xl
                  font-extrabold
                  tracking-[-0.055em]
                  text-[#10243a]
                  sm:text-5xl
                "
              >
                Where ideas become systems.
              </h2>
            </div>

            <span className="font-mono text-[10px] tracking-[0.15em] text-[#8b99aa]">
              EXPLORE / EXPERIMENT / BUILD
            </span>
          </motion.div>


          <div className="relative min-h-[580px] overflow-hidden">

            {/* Image */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 1.05,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={viewport}
              transition={{
                duration: 1.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                absolute
                inset-0
                overflow-hidden
              "
            >
              <img
                src="/assets/common/home-cta.png"
                alt="Modern technology circuit board and electronic components"
                className="
                  h-full
                  w-full
                  object-cover
                "
              />

              <div className="absolute inset-0 bg-[#052f5f]/55" />

              <div className="absolute inset-0 bg-gradient-to-r from-[#052f5f]/90 via-[#052f5f]/35 to-transparent" />
            </motion.div>


            {/* Content */}
            <div className="relative z-10 flex min-h-[580px] items-end p-8 sm:p-12 lg:p-16">

              <div className="max-w-[700px]">

                <div className="mb-8 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#71b8f8]" />

                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/60">
                    Build beyond the classroom
                  </span>
                </div>

                <h3
                  className="
                    font-[Manrope]
                    text-[clamp(3rem,6vw,6.5rem)]
                    font-extrabold
                    leading-[0.9]
                    tracking-[-0.07em]
                    !text-white
                  "
                >
                  Code meets
                  <br />
                  the physical world.
                </h3>

                <p className="mt-7 max-w-[560px] text-base leading-7 text-white/60">
                  From artificial intelligence and software
                  engineering to robotics, IoT and embedded
                  systems — explore technology as something
                  you can actually build with.
                </p>

                <a
                  href="/courses"
                  className="
                    group
                    mt-8
                    inline-flex
                    items-center
                    gap-3
                    text-sm
                    font-bold
                    !text-white
                  "
                >
                  Explore our technology areas

                  <span
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/30
                      transition-all
                      duration-300
                      group-hover:bg-white
                      group-hover:text-[#0757a8]
                    "
                  >
                    <ArrowUpRight size={16} />
                  </span>
                </a>

              </div>
            </div>

            {/* Floating icon */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                right-10
                top-10
                z-20
                hidden
                h-32
                w-32
                rounded-full
                border
                border-white/20
                lg:block
              "
            >
              <div className="absolute inset-4 rounded-full border border-white/10" />

              <div className="absolute inset-0 flex items-center justify-center">
                <Cpu
                  size={26}
                  strokeWidth={1.4}
                  className="text-white/70"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ==================================================
          CAPABILITIES
      ================================================== */}

      <section className="bg-white py-28 sm:py-36">

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <span
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-[#0757a8]
                "
              >
                05 / IT solutions
              </span>

              <h2
                className="
                  mt-5
                  max-w-[600px]
                  font-[Manrope]
                  text-5xl
                  font-extrabold
                  leading-[0.92]
                  tracking-[-0.06em]
                  text-[#10243a]
                  sm:text-6xl
                "
              >
                From
                <br />
                <span className="text-[#0757a8]">
                  concept
                </span>
                <br />
                to reality.
              </h2>

              <p className="mt-7 max-w-[430px] text-sm leading-7 text-[#607086]">
                Our technology division works across software,
                intelligent systems and digital products to
                help turn ambitious ideas into useful,
                scalable solutions.
              </p>
            </motion.div>


            <div className="border-t border-[#0757a8]/10">

              {capabilities.map((item, index) => (
                <motion.a
                  key={item}
                  href="/contact"
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="
                    group
                    grid
                    grid-cols-[60px_1fr_auto]
                    items-center
                    gap-5
                    border-b
                    border-[#0757a8]/10
                    py-8
                  "
                >
                  <span className="font-mono text-[10px] text-[#8b99aa]">
                    0{index + 1}
                  </span>

                  <span
                    className="
                      font-[Manrope]
                      text-2xl
                      font-bold
                      tracking-[-0.035em]
                      text-[#10243a]
                      transition-colors
                      duration-300
                      group-hover:text-[#0757a8]
                      sm:text-3xl
                    "
                  >
                    {item}
                  </span>

                  <span
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#0757a8]/10
                      text-[#0757a8]
                      transition-all
                      duration-300
                      group-hover:bg-[#0757a8]
                      group-hover:text-white
                    "
                  >
                    <ArrowUpRight size={16} />
                  </span>
                </motion.a>
              ))}

            </div>

          </div>
        </div>
      </section>


      {/* ==================================================
          NUMBERS
      ================================================== */}

      <section className="relative overflow-hidden bg-[#0757a8] py-20">

        <div
          aria-hidden="true"
          className="
            absolute
            inset-0
            opacity-[0.12]
            [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">

          <div className="grid gap-10 sm:grid-cols-3">

            {[
              ["01", "Technology", "focused ecosystem"],
              ["02", "Practical", "learning approach"],
              ["03", "Kerala", "based technology team"],
            ].map(([number, title, description], index) => (
              <motion.div
                key={number}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{
                  delay: index * 0.1,
                }}
                className="
                  border-l
                  border-white/20
                  pl-6
                "
              >
                <span className="font-mono text-[9px] tracking-[0.2em] text-white/50">
                  {number}
                </span>

                <p
                  className="
                    mt-5
                    font-[Manrope]
                    text-3xl
                    font-extrabold
                    tracking-[-0.04em]
                    text-white
                  "
                >
                  {title}
                </p>

                <p className="mt-1 text-sm text-white/55">
                  {description}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>


      {/* ==================================================
          FINAL CTA
      ================================================== */}

      <section className="relative overflow-hidden bg-[#f7faff] py-32 sm:py-44">

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[700px]
            w-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-[#0757a8]/[0.06]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-[#0757a8]/[0.07]
          "
        />

        <motion.div
          variants={revealSlow}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="
            relative
            z-10
            mx-auto
            max-w-[1000px]
            px-6
            text-center
          "
        >

          <span
            className="
              font-mono
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-[#0757a8]
            "
          >
            06 / Start something
          </span>

          <h2
            className="
              mt-7
              font-[Manrope]
              text-[clamp(3.2rem,7vw,7.5rem)]
              font-extrabold
              leading-[0.87]
              tracking-[-0.075em]
              text-[#10243a]
            "
          >
            Have an idea?
            <br />

            <span className="text-[#0757a8]">
              Let's build it.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-[520px] text-base leading-7 text-[#607086]">
            Whether you want to learn technology, build a
            project or bring a digital idea to life, start a
            conversation with Planet IIT.
          </p>

          <a
            href="/contact"
            className="
              group
              mt-9
              inline-flex
              h-14
              items-center
              gap-3
              rounded-full
              bg-[#0757a8]
              px-7
              text-sm
              font-bold
              !text-white
              shadow-[0_18px_50px_rgba(7,87,168,0.2)]
              transition-all
              duration-300
              hover:bg-[#043b78]
              hover:shadow-[0_22px_60px_rgba(7,87,168,0.28)]
            "
          >
            Talk to Planet IIT

            <span
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-white/15
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              <ArrowUpRight
                size={15}
                className="text-white"
              />
            </span>
          </a>

        </motion.div>
      </section>

    </main>
  );
}