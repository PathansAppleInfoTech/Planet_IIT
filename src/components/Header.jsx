import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

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

  return (
    <>
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
          {/* Logo */}
          <a
            href="/"
            aria-label="Planet IIT Home"
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

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="
              hidden
              items-center
              gap-1
              lg:flex
            "
          >
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  group
                  relative
                  flex
                  h-11
                  items-center
                  px-5
                  text-[14px]
                  font-semibold
                  tracking-[-0.01em]
                  text-slate-600
                  transition-colors
                  duration-300
                  hover:text-[#0757a8]
                "
              >
                <span className="relative z-10">
                  {item.label}
                </span>

                <span
                  className="
                    absolute
                    bottom-1.5
                    left-1/2
                    h-[2px]
                    w-0
                    -translate-x-1/2
                    rounded-full
                    bg-[#0757a8]
                    transition-all
                    duration-300
                    group-hover:w-5
                  "
                />
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Contact CTA */}
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

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label={
                mobileOpen
                  ? "Close navigation"
                  : "Open navigation"
              }
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
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

      {/* Mobile Navigation */}
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
              overflow-hidden
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
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.35,
                  }}
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    px-5
                    py-4
                    text-[15px]
                    font-semibold
                    text-slate-700
                    transition-colors
                    hover:bg-[#0757a8]/5
                    hover:text-[#0757a8]
                  "
                >
                  <span>{item.label}</span>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.8}
                  />
                </motion.a>
              ))}

              <div className="mt-2 border-t border-slate-100 pt-3">
                <a
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
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