// src/pages/CourseDetails.jsx

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Cpu,
  Database,
  GraduationCap,
  Layers3,
  Lightbulb,
  Monitor,
  Rocket,
  Sparkles,
  Smartphone,
  Target,
  Users,
  Wrench,
} from "lucide-react";

import { courseCategories, getCourseBySlug } from "../data/courses";


// ============================================================
// ICONS
// ============================================================

const courseIcons = {
  "full-stack-web": Code2,
  "mobile-software-engineering": Smartphone,
  "programming-languages": Layers3,
  "advanced-tech-analytics": Sparkles,
  "academic-project-assistance": GraduationCap,
  "embedded-iot-robotics": Cpu,
  "data-database-technology": Database,
  "ui-ux-design": Wrench,
};


// ============================================================
// ADDITIONAL COURSE INFORMATION
// ============================================================

const courseDetails = {
  "full-stack-web": {
    level: "FOUNDATION → ADVANCED",
    duration: "Flexible / Course Based",
    mode: "Practical + Project Based",
    certification: "Course Completion",

    overview:
      "A practical full-stack development programme designed to take learners from web fundamentals to building complete, production-oriented applications. Students work across front-end interfaces, back-end services, databases, APIs, authentication and deployment.",

    objectives: [
      "Understand how modern web applications are structured.",
      "Build responsive and interactive front-end interfaces.",
      "Develop REST APIs and server-side applications.",
      "Work with SQL and NoSQL databases.",
      "Implement authentication and application security fundamentals.",
      "Connect front-end applications with back-end APIs.",
      "Build complete real-world projects.",
      "Understand deployment and production workflows.",
    ],

    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "Git & GitHub",
      "REST APIs",
      "JWT Authentication",
      "Vite",
    ],

    modules: [
      {
        title: "01 — Web Fundamentals",
        topics: [
          "How the web works",
          "HTML5 structure",
          "Semantic HTML",
          "Forms and validation",
          "CSS fundamentals",
          "Responsive layouts",
          "Flexbox",
          "CSS Grid",
          "JavaScript fundamentals",
        ],
      },
      {
        title: "02 — Modern JavaScript",
        topics: [
          "Variables and data types",
          "Functions",
          "Arrays and objects",
          "DOM manipulation",
          "Events",
          "ES6+",
          "Promises",
          "Async / Await",
          "Fetch API",
          "Error handling",
        ],
      },
      {
        title: "03 — React Development",
        topics: [
          "React fundamentals",
          "Components",
          "Props",
          "State",
          "Hooks",
          "Forms",
          "Conditional rendering",
          "API integration",
          "Routing",
          "Reusable components",
        ],
      },
      {
        title: "04 — Backend Development",
        topics: [
          "Node.js",
          "Express.js",
          "REST API architecture",
          "Routes",
          "Controllers",
          "Middleware",
          "Authentication",
          "Authorization",
          "Error handling",
        ],
      },
      {
        title: "05 — Database Development",
        topics: [
          "Database fundamentals",
          "MongoDB",
          "MySQL",
          "CRUD operations",
          "Relationships",
          "Schema design",
          "Queries",
          "Database integration",
        ],
      },
      {
        title: "06 — Production Applications",
        topics: [
          "Project architecture",
          "Environment variables",
          "Authentication flows",
          "API security fundamentals",
          "Git and GitHub",
          "Deployment",
          "Application optimisation",
          "Production workflows",
        ],
      },
    ],

    projects: [
      "Responsive business website",
      "Authentication-based web application",
      "REST API project",
      "MERN stack application",
      "Database-driven application",
      "Final portfolio project",
    ],

    careerPaths: [
      "Full-Stack Developer",
      "Frontend Developer",
      "React Developer",
      "Backend Developer",
      "Node.js Developer",
      "Web Application Developer",
      "Junior Software Developer",
    ],

    prerequisites: [
      "Basic computer knowledge",
      "Interest in technology and programming",
      "No professional development experience required",
      "Willingness to practise outside class",
    ],
  },


  // ==========================================================
  // MOBILE
  // ==========================================================

  "mobile-software-engineering": {
    level: "FOUNDATION → APPLICATION DEVELOPMENT",
    duration: "Flexible / Course Based",
    mode: "Practical + Project Based",
    certification: "Course Completion",

    overview:
      "Learn how modern mobile and software applications are designed, developed and tested. The programme covers cross-platform development, programming fundamentals and application architecture.",

    objectives: [
      "Understand mobile application architecture.",
      "Learn modern programming concepts.",
      "Build cross-platform applications.",
      "Work with APIs and databases.",
      "Create responsive mobile interfaces.",
      "Understand application navigation and state.",
      "Build and test real applications.",
      "Develop a project suitable for a portfolio.",
    ],

    technologies: [
      "Flutter",
      "Dart",
      "Java",
      "Python",
      "C",
      "C++",
      "REST APIs",
      "Firebase",
      "Git",
      "Android",
    ],

    modules: [
      {
        title: "01 — Programming Fundamentals",
        topics: [
          "Variables",
          "Data types",
          "Operators",
          "Conditions",
          "Loops",
          "Functions",
          "Arrays",
          "Objects",
          "Problem solving",
        ],
      },
      {
        title: "02 — Flutter & Dart",
        topics: [
          "Dart fundamentals",
          "Flutter architecture",
          "Widgets",
          "Layouts",
          "Navigation",
          "Forms",
          "State management",
          "API integration",
        ],
      },
      {
        title: "03 — Mobile Application Development",
        topics: [
          "Authentication",
          "Local storage",
          "Remote APIs",
          "Database integration",
          "Push notifications",
          "Application permissions",
          "Testing",
        ],
      },
      {
        title: "04 — Java & Application Development",
        topics: [
          "Object-oriented programming",
          "Classes and objects",
          "Inheritance",
          "Interfaces",
          "Exception handling",
          "Application architecture",
        ],
      },
    ],

    projects: [
      "Mobile authentication application",
      "API-based mobile application",
      "Booking application",
      "E-commerce mobile application",
      "Final mobile application project",
    ],

    careerPaths: [
      "Flutter Developer",
      "Mobile Application Developer",
      "Android Developer",
      "Java Developer",
      "Software Developer",
    ],

    prerequisites: [
      "Basic computer knowledge",
      "Logical thinking",
      "Interest in software development",
      "No previous mobile development experience required",
    ],
  },


  // ==========================================================
  // PROGRAMMING
  // ==========================================================

  "programming-languages": {
    level: "BEGINNER → ADVANCED",
    duration: "Flexible / Language Based",
    mode: "Practical Programming",
    certification: "Course Completion",

    overview:
      "Build a strong programming foundation through multiple industry-relevant languages. The focus is not only on syntax but also on logic, algorithms, problem solving and writing maintainable code.",

    objectives: [
      "Understand programming fundamentals.",
      "Develop strong logical thinking.",
      "Learn object-oriented programming.",
      "Work with data structures.",
      "Solve programming problems.",
      "Understand database programming.",
      "Build small applications.",
      "Prepare for software development pathways.",
    ],

    technologies: [
      "C",
      "C++",
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "PHP",
      "C#",
      "SQL",
    ],

    modules: [
      {
        title: "01 — Programming Fundamentals",
        topics: [
          "Variables",
          "Data types",
          "Operators",
          "Conditions",
          "Loops",
          "Functions",
          "Arrays",
          "Strings",
        ],
      },
      {
        title: "02 — Object-Oriented Programming",
        topics: [
          "Classes",
          "Objects",
          "Encapsulation",
          "Inheritance",
          "Polymorphism",
          "Abstraction",
          "Interfaces",
        ],
      },
      {
        title: "03 — Data Structures",
        topics: [
          "Arrays",
          "Linked lists",
          "Stacks",
          "Queues",
          "Trees",
          "Searching",
          "Sorting",
        ],
      },
      {
        title: "04 — Application Development",
        topics: [
          "File handling",
          "APIs",
          "Database integration",
          "Error handling",
          "Debugging",
          "Application architecture",
        ],
      },
    ],

    projects: [
      "Console-based applications",
      "Database application",
      "Automation utility",
      "Programming mini project",
      "Final application project",
    ],

    careerPaths: [
      "Software Developer",
      "Junior Programmer",
      "Backend Developer",
      "Application Developer",
      "Web Developer",
      "Automation Developer",
    ],

    prerequisites: [
      "Basic computer knowledge",
      "Interest in programming",
      "No previous coding experience required for beginner tracks",
    ],
  },


  // ==========================================================
  // ADVANCED TECH
  // ==========================================================

  "advanced-tech-analytics": {
    level: "INTERMEDIATE → ADVANCED",
    duration: "Flexible / Module Based",
    mode: "Practical + Technology Projects",
    certification: "Course Completion",

    overview:
      "An advanced technology pathway covering AI, machine learning, embedded systems, IoT, robotics, data analytics, databases, DevOps and UI/UX.",

    objectives: [
      "Understand modern intelligent systems.",
      "Build introductory machine learning models.",
      "Work with embedded hardware.",
      "Understand IoT architectures.",
      "Develop robotics concepts.",
      "Analyse and interpret data.",
      "Work with relational databases.",
      "Understand modern development and deployment workflows.",
    ],

    technologies: [
      "Python",
      "Machine Learning",
      "Artificial Intelligence",
      "Embedded C",
      "Arduino",
      "IoT",
      "Robotics",
      "SQL",
      "Git",
      "DevOps",
      "UI/UX",
    ],

    modules: [
      {
        title: "01 — AI & Machine Learning",
        topics: [
          "Python for AI",
          "Data preparation",
          "Machine learning fundamentals",
          "Supervised learning",
          "Unsupervised learning",
          "Model training",
          "Model evaluation",
          "Applied AI",
        ],
      },
      {
        title: "02 — Embedded Systems",
        topics: [
          "Microcontrollers",
          "Embedded programming",
          "Sensors",
          "Actuators",
          "Hardware interfacing",
          "Embedded C",
        ],
      },
      {
        title: "03 — IoT & Robotics",
        topics: [
          "IoT architecture",
          "Connected devices",
          "Sensor data",
          "Communication",
          "Robotics fundamentals",
          "Automation",
          "Control systems",
        ],
      },
      {
        title: "04 — Data Analytics",
        topics: [
          "Data preparation",
          "Data analysis",
          "SQL",
          "Data visualisation",
          "Reports",
          "Decision-oriented analytics",
        ],
      },
      {
        title: "05 — DevOps & UI/UX",
        topics: [
          "Version control",
          "Development workflows",
          "Deployment concepts",
          "UI fundamentals",
          "UX principles",
          "Product design",
        ],
      },
    ],

    projects: [
      "Machine learning mini project",
      "IoT prototype",
      "Embedded systems project",
      "Robotics project",
      "Data analytics project",
      "Final advanced technology project",
    ],

    careerPaths: [
      "AI / ML Developer",
      "Data Analyst",
      "Embedded Developer",
      "IoT Developer",
      "Robotics Developer",
      "Junior DevOps Engineer",
      "Technical Developer",
    ],

    prerequisites: [
      "Basic programming knowledge is helpful",
      "Engineering or technology background is useful",
      "Curiosity about advanced technology",
    ],
  },


  // ==========================================================
  // ACADEMIC
  // ==========================================================

  "academic-project-assistance": {
    level: "ACADEMIC PROJECT SUPPORT",
    duration: "Project Dependent",
    mode: "Guided Development",
    certification: "Project / Academic Support",

    overview:
      "End-to-end academic project assistance for B.Tech, M.Tech, BCA and MCA students. Support can cover project selection, planning, development, documentation, presentation and viva preparation.",

    objectives: [
      "Choose a suitable project topic.",
      "Understand the selected technology.",
      "Plan project modules.",
      "Develop a working implementation.",
      "Prepare technical documentation.",
      "Create project presentations.",
      "Prepare for project demonstrations.",
      "Support viva preparation.",
    ],

    technologies: [
      "Web Development",
      "MERN",
      "Python",
      "Java",
      "Flutter",
      "AI / ML",
      "IoT",
      "Embedded Systems",
      "SQL",
      "Mobile Development",
    ],

    modules: [
      {
        title: "01 — Project Selection",
        topics: [
          "Topic identification",
          "Problem statement",
          "Technology selection",
          "Scope definition",
          "Project objectives",
        ],
      },
      {
        title: "02 — Project Planning",
        topics: [
          "Requirements",
          "System architecture",
          "Database design",
          "Module planning",
          "Development roadmap",
        ],
      },
      {
        title: "03 — Development",
        topics: [
          "Implementation",
          "Testing",
          "Debugging",
          "Database integration",
          "Documentation",
        ],
      },
      {
        title: "04 — Final Submission",
        topics: [
          "Project report",
          "PPT preparation",
          "Project demonstration",
          "Viva preparation",
          "Final submission support",
        ],
      },
    ],

    projects: [
      "B.Tech mini projects",
      "B.Tech major projects",
      "M.Tech projects",
      "BCA projects",
      "MCA projects",
      "Seminar projects",
      "Academic research-oriented projects",
    ],

    careerPaths: [
      "Academic project completion",
      "Portfolio development",
      "Technical presentation skills",
      "Practical development experience",
    ],

    prerequisites: [
      "Valid academic project requirement",
      "Course / department requirements",
      "Project topic or idea, if already selected",
    ],
  },


  // ==========================================================
  // EMBEDDED
  // ==========================================================

  "embedded-iot-robotics": {
    level: "FOUNDATION → ADVANCED",
    duration: "Flexible / Project Based",
    mode: "Hands-on Laboratory",
    certification: "Course Completion",

    overview:
      "Hands-on embedded systems, IoT and robotics training combining programming, electronics, sensors, microcontrollers and automation to create working technology prototypes.",

    objectives: [
      "Understand embedded systems.",
      "Program microcontrollers.",
      "Interface sensors and actuators.",
      "Build IoT prototypes.",
      "Understand robotics fundamentals.",
      "Integrate hardware and software.",
      "Develop working technology projects.",
    ],

    technologies: [
      "Embedded C",
      "Arduino",
      "Microcontrollers",
      "Sensors",
      "Actuators",
      "IoT",
      "Robotics",
      "Electronics",
      "Python",
    ],

    modules: [
      {
        title: "01 — Embedded Fundamentals",
        topics: [
          "Microcontrollers",
          "Embedded architecture",
          "Digital and analogue concepts",
          "GPIO",
          "Timers",
          "Communication",
        ],
      },
      {
        title: "02 — Sensors & Hardware",
        topics: [
          "Sensors",
          "Actuators",
          "Motors",
          "Relays",
          "Displays",
          "Hardware interfacing",
        ],
      },
      {
        title: "03 — IoT",
        topics: [
          "Connected devices",
          "IoT architecture",
          "Data communication",
          "Cloud connectivity",
          "Remote monitoring",
        ],
      },
      {
        title: "04 — Robotics",
        topics: [
          "Robotic systems",
          "Motor control",
          "Sensors",
          "Automation",
          "Control logic",
          "Prototype development",
        ],
      },
    ],

    projects: [
      "Smart home prototype",
      "IoT monitoring system",
      "Sensor-based project",
      "Robotics prototype",
      "Automation project",
    ],

    careerPaths: [
      "Embedded Developer",
      "IoT Developer",
      "Robotics Developer",
      "Hardware Programmer",
      "Automation Developer",
    ],

    prerequisites: [
      "Basic programming knowledge is helpful",
      "Basic electronics knowledge is useful",
      "Interest in hardware and technology",
    ],
  },


  // ==========================================================
  // DATA
  // ==========================================================

  "data-database-technology": {
    level: "FOUNDATION → ADVANCED",
    duration: "Flexible / Module Based",
    mode: "Practical Database Training",
    certification: "Course Completion",

    overview:
      "Learn how modern applications store, manage and analyse data. The programme covers SQL, relational databases, NoSQL systems, database design and application integration.",

    objectives: [
      "Understand database concepts.",
      "Write effective SQL queries.",
      "Design relational databases.",
      "Work with NoSQL databases.",
      "Connect databases to applications.",
      "Understand data modelling.",
      "Perform basic data analysis.",
    ],

    technologies: [
      "MySQL",
      "MongoDB",
      "SQL",
      "Database Design",
      "Node.js",
      "Python",
      "Data Analytics",
    ],

    modules: [
      {
        title: "01 — Database Fundamentals",
        topics: [
          "Database concepts",
          "Tables",
          "Records",
          "Keys",
          "Relationships",
          "Normalisation",
        ],
      },
      {
        title: "02 — SQL & MySQL",
        topics: [
          "SELECT",
          "INSERT",
          "UPDATE",
          "DELETE",
          "Joins",
          "Subqueries",
          "Views",
          "Indexes",
        ],
      },
      {
        title: "03 — MongoDB",
        topics: [
          "Documents",
          "Collections",
          "CRUD",
          "Queries",
          "Indexes",
          "Application integration",
        ],
      },
      {
        title: "04 — Application Integration",
        topics: [
          "API integration",
          "Database connections",
          "Authentication",
          "Data validation",
          "Error handling",
        ],
      },
    ],

    projects: [
      "Student management database",
      "Business management system",
      "E-commerce database",
      "API-connected database project",
      "Data analytics project",
    ],

    careerPaths: [
      "Database Developer",
      "Junior Data Analyst",
      "Backend Developer",
      "SQL Developer",
      "Application Developer",
    ],

    prerequisites: [
      "Basic computer knowledge",
      "Basic programming is helpful",
      "Interest in data and software systems",
    ],
  },


  // ==========================================================
  // UI UX
  // ==========================================================

  "ui-ux-design": {
    level: "BEGINNER → INTERMEDIATE",
    duration: "Flexible / Design Based",
    mode: "Practical Design Training",
    certification: "Course Completion",

    overview:
      "A practical introduction to designing digital experiences. Learn how to structure interfaces, understand user journeys and create clean, usable digital products.",

    objectives: [
      "Understand UI and UX principles.",
      "Create wireframes.",
      "Plan user journeys.",
      "Design modern interfaces.",
      "Create reusable design systems.",
      "Build interactive prototypes.",
      "Understand usability fundamentals.",
    ],

    technologies: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "Typography",
      "Responsive Design",
      "UX Research",
    ],

    modules: [
      {
        title: "01 — Design Fundamentals",
        topics: [
          "Visual hierarchy",
          "Typography",
          "Colour",
          "Spacing",
          "Composition",
          "Design principles",
        ],
      },
      {
        title: "02 — UX",
        topics: [
          "User research",
          "Personas",
          "User journeys",
          "Information architecture",
          "Usability",
        ],
      },
      {
        title: "03 — UI Design",
        topics: [
          "Wireframes",
          "Interface design",
          "Components",
          "Responsive layouts",
          "Design systems",
        ],
      },
      {
        title: "04 — Prototyping",
        topics: [
          "Interactive prototypes",
          "User flows",
          "Design handoff",
          "Developer collaboration",
        ],
      },
    ],

    projects: [
      "Website redesign",
      "Mobile application interface",
      "Dashboard design",
      "E-commerce interface",
      "Complete UI/UX portfolio project",
    ],

    careerPaths: [
      "UI Designer",
      "UX Designer",
      "Product Designer",
      "Digital Designer",
      "UI/UX Intern",
    ],

    prerequisites: [
      "No previous design experience required",
      "Basic computer knowledge",
      "Interest in visual and digital design",
    ],
  },
};


