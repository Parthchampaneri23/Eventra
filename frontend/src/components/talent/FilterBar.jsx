const FilterBar = ({
  profession,
  setProfession,
  city,
  setCity,
}) => {
  return (
    <div className="grid md:grid-cols-2 gap-4">

      <select
        value={profession}
        onChange={(e) => setProfession(e.target.value)}
        className="border rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none"
      >
        <option value="All">All Professions</option>
        <option>Photographer</option>
        <option>Videographer</option>
        <option>Singer</option>
        <option>DJ</option>
        <option>Event Planner</option>
        <option>Anchor</option>
        <option>Decorator</option>
        <option>Makeup Artist</option>
      </select>

      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border rounded-xl p-4 focus:ring-2 focus:ring-primary outline-none"
      >
        <option value="All">All Cities</option>
        <option>Mumbai</option>
        <option>Pune</option>
        <option>Ahmedabad</option>
        <option>Delhi</option>
        <option>Surat</option>
        <option>Bengaluru</option>
        <option>Jaipur</option>
        <option>Rajkot</option>
        <option>Indore</option>
        <option>Nashik</option>
        <option>Vadodara</option>
      </select>

    </div>
  );
};

export default FilterBar;