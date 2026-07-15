import { NavLink } from "react-router-dom";
import Sidebar from "../dashboard/Sidebar";
import Topbar from "../dashboard/Topbar";
import StatCard from "../dashboard/StatCard";

import {
  FaUsers,
  FaUserTie,
  FaCalendarAlt,
  FaClipboardList,
} from "react-icons/fa";

const AdminDashboard = () => {
  const recentRequests = [
    {
      id: 1,
      client: "Parth",
      talent: "Rahul Sharma",
      event: "Wedding",
      status: "Pending",
    },
    {
      id: 2,
      client: "Amit",
      talent: "Priya Mehta",
      event: "Corporate Event",
      status: "Approved",
    },
    {
      id: 3,
      client: "Riya",
      talent: "Aman Patel",
      event: "Birthday Party",
      status: "Rejected",
    },
  ];

  return (
    <div className="flex bg-gray-100 min-h-screen">

      <Sidebar role="admin" />

      <main className="flex-1 p-8">

        <Topbar title="Admin Dashboard" />

        {/* Welcome */}
        <div className="mt-8 bg-gradient-to-r from-primary to-secondary rounded-3xl text-white p-8">

          <h2 className="text-3xl font-bold">
            Welcome Admin 👋
          </h2>

          <p className="mt-3 text-purple-100">
            Manage users, events and monitor all platform activities.
          </p>

        </div>

        {/* Stat Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

          <StatCard
            title="Total Clients"
            value="120"
            icon={<FaUsers />}
            color="bg-blue-500"
          />

          <StatCard
            title="Total Talents"
            value="75"
            icon={<FaUserTie />}
            color="bg-green-500"
          />

          <StatCard
            title="Events"
            value="40"
            icon={<FaCalendarAlt />}
            color="bg-purple-600"
          />

          <StatCard
            title="Requests"
            value="210"
            icon={<FaClipboardList />}
            color="bg-yellow-500"
          />

        </div>

        {/* Recent Requests */}
        <div className="bg-white rounded-3xl shadow p-6 mt-8">

          <h2 className="text-2xl font-bold mb-6">
            Recent Hiring Requests
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="border-b">

                  <th className="text-left py-3">Client</th>

                  <th className="text-left py-3">Talent</th>

                  <th className="text-left py-3">Event</th>

                  <th className="text-left py-3">Status</th>

                </tr>

              </thead>

              <tbody>

                {recentRequests.map((item) => (

                  <tr
                    key={item.id}
                    className="border-b hover:bg-gray-50"
                  >

                    <td className="py-4">
                      {item.client}
                    </td>

                    <td>
                      {item.talent}
                    </td>

                    <td>
                      {item.event}
                    </td>

                    <td>

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

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-3xl shadow p-6 mt-8">

          <h2 className="text-2xl font-bold mb-6">
            Quick Actions
          </h2>

          <div className="grid md:grid-cols-3 gap-5">

            <NavLink
              to="/manage-users"
              className="flex items-center gap-3 p-3 rounded-xl bg-primary text-white hover:bg-secondary transition"
            >
              Manage Users
            </NavLink>

            <NavLink
              to="/manage-events"
              className="flex items-center gap-3 p-3 rounded-xl bg-primary text-white hover:bg-secondary transition"
            >
              Manage Events
            </NavLink>

            <NavLink
              to="/view-reports"
              className="flex items-center gap-3 p-3 rounded-xl bg-primary text-white hover:bg-secondary transition"
            >
              View Reports
            </NavLink>

          </div>

        </div>

      </main>

    </div>
  );
};

export default AdminDashboard;