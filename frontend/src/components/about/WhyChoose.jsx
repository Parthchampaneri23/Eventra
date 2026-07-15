import {
  FaUserCheck,
  FaCalendarCheck,
  FaBolt,
  FaShieldAlt,
  FaHeadset,
  FaHandshake,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUserCheck />,
    title: "Verified Talent",
    description:
      "Browse trusted photographers, singers, DJs, decorators, planners and more.",
  },
  {
    icon: <FaCalendarCheck />,
    title: "Easy Event Discovery",
    description:
      "Explore upcoming events and opportunities with just a few clicks.",
  },
  {
    icon: <FaBolt />,
    title: "Quick Hiring",
    description:
      "Connect with professionals instantly through a simple hiring process.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Trusted Platform",
    description:
      "We focus on quality, transparency and reliable communication.",
  },
  {
    icon: <FaHeadset />,
    title: "Dedicated Support",
    description:
      "Our team is always available to help organizers and talent.",
  },
  {
    icon: <FaHandshake />,
    title: "Strong Community",
    description:
      "Building lasting relationships between event organizers and creators.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">

        <div className="text-center mb-14">

          <span className="bg-purple-100 text-primary px-4 py-2 rounded-full font-medium">
            Why Choose Us
          </span>

          <h2 className="text-4xl font-bold mt-5">
            Why Thousands Trust Eventra
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We simplify event hiring by bringing talented professionals and
            organizers together on one reliable platform.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-purple-100 text-primary flex items-center justify-center text-3xl mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChoose;