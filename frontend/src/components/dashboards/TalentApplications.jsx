import { useState } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import Topbar from "../../components/dashboard/Topbar";

const TalentApplications = () => {
    const user = JSON.parse(localStorage.getItem("user")) || {};

    // Demo users
    const demoUsers = [
        "Parth",
        "Hemant",
        "Rahul",
        "Admin",
    ];

    const isDemoUser = demoUsers.includes(user.name);

    const [applications, setApplications] = useState(
        isDemoUser
            ? [
                {
                    id: 1,
                    client: "ABC Events",
                    event: "Wedding",
                    date: "22 Jul 2026",
                    location: "Mumbai",
                    status: "Pending",
                },
                {
                    id: 2,
                    client: "Royal Weddings",
                    event: "Engagement",
                    date: "28 Jul 2026",
                    location: "Surat",
                    status: "Approved",
                },
                {
                    id: 3,
                    client: "Dream Events",
                    event: "Corporate Event",
                    date: "05 Aug 2026",
                    location: "Pune",
                    status: "Pending",
                },
            ]
            : []
    );

    const updateStatus = (id, status) => {
        setApplications((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, status } : item
            )
        );
    };

    return (
        <div className="flex bg-gray-100 min-h-screen">

            <Sidebar role="talent" />

            <main className="flex-1 p-8">

                <Topbar title="Applications" />

                {/* Hero */}
                <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl text-white p-8 mt-8">

                    <h2 className="text-3xl font-bold">
                        Event Applications
                    </h2>

                    <p className="mt-3 text-purple-100">
                        Review and manage all your hiring requests from clients.
                    </p>

                </div>

                {/* Table */}
                <div className="bg-white rounded-3xl shadow-lg mt-8 overflow-x-auto">

                    <table className="w-full">

                        <thead className="bg-gray-100">

                            <tr>

                                <th className="p-4 text-left">Client</th>
                                <th className="p-4 text-left">Event</th>
                                <th className="p-4 text-left">Date</th>
                                <th className="p-4 text-left">Location</th>
                                <th className="p-4 text-center">Status</th>
                                <th className="p-4 text-center">Action</th>

                            </tr>

                        </thead>

                        <tbody>

                            {applications.length === 0 ? (

                                <tr>

                                    <td
                                        colSpan="6"
                                        className="text-center py-12 text-gray-500 font-semibold"
                                    >
                                        No applications available.
                                    </td>

                                </tr>

                            ) : (

                                applications.map((item) => (

                                    <tr
                                        key={item.id}
                                        className="border-b hover:bg-gray-50"
                                    >

                                        <td className="p-4 font-medium">
                                            {item.client}
                                        </td>

                                        <td className="p-4">
                                            {item.event}
                                        </td>

                                        <td className="p-4">
                                            {item.date}
                                        </td>

                                        <td className="p-4">
                                            {item.location}
                                        </td>

                                        <td className="p-4 text-center">

                                            <span
                                                className={`px-4 py-2 rounded-full text-sm font-semibold
                        ${item.status === "Approved"
                                                        ? "bg-green-100 text-green-600"
                                                        : item.status === "Rejected"
                                                            ? "bg-red-100 text-red-600"
                                                            : "bg-yellow-100 text-yellow-600"
                                                    }`}
                                            >
                                                {item.status}
                                            </span>

                                        </td>

                                        <td className="p-4 text-center">

                                            {item.status === "Pending" ? (

                                                <div className="flex justify-center gap-2">

                                                    <button
                                                        onClick={() =>
                                                            updateStatus(item.id, "Approved")
                                                        }
                                                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
                                                    >
                                                        Approve
                                                    </button>

                                                    <button
                                                        onClick={() =>
                                                            updateStatus(item.id, "Rejected")
                                                        }
                                                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                                                    >
                                                        Reject
                                                    </button>

                                                </div>

                                            ) : (

                                                <button
                                                    disabled
                                                    className="bg-gray-300 text-gray-600 px-4 py-2 rounded-lg cursor-not-allowed"
                                                >
                                                    Completed
                                                </button>

                                            )}

                                        </td>

                                    </tr>

                                ))

                            )}

                        </tbody>

                    </table>

                </div>

            </main>

        </div>
    );
};

export default TalentApplications;