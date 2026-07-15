import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const EventCard = ({ event, onView }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-500">

      <div className="relative overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-56 object-cover group-hover:scale-110 transition duration-700"
        />

        <span className="absolute top-4 left-4 bg-primary text-white text-sm px-3 py-1 rounded-full">
          {event.category}
        </span>
      </div>

      <div className="p-6">

        <h3 className="text-xl font-bold">
          {event.title}
        </h3>

        <div className="flex items-center gap-2 mt-4 text-gray-500">
          <FaMapMarkerAlt className="text-primary" />
          {event.location}
        </div>

        <div className="flex items-center gap-2 mt-2 text-gray-500">
          <FaCalendarAlt className="text-primary" />
          {event.date}
        </div>

        <div className="flex justify-between items-center mt-6">

          <span className="text-primary text-xl font-bold">
            {event.budget}
          </span>

          <button
            onClick={() => onView(event)}
            className="bg-primary text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-secondary transition"
          >
            View

            <FaArrowRight />
          </button>

        </div>

      </div>

    </div>
  );
};

export default EventCard;