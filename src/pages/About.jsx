import { useState, useEffect } from "react";
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Cpu,
  Lightbulb,
  Network,
  Quote,
  Mail,
  Phone,
  Check,
  Copy,
  Sparkles,
  ShieldCheck,
  X,
  ExternalLink,
  Briefcase,
  Building2,
  ChevronRight,
} from "lucide-react";

import { motion, AnimatePresence } from "motion/react";
import { leadership } from "../data/team";



/* ======================================================
   Animations
====================================================== */

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
  amount: 0.18,
};


/* ======================================================
   About Page
====================================================== */

export default function About() {
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedLeader(null);
      }
    };
    if (selectedLeader) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedLeader]);

  const handleCopyEmail = (email, e) => {
    e?.stopPropagation?.();
    e?.preventDefault?.();
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(email);
    }
    setCopiedEmail(email);
    setTimeout(() => {
      setCopiedEmail(null);
    }, 2200);
  };

  return (
    <main className="overflow-hidden bg-[#f7faff]">


      {/* ==================================================
          PAGE HERO
      ================================================== */}

      <section className="relative overflow-hidden pt-36 pb-20 sm:pt-40 sm:pb-24">

        {/* Grid */}
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

        {/* Glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-[-10%]
            top-[10%]
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#1475d1]/10
            blur-[120px]
          "
        />

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">

          <div className="grid items-end gap-12 lg:grid-cols-[1fr_0.65fr]">

            {/* Heading */}

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
            >

              <div className="mb-7 flex items-center gap-3">

                <span className="h-px w-9 bg-[#0757a8]" />

                <span
                  className="
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-[#0757a8]
                  "
                >
                  About Planet IIT
                </span>

              </div>


              <h1
                className="
                  max-w-[900px]
                  font-[Manrope]
                  text-[clamp(3.5rem,7vw,7rem)]
                  font-extrabold
                  leading-[0.88]
                  tracking-[-0.075em]
                  text-[#10243a]
                "
              >
                Technology
                <br />

                <span className="text-[#0757a8]">
                  with purpose.
                </span>
              </h1>

            </motion.div>


            {/* Hero description */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="lg:pb-2"
            >

              <p
                className="
                  max-w-[470px]
                  text-base
                  leading-8
                  text-[#607086]
                  sm:text-lg
                "
              >
                Planet Institute and Information Technology
                brings technology education and practical IT
                solutions together under one ecosystem.
              </p>

              <div className="mt-8 flex items-center gap-3">

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0757a8] text-white">
                  <ArrowUpRight size={17} />
                </span>

                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8b99aa]">
                  Erattupetta · Kerala · India
                </span>

              </div>

            </motion.div>

          </div>


          {/* Bottom line */}

          <motion.div
            initial={{
              scaleX: 0,
            }}
            animate={{
              scaleX: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              mt-16
              h-px
              origin-left
              bg-[#0757a8]/15
            "
          />

        </div>
      </section>


      {/* ==================================================
          INTRODUCTION
      ================================================== */}

      <section className="bg-white py-28 sm:py-36">

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

          <motion.div
            variants={revealSlow}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="
              grid
              gap-14
              lg:grid-cols-[0.55fr_1.45fr]
            "
          >

            {/* Label */}

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
                01 / Our story
              </span>

            </div>


            {/* Main content */}

            <div>

              <h2
                className="
                  max-w-[1050px]
                  font-[Manrope]
                  text-[clamp(2.5rem,5vw,5.4rem)]
                  font-bold
                  leading-[0.98]
                  tracking-[-0.06em]
                  text-[#10243a]
                "
              >
                We exist to make
                technology more
                <span className="text-[#0757a8]">
                  {" "}accessible,
                </span>
                practical and
                meaningful.
              </h2>


              <div
                className="
                  mt-12
                  grid
                  gap-10
                  md:grid-cols-2
                "
              >

                <p
                  className="
                    text-base
                    leading-8
                    text-[#607086]
                  "
                >
                  Planet IIT is built around a simple idea:
                  technology becomes more powerful when people
                  understand how to create with it.
                </p>

                <p
                  className="
                    text-base
                    leading-8
                    text-[#607086]
                  "
                >
                  Our academy focuses on practical technology
                  education, while our IT division works on
                  real-world software, intelligent systems,
                  automation and digital solutions.
                </p>

              </div>

            </div>

          </motion.div>

        </div>
      </section>


      {/* ==================================================
          IMAGE + PHILOSOPHY
      ================================================== */}

      <section className="bg-[#eef5fc] py-24 sm:py-32">

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

          <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr]">


            {/* Image */}

            <motion.div
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={viewport}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                relative
                min-h-[520px]
              "
            >

              <div
                className="
                  absolute
                  left-[5%]
                  top-[5%]
                  h-[88%]
                  w-[78%]
                  overflow-hidden
                  rounded-[2rem]
                  shadow-[0_30px_80px_rgba(7,87,168,0.12)]
                "
              >

                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=85"
                  alt="Students learning and collaborating in a modern technology classroom"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-[1.5s]
                    hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#052f5f]/30 to-transparent" />

              </div>


              {/* Floating detail */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  bottom-[3%]
                  right-[2%]
                  z-20
                  flex
                  h-36
                  w-36
                  flex-col
                  justify-center
                  rounded-full
                  border
                  border-[#0757a8]/15
                  bg-white
                  px-6
                  shadow-[0_20px_60px_rgba(7,87,168,0.14)]
                "
              >

                <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#8b99aa]">
                  Philosophy
                </span>

                <span
                  className="
                    mt-2
                    font-[Manrope]
                    text-lg
                    font-extrabold
                    leading-tight
                    tracking-[-0.04em]
                    text-[#10243a]
                  "
                >
                  Learn.
                  <br />
                  Experiment.
                  <br />
                  Build.
                </span>

              </motion.div>

            </motion.div>


            {/* Philosophy */}

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
                02 / Our approach
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
                Education should
                <br />
                move with
                <br />
                <span className="text-[#0757a8]">
                  technology.
                </span>
              </h2>


              <p
                className="
                  mt-7
                  max-w-[500px]
                  text-base
                  leading-8
                  text-[#607086]
                "
              >
                Technology changes quickly. So should the
                way we learn it. We combine structured
                fundamentals with project-based exploration
                so learners can understand not only how
                something works, but why it matters.
              </p>


              <div
                className="
                  mt-10
                  grid
                  grid-cols-2
                  gap-5
                "
              >

                <div className="border-t border-[#0757a8]/15 pt-4">
                  <Code2
                    size={20}
                    className="text-[#0757a8]"
                  />

                  <p className="mt-3 text-sm font-bold text-[#10243a]">
                    Practical
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#8b99aa]">
                    Learn through real projects.
                  </p>
                </div>


                <div className="border-t border-[#0757a8]/15 pt-4">
                  <BrainCircuit
                    size={20}
                    className="text-[#0757a8]"
                  />

                  <p className="mt-3 text-sm font-bold text-[#10243a]">
                    Future-focused
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#8b99aa]">
                    Explore emerging technology.
                  </p>
                </div>

              </div>

            </motion.div>

          </div>

        </div>
      </section>


      {/* ==================================================
          ACADEMY + IT DNA
      ================================================== */}

      <section className="bg-white py-28 sm:py-36">

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mb-16 max-w-[850px]"
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
              03 / What drives us
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
                sm:text-6xl
              "
            >
              Learn it.
              Build it.
              <span className="text-[#0757a8]">
                {" "}Improve it.
              </span>
            </h2>

          </motion.div>


          <div className="grid border-t border-[#0757a8]/10 md:grid-cols-3">

            {[
              {
                number: "01",
                icon: Lightbulb,
                title: "Curiosity",
                text: "We encourage people to question, explore and understand how technology works beneath the surface.",
              },

              {
                number: "02",
                icon: Network,
                title: "Connection",
                text: "Education and real-world technology development should continuously influence one another.",
              },

              {
                number: "03",
                icon: Cpu,
                title: "Creation",
                text: "The real measure of learning is what you can create, solve and improve with what you know.",
              },
            ].map((item, index) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="
                    group
                    border-b
                    border-[#0757a8]/10
                    p-8
                    md:border-b-0
                    md:border-r
                    md:p-10
                    lg:p-12
                    last:border-r-0
                  "
                >

                  <div className="flex items-start justify-between">

                    <span className="font-mono text-[10px] text-[#8b99aa]">
                      {item.number}
                    </span>

                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      className="
                        text-[#0757a8]
                        transition-transform
                        duration-500
                        group-hover:scale-110
                      "
                    />

                  </div>


                  <h3
                    className="
                      mt-20
                      font-[Manrope]
                      text-3xl
                      font-extrabold
                      tracking-[-0.045em]
                      text-[#10243a]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      max-w-[340px]
                      text-sm
                      leading-7
                      text-[#607086]
                    "
                  >
                    {item.text}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>
      </section>


      {/* ==================================================
          LEADERSHIP
      ================================================== */}

      <section id="leadership" className="relative overflow-hidden bg-gradient-to-b from-[#f7faff] via-[#edf5fd]/70 to-[#f7faff] py-24 sm:py-32 lg:py-36">

        {/* Technical background grid */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.45]
            [background-image:linear-gradient(rgba(7,87,168,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(7,87,168,0.035)_1px,transparent_1px)]
            [background-size:64px_64px]
          "
        />

        {/* Ambient atmospheric glows */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-20
            top-10
            h-[550px]
            w-[550px]
            rounded-full
            bg-[#1475d1]/10
            blur-[140px]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -left-20
            bottom-20
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#0757a8]/8
            blur-[130px]
          "
        />

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">

          {/* Section Header */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mb-16 sm:mb-20"
          >
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                {/* <div className="inline-flex items-center gap-2.5 rounded-full border border-[#0757a8]/15 bg-white/90 px-4 py-1.5 shadow-xs backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0757a8] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0757a8]" />
                  </span>
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-[#0757a8] sm:text-[11px]">
                    04 // Executive Leadership
                  </span>
                </div> */}

                <span
                  className="
                font-mono
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-[#0757a8]
              "
                >
                    04 / Executive Leadership
                </span>


                <h2 className="mt-6 font-[Manrope] text-3xl font-extrabold leading-[1.02] tracking-[-0.05em] text-[#10243a] sm:text-5xl lg:text-6xl">
                  The people behind
                  <br />
                  the{" "}
                  <span className="relative inline-block text-[#0757a8]">
                    planet.
                    <svg
                      aria-hidden="true"
                      className="absolute -bottom-2 left-0 w-full text-[#1475d1]/30"
                      viewBox="0 0 250 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 9C60 3 190 3 247 9"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h2>
              </div>

              <div>
                <p className="max-w-[620px] text-base leading-relaxed text-[#5a6c82] sm:text-lg">
                  Planet IIT is shaped by people who connect technology, education,
                  and real-world execution — bringing multi-disciplinary perspectives
                  together to build high-grade IT solutions and empower future builders.
                </p>

                {/* Focus areas pills */}
                <div className="mt-8 flex flex-wrap items-center gap-2.5 border-t border-[#0757a8]/12 pt-6">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#8b99aa]">
                    Pillars:
                  </span>
                  {[
                    "Enterprise Strategy",
                    "Deep-Tech Architecture",
                    "Academic Governance",
                    "Student Outcomes",
                  ].map((pillar) => (
                    <span
                      key={pillar}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#0757a8]/10 bg-white/90 px-3 py-1 text-xs font-medium text-[#10243a] shadow-xs"
                    >
                      <span className="h-1 w-1 rounded-full bg-[#0757a8]" />
                      {pillar}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Executive Cards Grid */}
          <div className="grid grid-cols-1 gap-7 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {leadership.map((person, index) => (
              <motion.article
                key={person.code}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{
                  delay: index * 0.12,
                }}
                className="
                  group
                  relative
                  flex
                  flex-col
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-[#0757a8]/12
                  bg-white
                  shadow-[0_12px_40px_rgba(7,87,168,0.06)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#0757a8]/35
                  hover:shadow-[0_28px_70px_rgba(7,87,168,0.16)]
                  sm:rounded-[32px]
                "
              >
                {/* Top subtle radiant shimmer */}
                <div className="h-1 w-full bg-gradient-to-r from-[#0757a8] via-[#1475d1] to-[#71b8f8] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Portrait Frame */}
                <div className="p-3.5 pb-0 sm:p-4 sm:pb-0">
                  <div className="relative h-[310px] w-full overflow-hidden rounded-[20px] bg-[#dbe8f6] sm:h-[350px] lg:h-[370px]">
                    {person.photo ? (
                      <img
                        src={person.photo}
                        alt={`${person.name}, ${person.role} at Planet IIT`}
                        style={{ objectPosition: person.objectPosition || "center 20%" }}
                        className="
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-700
                          ease-out
                          group-hover:scale-105
                        "
                        loading="lazy"
                      />
                    ) : (
                      <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-[#dbeafa] via-[#eef5fc] to-[#cbdff2]">
                        <span className="font-[Manrope] text-6xl font-extrabold text-[#0757a8]">
                          {person.code}
                        </span>
                      </div>
                    )}

                    {/* Gradient Overlay for high-contrast text */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06182e]/90 via-[#06182e]/35 to-transparent" />

                    {/* Top Badges */}
                    <div className="pointer-events-none absolute left-3.5 right-3.5 top-3.5 flex items-center justify-between">
                      <div className="inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/90 px-3 py-1 shadow-sm backdrop-blur-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#0757a8]" />
                        <span className="font-mono text-[10px] font-bold tracking-widest text-[#0757a8]">
                          {person.code}
                        </span>
                      </div>

                      <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-[#06182e]/50 font-mono text-[10px] font-medium text-white backdrop-blur-md">
                        0{index + 1}
                      </div>
                    </div>

                    {/* Bottom Info on Photo */}
                    <div className="pointer-events-none absolute bottom-4 left-4 right-4">
                      <p className="mb-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#71b8f8] drop-shadow-sm">
                        {person.role}
                      </p>
                      <h3 className="font-[Manrope] text-xl font-bold leading-tight tracking-tight !text-white drop-shadow-sm sm:text-2xl">
                        {person.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="flex flex-1 flex-col justify-between gap-5 bg-white p-5 sm:p-6">
                  {/* Focus Expertise Tags & Bio */}
                  <div>
                    <div className="mb-3 flex flex-wrap gap-1.5">
                      {person.expertise?.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-md border border-[#0757a8]/10 bg-[#0757a8]/6 px-2.5 py-1 text-[11px] font-semibold text-[#0757a8]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-[13.5px] leading-relaxed text-[#516377]">
                      {person.bio}
                    </p>
                  </div>

                  {/* Quote / Leadership Motto */}
                  {person.quote && (
                    <div className="relative rounded-xl border border-l-4 border-[#0757a8]/10 border-l-[#0757a8] bg-[#f4f8fd] p-3 sm:p-3.5">
                      <Quote
                        size={13}
                        className="mb-1 inline-block -scale-x-100 text-[#0757a8]/50"
                      />
                      <p className="text-[12px] italic leading-snug text-[#10243a]/80">
                        "{person.quote}"
                      </p>
                    </div>
                  )}

                  {/* Interactive Action & Contact Bar */}
                  <div className="flex flex-col gap-2.5 border-t border-[#0757a8]/10 pt-4">
                    {/* Quick Contact Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      {/* Email with copy action */}
                      <div className="relative">
                        <a
                          href={`mailto:${person.email}`}
                          className="
                            flex
                            h-10
                            w-full
                            items-center
                            justify-start
                            gap-1.5
                            rounded-xl
                            border
                            border-[#0757a8]/15
                            bg-[#f8fbfe]
                            px-3
                            text-xs
                            font-semibold
                            text-[#10243a]
                            transition-all
                            duration-200
                            hover:border-[#0757a8]
                            hover:bg-white
                            hover:text-[#0757a8]
                          "
                          title={`Email ${person.name}`}
                        >
                          <Mail size={14} className="shrink-0 text-[#0757a8]" />
                          <span
                            className={`truncate ${copiedEmail === person.email
                                ? "font-bold text-emerald-600"
                                : ""
                              }`}
                          >
                            {copiedEmail === person.email ? "Copied!" : "Email"}
                          </span>
                        </a>

                        <button
                          type="button"
                          onClick={(e) => handleCopyEmail(person.email, e)}
                          aria-label={`Copy email for ${person.name}`}
                          className="
                            absolute
                            right-1
                            top-1
                            flex
                            h-8
                            w-8
                            items-center
                            justify-center
                            rounded-lg
                            text-[#8b99aa]
                            transition-colors
                            hover:bg-[#0757a8]/10
                            hover:text-[#0757a8]
                          "
                        >
                          {copiedEmail === person.email ? (
                            <Check size={13} className="text-emerald-600" />
                          ) : (
                            <Copy size={12} />
                          )}
                        </button>
                      </div>

                      {/* Call Button */}
                      <a
                        href={`tel:${person.phone.replace(/\s/g, "")}`}
                        className="
                          flex
                          h-10
                          items-center
                          justify-center
                          gap-1.5
                          rounded-xl
                          border
                          border-[#0757a8]/15
                          bg-[#f8fbfe]
                          px-2.5
                          text-xs
                          font-semibold
                          text-[#10243a]
                          transition-all
                          duration-200
                          hover:border-[#0757a8]
                          hover:bg-white
                          hover:text-[#0757a8]
                        "
                        title={`Call ${person.name}`}
                      >
                        <Phone size={14} className="shrink-0 text-[#0757a8]" />
                        <span className="truncate">Call Direct</span>
                      </a>
                    </div>

                    {/* View Profile Dossier Trigger */}
                    <button
                      type="button"
                      onClick={() => setSelectedLeader(person)}
                      className="
                        group/btn
                        flex
                        h-11
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-[#0757a8]/8
                        text-xs
                        font-semibold
                        text-[#0757a8]
                        transition-all
                        duration-300
                        hover:bg-[#0757a8]
                        hover:text-white
                      "
                    >
                      <span>View Executive Profile</span>
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                      />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Mentorship & Governance Trust Banner */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="
              mt-14
              flex
              flex-col
              items-center
              justify-between
              gap-6
              rounded-[24px]
              border
              border-[#0757a8]/12
              bg-white
              p-6
              shadow-[0_10px_30px_rgba(7,87,168,0.04)]
              sm:mt-16
              sm:p-8
              md:flex-row
            "
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0757a8]/10 text-[#0757a8]">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-[Manrope] text-base font-bold text-[#10243a] sm:text-lg">
                  Direct Mentorship & Executive Governance
                </h4>
                <p className="text-xs text-[#607086] sm:text-sm">
                  Every academy cohort and enterprise build is personally guided by leadership — ensuring high-standard delivery and ethical execution.
                </p>
              </div>
            </div>

            <a
              href="/contact"
              className="
                group
                inline-flex
                shrink-0
                items-center
                gap-2
                rounded-full
                bg-[#0757a8]
                px-6
                py-3
                text-xs
                font-bold
                !text-white
                shadow-md
                transition-all
                duration-300
                hover:bg-[#043b78]
                hover:shadow-lg
                sm:text-sm
              "
            >
              <span>Connect with Leadership</span>
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>

        </div>

        {/* Executive Dossier Modal */}
        <AnimatePresence>
          {selectedLeader && (
            <div className="fixed inset-0 z-100 flex items-center justify-center overflow-y-auto p-4 sm:p-6">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedLeader(null)}
                className="fixed inset-0 bg-[#06182e]/65 backdrop-blur-md"
              />

              {/* Dialog Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 20 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="
                  relative
                  z-10
                  my-8
                  max-h-[90vh]
                  w-full
                  max-w-2xl
                  overflow-y-auto
                  rounded-[28px]
                  border
                  border-[#0757a8]/20
                  bg-white
                  shadow-2xl
                  sm:rounded-[32px]
                "
              >
                {/* Top Accent bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-[#0757a8] via-[#1475d1] to-[#71b8f8]" />

                {/* Modal Header */}
                <div className="relative border-b border-[#0757a8]/10 bg-gradient-to-b from-[#f7faff] to-white p-6 pb-6 sm:p-8">
                  {/* Close button */}
                  <button
                    type="button"
                    onClick={() => setSelectedLeader(null)}
                    aria-label="Close dialog"
                    className="
                      absolute
                      right-5
                      top-5
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-slate-100
                      text-[#556980]
                      transition-colors
                      hover:bg-slate-200
                      hover:text-[#10243a]
                    "
                  >
                    <X size={18} />
                  </button>

                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-2 border-white bg-slate-100 shadow-md">
                      <img
                        src={selectedLeader.photo}
                        alt={selectedLeader.name}
                        style={{ objectPosition: selectedLeader.objectPosition || "center 20%" }}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="min-w-0 pr-8">
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0757a8]/10 px-2.5 py-0.5 font-mono text-[10px] font-bold text-[#0757a8]">
                        {selectedLeader.code} // {selectedLeader.department}
                      </div>
                      <h3 className="mt-1.5 font-[Manrope] text-2xl font-extrabold text-[#10243a] sm:text-3xl">
                        {selectedLeader.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#0757a8] sm:text-sm">
                        {selectedLeader.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="space-y-6 p-6 sm:p-8">
                  {/* Philosophy Quote */}
                  {selectedLeader.quote && (
                    <div className="rounded-2xl border border-[#0757a8]/15 bg-[#f4f8fd] p-4 sm:p-5">
                      <Quote
                        size={18}
                        className="mb-1.5 -scale-x-100 text-[#0757a8]/40"
                      />
                      <p className="text-sm font-medium italic leading-relaxed text-[#10243a]">
                        "{selectedLeader.quote}"
                      </p>
                    </div>
                  )}

                  {/* Overview */}
                  <div>
                    <h4 className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8b99aa]">
                      Mandate & Executive Overview
                    </h4>
                    <p className="text-sm leading-relaxed text-[#4d5e73]">
                      {selectedLeader.bio}
                    </p>
                  </div>

                  {/* Key Highlights */}
                  {selectedLeader.highlights && (
                    <div>
                      <h4 className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8b99aa]">
                        Key Responsibilities & Strategic Focus
                      </h4>
                      <div className="space-y-2.5">
                        {selectedLeader.highlights.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 text-xs text-[#2c3e50] sm:text-sm"
                          >
                            <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#0757a8]/10 text-[#0757a8]">
                              <Check size={10} strokeWidth={3} />
                            </div>
                            <span className="leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Expertise tags */}
                  <div>
                    <h4 className="mb-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8b99aa]">
                      Core Competencies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedLeader.expertise?.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-lg border border-[#0757a8]/15 bg-[#0757a8]/8 px-3 py-1.5 text-xs font-semibold text-[#0757a8]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Direct Contact Options */}
                  <div className="rounded-2xl border border-[#0757a8]/15 bg-[#f7faff] p-4 sm:p-5">
                    <h4 className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8b99aa]">
                      Direct Executive Reach
                    </h4>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div className="flex items-center justify-between rounded-xl border border-[#0757a8]/12 bg-white p-3 transition-colors hover:border-[#0757a8]">
                        <a
                          href={`mailto:${selectedLeader.email}`}
                          className="flex min-w-0 flex-1 items-center gap-3"
                        >
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0757a8]/10 text-[#0757a8]">
                            <Mail size={16} />
                          </div>
                          <div className="min-w-0">
                            <p className="font-mono text-[10px] uppercase text-[#8b99aa]">
                              Email
                            </p>
                            <p className="truncate text-xs font-bold text-[#10243a]">
                              {selectedLeader.email}
                            </p>
                          </div>
                        </a>

                        <button
                          type="button"
                          onClick={(e) => handleCopyEmail(selectedLeader.email, e)}
                          aria-label="Copy email address"
                          className="ml-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[#8b99aa] transition-colors hover:bg-[#0757a8]/10 hover:text-[#0757a8]"
                        >
                          {copiedEmail === selectedLeader.email ? (
                            <Check size={14} className="text-emerald-600" />
                          ) : (
                            <Copy size={13} />
                          )}
                        </button>
                      </div>

                      <a
                        href={`tel:${selectedLeader.phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-3 rounded-xl border border-[#0757a8]/12 bg-white p-3 transition-colors hover:border-[#0757a8]"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0757a8]/10 text-[#0757a8]">
                          <Phone size={16} />
                        </div>
                        <div className="min-w-0">
                          <p className="font-mono text-[10px] uppercase text-[#8b99aa]">
                            Phone
                          </p>
                          <p className="truncate text-xs font-bold text-[#10243a]">
                            {selectedLeader.phone}
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50 p-4 sm:p-6">
                  <span className="font-mono text-[10px] text-[#8b99aa]">
                    Planet IIT · Erattupetta Campus
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedLeader(null)}
                    className="rounded-full bg-[#10243a] px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#0757a8]"
                  >
                    Close Profile
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </section>


      {/* ==================================================
          CLOSING STATEMENT
      ================================================== */}

      <section className="relative overflow-hidden bg-[#eef5fc] py-28 sm:py-40">

        {/* Background grid */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.08]
            [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
            [background-size:80px_80px]
          "
        />


        {/* Glow */}

        <div
          aria-hidden="true"
          className="
            absolute
            right-[-10%]
            top-[-40%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#1475d1]/25
            blur-[130px]
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
            max-w-[1100px]
            px-6
            text-center
          "
        >

          <Quote
            size={30}
            strokeWidth={1.4}
            className="mx-auto text-[#71b8f8]"
          />


          <h2
            className="
              mt-8
              font-[Manrope]
              text-[clamp(2.8rem,6vw,6rem)]
              font-extrabold
              leading-[0.9]
              tracking-[-0.07em]
              text-white
            "
          >
            The future belongs
            <br />
            to people who
            <br />
            <span className="text-[#71b8f8]">
              build it.
            </span>
          </h2>


          {/* <p
            className="
              mx-auto
              mt-8
              max-w-[600px]
              text-base
              leading-7
              text-white/55
            "
          >
            Whether you're beginning your technology journey
            or turning an ambitious idea into reality, Planet
            IIT is here to help you move forward.
          </p> */}


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
              bg-white
              px-7
              text-sm
              font-bold
              text-[#0757a8]
              transition-all
              duration-300
              hover:bg-[#71b8f8]
              hover:text-[#052f5f]
            "
          >
            Start a conversation

            <ArrowUpRight
              size={17}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />

          </a>

        </motion.div>

      </section>

    </main>
  );
}