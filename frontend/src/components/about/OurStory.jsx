import { FaBullseye, FaLightbulb, FaHandshake } from "react-icons/fa";

const OurStory = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Image */}
          <div className="relative">

            <img
              src="\logo.png"
              alt="Our Story"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />

          </div>

          {/* Right Content */}
          <div>

            <span className="inline-block bg-purple-100 text-primary px-4 py-2 rounded-full font-medium mb-5">
              Our Story
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Building Better
              <span className="text-primary"> Event Experiences</span>
            </h2>

            <p className="text-gray-600 leading-8 mt-6">
              Eventra was created to simplify how event organizers and talented
              professionals connect. Whether it's a wedding, corporate event,
              concert, college festival, or private celebration, finding the
              right people should be quick, transparent, and reliable.
            </p>

            <p className="text-gray-600 leading-8 mt-5">
              Our platform brings together photographers, singers, DJs,
              decorators, anchors, videographers, makeup artists, planners, and
              many more creative professionals in one trusted marketplace.
            </p>

            {/* Features */}
            <div className="space-y-5 mt-10">

              <div className="flex gap-4">
                <div className="bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center text-primary text-xl">
                  <FaBullseye />
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    Our Mission
                  </h3>

                  <p className="text-gray-600 mt-1">
                    Make hiring event professionals simple, transparent, and
                    accessible for everyone.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center text-primary text-xl">
                  <FaLightbulb />
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    Our Vision
                  </h3>

                  <p className="text-gray-600 mt-1">
                    Become India's most trusted platform connecting creative
                    talent with event opportunities.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-purple-100 w-14 h-14 rounded-xl flex items-center justify-center text-primary text-xl">
                  <FaHandshake />
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    Our Promise
                  </h3>

                  <p className="text-gray-600 mt-1">
                    Deliver a secure, professional, and seamless hiring
                    experience for organizers and talent alike.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default OurStory;