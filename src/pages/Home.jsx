import { NavLink } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
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

      <section className="planet-hero">

        <div className="hero-noise" />
        <div className="hero-grid" />

        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="container">

          <div className="hero-layout">

            {/* LEFT CONTENT */}
            <div className="hero-content">

              <motion.div
                className="hero-status"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <span className="status-light" />

                <span>
                  TECHNOLOGY • EDUCATION • SOLUTIONS
                </span>

                <span className="status-location">
                  KERALA / INDIA
                </span>
              </motion.div>


              <motion.h1
                className="hero-heading"
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1.1,
                  delay: 0.12,
                  ease,
                }}
              >
                Where
                <br />

                <span className="hero-heading-outline">
                  technology
                </span>

                <br />

                becomes
                <br />

                <span className="hero-heading-gradient">
                  capability.
                </span>
              </motion.h1>


              <motion.p
                className="hero-description"
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.4,
                  ease,
                }}
              >
                Planet IIT brings technology education and
                practical IT solutions together — helping
                students learn modern technologies while
                helping businesses turn ideas into working
                digital solutions.
              </motion.p>


              <motion.div
                className="hero-actions"
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease,
                }}
              >

                <NavLink
                  to="/courses"
                  className="hero-primary-btn"
                >
                  <span>
                    Explore technology
                  </span>

                  <span className="hero-btn-arrow">
                    ↗
                  </span>
                </NavLink>


                <NavLink
                  to="/contact"
                  className="hero-secondary-btn"
                >
                  Start a project
                </NavLink>

              </motion.div>


              {/* SMALL STATS */}

              <motion.div
                className="hero-mini-stats"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.8,
                }}
              >

                <div>
                  <strong>01</strong>
                  <span>
                    Learn
                  </span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>
                    Build
                  </span>
                </div>

                <div>
                  <strong>03</strong>
                  <span>
                    Deploy
                  </span>
                </div>

              </motion.div>

            </div>


            {/* HERO IMAGE */}

            <HeroImage />

          </div>

        </div>


        {/* BOTTOM MARQUEE */}

        <div className="hero-tech-strip">

          <div className="tech-marquee">

            {[
              'FULL STACK',
              'PYTHON',
              'FLUTTER',
              'AI / ML',
              'IOT',
              'ROBOTICS',
              'DATA',
              'AUTOMATION',
              'DATABASES',
            ].map((item, index) => (
              <span key={index}>
                {item}
                <b>✦</b>
              </span>
            ))}

          </div>

        </div>

      </section>



      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="intro-section">

        <div className="container">

          <Reveal className="intro-layout">

            <div className="intro-number">
              01
            </div>

            <div className="intro-content">

              <span className="section-kicker">
                THE PLANET IIT APPROACH
              </span>

              <h2>
                Not just courses.
                <br />
                <span>A place to build.</span>
              </h2>

              <p>
                Technology changes quickly. Memorising a
                syllabus doesn't prepare you for that.
              </p>

              <p>
                Planet IIT focuses on practical technology —
                from programming and web development to
                artificial intelligence, embedded systems,
                IoT, robotics, data and automation.
              </p>

              <NavLink
                to="/about"
                className="text-link"
              >
                Discover Planet IIT
                <span>↗</span>
              </NavLink>

            </div>

          </Reveal>

        </div>

      </section>



      {/* =====================================================
          TWO WORLDS
      ===================================================== */}

      <section className="worlds-section">

        <div className="container">

          <Reveal className="section-heading-wide">

            <span className="section-kicker">
              02 / TWO SIDES OF THE SAME SYSTEM
            </span>

            <h2>
              Learn from technology.
              <br />
              <span>Build with technology.</span>
            </h2>

          </Reveal>


          <div className="worlds-grid">

            {/* ACADEMY */}

            <Reveal
              className="world-card world-academy"
              delay={0.05}
            >

              <div className="world-image">

                <img
                  src={studentsImage}
                  alt="Students learning technology at Planet IIT"
                  loading="lazy"
                />

                <div className="image-overlay" />

                <span className="image-label">
                  ACADEMY / 01
                </span>

              </div>


              <div className="world-content">

                <span className="world-number">
                  01
                </span>

                <h3>
                  Technology
                  <br />
                  Academy
                </h3>

                <p>
                  Learn modern technologies through
                  practical training, projects and
                  technology-focused academic support.
                </p>

                <div className="world-tags">

                  <span>FULL STACK</span>
                  <span>PYTHON</span>
                  <span>FLUTTER</span>
                  <span>AI / ML</span>
                  <span>IOT</span>

                </div>

                <NavLink
                  to="/courses"
                  className="world-link"
                >
                  Explore courses
                  <span>↗</span>
                </NavLink>

              </div>

            </Reveal>


            {/* IT SOLUTIONS */}

            <Reveal
              className="world-card world-solutions"
              delay={0.15}
            >

              <div className="world-image">

                <img
                  src={codingImage}
                  alt="Software development and technology solutions"
                  loading="lazy"
                />

                <div className="image-overlay" />

                <span className="image-label">
                  SOLUTIONS / 02
                </span>

              </div>


              <div className="world-content">

                <span className="world-number">
                  02
                </span>

                <h3>
                  IT
                  <br />
                  Solutions
                </h3>

                <p>
                  From software and automation to data
                  and database solutions, we help turn
                  business requirements into technology.
                </p>

                <div className="world-tags">

                  {enterpriseServices
                    .slice(0, 5)
                    .map((service) => (
                      <span key={service.index}>
                        {service.title}
                      </span>
                    ))}

                </div>

                <NavLink
                  to="/contact"
                  className="world-link"
                >
                  Discuss your idea
                  <span>↗</span>
                </NavLink>

              </div>

            </Reveal>

          </div>

        </div>

      </section>



      {/* =====================================================
          IMAGE / STATEMENT SECTION
      ===================================================== */}

      <TechnologyStatement />



      {/* =====================================================
          TECHNOLOGY ARENA
      ===================================================== */}

      <section className="technology-section">

        <div className="container">

          <Reveal className="section-heading-wide">

            <span className="section-kicker">
              04 / TECHNOLOGY ARENA
            </span>

            <h2>
              From the first
              <br />
              <span>line of code.</span>
            </h2>

          </Reveal>


          <div className="technology-grid">

            {courseCategories.map((course, index) => (

              <Reveal
                key={course.slug}
                delay={index * 0.06}
              >

                <NavLink
                  to={`/courses/${course.slug}`}
                  className="technology-card"
                >

                  <div className="technology-card-top">

                    <span>
                      {course.index}
                    </span>

                    <span className="technology-arrow">
                      ↗
                    </span>

                  </div>

                  <h3>
                    {course.title}
                  </h3>

                  <p>
                    {course.tagline}
                  </p>

                  <div className="technology-line" />

                  <span className="technology-explore">
                    VIEW PROGRAM
                  </span>

                </NavLink>

              </Reveal>

            ))}

          </div>

        </div>

      </section>



      {/* =====================================================
          ROBOTICS / DEEP TECH
      ===================================================== */}

      <section className="deep-tech-section">

        <div className="deep-tech-grid" />

        <div className="container">

          <div className="deep-tech-layout">

            <Reveal className="deep-tech-image">

              <img
                src={roboticsImage}
                alt="Robotics and embedded technology"
                loading="lazy"
              />

              <div className="deep-tech-image-overlay" />

              <div className="floating-tech-card">

                <span>
                  SYSTEM / 04
                </span>

                <strong>
                  EMBEDDED
                  <br />
                  + ROBOTICS
                </strong>

                <small>
                  HARDWARE × SOFTWARE
                </small>

              </div>

            </Reveal>


            <Reveal
              className="deep-tech-content"
              delay={0.15}
            >

              <span className="section-kicker">
                05 / DEEP TECHNOLOGY
              </span>

              <h2>
                Where
                <br />
                software
                <br />
                meets the
                <span>physical world.</span>
              </h2>

              <p>
                Embedded systems, IoT, robotics and
                machine learning sit at the intersection
                of code, electronics and intelligent
                systems.
              </p>

              <p>
                It's an area where learning becomes
                tangible — sensors, controllers, circuits,
                devices and machines responding to the
                software behind them.
              </p>

              <NavLink
                to="/courses/advanced-tech-analytics"
                className="outline-link"
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

      <section className="process-section">

        <div className="container">

          <Reveal className="section-heading-wide">

            <span className="section-kicker">
              06 / HOW WE WORK
            </span>

            <h2>
              Ideas don't stay
              <br />
              <span>on paper.</span>
            </h2>

          </Reveal>


          <div className="process-grid">

            {[
              {
                number: '01',
                title: 'Understand',
                text: 'Start with the problem, requirement or learning goal.'
              },
              {
                number: '02',
                title: 'Design',
                text: 'Choose the right technology, architecture and approach.'
              },
              {
                number: '03',
                title: 'Build',
                text: 'Turn concepts into working projects and practical systems.'
              },
              {
                number: '04',
                title: 'Evolve',
                text: 'Test, improve and keep moving with technology.'
              },
            ].map((item, index) => (

              <Reveal
                key={item.number}
                delay={index * 0.08}
                className="process-item"
              >

                <span className="process-number">
                  {item.number}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

                {index < 3 && (
                  <span className="process-connector">
                    →
                  </span>
                )}

              </Reveal>

            ))}

          </div>

        </div>

      </section>



      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="final-cta">

        <div className="final-cta-glow" />

        <div className="container">

          <Reveal className="final-cta-inner">

            <span className="section-kicker">
              READY WHEN YOU ARE
            </span>

            <h2>
              Have an idea?
              <br />
              <span>Let's make it real.</span>
            </h2>

            <p>
              Looking to learn technology, develop a
              project or find an IT solution for your
              business?
            </p>

            <div className="final-actions">

              <NavLink
                to="/contact"
                className="final-primary"
              >
                Start a conversation
                <span>↗</span>
              </NavLink>

              <NavLink
                to="/courses"
                className="final-secondary"
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
   HERO IMAGE
   ============================================================ */

