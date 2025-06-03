
import { useEffect, useRef, useState } from "react";

const AmbiancePreview = () => {
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

  return (
    <section ref={sectionRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Placeholder for full-width image/video */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-600">
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-gray-400 text-xl">[ Full-Width Ambiance Image/Video Placeholder ]</p>
        </div>
      </div>
      
      {/* Text overlay */}
      <div className="relative z-10 text-center text-white px-6">
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Experience the <span className="text-kamalo-red">Atmosphere</span>
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Where modern design meets African heritage, creating an ambiance that welcomes you home
          </p>
        </div>
      </div>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
    </section>
  );
};

export default AmbiancePreview;
