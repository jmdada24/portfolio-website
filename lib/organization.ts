export type OrganizationItem = {
  name: string;
  role: string;
  period: string;
  description: string;
};

export const organizations: OrganizationItem[] = [
  {
    name: "CCE Mentor — University of Mindanao",
    role: "Mentor",
    period: "2025 — Present",
    description:
      "Mentor Computer Science students by teaching programming concepts, guiding mentees through technical challenges, consulting on academic and project-related work, and providing advice that supports both their learning progress and confidence in software development.",
  },
  {
    name: "University of Mindanao Enigma",
    role: "Tech Committee",
    period: "2025 — Present",
    description:
      "Support technology-related student initiatives and help in the coordination and execution of organization-led activities, programs, and events.",
  },
  {
    name: "Google Developer Groups on Campus",
    role: "Logistics Committee",
    period: "April 2025 — December 2025",
    description:
      "Helped support the logistics, coordination, and on-ground execution of community and student-focused tech events to ensure smoother and more organized event delivery.",
  },
  {
    name: "Davao Startup Week",
    role: "Community Events Management",
    period: "July 2025 — September 2025",
    description:
      "Contributed to community event coordination and engagement efforts for startup-focused programs and activities within the local innovation ecosystem.",
  },
];