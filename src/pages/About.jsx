import { NavLink } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

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

const TECHNOLOGIES = [
  {
    number: '01',
    title: 'Software',
    text:
      'Web development, full-stack technologies and application development.',
  },
  {
    number: '02',
    title: 'Intelligence',
    text:
      'Machine learning, artificial intelligence and data-driven systems.',
  },
  {
    number: '03',
    title: 'Connected Systems',
    text:
      'Embedded C, IoT, electronics and connected technology.',
  },
  {
    number: '04',
    title: 'Data',
    text:
      'SQL, MySQL, DBMS, data analytics, migration and database solutions.',
  },
]

export default function About() {
  return (
    <main className="about-page">

      {/* =====================================================
          HERO
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

              <div className="about-hero-bottom">

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
                    <span>Explore our programs</span>
                    <b>↗</b>
                  </NavLink>

                  <NavLink
                    to="/contact"
                    className="about-text-button"
                  >
                    Talk to us
                    <span>↗</span>
                  </NavLink>

                </div>

              </div>

            </Reveal>

            <HeroVisual />

          </div>

        </div>

        <div className="about-scroll-indicator">
          <span>SCROLL TO EXPLORE</span>
          <i />
        </div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="about-introduction">

        <div className="container">

          <Reveal className="about-intro-layout">

            <div className="about-intro-index">
              <span>01</span>
              <i />
            </div>

            <div className="about-intro-content">

              <div className="section-kicker">
                WHO WE ARE
              </div>

              <h2>
                An institute built
                <br />
                around
                <em> technology.</em>
              </h2>

              <div className="about-intro-bottom">

                <div className="about-intro-statement">
                  <span>01 / APPROACH</span>
                  <strong>
                    Learn it.
                    <br />
                    Understand it.
                    <br />
                    Build it.
                  </strong>
                </div>

                <div className="about-intro-copy">

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

            <div className="section-heading-meta">
              <span>02</span>
              <span>THE PLANET IIT MODEL</span>
            </div>

            <h2>
              Two disciplines.
              <br />
              <em>One technology mindset.</em>
            </h2>

          </Reveal>


          <div className="about-world-grid">

            {/* EDUCATION */}

            <Reveal
              className="about-world-item"
              delay={0.05}
            >

              <div className="about-world-image">

                <img
                  src={aboutLab}
                  alt="Technology training and practical learning"
                  loading="lazy"
                />

                <div className="world-image-shade" />

                <span className="world-image-label">
                  ACADEMY / 01
                </span>

                <span className="world-image-arrow">
                  ↗
                </span>

              </div>

              <div className="about-world-body">

                <div className="world-number">
                  01
                </div>

                <div className="world-content">

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

              </div>

            </Reveal>


            {/* SOLUTIONS */}

            <Reveal
              className="about-world-item"
              delay={0.15}
            >

              <div className="about-world-image">

                <img
                  src={aboutTechnology}
                  alt="Technology and IT solutions"
                  loading="lazy"
                />

                <div className="world-image-shade" />

                <span className="world-image-label">
                  SOLUTIONS / 02
                </span>

                <span className="world-image-arrow">
                  ↗
                </span>

              </div>

              <div className="about-world-body">

                <div className="world-number">
                  02
                </div>

                <div className="world-content">

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

          <Reveal className="about-section-heading focus-heading">

            <div className="section-heading-meta">
              <span>04</span>
              <span>TECHNOLOGY FOCUS</span>
            </div>

            <h2>
              Learn the
              <br />
              <em>systems behind the screen.</em>
            </h2>

          </Reveal>


          <div className="about-focus-list">

            {TECHNOLOGIES.map((item, index) => (

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

        <div className="values-background" />

        <div className="container">

          <Reveal className="about-section-heading">

            <div className="section-heading-meta">
              <span>05</span>
              <span>HOW WE THINK</span>
            </div>

            <h2>
              Principles that
              <br />
              <em>shape the work.</em>
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

            <div className="section-heading-meta">
              <span>06</span>
              <span>LEADERSHIP</span>
            </div>

            <h2>
              The people behind
              <br />
              <em>Planet IIT.</em>
            </h2>

          </Reveal>


          <div className="about-team-list">

            {leadership.map((member, index) => (

              <Reveal
                key={member.code}
                className="about-team-member"
                delay={index * 0.1}
              >

                <div className="team-index">
                  {member.code}
                </div>

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

                  <div className="team-image-line" />

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

        <div className="final-grid" />
        <div className="final-orbit orbit-a" />
        <div className="final-orbit orbit-b" />

        <div className="container">

          <Reveal className="about-final-content">

            <div className="section-kicker">
              PLANET IIT / NEXT
            </div>

            <h2>
              Learn something.
              <br />
              <em>Build something.</em>
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
                <span>↗</span>
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

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [45, -45]
  )

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.06, 1]
  )

  return (
    <Reveal
      className="about-hero-visual"
      delay={0.15}
    >

      <div
        ref={ref}
        className="hero-visual-wrap"
      >

        <motion.div
          className="about-hero-image"
          style={{
            y: imageY,
            scale: imageScale,
          }}
        >
          <img
            src={aboutHero}
            alt="Planet IIT technology environment"
          />

          <div className="about-image-overlay" />
        </motion.div>

        <div className="about-image-frame" />

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

          <span>
            PLN / 01
          </span>

          <strong>
            TECHNOLOGY
          </strong>

        </div>

      </div>

    </Reveal>
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
    [80, -80]
  )

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.08, 1]
  )

  return (
    <section
      ref={ref}
      className="about-statement"
    >

      <motion.div
        className="about-statement-image"
        style={{
          y,
          scale,
        }}
      >
        <img
          src={aboutTechnology}
          alt=""
          aria-hidden="true"
        />
      </motion.div>

      <div className="about-statement-overlay" />

      <div className="statement-line" />

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