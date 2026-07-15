import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    value: "+91 98765 43210",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "support@eventra.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Office",
    value: "Mumbai, Maharashtra",
  },
  {
    icon: <FaClock />,
    title: "Working Hours",
    value: "Mon - Sat | 9 AM - 7 PM",
  },
];

const ContactCards = () => {
  return (
    <section className="-mt-8 relative z-10">
      <div className="container mx-auto px-4">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 transition"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-100 text-primary flex items-center justify-center text-2xl mb-5">
                {card.icon}
              </div>

              <h3 className="text-xl font-bold">
                {card.title}
              </h3>

              <p className="text-gray-500 mt-3">
                {card.value}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ContactCards;