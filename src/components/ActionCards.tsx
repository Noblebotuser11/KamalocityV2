import { Button } from "@/components/ui/button";
import { Utensils, Calendar, Star } from "lucide-react";

const ActionCards = () => {
  return (
    <div className="bg-kamalo-dark py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="bg-black rounded-lg p-8 text-center">
          <Utensils className="w-12 h-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">Order Now</h3>
          <p className="text-gray-300 mb-6">
            Get your favorite African dishes delivered to your doorstep
          </p>
          <Button className="bg-green-500 hover:bg-green-600 text-white">
            Order on Uber Eats
          </Button>
        </div>

        <div className="bg-black rounded-lg p-8 text-center">
          <Calendar className="w-12 h-12 text-kamalo-red mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">Make a Reservation</h3>
          <p className="text-gray-300 mb-6">
            Book your table for a perfect dining experience
          </p>
          <Button className="bg-kamalo-red hover:bg-red-600 text-white">
            Reserve Now
          </Button>
        </div>

        <div className="bg-black rounded-lg p-8 text-center">
          <Star className="w-12 h-12 text-kamalo-gold mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">Share Your Experience</h3>
          <p className="text-gray-300 mb-6">
            Let us know about your visit to Kamalo City
          </p>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
            Write a Review
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ActionCards;