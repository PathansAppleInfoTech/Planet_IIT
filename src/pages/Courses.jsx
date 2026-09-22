import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

import Reveal from '../components/Reveal.jsx'
import { courseCategories } from '../data/courses.js'

import fullStackImage from '../assets/courses/full-stack.png'
import mobileImage from '../assets/courses/mobile.png'
import advancedImage from '../assets/courses/advanced-tech.png'
import academicImage from '../assets/courses/academic.png'

import './Courses.css'

const COURSE_IMAGES = {
  'full-stack-web': fullStackImage,
  'mobile-software-engineering': mobileImage,
  'advanced-tech-analytics': advancedImage,
  'academic-project-assistance': academicImage,
}


const COURSE_META = {
  'full-stack-web': {
    eyebrow: 'SOFTWARE / 01',
    statement: 'Build the systems people use.',
    technologies: ['MERN', 'PYTHON', 'REACT', '.NET'],
    color: 'blue',
  },

  'mobile-software-engineering': {
    eyebrow: 'APPLICATIONS / 02',
    statement: 'From code to real applications.',
    technologies: ['FLUTTER', 'JAVA', 'PYTHON', 'C / C++'],
    color: 'violet',
  },

  'advanced-tech-analytics': {
    eyebrow: 'INTELLIGENCE / 03',
    statement: 'Where intelligence meets hardware.',
    technologies: ['AI', 'IOT', 'ROBOTICS', 'DATA'],
    color: 'cyan',
  },

  'academic-project-assistance': {
    eyebrow: 'PROJECTS / 04',
    statement: 'From proposal to working system.',
    technologies: ['B.TECH', 'M.TECH', 'BCA', 'MCA'],
    color: 'green',
  },
}


