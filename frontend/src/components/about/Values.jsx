import {
  FaLightbulb,
  FaShieldAlt,
  FaUsers,
  FaAward,
} from "react-icons/fa";

const values = [
  {
    icon: <FaLightbulb />,
    title: "Innovation",
    description:
      "We continuously improve our platform with modern technology and creative solutions.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Trust",
    description:
      "Building transparent relationships between event organizers and talented professionals.",
  },
  {
    icon: <FaUsers />,
    title: "Collaboration",
    description:
      "Connecting people, ideas, and opportunities to create unforgettable events.",
  },
  {
    icon: <FaAward />,
    title: "Excellence",
    description:
      "Delivering high-quality experiences and maintaining professional standards.",
  },
];

const CoreValues = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">

        <div className="text-center mb-14">

          <span className="bg-purple-100 text-primary px-4 py-2 rounded-full font-medium">
            Our Values
          </span>

          <h2 className="text-4xl font-bold mt-5">
            What Drives Eventra
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Everything we build is guided by values that help create meaningful
            experiences for organizers and talented professionals.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 text-center shadow-lg hover:-translate-y-3 hover:shadow-2xl transition duration-300"
            >

              <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-100 text-primary flex items-center justify-center text-3xl mb-6">
                {value.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {value.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {value.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default CoreValues;