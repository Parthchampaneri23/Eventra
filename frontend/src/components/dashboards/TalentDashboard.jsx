import Sidebar from "../dashboard/Sidebar";
import Topbar from "../dashboard/Topbar";
import StatCard from "../dashboard/StatCard";

import {
  FaClipboardList,
  FaClock,
  FaCheckCircle,
  FaCalendarAlt,
} from "react-icons/fa";

const TalentDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user")) || {};

  // Demo users who will see sample dashboard
  const demoUsers = [
    "Parth",
    "Hemant",
    "Rahul",
    "Admin",
  ];

  const isDemoUser = demoUsers.includes(user.name);

  const requests = isDemoUser
    ? [
      {
        id: 1,
        client: "Royal Wedding",
        role: "Photographer",
        date: "20 July 2026",
        status: "Pending",
      },
      {
        id: 2,
        client: "Corporate Event",
        role: "Photographer",
        date: "25 July 2026",
        status: "Approved",
      },
      {
        id: 3,
        client: "Birthday Party",
        role: "Photographer",
        date: "30 July 2026",
        status: "Pending",
      },
    ]
    : [];

  const totalRequests = requests.length;

  const pendingRequests = requests.filter(
    (item) => item.status === "Pending"
  ).length;

  const approvedRequests = requests.filter(
    (item) => item.status === "Approved"
  ).length;

  const upcomingEvents = approvedRequests;
  return (
    <div className="flex bg-gray-100 min-h-screen">

      <Sidebar role="talent" />

      <main className="flex-1 p-8">

        <Topbar title="Talent Dashboard" />

        {/* Welcome */}
        <div className="mt-8 bg-gradient-to-r from-primary to-secondary rounded-3xl text-white p-8">

          <h2 className="text-3xl font-bold">
            Welcome Back, {user.name || "Talent"} 👋
          </h2>

          <p className="mt-3 text-purple-100">
            Manage your bookings and respond to hiring requests.
          </p>

        </div>

        {/* Stat Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

          <StatCard
            title="Total Requests"
            value={totalRequests}
            icon={<FaClipboardList />}
            color="bg-purple-600"
          />

          <StatCard
            title="Pending"
            value={pendingRequests}
            icon={<FaClock />}
            color="bg-yellow-500"
          />

          <StatCard
            title="Approved"
            value={approvedRequests}
            icon={<FaCheckCircle />}
            color="bg-green-500"
          />

          <StatCard
            title="Upcoming Events"
            value={upcomingEvents}
            icon={<FaCalendarAlt />}
            color="bg-blue-500"
          />

        </div>

        {/* Requests */}
        <div className="bg-white rounded-3xl shadow p-6 mt-8">

          <h2 className="text-2xl font-bold mb-6">
            Hiring Requests
          </h2>

          <div className="space-y-4">

            {requests.length === 0 ? (

              <div className="text-center py-10 text-gray-500 font-medium">
                No hiring requests available.
              </div>

            ) : (

              requests.map((item) => (
                <div
                  key={item.id}
                  className="border rounded-2xl p-5 flex flex-col lg:flex-row justify-between lg:items-center gap-4"
                >
                  <div>
                    <h3 className="font-bold text-lg">{item.client}</h3>

                    <p className="text-gray-500">{item.role}</p>

                    <p className="text-sm text-gray-400 mt-1">
                      Event Date: {item.date}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    {item.status === "Pending" ? (
                      <>
                        <button className="bg-green-500 text-white px-5 py-2 rounded-xl hover:bg-green-600">
                          Accept
                        </button>

                        <button className="bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600">
                          Reject
                        </button>
                      </>
                    ) : (
                      <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full font-semibold">
                        Approved
                      </span>
                    )}
                  </div>

                </div>
              ))

            )}

          </div>

        </div>

        {/* Availability */}
        <div className="bg-white rounded-3xl shadow p-6 mt-8">

          <h2 className="text-2xl font-bold mb-5">
            Availability Status
          </h2>

          <div className="flex items-center justify-between">

            <div>

              <h3 className="font-semibold">
                Current Status
              </h3>

              <p className="text-gray-500">
                Available for new bookings
              </p>

            </div>

            <button className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-secondary transition">
              Available
            </button>

          </div>

        </div>

      </main>

    </div>
  );
};

export default TalentDashboard;