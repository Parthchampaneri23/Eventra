const FilterBar = ({
  category,
  setCategory,
  location,
  setLocation,
}) => {
  return (
    <div className="grid md:grid-cols-2 gap-4">

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border border-gray-300 rounded-xl px-4 py-3 focus:border-primary outline-none"
      >
        <option value="All">All Categories</option>
        <option>Music</option>
        <option>Photography</option>
        <option>Technology</option>
        <option>Food</option>
        <option>corporate</option>
      </select>

      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border border-gray-300 rounded-xl px-4 py-3 focus:border-primary outline-none"
      >
        <option value="All">All Locations</option>
        <option>Ahmedabad</option>
        <option>Mumbai</option>
        <option>Pune</option>
        <option>Surat</option>
      </select>

    </div>
  );
};

export default FilterBar;