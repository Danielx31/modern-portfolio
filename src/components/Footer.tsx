import { Heart, Rocket } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-6 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Rocket className="w-6 h-6 text-purple-400" />
              <span className="text-xl cosmic-text">{" <Daniel/> "}</span>
            </div>
            <p className="text-slate-400 text-sm">
              Crafting stellar digital experiences that launch ideas into
              reality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About", "Projects", "Skills", "Contact"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-slate-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white mb-4">Connect</h4>
            <div className="space-y-2">
              {[
                { name: "GitHub", href: "https://github.com/Danielx31" },
                {
                  name: "LinkedIn",
                  href: "https://www.linkedin.com/in/daniel-balverde-891955260/",
                },
                { name: "Twitter", href: "https://twitter.com" },
                { name: "Email", href: "mailto:danielbalverde.work@gmail.com" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-slate-400 hover:text-purple-400 transition-colors text-sm"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <span>© {currentYear} Daniel Balverde. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" />
            <span>and cosmic energy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
