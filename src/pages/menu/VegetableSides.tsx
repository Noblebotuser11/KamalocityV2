
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const VegetableSides = () => {
  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      <div className="pt-24 px-6 pb-12">
        <h1 className="text-4xl font-bold mb-12 text-center">
          Vegetable <span className="text-kamalo-red">Sides</span>
        </h1>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium mb-2">Spinach</h3>
                  <p className="text-sm text-gray-400 mb-2">R 67.50</p>
                  <p className="text-sm text-gray-300">
                    A combination of fresh vegetables to bring maximum flavour to the dish.
                  </p>
                </div>
                <Button size="icon" className="bg-kamalo-red hover:bg-red-600">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </Card>

            <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium mb-2">Kasava Leaves</h3>
                  <p className="text-sm text-gray-400 mb-2">R 67.50</p>
                  <p className="text-sm text-gray-300">
                    Tender kasava leaves, a unique and flavourful savoury taste, a very go to traditional meal.
                  </p>
                </div>
                <Button size="icon" className="bg-kamalo-red hover:bg-red-600">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </Card>

            <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium mb-2">Matembele</h3>
                  <p className="text-sm text-gray-400 mb-2">R 67.50</p>
                  <p className="text-sm text-gray-300">
                    Sweet potato leaves.
                  </p>
                </div>
                <Button size="icon" className="bg-kamalo-red hover:bg-red-600">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </Card>

            <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium mb-2">Ndunda</h3>
                  <p className="text-sm text-gray-400 mb-2">R 67.50</p>
                  <p className="text-sm text-gray-300">
                    Also known as "Lenga Lenga", traditional vegetables used, also cultivated in South African soil.
                  </p>
                </div>
                <Button size="icon" className="bg-kamalo-red hover:bg-red-600">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </Card>

            <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium mb-2">Ngai Ngai</h3>
                  <p className="text-sm text-gray-400 mb-2">R 67.50</p>
                  <p className="text-sm text-gray-300">
                    Ngai ngai or osielle, very delightful and sour taste to it which complements every other dish on our menu.
                  </p>
                </div>
                <Button size="icon" className="bg-kamalo-red hover:bg-red-600">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </Card>

            <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium mb-2">Repu</h3>
                  <p className="text-sm text-gray-400 mb-2">R 67.50</p>
                  <p className="text-sm text-gray-300">
                    A very popular dish in places in Zimbabwe and has a very delightful flavour known for its freshness.
                  </p>
                </div>
                <Button size="icon" className="bg-kamalo-red hover:bg-red-600">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default VegetableSides;
