import { ExternalLink, Github, Star } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./image/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured online shopping platform with real-time inventory, secure payment processing, and advanced analytics dashboard.",
      image:
        "https://images.unsplash.com/photo-1727407209320-1fa6ae60ee05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NTk4OTE4MzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
      featured: true,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, team chat, progress tracking, and intelligent automation.",
      image:
        "https://images.unsplash.com/photo-1546900703-cf06143d1239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzU5ODQ1MDMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "WebSocket"],
      github: "#",
      live: "#",
      featured: true,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "AI Fitness Tracker",
      description:
        "Cross-platform mobile app for tracking workouts, nutrition, and health metrics with AI-powered personalized insights.",
      image:
        "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzU5ODU1MzIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React Native", "Firebase", "TensorFlow", "REST API"],
      github: "#",
      live: "#",
      featured: false,
      gradient: "from-pink-500 to-orange-500",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics platform for managing multiple social media accounts with scheduling, insights, and engagement tracking.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYwMDE1NTI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Vue.js", "Python", "GraphQL", "Redis"],
      github: "#",
      live: "#",
      featured: false,
      gradient: "from-cyan-500 to-green-500",
    },
    {
      title: "Real Estate Platform",
      description:
        "Modern property listing platform with virtual tours, mortgage calculators, and AI-powered property recommendations.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwaG91c2V8ZW58MXx8fHwxNzYwMDE1NTI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React", "Django", "PostgreSQL", "AWS"],
      github: "#",
      live: "#",
      featured: false,
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "EdTech Learning Hub",
      description:
        "Interactive online learning platform with live classes, quizzes, progress tracking, and gamification features.",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NjAwMTU1MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Angular", "Node.js", "MySQL", "WebRTC"],
      github: "#",
      live: "#",
      featured: false,
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section id="projects" className="relative py-32 px-6">
      {/* Section Divider */}
      <div className="space-divider mb-20" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl stellar-text text-glow mb-4">
              Featured Projects
            </h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-full" />
          </div>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto mt-6 leading-relaxed">
            Explore my stellar portfolio of projects that showcase innovation,
            creativity, and technical excellence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative space-glass-hover rounded-2xl overflow-hidden"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1 rounded-full space-glass">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-xs text-yellow-300">Featured</span>
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                />

                {/* Quick Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Button
                    size="sm"
                    variant="outline"
                    className="space-glass-hover border-white/50 text-white hover:text-white backdrop-blur-md"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="cosmic-button" asChild>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl text-white group-hover:text-glow transition-all">
                  {project.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="cosmic-badge px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-purple-500/30 rounded-br-xl" />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            variant="outline"
            className="space-glass-hover border-purple-500/50 text-purple-200 hover:text-white group"
          >
            View All Projects
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
