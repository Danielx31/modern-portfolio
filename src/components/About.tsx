import { Code, Palette, Rocket, Users, Zap, Globe } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code that stands the test of time.",
      gradient: "from-purple-500 to-blue-500",
    },
    {
      icon: Palette,
      title: "Creative Design",
      description:
        "Crafting beautiful interfaces that users love to interact with.",
      gradient: "from-pink-500 to-purple-500",
    },
    {
      icon: Rocket,
      title: "Performance",
      description:
        "Lightning-fast applications optimized for the best user experience.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "User Focused",
      description:
        "Building solutions that put user experience at the forefront.",
      gradient: "from-cyan-500 to-teal-500",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Leveraging cutting-edge technologies to solve complex problems.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Creating applications that scale across borders and cultures.",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="about" className="relative py-32 px-6">
      {/* Section Divider */}
      <div className="space-divider mb-20" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl cosmic-text text-glow mb-4">
              About Me
            </h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full" />
          </div>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto mt-6 leading-relaxed">
            A passionate developer with 2+ years of experience crafting stellar
            web applications. I transform complex problems into elegant, simple
            solutions that make a difference.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative space-glass-hover rounded-2xl p-8 parallax-layer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow Border Effect */}
                <div className="glow-border absolute inset-0 rounded-2xl" />

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl text-white mb-3 group-hover:text-glow transition-all">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Corner */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-purple-500/30 rounded-tr-xl" />
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            { value: "10+", label: "Projects Completed" },
            { value: "2+", label: "Years Experience" },
            { value: "20+", label: "Happy Clients" },
            { value: "100%", label: "Dedication" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center space-glass rounded-xl p-6 hover-scale"
            >
              <div className="text-4xl md:text-5xl cosmic-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
