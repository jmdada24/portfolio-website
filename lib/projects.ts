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
  coverImage?: string;
  coverAlt?: string;

  problem?: string;
  solution?: string;
  outcome?: string;
};

export const projects: Project[] = [
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
    github: "#",
    coverImage: "",
    coverAlt: "Barangay Bayabas Appointment System project preview",
    problem:
      "Manual barangay appointment handling and document requests can be inefficient, time-consuming, and dependent on in-person visits, which creates inconvenience for both residents and staff.",
    solution:
      "Built a role-based full-stack web and mobile system where residents can book appointments, request barangay documents, track statuses, upload verification requirements, chat with an AI assistant, and submit feedback, while staff and admins can manage records, schedules, reports, and service configurations.",
    outcome:
      "The project demonstrated practical full-stack and mobile development skills across authentication, role-based access, AI integration, real-time workflows, email handling, database management, and deployment. It also served as a strong academic capstone for CCE106.",
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
    github: "#",
    coverImage: "",
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
    github: "#",
    coverImage: "",
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
    sortDate: "2025-08",
    technologies: [
      "Python",
      "Streamlit",
      "Ollama",
      "llama3.1:8b",
      "NLP",
      "Prompt Engineering",
    ],
    demo: "https://technical-writing-enhancer-nlp-project.streamlit.app/",
    github: "#",
    coverImage: "",
    coverAlt: "Technical Writing Enhancement Agent preview",
    problem:
      "Technical writing can be unclear, incomplete, inconsistent, or overly verbose, and manual revision can be time-consuming and subjective.",
    solution:
      "Developed a two-stage agentic NLP pipeline that first analyzes whether text needs enhancement, then selectively applies only the relevant 6C principles for minimal and conservative rewriting.",
    outcome:
      "The project demonstrated practical NLP system design, local LLM integration, prompt-based reasoning, and privacy-friendly technical writing enhancement through a usable Streamlit interface.",
  },
];