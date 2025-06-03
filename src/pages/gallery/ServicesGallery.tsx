
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ServicesGallery = () => {
  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      <div className="pt-24 px-6 pb-12">
        <h1 className="text-4xl font-bold mb-12 text-center">
          <span className="text-kamalo-red">Services</span> Gallery
        </h1>
        
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-xl text-gray-300">
            Discover our range of services designed to enhance your visit. From professional grooming at our barbershop 
            to relaxing hookah sessions and exclusive perfume selections, Kamalo City offers more than just dining.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder for images */}
          <div className="bg-gray-700 rounded-lg h-64 flex items-center justify-center">
            <p className="text-gray-400">Barbershop Photo</p>
          </div>
          <div className="bg-gray-700 rounded-lg h-64 flex items-center justify-center">
            <p className="text-gray-400">Hookah Lounge Photo</p>
          </div>
          <div className="bg-gray-700 rounded-lg h-64 flex items-center justify-center">
            <p className="text-gray-400">Perfumes Photo</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesGallery;
