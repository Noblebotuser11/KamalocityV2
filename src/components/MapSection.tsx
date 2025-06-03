
import { useEffect, useRef, useState } from "react";
import { MapPin, Clock, Phone } from "lucide-react";

const MapSection = () => {
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
    <section ref={sectionRef} className="py-20 px-6 bg-black">
      <div className="container mx-auto">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Visit <span className="text-kamalo-red">Kamalo City</span>
          </h2>
          <p className="text-xl text-gray-300">
            Find us in the heart of Goodwood, Cape Town
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-kamalo-red mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Address</h3>
                  <p className="text-gray-300">90 Voortrekker Road, Goodwood, Cape Town</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-kamalo-red mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Opening Hours</h3>
                  <p className="text-gray-300">7 days a week</p>
                  <p className="text-gray-300">11:00 AM - 11:00 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-kamalo-red mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Contact</h3>
                  <a href="tel:+27731598909" className="text-gray-300 hover:text-kamalo-red transition-colors">
                    +27 73 159 8909
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.1055656329913!2d18.546104776047663!3d-33.912682521333636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5b0726596af5%3A0x651107464f9fc317!2sKamalo%20City!5e0!3m2!1sen!2sza!4v1748888283939!5m2!1sen!2sza" 
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Kamalo City Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
