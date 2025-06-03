import { Star } from "lucide-react";

const Reviews = () => {
  return (
    <div className="bg-kamalo-dark py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Customer <span className="text-kamalo-red">Reviews</span>
          </h2>
          <p className="text-xl text-gray-300">What our customers say about us</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Baptiste Cibangu",
              date: "2 years ago",
              review: "Excellent food, service, and atmosphere - all 5/5! A true gem in Cape Town.",
            },
            {
              name: "Emmanuel Ndachengedzwa",
              date: "3 months ago",
              review: "The food is absolutely great and the service is 5 star! Perfect dining experience.",
            },
            {
              name: "Ludi Smit",
              date: "1 year ago",
              review: "Real traditional mid African cuisine restaurant with lovely atmosphere. Nice soft reclining furniture, pool table for relaxation. Owners are very forthcoming and friendly. Great vegetarian options and wheelchair accessible.",
            },
          ].map((review, index) => (
            <div key={index} className="bg-black/50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full mr-4"></div>
                <div>
                  <h4 className="text-white font-bold">{review.name}</h4>
                  <p className="text-gray-400 text-sm">{review.date}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-kamalo-gold fill-current" />
                ))}
              </div>
              <p className="text-gray-300">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;