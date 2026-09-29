import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Cpu,
  Lightbulb,
  Network,
  Quote,
} from "lucide-react";

import { motion } from "motion/react";
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

      <section className="relative overflow-hidden bg-[#f7faff] py-28 sm:py-36">

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">


          {/* Heading */}

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="
              mb-16
              grid
              gap-8
              lg:grid-cols-[0.7fr_1.3fr]
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
                04 / Leadership
              </span>

            </div>


            <div>

              <h2
                className="
                  max-w-[850px]
                  font-[Manrope]
                  text-4xl
                  font-extrabold
                  leading-[0.95]
                  tracking-[-0.055em]
                  text-[#10243a]
                  sm:text-6xl
                "
              >
                The people
                <br />
                behind the
                <span className="text-[#0757a8]">
                  {" "}planet.
                </span>
              </h2>

              <p
                className="
                  mt-7
                  max-w-[600px]
                  text-base
                  leading-7
                  text-[#607086]
                "
              >
                Planet IIT is shaped by people who connect
                technology, education and execution — bringing
                different perspectives together to move ideas
                forward.
              </p>

            </div>

          </motion.div>


          {/* Team */}

          <div className="border-t border-[#0757a8]/10">

            {leadership.map((person, index) => (

              <motion.article
                key={person.code}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{
                  delay: index * 0.1,
                }}
                className="
                  group
                  grid
                  gap-8
                  border-b
                  border-[#0757a8]/10
                  py-10
                  lg:grid-cols-[90px_270px_1fr_auto]
                  lg:items-center
                  lg:gap-10
                "
              >

                {/* Code */}

                <div className="flex items-center gap-3 lg:block">

                  <span
                    className="
                      font-mono
                      text-[10px]
                      tracking-[0.2em]
                      text-[#8b99aa]
                    "
                  >
                    {person.code}
                  </span>

                  <span className="h-px w-8 bg-[#0757a8]/20 lg:mt-5 lg:block" />

                </div>


                {/* Portrait */}

                <div
                  className="
                    relative
                    h-[270px]
                    overflow-hidden
                    bg-[#e7f0f9]
                    lg:h-[320px]
                  "
                >

                  {person.photo ? (

                    <img
                      src={person.photo}
                      alt={`${person.name}, ${person.role} at Planet IIT`}
                      className="
                        h-full
                        w-full
                        object-cover
                        grayscale-[15%]
                        transition-all
                        duration-700
                        group-hover:scale-105
                        group-hover:grayscale-0
                      "
                    />

                  ) : (

                    <div
                      className="
                        relative
                        flex
                        h-full
                        w-full
                        items-center
                        justify-center
                        overflow-hidden
                        bg-gradient-to-br
                        from-[#dbeafa]
                        via-[#eef5fc]
                        to-[#cbdff2]
                      "
                    >

                      {/* decorative rings */}

                      <div
                        className="
                          absolute
                          h-56
                          w-56
                          rounded-full
                          border
                          border-[#0757a8]/10
                        "
                      />

                      <div
                        className="
                          absolute
                          h-40
                          w-40
                          rounded-full
                          border
                          border-[#0757a8]/10
                        "
                      />

                      <div className="relative text-center">

                        <span
                          className="
                            block
                            font-[Manrope]
                            text-6xl
                            font-extrabold
                            tracking-[-0.07em]
                            text-[#0757a8]
                          "
                        >
                          {person.code}
                        </span>

                        <span
                          className="
                            mt-2
                            block
                            font-mono
                            text-[8px]
                            uppercase
                            tracking-[0.2em]
                            text-[#607086]
                          "
                        >
                          Planet IIT
                        </span>

                      </div>

                    </div>
                  )}

                  {/* Image index */}

                  <span
                    className="
                      absolute
                      bottom-4
                      left-4
                      font-mono
                      text-[9px]
                      text-[#607086]
                    "
                  >
                    0{index + 1}
                  </span>

                </div>


                {/* Information */}

                <div>

                  <p
                    className="
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-[#0757a8]
                    "
                  >
                    {person.role}
                  </p>


                  <h3
                    className="
                      mt-3
                      font-[Manrope]
                      text-3xl
                      font-extrabold
                      tracking-[-0.045em]
                      text-[#10243a]
                      transition-colors
                      duration-300
                      group-hover:text-[#0757a8]
                      sm:text-4xl
                    "
                  >
                    {person.name}
                  </h3>


                  <p
                    className="
                      mt-5
                      max-w-[600px]
                      text-sm
                      leading-7
                      text-[#607086]
                    "
                  >
                    {person.bio}
                  </p>


                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">

                    <a
                      href={`mailto:${person.email}`}
                      className="
                        text-xs
                        font-medium
                        text-[#607086]
                        transition-colors
                        hover:text-[#0757a8]
                      "
                    >
                      {person.email}
                    </a>

                    <a
                      href={`tel:${person.phone.replace(/\s/g, "")}`}
                      className="
                        text-xs
                        font-medium
                        text-[#607086]
                        transition-colors
                        hover:text-[#0757a8]
                      "
                    >
                      {person.phone}
                    </a>

                  </div>

                </div>


                {/* Arrow */}

                <a
                  href={`mailto:${person.email}`}
                  aria-label={`Contact ${person.name}`}
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#0757a8]/15
                    text-[#0757a8]
                    transition-all
                    duration-300
                    group-hover:bg-[#0757a8]
                    group-hover:!text-white
                    lg:self-center
                  "
                >
                  <ArrowUpRight size={18} />

                </a>

              </motion.article>

            ))}

          </div>

        </div>
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