
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EventsAndEntertainment = () => {
  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      <div className="pt-24 px-6 pb-12">
        <h1 className="text-4xl font-bold mb-12 text-center">
          Events & <span className="text-kamalo-red">Entertainment</span>
        </h1>
        
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-xl text-gray-300">
            Join us for unforgettable events featuring live music, cultural performances, and themed nights. 
            Kamalo City is the go-to destination in Cape Town for vibrant entertainment experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder for images */}
          <div className="bg-gray-700 rounded-lg h-64 flex items-center justify-center">
            <p className="text-gray-400">Event Photo 1</p>
          </div>
          <div className="bg-gray-700 rounded-lg h-64 flex items-center justify-center">
            <p className="text-gray-400">Live Music Photo</p>
          </div>
          <div className="bg-gray-700 rounded-lg h-64 flex items-center justify-center">
            <p className="text-gray-400">Entertainment Photo</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventsAndEntertainment;
