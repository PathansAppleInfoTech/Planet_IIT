import { NavLink } from 'react-router-dom'
import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { useRef } from 'react'
import './Home.css'
import Reveal from '../components/Reveal.jsx'

import {
  courseCategories,
  enterpriseServices,
} from '../data/courses.js'

import heroImage from '../assets/planet-hero.png'
import codingImage from '../assets/coding-lab.png'
import roboticsImage from '../assets/robotics-lab.png'
import studentsImage from '../assets/students-lab.png'


const ease = [0.16, 1, 0.3, 1]


export default function Home() {

  return (
    <main className="planet-home">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="home-hero">

        <div className="hero-blue-wash" />
        <div className="hero-technical-grid" />
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />

        <div className="container">

          <div className="home-hero-layout">

            {/* LEFT */}

            <div className="home-hero-copy">

              <motion.div
                className="hero-eyebrow"
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: .7,
                  ease,
                }}
              >

                <span className="hero-eyebrow-line" />

                <span>
                  PLANET INSTITUTE & INFORMATION TECHNOLOGY
                </span>

                <span className="hero-eyebrow-location">
                  KERALA / INDIA
                </span>

              </motion.div>


              <motion.h1
                className="home-hero-title"
                initial={{
                  opacity: 0,
                  y: 55,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: .12,
                  ease,
                }}
              >

                Technology
                <br />

                <span className="hero-title-blue">
                  with purpose.
                </span>

              </motion.h1>


              <motion.p
                className="home-hero-description"
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: .8,
                  delay: .35,
                  ease,
                }}
              >
                Planet IIT brings together technology education
                and practical IT solutions — helping people learn
                modern technology while helping businesses turn
                ideas into working digital systems.
              </motion.p>


              <motion.div
                className="home-hero-actions"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: .8,
                  delay: .5,
                  ease,
                }}
              >

                <NavLink
                  to="/courses"
                  className="premium-blue-button"
                >
                  <span>
                    Explore the academy
                  </span>

                  <strong>
                    ↗
                  </strong>
                </NavLink>


                <NavLink
                  to="/contact"
                  className="premium-text-button"
                >
                  Start a project
                  <span>→</span>
                </NavLink>

              </motion.div>


              {/* HERO DATA */}

              <motion.div
                className="hero-data-row"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: .8,
                  delay: .7,
                }}
              >

                <div>
                  <span>01</span>
                  <strong>LEARN</strong>
                  <small>Industry-focused training</small>
                </div>

                <div>
                  <span>02</span>
                  <strong>BUILD</strong>
                  <small>Projects & digital systems</small>
                </div>

                <div>
                  <span>03</span>
                  <strong>DEPLOY</strong>
                  <small>Technology that works</small>
                </div>

              </motion.div>

            </div>


            {/* RIGHT VISUAL */}

            <HeroVisual />

          </div>

        </div>


        {/* TECH TICKER */}

        <div className="hero-ticker">

          <div className="hero-ticker-track">

            {[...Array(2)].flatMap(() => [
              'FULL STACK',
              'PYTHON',
              'FLUTTER',
              'AI / ML',
              'IOT',
              'ROBOTICS',
              'DATA',
              'AUTOMATION',
              'DATABASES',
              'IT SOLUTIONS',
            ]).map((item, index) => (

              <span key={index}>

                {item}

                <i>✦</i>

              </span>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="home-intro">

        <div className="container">

          <Reveal className="intro-editorial">

            <div className="intro-side">

              <span>
                01
              </span>

              <small>
                THE IDEA
              </small>

            </div>


            <div className="intro-main">

              <span className="blue-kicker">
                A TECHNOLOGY-FIRST ORGANISATION
              </span>

              <h2>
                More than a
                <br />
                <em>training centre.</em>
              </h2>

              <p className="intro-lead">
                Planet IIT connects learning with implementation.
                Students work around modern technologies while
                businesses get access to practical digital solutions.
              </p>

              <p>
                From software development and mobile applications
                to artificial intelligence, embedded systems,
                IoT, robotics, databases and automation —
                technology is treated as something to understand,
                build and use.
              </p>


              <NavLink
                to="/about"
                className="editorial-link"
              >
                Discover Planet IIT
                <span>↗</span>
              </NavLink>

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          TWO SIDES
      ===================================================== */}

      <section className="home-worlds">

        <div className="container">

          <Reveal className="world-heading">

            <span className="blue-kicker">
              02 / ONE ORGANISATION
            </span>

            <h2>
              Learn technology.
              <br />
              <span>Apply technology.</span>
            </h2>

          </Reveal>


          <div className="world-layout">

            {/* ACADEMY */}

            <Reveal
              className="world-large-card"
              delay={.05}
            >

              <div className="world-image">

                <img
                  src={studentsImage}
                  alt="Students learning technology and robotics at Planet IIT"
                  loading="lazy"
                />

                <div className="world-image-shade" />

                <span className="image-number">
                  01
                </span>

                <span className="image-label">
                  TECH ACADEMY
                </span>

              </div>


              <div className="world-card-content">

                <div className="world-card-top">

                  <span>
                    EDUCATION
                  </span>

                  <span>
                    01 / 02
                  </span>

                </div>

                <h3>
                  Technology
                  <br />
                  Academy
                </h3>

                <p>
                  Practical learning across full-stack
                  development, mobile engineering, AI,
                  machine learning, embedded systems,
                  IoT and robotics.
                </p>


                <div className="world-tech-list">

                  <span>FULL STACK</span>
                  <span>PYTHON</span>
                  <span>FLUTTER</span>
                  <span>AI / ML</span>
                  <span>ROBOTICS</span>

                </div>


                <NavLink
                  to="/courses"
                  className="world-editorial-link"
                >
                  Explore courses
                  <span>↗</span>
                </NavLink>

              </div>

            </Reveal>


            {/* SOLUTIONS */}

            <Reveal
              className="world-large-card world-card-offset"
              delay={.15}
            >

              <div className="world-image">

                <img
                  src={codingImage}
                  alt="Software development and IT solutions"
                  loading="lazy"
                />

                <div className="world-image-shade" />

                <span className="image-number">
                  02
                </span>

                <span className="image-label">
                  IT SOLUTIONS
                </span>

              </div>


              <div className="world-card-content">

                <div className="world-card-top">

                  <span>
                    BUSINESS
                  </span>

                  <span>
                    02 / 02
                  </span>

                </div>

                <h3>
                  Digital
                  <br />
                  Solutions
                </h3>

                <p>
                  Websites, applications, automation,
                  data systems and technology solutions
                  designed around real business requirements.
                </p>


                <div className="world-tech-list">

                  {enterpriseServices
                    .slice(0, 4)
                    .map((service) => (

                      <span key={service.index}>
                        {service.title}
                      </span>

                    ))}

                </div>


                <NavLink
                  to="/contact"
                  className="world-editorial-link"
                >
                  Discuss a project
                  <span>↗</span>
                </NavLink>

              </div>

            </Reveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          IMAGE STATEMENT
      ===================================================== */}

      <TechnologyStatement />


      {/* =====================================================
          COURSES
      ===================================================== */}

      <section className="home-programs">

        <div className="container">

          <Reveal className="program-heading">

            <div>

              <span className="blue-kicker">
                04 / TECH ACADEMY
              </span>

              <h2>
                Choose your
                <br />
                <span>direction.</span>
              </h2>

            </div>

            <p>
              Structured technology tracks for students,
              graduates and working professionals.
            </p>

          </Reveal>


          <div className="program-list">

            {courseCategories.map((course, index) => (

              <Reveal
                key={course.slug}
                delay={index * .08}
              >

                <NavLink
                  to={`/courses/${course.slug}`}
                  className="program-row"
                >

                  <span className="program-number">
                    {course.index}
                  </span>


                  <div className="program-name">

                    <h3>
                      {course.title}
                    </h3>

                    <p>
                      {course.tagline}
                    </p>

                  </div>


                  <div className="program-arrow">
                    ↗
                  </div>

                </NavLink>

              </Reveal>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          DEEP TECHNOLOGY
      ===================================================== */}

      <section className="home-deep-tech">

        <div className="deep-blue-field" />

        <div className="container">

          <div className="deep-layout">

            <Reveal className="deep-image">

              <img
                src={roboticsImage}
                alt="Robotics and embedded systems training"
                loading="lazy"
              />

              <div className="deep-image-overlay" />

              <div className="deep-image-caption">

                <span>
                  PLANET IIT / LAB
                </span>

                <strong>
                  HARDWARE
                  <br />
                  × SOFTWARE
                </strong>

              </div>

            </Reveal>


            <Reveal
              className="deep-content"
              delay={.15}
            >

              <span className="blue-kicker">
                05 / DEEP TECHNOLOGY
              </span>

              <h2>
                Where code
                <br />
                meets the
                <span>
                   physical world.
                </span>
              </h2>

              <p>
                Embedded systems, IoT, robotics and
                machine learning bring software into
                the physical world.
              </p>

              <p>
                This is where technology becomes tangible:
                sensors, controllers, devices, data and
                intelligent systems working together.
              </p>


              <NavLink
                to="/courses/advanced-tech-analytics"
                className="deep-link"
              >
                Explore advanced technology
                <span>↗</span>
              </NavLink>

            </Reveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="home-process">

        <div className="container">

          <Reveal className="process-heading">

            <span className="blue-kicker">
              06 / OUR METHOD
            </span>

            <h2>
              From idea
              <br />
              <span>to execution.</span>
            </h2>

          </Reveal>


          <div className="process-line">

            {[
              {
                number: '01',
                title: 'Understand',
                text: 'Start with the problem, requirement or learning goal.',
              },
              {
                number: '02',
                title: 'Design',
                text: 'Choose the right technology, architecture and approach.',
              },
              {
                number: '03',
                title: 'Build',
                text: 'Turn concepts into working projects and practical systems.',
              },
              {
                number: '04',
                title: 'Evolve',
                text: 'Test, improve and keep moving with technology.',
              },
            ].map((item, index) => (

              <Reveal
                key={item.number}
                delay={index * .08}
                className="process-step"
              >

                <span>
                  {item.number}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

                {index < 3 && (
                  <i>→</i>
                )}

              </Reveal>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="home-final">

        <div className="final-orbit" />

        <div className="container">

          <Reveal className="final-content">

            <span className="blue-kicker">
              PLANET IIT / NEXT STEP
            </span>

            <h2>
              Have an idea?
              <br />
              <span>
                Let's build it.
              </span>
            </h2>

            <p>
              Looking to learn technology, develop a project
              or find the right IT solution for your business?
            </p>


            <div className="final-actions">

              <NavLink
                to="/contact"
                className="final-blue-button"
              >
                Start a conversation
                <span>↗</span>
              </NavLink>

              <NavLink
                to="/courses"
                className="final-outline-button"
              >
                Explore courses
              </NavLink>

            </div>

          </Reveal>

        </div>

      </section>

    </main>
  )
}


/* ============================================================
   HERO VISUAL
   ============================================================ */

function HeroVisual() {

  const ref = useRef(null)

  const {
    scrollYProgress,
  } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [45, -45]
  )

  return (

    <motion.div
      ref={ref}
      className="hero-visual-light"
      initial={{
        opacity: 0,
        scale: .94,
        x: 35,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        x: 0,
      }}
      transition={{
        duration: 1.1,
        delay: .25,
        ease,
      }}
    >

      <motion.div
        className="hero-photo"
        style={{ y }}
      >

        <img
          src={heroImage}
          alt="Planet IIT technology and learning environment"
        />

        <div className="hero-photo-gradient" />

        <div className="hero-photo-frame" />

      </motion.div>


      {/* Floating data */}

      <motion.div
        className="hero-floating-card hero-floating-top"
        animate={{
          y: [0, -7, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >

        <span className="floating-dot" />

        <div>

          <small>
            ACTIVE FIELD
          </small>

          <strong>
            TECHNOLOGY
          </strong>

        </div>

      </motion.div>


      <motion.div
        className="hero-floating-card hero-floating-bottom"
        animate={{
          y: [0, 7, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >

        <span>
          01
        </span>

        <div>

          <small>
            PLANET IIT
          </small>

          <strong>
            LEARN / BUILD
          </strong>

        </div>

      </motion.div>


      <div className="hero-vertical-label">
        TECHNOLOGY • EDUCATION • SOLUTIONS
      </div>

    </motion.div>
  )
}


/* ============================================================
   IMAGE STATEMENT
   ============================================================ */

function TechnologyStatement() {

  const ref = useRef(null)

  const {
    scrollYProgress,
  } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [70, -70]
  )

  return (

    <section
      ref={ref}
      className="technology-statement"
    >

      <motion.div
        className="statement-photo"
        style={{ y }}
      >

        <img
          src={codingImage}
          alt="Developer working with modern technology"
          loading="lazy"
        />

      </motion.div>


      <div className="statement-shade" />


      <div className="container">

        <Reveal className="statement-inner">

          <span>
            03
          </span>

          <h2>
            The distance between
            <br />
            <em>learning and doing</em>
            <br />
            should be small.
          </h2>

          <p>
            That's why Planet IIT brings practical
            technology into both sides of the organisation.
          </p>

        </Reveal>

      </div>

    </section>
  )
}