// Course data drawn directly from the client's brief (brochure + brief).
// slug is used for /courses/:slug routing.

export const courseCategories = [
  {
    slug: 'full-stack-web',
    photo: null,
    index: '01',
    shortTitle: 'Full-Stack & Web',
    title: 'Full-Stack & Web Development',
    tagline: 'Ship production applications, not tutorials.',
    summary:
      'Hands-on training across the stacks companies actually hire for — from MERN and Python full-stack to modern front-end frameworks — building toward internship-ready and job-ready portfolios.',
    tracks: [
      { name: 'MERN Stack', detail: 'MongoDB, Express, React and Node — build and deploy a complete application end to end.' },
      { name: 'Python Full Stack', detail: 'Django/Flask back ends paired with modern front-end tooling.' },
      { name: 'React', detail: 'Component architecture, state management, and production build practices.' },
      { name: '.NET', detail: 'Enterprise-grade back-end development on the .NET platform.' },
      { name: 'HTML, CSS & JS', detail: 'The fundamentals, taught the way working developers actually use them.' },
    ],
    format: 'Courses, internships and hands-on academic support',
    audience: 'Students, graduates and working professionals',
  },
  {
    slug: 'mobile-software-engineering',
    index: '02',
    shortTitle: 'Mobile & Software',
    title: 'Mobile & Software Engineering',
    tagline: 'From a single codebase to native performance.',
    summary:
      'Cross-platform and native development training covering the languages and frameworks behind most of today\u2019s production mobile and desktop software.',
    tracks: [
      { name: 'Flutter', detail: 'One codebase, native performance on iOS and Android.' },
      { name: 'Java', detail: 'Object-oriented fundamentals through to Android application development.' },
      { name: 'Python', detail: 'Scripting, automation and application development.' },
      { name: 'C & C++', detail: 'Systems-level programming and performance-critical fundamentals.' },
    ],
    format: 'Structured training modules',
    audience: 'Students, graduates and working professionals',
  },
  {
    slug: 'advanced-tech-analytics',
    index: '03',
    shortTitle: 'Advanced Tech',
    title: 'Advanced Tech & Analytics',
    tagline: 'Where robotics, intelligence and infrastructure meet.',
    summary:
      'Our deepest bench — machine learning, embedded systems, robotics and the data and DevOps disciplines that put intelligent systems into production.',
    tracks: [
      { name: 'Machine Learning & AI', detail: 'Model building, training pipelines and applied AI fundamentals.' },
      { name: 'Embedded Systems & IoT', detail: 'Embedded C, microcontrollers and connected-device design.' },
      { name: 'Robotics', detail: 'Embedded systems and robotics — sensing, control and automation.' },
      { name: 'Data Analytics', detail: 'Turning raw data into decisions with modern analytics tooling.' },
      { name: 'SQL & Database Management', detail: 'Relational design, query performance and administration.' },
      { name: 'DevOps & UI/UX', detail: 'Deployment pipelines and the design discipline that makes software usable.' },
    ],
    format: 'Design, embedded systems and SQL database management training',
    audience: 'Students, graduates and working professionals',
  },
  {
    slug: 'academic-project-assistance',
    index: '04',
    shortTitle: 'Academic Support',
    title: 'Academic & Project Assistance',
    tagline: 'From proposal to viva, fully guided.',
    summary:
      'Complete project guidance for B.Tech, M.Tech, BCA and MCA candidates — from a working mini or major project through to the documentation your department actually asks for.',
    tracks: [
      { name: 'Mini & Major Projects', detail: 'Guidance and hands-on development, scoped to your syllabus.' },
      { name: 'Seminar & Project Reports', detail: 'Professional documentation, formatted to submission standard.' },
      { name: 'Coursework Records', detail: 'Record works and practical submission preparation.' },
      { name: 'Bank Loan Project Plans', detail: 'Structured project plans prepared for education/business loan submission.' },
    ],
    format: 'For B.Tech, M.Tech, BCA and MCA candidates',
    audience: 'Final-year and postgraduate students',
  },
]

export const enterpriseServices = [
  {
    index: '01',
    title: 'Digital Presence & Applications',
    detail: 'Website development, custom web platforms, and native or cross-platform application development.',
  },
  {
    index: '02',
    title: 'Automation & Efficiency',
    detail: 'AI automation, WhatsApp automation engines, and process automation for growing businesses.',
  },
  {
    index: '03',
    title: 'Data & Cloud Systems',
    detail: 'Data migration, relational and non-relational database solutions, and IT infrastructure consulting.',
  },
]

export function getCourseBySlug(slug) {
  return courseCategories.find((c) => c.slug === slug)
}
