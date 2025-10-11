import { ExternalLink, Github, Star } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./image/ImageWithFallback";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
  featured: boolean;
  showGithub: boolean;
  showLive: boolean;
  gradient: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      title: "Ticketing System",
      description:
        "The system allows employees to submit IT-related issues or service requests, which are automatically logged and assigned unique ticket numbers. Engineers and admins can manage, prioritize, and resolve tickets through a clean dashboard interface with real-time updates and role-based access control.",
      image:
        "https://plus.unsplash.com/premium_photo-1718674394245-9f270c5fd2b3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1081",
      tags: [
        "Laravel",
        "PHP",
        "JavaScript",
        "SSMS",
        "Axios",
        "Bootstrap",
        "MaatwebsiteExcel",
        "Office365SMTP",
        "IIS",
        "EloquentORM",
      ],
      github: "#",
      live: "#",
      featured: true,
      showGithub: false,
      showLive: false,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Quality Control and Assurance System (QCA System)",
      description:
        "A Quality Control and Assurance platform that streamlines case tracking and engineer assignment across departments. Built with Laravel and Vue.js, it allows users to create, monitor, and update cases with real-time status, detailed logs, and role-based access. The system ensures transparency, efficiency, and accountability in handling service or production quality processes.",
      image:
        "https://images.unsplash.com/photo-1747999827332-163aa33cd597?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      tags: [
        "Laravel",
        "VueJS",
        "SCSS",
        "WebSocket",
        "SSMS",
        "Axios",
        "Bootstrap",
        "IIS",
        "EloquentORM",
        "RealTimeTracking",
      ],
      github: "#",
      live: "#",
      featured: true,
      showGithub: false,
      showLive: false,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Cafe Shop - POS and Inventory Management System",
      description:
        "A customized Point of Sale and Inventory Management platform designed for beverage businesses. It streamlines daily operations by integrating real-time sales, product customization, and stock tracking. The system allows staff to manage product categories like Milktea, Coffee, Praf, and Fruit Tea, select add-ons, and handle multiple orders efficiently. With automated inventory deduction and dynamic cart functionality, Cafe Shop ensures accurate, fast, and organized transactions.",
      image:
        "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      tags: [
        "Laravel",
        "PHP 8.1",
        "MySQL",
        "JavaScript",
        "Axios",
        "Tailwind CSS",
        "Argon Dashboard",
        "Blade Template",
        "POS System",
        "Inventory Management",
        "Product Management",
        "Order Tracking",
      ],
      github: "https://github.com/Danielx31/big-brew-shop",
      live: "#",
      featured: false,
      showGithub: true,
      showLive: false,
      gradient: "from-pink-500 to-orange-500",
    },
    {
      title: "Empowered Enterprise Suite (EES) – Inventory System",
      description:
        "The Inventory System module of the Empowered Enterprise Suite (EES) is a cloud-based solution designed to efficiently manage and monitor business inventory operations. It provides real-time tracking of stock levels, product movements, and inventory status to ensure accuracy and control. The system streamlines processes such as stock-in, stock-out, and product monitoring, helping businesses maintain optimal inventory levels, reduce waste, and enhance operational efficiency within the EES ecosystem.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYwMDE1NTI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Vue.js", "Laravel", "REST API", "Eloquent ORM", "Bootstrap"],
      github: "#",
      live: "#",
      featured: false,
      showGithub: false,
      showLive: false,
      gradient: "from-cyan-500 to-green-500",
    },
    {
      title: "eHataw - Mobile Fitness App",
      description:
        "eHataw is a mobile fitness application designed to promote health and wellness through personalized Zumba workouts. The app tailors exercise routines based on the user’s Body Mass Index (BMI) and health condition inputs, ensuring each session fits their fitness level and needs. In addition to curated Zumba exercises, eHataw also provides smart food suggestions with real-time calorie calculations to help users balance their diet and achieve their fitness goals effectively.",
      image:
        "https://images.unsplash.com/photo-1627483298606-cf54c61779a9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      tags: [
        "Java",
        "Android Studio",
        "Firebase",
        "Mobile Development",
        "Fitness App",
      ],
      github: "https://github.com/Danielx31/eHataw",
      live: "#",
      featured: false,
      showGithub: true,
      showLive: false,
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Event Microsite",
      description:
        "A dynamic microsite built for managing and showcasing website events. The system allows users to register for upcoming events, browse detailed agendas, and view event highlights in a user-friendly interface. Designed for seamless content updates and an engaging attendee experience.",
      image:
        "https://images.unsplash.com/photo-1558008258-3256797b43f3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1331",
      tags: [
        "Laravel",
        "PHP",
        "Microsoft SQL",
        "JavaScript",
        "Bootstrap",
        "CSS",
        "HTML",
      ],
      github: "#",
      live: "#",
      featured: false,
      showGithub: false,
      showLive: false,
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
                  {project.showGithub && (
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
                  )}
                  {project.showLive && (
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
                  )}
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
