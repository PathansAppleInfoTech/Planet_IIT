import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/logo-transparent.png'
import { courseCategories } from '../data/courses'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">

      {/* Decorative futuristic background */}
      <div className="footer-orbit orbit-one" />
      <div className="footer-orbit orbit-two" />

      <div className="footer-grid-lines" />

      <div className="container">

        {/* Massive CTA */}
        <div className="footer-hero">

          <div className="footer-eyebrow">
            <span className="status-dot" />
            PLANET IIT / TECHNOLOGY PARTNER
          </div>

          <h2>
            Build the future.
            <br />
            <span>Learn the technology.</span>
          </h2>

          <p>
            Technology training, software development and
            practical IT solutions — built around real-world
            skills and real-world applications.
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

        {/* Divider */}
        <div className="footer-divider">
          <span />
        </div>

        {/* Footer content */}
        <div className="footer-content">

          {/* Brand */}
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

              <div>
                <div className="footer-brand-name">
                  PLANET <span>IIT</span>
                </div>

                <div className="footer-brand-sub">
                  INSTITUTE & INFORMATION TECHNOLOGY
                </div>
              </div>
            </Link>

            <p>
              A technology-focused institute providing
              professional IT training and practical
              technology solutions.
            </p>

            <div className="footer-location">
              <span className="location-pulse" />
              Kerala, India
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-column">
            <h3>Explore</h3>

            <NavLink to="/">
              Home
            </NavLink>

            <NavLink to="/about">
              About
            </NavLink>

            <NavLink to="/courses">
              Courses
            </NavLink>

            <NavLink to="/contact">
              Contact
            </NavLink>
          </div>

          {/* Programs */}
          <div className="footer-column">
            <h3>Programs</h3>

            {courseCategories
              .slice(0, 5)
              .map((course) => (
                <NavLink
                  key={course.slug}
                  to={`/courses#${course.slug}`}
                >
                  {course.shortTitle}
                </NavLink>
              ))}
          </div>

          {/* Contact */}
          <div className="footer-column footer-contact">
            <h3>Connect</h3>

            <a href="mailto:Info@planetiit.com">
              info@planetiit.com
            </a>

            <span>
              Kerala, India
            </span>

            <span className="footer-small-text">
              Near Aruvithura Akshaya Center Erattupetta , Kottayam District Kerala India Pin 686122
            </span>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">

          <div>
            © {year} Planet IIT.
            All rights reserved.
          </div>

          <div className="footer-bottom-center">
            <span>IT TRAINING</span>
            <span>•</span>
            <span>SOFTWARE</span>
            <span>•</span>
            <span>TECHNOLOGY</span>
          </div>

          <div className="footer-code">
            PLANET_IIT
          </div>

        </div>

      </div>
    </footer>
  )
}