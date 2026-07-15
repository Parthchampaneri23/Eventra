import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle, FaChevronDown } from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Events", path: "/events" },
  { name: "Talent", path: "/talent" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    const userData = localStorage.getItem("user");

    if (loginStatus === "true" && userData) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");

    setIsLoggedIn(false);
    setUser(null);

    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-20 md:h-24 px-4">

        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Eventra Logo"
            className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </NavLink>

        {/* Navigation */}
        <nav className="flex items-center gap-6 overflow-x-auto scrollbar-hide whitespace-nowrap px-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-300 ${isActive
                  ? "text-primary"
                  : "text-gray-700 hover:text-primary"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {!isLoggedIn ? (
            <>
              <NavLink
                to="/login"
                className="text-gray-700 font-medium hover:text-primary transition"
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                className="bg-primary text-white px-5 py-2.5 rounded-xl hover:bg-secondary transition"
              >
                Get Started
              </NavLink>
            </>
          ) : (
            <div
              className="relative"
              ref={dropdownRef}
            >
              <button
                onClick={() =>
                  setShowDropdown(!showDropdown)
                }
                className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-xl hover:bg-gray-200 transition"
              >
                <FaUserCircle className="text-2xl text-primary" />

                <span className="font-medium">
                  {user?.name}
                </span>

                <FaChevronDown
                  className={`transition ${showDropdown ? "rotate-180" : ""
                    }`}
                />
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border overflow-hidden">

                  <button
                    className="w-full text-left px-5 py-3 hover:bg-gray-100"
                  >
                    👤 My Profile
                  </button>

                  <button
                    className="w-full text-left px-5 py-3 hover:bg-gray-100"
                  >
                    📅 My Applications
                  </button>

                  <button
                    className="w-full text-left px-5 py-3 hover:bg-gray-100"
                  >
                    ⚙️ Settings
                  </button>

                  <hr />

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-5 py-3 text-red-500 hover:bg-red-50"
                  >
                    🚪 Logout
                  </button>

                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </header>
  );
};

export default Navbar;