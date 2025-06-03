
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Sides = () => {
  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      <div className="pt-24 px-6 pb-12">
        <h1 className="text-4xl font-bold mb-12 text-center">
          <span className="text-kamalo-red">Sides</span>
        </h1>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
              <div>
                <h3 className="text-lg font-medium mb-2">Portion Pap</h3>
                <p className="text-sm text-gray-400 mb-2">R 13.50</p>
                <p className="text-sm text-gray-300">
                  Found in all traditional African homes, can be eaten with any of our other dishes.
                </p>
              </div>
            </Card>

            <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
              <div>
                <h3 className="text-lg font-medium mb-2">Portion Rice</h3>
                <p className="text-sm text-gray-400 mb-2">R 34.00</p>
                <p className="text-sm text-gray-300">
                  Fried rice, perfect accompaniment to any main dish.
                </p>
              </div>
            </Card>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Sides;
