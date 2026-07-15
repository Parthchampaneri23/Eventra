import { useState } from "react";
import { FaTimes, FaCheckCircle } from "react-icons/fa";

const ApplicationModal = ({ event, open, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    profession: "",
    experience: "",
    skills: "",
    portfolio: "",
    coverLetter: "",
  });

  if (!open) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    // Later we'll save into MongoDB
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 z-[60] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {submitted ? (
          <div className="p-16 text-center">

            <FaCheckCircle className="text-6xl text-green-500 mx-auto" />

            <h2 className="text-3xl font-bold mt-6">
              Application Submitted
            </h2>

            <p className="text-gray-600 mt-3">
              Thank you for applying.
              <br />
              We will contact you soon.
            </p>

            <button
              onClick={onClose}
              className="mt-8 bg-primary text-white px-8 py-3 rounded-xl"
            >
              Close
            </button>

          </div>
        ) : (
          <div className="grid lg:grid-cols-2">

            {/* Left */}

            <div className="bg-primary text-white p-10">

              <img
                src={event.image}
                alt={event.title}
                className="rounded-2xl h-64 w-full object-cover"
              />

              <h2 className="text-3xl font-bold mt-8">
                {event.title}
              </h2>

              <p className="mt-4 opacity-90">
                {event.description}
              </p>

              <div className="mt-8 space-y-3">

                <p>
                  📍 {event.location}
                </p>

                <p>
                  📅 {event.date}
                </p>

                <p>
                  💰 {event.budget}
                </p>

              </div>

            </div>

            {/* Right */}

            <div className="p-10 relative">

              <button
                onClick={onClose}
                className="absolute right-6 top-6"
              >
                <FaTimes size={22} />
              </button>

              <h2 className="text-3xl font-bold mb-8">
                Apply for Event
              </h2>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                <input
                  required
                  name="fullName"
                  placeholder="Full Name"
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                />

                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                />

                <input
                  required
                  name="phone"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                />

                <input
                  name="city"
                  placeholder="City"
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                />

                <select
                  name="profession"
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                >
                  <option>Select Profession</option>
                  <option>Photographer</option>
                  <option>Videographer</option>
                  <option>Singer</option>
                  <option>DJ</option>
                  <option>Anchor</option>
                  <option>Event Manager</option>
                </select>

                <input
                  name="experience"
                  placeholder="Years of Experience"
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                />

                <textarea
                  rows="3"
                  name="skills"
                  placeholder="Your Skills"
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                />

                <input
                  name="portfolio"
                  placeholder="Portfolio / Instagram Link"
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                />

                <textarea
                  rows="4"
                  name="coverLetter"
                  placeholder="Why should we hire you?"
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                />

                <button
                  className="w-full bg-primary text-white py-4 rounded-xl hover:bg-secondary transition"
                >
                  Apply Now
                </button>

              </form>

            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationModal;