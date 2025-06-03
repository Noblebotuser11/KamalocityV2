
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Phone } from "lucide-react";

const BookingCTA = () => {
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
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="bg-gradient-to-r from-kamalo-red/20 to-red-900/20 rounded-2xl p-12 border border-kamalo-red/30">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready for an <span className="text-kamalo-red">Unforgettable</span> Experience?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Whether it's an intimate dinner, a celebration with friends, or a private event, 
              Kamalo City is ready to make your occasion special.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild className="bg-kamalo-red hover:bg-red-600 text-white px-10 py-6 text-lg rounded-full">
                <Link to="/reservations" className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Make a Reservation
                </Link>
              </Button>
              
              <div className="flex items-center gap-2 text-white">
                <span className="text-gray-400">or call us:</span>
                <a href="tel:+27731598909" className="flex items-center gap-2 text-kamalo-red hover:text-red-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  +27 73 159 8909
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;
