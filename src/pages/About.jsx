import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'

import Reveal from '../components/Reveal.jsx'
import { leadership } from '../data/team.js'

import aboutHero from '../assets/about-hero.png'
import aboutLab from '../assets/about-lab.png'
import aboutTechnology from '../assets/about-technology.png'
import './About.css'

const VALUES = [
  {
    number: '01',
    title: 'Build for production',
    detail:
      'Everything we teach is connected to practical development, real projects and the standards expected from working technology environments.',
  },
  {
    number: '02',
    title: 'One standard, two floors',
    detail:
      'Technology education and IT solutions operate around the same philosophy — understand the problem, choose the right technology and build properly.',
  },
  {
    number: '03',
    title: 'Depth over noise',
    detail:
      'We focus on technologies that can be applied deeply, from full-stack development and AI to embedded systems, IoT and robotics.',
  },
  {
    number: '04',
    title: 'Document the work',
    detail:
      'Projects, reports, records, presentations and technical documentation are treated as part of the process rather than an afterthought.',
  },
]


export default function About() {

  return (
    <main className="about-page">

      {/* =====================================================
          ABOUT HERO
      ===================================================== */}

      <section className="about-hero">

        <div className="about-hero-grid" />

        <div className="about-hero-glow" />

        <div className="container">

          <div className="about-hero-layout">

            <Reveal className="about-hero-content">

              <div className="about-kicker">
                <span />
                PLANET IIT / ABOUT
              </div>

              <h1>
                Technology
                <br />
                <span>starts with</span>
                <br />
                understanding.
              </h1>

              <p>
                Planet Institute and Information Technology
                brings technology education and practical IT
                solutions together under one roof.
              </p>

              <div className="about-hero-actions">

                <NavLink
                  to="/courses"
                  className="about-primary-button"
                >
                  Explore our programs
                  <span>↗</span>
                </NavLink>

                <NavLink
                  to="/contact"
                  className="about-text-button"
                >
                  Talk to us
                </NavLink>

              </div>

            </Reveal>


            <Reveal
              className="about-hero-visual"
              delay={0.15}
            >

              <div className="about-hero-image">

                <img
                  src={aboutHero}
                  alt="Planet IIT technology environment"
                />

                <div className="about-image-overlay" />

                <div className="about-image-frame" />

              </div>


              <div className="about-floating-label">

                <span className="about-pulse" />

                <div>
                  <small>
                    SYSTEM STATUS
                  </small>

                  <strong>
                    LEARNING + BUILDING
                  </strong>
                </div>

              </div>


              <div className="about-coordinate">
                <span>PLN / 01</span>
                <strong>TECHNOLOGY</strong>
              </div>

            </Reveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="about-introduction">

        <div className="container">

          <Reveal className="about-intro-layout">

            <div className="about-intro-index">
              01
            </div>

            <div className="about-intro-content">

              <span className="section-kicker">
                WHO WE ARE
              </span>

              <h2>
                An institute built
                <br />
                around
                <span> technology.</span>
              </h2>

              <div className="about-intro-columns">

                <p>
                  Planet IIT — Planet Institute and
                  Information Technology — operates at the
                  intersection of technology education and
                  practical IT solutions.
                </p>

                <p>
                  The idea is simple: technology should not
                  remain something that is only discussed in
                  classrooms. It should be understood,
                  experimented with, built and applied.
                </p>

              </div>

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          TWO WORLDS
      ===================================================== */}

      <section className="about-world-section">

        <div className="container">

          <Reveal className="about-section-heading">

            <span className="section-kicker">
              02 / THE PLANET IIT MODEL
            </span>

            <h2>
              Two disciplines.
              <br />
              <span>One technology mindset.</span>
            </h2>

          </Reveal>


          <div className="about-world-grid">

            {/* EDUCATION */}

            <Reveal
              className="about-world-card"
              delay={0.05}
            >

              <div className="about-world-image">

                <img
                  src={aboutLab}
                  alt="Technology training and practical learning"
                  loading="lazy"
                />

                <div />

                <span>
                  ACADEMY / 01
                </span>

              </div>


              <div className="about-world-body">

                <span className="about-world-number">
                  01
                </span>

                <h3>
                  Technology
                  <br />
                  Academy
                </h3>

                <p>
                  Training across modern programming,
                  development, artificial intelligence,
                  databases, embedded systems, IoT and
                  other technology disciplines.
                </p>

                <div className="about-world-tags">

                  <span>FULL STACK</span>
                  <span>PYTHON</span>
                  <span>FLUTTER</span>
                  <span>AI</span>
                  <span>IOT</span>

                </div>

              </div>

            </Reveal>


            {/* SOLUTIONS */}

            <Reveal
              className="about-world-card"
              delay={0.15}
            >

              <div className="about-world-image">

                <img
                  src={aboutTechnology}
                  alt="Technology and IT solutions"
                  loading="lazy"
                />

                <div />

                <span>
                  SOLUTIONS / 02
                </span>

              </div>


              <div className="about-world-body">

                <span className="about-world-number">
                  02
                </span>

                <h3>
                  IT
                  <br />
                  Solutions
                </h3>

                <p>
                  Practical technology solutions covering
                  software, automation, data, analytics,
                  database systems and digital requirements.
                </p>

                <div className="about-world-tags">

                  <span>SOFTWARE</span>
                  <span>AUTOMATION</span>
                  <span>DATA</span>
                  <span>DATABASE</span>
                  <span>ANALYTICS</span>

                </div>

              </div>

            </Reveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          BIG STATEMENT
      ===================================================== */}

      <AboutStatement />


      {/* =====================================================
          TECHNOLOGY FOCUS
      ===================================================== */}

      <section className="about-focus-section">

        <div className="container">

          <Reveal className="about-section-heading">

            <span className="section-kicker">
              04 / TECHNOLOGY FOCUS
            </span>

            <h2>
              Learn the
              <br />
              <span>systems behind the screen.</span>
            </h2>

          </Reveal>


          <div className="about-focus-grid">

            {[
              {
                number: '01',
                title: 'Software',
                text: 'Web development, full-stack technologies and application development.',
              },
              {
                number: '02',
                title: 'Intelligence',
                text: 'Machine learning, artificial intelligence and data-driven systems.',
              },
              {
                number: '03',
                title: 'Connected Systems',
                text: 'Embedded C, IoT, electronics and connected technology.',
              },
              {
                number: '04',
                title: 'Data',
                text: 'SQL, MySQL, DBMS, data analytics, migration and database solutions.',
              },
            ].map((item, index) => (

              <Reveal
                key={item.number}
                className="about-focus-item"
                delay={index * 0.07}
              >

                <span className="about-focus-number">
                  {item.number}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

                <span className="focus-arrow">
                  ↗
                </span>

              </Reveal>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          VALUES
      ===================================================== */}

      <section className="about-values-section">

        <div className="about-values-glow" />

        <div className="container">

          <Reveal className="about-section-heading">

            <span className="section-kicker">
              05 / HOW WE THINK
            </span>

            <h2>
              Principles that
              <br />
              <span>shape the work.</span>
            </h2>

          </Reveal>


          <div className="about-values-list">

            {VALUES.map((value, index) => (

              <Reveal
                key={value.number}
                className="about-value-row"
                delay={index * 0.06}
              >

                <span className="about-value-number">
                  {value.number}
                </span>

                <h3>
                  {value.title}
                </h3>

                <p>
                  {value.detail}
                </p>

                <span className="about-value-arrow">
                  ↗
                </span>

              </Reveal>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          LEADERSHIP
      ===================================================== */}

      <section className="about-leadership-section">

        <div className="container">

          <Reveal className="about-section-heading">

            <span className="section-kicker">
              06 / LEADERSHIP
            </span>

            <h2>
              The people behind
              <br />
              <span>Planet IIT.</span>
            </h2>

          </Reveal>


          <div className="about-team-grid">

            {leadership.map((member, index) => (

              <Reveal
                key={member.code}
                className="about-team-card"
                delay={index * 0.1}
              >

                <div className="about-team-image">

                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      loading="lazy"
                    />
                  ) : (
                    <div className="about-team-placeholder">
                      {member.code}
                    </div>
                  )}

                  <div className="about-team-image-overlay" />

                  <span>
                    {member.code}
                  </span>

                </div>


                <div className="about-team-info">

                  <small>
                    {member.role}
                  </small>

                  <h3>
                    {member.name}
                  </h3>

                  <p>
                    {member.bio}
                  </p>

                  <div className="about-team-contact">

                    <a
                      href={`mailto:${member.email}`}
                    >
                      {member.email}
                    </a>

                    <span>
                      {member.phone}
                    </span>

                  </div>

                </div>

              </Reveal>

            ))}

          </div>


          <p className="about-team-note">
            Team profiles and confirmed contact information
            will be updated as the organization grows.
          </p>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="about-final-cta">

        <div className="about-final-orbit orbit-a" />
        <div className="about-final-orbit orbit-b" />

        <div className="container">

          <Reveal className="about-final-content">

            <span className="section-kicker">
              PLANET IIT / NEXT
            </span>

            <h2>
              Learn something.
              <br />
              <span>Build something.</span>
            </h2>

            <p>
              Whether you're starting your technology journey
              or looking to turn an idea into a working
              solution, let's start with the problem.
            </p>

            <div className="about-final-actions">

              <NavLink
                to="/courses"
                className="about-final-primary"
              >
                Explore courses
                <span>↗</span>
              </NavLink>

              <NavLink
                to="/contact"
                className="about-final-secondary"
              >
                Contact Planet IIT
              </NavLink>

            </div>

          </Reveal>

        </div>

      </section>

    </main>
  )
}


/* ============================================================
   BIG PARALLAX STATEMENT
   ============================================================ */

function AboutStatement() {

  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
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
      className="about-statement"
    >

      <motion.div
        className="about-statement-image"
        style={{ y }}
      >
        <img
          src={aboutTechnology}
          alt=""
          aria-hidden="true"
        />
      </motion.div>


      <div className="about-statement-overlay" />

      <div className="container">

        <Reveal className="about-statement-content">

          <span>
            03 / THE IDEA
          </span>

          <h2>
            Technology is
            <br />
            <strong>
              something you do.
            </strong>
          </h2>

          <p>
            The gap between learning a technology and
            actually using it should be as small as possible.
          </p>

        </Reveal>

      </div>

    </section>
  )
}