import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-kamalo-dark">
      <Navbar />
      <div className="pt-24 pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="text-4xl md:text-5xl font-bold text-kamalo-gold mb-8">About Kamalo City</h1>
          
          <div className="space-y-8">
            {/* Founders Section with Image */}
            <section className="md:flex md:gap-8 items-start">
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <img 
                  src="/placeholder.svg"
                  alt="Pitchou Ntumba"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-semibold text-kamalo-red mb-4">Meet Our Founders</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Kamalo City was founded by Pitchou Ntumba and his wife, who together have created Cape Town's premier African dining and entertainment destination. Their combined vision and expertise in hospitality have transformed this space into a vibrant celebration of African cuisine and culture.
                  </p>
                  <p>
                    Under their leadership, Kamalo City has evolved into more than just a restaurant – it's a cultural hub where people come together to enjoy authentic African cuisine, premium shisha experiences, professional grooming services, and entertainment.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-kamalo-red mb-4">Our Philosophy</h2>
              <p className="text-gray-300 leading-relaxed">
                At Kamalo City, we believe in creating an authentic African dining experience that celebrates our rich cultural heritage. Our commitment to using traditional recipes and locally-sourced ingredients ensures that every dish tells a story of our continent's diverse culinary traditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-kamalo-red mb-4">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                We strive to be more than just a restaurant – we aim to be a cultural hub where food lovers can explore the rich tapestry of African cuisine. Our vision is to continue pushing culinary boundaries while preserving the authentic flavors that make our dishes unique.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;