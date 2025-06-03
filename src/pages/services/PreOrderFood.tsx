
import { Clock, Phone, CheckCircle, Truck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PreOrderFood = () => {
  const faqs = [
    {
      question: "How do I pre-order food from Kamalo City?",
      answer: "Via WhatsApp, website form, or call us directly."
    },
    {
      question: "Can I pre-order for a group or office lunch?",
      answer: "Yes — we handle bulk pre-orders with advance notice."
    },
    {
      question: "What dishes are available for pre-order?",
      answer: "Our full menu is open to pre-orders including platters, wings, and grills."
    },
    {
      question: "Can I customize my order?",
      answer: "Yes — just add notes when placing your order."
    },
    {
      question: "How do I pay for a pre-order?",
      answer: "Currently in-store upon pickup; online payments coming soon."
    },
    {
      question: "When is food ready after I order?",
      answer: "Average prep time is 15–25 mins depending on order size."
    },
    {
      question: "Is delivery available yet?",
      answer: "Not yet — but launching very soon."
    },
    {
      question: "Can I pre-order for a specific pickup time?",
      answer: "Yes — let us know your desired pickup time."
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
              <span className="text-kamalo-red">Pre-Order</span> Fast Pickup & Soon: Delivery
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Skip the line and pre-order your favorite Kamalo City dishes for fast, easy pickup. Our system lets you schedule your order and collect when it's ready — no waiting required.
            </p>
          </div>

          {/* Service Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
                alt="Pre-Order Food"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-kamalo-red">Fast Pickup & Soon: Delivery</h2>
              <p className="text-gray-300 mb-4">
                Delivery service is coming soon, making it easier to enjoy Cape Town's best Afro-fusion meals from home. Perfect for busy schedules, office lunch orders, or when you want to ensure your meal is ready without any waiting time.
              </p>
              <p className="text-gray-300 mb-6">
                Our pre-order system handles everything from single meals to bulk orders for groups and offices, with average prep times of just 15-25 minutes.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-kamalo-red" />
                  <span>15-25 Min Prep</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-kamalo-red" />
                  <span>Easy Ordering</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-kamalo-red" />
                  <span>Custom Orders</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Truck className="w-6 h-6 text-kamalo-red" />
                  <span>Delivery Soon</span>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">How Pre-Ordering Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <div className="bg-kamalo-red text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="text-lg font-bold mb-2">Call or WhatsApp</h3>
                <p className="text-gray-300">Contact us via WhatsApp or phone to place your order</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <div className="bg-kamalo-red text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="text-lg font-bold mb-2">Choose from Full Menu</h3>
                <p className="text-gray-300">Select from platters, wings, grills, and all menu items</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <div className="bg-kamalo-red text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="text-lg font-bold mb-2">Set Pickup Time</h3>
                <p className="text-gray-300">Choose your preferred collection time</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <div className="bg-kamalo-red text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h3 className="text-lg font-bold mb-2">Quick Pickup</h3>
                <p className="text-gray-300">Arrive and collect your fresh, ready meal</p>
              </div>
            </div>
          </div>

          {/* Popular Pre-Order Items */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Popular Pre-Order Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-black/50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-kamalo-red mb-2">Signature Platters</h3>
                <p className="text-gray-300">Mixed grills and combination platters for sharing</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-kamalo-red mb-2">Wing Specials</h3>
                <p className="text-gray-300">Famous wings with various African-inspired sauces</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-kamalo-red mb-2">Grilled Selections</h3>
                <p className="text-gray-300">Fresh grilled meats with traditional sides</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-kamalo-red mb-2">Office Lunch Combos</h3>
                <p className="text-gray-300">Bulk orders perfect for workplace catering</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-kamalo-red mb-2">Traditional Mains</h3>
                <p className="text-gray-300">Authentic African dishes with rice and sides</p>
              </div>
              <div className="bg-black/50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-kamalo-red mb-2">Family Meals</h3>
                <p className="text-gray-300">Large portions designed for family sharing</p>
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
              Ready to <span className="text-kamalo-red">Pre-Order</span>?
            </h2>
            <p className="text-gray-300 mb-6">
              Call us now to place your order and skip the wait. Fresh African cuisine ready when you are.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+27731598909"
                className="bg-kamalo-red text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                Call to Order: +27 73 159 8909
              </a>
              <a
                href="/menu"
                className="border border-kamalo-red text-kamalo-red px-6 py-3 rounded-lg hover:bg-kamalo-red hover:text-white transition-colors font-semibold"
              >
                View Full Menu
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PreOrderFood;
