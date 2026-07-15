import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-white to-indigo-50 py-16 lg:py-24">
      <div className="container mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>

            <span className="inline-block bg-purple-100 text-primary px-4 py-2 rounded-full font-medium mb-6">
              About Eventra
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Connecting
              <span className="block text-primary">
                Event Organizers
              </span>
              with
              <span className="block text-primary">
                Creative Talent
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">
              Eventra is a modern event collaboration platform where organizers
              discover talented professionals and creators find exciting
              opportunities. From weddings and concerts to corporate events,
              Eventra makes hiring simple, fast, and reliable.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <Link
                to="/events"
                className="bg-primary text-white px-7 py-3 rounded-xl hover:bg-secondary transition"
              >
                Explore Events
              </Link>

              <Link
                to="/talent"
                className="border-2 border-primary text-primary px-7 py-3 rounded-xl hover:bg-primary hover:text-white transition"
              >
                Find Talent
              </Link>

            </div>

          </div>

          {/* Right Image */}
          <div className="flex justify-center">

            <img
              src="\heroillustration.png"
              alt="About Eventra"
              className="w-full max-w-xl object-contain drop-shadow-2xl"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutHero;