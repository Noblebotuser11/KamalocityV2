
import { Wind, Clock, Users, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HookahLounge = () => {
  const faqs = [
    {
      question: "Where can I smoke hookah in Cape Town?",
      answer: "Kamalo City in Goodwood offers premium shisha with a full food and music experience."
    },
    {
      question: "What flavors of hookah do you have?",
      answer: "We offer mint, double apple, blueberry, mango, and seasonal blends."
    },
    {
      question: "Is the hookah lounge open every night?",
      answer: "Yes, our hookah lounge operates during all restaurant hours, 7 days a week."
    },
    {
      question: "Do you need ID to enter the hookah section?",
      answer: "Yes, it's 18+ only in the smoking area."
    },
    {
      question: "Can I book a table in the lounge?",
      answer: "Absolutely — we recommend reservations on weekends."
    },
    {
      question: "Do you serve alcohol or mocktails with hookah?",
      answer: "Yes, we have mocktails and bar-style drinks to pair with your session."
    },
    {
      question: "Is there music or entertainment while smoking?",
      answer: "Yes, DJs or playlists run most evenings for a lively vibe."
    },
    {
      question: "Is there a smoking area outside too?",
      answer: "Our hookah experience is indoor with proper ventilation, but outdoor seating is available."
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
              Cape Town <span className="text-kamalo-red">Shisha Experience</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover one of Cape Town's top-rated hookah lounges at Kamalo City in Goodwood. Our shisha bar offers a premium selection of flavored hookah pipes in a lively, music-driven setting.
            </p>
          </div>

          {/* Service Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="/lovable-uploads/e8bac841-0a55-4ef6-be6d-f24cbc468ab1.png"
                alt="Hookah Lounge"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-kamalo-red">Premium Hookah Experience</h2>
              <p className="text-gray-300 mb-4">
                From double apple to mint grape, enjoy smooth, rich smoke while vibing to Afrobeat and Amapiano beats. Whether you're out with friends or starting your night right, our lounge is the perfect chill spot.
              </p>
              <p className="text-gray-300 mb-6">
                Our hookah lounge combines traditional flavors with modern atmosphere, creating an authentic Cape Town nightlife experience that keeps you coming back for more.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Wind className="w-6 h-6 text-kamalo-red" />
                  <span>Premium Flavors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-kamalo-red" />
                  <span>18+ Only</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-kamalo-red" />
                  <span>Open Daily</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-kamalo-red" />
                  <span>Safe Environment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Wind className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Premium Shisha</h3>
                <p className="text-gray-300">Mint, double apple, blueberry, mango, and seasonal blends</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Users className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Music & Vibes</h3>
                <p className="text-gray-300">DJs and playlists featuring Afrobeat and Amapiano</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Shield className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Drinks & Food</h3>
                <p className="text-gray-300">Mocktails and bar-style drinks with full menu available</p>
              </div>
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
              Ready to Experience Our <span className="text-kamalo-red">Hookah Lounge</span>?
            </h2>
            <p className="text-gray-300 mb-6">
              Visit us today or make a reservation for the best hookah experience in Cape Town.
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

      <Footer />
    </div>
  );
};

export default HookahLounge;
