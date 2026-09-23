import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/logo-transparent.png'
import { courseCategories } from '../data/courses'
import './Footer.css'

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Courses', to: '/courses' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">

      {/* =====================================================
          DECORATIVE BACKGROUND
          ===================================================== */}

      <div className="footer-grid-lines" />

      <div className="footer-orbit orbit-one" />
      <div className="footer-orbit orbit-two" />


      <div className="container">

        {/* ===================================================
            FOOTER INTRO
            =================================================== */}

        <div className="footer-intro">

          <div className="footer-intro-left">

            <div className="footer-eyebrow">
              <span className="status-dot" />
              PLANET IIT / TECHNOLOGY EDUCATION
            </div>

            <h2>
              Learn.
              <br />
              <span>Build. Grow.</span>
            </h2>

          </div>

          <div className="footer-intro-right">

            <p>
              Practical technology education, professional IT
              training and real-world digital solutions designed
              to help you move forward.
            </p>

            <Link
              to="/contact"
              className="footer-main-cta"
            >
              <span>Start a Conversation</span>

              <span className="footer-cta-icon">
                ↗
              </span>
            </Link>

          </div>

        </div>


        {/* ===================================================
            DIVIDER
            =================================================== */}

        <div className="footer-divider">
          <span />
        </div>


        {/* ===================================================
            MAIN FOOTER
            =================================================== */}

        <div className="footer-content">

          {/* =================================================
              BRAND
              ================================================= */}

          <div className="footer-brand-block">

            <Link
              to="/"
              className="footer-brand"
            >

              <div className="footer-logo-box">
                <img
                  src={logo}
                  alt="Planet IIT"
                />
              </div>

              <div className="footer-brand-copy">

                <div className="footer-brand-name">
                  PLANET <span>IIT</span>
                </div>

                <div className="footer-brand-sub">
                  INSTITUTE & INFORMATION TECHNOLOGY
                </div>

              </div>

            </Link>


            <p className="footer-brand-description">
              A technology-focused institute providing
              professional IT training and practical
              technology solutions.
            </p>


            <div className="footer-location">
              <span className="location-pulse" />
              <span>Kerala, India</span>
            </div>

          </div>


          {/* =================================================
              EXPLORE
              ================================================= */}

          <div className="footer-column">

            <div className="footer-column-label">
              01 / EXPLORE
            </div>

            <h3>
              Navigate
            </h3>

            <nav className="footer-links">

              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                >
                  <span>{item.label}</span>
                  <span className="footer-link-arrow">
                    ↗
                  </span>
                </NavLink>
              ))}

            </nav>

          </div>


          {/* =================================================
              PROGRAMS
              ================================================= */}

          <div className="footer-column">

            <div className="footer-column-label">
              02 / PROGRAMS
            </div>

            <h3>
              Learn With Us
            </h3>

            <nav className="footer-links">

              {courseCategories
                .slice(0, 5)
                .map((course) => (
                  <NavLink
                    key={course.slug}
                    to={`/courses#${course.slug}`}
                  >
                    <span>
                      {course.shortTitle}
                    </span>

                    <span className="footer-link-arrow">
                      ↗
                    </span>
                  </NavLink>
                ))}

            </nav>

          </div>


          {/* =================================================
              CONTACT
              ================================================= */}

          <div className="footer-column footer-contact">

            <div className="footer-column-label">
              03 / CONNECT
            </div>

            <h3>
              Get in Touch
            </h3>

            <a
              href="mailto:info@planetiit.com"
              className="footer-email"
            >
              info@planetiit.com
            </a>

            <div className="footer-contact-location">
              Kerala, India
            </div>

            <p className="footer-address">
              Near Aruvithura Akshaya Center,
              Erattupetta, Kottayam District,
              Kerala, India — 686122
            </p>

          </div>

        </div>


        {/* ===================================================
            BOTTOM
            =================================================== */}

        <div className="footer-bottom">

          <div className="footer-copyright">
            © {year} Planet IIT.
            <span>All rights reserved.</span>
          </div>


          <div className="footer-bottom-center">

            <span>IT TRAINING</span>

            <span className="footer-dot">
              •
            </span>

            <span>SOFTWARE</span>

            <span className="footer-dot">
              •
            </span>

            <span>TECHNOLOGY</span>

          </div>


          <div className="footer-code">
            <span className="footer-code-dot" />
            PLANET_IIT
          </div>

        </div>

      </div>

    </footer>
  )
}