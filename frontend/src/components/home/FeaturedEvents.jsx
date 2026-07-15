import { useState } from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

import { events } from "../../data/events";
import EventModal from "../common/EventModal";

const FeaturedEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <>
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">

          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900">
              Featured Events
            </h2>

            <p className="mt-3 text-gray-600">
              Discover exciting opportunities and collaborate with amazing teams.
            </p>
          </div>

          {/* Event Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedEvent(event)}
                      className="bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
                    >
                      View Details
                    </button>
                  </div>

                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 bg-primary text-white text-sm px-3 py-1 rounded-full">
                    {event.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {event.title}
                  </h3>

                  <div className="flex items-center gap-2 mt-4 text-gray-500">
                    <FaMapMarkerAlt className="text-primary" />
                    <span>{event.location}</span>
                  </div>

                  <div className="flex items-center gap-2 mt-2 text-gray-500">
                    <FaCalendarAlt className="text-primary" />
                    <span>{event.date}</span>
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <span className="text-2xl font-bold text-primary">
                      {event.budget}
                    </span>

                    <button
                   onClick={() => setSelectedEvent(event)}
                   className="w-[180px] bg-primary text-white py-3 rounded-xl hover:bg-secondary transition"
                   >
                    Apply Now
                   </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Event Modal */}
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </>
  );
};

export default FeaturedEvents;