"use client";
import { Code, Database, Server, Cloud, Layers } from "lucide-react";
import { Card } from "./ui/card";

export function About() {
  const features = [
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "Building modern, responsive, and interactive user interfaces using Vue, Laravel, React, Next.js, and CSS frameworks.",
    },
    {
      icon: Server,
      title: "Backend Systems",
      description:
        "Developing secure and scalable server-side applications exclusively with Laravel.",
    },
    {
      icon: Database,
      title: "Database Design",
      description:
        "Designing and managing efficient databases using Microsoft SQL and MySQL.",
    },
    {
      icon: Cloud,
      title: "Deployment & Hosting",
      description:
        "Deploying and hosting applications using IIS servers and Azure cloud platforms.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I&apos;m a passionate full-stack developer with 2+ years of
            experience building complete web applications. I specialize in
            creating end-to-end solutions from UI design to database
            architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
