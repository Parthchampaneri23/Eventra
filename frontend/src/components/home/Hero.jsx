import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-14 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>

            {/* Badge */}
            <span className="inline-flex items-center bg-purple-100 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              ✨ Trusted by 5,000+ Creators
            </span>

            {/* Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-dark">
              Connect.
              <br />
              <span className="text-primary">Create.</span>
              <br />
              Celebrate.
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Eventra helps event organizers discover talented musicians,
              designers, developers, photographers, and creators to build
              unforgettable experiences together.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">

              <Link
                to="/events"
                className="bg-primary text-white px-7 py-3 rounded-xl hover:bg-secondary transition duration-300"
              >
                Explore Events
              </Link>

              <Link
                to="/talent"
                className="border border-primary text-primary px-7 py-3 rounded-xl hover:bg-primary hover:text-white transition duration-300"
              >
                Find Talent
              </Link>

            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-12">

              <div>
                <h2 className="text-3xl font-bold text-dark">
                  500+
                </h2>

                <p className="text-gray-500">
                  Events
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-dark">
                  3K+
                </h2>

                <p className="text-gray-500">
                  Creators
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-dark">
                  50+
                </h2>

                <p className="text-gray-500">
                  Cities
                </p>
              </div>

            </div>

          </div>

          {/* Right Content */}
          <div className="flex justify-center">

            <img
              src="/heroillustration.png"
              alt="Eventra Hero Illustration"
              className="w-full max-w-xl object-contain"
            />

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;