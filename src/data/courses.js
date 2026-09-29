// src/data/courses.js

// Course data based on the Planet IIT brochure + the detailed course brief.
// slug is used for /courses/:slug routing.

export const courseCategories = [
  {
    slug: "full-stack-web",
    index: "01",
    shortTitle: "Full-Stack & Web",
    title: "Full-Stack & Web Development",
    eyebrow: "BUILD FOR THE WEB",
    tagline: "Ship production applications, not tutorials.",
    summary:
      "Hands-on training across modern web stacks — from MERN and Python full-stack development to front-end engineering — with practical projects that build toward internship and career readiness.",

    tracks: [
      {
        name: "MERN Stack",
        detail:
          "MongoDB, Express, React and Node — build and deploy complete applications end to end.",
      },
      {
        name: "Python Full Stack",
        detail:
          "Django and Flask back ends paired with modern front-end development.",
      },
      {
        name: "React Development",
        detail:
          "Component architecture, state management, APIs and production build practices.",
      },
      {
        name: "Node.js & Express",
        detail:
          "REST APIs, authentication, databases and scalable server-side applications.",
      },
      {
        name: ".NET Development",
        detail:
          "Enterprise-oriented application development using the Microsoft .NET ecosystem.",
      },
      {
        name: "HTML, CSS & JavaScript",
        detail:
          "Strong front-end fundamentals taught through practical interface development.",
      },
      {
        name: "PHP & Web Development",
        detail:
          "Server-side web development, database integration and dynamic websites.",
      },
    ],

    format: "Courses, internships and hands-on development",
    audience: "Students, graduates and working professionals",
  },

  {
    slug: "mobile-software-engineering",
    index: "02",
    shortTitle: "Mobile & Software",
    title: "Mobile & Software Engineering",
    eyebrow: "BUILD EVERYWHERE",
    tagline: "From a single codebase to native performance.",
    summary:
      "Cross-platform and software development training covering the languages and frameworks used to build mobile, desktop and application software.",

    tracks: [
      {
        name: "Flutter",
        detail:
          "Cross-platform application development for Android and iOS from a single codebase.",
      },
      {
        name: "Java",
        detail:
          "Object-oriented programming fundamentals through application and Android development.",
      },
      {
        name: "Python",
        detail:
          "Programming, automation, scripting and application development.",
      },
      {
        name: "C Programming",
        detail:
          "Core programming concepts, algorithms, memory and structured programming.",
      },
      {
        name: "C++",
        detail:
          "Object-oriented programming and performance-focused application development.",
      },
      {
        name: "C#",
        detail:
          "Modern application development and programming with the .NET ecosystem.",
      },
    ],

    format: "Structured training modules and practical development",
    audience: "Students, graduates and working professionals",
  },

  {
    slug: "programming-languages",
    index: "03",
    shortTitle: "Programming",
    title: "Programming Languages",
    eyebrow: "MASTER THE CORE",
    tagline: "Learn the languages behind modern technology.",
    summary:
      "Programming fundamentals and practical development across multiple languages, helping students build the core problem-solving skills required for software, web, mobile and embedded development.",

    tracks: [
      {
        name: "C",
        detail:
          "Programming fundamentals, data structures, functions, pointers and memory concepts.",
      },
      {
        name: "C++",
        detail:
          "Object-oriented programming, STL and advanced programming concepts.",
      },
      {
        name: "Java",
        detail:
          "Object-oriented programming, application development and Java fundamentals.",
      },
      {
        name: "Python",
        detail:
          "Modern Python programming for automation, applications, data and AI.",
      },
      {
        name: "JavaScript",
        detail:
          "The language powering modern interactive websites and JavaScript applications.",
      },
      {
        name: "TypeScript",
        detail:
          "Typed JavaScript for scalable front-end and back-end applications.",
      },
      {
        name: "PHP",
        detail:
          "Server-side programming and database-driven web applications.",
      },
      {
        name: "C#",
        detail:
          "Modern object-oriented programming and application development.",
      },
      {
        name: "SQL",
        detail:
          "Database queries, relational design, joins, reporting and data management.",
      },
    ],

    format: "Language-focused training with practical exercises",
    audience: "Students, beginners and developers strengthening fundamentals",
  },

  {
    slug: "advanced-tech-analytics",
    index: "04",
    shortTitle: "Advanced Tech",
    title: "Advanced Tech & Analytics",
    eyebrow: "INTELLIGENCE + SYSTEMS",
    tagline: "Where intelligence, robotics and infrastructure meet.",
    summary:
      "Advanced technology training across artificial intelligence, machine learning, embedded systems, IoT, robotics, analytics, databases, DevOps and UI/UX.",

    tracks: [
      {
        name: "Machine Learning & AI",
        detail:
          "Machine learning fundamentals, model building, training workflows and applied AI.",
      },
      {
        name: "Embedded Systems",
        detail:
          "Microcontrollers, embedded programming and hardware-software integration.",
      },
      {
        name: "IoT",
        detail:
          "Connected devices, sensors, communication protocols and IoT application development.",
      },
      {
        name: "Robotics",
        detail:
          "Robotics fundamentals, sensing, control systems and automation.",
      },
      {
        name: "Data Analytics",
        detail:
          "Transforming raw data into useful insights through modern analytical techniques.",
      },
      {
        name: "SQL & Database Management",
        detail:
          "Relational database design, SQL queries, optimisation and administration.",
      },
      {
        name: "DevOps",
        detail:
          "Development workflows, deployment, version control and application delivery.",
      },
      {
        name: "UI/UX Design",
        detail:
          "User research, interface design, usability and modern digital product experiences.",
      },
    ],

    format: "Advanced technical and practical training",
    audience: "Students, graduates and working professionals",
  },

  {
    slug: "academic-project-assistance",
    index: "05",
    shortTitle: "Academic Support",
    title: "Academic & Project Assistance",
    eyebrow: "FROM IDEA TO VIVA",
    tagline: "From proposal to viva, fully guided.",
    summary:
      "Complete academic project support for B.Tech, M.Tech, BCA and MCA students — covering project selection, development, documentation, presentation and final submission.",

    tracks: [
      {
        name: "Mini Projects",
        detail:
          "Practical mini projects selected and developed according to academic requirements.",
      },
      {
        name: "Major Projects",
        detail:
          "End-to-end final-year project guidance, development and implementation.",
      },
      {
        name: "B.Tech & M.Tech Projects",
        detail:
          "Technical project development aligned with engineering and postgraduate requirements.",
      },
      {
        name: "BCA & MCA Projects",
        detail:
          "Application-oriented project guidance for computer application students.",
      },
      {
        name: "Seminar Preparation",
        detail:
          "Topic selection, technical content preparation and seminar presentation support.",
      },
      {
        name: "Project Reports",
        detail:
          "Professional documentation, report preparation and submission formatting.",
      },
      {
        name: "PPT & Presentation",
        detail:
          "Technical presentation design and viva-oriented preparation.",
      },
      {
        name: "Coursework & Record Work",
        detail:
          "Practical records, coursework documentation and academic submission support.",
      },
      {
        name: "Bank Loan Project Plans",
        detail:
          "Structured project plans prepared for education and business loan requirements.",
      },
    ],

    format: "Complete academic project guidance",
    audience: "B.Tech, M.Tech, BCA and MCA students",
  },

  {
    slug: "embedded-iot-robotics",
    index: "06",
    shortTitle: "Embedded & Robotics",
    title: "Embedded Systems, IoT & Robotics",
    eyebrow: "HARDWARE MEETS CODE",
    tagline: "Build systems that sense, think and respond.",
    summary:
      "Practical training for students interested in hardware, embedded programming, connected devices and robotics — from microcontrollers to complete working prototypes.",

    tracks: [
      {
        name: "Embedded C",
        detail:
          "Programming concepts specifically applied to microcontrollers and embedded hardware.",
      },
      {
        name: "Microcontrollers",
        detail:
          "Microcontroller programming, interfacing and hardware control.",
      },
      {
        name: "Arduino",
        detail:
          "Rapid prototyping using Arduino boards, sensors and actuators.",
      },
      {
        name: "IoT Projects",
        detail:
          "Connected hardware projects combining sensors, software and communication.",
      },
      {
        name: "Robotics Projects",
        detail:
          "Hands-on robotic systems involving sensors, motors and control logic.",
      },
      {
        name: "Hardware Integration",
        detail:
          "Connecting software, electronic components and embedded systems into working solutions.",
      },
    ],

    format: "Hands-on laboratory and project-based learning",
    audience: "Students, engineering students and technology enthusiasts",
  },

  {
    slug: "data-database-technology",
    index: "07",
    shortTitle: "Data & Databases",
    title: "Data, SQL & Database Technology",
    eyebrow: "DATA ENGINEERING",
    tagline: "Turn information into reliable systems.",
    summary:
      "Database and data-focused training covering SQL, database architecture, data handling, analytics and the technologies required to build dependable information systems.",

    tracks: [
      {
        name: "SQL",
        detail:
          "Queries, joins, subqueries, views, procedures and practical database operations.",
      },
      {
        name: "MySQL",
        detail:
          "Relational database development, administration and application integration.",
      },
      {
        name: "MongoDB",
        detail:
          "Document-oriented database design and modern NoSQL application development.",
      },
      {
        name: "Database Design",
        detail:
          "Schema design, relationships, normalisation and scalable data structures.",
      },
      {
        name: "Data Analytics",
        detail:
          "Data preparation, analysis and visualisation for practical decision-making.",
      },
      {
        name: "Database Integration",
        detail:
          "Connecting databases with web, mobile and enterprise applications.",
      },
    ],

    format: "Technical training with application-based exercises",
    audience: "Students, developers and working professionals",
  },

  {
    slug: "ui-ux-design",
    index: "08",
    shortTitle: "UI / UX",
    title: "UI/UX & Digital Product Design",
    eyebrow: "DESIGN WITH PURPOSE",
    tagline: "Make technology easier to understand and use.",
    summary:
      "Learn the principles behind intuitive digital products, from user flows and wireframes to modern interfaces and practical design systems.",

    tracks: [
      {
        name: "UI Design",
        detail:
          "Modern interface design, typography, spacing, colour systems and visual hierarchy.",
      },
      {
        name: "UX Fundamentals",
        detail:
          "User journeys, information architecture and usability principles.",
      },
      {
        name: "Wireframing",
        detail:
          "Plan application and website experiences before development begins.",
      },
      {
        name: "Prototype Design",
        detail:
          "Create interactive prototypes to communicate product experiences.",
      },
      {
        name: "Design Systems",
        detail:
          "Reusable components, visual consistency and scalable interface design.",
      },
    ],

    format: "Design-focused practical training",
    audience: "Students, developers and aspiring designers",
  },
];


// ---------------------------------------------------------
// Enterprise / IT Solutions
// These are services, not academic courses.
// ---------------------------------------------------------

export const enterpriseServices = [
  {
    index: "01",
    title: "Digital Presence & Applications",
    detail:
      "Website development, custom web platforms, mobile applications and software development for businesses.",
  },
  {
    index: "02",
    title: "AI & Business Automation",
    detail:
      "AI automation, WhatsApp automation engines and technology solutions that streamline business processes.",
  },
  {
    index: "03",
    title: "Data & Cloud Systems",
    detail:
      "Data migration, relational and non-relational database solutions and IT infrastructure consulting.",
  },
  {
    index: "04",
    title: "Academic Technology Solutions",
    detail:
      "Project development, technical documentation, presentations and technology support for academic institutions.",
  },
  {
    index: "05",
    title: "Software & IT Solutions",
    detail:
      "Custom software, business applications and technology consulting tailored to organisational requirements.",
  },
];


export function getCourseBySlug(slug) {
  return courseCategories.find((course) => course.slug === slug);
}