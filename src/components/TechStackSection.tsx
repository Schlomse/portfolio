import { Code2 } from "lucide-react";

interface TechStackSectionProps {
  techs: string[];
}

export function TechStackSection({ techs }: TechStackSectionProps) {
  return (
    <section className="w-full max-w-2xl animate-fade-in-up">
      <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        <Code2 className="w-6 h-6" /> Tech Stack
      </h2>
      <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
        {techs.map((tech) => (
          <span
            key={tech}
            className="bg-muted/70 dark:bg-muted/40 px-4 py-2 rounded-lg text-base font-medium shadow-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
} 