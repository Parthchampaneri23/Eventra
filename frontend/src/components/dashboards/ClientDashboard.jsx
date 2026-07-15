import Sidebar from "../dashboard/Sidebar";
import Topbar from "../dashboard/Topbar";
import StatCard from "../dashboard/StatCard";

import {
  FaClipboardList,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const ClientDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const requests = [
    {
      id: 1,
      talent: "Rahul Sharma",
      role: "Photographer",
      status: "Pending",
    },
    {
      id: 2,
      talent: "Priya Mehta",
      role: "Singer",
      status: "Approved",
    },
    {
      id: 3,
      talent: "Aman Patel",
      role: "DJ",
      status: "Rejected",
    },
  ];

  return (
    <div className="flex bg-gray-100 min-h-screen">

      <Sidebar role="client" />

      <main className="flex-1 p-8">

        <Topbar title="Client Dashboard" />

        {/* Welcome */}
        <div className="mt-8 bg-gradient-to-r from-primary to-secondary rounded-3xl text-white p-8">

          <h2 className="text-3xl font-bold">
            Welcome Back, {user.name || "Client"} 👋
          </h2>

          <p className="mt-3 text-purple-100">
            Manage your hiring requests and discover talented professionals.
          </p>

        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

          <StatCard
            title="Total Requests"
            value="24"
            icon={<FaClipboardList />}
            color="bg-purple-600"
          />

          <StatCard
            title="Pending"
            value="8"
            icon={<FaClock />}
            color="bg-yellow-500"
          />

          <StatCard
            title="Approved"
            value="14"
            icon={<FaCheckCircle />}
            color="bg-green-500"
          />

          <StatCard
            title="Rejected"
            value="2"
            icon={<FaTimesCircle />}
            color="bg-red-500"
          />

        </div>

        {/* Two Sections */}
        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          {/* Recent Requests */}
          <div className="bg-white rounded-3xl shadow p-6">

            <h2 className="text-2xl font-bold mb-5">
              Recent Hiring Requests
            </h2>

            <div className="space-y-4">

              {requests.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border rounded-xl p-4"
                >
                  <div>

                    <h3 className="font-semibold">
                      {item.talent}
                    </h3>

                    <p className="text-gray-500 text-sm">
                      {item.role}
                    </p>

                  </div>

                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold
                    ${item.status === "Approved"
                        ? "bg-green-100 text-green-600"
                        : item.status === "Pending"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                      }`}
                  >
                    {item.status}
                  </span>

                </div>
              ))}

            </div>

          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-3xl shadow p-6">

            <h2 className="text-2xl font-bold mb-6">
              Quick Actions
            </h2>

            <div className="space-y-5">

              <Link
                to="/talent"
                className="block bg-primary text-white text-center py-4 rounded-xl hover:bg-secondary transition"
              >
                Browse Talents
              </Link>

              <Link
                to="/events"
                className="block bg-primary text-white text-center py-4 rounded-xl hover:bg-secondary transition"
              >
                Browse Events
              </Link>


              <Link
                to="/client-profile"
                className="block bg-primary text-white text-center py-4 rounded-xl hover:bg-secondary transition"
              >
                My Profile
              </Link>

            </div>

          </div>

        </div>

        {/* Featured Talents */}
        <div className="bg-white rounded-3xl shadow p-6 mt-8">

          <h2 className="text-2xl font-bold mb-6">
            Featured Talents
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="border rounded-2xl p-5">

              <h3 className="font-bold">
                Rahul Sharma
              </h3>

              <p className="text-gray-500 mt-2">
                Photographer
              </p>

              <Link
                to="/talent"
                className="inline-block mt-5 text-primary font-semibold"
              >
                View Profile →
              </Link>

            </div>

            <div className="border rounded-2xl p-5">

              <h3 className="font-bold">
                Priya Mehta
              </h3>

              <p className="text-gray-500 mt-2">
                Singer
              </p>

              <Link
                to="/talent"
                className="inline-block mt-5 text-primary font-semibold"
              >
                View Profile →
              </Link>

            </div>

            <div className="border rounded-2xl p-5">

              <h3 className="font-bold">
                Aman Patel
              </h3>

              <p className="text-gray-500 mt-2">
                DJ
              </p>

              <Link
                to="/talent"
                className="inline-block mt-5 text-primary font-semibold"
              >
                View Profile →
              </Link>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
};

export default ClientDashboard;