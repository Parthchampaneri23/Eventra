import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-5xl font-bold leading-tight">
            Ready to Create Your
            <br />
            Next Amazing Event?
          </h2>

          <p className="mt-6 text-lg text-white/90 leading-8">
            Whether you're organizing an event or looking for exciting
            opportunities as a talented professional, Eventra is here to help
            you connect, collaborate, and succeed.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">

            <Link
              to="/events"
              className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
            >
              Explore Events
            </Link>

            <Link
              to="/talent"
              className="border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition"
            >
              Find Talent
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutCTA;