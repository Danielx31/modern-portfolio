"use client";

import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const experiences = [
  {
    role: "Full Stack Developer",
    company: "VST-ECS Phils. Inc.",
    location: "On Site - Pasig City, Philippines",
    period: "2023 – Present",
    description:
      "Designing, developing, and maintaining internal web-based systems that support business processes, focusing on improving efficiency, usability, and overall system performance.",
    tech: ["Laravel","Vue", "React", "MS SQL", "Azure", "JavaScript"],
    gradient: "from-purple-500 to-blue-500",
  },
  {
    role: "Intern Full Stack Developer",
    company: "Decode Technologies",
    location: "On Site - Quezon City, Philippines",
    period: "2023",
    description:
      "Enhanced existing web applications by working on both backend and frontend features, and contributed as a frontend developer in building a new project from the ground up.",
    tech: ["Vue", "Laravel", "Bootstrap", "JavaScript", "GitLab", "MySQL"],
    gradient: "from-pink-500 to-purple-500",
  },
  {
    role: "Junior Web Developer",
    company: "Freelance",
    location: "Remote",
    period: "2022 – 2023",
    description:
      "Handled small freelance web projects during my college years, turning ideas into functional websites while strengthening my core skills in modern web development.",
    tech: ["HTML", "CSS", "JavaScript", "Laravel", "Firebase", "Git"],
    gradient: "from-blue-500 to-cyan-500",
  },
];

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 50 },
          {
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          }
        );
      }

      const items = timelineRef.current?.querySelectorAll(".exp-card");
      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0, x: -60 },
          {
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="relative py-32 px-6">
      <div className="space-divider mb-20" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20 space-y-4">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl cosmic-text text-glow mb-4">
              Experience
            </h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full" />
          </div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mt-6 leading-relaxed">
            My professional journey — building real-world solutions and growing
            as a developer.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 opacity-30 hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="exp-card relative flex gap-8 group"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${exp.gradient} flex items-center justify-center shadow-lg flex-shrink-0 z-10`}
                  >
                    <Briefcase className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 space-glass-hover rounded-2xl p-8 relative">
                  <div className="glow-border absolute inset-0 rounded-2xl" />

                  {/* Role & Company */}
                  <div className="mb-4">
                    <h3 className="text-2xl text-white group-hover:text-glow transition-all">
                      {exp.role}
                    </h3>
                    <p
                      className={`text-lg bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent font-semibold`}
                    >
                      {exp.company}
                    </p>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs rounded-full space-glass text-purple-300 border border-purple-500/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-purple-500/30 rounded-tr-xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
