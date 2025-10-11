import { Code, Palette, Rocket, Users, Zap, Globe } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header
      if (headerRef.current) {
        gsap.fromTo(headerRef.current,
          {
            opacity: 0,
            y: 50
          },
          {
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            },
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out'
          }
        );
      }

      // Animate feature cards with stagger
      const cards = cardsRef.current?.querySelectorAll('.feature-card');
      
      if (cards && cards.length > 0) {
        gsap.fromTo(cards,
          {
            opacity: 0,
            y: 60,
            rotationX: -15,
            scale: 0.95
          },
          {
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            },
            opacity: 1,
            y: 0,
            rotationX: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out'
          }
        );
      }

      // Animate stats
      const statItems = statsRef.current?.querySelectorAll('.stat-item');
      
      if (statItems && statItems.length > 0) {
        gsap.fromTo(statItems,
          {
            opacity: 0,
            scale: 0.8,
            y: 30
          },
          {
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            },
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.7)'
          }
        );
      }

      // Counter animation for stats
      statItems?.forEach((stat) => {
        const numberElement = stat.querySelector('.stat-number');
        if (numberElement) {
          const finalNumber = numberElement.textContent || '0';
          const numericValue = parseInt(finalNumber);
          
          if (!isNaN(numericValue)) {
            gsap.fromTo(numberElement,
              {
                textContent: 0
              },
              {
                scrollTrigger: {
                  trigger: stat,
                  start: 'top 85%',
                  toggleActions: 'play none none none'
                },
                textContent: numericValue,
                duration: 2,
                ease: 'power2.out',
                snap: { textContent: 1 },
                onUpdate: function() {
                  if (this.targets()[0]) {
                    const current = Math.ceil(Number(this.targets()[0].textContent));
                    this.targets()[0].textContent = current + (finalNumber.includes('+') ? '+' : finalNumber.includes('%') ? '%' : '');
                  }
                }
              }
            );
          }
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that stands the test of time.',
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Crafting beautiful interfaces that users love to interact with.',
      gradient: 'from-pink-500 to-purple-500'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Lightning-fast applications optimized for the best user experience.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'User Focused',
      description: 'Building solutions that put user experience at the forefront.',
      gradient: 'from-cyan-500 to-teal-500'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Leveraging cutting-edge technologies to solve complex problems.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Creating applications that scale across borders and cultures.',
      gradient: 'from-green-500 to-emerald-500'
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="relative py-32 px-6">
      {/* Section Divider */}
      <div className="space-divider mb-20" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-20 space-y-4">
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
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="feature-card group relative space-glass-hover rounded-2xl p-8 parallax-layer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow Border Effect */}
                <div className="glow-border absolute inset-0 rounded-2xl" />
                
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg`}>
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
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            { value: '10+', label: 'Projects Completed' },
            { value: '2+', label: 'Years Experience' },
            { value: '20+', label: 'Happy Clients' },
            { value: '100%', label: 'Dedication' },
          ].map((stat, index) => (
            <div
              key={index}
              className="stat-item text-center space-glass rounded-xl p-6 hover-scale"
            >
              <div className="stat-number text-4xl md:text-5xl cosmic-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
