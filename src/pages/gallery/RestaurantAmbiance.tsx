
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RestaurantAmbiance = () => {
  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      <div className="pt-24 px-6 pb-12">
        <h1 className="text-4xl font-bold mb-12 text-center">
          Restaurant <span className="text-kamalo-red">Ambiance</span>
        </h1>
        
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-xl text-gray-300">
            Experience the vibrant atmosphere of Kamalo City, where modern design meets African heritage. 
            Our interiors are thoughtfully curated to provide a warm and inviting setting for every guest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder for images */}
          <div className="bg-gray-700 rounded-lg h-64 flex items-center justify-center">
            <p className="text-gray-400">Ambiance Photo 1</p>
          </div>
          <div className="bg-gray-700 rounded-lg h-64 flex items-center justify-center">
            <p className="text-gray-400">Ambiance Photo 2</p>
          </div>
          <div className="bg-gray-700 rounded-lg h-64 flex items-center justify-center">
            <p className="text-gray-400">Ambiance Photo 3</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RestaurantAmbiance;
