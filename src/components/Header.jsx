import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

import { courseCategories } from "../data/courses";


const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Courses",
    href: "/courses",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];


export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);

  const currentPath = window.location.pathname;


  // ==========================================================
  // ACTIVE PAGE HELPERS
  // ==========================================================

  const isHomeActive =
    currentPath === "/" ||
    currentPath === "";

  const isAboutActive =
    currentPath === "/about" ||
    currentPath.startsWith("/about/");

  const isCoursesActive =
    currentPath === "/courses" ||
    currentPath.startsWith("/courses/");

  const isContactActive =
    currentPath === "/contact" ||
    currentPath.startsWith("/contact/");


  const getActiveState = (label) => {
    switch (label) {
      case "Home":
        return isHomeActive;

      case "About":
        return isAboutActive;

      case "Courses":
        return isCoursesActive;

      case "Contact":
        return isContactActive;

      default:
        return false;
    }
  };


  // ==========================================================
  // CLOSE MOBILE MENU
  // ==========================================================

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileCoursesOpen(false);
  };


  return (
    <>
      {/* ======================================================
          MAIN HEADER
      ======================================================= */}

      <motion.header
        initial={{
          y: -30,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          fixed
          left-0
          right-0
          top-0
          z-[100]
          px-4
          pt-4
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            mx-auto
            flex
            h-[74px]
            max-w-[1400px]
            items-center
            justify-between
            rounded-full
            border
            border-slate-200/80
            bg-white/90
            px-4
            shadow-[0_12px_45px_rgba(8,53,94,0.07)]
            backdrop-blur-xl
            sm:px-5
            lg:px-6
          "
        >

          {/* ==================================================
              LOGO
          =================================================== */}

          <a
            href="/"
            aria-label="Planet IIT Home"
            onClick={closeMobileMenu}
            className="
              group
              flex
              shrink-0
              items-center
            "
          >
            <img
              src="/assets/logo-transparent.png"
              alt="Planet IIT - Planet Institute and Information Technology"
              className="
                h-[52px]
                w-auto
                object-contain
                transition-transform
                duration-500
                group-hover:scale-[1.04]
              "
            />
          </a>


          {/* ==================================================
              DESKTOP NAVIGATION
          =================================================== */}

          <nav
            aria-label="Main navigation"
            className="
              hidden
              items-center
              gap-1
              lg:flex
            "
          >

            {/* HOME */}

            <a
              href="/"
              className={`
                group
                relative
                flex
                h-11
                items-center
                px-5
                text-[14px]
                font-semibold
                tracking-[-0.01em]
                transition-colors
                duration-300
                ${
                  getActiveState("Home")
                    ? "text-[#0757a8]"
                    : "text-slate-600 hover:text-[#0757a8]"
                }
              `}
            >
              <span className="relative z-10">
                Home
              </span>

              <span
                className={`
                  absolute
                  bottom-1.5
                  left-1/2
                  h-[2px]
                  -translate-x-1/2
                  rounded-full
                  bg-[#0757a8]
                  transition-all
                  duration-300
                  ${
                    getActiveState("Home")
                      ? "w-5"
                      : "w-0 group-hover:w-5"
                  }
                `}
              />
            </a>


            {/* ABOUT */}

            <a
              href="/about"
              className={`
                group
                relative
                flex
                h-11
                items-center
                px-5
                text-[14px]
                font-semibold
                tracking-[-0.01em]
                transition-colors
                duration-300
                ${
                  getActiveState("About")
                    ? "text-[#0757a8]"
                    : "text-slate-600 hover:text-[#0757a8]"
                }
              `}
            >
              <span className="relative z-10">
                About
              </span>

              <span
                className={`
                  absolute
                  bottom-1.5
                  left-1/2
                  h-[2px]
                  -translate-x-1/2
                  rounded-full
                  bg-[#0757a8]
                  transition-all
                  duration-300
                  ${
                    getActiveState("About")
                      ? "w-5"
                      : "w-0 group-hover:w-5"
                  }
                `}
              />
            </a>


            {/* =================================================
                COURSES + DROPDOWN
            ================================================== */}

            <div className="group relative">

              {/* Courses main link */}

              <a
                href="/courses"
                className={`
                  relative
                  flex
                  h-11
                  items-center
                  gap-1.5
                  px-5
                  text-[14px]
                  font-semibold
                  tracking-[-0.01em]
                  transition-colors
                  duration-300
                  ${
                    getActiveState("Courses")
                      ? "text-[#0757a8]"
                      : "text-slate-600 hover:text-[#0757a8]"
                  }
                `}
              >
                <span className="relative z-10">
                  Courses
                </span>

                <ChevronDown
                  size={14}
                  strokeWidth={2}
                  className="
                    transition-transform
                    duration-300
                    group-hover:rotate-180
                  "
                />

                {/* Active underline */}

                <span
                  className={`
                    absolute
                    bottom-1.5
                    left-1/2
                    h-[2px]
                    -translate-x-1/2
                    rounded-full
                    bg-[#0757a8]
                    transition-all
                    duration-300
                    ${
                      getActiveState("Courses")
                        ? "w-5"
                        : "w-0 group-hover:w-5"
                    }
                  `}
                />
              </a>


              {/* =================================================
                  DESKTOP DROPDOWN
              ================================================== */}

              <div
                className="
                  invisible
                  absolute
                  left-1/2
                  top-[calc(100%+14px)]
                  w-[410px]
                  -translate-x-1/2
                  translate-y-3
                  opacity-0
                  transition-all
                  duration-300
                  group-hover:visible
                  group-hover:translate-y-0
                  group-hover:opacity-100
                "
              >

                {/* Dropdown arrow */}

                <div
                  className="
                    absolute
                    -top-2
                    left-1/2
                    h-4
                    w-4
                    -translate-x-1/2
                    rotate-45
                    border-l
                    border-t
                    border-slate-200
                    bg-white
                  "
                />


                {/* Dropdown container */}

                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[26px]
                    border
                    border-slate-200
                    bg-white
                    p-2
                    shadow-[0_25px_70px_rgba(8,53,94,0.15)]
                  "
                >

                  {/* Header */}

                  <div className="px-4 pb-3 pt-4">
                    <div
                      className="
                        font-mono
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.22em]
                        text-[#0757a8]
                      "
                    >
                      Planet IIT
                    </div>

                    <div
                      className="
                        mt-1
                        text-sm
                        font-bold
                        tracking-[-0.02em]
                        text-[#10243a]
                      "
                    >
                      Explore our courses
                    </div>
                  </div>


                  {/* =================================================
                      COURSE LIST
                  ================================================== */}

                  <div className="max-h-[430px] overflow-y-auto pr-1">

                    {courseCategories.map((course) => {
                      const courseHref =
                        `/courses/${course.slug}`;

                      const isCurrentCourse =
                        currentPath === courseHref;

                      return (
                        <a
                          key={course.slug}
                          href={courseHref}
                          className={`
                            group/course
                            relative
                            flex
                            items-center
                            gap-3
                            rounded-[17px]
                            px-4
                            py-3.5
                            transition-all
                            duration-200
                            ${
                              isCurrentCourse
                                ? "bg-[#0757a8]/[0.06]"
                                : "hover:bg-[#0757a8]/[0.04]"
                            }
                          `}
                        >

                          {/* Number */}

                          <span
                            className={`
                              flex
                              h-8
                              w-8
                              shrink-0
                              items-center
                              justify-center
                              rounded-xl
                              font-mono
                              text-[9px]
                              font-bold
                              transition-all
                              duration-200
                              ${
                                isCurrentCourse
                                  ? "bg-[#0757a8] text-white"
                                  : "bg-[#0757a8]/[0.06] text-[#0757a8]/60 group-hover/course:bg-[#0757a8] group-hover/course:text-white"
                              }
                            `}
                          >
                            {course.index}
                          </span>


                          {/* Course text */}

                          <div className="min-w-0 flex-1">

                            <div
                              className={`
                                truncate
                                text-[13px]
                                font-bold
                                tracking-[-0.01em]
                                transition-colors
                                duration-200
                                ${
                                  isCurrentCourse
                                    ? "text-[#0757a8]"
                                    : "text-[#10243a] group-hover/course:text-[#0757a8]"
                                }
                              `}
                            >
                              {course.title}
                            </div>

                            <div
                              className="
                                mt-0.5
                                truncate
                                text-[10px]
                                text-[#607086]
                              "
                            >
                              {course.shortTitle}
                            </div>

                          </div>


                          {/* Arrow */}

                          <ArrowUpRight
                            size={15}
                            strokeWidth={1.8}
                            className={`
                              shrink-0
                              transition-all
                              duration-300
                              ${
                                isCurrentCourse
                                  ? "text-[#0757a8]"
                                  : "translate-x-1 translate-y-1 text-[#0757a8]/30 opacity-0 group-hover/course:translate-x-0 group-hover/course:translate-y-0 group-hover/course:opacity-100"
                              }
                            `}
                          />

                        </a>
                      );
                    })}

                  </div>


                  {/* =================================================
                      VIEW ALL COURSES
                  ================================================== */}

                  <div className="mt-1 border-t border-slate-100 pt-2">

                    <a
                      href="/courses"
                      className="
                        group/all
                        flex
                        items-center
                        justify-between
                        rounded-[17px]
                        px-4
                        py-3
                        text-xs
                        font-bold
                        text-[#0757a8]
                        transition-colors
                        duration-200
                        hover:bg-[#0757a8]/5
                      "
                    >
                      <span>
                        View all courses
                      </span>

                      <ArrowUpRight
                        size={15}
                        className="
                          transition-transform
                          duration-300
                          group-hover/all:translate-x-0.5
                          group-hover/all:-translate-y-0.5
                        "
                      />
                    </a>

                  </div>

                </div>

              </div>

            </div>


            {/* CONTACT */}

            <a
              href="/contact"
              className={`
                group
                relative
                flex
                h-11
                items-center
                px-5
                text-[14px]
                font-semibold
                tracking-[-0.01em]
                transition-colors
                duration-300
                ${
                  getActiveState("Contact")
                    ? "text-[#0757a8]"
                    : "text-slate-600 hover:text-[#0757a8]"
                }
              `}
            >
              <span className="relative z-10">
                Contact
              </span>

              <span
                className={`
                  absolute
                  bottom-1.5
                  left-1/2
                  h-[2px]
                  -translate-x-1/2
                  rounded-full
                  bg-[#0757a8]
                  transition-all
                  duration-300
                  ${
                    getActiveState("Contact")
                      ? "w-5"
                      : "w-0 group-hover:w-5"
                  }
                `}
              />
            </a>

          </nav>


          {/* ==================================================
              RIGHT SIDE
          =================================================== */}

          <div className="flex items-center gap-2">

            {/* CTA */}

            <a
              href="/contact"
              className="
                group
                hidden
                h-11
                items-center
                gap-2
                rounded-full
                bg-[#0757a8]
                px-5
                text-[13px]
                font-bold
                tracking-wide
                !text-white
                shadow-[0_8px_25px_rgba(7,87,168,0.18)]
                transition-all
                duration-300
                hover:bg-[#043b78]
                hover:!text-white
                hover:shadow-[0_12px_32px_rgba(7,87,168,0.25)]
                lg:flex
              "
            >
              Start a Conversation

              <ArrowUpRight
                size={16}
                strokeWidth={2.2}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </a>


            {/* Mobile menu */}

            <button
              type="button"
              aria-label={
                mobileOpen
                  ? "Close navigation"
                  : "Open navigation"
              }
              aria-expanded={mobileOpen}
              onClick={() => {
                setMobileOpen(!mobileOpen);

                if (mobileOpen) {
                  setMobileCoursesOpen(false);
                }
              }}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                text-slate-700
                transition-all
                duration-300
                hover:border-[#0757a8]/30
                hover:text-[#0757a8]
                lg:hidden
              "
            >
              <AnimatePresence mode="wait">

                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{
                      rotate: -90,
                      opacity: 0,
                    }}
                    animate={{
                      rotate: 0,
                      opacity: 1,
                    }}
                    exit={{
                      rotate: 90,
                      opacity: 0,
                    }}
                  >
                    <X size={20} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{
                      rotate: 90,
                      opacity: 0,
                    }}
                    animate={{
                      rotate: 0,
                      opacity: 1,
                    }}
                    exit={{
                      rotate: -90,
                      opacity: 0,
                    }}
                  >
                    <Menu size={20} />
                  </motion.span>
                )}

              </AnimatePresence>
            </button>

          </div>

        </div>
      </motion.header>


      {/* ======================================================
          MOBILE NAVIGATION
      ======================================================= */}

      <AnimatePresence>

        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              fixed
              inset-x-4
              top-[98px]
              z-[99]
              max-h-[calc(100vh-115px)]
              overflow-y-auto
              rounded-[28px]
              border
              border-slate-200
              bg-white
              shadow-[0_25px_70px_rgba(8,53,94,0.14)]
              lg:hidden
            "
          >

            <nav
              aria-label="Mobile navigation"
              className="p-3"
            >

              {/* =================================================
                  HOME
              ================================================== */}

              <a
                href="/"
                onClick={closeMobileMenu}
                className={`
                  relative
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  px-5
                  py-4
                  text-[15px]
                  font-semibold
                  transition-all
                  duration-200
                  ${
                    isHomeActive
                      ? "bg-[#0757a8]/5 text-[#0757a8]"
                      : "text-slate-700 hover:bg-[#0757a8]/5 hover:text-[#0757a8]"
                  }
                `}
              >
                <span>
                  Home
                </span>

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                />

                {isHomeActive && (
                  <span
                    className="
                      absolute
                      left-2
                      top-1/2
                      h-5
                      w-[2px]
                      -translate-y-1/2
                      rounded-full
                      bg-[#0757a8]
                    "
                  />
                )}
              </a>


              {/* =================================================
                  ABOUT
              ================================================== */}

              <a
                href="/about"
                onClick={closeMobileMenu}
                className={`
                  relative
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  px-5
                  py-4
                  text-[15px]
                  font-semibold
                  transition-all
                  duration-200
                  ${
                    isAboutActive
                      ? "bg-[#0757a8]/5 text-[#0757a8]"
                      : "text-slate-700 hover:bg-[#0757a8]/5 hover:text-[#0757a8]"
                  }
                `}
              >
                <span>
                  About
                </span>

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                />

                {isAboutActive && (
                  <span
                    className="
                      absolute
                      left-2
                      top-1/2
                      h-5
                      w-[2px]
                      -translate-y-1/2
                      rounded-full
                      bg-[#0757a8]
                    "
                  />
                )}
              </a>


              {/* =================================================
                  COURSES MOBILE
              ================================================== */}

              <div>

                <button
                  type="button"
                  onClick={() =>
                    setMobileCoursesOpen(
                      !mobileCoursesOpen
                    )
                  }
                  className={`
                    relative
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-2xl
                    px-5
                    py-4
                    text-left
                    text-[15px]
                    font-semibold
                    transition-all
                    duration-200
                    ${
                      isCoursesActive
                        ? "bg-[#0757a8]/5 text-[#0757a8]"
                        : "text-slate-700 hover:bg-[#0757a8]/5 hover:text-[#0757a8]"
                    }
                  `}
                >

                  <span>
                    Courses
                  </span>

                  <motion.span
                    animate={{
                      rotate: mobileCoursesOpen
                        ? 180
                        : 0,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    <ChevronDown size={18} />
                  </motion.span>

                  {isCoursesActive && (
                    <span
                      className="
                        absolute
                        left-2
                        top-1/2
                        h-5
                        w-[2px]
                        -translate-y-1/2
                        rounded-full
                        bg-[#0757a8]
                      "
                    />
                  )}

                </button>


                {/* Mobile course submenu */}

                <AnimatePresence initial={false}>

                  {mobileCoursesOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="overflow-hidden"
                    >

                      <div className="ml-3 border-l border-[#0757a8]/10 pl-2">

                        {/* All courses */}

                        <a
                          href="/courses"
                          onClick={closeMobileMenu}
                          className={`
                            flex
                            items-center
                            justify-between
                            rounded-xl
                            px-4
                            py-3
                            text-[13px]
                            font-bold
                            transition-colors
                            ${
                              currentPath === "/courses"
                                ? "bg-[#0757a8]/5 text-[#0757a8]"
                                : "text-slate-700 hover:bg-[#0757a8]/5 hover:text-[#0757a8]"
                            }
                          `}
                        >
                          <span>
                            All Courses
                          </span>

                          <ArrowUpRight size={15} />
                        </a>


                        {/* All individual courses */}

                        {courseCategories.map(
                          (course, index) => {
                            const courseHref =
                              `/courses/${course.slug}`;

                            const isCurrentCourse =
                              currentPath === courseHref;

                            return (
                              <motion.a
                                key={course.slug}
                                href={courseHref}
                                onClick={closeMobileMenu}
                                initial={{
                                  opacity: 0,
                                  x: -8,
                                }}
                                animate={{
                                  opacity: 1,
                                  x: 0,
                                }}
                                transition={{
                                  delay: index * 0.035,
                                  duration: 0.25,
                                }}
                                className={`
                                  relative
                                  flex
                                  items-center
                                  gap-3
                                  rounded-xl
                                  px-4
                                  py-3
                                  text-[12px]
                                  font-semibold
                                  transition-colors
                                  duration-200
                                  ${
                                    isCurrentCourse
                                      ? "bg-[#0757a8]/5 text-[#0757a8]"
                                      : "text-slate-600 hover:bg-[#0757a8]/5 hover:text-[#0757a8]"
                                  }
                                `}
                              >

                                <span
                                  className={`
                                    font-mono
                                    text-[9px]
                                    font-bold
                                    ${
                                      isCurrentCourse
                                        ? "text-[#0757a8]"
                                        : "text-[#0757a8]/40"
                                    }
                                  `}
                                >
                                  {course.index}
                                </span>

                                <span className="flex-1">
                                  {course.shortTitle}
                                </span>

                                <ArrowUpRight
                                  size={14}
                                  className={
                                    isCurrentCourse
                                      ? "text-[#0757a8]"
                                      : "text-[#0757a8]/35"
                                  }
                                />

                              </motion.a>
                            );
                          }
                        )}

                      </div>

                    </motion.div>
                  )}

                </AnimatePresence>

              </div>


              {/* =================================================
                  CONTACT
              ================================================== */}

              <a
                href="/contact"
                onClick={closeMobileMenu}
                className={`
                  relative
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  px-5
                  py-4
                  text-[15px]
                  font-semibold
                  transition-all
                  duration-200
                  ${
                    isContactActive
                      ? "bg-[#0757a8]/5 text-[#0757a8]"
                      : "text-slate-700 hover:bg-[#0757a8]/5 hover:text-[#0757a8]"
                  }
                `}
              >
                <span>
                  Contact
                </span>

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.8}
                />

                {isContactActive && (
                  <span
                    className="
                      absolute
                      left-2
                      top-1/2
                      h-5
                      w-[2px]
                      -translate-y-1/2
                      rounded-full
                      bg-[#0757a8]
                    "
                  />
                )}
              </a>


              {/* =================================================
                  MOBILE CTA
              ================================================== */}

              <div className="mt-2 border-t border-slate-100 pt-3">

                <a
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    bg-[#0757a8]
                    px-5
                    py-4
                    text-sm
                    font-bold
                    !text-white
                    transition-all
                    duration-300
                    hover:bg-[#043b78]
                    hover:!text-white
                  "
                >
                  Start a Conversation

                  <ArrowUpRight size={17} />
                </a>

              </div>

            </nav>

          </motion.div>
        )}

      </AnimatePresence>
    </>
  );
}