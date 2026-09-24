import { useParams, NavLink, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal.jsx'
import { courseCategories, getCourseBySlug } from '../data/courses.js'

import fullStackImage from '../assets/courses/full-stack.png'
import mobileImage from '../assets/courses/mobile.png'
import advancedImage from '../assets/courses/advanced-tech.png'
import academicImage from '../assets/courses/academic.png'

import './CourseDetail.css'


const COURSE_IMAGES = {
  'full-stack-web': fullStackImage,
  'mobile-software-engineering': mobileImage,
  'advanced-tech-analytics': advancedImage,
  'academic-project-assistance': academicImage,
}


const COURSE_META = {
  'full-stack-web': {
    category: 'SOFTWARE / WEB',
    statement: 'Build the systems people use.',
    technologies: ['MERN', 'PYTHON', 'REACT', '.NET'],
  },

  'mobile-software-engineering': {
    category: 'APPLICATIONS',
    statement: 'From code to real applications.',
    technologies: ['FLUTTER', 'JAVA', 'PYTHON', 'C / C++'],
  },

  'advanced-tech-analytics': {
    category: 'INTELLIGENCE',
    statement: 'Where intelligence meets hardware.',
    technologies: ['AI', 'IOT', 'ROBOTICS', 'DATA'],
  },

  'academic-project-assistance': {
    category: 'PROJECTS',
    statement: 'From proposal to working system.',
    technologies: ['B.TECH', 'M.TECH', 'BCA', 'MCA'],
  },
}


export default function CourseDetail() {

  const { slug } = useParams()

  const course = getCourseBySlug(slug)

  if (!course) {
    return <Navigate to="/courses" replace />
  }

  const meta = COURSE_META[slug]
  const image = COURSE_IMAGES[slug]

  const others = courseCategories.filter(
    (c) => c.slug !== slug
  )


  return (

    <main className="course-detail-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="course-detail-hero">

        <div className="course-detail-grid" />
        <div className="course-detail-glow course-detail-glow-one" />
        <div className="course-detail-glow course-detail-glow-two" />

        <div className="container">

          <Reveal>

            <NavLink
              to="/courses"
              className="course-detail-back"
            >
              <span className="back-icon">←</span>
              <span>ALL PROGRAMS</span>
            </NavLink>


            <div className="course-detail-hero-layout">

              {/* HERO CONTENT */}

              <div className="course-detail-hero-content">

                <div className="course-detail-kicker">

                  <span className="course-index">
                    {course.index}
                  </span>

                  <span>{meta.category}</span>

                </div>


                <h1>

                  {course.title
                    .split(' ')
                    .map((word, i) => (

                      <span
                        key={`${word}-${i}`}
                        className={
                          i % 3 === 2
                            ? 'outline'
                            : ''
                        }
                      >
                        {word}{' '}
                      </span>

                    ))}

                </h1>


                <h2>
                  {meta.statement}
                </h2>


                <p>
                  {course.summary}
                </p>


                <div className="course-detail-meta">

                  <div>

                    <small>
                      FORMAT
                    </small>

                    <strong>
                      {course.format}
                    </strong>

                  </div>


                  <div>

                    <small>
                      DESIGNED FOR
                    </small>

                    <strong>
                      {course.audience}
                    </strong>

                  </div>

                </div>

              </div>


              {/* HERO VISUAL */}

              <div className="course-detail-visual">

                <div className="course-detail-image">

                  <img
                    src={image}
                    alt={course.title}
                  />

                  <div className="course-detail-image-overlay" />

                  <div className="course-detail-image-grid" />

                  <span className="course-detail-image-index">
                    {course.index}
                  </span>

                  <span className="course-detail-image-label">
                    PLANET IIT / ACADEMY
                  </span>

                  <div className="image-corner image-corner-top" />
                  <div className="image-corner image-corner-bottom" />

                </div>


                <div className="course-detail-floating">

                  <span className="floating-dot" />

                  <div>

                    <small>
                      PROGRAM STATUS
                    </small>

                    <strong>
                      PRACTICAL TRAINING
                    </strong>

                  </div>

                </div>

              </div>

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          TECHNOLOGY FIELD
      ===================================================== */}

      <section className="course-tech-section">

        <div className="tech-section-orbit" />

        <div className="container">

          <Reveal className="course-tech-header">

            <div>

              <span className="course-tech-label">
                {course.index} / TECHNOLOGY FIELD
              </span>

              <h2>
                The tools behind
                <span> the work.</span>
              </h2>

            </div>

            <p>
              Core technologies and practical areas
              covered throughout this program.
            </p>

          </Reveal>


          <div className="course-tech-large">

            {meta.technologies.map((tech, index) => (

              <motion.div
                key={tech}
                className="course-tech-large-item"
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: .3,
                }}
                transition={{
                  delay: index * .08,
                  duration: .6,
                }}
              >

                <span>
                  0{index + 1}
                </span>

                <strong>
                  {tech}
                </strong>

                <div className="tech-item-line" />

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CURRICULUM
      ===================================================== */}

      <section className="course-curriculum">

        <div className="curriculum-background-grid" />

        <div className="container">

          <Reveal className="course-curriculum-heading">

            <span className="section-kicker">
              {course.index} / CURRICULUM
            </span>

            <h2>
              What you'll
              <br />
              <span>work with.</span>
            </h2>

            <p>
              The curriculum is structured around
              practical technology areas rather than
              isolated theory.
            </p>

          </Reveal>


          <div className="curriculum-list">

            {course.tracks.map((track, index) => (

              <CurriculumItem
                key={track.name}
                track={track}
                index={index}
              />

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          LEARNING OUTCOME
      ===================================================== */}

      <section className="course-outcome">

        <div className="container">

          <Reveal className="course-outcome-layout">

            <div className="course-outcome-heading">

              <span className="section-kicker">
                {course.index} / THE APPROACH
              </span>

              <h2>
                Learn through
                <br />
                <span>doing.</span>
              </h2>

            </div>


            <div className="course-outcome-content">

              <p className="outcome-intro">
                Planet IIT's training approach connects
                technical learning with practical
                implementation, project work and
                documentation.
              </p>


              <div className="outcome-points">

                <div>

                  <span>
                    01
                  </span>

                  <strong>
                    UNDERSTAND
                  </strong>

                  <p>
                    Build the technical foundation
                    behind the tools and frameworks.
                  </p>

                </div>


                <div>

                  <span>
                    02
                  </span>

                  <strong>
                    IMPLEMENT
                  </strong>

                  <p>
                    Work through practical exercises
                    and application-focused tasks.
                  </p>

                </div>


                <div>

                  <span>
                    03
                  </span>

                  <strong>
                    BUILD
                  </strong>

                  <p>
                    Apply your knowledge through
                    meaningful projects.
                  </p>

                </div>


                <div>

                  <span>
                    04
                  </span>

                  <strong>
                    PRESENT
                  </strong>

                  <p>
                    Document and demonstrate the
                    work you've completed.
                  </p>

                </div>

              </div>

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="course-detail-cta">

        <div className="course-detail-cta-grid" />
        <div className="cta-blue-glow" />

        <div className="container">

          <Reveal className="course-detail-cta-content">

            <span className="section-kicker">
              PLANET IIT / NEXT STEP
            </span>

            <h2>
              Ready to start
              <br />
              <span>{course.shortTitle}?</span>
            </h2>

            <p>
              Tell us about your background,
              learning goals or project requirement.
            </p>


            <div className="course-detail-cta-actions">

              <NavLink
                to="/contact"
                className="course-detail-primary"
              >
                Get in touch
                <span>↗</span>
              </NavLink>


              <NavLink
                to="/courses"
                className="course-detail-secondary"
              >
                Explore all programs
              </NavLink>

            </div>

          </Reveal>

        </div>

      </section>


      {/* =====================================================
          OTHER PROGRAMS
      ===================================================== */}

      <section className="course-other">

        <div className="container">

          <Reveal className="course-other-heading">

            <span className="section-kicker">
              EXPLORE MORE
            </span>

            <h2>
              Other
              <br />
              <span>directions.</span>
            </h2>

          </Reveal>


          <div className="course-other-grid">

            {others.map((other, index) => (

              <Reveal
                key={other.slug}
                delay={index * .08}
              >

                <NavLink
                  to={`/courses/${other.slug}`}
                  className="course-other-card"
                >

                  <div className="other-card-top">

                    <span>
                      {other.index}
                    </span>

                    <span className="other-card-arrow">
                      ↗
                    </span>

                  </div>


                  <div className="other-card-content">

                    <h3>
                      {other.title}
                    </h3>

                    <p>
                      {other.tagline}
                    </p>

                  </div>


                  <strong>
                    Explore program
                  </strong>

                </NavLink>

              </Reveal>

            ))}

          </div>

        </div>

      </section>

    </main>
  )
}


/* ============================================================
   CURRICULUM ITEM
   ============================================================ */

function CurriculumItem({ track, index }) {

  return (

    <Reveal
      className="curriculum-item"
      delay={index * .06}
    >

      <div className="curriculum-number">
        {String(index + 1).padStart(2, '0')}
      </div>


      <div className="curriculum-main">

        <h3>
          {track.name}
        </h3>

        <p>
          {track.detail}
        </p>

      </div>


      <div className="curriculum-arrow">
        ↗
      </div>

    </Reveal>

  )
}