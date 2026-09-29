// src/pages/Courses.jsx

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  ChevronDown,
  Code2,
  Cpu,
  Database,
  GraduationCap,
  Layers3,
  Smartphone,
  Sparkles,
  Wrench,
} from "lucide-react";

import {
  courseCategories,
  enterpriseServices,
} from "../data/courses";


const reveal = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};


const courseIcons = {
  "full-stack-web": Code2,
  "mobile-software-engineering": Smartphone,
  "programming-languages": Layers3,
  "advanced-tech-analytics": Sparkles,
  "academic-project-assistance": GraduationCap,
  "embedded-iot-robotics": Cpu,
  "data-database-technology": Database,
  "ui-ux-design": Wrench,
};


function CourseRow({ track, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: index * 0.045,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        group
        grid grid-cols-[48px_1fr]
        gap-4
        border-t border-[#0757a8]/10
        py-5
        md:grid-cols-[56px_190px_1fr]
        md:gap-6
      "
    >
      <span
        className="
          font-mono text-[11px] font-bold
          tracking-[0.15em]
          text-[#0757a8]/45
        "
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <h3
        className="
          text-[15px] font-bold tracking-[-0.02em]
          text-[#10243a]
          transition-colors duration-300
          group-hover:text-[#0757a8]
        "
      >
        {track.name}
      </h3>

      <p
        className="
          col-start-2
          mt-1
          max-w-2xl
          text-[13px]
          leading-6
          text-[#607086]
          md:col-start-auto
          md:mt-0
        "
      >
        {track.detail}
      </p>
    </motion.div>
  );
}


function CourseSection({ course, index }) {
  const [open, setOpen] = useState(index === 0);

  const Icon = courseIcons[course.slug] || Code2;

  return (
    <motion.section
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      className="
        relative
        border-t border-[#0757a8]/12
        py-16
        md:py-20
        lg:py-24
      "
    >
      {/* Background index */}
      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-5
          hidden
          select-none
          font-mono
          text-[100px]
          font-bold
          leading-none
          tracking-[-0.08em]
          text-[#0757a8]/[0.035]
          lg:block
          xl:text-[150px]
        "
      >
        {course.index}
      </div>

      <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Left */}
        <div>
          <div className="mb-7 flex items-center gap-3">
            <div
              className="
                flex h-11 w-11
                items-center justify-center
                rounded-2xl
                border border-[#0757a8]/12
                bg-[#0757a8]/[0.045]
                text-[#0757a8]
              "
            >
              <Icon size={19} strokeWidth={1.8} />
            </div>

            <span
              className="
                font-mono text-[10px] font-bold
                uppercase tracking-[0.22em]
                text-[#0757a8]
              "
            >
              {course.eyebrow}
            </span>
          </div>

          <div className="mb-5 font-mono text-xs font-bold tracking-[0.2em] text-[#0757a8]/45">
            {course.index} / 08
          </div>

          <h2
            className="
              max-w-xl
              text-4xl
              font-extrabold
              leading-[0.98]
              tracking-[-0.055em]
              text-[#10243a]
              sm:text-5xl
              lg:text-[58px]
            "
          >
            {course.title}
          </h2>

          <p
            className="
              mt-6
              max-w-lg
              text-lg
              font-medium
              leading-7
              tracking-[-0.02em]
              text-[#0757a8]
            "
          >
            {course.tagline}
          </p>

          <p
            className="
              mt-5
              max-w-xl
              text-[14px]
              leading-7
              text-[#607086]
            "
          >
            {course.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span
              className="
                rounded-full
                border border-[#0757a8]/12
                bg-white
                px-4 py-2
                text-[11px]
                font-bold
                tracking-wide
                text-[#10243a]
              "
            >
              {course.format}
            </span>

            <span
              className="
                rounded-full
                border border-[#0757a8]/12
                bg-[#f7faff]
                px-4 py-2
                text-[11px]
                font-bold
                tracking-wide
                text-[#607086]
              "
            >
              {course.audience}
            </span>
          </div>
          <a
            href={`/courses/${course.slug}`}
            className="
    group
    mt-7
    inline-flex
    items-center
    gap-2
    rounded-full
    bg-[#0757a8]
    px-5
    py-3
    text-xs
    font-bold
    !text-white
    transition-all
    duration-300
    hover:-translate-y-0.5
    hover:bg-[#043b78]
    hover:!text-white
  "
          >
            Explore Full Course
            <ArrowUpRight
              size={14}
              className="
      transition-transform
      duration-300
      group-hover:translate-x-0.5
      group-hover:-translate-y-0.5
    "
            />
          </a>
        </div>

        {/* Right */}
        <div className="lg:pt-4">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="
              flex w-full
              items-center justify-between
              border-b border-[#0757a8]/12
              pb-5
              text-left
            "
          >
            <div>
              <span
                className="
                  block
                  font-mono
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#0757a8]
                "
              >
                Curriculum
              </span>

              <span
                className="
                  mt-1
                  block
                  text-sm
                  font-bold
                  text-[#10243a]
                "
              >
                {course.tracks.length} learning areas
              </span>
            </div>

            <motion.span
              animate={{
                rotate: open ? 180 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-full
                border border-[#0757a8]/12
                bg-white
                text-[#0757a8]
              "
            >
              <ChevronDown size={17} />
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: "auto",
                  opacity: 1,
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="overflow-hidden"
              >
                <div className="pt-2">
                  {course.tracks.map((track, trackIndex) => (
                    <CourseRow
                      key={track.name}
                      track={track}
                      index={trackIndex}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}


export default function Courses() {
  return (
    <main className="overflow-hidden bg-[#f7faff] text-[#10243a]">

      {/* =====================================================
          PAGE HERO
      ====================================================== */}
      <section className="relative px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28 lg:pt-40">
        {/* Technical background */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            bg-[linear-gradient(rgba(7,87,168,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(7,87,168,0.045)_1px,transparent_1px)]
            bg-[size:48px_48px]
            [mask-image:linear-gradient(to_bottom,black,transparent_90%)]
          "
        />

        <div className="relative mx-auto max-w-[1240px]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="max-w-5xl"
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#0757a8]" />

              <span
                className="
                  font-mono
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.24em]
                  text-[#0757a8]
                "
              >
                Planet IIT / Courses
              </span>
            </div>

            <h1
              className="
                max-w-5xl
                text-5xl
                font-extrabold
                leading-[0.94]
                tracking-[-0.065em]
                text-[#10243a]
                sm:text-6xl
                md:text-7xl
                lg:text-[92px]
              "
            >
              Learn the technology.
              <br />

              <span className="text-[#0757a8]">
                Build what matters.
              </span>
            </h1>

            <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
              <p
                className="
                  max-w-2xl
                  text-base
                  leading-7
                  text-[#607086]
                  sm:text-lg
                "
              >
                From full-stack development and mobile engineering to
                artificial intelligence, robotics and academic project
                development — Planet IIT brings practical technology
                education under one roof.
              </p>

              <div className="lg:border-l lg:border-[#0757a8]/15 lg:pl-7">
                <div className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#0757a8]">
                  Learning philosophy
                </div>

                <div className="mt-3 text-xl font-bold tracking-[-0.03em] text-[#10243a]">
                  Learn → Build → Present → Grow
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* =====================================================
          COURSE DIRECTORY INTRO
      ====================================================== */}
      <section className="px-5 pb-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1240px]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              grid
              gap-6
              border-y border-[#0757a8]/12
              py-7
              md:grid-cols-[1fr_auto]
              md:items-center
            "
          >
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#0757a8]">
                Course directory
              </span>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#607086]">
                Explore the technical disciplines, development tracks and
                academic support programmes available through Planet IIT.
              </p>
            </div>

            <div className="font-mono text-xs font-bold text-[#0757a8]">
              {String(courseCategories.length).padStart(2, "0")} PROGRAMMES
            </div>
          </motion.div>
        </div>
      </section>


      {/* =====================================================
          COURSES
      ====================================================== */}
      <section className="px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1240px]">
          {courseCategories.map((course, index) => (
            <CourseSection
              key={course.slug}
              course={course}
              index={index}
            />
          ))}
        </div>
      </section>


      {/* =====================================================
          ENTERPRISE IT SOLUTIONS
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#0757a8] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        {/* Decorative grid */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            opacity-[0.12]
            bg-[linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)]
            bg-[size:42px_42px]
          "
        />

        <div className="relative mx-auto max-w-[1240px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"
          >
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-white/70" />

                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-white/75">
                  Beyond the classroom
                </span>
              </div>

              <h2
                className="
                  max-w-xl
                  text-5xl
                  font-extrabold
                  leading-[0.95]
                  tracking-[-0.06em]
                  sm:text-6xl
                  !text-white
                "
              >
                Technology
                <br />
                for real
                <br />
                businesses.
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-white/70">
                Planet IIT is more than a technology academy. We also work
                with businesses and organisations to design, develop and
                implement practical IT solutions.
              </p>

              <a
                href="/contact"
                className="
                  group mt-8
                  inline-flex
                  items-center gap-3
                  rounded-full
                  bg-white
                  px-5 py-3.5
                  text-sm font-bold
                  !text-[#0757a8]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_14px_35px_rgba(0,0,0,0.18)]
                "
              >
                Discuss a project

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>

            <div className="lg:pt-5">
              {enterpriseServices.map((service, index) => (
                <motion.div
                  key={service.index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    group
                    grid
                    grid-cols-[55px_1fr]
                    gap-5
                    border-t
                    border-white/15
                    py-7
                    md:grid-cols-[70px_1fr]
                    md:gap-7
                  "
                >
                  <span className="font-mono text-xs font-bold text-white/45">
                    {service.index}
                  </span>

                  <div>
                    <h3
                      className="
                        text-xl
                        font-bold
                        tracking-[-0.03em]
                        !text-white
                        transition-transform duration-300
                        group-hover:translate-x-1
                      "
                    >
                      {service.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-white/65">
                      {service.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            mx-auto
            max-w-[1240px]
            border-b border-[#0757a8]/12
            pb-16
          "
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#0757a8]">
                Start your next chapter
              </span>

              <h2
                className="
                  mt-4
                  max-w-4xl
                  text-4xl
                  font-extrabold
                  leading-[0.98]
                  tracking-[-0.055em]
                  text-[#10243a]
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Don't just study technology.
                <span className="text-[#0757a8]">
                  {" "}
                  Build with it.
                </span>
              </h2>
            </div>

            <a
              href="/contact"
              className="
                group
                inline-flex
                w-fit
                items-center
                gap-3
                rounded-full
                bg-[#0757a8]
                px-6 py-4
                text-sm
                font-bold
                !text-white
                shadow-[0_10px_30px_rgba(7,87,168,0.16)]
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-[#043b78]
                hover:!text-white
                hover:shadow-[0_15px_35px_rgba(7,87,168,0.22)]
              "
            >
              Talk to Planet IIT

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </motion.div>
      </section>

    </main>
  );
}