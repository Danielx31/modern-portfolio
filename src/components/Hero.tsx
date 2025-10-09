"use client";
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/20 px-6"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <p className="text-muted-foreground">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl">Daniel Balverde</h1>
          <h2 className="text-2xl md:text-4xl text-muted-foreground">
            Full Stack Developer
          </h2>
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          I craft seamless and engaging digital experiences using a versatile
          tech stack that includes React, Vue, Node.js, Laravel, and PHP. With a
          passion for modern web technologies, I build fast, responsive, and
          scalable applications that bring ideas to life.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" onClick={() => scrollToSection("projects")}>
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </Button>
        </div>

        <div className="pt-12 animate-bounce">
          <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
