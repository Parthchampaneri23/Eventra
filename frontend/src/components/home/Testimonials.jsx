import { FaQuoteLeft, FaStar, FaMapMarkerAlt } from "react-icons/fa";
import { testimonials } from "../../data/testimonials";

const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            What Our Users Say
          </h2>

          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Hear from event organizers and talented professionals who trust Eventra.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((user) => (

            <div
              key={user.id}
              className="group relative bg-white rounded-3xl p-8 border border-gray-200 shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
            >

              {/* Quote Icon */}
              <div className="absolute top-5 right-5 text-primary text-4xl opacity-20 group-hover:opacity-100 transition">
                <FaQuoteLeft />
              </div>

              {/* Avatar */}
              <div className="flex justify-center">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-24 h-24 rounded-full border-4 border-primary shadow-lg object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Rating */}
              <div className="flex justify-center gap-1 mt-5">
                {[...Array(user.rating)].map((_, index) => (
                  <FaStar
                    key={index}
                    className="text-yellow-400 text-lg"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-center text-gray-600 italic mt-5 leading-7">
                "{user.review}"
              </p>

              {/* User Info */}
              <div className="mt-6 text-center">

                <h3 className="text-xl font-bold text-gray-900">
                  {user.name}
                </h3>

                <p className="text-primary font-medium">
                  {user.role}
                </p>

                <div className="flex justify-center items-center gap-2 text-gray-500 mt-2">
                  <FaMapMarkerAlt className="text-primary" />
                  <span>{user.location}</span>
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;