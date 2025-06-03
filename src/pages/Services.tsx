
import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils, Music, Users, Scissors, Wind, Award, Clock, Calendar } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Food Service",
      description: "Experience authentic African cuisine prepared with traditional recipes and fresh ingredients. Our main offering brings you the true taste of Africa.",
      icon: Utensils,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Pre-Orders",
      description: "Order your favorite dishes in advance and have them ready for pickup. Delivery service coming soon to bring Kamalo City flavors directly to your door.",
      icon: Clock,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Live Entertainment",
      description: "Enjoy exciting concerts, DJ performances, cultural nights, and special events. Experience the vibrant culture and energy of Kamalo City.",
      icon: Music,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Private Bookings",
      description: "Book our entire venue for your special occasions. Perfect for parties, birthdays, corporate events, and private celebrations.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Barber Shop",
      description: "Professional haircuts and grooming services located right next to the restaurant. Enjoy a fresh cut while you wait for your meal.",
      icon: Scissors,
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Perfumes for Sale",
      description: "Discover our collection of unique and exotic perfumes available for purchase. Find your signature scent at Kamalo City.",
      icon: Wind,
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop"
    },
    {
      id: 7,
      title: "Hookah Pipes",
      description: "Relax and unwind with our premium hookah and shisha selection. Perfect for socializing and enjoying a peaceful evening.",
      icon: Wind,
      image: "/lovable-uploads/e8bac841-0a55-4ef6-be6d-f24cbc468ab1.png"
    },
    {
      id: 8,
      title: "Tournaments – Coming Soon",
      description: "Get ready for exciting gaming tournaments and event-style competitions. Stay tuned for more details on upcoming tournaments.",
      icon: Award,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
      comingSoon: true
    }
  ];

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
      answer: "Kamalo City offers a complete experience including premium hookah service, a professional barbershop next door, exotic perfumes, live entertainment, and private event hosting."
    },
    {
      question: "Do you accommodate dietary restrictions?",
      answer: "Absolutely! We offer vegetarian options and can accommodate various dietary needs. Please inform us about any allergies or special requirements when making your reservation."
    },
    {
      question: "Is there parking available?",
      answer: "Yes, we have convenient parking available for our guests. We're located at 90 Voortrekker Road in Goodwood, Cape Town, with easy access and parking options."
    },
    {
      question: "Do you host private events?",
      answer: "Yes! We offer private event hosting for special occasions, celebrations, and corporate events. Contact us to discuss your event needs."
    },
    {
      question: "What makes your hookah service special?",
      answer: "We offer premium quality hookah with a variety of flavors in a comfortable and social environment. Our staff ensures a perfect hookah experience every time."
    },
    {
      question: "How does the barbershop service work?",
      answer: "Our professional barbershop is located right next to the restaurant. You can enjoy a meal and get a fresh haircut all in one visit. Walk-ins welcome or book ahead."
    },
    {
      question: "What types of perfumes do you sell?",
      answer: "We carry a curated selection of exotic and unique fragrances from various brands. Our staff can help you find the perfect scent for any occasion."
    },
    {
      question: "Can I pre-order food for pickup?",
      answer: "Yes! You can call us at +27 73 159 8909 to pre-order your favorite dishes. We'll have them ready for pickup at your specified time."
    },
    {
      question: "What entertainment do you offer?",
      answer: "We regularly host live music performances, DJ nights, cultural events, and special celebrations. Follow our social media for upcoming events and entertainment schedule."
    },
    {
      question: "Do you offer catering services?",
      answer: "We're exploring catering options for the future. Currently, we focus on our restaurant experience and private event hosting at our venue."
    }
  ];

  return (
    <div className="min-h-screen bg-kamalo-dark text-white pt-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-kamalo-red">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover everything Kamalo City has to offer. From authentic African cuisine to entertainment, grooming, and unique shopping experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id} 
                className={`bg-black/50 border-gray-800 hover:border-kamalo-red transition-all duration-700 ${
                  service.featured ? 'lg:col-span-2' : ''
                } ${service.comingSoon ? 'opacity-80' : ''}`}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {service.comingSoon && (
                    <div className="absolute top-4 right-4 bg-kamalo-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Coming Soon
                    </div>
                  )}
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <IconComponent className="w-6 h-6 text-kamalo-red" />
                    <CardTitle className="text-white text-xl">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem 
                value="faqs" 
                className="bg-black/50 rounded-lg border border-gray-800 data-[state=open]:border-kamalo-red transition-colors"
              >
                <AccordionTrigger className="text-white hover:text-kamalo-red transition-colors text-left py-6 px-6 text-xl font-bold">
                  Frequently Asked Questions
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-700 last:border-b-0 pb-4 last:pb-0">
                        <h4 className="text-white font-semibold mb-2">{faq.question}</h4>
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-black/50 rounded-lg p-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Experience <span className="text-kamalo-red">Kamalo City</span>?
            </h2>
            <p className="text-gray-300 mb-6">
              Visit us at 90 Voortrekker Road, Goodwood, Cape Town. Open 7 days a week from 11:00 AM to 11:00 PM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+27731598909"
                className="bg-kamalo-red text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                Call Us: +27 73 159 8909
              </a>
              <a
                href="/reservations"
                className="border border-kamalo-red text-kamalo-red px-6 py-3 rounded-lg hover:bg-kamalo-red hover:text-white transition-colors font-semibold"
              >
                Make Reservation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
