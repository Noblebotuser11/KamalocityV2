
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FoodAndDrinks = () => {
  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      <div className="pt-24 px-6 pb-12">
        <h1 className="text-4xl font-bold mb-12 text-center">
          Food & <span className="text-kamalo-red">Drinks</span>
        </h1>
        
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-xl text-gray-300">
            Savor the rich flavors of our African-inspired cuisine and handcrafted beverages. 
            Each dish and drink is prepared with passion, offering a culinary journey that delights the senses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder for images */}
          <div className="bg-gray-700 rounded-lg h-64 flex items-center justify-center">
            <p className="text-gray-400">Food Photo 1</p>
          </div>
          <div className="bg-gray-700 rounded-lg h-64 flex items-center justify-center">
            <p className="text-gray-400">Food Photo 2</p>
          </div>
          <div className="bg-gray-700 rounded-lg h-64 flex items-center justify-center">
            <p className="text-gray-400">Drinks Photo</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FoodAndDrinks;
