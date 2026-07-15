const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Search events..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full border border-gray-300 rounded-xl px-5 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
};

export default SearchBar;