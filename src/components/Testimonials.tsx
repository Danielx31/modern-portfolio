"use client";

import { CheckCircle } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const highlights = [
  {
    title: "Internal System Development",
    text: "Developed and maintained internal business systems that streamline workflows and support daily operations.",
    gradient: "from-purple-500 to-blue-500",
  },
  {
    title: "Full Stack Enhancements",
    text: "Improved existing applications by implementing new backend features and enhancing frontend user experience.",
    gradient: "from-pink-500 to-purple-500",
  },
  {
    title: "Frontend Development",
    text: "Built responsive and user-friendly interfaces for new projects using modern frameworks like Vue and React.",
    gradient: "from-blue-500 to-cyan-500",
  },
];

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      const cards = cardsRef.current?.querySelectorAll(".contribution-card");
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contributions" className="relative py-32 px-6">
      <div className="space-divider mb-20" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20 space-y-4">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl cosmic-text text-glow mb-4">
              Contributions
            </h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full" />
          </div>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto mt-6 leading-relaxed">
            Key contributions and experience from real-world projects and
            internal systems development.
          </p>

          {/* Small honest note */}
          <p className="text-sm text-slate-500 italic">
            Currently building internal systems — testimonials coming soon as I
            continue delivering value.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className="contribution-card group relative space-glass-hover rounded-2xl p-8 flex flex-col gap-6"
            >
              <div className="glow-border absolute inset-0 rounded-2xl" />

              {/* Icon */}
              <CheckCircle
                className={`w-8 h-8 bg-gradient-to-br ${item.gradient} bg-clip-text text-purple-400 opacity-70`}
              />

              {/* Title */}
              <h3 className="text-xl font-semibold text-white group-hover:text-glow transition-all">
                {item.title}
              </h3>

              {/* Text */}
              <p className="text-slate-300 leading-relaxed flex-1">
                {item.text}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-purple-500/30 rounded-tr-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}