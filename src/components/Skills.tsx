export function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 92 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Vue.js", level: 85 },
        { name: "HTML5/CSS3", level: 98 },
      ],
    },
    {
      category: "Backend Development",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 88 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 87 },
        { name: "MongoDB", level: 90 },
        { name: "GraphQL", level: 82 },
      ],
    },
    {
      category: "Tools & Technologies",
      color: "from-cyan-500 to-teal-500",
      skills: [
        { name: "Git", level: 95 },
        { name: "Docker", level: 85 },
        { name: "AWS", level: 80 },
        { name: "Figma", level: 90 },
        { name: "Jest", level: 85 },
        { name: "CI/CD", level: 82 },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-32 px-6">
      {/* Section Divider */}
      <div className="space-divider mb-20" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
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

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="space-glass-hover rounded-2xl p-8 space-y-6"
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
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
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

        {/* Additional Skills Tags */}
        <div className="mt-16">
          <h3 className="text-2xl text-center text-slate-200 mb-8">
            Other Technologies & Frameworks
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "REST API",
              "WebSocket",
              "Redux",
              "Zustand",
              "React Native",
              "Webpack",
              "Vite",
              "Sass",
              "styled-components",
              "Framer Motion",
              "Three.js",
              "D3.js",
              "Socket.io",
              "Redis",
              "Nginx",
              "Linux",
              "Agile",
              "Scrum",
              "TDD",
              "Responsive Design",
            ].map((tech, index) => (
              <span
                key={index}
                className="cosmic-badge px-4 py-2 rounded-full text-sm hover-scale cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications/Achievements */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "AWS Certified",
              description: "Solutions Architect Associate",
              icon: "🏆",
            },
            {
              title: "Open Source",
              description: "Contributor to 20+ projects",
              icon: "⭐",
            },
            {
              title: "Tech Speaker",
              description: "Conference & Meetup Speaker",
              icon: "🎤",
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
