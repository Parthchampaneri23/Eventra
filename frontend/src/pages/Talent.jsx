import { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";

import { allTalents } from "../data/allTalents";

import SearchBar from "../components/talent/SearchBar";
import FilterBar from "../components/talent/FilterBar";
import TalentCard from "../components/talent/TalentCard";
import Pagination from "../components/talent/Pagination";

import TalentModal from "../components/common/TalentModal";

const Talent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [profession, setProfession] = useState("All");
  const [city, setCity] = useState("All");

  const [selectedTalent, setSelectedTalent] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const talentsPerPage = 6;

  // Filtering
  const filteredTalents = allTalents.filter((talent) => {
    const matchesSearch = talent.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesProfession =
      profession === "All" || talent.role === profession;

    const matchesCity =
      city === "All" || talent.location === city;

    return (
      matchesSearch &&
      matchesProfession &&
      matchesCity
    );
  });

  // Reset page after filtering
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, profession, city]);

  // Pagination
  const totalPages = Math.ceil(
    filteredTalents.length / talentsPerPage
  );

  const indexOfLast = currentPage * talentsPerPage;
  const indexOfFirst = indexOfLast - talentsPerPage;

  const currentTalents = filteredTalents.slice(
    indexOfFirst,
    indexOfLast
  );

  return (
    <MainLayout>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16 text-white">
        <div className="container mx-auto px-4 text-center">

          <h1 className="text-5xl font-bold">
            Find Professional Talent
          </h1>

          <p className="mt-5 text-lg max-w-2xl mx-auto">
            Discover talented professionals for weddings,
            concerts, corporate events and festivals.
          </p>

        </div>
      </section>

      {/* Search */}
      <section className="-mt-10 relative z-10">
        <div className="container mx-auto px-4">

          <div className="bg-white rounded-3xl shadow-xl p-6 space-y-5">

            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />

            <FilterBar
              profession={profession}
              setProfession={setProfession}
              city={city}
              setCity={setCity}
            />

          </div>

        </div>
      </section>

      {/* Cards */}
      <section className="py-16 bg-gray-50">

        <div className="container mx-auto px-4">

          <div className="flex justify-between items-center mb-10 flex-wrap">

            <h2 className="text-4xl font-bold">
              All Talents
            </h2>

            <span className="text-gray-500">
              {filteredTalents.length} Talents Found
            </span>

          </div>

          {filteredTalents.length === 0 ? (
            <div className="text-center py-20">

              <h2 className="text-3xl font-bold">
                No Talent Found
              </h2>

              <p className="text-gray-500 mt-3">
                Try changing your search or filters.
              </p>

            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {currentTalents.map((talent) => (
                  <TalentCard
                    key={talent.id}
                    talent={talent}
                    onView={setSelectedTalent}
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

      <TalentModal
        talent={selectedTalent}
        onClose={() => setSelectedTalent(null)}
      />

    </MainLayout>
  );
};

export default Talent;