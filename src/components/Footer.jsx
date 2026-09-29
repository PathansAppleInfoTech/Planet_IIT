import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = [
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

const courseLinks = [
  "Full Stack & Web Development",
  "AI & Machine Learning",
  "IoT & Robotics",
  "Embedded Systems",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#052f5f] text-white">
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#1475d1]/20
          blur-[120px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[-200px]
          left-[-150px]
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#1475d1]/10
          blur-[120px]
        "
      />

      {/* Fine grid */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.045]
          [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Main Footer CTA */}
        {/* <div
          className="
            border-b
            border-white/10
            py-20
            lg:py-28
          "
        >
          <div className="max-w-[900px]">
            <p
              className="
                mb-5
                font-mono
                text-[11px]
                font-medium
                uppercase
                tracking-[0.25em]
                text-[#70b5f5]
              "
            >
              Planet Institute & Information Technology
            </p>

            <h2
              className="
                max-w-[850px]
                font-[Manrope]
                text-4xl
                font-extrabold
                leading-[1.02]
                tracking-[-0.045em]
                sm:text-5xl
                lg:text-7xl
              "
            >
              Learn technology.
              <br />

              <span className="text-[#71b8f8]">
                Build what comes next.
              </span>
            </h2>

            <p
              className="
                mt-7
                max-w-[650px]
                text-base
                leading-7
                text-white/60
                sm:text-lg
              "
            >
              From technology education to professional IT
              solutions, Planet IIT helps students, developers
              and organizations turn ideas into practical
              digital experiences.
            </p>

            <a
              href="/contact"
              className="
                group
                mt-9
                inline-flex
                items-center
                gap-3
                border-b
                border-white/40
                pb-2
                text-sm
                font-bold
                text-white
                transition-colors
                hover:border-[#71b8f8]
                hover:text-[#71b8f8]
              "
            >
              Let's build something meaningful

              <ArrowUpRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>
          </div>
        </div> */}

        {/* Footer Information */}
        <div
          className="
            grid
            gap-12
            py-14
            md:grid-cols-2
            lg:grid-cols-[1.4fr_0.7fr_1fr_1.2fr]
            lg:gap-10
            lg:py-20
          "
        >
          {/* Brand */}
          <div>
            <a
              href="/"
              aria-label="Planet IIT Home"
              className="inline-flex"
            >
              <img
                src="/assets/logo.png"
                alt="Planet IIT - Planet Institute and Information Technology"
                className="
                  h-[72px]
                  w-auto
                  object-contain
                "
              />
            </a>

            <p
              className="
                mt-5
                max-w-[330px]
                text-sm
                leading-6
                text-white/50
              "
            >
              Planet Institute and Information Technology —
              a technology academy and IT solutions company
              based in Kerala.
            </p>
          </div>

          {/* Explore */}
          <div>
            <p
              className="
                mb-5
                font-mono
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-[#71b8f8]
              "
            >
              Explore
            </p>

            <nav className="flex flex-col items-start gap-3">
              {footerLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="
                    text-sm
                    text-white/60
                    transition-colors
                    hover:text-white
                  "
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Courses */}
          <div>
            <p
              className="
                mb-5
                font-mono
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-[#71b8f8]
              "
            >
              Learning
            </p>

            <div className="flex flex-col gap-3">
              {courseLinks.map((course) => (
                <a
                  key={course}
                  href="/courses"
                  className="
                    max-w-[240px]
                    text-sm
                    leading-5
                    text-white/60
                    transition-colors
                    hover:text-white
                  "
                >
                  {course}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p
              className="
                mb-5
                font-mono
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-[#71b8f8]
              "
            >
              Contact
            </p>

            <div className="space-y-5">
              <a
                href="mailto:info@planetiit.com"
                className="
                  group
                  flex
                  items-start
                  gap-3
                  text-sm
                  text-white/60
                  transition-colors
                  hover:text-white
                "
              >
                <Mail
                  size={17}
                  className="mt-0.5 shrink-0 text-[#71b8f8]"
                />

                <span>
                  info@planetiit.com
                </span>
              </a>

              <a
                href="tel:+919544006688"
                className="
                  group
                  flex
                  items-start
                  gap-3
                  text-sm
                  text-white/60
                  transition-colors
                  hover:text-white
                "
              >
                <Phone
                  size={17}
                  className="mt-0.5 shrink-0 text-[#71b8f8]"
                />

                <span>
                  +91 95440 06688
                </span>
              </a>

              <div
                className="
                  flex
                  items-start
                  gap-3
                  text-sm
                  leading-6
                  text-white/60
                "
              >
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-[#71b8f8]"
                />

                <span>
                  Near Aruvithura Akshaya Center,
                  <br />
                  Erattupetta,
                  <br />
                  Kottayam District,
                  <br />
                  Kerala — 686122
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            py-6
            text-xs
            text-white/35
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>
            © {new Date().getFullYear()} Planet Institute and
            Information Technology. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://pathansappele.com"
              className="transition-colors hover:text-white"
            >
             Powered By Pathans Apple Info Tech
            </a>

            
          </div>
        </div>
      </div>
    </footer>
  );
}