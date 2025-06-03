import { Phone, MessageSquare, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="bg-kamalo-dark py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-xl text-gray-300">Get in touch with us instantly</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
                  <Phone className="w-6 h-6 mr-4 text-kamalo-red" />
                  <span>+27 73 159 8909</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MessageSquare className="w-6 h-6 mr-4 text-kamalo-red" />
                  <span>WhatsApp Us</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-6 h-6 mr-4 text-kamalo-red" />
                  <span>90 Voortrekker Road, Goodwood, Western Cape</span>
                </div>
              </div>
            </div>
            <div className="h-64 bg-gray-700 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;