function HeroImage() {

  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [40, -40]
  )

  return (

    <motion.div
      ref={ref}
      className="hero-visual"
      initial={{
        opacity: 0,
        scale: 0.94,
        x: 30,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        x: 0,
      }}
      transition={{
        duration: 1.2,
        delay: 0.3,
        ease,
      }}
    >

      <motion.div
        className="hero-image-wrap"
        style={{ y }}
      >

        <img
          src={heroImage}
          alt="Planet IIT technology laboratory"
        />

        <div className="hero-image-gradient" />

        <div className="hero-image-grid" />

      </motion.div>


      {/* Floating coordinates */}

      <div className="hero-coordinate coordinate-one">
        <span>LAT</span>
        <strong>09.49°</strong>
      </div>

      <div className="hero-coordinate coordinate-two">
        <span>NODE</span>
        <strong>PLN / 01</strong>
      </div>


      {/* Floating tech signal */}

      <div className="hero-signal">

        <span className="signal-dot" />

        <div>
          <small>
            ACTIVE SYSTEM
          </small>

          <strong>
            LEARN / BUILD
          </strong>
        </div>

      </div>

    </motion.div>
  )
}


/* ============================================================
   TECHNOLOGY STATEMENT
   ============================================================ */

function TechnologyStatement() {

  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [80, -80]
  )

  return (

    <section
      ref={ref}
      className="statement-section"
    >

      <motion.div
        className="statement-image"
        style={{ y }}
      >

        <img
          src={codingImage}
          alt="Developer working with modern technology"
          loading="lazy"
        />

        <div />

      </motion.div>


      <div className="container">

        <Reveal className="statement-content">

          <span className="statement-index">
            03
          </span>

          <h2>
            The distance between
            <br />
            <span>learning and doing</span>
            <br />
            should be zero.
          </h2>

          <p>
            That's why our approach connects technology
            education with practical projects, real tools
            and problem-solving.
          </p>

        </Reveal>

      </div>

    </section>
  )
}