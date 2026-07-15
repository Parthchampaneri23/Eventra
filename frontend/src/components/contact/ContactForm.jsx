import { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
        setForm(initialForm);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!form.name.trim())
      newErrors.name = "Full name is required.";

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!/^[0-9]{10}$/.test(form.phone))
      newErrors.phone = "Enter a valid 10-digit phone number.";

    if (!form.subject.trim())
      newErrors.subject = "Subject is required.";

    if (form.message.trim().length < 20)
      newErrors.message =
        "Message must contain at least 20 characters.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    console.log(form);

    setSubmitted(true);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">

        <div className="max-w-3xl mx-auto">

          <div className="text-center mb-12">

            <span className="bg-purple-100 text-primary px-4 py-2 rounded-full font-medium">
              Send Message
            </span>

            <h2 className="text-4xl font-bold mt-5">
              Get In Touch
            </h2>

            <p className="text-gray-600 mt-4">
              We'd love to hear from you. Fill out the form below and our
              team will get back to you as soon as possible.
            </p>

          </div>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-3xl p-12 text-center">

              <FaCheckCircle className="text-green-500 text-6xl mx-auto" />

              <h3 className="text-3xl font-bold mt-6">
                Message Sent Successfully!
              </h3>

              <p className="text-gray-600 mt-4">
                Thank you for contacting Eventra. We'll respond shortly.
              </p>

            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 rounded-3xl shadow-xl p-8 space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.email}
                    </p>
                  )}
                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.subject}
                    </p>
                  )}
                </div>

              </div>

              <div>
                <textarea
                  rows="6"
                  name="message"
                  placeholder="Write your message..."
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-xl text-lg font-semibold hover:bg-secondary transition"
              >
                Send Message
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};

export default ContactForm;