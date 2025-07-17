import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin } from "lucide-react";

export function ProfileSection() {
  return (
    <section className="flex flex-col items-center gap-6 animate-fade-in">
      <Avatar className="w-28 h-28 border-4 border-primary shadow-lg">
        <AvatarImage src="/avatar.png" alt="Profile picture" />
        <AvatarFallback>DD</AvatarFallback>
      </Avatar>
      <h1 className="text-4xl font-extrabold text-center tracking-tight leading-tight">
        Dominik
      </h1>
      <p className="text-center max-w-2xl text-lg text-muted-foreground">
        Fullstack Developer focused on modern web technologies, UI/UX, and high-performance applications. Passionate about clean code, design, and innovative solutions.
      </p>
      <div className="flex gap-4 mt-2">
        <a href="mailto:???" aria-label="E-Mail" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="icon" className="hover:scale-110 transition-transform"><Mail className="w-5 h-5" /></Button>
        </a>
        <a href="https://github.com/schlomse" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="icon" className="hover:scale-110 transition-transform"><Github className="w-5 h-5" /></Button>
        </a>
        <a href="https://linkedin.com/in/schlomse" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="icon" className="hover:scale-110 transition-transform"><Linkedin className="w-5 h-5" /></Button>
        </a>
      </div>
    </section>
  );
} 