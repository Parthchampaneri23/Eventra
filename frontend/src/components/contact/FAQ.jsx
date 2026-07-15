import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How do I book talent through Eventra?",
    answer:
      "Browse the Talent page, view a professional's profile, and click 'Hire Talent'. Fill out the hiring form and the talent will contact you shortly.",
  },
  {
    question: "Can I post my own event?",
    answer:
      "Yes. Organizers can create events, receive applications from talented professionals, and manage everything from one platform.",
  },
  {
    question: "Is Eventra free to use?",
    answer:
      "Yes. Browsing events and talents is completely free. Additional premium features may be introduced in future updates.",
  },
  {
    question: "How are talents verified?",
    answer:
      "Every talent profile is manually reviewed based on experience, portfolio, ratings, and completed projects before being featured.",
  },
  {
    question: "Can I cancel a hiring request?",
    answer:
      "Yes. You can contact the talent directly and cancel or modify your request before confirming the booking.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">

        <div className="text-center mb-12">

          <span className="bg-purple-100 text-primary px-4 py-2 rounded-full font-medium">
            Frequently Asked Questions
          </span>

          <h2 className="text-4xl font-bold mt-5">
            Have Questions?
          </h2>

          <p className="text-gray-600 mt-4">
            Find answers to the most common questions about Eventra.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <h3 className="font-semibold text-lg">
                  {faq.question}
                </h3>

                {active === index ? (
                  <FaChevronUp className="text-primary" />
                ) : (
                  <FaChevronDown className="text-primary" />
                )}
              </button>

              {active === index && (
                <div className="px-6 pb-6 text-gray-600 leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FAQ;