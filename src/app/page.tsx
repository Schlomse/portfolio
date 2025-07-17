import { ProfileSection } from "@/components/ProfileSection";
import { TechStackSection } from "@/components/TechStackSection";
import { ProjectsSection } from "@/components/ProjectsSection";

export default function Home() {
  const techs = [
    "TypeScript",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Shadcn UI",
    "C#",
    "Java",
  ];

  const projects = [
    {
      title: "Modern Portfolio",
      description: "A responsive portfolio focused on UI/UX and performance.",
      techs: "Next.js, TypeScript, Shadcn UI",
      link: "#",
    },
  ];

  return (
    <div className="font-sans min-h-screen flex flex-col items-center bg-background text-foreground px-4 py-10 gap-16 transition-colors duration-300">
      <ProfileSection />
      <TechStackSection techs={techs} />
      <ProjectsSection projects={projects} />
      <footer className="w-full flex justify-center items-center mt-16 py-6 border-t border-border text-muted-foreground text-sm animate-fade-in-up">
        © {new Date().getFullYear()} Dominik. All rights reserved.
      </footer>
    </div>
  );
}
