export type ProjectCategory = "Full Stack" | "Web" | "AI" | "Design";
export type ProjectMonth =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

export type Project = {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  category: ProjectCategory;
  featured?: boolean;

  year: string; // display text
  yearNumber: number; // for filtering
  month: ProjectMonth; // full month
  monthShort: string; // short month for filter pill / card
  sortDate: string; // YYYY-MM

  technologies: string[];
  demo?: string;
  github?: string;
  figma?: string;

  coverImage?: string;
  coverAlt?: string;

  problem?: string;
  solution?: string;
  outcome?: string;
};

export const projects: Project[] = [
  {
    slug: "contnental-fitness-gym-management",
    name: "Contnental Fitness Gym Management System",
    shortDescription:
      "A full-stack multi-branch gym management platform for members, bookings, class schedules, QR attendance, online subscriptions, staff, trainers, and admin operations.",
    fullDescription:
      "The Contnental Fitness Gym Management System is a full-stack operational platform built for an exclusive fitness gym that needed a more centralized way to manage members across branches. The system replaces spreadsheet-heavy workflows with a role-based Laravel API and Next.js portal for admins, staff, trainers, and members, supporting member subscriptions, QR attendance, class enrollment, bookings, schedules, payments, announcements, archives, and activity logs.",
    category: "Full Stack",
    featured: true,
    year: "May 2026",
    yearNumber: 2026,
    month: "May",
    monthShort: "May",
    sortDate: "2026-05",
    technologies: [
      "Laravel 13",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase",
      "PostgreSQL",
      "Xendit",
      "Docker",
      "Render",
      "Vercel",
      "Clean Architecture",
    ],
    
    demo: "https://contnental-fitness-gym.vercel.app/",
    github: "https://github.com/jmdada24/contnental-fitness-gym",
    figma: "https://www.figma.com/design/xFuFkD4elAfKMufDho6rbK/Contnental?node-id=0-1&t=lTCYL3kK7oRYz7U8-1",
    coverImage: "/assets/images/projects/contnental-fitness-gym-project.png",
    coverAlt: "Contnental Fitness Gym Management System project preview",
    problem:
      "Contnental Fitness Gym managed important member and branch operations through spreadsheets, making it difficult to centralize records, track attendance, coordinate trainers and staff, manage schedules, and monitor activity across multiple branches.",
    solution:
      "Built a role-based full-stack gym management system with a Laravel API and Next.js portal. Members can subscribe online through Xendit, view their QR code, and enroll in classes; trainers can see their assigned schedules; staff can handle limited operational tasks; and admins can manage members, bookings, class schedules, trainers, staff, announcements, payments, archives, and user logs.",
    outcome:
      "The project demonstrates practical full-stack system design for real gym operations, including multi-role access, centralized branch management, QR-based attendance, online payment workflows, secure activity tracking, clean architecture, Docker-based deployment, and a production path using Render, Vercel, and Supabase PostgreSQL.",
  },
  {
    slug: "barangaybayabas",
    name: "Barangay Bayabas Appointment System",
    shortDescription:
      "A full-stack web and mobile barangay appointment and document request system built as a final academic project.",
    fullDescription:
      "The Barangay Bayabas Appointment System is a web-based and mobile-enabled platform that allows residents to book appointments, request barangay documents, and interact with staff and administrators online. It was developed as a final project for CCE106 and demonstrates a real-world barangay workflow through a fictional academic setting.",
    category: "Full Stack",
    year: "March 2026",
    yearNumber: 2026,
    month: "March",
    monthShort: "Mar",
    sortDate: "2026-03",
    technologies: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS v4",
      "shadcn/ui",
      "Expo",
      "React Native",
      "Supabase",
      "PostgreSQL",
      "Google Gemini API",
      "Nodemailer",
      "Docker",
      "Vercel",
    ],
    demo: "https://bb-barangay-appointment-system-project.vercel.app/",
    github: "https://github.com/jmdada24/barangay-appointment-system",
    figma: "https://www.figma.com/design/6tauf85anU8WR7hUDxu1T1/Barangay-Bayabas?t=lTCYL3kK7oRYz7U8-0",
    coverImage: "/assets/images/projects/barangay-project.png",
    coverAlt: "Barangay Bayabas Appointment System project preview",
    problem:
      "Manual barangay appointment handling and document requests can be inefficient, time-consuming, and dependent on in-person visits, which creates inconvenience for both residents and staff.",
    solution:
      "Built a role-based full-stack web and mobile system where residents can book appointments, request barangay documents, track statuses, upload verification requirements, chat with an AI assistant, and submit feedback, while staff and admins can manage records, schedules, reports, and service configurations.",
    outcome:
      "The project demonstrated practical full-stack and mobile development skills across authentication, role-based access, AI integration, real-time workflows, email handling, database management, and deployment. It also served as a strong academic capstone for CCE106.",
  },
  {
    slug: "johnny-barber-wordpress",
    name: "Johnny Barber WordPress Site",
    shortDescription:
      "A WordPress barbershop website concept with premium grooming sections, service cards, team profiles, and a reservation-focused user flow.",
    fullDescription:
      "Johnny Barber is a WordPress side project created to showcase practical WordPress website-building skills through a polished barbershop experience. The site presents a premium grooming brand with a hero section, service highlights, barber profiles, business information, and a reservation-focused call to action for clients who want to book ahead and be prioritized.",
    category: "Web",
    year: "April 2026",
    yearNumber: 2026,
    month: "April",
    monthShort: "Apr",
    sortDate: "2026-04",
    technologies: [
      "WordPress",
      "PHP",
      "Elementor",
    ],
    demo: "https://johnny-barber.page.gd/",
    coverImage: "/assets/images/projects/johnny-barber.png",
    coverAlt: "Johnny Barber WordPress barbershop website preview",
    problem:
      "Because some client and company projects cannot be shown publicly due to NDA restrictions, I needed a portfolio-safe project that could still demonstrate my ability to build a polished WordPress business website.",
    solution:
      "Designed and built a barbershop website concept for Johnny Barber with premium grooming messaging, service sections, barber profiles, reservation calls to action, and business details that fit a local service-based brand.",
    outcome:
      "The project showcases my WordPress skills, visual layout sense, responsive page structure, service business presentation, and ability to create a client-facing website experience even when other real-world work cannot be publicly displayed.",
  },
  {
    slug: "realitech",
    name: "Realitech",
    shortDescription:
      "A web-based real estate platform designed to improve transparency and trust among developers, agents, and buyers.",
    fullDescription:
      "Realitech is a real estate platform focused on improving trust, clarity, and accessibility in property transactions through a modern digital experience.",
    category: "Full Stack",
    featured: true,
    year: "July 2025",
    yearNumber: 2025,
    month: "July",
    monthShort: "Jul",
    sortDate: "2025-07",
    technologies: ["React", "Node.js", "TypeScript", "TailwindCSS", "Firebase"],
    demo: "https://um-realitech-hackestate-1ed69.web.app/",
    github: "https://github.com/jmdada24",
    coverImage: "/assets/images/projects/realitech-project.png",
    coverAlt: "Realitech project preview",
    problem:
      "Property listings and communication between stakeholders often lack transparency and consistency.",
    solution:
      "Built a centralized platform with a cleaner interface, structured data handling, and improved information visibility.",
    outcome:
      "The project demonstrates how thoughtful UI and full-stack development can improve trust and usability in real estate workflows.",
  },
  {
    slug: "mindspace",
    name: "MindSpace",
    shortDescription:
      "A mental wellness-focused full-stack platform built with a clean and user-centered experience.",
    fullDescription:
      "MindSpace is a full-stack web platform focused on mental wellness, designed to provide a calm, approachable, and user-friendly digital experience.",
    category: "Full Stack",
    year: "January 2025",
    yearNumber: 2025,
    month: "January",
    monthShort: "Jan",
    sortDate: "2025-01",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    demo: "https://mindspace.infinityfreeapp.com/?i=1",
    github: "https://github.com/jmdada24/Mental_Health_Support_Site",
    coverImage: "/assets/images/projects/mindspace-project.png",
    coverAlt: "MindSpace project preview",
    problem:
      "Many mental wellness platforms can feel cluttered, inconsistent, or difficult to use for people who need a calmer and more intuitive experience.",
    solution:
      "Developed a full-stack web application using HTML, CSS, JavaScript, PHP, and MySQL with a more structured interface and a cleaner user journey.",
    outcome:
      "The project helped strengthen my practical experience in full-stack development while applying user-centered design thinking to a more meaningful problem space.",
  },


  {
    slug: "technical-writing-enhancer",
    name: "Technical Writing Enhancement Agent",
    shortDescription:
      "An agentic NLP system that enhances technical writing using the 6C framework through selective and conservative rewriting.",
    fullDescription:
      "The Technical Writing Enhancement Agent is an NLP-based system that improves technical writing using the 6C framework: Clarity, Completeness, Conciseness, Concreteness, Consistency, and Courtesy. The system first evaluates whether improvement is needed, then selectively applies only the relevant principles while preserving the original meaning. It is designed to avoid over-editing and runs locally using Ollama for privacy-friendly inference.",
    category: "AI",
    year: "March 2026",
    yearNumber: 2026,
    month: "March",
    monthShort: "Mar",
    sortDate: "2026-03",
    technologies: [
      "Python",
      "Streamlit",
      "Ollama",
      "llama3.1:8b",
      "NLP",
      "Prompt Engineering",
    ],
    demo: "https://technical-writing-enhancer-nlp-project.streamlit.app/",
    github: "https://github.com/jmdada24/technical-writing-enhancer",
    coverImage: "/assets/images/projects/technical-writing-enhancer.png",
    coverAlt: "Technical Writing Enhancement Agent preview",
    problem:
      "Technical writing can be unclear, incomplete, inconsistent, or overly verbose, and manual revision can be time-consuming and subjective.",
    solution:
      "Developed a two-stage agentic NLP pipeline that first analyzes whether text needs enhancement, then selectively applies only the relevant 6C principles for minimal and conservative rewriting.",
    outcome:
      "The project demonstrated practical NLP system design, local LLM integration, prompt-based reasoning, and privacy-friendly technical writing enhancement through a usable Streamlit interface.",
  },

  {
    slug: "gyum",
    name: "GyUM — University Fitness Tracker Proposal",
    shortDescription:
      "A Figma-based product design proposal for a university fitness tracker that suggests workout schedules, tracks progress, and connects students through a campus wellness community.",
    fullDescription:
      "GyUM is a product design concept created in Figma that explores how a university-focused fitness platform could help students and faculty maintain healthy routines despite busy academic schedules. The app introduces smart workout scheduling based on class timetables, progress tracking features, and a campus community where users can share achievements and join fitness groups for motivation.",
    category: "Design",
    year: "December 2025",
    yearNumber: 2025,
    month: "December",
    monthShort: "Dec",
    sortDate: "2025-12",
    technologies: [
      "Figma",
      "UI Design",
      "UX Design",
      "Product Design",
      "Wireframing",
      "Prototyping",
    ],
    figma: "https://www.figma.com/design/Ml6hOzI7hiIUuPN612et4c/GyUM-Project?t=hrrF0Ab48SvicI8B-1",
    coverImage: "/assets/images/projects/gyUM-design.png",
    coverAlt: "GyUM university fitness tracker design preview",
    problem:
      "University students and faculty often struggle to maintain consistent fitness routines because academic schedules are unpredictable and time is limited.",
    solution:
      "Designed a concept fitness application that integrates with a university schedule system to suggest optimal workout times based on free periods, while also allowing users to track progress and stay motivated through a campus-based fitness community.",
    outcome:
      "The project demonstrates product thinking and UI/UX design skills through feature planning, user-centered design decisions, and interface prototyping using Figma.",
  },

  {
    slug: "student-course-enrollment-system",
    name: "Student Course Enrollment System",
    shortDescription:
      "A full-stack web-based enrollment platform for senior high school workflows with role-based access for admins, students, and teachers.",
    fullDescription:
      "The Student Course Enrollment System is a web-based academic portal built for senior high school enrollment workflows under the Sine Skwelahan branding. It supports student registration with OTP verification, admin approval processes, course and schedule management, enrollment handling, and grade viewing through dedicated dashboards for admins, students, and teachers.",
    category: "Full Stack",
    year: "September 2025",
    yearNumber: 2025,
    month: "September",
    monthShort: "Sep",
    sortDate: "2025-09",
    technologies: [
      "PHP",
      "MySQL",
      "MariaDB",
      "Tailwind CSS 4",
      "DaisyUI 5",
      "JavaScript",
      "PHPMailer",
      "PDO",
      "Composer",
      "npm",
    ],
    demo: "",
    github: "https://github.com/jmdada24/Student_Course_Enrollment",
    coverImage: "",
    coverAlt: "Student Course Enrollment System project preview",
    problem:
      "Managing student registration, enrollment approval, course scheduling, and grade access manually can be slow, repetitive, and difficult to track for both students and school administrators.",
    solution:
      "Built a role-based web application with PHP, MySQL, Tailwind CSS, DaisyUI, and vanilla JavaScript that supports OTP-based student registration, admin approval workflows, course and schedule management, enrollment processing, and grade-related access for students and teachers.",
    outcome:
      "The project strengthened my full-stack development skills in building server-rendered systems, designing role-based academic workflows, handling session-based authentication, integrating email verification, and structuring both frontend and backend modules for a real school portal scenario.",
  },

  {
    slug: "file-converter-app",
    name: "File Converter App",
    shortDescription:
      "A privacy-focused file converter built with Laravel, Docker, and Python for converting files locally with temporary processing and automatic cleanup.",
    fullDescription:
      "File Converter App is a private file conversion web application built as a side project to provide a simpler and more trustworthy alternative to sketchy online converter websites. It currently supports Image to PDF, PDF to Image, and PDF to Word conversion using Laravel for the web application layer, Docker for containerized development and deployment, and Python for higher-fidelity PDF to DOCX conversion.",
    category: "Full Stack",
    featured: true,
    year: "March 2026",
    yearNumber: 2026,
    month: "March",
    monthShort: "Mar",
    sortDate: "2026-03",
    technologies: [
      "Laravel 12",
      "PHP",
      "Blade",
      "Tailwind CSS",
      "Vite",
      "Docker",
      "Docker Compose",
      "Python",
      "pdf2docx",
      "ImageMagick",
      "Ghostscript",
    ],
    demo: "https://file-converter-app-jb04.onrender.com/",
    github: "https://github.com/jmdada24/file-converter-app",
    coverImage: "/assets/images/projects/private-file-converter.png",
    coverAlt: "File Converter App project preview",
    problem:
      "Many free online file converter websites feel untrustworthy, especially when users upload personal, academic, or work-related files without knowing how those files are handled or stored.",
    solution:
      "Built a privacy-friendly converter app that processes files temporarily, supports multiple conversion tools through a clean Laravel service-based structure, and uses Docker plus Python integration to support both PHP-based and script-based file conversion workflows.",
    outcome:
      "The project strengthened my skills in Laravel architecture, Docker-based development, backend file handling, temporary file cleanup, production deployment, and integrating Python scripts into a PHP application for real-world conversion tasks.",
  },

];
