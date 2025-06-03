
import { useEffect, useRef, useState } from "react";

const IntroStory = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-b from-kamalo-dark to-black">
      <div className="container mx-auto max-w-4xl text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Welcome to the Heart of <span className="text-kamalo-red">African Culture</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Nestled in the vibrant community of Goodwood, Cape Town, Kamalo City is more than just a restaurant—it's a 
            cultural experience that brings together the rich traditions of African cuisine, hospitality, and community. 
            Our story began with a simple vision: to create a space where authentic flavors meet modern comfort, 
            where every guest becomes part of our extended family, and where the spirit of Ubuntu lives in every dish we serve.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroStory;
