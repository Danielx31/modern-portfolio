import { ArrowDown, Sparkles, Rocket } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state - everything hidden
      gsap.set(
        [
          badgeRef.current,
          titleRef.current,
          subtitleRef.current,
          descRef.current,
          buttonsRef.current,
        ],
        {
          opacity: 0,
          y: 30,
        }
      );

      // Create timeline for entrance animation
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(badgeRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
      })
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.4"
        )
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.6"
        )
        .to(
          descRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.5"
        )
        .to(
          buttonsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.5"
        );

      // Floating animation for cosmic elements
      gsap.to(".orbital-ring", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".cosmic-sphere", {
        y: "+=20",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Orbital Rings */}
        <div
          className="orbital-ring"
          style={{ width: "400px", height: "400px", top: "20%", left: "10%" }}
        />
        <div
          className="orbital-ring"
          style={{
            width: "300px",
            height: "300px",
            top: "50%",
            right: "15%",
            animationDuration: "15s",
          }}
        />

        {/* Cosmic Spheres */}
        <div
          className="cosmic-sphere"
          style={{ width: "80px", height: "80px", top: "15%", right: "20%" }}
        />
        <div
          className="cosmic-sphere"
          style={{
            width: "60px",
            height: "60px",
            bottom: "20%",
            left: "15%",
            animationDelay: "3s",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Greeting Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full space-glass cosmic-pulse"
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-sm text-purple-300">
            Welcome to my cosmic portfolio
          </span>
          <Sparkles className="w-4 h-4 text-purple-400" />
        </div>

        {/* Main Title */}
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-lg text-purple-300/80">Hello, I&apos;m</p>
            <h1
              ref={titleRef}
              className="text-6xl md:text-8xl cosmic-text text-glow"
            >
              Daniel Balverde
            </h1>
          </div>

          <h2 ref={subtitleRef} className="text-2xl md:text-4xl stellar-text">
            Full Stack Developer
          </h2>
        </div>

        {/* Description */}
        <p
          ref={descRef}
          className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed"
        >
          Transforming ideas into stellar digital experiences. I craft
          beautiful, high-performance applications that launch your projects
          into the stratosphere.
        </p>

        {/* CTA Buttons */}
        <div
          ref={buttonsRef}
          className="flex gap-4 justify-center flex-wrap pt-4"
        >
          <Button
            size="lg"
            className="cosmic-button group"
            onClick={() => scrollToSection("projects")}
          >
            <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Explore Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="space-glass-hover border-purple-500/50 text-purple-200 hover:text-white"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-16 animate-bounce">
          <div className="inline-flex flex-col items-center gap-2 text-purple-300/60">
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${
                5 + Math.random() * 10
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
