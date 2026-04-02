"use client";

import { Rocket, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#0a0e27] flex items-center justify-center px-6 overflow-hidden">
      {/* Orbital rings */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="orbital-ring"
          style={{ width: "500px", height: "500px", top: "10%", left: "5%" }}
        />
        <div
          className="orbital-ring"
          style={{ width: "350px", height: "350px", bottom: "10%", right: "5%" }}
        />
      </div>

      <div className="relative z-10 text-center space-y-8 max-w-xl mx-auto">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <Rocket className="w-20 h-20 text-purple-400 animate-bounce" />
            <div className="absolute inset-0 bg-purple-500 blur-2xl opacity-30" />
          </div>
        </div>

        {/* 404 */}
        <h1 className="text-8xl md:text-9xl cosmic-text text-glow">404</h1>

        {/* Message */}
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl text-white">
            Lost in Space
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            This page drifted into a black hole. Let&apos;s navigate you back to
            safety.
          </p>
        </div>

        {/* Back home button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl cosmic-button text-white font-medium transition-all group"
        >
          <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
