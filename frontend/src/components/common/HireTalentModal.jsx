import { useState, useEffect } from "react";
import { FaTimes, FaCheckCircle } from "react-icons/fa";

const HireTalentModal = ({ talent, open, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const initialForm = {
    company: "",
    organizer: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    location: "",
    budget: "",
    message: "",
  };

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (open) {
      setSubmitted(false);
      setErrors({});
      setForm(initialForm);
    }
  }, [open]);

  if (!open || !talent) return null;

  if (!open) return null;

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
    e.stopPropagation();
    console.log("Button Clicked");

    let newErrors = {};

    if (!form.organizer.trim())
      newErrors.organizer = "Organizer name is required";

    if (!form.email.trim())
      newErrors.email = "Email is required";
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    )
      newErrors.email = "Invalid email";

    if (!/^[0-9]{10}$/.test(form.phone))
      newErrors.phone = "Enter valid 10 digit phone";

    if (!form.eventType)
      newErrors.eventType = "Select event type";

    if (!form.eventDate)
      newErrors.eventDate = "Select event date";

    if (!form.location.trim())
      newErrors.location = "Location required";

    if (!form.budget.trim())
      newErrors.budget = "Budget required";

    if (form.message.length < 20)
      newErrors.message =
        "Minimum 20 characters required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 z-[60] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {submitted ? (
          <div className="text-center p-16">

            <FaCheckCircle className="text-green-500 text-6xl mx-auto" />

            <h2 className="text-3xl font-bold mt-6">
              Hiring Request Sent!
            </h2>

            <p className="text-gray-500 mt-3">
              Your hiring request has been sent successfully.
              The talent will contact you soon.
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
                src={talent.image}
                alt={talent.name}
                className="rounded-2xl w-full h-64 object-cover"
              />

              <h2 className="text-3xl font-bold mt-8">
                {talent.name}
              </h2>

              <p className="mt-2">
                {talent.role}
              </p>

              <p className="mt-6">
                📍 {talent.location}
              </p>

              <p className="mt-2">
                ⭐ {talent.rating}
              </p>

              <p className="mt-2">
                💼 {talent.experience}
              </p>

            </div>

            {/* Right */}
            <div className="p-8 relative">

              <button
                onClick={onClose}
                className="absolute right-5 top-5"
              >
                <FaTimes />
              </button>

              <h2 className="text-3xl font-bold mb-6">
                Hire Talent
              </h2>

              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input
                  name="company"
                  placeholder="Company (Optional)"
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                />

                <input
                  name="organizer"
                  placeholder="Organizer Name"
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                />
                {errors.organizer && (
                  <p className="text-red-500 text-sm">
                    {errors.organizer}
                  </p>
                )}

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">
                    {errors.email}
                  </p>
                )}

                <input
                  name="phone"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">
                    {errors.phone}
                  </p>
                )}

                <select
                  name="eventType"
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                >
                  <option value="">Select Event Type</option>
                  <option>Wedding</option>
                  <option>Corporate</option>
                  <option>Birthday</option>
                  <option>Festival</option>
                  <option>Concert</option>
                </select>
                {errors.eventType && (
                  <p className="text-red-500 text-sm">
                    {errors.eventType}
                  </p>
                )}

                <input
                  type="date"
                  name="eventDate"
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                />

                <input
                  name="location"
                  placeholder="Event Location"
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                />

                <input
                  name="budget"
                  placeholder="Budget"
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                />

                <textarea
                  rows="4"
                  name="message"
                  placeholder="Tell the talent about your event..."
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3"
                />

                <button type="submit" onClick={(e) => e.stopPropagation()} className="w-full bg-primary text-white py-4 rounded-xl hover:bg-secondary">
                  Send Hiring Request
                </button>

              </form>

            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default HireTalentModal;