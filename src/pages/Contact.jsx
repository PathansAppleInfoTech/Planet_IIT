import {
  ArrowUpRight,
  Check,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import { motion } from "motion/react";
import { useState } from "react";


/* ======================================================
   Animation
====================================================== */

const reveal = {
  hidden: {
    opacity: 0,
    y: 45,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const revealSlow = {
  hidden: {
    opacity: 0,
    y: 65,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const viewport = {
  once: true,
  amount: 0.18,
};


/* ======================================================
   Contact
====================================================== */

export default function Contact() {

  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiry: "General Enquiry",
    message: "",
  });


  const handleChange = (event) => {
    const {
      name,
      value,
    } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    /*
      Connect your backend / Formspree / EmailJS /
      API endpoint here later.
    */

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };


  return (
    <main className="overflow-hidden bg-[#f7faff]">


      {/* ==================================================
          PAGE HERO
      ================================================== */}

      <section className="relative overflow-hidden pt-36 pb-20 sm:pt-40 sm:pb-24">

        {/* Grid */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.45]
            [background-image:linear-gradient(rgba(7,87,168,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(7,87,168,0.045)_1px,transparent_1px)]
            [background-size:72px_72px]
          "
        />


        {/* Blue glow */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-[-8%]
            top-[-20%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#1475d1]/10
            blur-[120px]
          "
        />


        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">

          <div className="grid items-end gap-12 lg:grid-cols-[1.2fr_0.8fr]">


            {/* Heading */}

            <motion.div
              initial={{
                opacity: 0,
                y: 45,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
            >

              <div className="mb-7 flex items-center gap-3">

                <span className="h-px w-9 bg-[#0757a8]" />

                <span
                  className="
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-[#0757a8]
                  "
                >
                  Contact Planet IIT
                </span>

              </div>


              <h1
                className="
                  max-w-[950px]
                  font-[Manrope]
                  text-[clamp(3.5rem,7vw,7rem)]
                  font-extrabold
                  leading-[0.87]
                  tracking-[-0.075em]
                  text-[#10243a]
                "
              >
                Let's build
                <br />

                <span className="text-[#0757a8]">
                  something
                </span>
                <br />

                meaningful.
              </h1>

            </motion.div>


            {/* Description */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="lg:pb-2"
            >

              <p
                className="
                  max-w-[480px]
                  text-base
                  leading-8
                  text-[#607086]
                  sm:text-lg
                "
              >
                Looking to learn a new technology, develop a
                project, explore an idea or work with our
                technology team? We'd love to hear from you.
              </p>


              <div className="mt-8 flex items-center gap-3">

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0757a8] text-white">
                  <ArrowUpRight size={17} />
                </span>

                <span
                  className="
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-[#8b99aa]
                  "
                >
                  Erattupetta · Kottayam · Kerala
                </span>

              </div>

            </motion.div>

          </div>


          <motion.div
            initial={{
              scaleX: 0,
            }}
            animate={{
              scaleX: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              mt-16
              h-px
              origin-left
              bg-[#0757a8]/15
            "
          />

        </div>
      </section>


      {/* ==================================================
          CONTACT DETAILS
      ================================================== */}

      <section className="bg-white py-24 sm:py-32">

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">


            {/* Left */}

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >

              <span
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-[#0757a8]
                "
              >
                01 / Reach us
              </span>


              <h2
                className="
                  mt-5
                  max-w-[500px]
                  font-[Manrope]
                  text-4xl
                  font-extrabold
                  leading-[0.95]
                  tracking-[-0.055em]
                  text-[#10243a]
                  sm:text-5xl
                "
              >
                Start with a
                <br />
                conversation.
              </h2>


              <p
                className="
                  mt-7
                  max-w-[430px]
                  text-sm
                  leading-7
                  text-[#607086]
                "
              >
                Whether your question is about a course,
                academic project or technology solution, our
                team can help you find the right direction.
              </p>


              {/* Contact details */}

              <div className="mt-10 space-y-7">


                <a
                  href="mailto:info@planetiit.com"
                  className="
                    group
                    flex
                    items-start
                    gap-4
                  "
                >

                  <span
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#eef5fc]
                      text-[#0757a8]
                      transition-colors
                      duration-300
                      group-hover:bg-[#0757a8]
                      group-hover:text-white
                    "
                  >
                    <Mail size={18} />
                  </span>


                  <div>

                    <span
                      className="
                        block
                        font-mono
                        text-[9px]
                        uppercase
                        tracking-[0.18em]
                        text-[#8b99aa]
                      "
                    >
                      Email
                    </span>

                    <span
                      className="
                        mt-1
                        block
                        text-sm
                        font-bold
                        text-[#10243a]
                        transition-colors
                        group-hover:text-[#0757a8]
                      "
                    >
                      info@planetiit.com
                    </span>

                  </div>

                </a>


                <a
                  href="tel:+919544006688"
                  className="
                    group
                    flex
                    items-start
                    gap-4
                  "
                >

                  <span
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#eef5fc]
                      text-[#0757a8]
                      transition-colors
                      duration-300
                      group-hover:bg-[#0757a8]
                      group-hover:text-white
                    "
                  >
                    <Phone size={18} />
                  </span>


                  <div>

                    <span
                      className="
                        block
                        font-mono
                        text-[9px]
                        uppercase
                        tracking-[0.18em]
                        text-[#8b99aa]
                      "
                    >
                      Phone
                    </span>

                    <span
                      className="
                        mt-1
                        block
                        text-sm
                        font-bold
                        text-[#10243a]
                        transition-colors
                        group-hover:text-[#0757a8]
                      "
                    >
                      +91 95440 06688
                    </span>

                  </div>

                </a>


                <div className="flex items-start gap-4">

                  <span
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#eef5fc]
                      text-[#0757a8]
                    "
                  >
                    <MapPin size={18} />
                  </span>


                  <div>

                    <span
                      className="
                        block
                        font-mono
                        text-[9px]
                        uppercase
                        tracking-[0.18em]
                        text-[#8b99aa]
                      "
                    >
                      Visit us
                    </span>

                    <p
                      className="
                        mt-1
                        max-w-[270px]
                        text-sm
                        font-bold
                        leading-6
                        text-[#10243a]
                      "
                    >
                      Near Aruvithura Akshaya Center,
                      <br />
                      Erattupetta,
                      <br />
                      Kottayam District,
                      <br />
                      Kerala — 686122
                    </p>

                  </div>

                </div>


                <div className="flex items-start gap-4">

                  <span
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#eef5fc]
                      text-[#0757a8]
                    "
                  >
                    <Clock3 size={18} />
                  </span>


                  <div>

                    <span
                      className="
                        block
                        font-mono
                        text-[9px]
                        uppercase
                        tracking-[0.18em]
                        text-[#8b99aa]
                      "
                    >
                      Working hours
                    </span>

                    <p
                      className="
                        mt-1
                        text-sm
                        font-bold
                        leading-6
                        text-[#10243a]
                      "
                    >
                      Monday – Saturday
                      <br />
                      09:00 AM – 06:00 PM
                    </p>

                  </div>

                </div>

              </div>

            </motion.div>


            {/* Right visual */}

            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={viewport}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                relative
                min-h-[540px]
                overflow-hidden
                bg-[#dceafa]
              "
            >

              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85"
                alt="Modern technology office workspace representing Planet IIT's professional environment"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-[#052f5f]/25
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#052f5f]/75
                  via-transparent
                  to-transparent
                "
              />


              {/* Image label */}

              <div
                className="
                  absolute
                  bottom-7
                  left-7
                  right-7
                  flex
                  items-end
                  justify-between
                  gap-5
                  sm:bottom-10
                  sm:left-10
                  sm:right-10
                "
              >

                <div>

                  <span
                    className="
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-white/60
                    "
                  >
                    Planet IIT
                  </span>

                  <p
                    className="
                      mt-2
                      font-[Manrope]
                      text-2xl
                      font-bold
                      tracking-[-0.04em]
                      text-white
                    "
                  >
                    Ideas start here.
                  </p>

                </div>


                <div
                  className="
                    hidden
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/30
                    text-white
                    sm:flex
                  "
                >
                  <ArrowUpRight size={20} />
                </div>

              </div>

            </motion.div>

          </div>

        </div>
      </section>


      {/* ==================================================
          CONTACT FORM
      ================================================== */}

      <section className="bg-[#eef5fc] py-28 sm:py-36">

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">


            {/* Form introduction */}

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >

              <span
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-[#0757a8]
                "
              >
                02 / Send a message
              </span>


              <h2
                className="
                  mt-5
                  max-w-[500px]
                  font-[Manrope]
                  text-4xl
                  font-extrabold
                  leading-[0.95]
                  tracking-[-0.055em]
                  text-[#10243a]
                  sm:text-5xl
                "
              >
                Tell us what
                you're thinking.
              </h2>


              <p
                className="
                  mt-7
                  max-w-[400px]
                  text-sm
                  leading-7
                  text-[#607086]
                "
              >
                Give us a little context and our team will
                know how to direct your enquiry.
              </p>


              <div className="mt-10 hidden lg:block">

                <div
                  className="
                    border-l-2
                    border-[#0757a8]
                    pl-5
                  "
                >

                  <p
                    className="
                      font-[Manrope]
                      text-lg
                      font-bold
                      leading-7
                      tracking-[-0.02em]
                      text-[#10243a]
                    "
                  >
                    Learning something new?
                    <br />
                    Building something ambitious?
                  </p>

                  <p className="mt-3 text-xs leading-5 text-[#8b99aa]">
                    Choose the enquiry type in the form and
                    tell us where you're starting from.
                  </p>

                </div>

              </div>

            </motion.div>


            {/* Form */}

            <motion.form
              variants={revealSlow}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              onSubmit={handleSubmit}
              className="
                relative
                border-t
                border-[#0757a8]/15
                pt-8
              "
            >

              {/* Success message */}

              {submitted && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="
                    mb-8
                    flex
                    items-center
                    gap-3
                    border
                    border-[#0757a8]/15
                    bg-white
                    px-5
                    py-4
                    text-sm
                    font-semibold
                    text-[#0757a8]
                  "
                >
                  <span
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      bg-[#0757a8]
                      text-white
                    "
                  >
                    <Check size={14} />
                  </span>

                  Thank you. Your message has been received.
                </motion.div>
              )}


              <div className="grid gap-8 md:grid-cols-2">


                {/* Name */}

                <div className="group relative">

                  <label
                    htmlFor="name"
                    className="
                      mb-2
                      block
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.18em]
                      text-[#8b99aa]
                    "
                  >
                    Your name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="
                      w-full
                      border-b
                      border-[#0757a8]/15
                      bg-transparent
                      py-3
                      text-sm
                      font-medium
                      text-[#10243a]
                      outline-none
                      placeholder:text-[#a7b1bd]
                      transition-colors
                      focus:border-[#0757a8]
                    "
                  />

                </div>


                {/* Email */}

                <div className="group relative">

                  <label
                    htmlFor="email"
                    className="
                      mb-2
                      block
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.18em]
                      text-[#8b99aa]
                    "
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="
                      w-full
                      border-b
                      border-[#0757a8]/15
                      bg-transparent
                      py-3
                      text-sm
                      font-medium
                      text-[#10243a]
                      outline-none
                      placeholder:text-[#a7b1bd]
                      transition-colors
                      focus:border-[#0757a8]
                    "
                  />

                </div>


                {/* Phone */}

                <div className="group relative">

                  <label
                    htmlFor="phone"
                    className="
                      mb-2
                      block
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.18em]
                      text-[#8b99aa]
                    "
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91"
                    className="
                      w-full
                      border-b
                      border-[#0757a8]/15
                      bg-transparent
                      py-3
                      text-sm
                      font-medium
                      text-[#10243a]
                      outline-none
                      placeholder:text-[#a7b1bd]
                      transition-colors
                      focus:border-[#0757a8]
                    "
                  />

                </div>


                {/* Enquiry */}

                <div>

                  <label
                    htmlFor="enquiry"
                    className="
                      mb-2
                      block
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.18em]
                      text-[#8b99aa]
                    "
                  >
                    Enquiry type
                  </label>

                  <select
                    id="enquiry"
                    name="enquiry"
                    value={formData.enquiry}
                    onChange={handleChange}
                    className="
                      w-full
                      border-b
                      border-[#0757a8]/15
                      bg-transparent
                      py-3
                      text-sm
                      font-medium
                      text-[#10243a]
                      outline-none
                      transition-colors
                      focus:border-[#0757a8]
                    "
                  >
                    <option>
                      General Enquiry
                    </option>

                    <option>
                      Course Enquiry
                    </option>

                    <option>
                      Academic Project
                    </option>

                    <option>
                      IT / Development
                    </option>

                    <option>
                      Partnership
                    </option>
                  </select>

                </div>


                {/* Message */}

                <div className="md:col-span-2">

                  <label
                    htmlFor="message"
                    className="
                      mb-2
                      block
                      font-mono
                      text-[9px]
                      uppercase
                      tracking-[0.18em]
                      text-[#8b99aa]
                    "
                  >
                    Your message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us a little about your requirement..."
                    className="
                      w-full
                      resize-none
                      border-b
                      border-[#0757a8]/15
                      bg-transparent
                      py-3
                      text-sm
                      font-medium
                      leading-7
                      text-[#10243a]
                      outline-none
                      placeholder:text-[#a7b1bd]
                      transition-colors
                      focus:border-[#0757a8]
                    "
                  />

                </div>

              </div>


              {/* Submit */}

              <div
                className="
                  mt-9
                  flex
                  flex-col
                  gap-5
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >

                <p className="max-w-[330px] text-[11px] leading-5 text-[#8b99aa]">
                  By submitting this form, you agree to be
                  contacted regarding your enquiry.
                </p>


                <button
                  type="submit"
                  className="
                    group
                    inline-flex
                    h-13
                    shrink-0
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-[#0757a8]
                    px-7
                    text-sm
                    font-bold
                    !text-white
                    shadow-[0_15px_40px_rgba(7,87,168,0.18)]
                    transition-all
                    duration-300
                    hover:bg-[#043b78]
                    hover:shadow-[0_20px_50px_rgba(7,87,168,0.25)]
                  "
                >

                  Send message

                  <Send
                    size={16}
                    className="
                      text-white
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />

                </button>

              </div>

            </motion.form>

          </div>

        </div>
      </section>


      {/* ==================================================
          ACADEMY / IT ENQUIRIES
      ================================================== */}

      <section className="bg-white py-24 sm:py-32">

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mb-14"
          >

            <span
              className="
                font-mono
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-[#0757a8]
              "
            >
              03 / What can we help with?
            </span>

            <h2
              className="
                mt-5
                max-w-[800px]
                font-[Manrope]
                text-4xl
                font-extrabold
                leading-[0.95]
                tracking-[-0.055em]
                text-[#10243a]
                sm:text-5xl
              "
            >
              Different starting points.
              <br />
              <span className="text-[#0757a8]">
                One conversation.
              </span>
            </h2>

          </motion.div>


          <div
            className="
              grid
              border-t
              border-[#0757a8]/10
              md:grid-cols-2
            "
          >

            {/* Academy */}

            <motion.a
              href="/courses"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="
                group
                border-b
                border-[#0757a8]/10
                p-8
                md:border-b-0
                md:border-r
                md:p-12
              "
            >

              <div className="flex items-start justify-between">

                <span
                  className="
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-[#0757a8]
                  "
                >
                  ACADEMY / 01
                </span>

                <ArrowUpRight
                  size={19}
                  className="
                    text-[#0757a8]
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />

              </div>


              <h3
                className="
                  mt-20
                  font-[Manrope]
                  text-4xl
                  font-extrabold
                  tracking-[-0.05em]
                  text-[#10243a]
                  transition-colors
                  duration-300
                  group-hover:text-[#0757a8]
                  sm:text-5xl
                "
              >
                Want to learn
                <br />
                technology?
              </h3>


              <p
                className="
                  mt-5
                  max-w-[470px]
                  text-sm
                  leading-7
                  text-[#607086]
                "
              >
                Explore courses, practical training and
                academic project guidance across modern
                technology domains.
              </p>


              <span
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  text-xs
                  font-bold
                  text-[#0757a8]
                "
              >
                Explore courses
                <ArrowUpRight size={14} />
              </span>

            </motion.a>


            {/* IT */}

            <motion.a
              href="mailto:info@planetiit.com?subject=IT%20Solution%20Enquiry"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{
                delay: 0.1,
              }}
              className="
                group
                bg-[#10243a]
                p-8
                text-white
                transition-colors
                duration-500
                hover:bg-[#0757a8]
                md:p-12
              "
            >

              <div className="flex items-start justify-between">

                <span
                  className="
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-[#71b8f8]
                  "
                >
                  IT SOLUTIONS / 02
                </span>

                <ArrowUpRight
                  size={19}
                  className="
                    text-[#71b8f8]
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />

              </div>


              <h3
                className="
                  mt-20
                  font-[Manrope]
                  text-4xl
                  font-extrabold
                  leading-[0.95]
                  tracking-[-0.05em]
                  !text-white
                  sm:text-5xl
                "
              >
                Have something
                <br />
                to build?
              </h3>


              <p
                className="
                  mt-5
                  max-w-[470px]
                  text-sm
                  leading-7
                  text-white/55
                "
              >
                Tell us about your product, application,
                automation or technology challenge and let's
                explore what we can create together.
              </p>


              <span
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  text-xs
                  font-bold
                  text-[#71b8f8]
                "
              >
                Talk to our team
                <ArrowUpRight size={14} />
              </span>

            </motion.a>

          </div>

        </div>
      </section>


      {/* ==================================================
          LOCATION
      ================================================== */}

      <section className="bg-[#eef5fc] py-24 sm:py-32">

        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

          <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">


            {/* Location info */}

            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >

              <span
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-[#0757a8]
                "
              >
                04 / Find us
              </span>


              <h2
                className="
                  mt-5
                  font-[Manrope]
                  text-4xl
                  font-extrabold
                  leading-[0.95]
                  tracking-[-0.055em]
                  text-[#10243a]
                  sm:text-5xl
                "
              >
                Come
                <br />
                say hello.
              </h2>


              <p
                className="
                  mt-7
                  max-w-[390px]
                  text-sm
                  leading-7
                  text-[#607086]
                "
              >
                Visit Planet IIT in Erattupetta, Kottayam
                District, Kerala.
              </p>


              <a
                href="https://www.google.com/maps/search/?api=1&query=Near+Aruvithura+Akshaya+Center+Erattupetta+Kottayam+Kerala+686122"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  mt-8
                  inline-flex
                  items-center
                  gap-3
                  text-sm
                  font-bold
                  text-[#0757a8]
                "
              >
                Open in Google Maps

                <span
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#0757a8]/20
                    transition-all
                    duration-300
                    group-hover:bg-[#0757a8]
                    group-hover:text-white
                  "
                >
                  <ArrowUpRight size={15} />
                </span>

              </a>

            </motion.div>


            {/* Map placeholder */}

            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={viewport}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                relative
                min-h-[420px]
                overflow-hidden
                border
                border-[#0757a8]/10
                bg-white
              "
            >

              {/* Map-like background */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  opacity-70
                  [background-image:linear-gradient(rgba(7,87,168,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(7,87,168,0.08)_1px,transparent_1px)]
                  [background-size:55px_55px]
                "
              />


              {/* Roads */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  left-[-10%]
                  top-[48%]
                  h-[2px]
                  w-[120%]
                  rotate-[12deg]
                  bg-[#0757a8]/10
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute
                  left-[45%]
                  top-[-20%]
                  h-[150%]
                  w-[2px]
                  rotate-[32deg]
                  bg-[#0757a8]/10
                "
              />


              {/* Location marker */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                "
              >

                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.25, 0, 0.25],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className="
                    absolute
                    -inset-5
                    rounded-full
                    bg-[#0757a8]
                  "
                />

                <div
                  className="
                    relative
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0757a8]
                    text-white
                    shadow-[0_15px_40px_rgba(7,87,168,0.3)]
                  "
                >
                  <MapPin size={22} />
                </div>

              </div>


              {/* Address overlay */}

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                  bg-white/95
                  p-5
                  shadow-[0_15px_50px_rgba(7,87,168,0.1)]
                  backdrop-blur-xl
                  sm:bottom-7
                  sm:left-7
                  sm:right-auto
                  sm:max-w-[360px]
                "
              >

                <span
                  className="
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.18em]
                    text-[#0757a8]
                  "
                >
                  Planet IIT
                </span>

                <p
                  className="
                    mt-2
                    text-sm
                    font-semibold
                    leading-6
                    text-[#10243a]
                  "
                >
                  Near Aruvithura Akshaya Center,
                  Erattupetta, Kottayam District,
                  Kerala — 686122
                </p>

              </div>

            </motion.div>

          </div>

        </div>
      </section>


      {/* ==================================================
          FINAL CTA
      ================================================== */}

      <section className="relative overflow-hidden bg-white py-28 sm:py-36">

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.09]
            [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
            [background-size:75px_75px]
          "
        />


        <motion.div
          variants={revealSlow}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="
            relative
            z-10
            mx-auto
            max-w-[1000px]
            px-6
            text-center
          "
        >

          <span
            className="
              font-mono
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-color-[#eef5fc]
            "
          >
            Planet IIT
          </span>


          <h2
            className="
              mt-6
              font-[Manrope]
              text-[clamp(3rem,6vw,6rem)]
              font-extrabold
              leading-[0.9]
              tracking-[-0.07em]
              text-white
            "
          >
            Your next idea
            <br />
            could start here.
          </h2>



          <a
            href="mailto:info@planetiit.com"
            className="
              group
              mt-9
              inline-flex
              h-14
              items-center
              gap-3
              rounded-full
              bg-[#eef5fc]
              px-7
              text-sm
              font-bold
              text-[#0757a8]
              transition-all
              duration-300
              hover:bg-[#eef5fc]
            "
          >

            info@planetiit.com

            <span
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-[#0757a8]/10
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              <ArrowUpRight size={15} />
            </span>

          </a>

        </motion.div>

      </section>

    </main>
  );
}