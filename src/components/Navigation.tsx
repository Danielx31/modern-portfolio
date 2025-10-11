"use client";
import { useState, useEffect } from "react";
import { Menu, X, Rocket } from "lucide-react";
import { Button } from "./ui/button";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted to true to prevent SSR/client mismatch
    setMounted(true);

    // Only run on client side
    if (typeof window !== "undefined") {
      // Initialize with the current scroll position after component mounts
      // This ensures the client starts with the correct state that matches the actual scroll position
      setIsScrolled(window.scrollY > 50);

      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // During initial render, we always start with the unscrolled state to match server render
  // After mounting, we update based on actual scroll position
  const displayScrolled = mounted && isScrolled;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        // During initial render (hydration), always show unscrolled state to match server
        // After mounting, use actual scroll state
        mounted
          ? displayScrolled
            ? "py-4 bg-black/80 backdrop-blur-md"
            : "py-6"
          : "py-6"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 ${
          // Same logic for the space-glass effect
          mounted ? (displayScrolled ? "space-glass rounded-2xl" : "") : ""
        }`}
      >
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <Rocket className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
              <div className="absolute inset-0 bg-purple-500 blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
            </div>
            <span className="text-xl cosmic-text">{"<Daniel/>"}</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-slate-300 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contact")}
              className="cosmic-button"
            >
              Let&apos;s Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 space-glass rounded-2xl overflow-hidden">
          <div className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left px-4 py-3 text-slate-300 hover:text-white hover:bg-purple-500/10 rounded-lg transition-all"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="cosmic-button mt-4"
            >
              Let&apos;s Talk
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
