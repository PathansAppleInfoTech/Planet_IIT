import { useState } from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

import Reveal from '../components/Reveal.jsx'

import contactImage from '../assets/contact-hero.png'
import './Contact.css'

const SUBJECTS = [
  'IT solution / software project',
  'Course enquiry',
  'Academic project support',
  'AI / automation requirement',
  'Embedded / IoT / robotics',
  'Something else',
]


const CONTACT_OPTIONS = [
  {
    number: '01',
    title: 'Build with us',
    text: 'Have a software, automation, data or technology requirement?',
  },
  {
    number: '02',
    title: 'Learn with us',
    text: 'Looking for a course, practical training or technical guidance?',
  },
  {
    number: '03',
    title: 'Work on an idea',
    text: 'Need help turning an academic or technical idea into a working project?',
  },
]


export default function Contact() {

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: SUBJECTS[0],
    message: '',
  })

  const [status, setStatus] = useState('idle')


  const update = (key) => (e) => {
    setForm((current) => ({
      ...current,
      [key]: e.target.value,
    }))
  }


  const onSubmit = (e) => {
    e.preventDefault()

    // Backend/email service can be connected here later.
    setStatus('sent')
  }


  return (
    <main className="contact-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="contact-hero">

        <div className="contact-grid-bg" />

        <div className="contact-hero-glow" />

        <div className="container">

          <div className="contact-hero-layout">

            <Reveal className="contact-hero-content">

              <div className="contact-kicker">

                <span />

                PLANET IIT / CONTACT

              </div>


              <h1>
                Let's start
                <br />
                with the
                <span> idea.</span>
              </h1>


              <p>
                Whether you're looking to learn technology,
                build a project or solve a business problem,
                tell us where you want to go.
              </p>


              <div className="contact-hero-meta">

                <div>
                  <span>01</span>
                  <strong>LEARN</strong>
                </div>

                <div>
                  <span>02</span>
                  <strong>BUILD</strong>
                </div>

                <div>
                  <span>03</span>
                  <strong>CONNECT</strong>
                </div>

              </div>

            </Reveal>


            <Reveal
              className="contact-hero-visual"
              delay={0.15}
            >

              <div className="contact-hero-image">

                <img
                  src={contactImage}
                  alt="Planet IIT technology environment"
                />

                <div className="contact-image-overlay" />

                <div className="contact-image-lines" />

              </div>


              <div className="contact-system-card">

                <span className="contact-system-dot" />

                <div>

                  <small>
                    CONNECTION STATUS
                  </small>

                  <strong>
                    OPEN FOR ENQUIRIES
                  </strong>

                </div>

              </div>


              <div className="contact-coordinate">

                <span>NODE</span>

                <strong>
                  PLN / 03
                </strong>

              </div>

            </Reveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT OPTIONS
      ===================================================== */}

      <section className="contact-options-section">

        <div className="container">

          <Reveal className="contact-section-heading">

            <span className="section-kicker">
              01 / START HERE
            </span>

            <h2>
              What are you
              <br />
              <span>working on?</span>
            </h2>

          </Reveal>


          <div className="contact-options-grid">

            {CONTACT_OPTIONS.map((item, index) => (

              <Reveal
                key={item.number}
                className="contact-option"
                delay={index * 0.08}
              >

                <span className="contact-option-number">
                  {item.number}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

                <span className="contact-option-arrow">
                  ↗
                </span>

              </Reveal>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          MAIN CONTACT AREA
      ===================================================== */}

      <section className="contact-main-section">

        <div className="container">

          <div className="contact-main-grid">


            {/* LEFT INFORMATION */}

            <Reveal className="contact-details">

              <span className="section-kicker">
                02 / DIRECT CONNECTION
              </span>

              <h2>
                Tell us
                <br />
                <span>what you need.</span>
              </h2>

              <p className="contact-details-intro">
                Give us a little context and we'll know
                where to direct your enquiry.
              </p>


              <div className="contact-detail-list">

                <div className="contact-detail">

                  <span className="contact-detail-index">
                    01
                  </span>

                  <div>

                    <small>
                      EMAIL
                    </small>

                    <a href="mailto:Info@planetiit.com">
                      info@planetiit.com
                    </a>

                  </div>

                </div>


                <div className="contact-detail">

                  <span className="contact-detail-index">
                    02
                  </span>

                  <div>

                    <small>
                      LOCATION
                    </small>

                    <strong>
                      Near Aruvithura Akshaya Center Erattupetta , Kottayam District Kerala India Pin 686122
                    </strong>

                  </div>

                </div>


                <div className="contact-detail">

                  <span className="contact-detail-index">
                    03
                  </span>

                  <div>

                    <small>
                      AVAILABILITY
                    </small>

                    <strong>
                      On-site 
                      {/* &amp; Remote */}
                    </strong>

                  </div>

                </div>

              </div>


              <div className="contact-note">

                <span className="contact-note-line" />

                <p>
                  We work across technology education,
                  software development, automation,
                  data, AI, embedded systems and
                  project support.
                </p>

              </div>

            </Reveal>


            {/* FORM */}

            <Reveal
              className="contact-form-wrapper"
              delay={0.12}
            >

              {status === 'sent' ? (

                <ContactSuccess
                  email={form.email}
                  onReset={() => {
                    setStatus('idle')
                    setForm({
                      name: '',
                      email: '',
                      phone: '',
                      subject: SUBJECTS[0],
                      message: '',
                    })
                  }}
                />

              ) : (

                <form
                  onSubmit={onSubmit}
                  className="planet-contact-form"
                >

                  <div className="form-top">

                    <div>

                      <span>
                        CONTACT FORM
                      </span>

                      <strong>
                        PROJECT / ENQUIRY
                      </strong>

                    </div>

                    <span className="form-code">
                      03
                    </span>

                  </div>


                  {/* NAME */}

                  <div className="form-field">

                    <label htmlFor="name">
                      <span>01</span>
                      YOUR NAME
                    </label>

                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={update('name')}
                      placeholder="Enter your full name"
                    />

                  </div>


                  {/* EMAIL + PHONE */}

                  <div className="form-row">

                    <div className="form-field">

                      <label htmlFor="email">
                        <span>02</span>
                        EMAIL
                      </label>

                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={update('email')}
                        placeholder="you@example.com"
                      />

                    </div>


                    <div className="form-field">

                      <label htmlFor="phone">
                        <span>03</span>
                        PHONE
                      </label>

                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={update('phone')}
                        placeholder="+91"
                      />

                    </div>

                  </div>


                  {/* SUBJECT */}

                  <div className="form-field">

                    <label htmlFor="subject">
                      <span>04</span>
                      WHAT CAN WE HELP WITH?
                    </label>

                    <select
                      id="subject"
                      value={form.subject}
                      onChange={update('subject')}
                    >

                      {SUBJECTS.map((subject) => (
                        <option
                          key={subject}
                          value={subject}
                        >
                          {subject}
                        </option>
                      ))}

                    </select>

                  </div>


                  {/* MESSAGE */}

                  <div className="form-field">

                    <label htmlFor="message">
                      <span>05</span>
                      MESSAGE
                    </label>

                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={update('message')}
                      placeholder="Tell us about your requirement, idea or learning goal..."
                    />

                  </div>


                  <button
                    type="submit"
                    className="contact-submit"
                  >

                    <span>
                      Send enquiry
                    </span>

                    <strong>
                      ↗
                    </strong>

                  </button>


                  <p className="form-disclaimer">
                    By submitting this form, you are
                    requesting contact from Planet IIT
                    regarding your enquiry.
                  </p>

                </form>

              )}

            </Reveal>

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="contact-bottom">

        <div className="contact-bottom-grid" />

        <div className="container">

          <Reveal className="contact-bottom-content">

            <span className="section-kicker">
              PLANET IIT / CONNECT
            </span>

            <h2>
              Have a question?
              <br />
              <span>Start the conversation.</span>
            </h2>

            <a
              href="mailto:Info@planetiit.com"
              className="contact-email-button"
            >
              Info@planetiit.com
              <span>↗</span>
            </a>

          </Reveal>

        </div>

      </section>

    </main>
  )
}


/* ============================================================
   SUCCESS STATE
   ============================================================ */

function ContactSuccess({ email, onReset }) {

  return (

    <motion.div
      className="contact-success-new"
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
    >

      <div className="success-icon">
        ✓
      </div>

      <span>
        MESSAGE RECEIVED
      </span>

      <h3>
        Thanks for reaching out.
      </h3>

      <p>
        Your enquiry has been recorded locally.
        A real email/backend service can be connected
        here before the website goes live.
      </p>

      {email && (
        <small>
          Contact: {email}
        </small>
      )}

      <button
        type="button"
        onClick={onReset}
        className="success-reset"
      >
        Send another enquiry
        <span>↗</span>
      </button>

    </motion.div>

  )
}