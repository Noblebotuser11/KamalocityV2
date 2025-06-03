
import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
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

  const faqs = [
    {
      question: "What are your opening hours?",
      answer: "We're open 7 days a week from 11:00 AM to 11:00 PM. Whether you're looking for lunch, dinner, or late-night entertainment, we're here to serve you."
    },
    {
      question: "Do you take reservations?",
      answer: "Yes! We highly recommend making reservations, especially for weekends and special events. You can book online through our reservations page or call us at +27 73 159 8909."
    },
    {
      question: "What services do you offer besides dining?",
      answer: "Kamalo City offers a complete experience including premium hookah service, a professional barbershop next door, exotic perfumes, live entertainment, and private event hosting. We're more than just a restaurant!"
    },
    {
      question: "Do you accommodate dietary restrictions?",
      answer: "Absolutely! We offer vegetarian options and can accommodate various dietary needs. Please inform us about any allergies or special requirements when making your reservation or placing your order."
    },
    {
      question: "Is there parking available?",
      answer: "Yes, we have convenient parking available for our guests. We're located at 90 Voortrekker Road in Goodwood, Cape Town, with easy access and parking options."
    },
    {
      question: "Do you host private events?",
      answer: "Yes! We offer private event hosting for special occasions, celebrations, and corporate events. Contact us to discuss your event needs and we'll create a memorable experience for you and your guests."
    },
    {
      question: "What makes Kamalo City unique?",
      answer: "Kamalo City combines authentic African cuisine with modern comfort, offering a complete cultural experience. We blend traditional flavors with contemporary service, plus entertainment and additional services all under one roof."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-b from-black to-kamalo-dark">
      <div className="container mx-auto max-w-4xl">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="text-kamalo-red">Questions</span>
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to know about your Kamalo City experience
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-black/50 rounded-lg border border-gray-800 px-6 data-[state=open]:border-kamalo-red transition-colors"
              >
                <AccordionTrigger className="text-white hover:text-kamalo-red transition-colors text-left py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
