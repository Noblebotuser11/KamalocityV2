
import { useState } from "react";
import { Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Reservations = () => {
  const [guests, setGuests] = useState("2");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const generateDates = () => {
    const dates = [];
    for (let i = 1; i <= 31; i++) {
      dates.push(i);
    }
    return dates;
  };

  const generateGuestNumbers = () => {
    const numbers = [];
    for (let i = 1; i <= 25; i++) {
      numbers.push(i);
    }
    return numbers;
  };

  const timeSlots = [
    "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", 
    "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM",
    "9:00 PM", "10:00 PM"
  ];

  const handleWhatsAppConfirm = () => {
    const message = `Hello! I would like to make a reservation for ${guests} guests on ${selectedDate} at ${selectedTime} at Kamalo City.`;
    const whatsappUrl = `https://wa.me/+27731598909?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-kamalo-dark">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-20">
        {/* SEO-Optimized Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-kamalo-gold mb-6">
            Reservations at Kamalo City
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Planning a special evening or event in Cape Town? Kamalo City offers the perfect venue for your needs. Whether you're looking to reserve a table for an intimate dinner or book the entire venue for occasions like birthdays, parties, or corporate events, we've got you covered. Our team is dedicated to providing an unforgettable experience, complete with exquisite cuisine, vibrant ambiance, and top-notch service. Secure your reservation today and let Kamalo City make your event truly special.
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto bg-black rounded-lg p-8 border border-gray-700">
          <p className="text-gray-300 mb-6">Open: 11:00 AM to 10:00 PM, 7 days a week</p>
          
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-white block mb-2">Month</label>
                <Select onValueChange={(value) => setSelectedDate(prev => {
                  const [_, day] = prev.split(' ');
                  return `${value} ${day || '1'}, 2025`;
                })}>
                  <SelectTrigger className="w-full bg-[#1A1F2C] text-white border-gray-700">
                    <SelectValue placeholder="Select month" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1A1F2C] text-white border-gray-700">
                    {months.map((month) => (
                      <SelectItem key={month} value={month} className="hover:bg-gray-700">
                        {month}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-white block mb-2">Day</label>
                <Select onValueChange={(value) => setSelectedDate(prev => {
                  const [month] = prev.split(' ');
                  return `${month || 'January'} ${value}, 2025`;
                })}>
                  <SelectTrigger className="w-full bg-[#1A1F2C] text-white border-gray-700">
                    <SelectValue placeholder="Select day" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1A1F2C] text-white border-gray-700">
                    {generateDates().map((day) => (
                      <SelectItem key={day} value={day.toString()} className="hover:bg-gray-700">
                        {day}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="text-white block mb-2">Number of Guests</label>
              <Select onValueChange={setGuests}>
                <SelectTrigger className="w-full bg-[#1A1F2C] text-white border-gray-700">
                  <SelectValue placeholder="Select number of guests" />
                </SelectTrigger>
                <SelectContent className="bg-[#1A1F2C] text-white border-gray-700">
                  {generateGuestNumbers().map((num) => (
                    <SelectItem key={num} value={num.toString()} className="hover:bg-gray-700">
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-white block mb-2">Time</label>
              <Select onValueChange={setSelectedTime}>
                <SelectTrigger className="w-full bg-[#1A1F2C] text-white border-gray-700">
                  <SelectValue placeholder="Select time">
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      <span>Select time</span>
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent className="bg-[#1A1F2C] text-white border-gray-700">
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time} className="hover:bg-gray-700">
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={handleWhatsAppConfirm}
              className="w-full bg-kamalo-red hover:bg-red-600 text-white py-4 rounded-lg mt-6"
              disabled={!selectedDate || !selectedTime}
            >
              Confirm via WhatsApp
            </Button>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              For any booking clarifications or special requirements, please contact{" "}
              <a href="tel:+27731598909" className="text-kamalo-gold hover:text-kamalo-red transition-colors">
                +27 73 159 8909
              </a>{" "}
              to ensure your reservation meets all your needs and there are no complications.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reservations;
