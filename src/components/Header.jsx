import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import logo from '../assets/logo-transparent.png'

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Courses', to: '/courses' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={`site-header ${scrolled ? 'site-header-scrolled' : ''
          }`}
      >
        <div className="header-shell">

          {/* Brand */}
          <Link
            to="/"
            className="brand"
            onClick={() => setMenuOpen(false)}
          >
            <div className="brand-logo-wrap">
              <img
                src={logo}
                alt="Planet IIT logo"
                className="brand-logo"
              />

              <span className="brand-logo-ring" />
            </div>

            <div className="brand-copy">
              <span className="brand-name">
                PLANET <span>IIT</span>
              </span>

              <span className="brand-tagline">
                INSTITUTE & INFORMATION TECHNOLOGY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="desktop-navigation"
            aria-label="Main navigation"
          >
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `desktop-nav-link ${isActive ? 'active' : ''
                  }`
                }
              >
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>

          {/* Header CTA */}
          <div className="header-actions">
            <Link
              to="/contact"
              className="header-cta"
            >
              <span>Let's Talk</span>

              <span className="cta-arrow">
                ↗
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`mobile-menu-button ${menuOpen ? 'open' : ''
              }`}
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={
              menuOpen
                ? 'Close navigation'
                : 'Open navigation'
            }
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-navigation"
            initial={{
              opacity: 0,
              y: -30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -30,
            }}
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="mobile-nav-glow" />

            <div className="mobile-nav-inner">

              <div className="mobile-nav-label">
                <span />
                NAVIGATION
              </div>

              <nav>
                {NAV.map((item, index) => (
                  <motion.div
                    key={item.to}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.07,
                      duration: 0.35,
                    }}
                  >
                    <NavLink
                      to={item.to}
                      onClick={() =>
                        setMenuOpen(false)
                      }
                      className={({ isActive }) =>
                        `mobile-nav-link ${isActive ? 'active' : ''
                        }`
                      }
                    >
                      <span className="mobile-nav-number">
                        0{index + 1}
                      </span>

                      <span>
                        {item.label}
                      </span>

                      <span className="mobile-nav-arrow">
                        ↗
                      </span>
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <Link
                to="/contact"
                className="mobile-contact-button"
                onClick={() => setMenuOpen(false)}
              >
                Start a Conversation
                <span>↗</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}