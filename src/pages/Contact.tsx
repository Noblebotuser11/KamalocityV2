
import { Phone, MessageSquare, MapPin, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      <div className="pt-24 px-6 pb-12">
        <h1 className="text-4xl font-bold mb-12 text-center">
          Contact <span className="text-kamalo-red">Us</span>
        </h1>
        
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-xl text-gray-300">
            Have questions or want to make a reservation? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-black/50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="text-white block mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-3 bg-gray-800 rounded-lg text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-white block mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 bg-gray-800 rounded-lg text-white"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="text-white block mb-2">Message</label>
                <textarea
                  className="w-full p-3 bg-gray-800 rounded-lg text-white h-32"
                  placeholder="Your message"
                ></textarea>
              </div>
              <Button className="w-full bg-kamalo-red hover:bg-red-600 text-white">
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-black/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-6 h-6 mr-4 text-kamalo-red" />
                  <span>90 Voortrekker Road, Goodwood, Cape Town</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-6 h-6 mr-4 text-kamalo-red" />
                  <span>+27 73 159 8909</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-6 h-6 mr-4 text-kamalo-red" />
                  <span>info@kamalocity.co.za</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Clock className="w-6 h-6 mr-4 text-kamalo-red" />
                  <span>7 days a week, 11:00 AM - 11:00 PM</span>
                </div>
              </div>
            </div>
            
            <div className="bg-black/50 rounded-lg p-4">
              <h3 className="text-xl font-bold text-white mb-4">Find Us</h3>
              <div className="w-full h-64 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.1055656329913!2d18.546104776047663!3d-33.912682521333636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5b0726596af5%3A0x651107464f9fc317!2sKamalo%20City!5e0!3m2!1sen!2sza!4v1748888283939!5m2!1sen!2sza" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kamalo City Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
