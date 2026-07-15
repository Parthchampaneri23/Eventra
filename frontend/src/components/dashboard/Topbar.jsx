import {
  FaBell,
  FaUserCircle,
} from "react-icons/fa";

const Topbar = ({ title }) => {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-white shadow-sm rounded-2xl px-8 py-5 flex justify-between items-center">

      {/* Left */}
      <div>

        <h1 className="text-3xl font-bold text-gray-800">
          {title}
        </h1>

        <p className="text-gray-500 mt-1">
          {today}
        </p>

      </div>

      {/* Right */}
      <div className="flex items-center gap-6">

        <button className="relative">

          <FaBell className="text-2xl text-gray-600 hover:text-primary transition" />

          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            3
          </span>

        </button>

        <div className="flex items-center gap-3">

          <FaUserCircle className="text-4xl text-primary" />

          <div>

            <h3 className="font-semibold">
              Parth
            </h3>

            <p className="text-sm text-gray-500">
              Client
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Topbar;