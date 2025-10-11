import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ✨ Animate header
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

      // 🧭 Animate skill category cards
      const categoryCards =
        categoriesRef.current?.querySelectorAll(".skill-category");
      if (categoryCards && categoryCards.length > 0) {
        gsap.fromTo(
          categoryCards,
          { opacity: 0, x: -50 },
          {
            scrollTrigger: {
              trigger: categoriesRef.current,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
          }
        );
      }

      // 📊 Animate progress bars
      categoryCards?.forEach((card) => {
        const progressBars = card.querySelectorAll(".skill-progress-bar");
        progressBars.forEach((bar) => {
          const width = bar.getAttribute("data-width") || "0%";
          gsap.fromTo(
            bar,
            { width: "0%" },
            {
              scrollTrigger: {
                trigger: card,
                start: "top 75%",
                toggleActions: "play none none none",
              },
              width: width,
              duration: 1.5,
              ease: "power2.out",
            }
          );
        });
      });

      // 🪄 Animate tech tags
      const tags = tagsRef.current?.querySelectorAll(".tech-tag");
      if (tags && tags.length > 0) {
        gsap.fromTo(
          tags,
          { opacity: 0, scale: 0.8, y: 20 },
          {
            scrollTrigger: {
              trigger: tagsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: "back.out(1.7)",
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skillCategories = [
    {
      category: "Frontend Development",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Vue.js", level: 85 },
        { name: "React", level: 80 },
        { name: "Next.js", level: 75 },
        { name: "TypeScript", level: 75 },
        { name: "Tailwind CSS", level: 80 },
        { name: "HTML5/CSS3", level: 98 },
      ],
    },
    {
      category: "Backend Development",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Laravel", level: 95 },
        { name: "Eloquent ORM", level: 90 },
        { name: "Node.js", level: 65 },
        { name: "MySQL", level: 95 },
        { name: "Microsoft SQL", level: 95 },
        { name: "Axios", level: 80 },
      ],
    },
    {
      category: "Tools & Technologies",
      color: "from-cyan-500 to-teal-500",
      skills: [
        { name: "Git", level: 95 },
        { name: "IIS", level: 90 },
        { name: "Azure", level: 90 },
        { name: "Figma", level: 85 },
        { name: "CI/CD", level: 70 },
        { name: "Jobs", level: 80 },
      ],
    },
  ];

  return (
    <section ref={sectionRef} id="skills" className="relative py-32 px-6">
      {/* Section Divider */}
      <div className="space-divider mb-20" />

      <div className="max-w-7xl mx-auto">
        {/* 🏁 Section Header */}
        <div ref={headerRef} className="text-center mb-20 space-y-4">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl galaxy-text text-glow mb-4">
              Skills & Expertise
            </h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-pink-500 via-yellow-500 to-orange-500 rounded-full" />
          </div>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto mt-6 leading-relaxed">
            A comprehensive arsenal of modern technologies and tools I use to
            build exceptional digital experiences.
          </p>
        </div>

        {/* 💻 Skills Grid */}
        <div
          ref={categoriesRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="skill-category space-glass-hover rounded-2xl p-8 space-y-6"
            >
              {/* Category Header */}
              <div className="text-center pb-4 border-b border-purple-500/30">
                <div
                  className={`inline-block px-6 py-2 rounded-full bg-gradient-to-r ${category.color} mb-4`}
                >
                  <h3 className="text-xl text-white">{category.category}</h3>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-200">{skill.name}</span>
                      <span className="text-sm text-purple-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`skill-progress-bar absolute top-0 left-0 h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        data-width={`${skill.level}%`}
                        style={{
                          width: `${skill.level}%`,
                          animation: "shimmer 3s infinite",
                        }}
                      />
                      {/* Glow Effect */}
                      <div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.color} rounded-full blur-sm opacity-50`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative Element */}
              <div className="pt-4 flex justify-center">
                <div
                  className={`w-16 h-1 bg-gradient-to-r ${category.color} rounded-full`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* 🪄 Additional Skills Tags */}
        <div ref={tagsRef} className="mt-16">
          <h3 className="text-2xl text-center text-slate-200 mb-8">
            Other Technologies & Frameworks
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "REST API",
              "WebSocket",
              "Microsoft third-party APIs",
              "Vue 3",
              "React Native",
              "Webpack",
              "Vite",
              "Sass",
              "styled-components",
              "Framer Motion",
              "Laravel Reverb",
              "Microservices",
              "SMTP",
              "Gsap",
              "React Bits",
              "Argon",
              "Agile",
              "Scrum",
              "CSS",
              "Queues",
              "GitLab",
              "GitHub",
              "Postman",
              "IIS",
              "Laravel Storage",
              "Eloquent Relationships",
              "Database Design",
              "Unit Testing",
              "Integration Testing",
              "Deployment",
              "Performance Optimization",
              "Security Best Practices",
              "Responsive Design",
            ].map((tech, index) => (
              <span
                key={index}
                className="tech-tag cosmic-badge px-4 py-2 rounded-full text-sm hover-scale cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 🏆 Certifications/Achievements */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Scrum Foundation Certified",
              description: "Certified in Agile Scrum Fundamentals",
              icon: "📜",
            },
            {
              title: "AI-Powered Development",
              description: "Exploring AI integration in modern web systems",
              icon: "🤖",
            },
            {
              title: "Continuous Learning",
              description:
                "Actively improving skills in full-stack development",
              icon: "📘",
            },
          ].map((achievement, index) => (
            <div
              key={index}
              className="text-center space-glass rounded-xl p-6 hover-scale"
            >
              <div className="text-4xl mb-3">{achievement.icon}</div>
              <h4 className="text-lg text-white mb-2">{achievement.title}</h4>
              <p className="text-sm text-slate-400">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
