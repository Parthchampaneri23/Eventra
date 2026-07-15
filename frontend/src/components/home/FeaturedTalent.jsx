import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaStar,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

import { talents } from "../../data/talents";
import TalentModal from "../common/TalentModal";

const FeaturedTalent = () => {
  const [selectedTalent, setSelectedTalent] = useState(null);

  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">

          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900">
              Featured Talent
            </h2>

            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Discover experienced professionals ready to make your next event unforgettable.
            </p>
          </div>

          {/* Talent Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {talents.map((talent) => (
              <div
                key={talent.id}
                className="group flex flex-col rounded-3xl overflow-hidden bg-gradient-to-b from-white to-purple-50 border border-gray-200 hover:border-primary hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >

                {/* Image */}
                <div className="relative overflow-hidden">

                  <img
                    src={talent.image}
                    alt={talent.name}
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">

                    <button
                      onClick={() => setSelectedTalent(talent)}
                      className="bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
                    >
                      View Profile
                    </button>

                  </div>

                  {/* Available Badge */}
                  {talent.available && (
                    <span className="absolute top-4 left-4 bg-green-500 text-white text-xs px-3 py-2 rounded-full flex items-center gap-2">
                      <FaCheckCircle />
                      Available
                    </span>
                  )}

                  {/* Rating */}
                  <span className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-2 rounded-full flex items-center gap-2 font-semibold">
                    <FaStar />
                    {talent.rating}
                  </span>

                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">

                  <h3 className="text-xl font-bold text-gray-900">
                    {talent.name}
                  </h3>

                  <p className="text-primary font-medium mt-1">
                    {talent.role}
                  </p>

                  <div className="flex items-center gap-2 mt-3 text-gray-500">
                    <FaMapMarkerAlt className="text-primary" />
                    <span>{talent.location}</span>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mt-5 h-[90px] content-start">

                    {talent.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center justify-center h-9 px-4 rounded-full bg-purple-100 text-primary text-sm font-medium whitespace-nowrap hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}

                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 border-t pt-5 mt-4">

                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-primary">
                        {talent.projects}
                      </h4>

                      <p className="text-sm text-gray-500">
                        Projects
                      </p>
                    </div>

                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-primary">
                        {talent.experience}
                      </h4>

                      <p className="text-sm text-gray-500">
                        Experience
                      </p>
                    </div>

                  </div>

                  {/* Button */}
                  <button
                    onClick={() => setSelectedTalent(talent)}
                    className="mt-auto w-full bg-primary text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-secondary transition-all duration-300 group/button"
                  >
                    View Profile

                    <FaArrowRight className="transition-transform duration-300 group-hover/button:translate-x-2" />
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Modal */}
      <TalentModal
        talent={selectedTalent}
        onClose={() => setSelectedTalent(null)}
      />
    </>
  );
};

export default FeaturedTalent;