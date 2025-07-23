import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DiscountSlider = () => {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-neutral-900">
      <h2 className="text-4xl font-extrabold text-center text-green-700 dark:text-white mb-12">
         Discounts & Offers
      </h2>

      <div className="max-w-6xl mx-auto">
        <Slider
          dots={true}
          infinite={true}
          speed={700}
          slidesToShow={3}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={3000}
          arrows={false}
          responsive={[
            {
              breakpoint: 1024,
              settings: { slidesToShow: 2 },
            },
            {
              breakpoint: 640,
              settings: { slidesToShow: 1 },
            },
          ]}
        >
          {["offer1.jpg", "offer2.jpg", "offer3.jpg"].map((img, index) => (
            <div key={index} className="px-3">
              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-neutral-800">
                <img
                  src={`/images/offers/${img}`}
                  alt={`Offer ${index + 1}`}
                  className="w-full h-56 md:h-72 object-cover"
                />
                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Special Deal Just for You!
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Save on top routes – limited time only.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default DiscountSlider;

