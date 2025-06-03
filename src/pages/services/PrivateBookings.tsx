
import { Users, Calendar, Star, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivateBookings = () => {
  const faqs = [
    {
      question: "How do I book Kamalo City for a private event?",
      answer: "Just contact us via our website or WhatsApp to check availability and rates."
    },
    {
      question: "How many guests can the venue handle?",
      answer: "Our space comfortably hosts 80–100 people seated or up to 120 standing."
    },
    {
      question: "What kind of events do you host?",
      answer: "Birthdays, work functions, album launches, bridal showers, and more."
    },
    {
      question: "Is music and sound included in the booking?",
      answer: "Yes, we offer DJ booth access and house sound systems."
    },
    {
      question: "Can I bring outside food or décor?",
      answer: "We provide full catering and can work with your décor team."
    },
    {
      question: "Do you allow photographers or videographers?",
      answer: "Yes, professional media teams are welcome."
    },
    {
      question: "Are kids allowed during private functions?",
      answer: "Yes — you can tailor the experience to include families."
    },
    {
      question: "How far in advance should I book?",
      answer: "We recommend at least 2–3 weeks notice for weekend events."
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
              <span className="text-kamalo-red">Private</span> Venue Hire
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Searching for a private event venue in Cape Town? Kamalo City offers full restaurant hire for birthdays, business events, album launches, or private parties.
            </p>
          </div>

          {/* Service Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=400&h=300&fit=crop"
                alt="Private Event"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-kamalo-red">Full Venue Hire for Events</h2>
              <p className="text-gray-300 mb-4">
                Located in Goodwood, we provide full catering, music systems, décor options, and custom menus — all in a stylish, vibrant environment ideal for social or formal occasions.
              </p>
              <p className="text-gray-300 mb-6">
                Our space comfortably hosts 80–100 people seated or up to 120 standing, making it perfect for intimate gatherings or larger celebrations that need that special touch.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-kamalo-red" />
                  <span>80-120 Guests</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-kamalo-red" />
                  <span>Custom Events</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-kamalo-red" />
                  <span>Full Catering</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-kamalo-red" />
                  <span>Sound Systems</span>
                </div>
              </div>
            </div>
          </div>

          {/* Event Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Perfect For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold mb-2 text-kamalo-red">Birthday Parties</h3>
                <p className="text-gray-300">Celebrate another year with style and great food</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold mb-2 text-kamalo-red">Work Functions</h3>
                <p className="text-gray-300">Corporate events and team building experiences</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold mb-2 text-kamalo-red">Album Launches</h3>
                <p className="text-gray-300">Music industry events with full AV support</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-bold mb-2 text-kamalo-red">Bridal Showers</h3>
                <p className="text-gray-300">Elegant celebrations for special occasions</p>
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
              Ready to Book Your <span className="text-kamalo-red">Private Event</span>?
            </h2>
            <p className="text-gray-300 mb-6">
              Contact our events team to discuss your requirements and get a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+27731598909"
                className="bg-kamalo-red text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                Call Events Team: +27 73 159 8909
              </a>
              <a
                href="/contact"
                className="border border-kamalo-red text-kamalo-red px-6 py-3 rounded-lg hover:bg-kamalo-red hover:text-white transition-colors font-semibold"
              >
                Send Inquiry
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivateBookings;
