
import { Scissors, Clock, Users, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BarberNextDoor = () => {
  const faqs = [
    {
      question: "Do I need an appointment for a haircut?",
      answer: "Walk-ins are welcome — first come, first served."
    },
    {
      question: "What styles do they offer?",
      answer: "Fades, lineups, beard trims, designs, and classic cuts."
    },
    {
      question: "Are the barbers experienced?",
      answer: "Yes — skilled local professionals who know trending styles."
    },
    {
      question: "What are the barber's hours?",
      answer: "Similar to Kamalo City hours, but check in-store for exact times."
    },
    {
      question: "How much do haircuts cost?",
      answer: "Prices start from R80 and vary by style."
    },
    {
      question: "Can I cut my hair and eat after?",
      answer: "Yes — you're steps away from food and music."
    },
    {
      question: "Do they accept card payments?",
      answer: "Yes, cash and card both accepted."
    },
    {
      question: "Is it only men's haircuts?",
      answer: "Primarily men and boys, but ladies' trims also available."
    }
  ];

  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      
      <div className="pt-24 px-6">
        <div className="container mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-kamalo-red">Barber</span> Next Door
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get a fresh fade or sharp lineup before your night out — right next door to Kamalo City. Our partnered barber offers fast, stylish cuts for men and kids. No appointment needed.
            </p>
          </div>

          {/* Service Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="/lovable-uploads/9360b9e9-30e1-4319-8db0-968661e99207.png"
                alt="Barber Shop"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-kamalo-red">Quick Haircuts Before the Vibe</h2>
              <p className="text-gray-300 mb-4">
                Come for the trim, stay for the food, music, and hookah. It's the ultimate one-stop vibe. Our skilled local professionals know all the trending styles and offer everything from fades to classic cuts.
              </p>
              <p className="text-gray-300 mb-6">
                Walk-ins are welcome on a first-come, first-served basis. Prices start from R80, and you're just steps away from enjoying the full Kamalo City experience afterward.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Scissors className="w-6 h-6 text-kamalo-red" />
                  <span>Expert Cuts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-kamalo-red" />
                  <span>Walk-Ins Welcome</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-kamalo-red" />
                  <span>Men & Kids</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-kamalo-red" />
                  <span>From R80</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services Offered */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Services Offered</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Scissors className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Fades & Lineups</h3>
                <p className="text-gray-300">Fresh fades and sharp lineups for the modern look</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Users className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Beard Trims</h3>
                <p className="text-gray-300">Professional beard grooming and styling</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Award className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Hair Designs</h3>
                <p className="text-gray-300">Creative designs and artistic hair patterns</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Clock className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Classic Cuts</h3>
                <p className="text-gray-300">Traditional styles and timeless looks</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Scissors className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Kids' Cuts</h3>
                <p className="text-gray-300">Special attention for younger clients</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Users className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Ladies' Trims</h3>
                <p className="text-gray-300">Basic trimming services for women</p>
              </div>
            </div>
          </div>

          {/* Pricing Guide */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Service Pricing</h2>
            <div className="bg-black/50 rounded-lg p-8 max-w-2xl mx-auto">
              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-white">Basic Cut</span>
                  <span className="text-kamalo-red font-bold">From R80</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-white">Fade & Lineup</span>
                  <span className="text-kamalo-red font-bold">Varies by style</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-white">Beard Trim</span>
                  <span className="text-kamalo-red font-bold">Additional service</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-white">Hair Design</span>
                  <span className="text-kamalo-red font-bold">Custom pricing</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white">Payment Methods</span>
                  <span className="text-kamalo-red font-bold">Cash & Card</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-6 text-center">
                *Prices may vary based on style complexity
              </p>
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-black/50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-kamalo-red mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-black/50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready for a <span className="text-kamalo-red">Fresh Cut</span>?
            </h2>
            <p className="text-gray-300 mb-6">
              Walk in for a fresh cut, then stay for the food, music, and vibes. The ultimate one-stop experience!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+27731598909"
                className="bg-kamalo-red text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                Call for Hours: +27 73 159 8909
              </a>
              <a
                href="/menu"
                className="border border-kamalo-red text-kamalo-red px-6 py-3 rounded-lg hover:bg-kamalo-red hover:text-white transition-colors font-semibold"
              >
                Check Out Our Food
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BarberNextDoor;
