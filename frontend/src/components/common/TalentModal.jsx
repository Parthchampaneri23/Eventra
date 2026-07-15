import { useState } from "react";
import {
  FaTimes,
  FaStar,
  FaMapMarkerAlt,
  FaBriefcase,
  FaCheckCircle,
} from "react-icons/fa";

import HireTalentModal from "./HireTalentModal";

const TalentModal = ({ talent, onClose }) => {
  const [showHireModal, setShowHireModal] = useState(false);

  if (!talent) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 bg-white w-10 h-10 rounded-full shadow-lg hover:bg-red-500 hover:text-white transition"
          >
            <FaTimes className="mx-auto" />
          </button>

          {/* Banner */}
          <div className="relative">
            <img
              src={talent.image}
              alt={talent.name}
              className="w-full h-52 md:h-60 object-cover"
            />

            <div className="absolute bottom-5 left-6 right-6 flex justify-between items-end">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                  {talent.name}
                </h2>

                <p className="text-lg text-purple-200 font-medium">
                  {talent.role}
                </p>
              </div>

              <div className="bg-yellow-400 text-black px-4 py-2 rounded-full flex items-center gap-2 font-bold shadow-lg">
                <FaStar />
                {talent.rating}
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-8">

            {/* Info Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

              <div className="bg-gray-50 rounded-xl p-4">
                <FaMapMarkerAlt className="text-primary mb-2" />
                <p className="text-sm text-gray-500">Location</p>
                <h4 className="font-semibold">{talent.location}</h4>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <FaBriefcase className="text-primary mb-2" />
                <p className="text-sm text-gray-500">Experience</p>
                <h4 className="font-semibold">{talent.experience}</h4>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <FaCheckCircle className="text-green-500 mb-2" />
                <p className="text-sm text-gray-500">Status</p>
                <h4 className="font-semibold">
                  {talent.available ? "Available" : "Busy"}
                </h4>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-500">Projects</p>
                <h4 className="text-primary font-bold text-xl">
                  {talent.projects}
                </h4>
              </div>

            </div>

            {/* Skills */}
            <div className="mt-10">

              <h3 className="text-2xl font-bold mb-5">
                Skills
              </h3>

              <div className="flex flex-wrap gap-3 items-center">

                {talent.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-purple-100 text-primary text-sm font-medium whitespace-nowrap hover:bg-primary hover:text-white transition"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>

            {/* About */}
            <div className="mt-10">

              <h3 className="text-2xl font-bold">
                About
              </h3>

              <p className="text-gray-600 leading-8 mt-4">
                {talent.about}
              </p>

            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">

              <button
                onClick={() => setShowHireModal(true)}
                className="bg-primary text-white px-8 py-3 rounded-xl hover:bg-secondary transition"
              >
                Hire Talent
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

      <HireTalentModal
        open={showHireModal}
        talent={talent}
        onClose={() => setShowHireModal(false)}
      />
    </>
  );
};

export default TalentModal;