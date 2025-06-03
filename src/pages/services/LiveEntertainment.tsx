
import { Music, Calendar, Users, Mic } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LiveEntertainment = () => {
  const faqs = [
    {
      question: "When do you host live music events?",
      answer: "We host DJs and performances every weekend and on special event nights."
    },
    {
      question: "Is there a cover charge?",
      answer: "Most nights are free; special guests may have a small entry fee."
    },
    {
      question: "What kind of music do you play?",
      answer: "Amapiano, Afrobeat, house, R&B, and urban African sounds."
    },
    {
      question: "Can I reserve a table during events?",
      answer: "Yes — VIP and general table reservations are available."
    },
    {
      question: "Do you allow local performers to apply?",
      answer: "Yes, DM us or email bookings@kamalocity.com."
    },
    {
      question: "Is it safe and secure to party at Kamalo City?",
      answer: "Absolutely — we have onsite security and controlled entry."
    },
    {
      question: "Can we dance and party, or is it just seated?",
      answer: "Both! There's room to dance, vibe, or chill."
    },
    {
      question: "Do you serve food during live shows?",
      answer: "Yes — full menu and drinks available throughout."
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
              <span className="text-kamalo-red">Amapiano, Afrobeat</span> & Local Performances
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience Cape Town nightlife at its best with Kamalo City's live entertainment nights. From Afrobeat and Amapiano DJs to rising local artists, our stage hosts high-energy performances every weekend.
            </p>
          </div>

          {/* Service Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop"
                alt="Live Entertainment"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-kamalo-red">Cape Town Nightlife at Its Best</h2>
              <p className="text-gray-300 mb-4">
                Grab dinner, smoke hookah, and enjoy a night of culture, music, and food in Goodwood's most vibrant venue. Our entertainment program showcases the best of local talent and international sounds.
              </p>
              <p className="text-gray-300 mb-6">
                From intimate acoustic sessions to high-energy dance nights, we create an atmosphere where music, culture, and community come together for unforgettable experiences.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Music className="w-6 h-6 text-kamalo-red" />
                  <span>Weekend Shows</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mic className="w-6 h-6 text-kamalo-red" />
                  <span>Local Artists</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-kamalo-red" />
                  <span>Dance Floor</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-kamalo-red" />
                  <span>Special Events</span>
                </div>
              </div>
            </div>
          </div>

          {/* Entertainment Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Music className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Amapiano</h3>
                <p className="text-gray-300">The hottest South African sound with top local DJs</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Mic className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Afrobeat</h3>
                <p className="text-gray-300">Contemporary African rhythms and international hits</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Users className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Live Performances</h3>
                <p className="text-gray-300">Rising local artists and special guest appearances</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Calendar className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Urban Sounds</h3>
                <p className="text-gray-300">House, R&B, and contemporary African music</p>
              </div>
            </div>
          </div>

          {/* Weekly Schedule Preview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Weekly Entertainment</h2>
            <div className="bg-black/50 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-kamalo-red mb-2">Friday Nights</h3>
                  <p className="text-gray-300">Amapiano DJs and dance vibes</p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-kamalo-red mb-2">Saturday Evenings</h3>
                  <p className="text-gray-300">Live performances and special guests</p>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-kamalo-red mb-2">Special Events</h3>
                  <p className="text-gray-300">Rising local artists and featured acts</p>
                </div>
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
              Don't Miss Our <span className="text-kamalo-red">Live Entertainment</span>
            </h2>
            <p className="text-gray-300 mb-6">
              Follow us on Instagram for the latest updates on upcoming shows and events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-kamalo-red text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                Follow @kamalo_city
              </a>
              <a
                href="tel:+27731598909"
                className="border border-kamalo-red text-kamalo-red px-6 py-3 rounded-lg hover:bg-kamalo-red hover:text-white transition-colors font-semibold"
              >
                Call for Events: +27 73 159 8909
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LiveEntertainment;
