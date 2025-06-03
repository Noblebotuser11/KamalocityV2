
import { Trophy, Users, Calendar, Gamepad2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GameNights = () => {
  const faqs = [
    {
      question: "When will game nights start?",
      answer: "We're currently organizing our game night program and expect to launch soon. Follow us on Instagram for announcements!"
    },
    {
      question: "What types of games will be featured?",
      answer: "We're planning classics like chess, dominoes, Uno, cards, and more based on community interest."
    },
    {
      question: "Do I need to bring my own games?",
      answer: "We'll provide all games and equipment, but you're welcome to bring favorites to share."
    },
    {
      question: "Will there be prizes for winners?",
      answer: "Yes! We're planning exciting prizes for tournament winners including vouchers, recognition, and special rewards."
    },
    {
      question: "Is it beginner-friendly?",
      answer: "Absolutely! All skill levels are welcome, from complete beginners to experienced players."
    },
    {
      question: "Can I suggest games to include?",
      answer: "Yes! We want community input to shape our game selection and tournament formats."
    },
    {
      question: "Will food and drinks be available?",
      answer: "Yes — full menu and drinks available throughout all game nights and tournaments."
    },
    {
      question: "How do I stay updated on game night announcements?",
      answer: "Follow us on Instagram @kamalo_city or call us for the latest updates on launch dates."
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
              <span className="text-kamalo-red">Game Nights</span> & Social Tournaments
            </h1>
            <div className="bg-kamalo-red text-white px-6 py-2 rounded-full text-lg font-semibold inline-block mb-6">
              Coming Soon!
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Looking for a fun night out that's more than just dinner and drinks? Kamalo City is preparing to host social game nights and casual tournaments — featuring classics like chess, dominoes, Uno, cards, and more.
            </p>
          </div>

          {/* Service Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop"
                alt="Game Night"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-kamalo-red">Chess, Dominoes & Social Tournaments</h2>
              <p className="text-gray-300 mb-4">
                Whether you're a competitive spirit or just want to chill with friends in a vibey environment, our game tournaments blend the energy of nightlife with the strategy of timeless games.
              </p>
              <p className="text-gray-300 mb-6">
                Join us for a night of food, music, and friendly competition — no experience required. Located in Goodwood, Cape Town, Kamalo City is where culture, connection, and creativity meet.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Trophy className="w-6 h-6 text-kamalo-red" />
                  <span>Tournaments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-kamalo-red" />
                  <span>All Skill Levels</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Gamepad2 className="w-6 h-6 text-kamalo-red" />
                  <span>Classic Games</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-kamalo-red" />
                  <span>Social Events</span>
                </div>
              </div>
            </div>
          </div>

          {/* Planned Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">What's Coming</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Trophy className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Weekly Tournaments</h3>
                <p className="text-gray-300">Regular competitive events with prizes and recognition</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Users className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Social Game Nights</h3>
                <p className="text-gray-300">Casual gaming sessions for fun and connection</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Gamepad2 className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Classic Board Games</h3>
                <p className="text-gray-300">Traditional games that bring people together</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <Calendar className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Special Events</h3>
                <p className="text-gray-300">Holiday tournaments and community challenges</p>
              </div>
            </div>
          </div>

          {/* Gaming Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Planned Game Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-black/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-kamalo-red mb-3">Strategy Games</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Chess Championships</li>
                  <li>• Checkers Tournaments</li>
                  <li>• Strategic Board Games</li>
                </ul>
              </div>
              <div className="bg-black/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-kamalo-red mb-3">Traditional Games</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Dominoes Competitions</li>
                  <li>• Card Game Nights</li>
                  <li>• Local African Games</li>
                </ul>
              </div>
              <div className="bg-black/50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-kamalo-red mb-3">Party Games</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Uno Tournaments</li>
                  <li>• Group Card Games</li>
                  <li>• Social Party Games</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pre-Launch Interest */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Pre-Launch Interest</h2>
            <div className="bg-black/50 rounded-lg p-8 text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-kamalo-red mb-4">Be the First to Know!</h3>
              <p className="text-gray-300 mb-6">
                Want to be notified when we launch our game nights? Give us a call or follow us on Instagram to stay updated on our gaming program development.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-kamalo-dark border border-kamalo-red rounded-lg p-4">
                  <h4 className="font-bold text-kamalo-red mb-2">Early Access Benefits</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Priority tournament registration</li>
                    <li>• Exclusive practice nights</li>
                    <li>• Input on game selection</li>
                  </ul>
                </div>
                <div className="bg-kamalo-dark border border-kamalo-red rounded-lg p-4">
                  <h4 className="font-bold text-kamalo-red mb-2">Community Building</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Help shape tournament rules</li>
                    <li>• Suggest favorite games</li>
                    <li>• Connect with fellow gamers</li>
                  </ul>
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
              Ready to <span className="text-kamalo-red">Join the Games</span>?
            </h2>
            <p className="text-gray-300 mb-6">
              Stay connected with Kamalo City for the latest updates on our game night launch!
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
                Call for Updates: +27 73 159 8909
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GameNights;