// ============================================================
// DEFAULT DETAIL DATA
// Used if a course exists in courses.js but has no extended
// information yet.
// ============================================================

const defaultDetails = {
  level: "PRACTICAL TRAINING",
  duration: "Flexible / Course Based",
  mode: "Practical + Project Based",
  certification: "Course Completion",

  overview:
    "A practical Planet IIT programme focused on learning through structured training, hands-on exercises and project development.",

  objectives: [
    "Understand the core concepts of the subject.",
    "Apply concepts through practical exercises.",
    "Work with relevant technologies and tools.",
    "Build practical projects.",
    "Develop problem-solving skills.",
    "Prepare for further academic or professional opportunities.",
  ],

  technologies: [],

  modules: [],

  projects: [],

  careerPaths: [],

  prerequisites: [
    "Basic computer knowledge",
    "Interest in technology",
    "Willingness to practise and learn",
  ],
};


// ============================================================
// SMALL COMPONENTS
// ============================================================

function DetailPill({ children }) {
  return (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        border border-[#0757a8]/12
        bg-white
        px-4 py-2
        text-[10px]
        font-bold
        uppercase
        tracking-[0.12em]
        text-[#607086]
      "
    >
      {children}
    </span>
  );
}


function SectionLabel({ children }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="h-px w-8 bg-[#0757a8]" />

      <span
        className="
          font-mono
          text-[10px]
          font-bold
          uppercase
          tracking-[0.22em]
          text-[#0757a8]
        "
      >
        {children}
      </span>
    </div>
  );
}


function CurriculumItem({ module, index }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: index * 0.04,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="border-t border-[#0757a8]/12"
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          flex
          w-full
          items-center
          justify-between
          gap-5
          py-6
          text-left
        "
      >
        <div className="flex items-center gap-5">
          <span
            className="
              font-mono
              text-[11px]
              font-bold
              tracking-[0.12em]
              text-[#0757a8]/45
            "
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <h3
            className="
              text-lg
              font-bold
              tracking-[-0.025em]
              text-[#10243a]
              sm:text-xl
            "
          >
            {module.title}
          </h3>
        </div>

        <motion.span
          animate={{
            rotate: open ? 180 : 0,
          }}
          transition={{ duration: 0.25 }}
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            border border-[#0757a8]/12
            text-[#0757a8]
          "
        >
          <ChevronDown size={16} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
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
            <div className="grid gap-x-8 gap-y-3 pb-7 pl-12 sm:grid-cols-2">
              {module.topics.map((topic) => (
                <div
                  key={topic}
                  className="
                    flex
                    items-start
                    gap-2.5
                    text-sm
                    leading-6
                    text-[#607086]
                  "
                >
                  <Check
                    size={15}
                    className="mt-1 shrink-0 text-[#0757a8]"
                  />

                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}


function FAQItem({ question, answer, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-[#0757a8]/12">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          flex
          w-full
          items-center
          justify-between
          gap-5
          py-6
          text-left
        "
      >
        <div className="flex gap-5">
          <span className="font-mono text-[10px] font-bold text-[#0757a8]/45">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="text-sm font-bold text-[#10243a] sm:text-base">
            {question}
          </span>
        </div>

        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          className="shrink-0 text-[#0757a8]"
        >
          <span className="text-2xl font-light">+</span>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
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
            className="overflow-hidden"
          >
            <p className="max-w-3xl pb-6 pl-10 text-sm leading-7 text-[#607086]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


// ============================================================
// MAIN PAGE
// ============================================================

export default function CourseDetails() {
  const slug = window.location.pathname.split("/").filter(Boolean).pop();

  const course = useMemo(
    () => getCourseBySlug(slug),
    [slug]
  );

  const details = {
    ...defaultDetails,
    ...(courseDetails[slug] || {}),
  };

  // ----------------------------------------------------------
  // Invalid course
  // ----------------------------------------------------------

  if (!course) {
    return (
      <main className="min-h-[70vh] bg-[#f7faff] px-5 py-32 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1240px]">
          <SectionLabel>Course not found</SectionLabel>

          <h1 className="max-w-3xl text-5xl font-extrabold tracking-[-0.06em] text-[#10243a]">
            We couldn't find that course.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-[#607086]">
            The course may have been moved or the URL may be incorrect.
          </p>

          <a
            href="/courses"
            className="
              mt-8
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#0757a8]
              px-5
              py-3.5
              text-sm
              font-bold
              !text-white
              hover:bg-[#043b78]
              hover:!text-white
            "
          >
            <ArrowLeft size={16} />
            Back to courses
          </a>
        </div>
      </main>
    );
  }


  const Icon = courseIcons[course.slug] || Code2;


  return (
    <main className="overflow-hidden bg-[#f7faff] text-[#10243a]">

      {/* ======================================================
          HERO
      ======================================================= */}

      <section className="relative px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28 lg:pt-40">
        {/* Grid */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[linear-gradient(rgba(7,87,168,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(7,87,168,0.045)_1px,transparent_1px)]
            bg-[size:48px_48px]
            [mask-image:linear-gradient(to_bottom,black,transparent_90%)]
          "
        />

        <div className="relative mx-auto max-w-[1240px]">

          <motion.a
            href="/courses"
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            className="
              mb-10
              inline-flex
              items-center
              gap-2
              font-mono
              text-[10px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#0757a8]
            "
          >
            <ArrowLeft size={14} />
            All courses
          </motion.a>


          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="grid gap-12 lg:grid-cols-[1fr_320px] lg:items-end"
          >

            {/* Main heading */}
            <div>
              <div className="mb-7 flex items-center gap-3">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-[#0757a8]/12
                    bg-white
                    text-[#0757a8]
                    shadow-[0_10px_30px_rgba(7,87,168,0.07)]
                  "
                >
                  <Icon size={21} strokeWidth={1.7} />
                </div>

                <div>
                  <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#0757a8]">
                    {course.eyebrow || "PLANET IIT PROGRAMME"}
                  </span>

                  <span className="mt-1 block font-mono text-[10px] text-[#607086]">
                    COURSE {course.index}
                  </span>
                </div>
              </div>


              <h1
                className="
                  max-w-5xl
                  text-5xl
                  font-extrabold
                  leading-[0.94]
                  tracking-[-0.065em]
                  text-[#10243a]
                  sm:text-6xl
                  md:text-7xl
                  lg:text-[86px]
                "
              >
                {course.title}
              </h1>


              <p
                className="
                  mt-7
                  max-w-3xl
                  text-xl
                  font-medium
                  leading-8
                  tracking-[-0.02em]
                  text-[#0757a8]
                "
              >
                {course.tagline}
              </p>


              <p
                className="
                  mt-5
                  max-w-2xl
                  text-base
                  leading-7
                  text-[#607086]
                "
              >
                {course.summary}
              </p>
            </div>


            {/* Hero side */}
            <div
              className="
                border-l
                border-[#0757a8]/15
                pl-6
                lg:pb-1
              "
            >
              <div className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#0757a8]">
                Planet IIT
              </div>

              <p className="mt-3 text-sm leading-6 text-[#607086]">
                Practical technology education designed around learning,
                building and applying skills.
              </p>

              <a
                href="/contact"
                className="
                  group
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#0757a8]
                  px-5
                  py-3
                  text-xs
                  font-bold
                  !text-white
                  transition-all
                  hover:-translate-y-0.5
                  hover:bg-[#043b78]
                  hover:!text-white
                "
              >
                Enquire now
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </motion.div>


          {/* Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.25,
              duration: 0.7,
            }}
            className="
              mt-14
              grid
              border-y
              border-[#0757a8]/12
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {[
              ["Level", details.level],
              ["Duration", details.duration],
              ["Learning", details.mode],
              ["Recognition", details.certification],
            ].map(([label, value], index) => (
              <div
                key={label}
                className={`
                  py-6
                  sm:px-6
                  lg:first:pl-0
                  ${index > 0 ? "border-t sm:border-l sm:border-t-0 border-[#0757a8]/12" : ""}
                `}
              >
                <div className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#0757a8]/60">
                  {label}
                </div>

                <div className="mt-2 text-sm font-bold leading-5 text-[#10243a]">
                  {value}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* ======================================================
          OVERVIEW
      ======================================================= */}

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1240px]">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

            <div>
              <SectionLabel>01 / Overview</SectionLabel>

              <h2
                className="
                  max-w-md
                  text-4xl
                  font-extrabold
                  leading-[0.98]
                  tracking-[-0.055em]
                  text-[#10243a]
                  sm:text-5xl
                "
              >
                More than a syllabus.
              </h2>
            </div>


            <div>
              <p
                className="
                  max-w-3xl
                  text-xl
                  font-medium
                  leading-8
                  tracking-[-0.025em]
                  text-[#10243a]
                "
              >
                {details.overview}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {course.tracks.map((track) => (
                  <DetailPill key={track.name}>
                    {track.name}
                  </DetailPill>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ======================================================
          WHAT YOU WILL LEARN
      ======================================================= */}

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1240px]">

          <div className="mb-14 max-w-3xl">
            <SectionLabel>02 / Learning outcomes</SectionLabel>

            <h2
              className="
                text-4xl
                font-extrabold
                leading-[0.98]
                tracking-[-0.055em]
                text-[#10243a]
                sm:text-5xl
              "
            >
              What you will be able to do.
            </h2>
          </div>


          <div className="grid border-t border-[#0757a8]/12 md:grid-cols-2 lg:grid-cols-4">
            {details.objectives.map((objective, index) => (
              <motion.div
                key={objective}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.05,
                }}
                className="
                  border-b
                  border-[#0757a8]/12
                  py-7
                  md:nth-[odd]:border-r
                  lg:nth-[odd]:border-r-0
                  lg:border-r
                  lg:px-7
                  lg:first:pl-0
                  lg:nth-[4n]:border-r-0
                "
              >
                <span
                  className="
                    font-mono
                    text-[10px]
                    font-bold
                    text-[#0757a8]/45
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p
                  className="
                    mt-4
                    text-sm
                    font-semibold
                    leading-6
                    text-[#10243a]
                  "
                >
                  {objective}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ======================================================
          TECHNOLOGIES
      ======================================================= */}

      {details.technologies.length > 0 && (
        <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1240px]">

            <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">

              <div>
                <SectionLabel>03 / Technology stack</SectionLabel>

                <h2
                  className="
                    text-4xl
                    font-extrabold
                    leading-[0.98]
                    tracking-[-0.055em]
                    text-[#10243a]
                    sm:text-5xl
                  "
                >
                  Tools you'll work with.
                </h2>

                <p className="mt-6 max-w-md text-sm leading-7 text-[#607086]">
                  The exact technologies can vary by course track and project,
                  but the focus remains on practical implementation rather
                  than simply learning syntax.
                </p>
              </div>


              <div className="flex flex-wrap content-start gap-3">
                {details.technologies.map((technology, index) => (
                  <motion.div
                    key={technology}
                    initial={{ opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.035,
                    }}
                    className="
                      rounded-full
                      border
                      border-[#0757a8]/12
                      bg-[#f7faff]
                      px-5
                      py-3
                      text-sm
                      font-bold
                      text-[#10243a]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#0757a8]/30
                      hover:bg-white
                      hover:text-[#0757a8]
                    "
                  >
                    {technology}
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </section>
      )}


      {/* ======================================================
          CURRICULUM
      ======================================================= */}

      {details.modules.length > 0 && (
        <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1240px]">

            <div className="mb-14 grid gap-7 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-20">
              <div>
                <SectionLabel>04 / Curriculum</SectionLabel>

                <h2
                  className="
                    text-4xl
                    font-extrabold
                    leading-[0.98]
                    tracking-[-0.055em]
                    text-[#10243a]
                    sm:text-5xl
                  "
                >
                  Inside the programme.
                </h2>
              </div>

              <p className="max-w-xl text-sm leading-7 text-[#607086]">
                Each module is structured to move from understanding to
                implementation. Expand a module to see the areas covered.
              </p>
            </div>


            <div className="border-b border-[#0757a8]/12">
              {details.modules.map((module, index) => (
                <CurriculumItem
                  key={module.title}
                  module={module}
                  index={index}
                />
              ))}
            </div>

          </div>
        </section>
      )}


      {/* ======================================================
          PROJECTS
      ======================================================= */}

      {details.projects.length > 0 && (
        <section className="bg-[#0757a8] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1240px]">

            <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

              <div>
                <SectionLabel>05 / Practical work</SectionLabel>

                <h2
                  className="
                    text-4xl
                    font-extrabold
                    leading-[0.98]
                    tracking-[-0.055em]
                    sm:text-5xl
                    !text-white
                  "
                >
                  Learn by
                  <br />
                  building.
                </h2>

                <p className="mt-6 max-w-md text-sm leading-7 text-white/70">
                  Projects are where concepts become practical experience.
                  The exact projects can be adapted according to the learner's
                  level and requirements.
                </p>
              </div>


              <div>
                {details.projects.map((project, index) => (
                  <motion.div
                    key={project}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.06,
                    }}
                    className="
                      group
                      flex
                      items-center
                      gap-5
                      border-t
                      border-white/15
                      py-6
                    "
                  >
                    <span
                      className="
                        font-mono
                        text-[10px]
                        font-bold
                        text-white/40
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className="
                        text-lg
                        font-bold
                        tracking-[-0.025em]
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    >
                      {project}
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="
                        ml-auto
                        opacity-30
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                        group-hover:opacity-100
                      "
                    />
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </section>
      )}


      {/* ======================================================
          WHO IS IT FOR + PREREQUISITES
      ======================================================= */}

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1240px]">

          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">

            {/* Who */}
            <div>
              <SectionLabel>06 / Who it's for</SectionLabel>

              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0757a8]/[0.06] text-[#0757a8]">
                <Users size={23} />
              </div>

              <h2 className="max-w-xl text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-[#10243a] sm:text-5xl">
                Built for people ready to move forward.
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[#607086]">
                {course.audience}. The programme can be adapted around the
                learner's current level, academic requirement or development
                goal.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                <DetailPill>Students</DetailPill>
                <DetailPill>Graduates</DetailPill>
                <DetailPill>Beginners</DetailPill>
                <DetailPill>Professionals</DetailPill>
              </div>
            </div>


            {/* Prerequisites */}
            <div className="border-t border-[#0757a8]/12 lg:border-l lg:border-t-0 lg:pl-14">
              <SectionLabel>07 / Before you begin</SectionLabel>

              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0757a8]/[0.06] text-[#0757a8]">
                <Target size={23} />
              </div>

              <h2 className="max-w-xl text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-[#10243a] sm:text-5xl">
                What you need.
              </h2>

              <div className="mt-7 space-y-4">
                {details.prerequisites.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-[#607086]"
                  >
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-[#0757a8]"
                    />

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ======================================================
          CAREER PATH
      ======================================================= */}

      {details.careerPaths.length > 0 && (
        <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1240px]">

            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">

              <div>
                <SectionLabel>08 / Where it can lead</SectionLabel>

                <h2
                  className="
                    text-4xl
                    font-extrabold
                    leading-[0.98]
                    tracking-[-0.055em]
                    text-[#10243a]
                    sm:text-5xl
                  "
                >
                  Skills that open doors.
                </h2>

                <p className="mt-6 max-w-md text-sm leading-7 text-[#607086]">
                  The programme develops skills that can support further
                  academic work, portfolio development, internships and
                  technology careers.
                </p>
              </div>


              <div className="grid border-t border-[#0757a8]/12 sm:grid-cols-2">
                {details.careerPaths.map((career, index) => (
                  <motion.div
                    key={career}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.05,
                    }}
                    className="
                      border-b
                      border-[#0757a8]/12
                      py-6
                      sm:px-6
                      sm:first:pl-0
                      sm:nth-[odd]:border-r
                    "
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] font-bold text-[#0757a8]/45">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-sm font-bold text-[#10243a]">
                        {career}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </section>
      )}


      {/* ======================================================
          LEARNING EXPERIENCE
      ======================================================= */}

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1240px]">

          <div className="mb-14">
            <SectionLabel>09 / Learning experience</SectionLabel>

            <h2
              className="
                max-w-3xl
                text-4xl
                font-extrabold
                leading-[0.98]
                tracking-[-0.055em]
                text-[#10243a]
                sm:text-5xl
              "
            >
              A practical approach to technology education.
            </h2>
          </div>


          <div className="grid border-t border-[#0757a8]/12 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: Lightbulb,
                number: "01",
                title: "Understand",
                text: "Learn the concepts and understand why the technology works.",
              },
              {
                icon: Wrench,
                number: "02",
                title: "Practise",
                text: "Apply concepts through exercises, experiments and guided work.",
              },
              {
                icon: Rocket,
                number: "03",
                title: "Build",
                text: "Turn knowledge into applications, systems and real projects.",
              },
              {
                icon: GraduationCap,
                number: "04",
                title: "Present",
                text: "Develop the ability to explain, demonstrate and present your work.",
              },
            ].map((item, index) => {
              const ItemIcon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.07,
                  }}
                  className="
                    border-b
                    border-[#0757a8]/12
                    py-8
                    lg:border-r
                    lg:px-7
                    lg:first:pl-0
                    lg:last:border-r-0
                  "
                >
                  <div className="flex items-center justify-between">
                    <ItemIcon
                      size={21}
                      strokeWidth={1.7}
                      className="text-[#0757a8]"
                    />

                    <span className="font-mono text-[10px] font-bold text-[#0757a8]/40">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-bold tracking-[-0.03em] text-[#10243a]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#607086]">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>


      {/* ======================================================
          FAQ
      ======================================================= */}

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1000px]">

          <div className="mb-12 text-center">
            <SectionLabel>10 / Frequently asked</SectionLabel>

            <h2
              className="
                text-4xl
                font-extrabold
                leading-[0.98]
                tracking-[-0.055em]
                text-[#10243a]
                sm:text-5xl
              "
            >
              Questions, answered.
            </h2>
          </div>


          <div className="border-b border-[#0757a8]/12">
            {[
              {
                question: "Who can join this course?",
                answer: `${course.audience}. The exact entry level can vary depending on the selected track and learner's current knowledge.`,
              },
              {
                question: "Is practical project work included?",
                answer:
                  "Yes. Planet IIT's approach is centred around practical learning, exercises and project development rather than theory alone.",
              },
              {
                question: "Do I need previous programming experience?",
                answer:
                  "It depends on the course. Beginner-oriented tracks can start from fundamentals, while advanced programmes may benefit from existing programming or technical knowledge.",
              },
              {
                question: "Can the course be customised?",
                answer:
                  "Course content can be aligned with the learner's academic background, skill level, selected technology and project requirements.",
              },
              {
                question: "Is academic project guidance available?",
                answer:
                  "Yes. Planet IIT also provides academic project assistance for B.Tech, M.Tech, BCA and MCA students.",
              },
              {
                question: "How can I know which course is right for me?",
                answer:
                  "Contact Planet IIT with your academic background, current skill level and goal. The team can help identify the appropriate learning path.",
              },
            ].map((faq, index) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>

        </div>
      </section>


      {/* ======================================================
          FINAL CTA
      ======================================================= */}

      <section className="bg-white px-5 py-20 text-[#10243a] sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1240px]">

          <div className="grid gap-10 border-t border-[#0757a8]/12 pt-12 lg:grid-cols-[1fr_auto] lg:items-end">

            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#0757a8]" />

                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#0757a8]">
                  Start with Planet IIT
                </span>
              </div>

              <h2
                className="
            max-w-4xl
            text-5xl
            font-extrabold
            leading-[0.94]
            tracking-[-0.06em]
            text-[#10243a]
            sm:text-6xl
            lg:text-[76px]
          "
              >
                Ready to turn
                <br />
                knowledge into
                <br />
                <span className="text-[#0757a8]">
                  something real?
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-[#607086]">
                Tell us about your background, your goal and what you want
                to build. We'll help you find the right learning path.
              </p>
            </div>


            <div>
              <a
                href="/contact"
                className="
            group
            inline-flex
            items-center
            gap-3
            rounded-full
            bg-[#0757a8]
            px-6
            py-4
            text-sm
            font-bold
            !text-white
            shadow-[0_12px_32px_rgba(7,87,168,0.16)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-[#043b78]
            hover:!text-white
            hover:shadow-[0_18px_40px_rgba(7,87,168,0.22)]
          "
              >
                Enquire about this course

                <ArrowUpRight
                  size={17}
                  className="
              transition-transform
              duration-300
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
            "
                />
              </a>

              <div className="mt-5 font-mono text-[10px] tracking-[0.12em] text-[#0757a8]/45">
                {course.title}
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}