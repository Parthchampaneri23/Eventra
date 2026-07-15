import { FaSearch } from "react-icons/fa";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative">

      <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

      <input
        type="text"
        placeholder="Search talent by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full border border-gray-300 rounded-xl py-4 pl-14 pr-5 focus:ring-2 focus:ring-primary outline-none"
      />

    </div>
  );
};

export default SearchBar;