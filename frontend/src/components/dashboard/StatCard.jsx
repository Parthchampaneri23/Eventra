const StatCard = ({ title, value, icon, color }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-gray-500 text-sm font-medium">
            {title}
          </p>

          <h2 className="text-4xl font-bold mt-3 text-gray-800">
            {value}
          </h2>

        </div>

        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white text-3xl ${color}`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
};

export default StatCard;