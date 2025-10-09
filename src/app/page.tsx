"use client";
import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";

export default function App() {
  const [stars, setStars] = useState<
    Array<{ top: string; left: string; size: string; delay: string }>
  >([]);

  useEffect(() => {
    // Generate random stars
    const starArray = [];
    for (let i = 0; i < 200; i++) {
      starArray.push({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size:
          Math.random() > 0.7
            ? "star-large"
            : Math.random() > 0.4
            ? "star-medium"
            : "star-small",
        delay: `${Math.random() * 3}s`,
      });
    }
    setStars(starArray);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0e27] overflow-x-hidden">
      {/* Starfield Background */}
      <div className="stars fixed inset-0 z-0">
        {stars.map((star, i) => (
          <div
            key={i}
            className={`star ${star.size}`}
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      {/* Nebula Clouds */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="nebula nebula-purple"
          style={{
            width: "600px",
            height: "600px",
            top: "10%",
            left: "5%",
            animationDelay: "0s",
          }}
        />
        <div
          className="nebula nebula-blue"
          style={{
            width: "700px",
            height: "700px",
            top: "40%",
            right: "10%",
            animationDelay: "5s",
          }}
        />
        <div
          className="nebula nebula-pink"
          style={{
            width: "500px",
            height: "500px",
            bottom: "15%",
            left: "50%",
            animationDelay: "10s",
          }}
        />
        <div
          className="nebula nebula-cyan"
          style={{
            width: "550px",
            height: "550px",
            top: "60%",
            left: "20%",
            animationDelay: "7s",
          }}
        />
      </div>

      {/* Shooting Stars */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="shooting-star"
          style={{
            top: "20%",
            right: "30%",
            animationDelay: "2s",
            animationDuration: "2s",
          }}
        />
        <div
          className="shooting-star"
          style={{
            top: "50%",
            right: "60%",
            animationDelay: "5s",
            animationDuration: "3s",
          }}
        />
        <div
          className="shooting-star"
          style={{
            top: "70%",
            right: "20%",
            animationDelay: "8s",
            animationDuration: "2.5s",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
