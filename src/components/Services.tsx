import { Utensils, Music, Scissors, Wind } from "lucide-react";
import ImageModal from "./ImageModal";

const Services = () => {
  return (
    <div className="bg-kamalo-dark py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Discover What <span className="text-kamalo-red">Kamalo City</span> Offers
          </h2>
          <p className="text-xl text-gray-300">
            Experience our wide range of services and offerings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-black/50 rounded-lg p-6">
            <div className="h-48 bg-gray-700 rounded-lg mb-4 overflow-hidden">
              <ImageModal
                src="/lovable-uploads/50ec3f05-adf6-4898-b1ff-af96cbdd2693.png"
                alt="Restaurant Service"
                className="w-full h-full object-cover"
              />
            </div>
            <Music className="w-8 h-8 text-kamalo-red mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Entertainment</h3>
            <p className="text-gray-300">
              Pool table, TV area, VIP lounge, live concerts and more exciting features coming soon!
            </p>
          </div>

          <div className="bg-black/50 rounded-lg p-6">
            <div className="h-48 bg-gray-700 rounded-lg mb-4 overflow-hidden">
              <ImageModal
                src="/lovable-uploads/9360b9e9-30e1-4319-8db0-968661e99207.png"
                alt="Barbershop Service"
                className="w-full h-full object-cover"
              />
            </div>
            <Scissors className="w-8 h-8 text-kamalo-red mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Hair Cutting</h3>
            <p className="text-gray-300">
              Professional haircuts by experienced barbers
            </p>
          </div>

          <div className="bg-black/50 rounded-lg p-6">
            <div className="h-48 bg-gray-700 rounded-lg mb-4 overflow-hidden">
              <ImageModal
                src="/lovable-uploads/e8bac841-0a55-4ef6-be6d-f24cbc468ab1.png"
                alt="Perfume Service"
                className="w-full h-full object-cover"
              />
            </div>
            <Wind className="w-8 h-8 text-kamalo-red mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Shisha & Perfumes</h3>
            <p className="text-gray-300">
              Premium shisha experiences and exotic perfumes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;