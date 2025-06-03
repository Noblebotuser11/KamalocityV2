import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const ReviewsPage = () => {
  return (
    <div className="min-h-screen bg-kamalo-dark">
      <Navbar />
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Share Your <span className="text-kamalo-red">Experience</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Welcome to our reviews section! We value every customer's feedback and are proud to share the experiences of our wonderful guests. Your opinions help us maintain the high standards of service and quality that Kamalo City is known for.
          </p>
          <Reviews />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReviewsPage;