const categories = [
  {
    icon: "🎵",
    title: "Musicians",
    count: "500+ Professionals",
  },
  {
    icon: "🎨",
    title: "Designers",
    count: "350+ Professionals",
  },
  {
    icon: "💻",
    title: "Developers",
    count: "200+ Professionals",
  },
  {
    icon: "📸",
    title: "Photographers",
    count: "180+ Professionals",
  },
];

const TrustedSection = () => {
  return (
    <section className="py-14 bg-slate-50">
      <div className="container mx-auto px-4">

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">
            Trusted by Creators Across India
          </h2>

          <p className="text-gray-500 mt-3">
            Discover talented professionals for every type of event.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 text-center shadow-sm border border-gray-100 hover:border-primary hover:shadow-xl transition duration-300"
            >
              <div className="text-5xl mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-2">
                {item.count}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TrustedSection;