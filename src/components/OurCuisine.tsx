
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const OurCuisine = () => {
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
    <section ref={sectionRef} className="py-20 px-6 bg-kamalo-dark">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Authentic <span className="text-kamalo-red">African Flavors</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Our kitchen is the soul of Kamalo City, where traditional African recipes are crafted with passion and 
              modern culinary techniques. From our signature beef stew slow-cooked in rich tomato and brinjal sauce 
              to our variety of perfectly seasoned sides, every dish tells a story of heritage and flavor.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Whether you're craving comfort food or exploring new tastes, our menu celebrates the diverse culinary 
              traditions of Africa, prepared fresh daily with locally sourced ingredients.
            </p>
            <Button asChild className="bg-kamalo-red hover:bg-red-600 text-white px-8 py-6 text-lg rounded-full">
              <Link to="/menu">Explore Our Menu</Link>
            </Button>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Placeholder for cuisine image */}
            <div className="bg-gray-700 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-400 text-xl">[ Cuisine Image Placeholder ]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCuisine;
