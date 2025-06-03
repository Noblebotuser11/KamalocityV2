
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Menu = () => {
  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      <div className="pt-24 px-6 pb-12">
        <h1 className="text-4xl font-bold mb-12 text-center">
          Our <span className="text-kamalo-red">Standard Menu</span>
        </h1>

        {/* Standard Menu */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
              <div>
                <h3 className="text-lg font-medium mb-2">Beef Stew (355g)</h3>
                <p className="text-sm text-gray-400 mb-2">R 133.65</p>
                <p className="text-sm text-gray-300">
                  Beef in a light tomatoes and brinjals sauce. Served with pap or rice and veg.
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

export default Menu;
