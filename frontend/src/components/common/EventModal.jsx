import { useState } from "react";
import {
  FaTimes,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaUserTie,
  FaCheckCircle,
} from "react-icons/fa";

import ApplicationModal from "./ApplicationModal";

const EventModal = ({ event, onClose }) => {
  const [showApplication, setShowApplication] = useState(false);

  if (!event) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image */}
          <div className="relative">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-80 object-cover"
            />

            <button
              onClick={onClose}
              className="absolute top-5 right-5 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition"
            >
              <FaTimes />
            </button>

            <span className="absolute bottom-5 left-5 bg-primary text-white px-4 py-2 rounded-full font-medium">
              {event.category}
            </span>
          </div>

          {/* Content */}
          <div className="p-8">

            <div className="flex justify-between items-start flex-wrap gap-4">

              <div>
                <h2 className="text-4xl font-bold">
                  {event.title}
                </h2>

                <p className="text-gray-600 mt-3">
                  {event.description}
                </p>
              </div>

              <div className="bg-primary text-white px-5 py-3 rounded-xl font-bold text-xl">
                {event.budget}
              </div>

            </div>

            {/* Information */}
            <div className="grid md:grid-cols-2 gap-5 mt-10">

              <div className="flex items-center gap-3">
                <FaCalendarAlt className="text-primary text-xl" />
                <span>{event.date}</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-primary text-xl" />
                <span>{event.location}</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMoneyBillWave className="text-primary text-xl" />
                <span>{event.budget}</span>
              </div>

              <div className="flex items-center gap-3">
                <FaUserTie className="text-primary text-xl" />
                <span>{event.organizer}</span>
              </div>

            </div>

            {/* Skills */}
            {event.skills && (
              <div className="mt-10">

                <h3 className="text-2xl font-bold mb-5">
                  Required Skills
                </h3>

                <div className="flex flex-wrap gap-3">

                  {event.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-purple-100 text-primary px-4 py-2 rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>
            )}

            {/* Highlights */}
            <div className="mt-10">

              <h3 className="text-2xl font-bold mb-5">
                Why Join This Event?
              </h3>

              <div className="space-y-3">

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-500" />
                  Work with experienced professionals.
                </div>

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-500" />
                  Expand your professional network.
                </div>

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-500" />
                  Gain valuable event experience.
                </div>

              </div>

            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-12">

              <button
                onClick={() => setShowApplication(true)}
                className="bg-primary text-white px-8 py-3 rounded-xl hover:bg-secondary transition"
              >
                Apply Now
              </button>

              <button
                onClick={onClose}
                className="border border-gray-300 px-8 py-3 rounded-xl hover:bg-gray-100 transition"
              >
                Close
              </button>

            </div>

          </div>
        </div>
      </div>

      {/* Application Modal */}
      <ApplicationModal
        event={event}
        open={showApplication}
        onClose={() => setShowApplication(false)}
      />
    </>
  );
};

export default EventModal;