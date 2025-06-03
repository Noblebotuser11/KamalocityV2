
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const GalleryCTA = () => {
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

  const galleryItems = [
    {
      title: "Restaurant Ambiance",
      link: "/gallery/restaurant-ambiance",
      placeholder: "Interior & Atmosphere"
    },
    {
      title: "Food & Drinks",
      link: "/gallery/food-and-drinks",
      placeholder: "Culinary Creations"
    },
    {
      title: "Events & Entertainment",
      link: "/gallery/events-and-entertainment",
      placeholder: "Live Performances"
    },
    {
      title: "Services Gallery",
      link: "/gallery/services",
      placeholder: "Barbershop & More"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-b from-kamalo-dark to-black">
      <div className="container mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Explore Our <span className="text-kamalo-red">Gallery</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get a glimpse of the Kamalo City experience through our visual stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-700 h-64 hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-gray-400 text-center">[ {item.placeholder} Placeholder ]</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryCTA;
