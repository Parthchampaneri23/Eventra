import { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";

import { allEvents } from "../data/allEvents";

import SearchBar from "../components/events/SearchBar";
import FilterBar from "../components/events/FilterBar";
import EventCard from "../components/events/EventCard";
import Pagination from "../components/events/Pagination";
import EventModal from "../components/common/EventModal";

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [location, setLocation] = useState("All");

  const [selectedEvent, setSelectedEvent] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6;

  // Filter Events
  const filteredEvents = allEvents.filter((event) => {
    const matchesSearch = event.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      category === "All" || event.category === category;

    const matchesLocation =
      location === "All" || event.location === location;

    return matchesSearch && matchesCategory && matchesLocation;
  });

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, category, location]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;

  const currentEvents = filteredEvents.slice(
    indexOfFirstEvent,
    indexOfLastEvent
  );

  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16 text-white">
        <div className="container mx-auto px-4 text-center">

          <h1 className="text-5xl font-bold">
            Discover Amazing Events
          </h1>

          <p className="mt-5 text-lg max-w-2xl mx-auto">
            Browse hundreds of exciting events and collaborate with talented professionals.
          </p>

        </div>
      </section>

      {/* Search & Filters */}
      <section className="-mt-10 relative z-10">
        <div className="container mx-auto px-4">

          <div className="bg-white rounded-3xl shadow-xl p-6 space-y-5">

            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />

            <FilterBar
              category={category}
              setCategory={setCategory}
              location={location}
              setLocation={setLocation}
            />

          </div>

        </div>
      </section>

      {/* Events */}
      <section className="py-16 bg-gray-50">

        <div className="container mx-auto px-4">

          <div className="flex justify-between items-center mb-10 flex-wrap gap-4">

            <h2 className="text-4xl font-bold">
              All Events
            </h2>

            <span className="text-gray-500 font-medium">
              {filteredEvents.length} Events Found
            </span>

          </div>

          {filteredEvents.length === 0 ? (
            <div className="text-center py-20">

              <h2 className="text-3xl font-bold text-gray-700">
                No Events Found
              </h2>

              <p className="text-gray-500 mt-3">
                Try changing your search or filters.
              </p>

            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {currentEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    onView={setSelectedEvent}
                  />
                ))}

              </div>

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
              />
            </>
          )}

        </div>

      </section>

      {/* Event Details Modal */}
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </MainLayout>
  );
};

export default Events;