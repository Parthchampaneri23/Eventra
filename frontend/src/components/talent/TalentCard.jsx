import {
  FaStar,
  FaMapMarkerAlt,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const TalentCard = ({ talent, onView }) => {
  return (
    <div className="group flex flex-col h-full rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">

      {/* Image */}
      <div className="relative overflow-hidden">

        <img
          src={talent.image}
          alt={talent.name}
          className="w-full h-72 object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

          <button
            onClick={() => onView(talent)}
            className="bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            View Profile
          </button>

        </div>

        {talent.available && (
          <span className="absolute top-4 left-4 bg-green-500 text-white text-xs px-3 py-2 rounded-full flex items-center gap-2">
            <FaCheckCircle />
            Available
          </span>
        )}

        <span className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-2 rounded-full flex items-center gap-2 font-semibold">
          <FaStar />
          {talent.rating}
        </span>

      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">

        <h3 className="text-xl font-bold">
          {talent.name}
        </h3>

        <p className="text-primary font-medium mt-1">
          {talent.role}
        </p>

        <div className="flex items-center gap-2 mt-3 text-gray-500">
          <FaMapMarkerAlt />
          <span>{talent.location}</span>
        </div>

       <div className="flex flex-wrap gap-2 mt-5">

        {talent.skills.map((skill) => (
         <span
           key={skill}
           className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-primary bg-purple-50 border border-purple-200 rounded-lg hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
          >
            ✓ {skill}
            </span>
          ))}

         </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">

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

        <button
          onClick={() => onView(talent)}
          className="w-full mt-6 bg-primary text-white py-3 rounded-xl flex justify-center items-center gap-2 hover:bg-secondary transition group/button"
        >
          View Profile

          <FaArrowRight className="transition-transform group-hover/button:translate-x-2" />
        </button>

      </div>

    </div>
  );
};

export default TalentCard;