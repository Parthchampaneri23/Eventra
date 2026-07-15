import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaCalendarAlt,
  FaClipboardList,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = ({ role }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <aside className="w-72 min-h-screen bg-slate-900 text-white flex flex-col">

      {/* Logo */}
      <div className="p-6 border-b border-slate-700">

        <img
          src="/logo.png"
          alt="Eventra"
          className="h-14"
        />

      </div>

      {/* Menu */}
      <div className="flex-1 px-5 py-8 space-y-3">

        {/* Dashboard */}
        <NavLink
          to={`/${role}-dashboard`}
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary transition"
        >
          <FaHome />
          Dashboard
        </NavLink>

        {/* CLIENT */}
        {role === "client" && (
          <>
            <NavLink
              to="/talent"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary transition"
            >
              <FaUsers />
              Browse Talent
            </NavLink>

            <NavLink
              to="/events"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary transition"
            >
              <FaCalendarAlt />
              Events
            </NavLink>

            <NavLink
              to="/client-requests"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary transition"
            >
              <FaClipboardList />
              My Requests
            </NavLink>

            <NavLink
              to="/client-profile"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary transition"
            >
              <FaUserCircle />
              Profile
            </NavLink>
          </>
        )}

        {/* TALENT */}
        {role === "talent" && (
          <>
            <NavLink
              to="/talent-applications"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary transition"
            >
              <FaClipboardList />
              Applications
            </NavLink>

            <NavLink
              to="/events"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary transition"
            >
              <FaCalendarAlt />
              Events
            </NavLink>

            <NavLink
              to="/talent-profile"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary transition"
            >
              <FaUserCircle />
              Profile
            </NavLink>
          </>
        )}

        {/* ADMIN */}
        {role === "admin" && (
          <>
            <NavLink
              to="/manage-users"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary transition"
            >
              <FaUsers />
              Manage Users
            </NavLink>

            <NavLink
              to="/manage-events"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary transition"
            >
              <FaCalendarAlt />
              Events
            </NavLink>

            <NavLink
              to="/view-reports"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary transition"
            >
              <FaClipboardList />
              Requests
            </NavLink>

            <NavLink
              to="/admin-profile"
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary transition"
            >
              <FaUserCircle />
              Profile
            </NavLink>
          </>
        )}

      </div>

      {/* Logout */}
      <div className="p-5 border-t border-slate-700">

        <button
          onClick={logout}
          className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 py-3 rounded-xl transition"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </aside>
  );
};

export default Sidebar;