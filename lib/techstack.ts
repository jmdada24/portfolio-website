import { Code2 } from "lucide-react";
import { FaJava } from "react-icons/fa6";
import {
  SiPhp,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiDart,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiBootstrap,
  SiDocker,
  SiLaravel,
  SiFlutter,
  SiDaisyui,
  SiWordpress,
  SiSquarespace,
  SiShopify,
  SiFigma,
  SiSqlite,
  SiMysql,
  SiFirebase,
  SiSupabase,
  SiGit,
  SiGithub,
} from "react-icons/si";

export type TechStackItem = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
};

export const techStackItems: TechStackItem[] = [
  { name: "Java", icon: FaJava },
  { name: "PHP", icon: SiPhp },
  { name: "Python", icon: SiPython },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Dart", icon: SiDart },
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Docker", icon: SiDocker },
  { name: "Laravel", icon: SiLaravel },
  { name: "Flutter", icon: SiFlutter },
  { name: "React Native", icon: SiReact },
  { name: "DaisyUI", icon: SiDaisyui },
  { name: "shadcn/ui", icon: Code2 },
  { name: "WordPress", icon: SiWordpress },
  { name: "Squarespace", icon: SiSquarespace },
  { name: "Shopify", icon: SiShopify },
  { name: "Figma", icon: SiFigma },
  { name: "SQLite", icon: SiSqlite },
  { name: "MySQL", icon: SiMysql },
  { name: "Firebase", icon: SiFirebase },
  { name: "Supabase", icon: SiSupabase },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
];