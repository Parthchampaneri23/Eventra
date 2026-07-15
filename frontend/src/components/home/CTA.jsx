import { NavLink } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">

          <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🚀 Join India's Growing Event Community
          </span>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Ready to Build Amazing Events Together?
          </h2>

          <p className="mt-3 text-lg text-purple-100 max-w-2xl mx-auto">
            Whether you're an event organizer looking for talented professionals
            or a creator searching for exciting opportunities, Eventra is the
            perfect place to collaborate.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">
            <NavLink
              to="/events"
              className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:scale-105 transition duration-300"
            >
              Explore Events
            </NavLink>

            <NavLink
              to="/talent"
              className="border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition duration-300"
            >
              Find Talent
            </NavLink>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;