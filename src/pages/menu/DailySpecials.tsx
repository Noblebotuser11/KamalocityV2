
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DailySpecials = () => {
  return (
    <div className="min-h-screen bg-kamalo-dark text-white">
      <Navbar />
      <div className="pt-24 px-6 pb-12">
        <h1 className="text-4xl font-bold mb-12 text-center">
          Daily <span className="text-kamalo-red">Specials</span>
        </h1>

        {/* Daily Specials Notice */}
        <div className="bg-kamalo-red/10 border border-kamalo-red rounded-lg p-4 mb-8">
          <p className="text-center text-sm">
            Please note: Daily specials are only available on their designated days. Each day offers unique dishes that can only be ordered on that specific day unless otherwise indicated.
          </p>
        </div>

        {/* Monday's Specials */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Monday's Specials</h2>
          <p className="text-sm text-gray-400 mb-4">Only available on Mondays</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-medium">Kapenta</h3>
                </div>
                <p className="text-sm text-gray-400 mb-2">R 162.00</p>
                <p className="text-sm text-gray-300">
                  Kapenta, cooked in a light tomato sauce. Served with pap and a veg of your choice.
                </p>
              </div>
            </Card>

            <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-medium">Ngolo (Cat Fish)</h3>
                  <Badge className="bg-kamalo-gold">Popular</Badge>
                </div>
                <p className="text-sm text-gray-400 mb-2">R 162.00</p>
                <p className="text-sm text-gray-300">
                  Cooked ngolo with light green pepper sauce. Served with pap with veg of your choice.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Tuesday's Specials */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Tuesday's Specials</h2>
          <p className="text-sm text-gray-400 mb-4">Only available on Tuesdays</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
              <div>
                <h3 className="text-lg font-medium mb-2">Chicken Curry</h3>
                <p className="text-sm text-gray-400 mb-2">R 145.00</p>
                <p className="text-sm text-gray-300">
                  Tender chicken pieces cooked in a rich curry sauce. Served with rice or pap.
                </p>
              </div>
            </Card>

            <Card className="bg-[#1A1F2C] border-gray-800 p-4 text-white">
              <div>
                <h3 className="text-lg font-medium mb-2">Vegetable Stir Fry</h3>
                <p className="text-sm text-gray-400 mb-2">R 120.00</p>
                <p className="text-sm text-gray-300">
                  A mix of seasonal vegetables stir-fried in a savory sauce. Served with rice.
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

export default DailySpecials;
