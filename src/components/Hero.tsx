import { ArrowDown, Sparkles, Rocket } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
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
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full space-glass cosmic-pulse">
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
            <h1 className="text-6xl md:text-8xl cosmic-text text-glow">
              Daniel Balverde
            </h1>
          </div>

          <h2 className="text-2xl md:text-4xl stellar-text">
            Full Stack Developer
          </h2>
        </div>

        {/* Description */}
        <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Transforming ideas into stellar digital experiences. I craft
          beautiful, high-performance applications that launch your projects
          into the stratosphere.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center flex-wrap pt-4">
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