export default function Courses() {

  return (
    <main className="courses-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="courses-hero">

        <div className="courses-hero-grid" />

        <div className="courses-hero-glow" />

        <div className="container">

          <div className="courses-hero-layout">

            <Reveal className="courses-hero-content">

              <div className="courses-kicker">
                <span />
                PLANET IIT / TECH ACADEMY
              </div>

              <h1>
                Learn to
                <br />
                <span>build.</span>
              </h1>

              <p>
                Technology training built around practical
                development, real projects and the systems
                behind modern software.
              </p>

              <div className="courses-hero-bottom">

                <span>
                  04
                </span>

                <p>
                  PROGRAM
                  <br />
                  DIRECTIONS
                </p>

                <div className="courses-scroll-line" />

                <span className="mono">
                  SCROLL TO EXPLORE
                </span>

              </div>

            </Reveal>


            <Reveal
              className="courses-hero-orbit"
              delay={0.15}
            >

              <div className="course-orbit orbit-1" />
              <div className="course-orbit orbit-2" />
              <div className="course-orbit orbit-3" />

              <div className="course-orbit-core">

                <span>
                  IIT
                </span>

                <small>
                  TECH
                </small>

              </div>


              <div className="orbit-node node-1">
                AI
              </div>

              <div className="orbit-node node-2">
                WEB
              </div>

              <div className="orbit-node node-3">
                IOT
              </div>

              <div className="orbit-node node-4">
                APP
              </div>

            </Reveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="courses-intro">

        <div className="container">

          <Reveal className="courses-intro-layout">

            <span className="courses-intro-index">
              00
            </span>

            <div>

              <span className="section-kicker">
                THE ACADEMY
              </span>

              <h2>
                Don't just learn
                <br />
                <span>the syntax.</span>
              </h2>

              <p>
                Our programs move from fundamentals to
                practical implementation — giving students
                the opportunity to work with the technologies,
                tools and project environments that define
                modern software and technology development.
              </p>

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          COURSE TRACKS
      ===================================================== */}

      <section className="course-tracks">

        <div className="container">

          <div className="course-track-list">

            {courseCategories.map((course, index) => (

              <CourseFeature
                key={course.slug}
                course={course}
                index={index}
              />

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          LEARNING MODEL
      ===================================================== */}

      <section className="courses-method">

        <div className="courses-method-glow" />

        <div className="container">

          <Reveal className="courses-method-heading">

            <span className="section-kicker">
              05 / THE LEARNING MODEL
            </span>

            <h2>
              Learn it.
              <br />
              <span>Build it.</span>
            </h2>

          </Reveal>


          <div className="learning-process">

            {[
              {
                number: '01',
                title: 'Understand',
                text: 'Start with the fundamentals and understand why the technology works.',
              },
              {
                number: '02',
                title: 'Experiment',
                text: 'Work with tools, frameworks, databases and development environments.',
              },
              {
                number: '03',
                title: 'Build',
                text: 'Turn concepts into practical applications, systems and projects.',
              },
              {
                number: '04',
                title: 'Present',
                text: 'Document, demonstrate and explain what you built.',
              },
            ].map((step, index) => (

              <Reveal
                key={step.number}
                className="learning-step"
                delay={index * 0.08}
              >

                <span>
                  {step.number}
                </span>

                <div>

                  <h3>
                    {step.title}
                  </h3>

                  <p>
                    {step.text}
                  </p>

                </div>

              </Reveal>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHO IS IT FOR
      ===================================================== */}

      <section className="courses-audience">

        <div className="container">

          <Reveal className="audience-layout">

            <div>

              <span className="section-kicker">
                06 / WHO IT'S FOR
              </span>

              <h2>
                Wherever you are
                <br />
                <span>in the journey.</span>
              </h2>

            </div>


            <div className="audience-list">

              <div>
                <span>01</span>
                <strong>Students</strong>
                <p>
                  Build a strong technical foundation
                  alongside academic learning.
                </p>
              </div>

              <div>
                <span>02</span>
                <strong>Graduates</strong>
                <p>
                  Turn academic knowledge into practical
                  development experience.
                </p>
              </div>

              <div>
                <span>03</span>
                <strong>Professionals</strong>
                <p>
                  Develop new technical capabilities and
                  expand your existing skill set.
                </p>
              </div>

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="courses-final">

        <div className="courses-final-grid" />

        <div className="container">

          <Reveal className="courses-final-content">

            <span className="section-kicker">
              PLANET IIT / NEXT STEP
            </span>

            <h2>
              Find your
              <br />
              <span>direction.</span>
            </h2>

            <p>
              Not sure which program fits your background,
              goals or project? Tell us what you're trying
              to achieve.
            </p>

            <div className="courses-final-actions">

              <NavLink
                to="/contact"
                className="courses-final-primary"
              >
                Talk to an advisor
                <span>↗</span>
              </NavLink>

              <NavLink
                to="/about"
                className="courses-final-secondary"
              >
                About Planet IIT
              </NavLink>

            </div>

          </Reveal>

        </div>

      </section>

    </main>
  )
}


/* ============================================================
   COURSE FEATURE
   ============================================================ */

function CourseFeature({ course, index }) {

  const meta = COURSE_META[course.slug]

  const image = COURSE_IMAGES[course.slug]

  const reversed = index % 2 !== 0

  return (

    <Reveal
      id={course.slug}
      className={`course-feature ${reversed ? 'is-reversed' : ''}`}
      delay={index * 0.06}
    >

      {/* IMAGE */}

      <div className="course-feature-image">

        <img
          src={image}
          alt={course.title}
          loading="lazy"
        />

        <div className="course-feature-image-overlay" />

        <div className="course-feature-image-grid" />

        <span className="course-feature-image-code">
          {meta.eyebrow}
        </span>

        <span className="course-feature-image-index">
          {course.index}
        </span>

      </div>


      {/* CONTENT */}

      <div className="course-feature-content">

        <div className="course-feature-top">

          <span className="course-feature-number">
            {course.index}
          </span>

          <span className="course-feature-category">
            {meta.eyebrow}
          </span>

        </div>


        <h2>
          {course.title}
        </h2>


        <h3>
          {meta.statement}
        </h3>


        <p className="course-feature-summary">
          {course.summary}
        </p>


        {/* TECHNOLOGY STRIP */}

        <div className="course-tech-strip">

          {meta.technologies.map((tech) => (

            <span key={tech}>
              {tech}
            </span>

          ))}

        </div>


        {/* TRACKS */}

        <div className="course-track-preview">

          {course.tracks.slice(0, 4).map((track, i) => (

            <div
              className="course-track-item"
              key={track.name}
            >

              <span>
                {String(i + 1).padStart(2, '0')}
              </span>

              <strong>
                {track.name}
              </strong>

            </div>

          ))}

        </div>


        <div className="course-feature-footer">

          <div>

            <small>
              FORMAT
            </small>

            <strong>
              {course.format}
            </strong>

          </div>


          <NavLink
            to={`/courses/${course.slug}`}
            className="course-explore-button"
          >

            Explore track

            <span>
              ↗
            </span>

          </NavLink>

        </div>

      </div>

    </Reveal>

  )
}