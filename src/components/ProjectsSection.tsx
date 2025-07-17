import { Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  techs: string;
  link: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="w-full max-w-4xl animate-fade-in-up">
      <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        <Globe className="w-6 h-6" /> Projects
      </h2>
      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg font-bold">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2 text-muted-foreground">{project.techs}</p>
              <p className="mb-4">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm">View Live</Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
} 