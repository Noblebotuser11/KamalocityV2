
import { useEffect, useRef, useState } from "react";
import { Music, Scissors, Wind, Users, Calendar, Utensils } from "lucide-react";

const LiveEventsServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Music,
      title: "Live Entertainment",
      description: "Concerts, DJ performances, and cultural nights"
    },
    {
      icon: Wind,
      title: "Premium Hookah",
      description: "Relax with our selection of quality shisha"
    },
    {
      icon: Scissors,
      title: "Barbershop",
      description: "Professional grooming services next door"
    },
    {
      icon: Wind,
      title: "Exotic Perfumes",
      description: "Unique fragrances available for purchase"
    },
    {
      icon: Users,
      title: "Private Events",
      description: "Book the venue for your special occasions"
    },
    {
      icon: Calendar,
      title: "Game Tournaments",
      description: "Exciting competitions coming soon"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-b from-black to-kamalo-dark">
      <div className="container mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            More Than Just <span className="text-kamalo-red">Dining</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our complete entertainment and service experience that makes Kamalo City a destination, not just a meal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`bg-black/50 rounded-lg p-6 border border-gray-800 hover:border-kamalo-red transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <IconComponent className="w-12 h-12 text-kamalo-red mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LiveEventsServices;
