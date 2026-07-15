import { useState } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import Topbar from "../../components/dashboard/Topbar";

const ClientRequests = () => {
    const user = JSON.parse(localStorage.getItem("user")) || {};

    // Demo users
    const demoUsers = [
        "Parth",
        "Hemant",
        "Rahul",
        "Admin",
    ];

    const isDemoUser = demoUsers.includes(user.name);

    const [requests, setRequests] = useState(
        isDemoUser
            ? [
                {
                    id: 1,
                    talent: "Rahul Sharma",
                    role: "Photographer",
                    event: "Wedding",
                    date: "20 Jul 2026",
                    status: "Pending",
                },
                {
                    id: 2,
                    talent: "Priya Mehta",
                    role: "Singer",
                    event: "Corporate Event",
                    date: "25 Jul 2026",
                    status: "Approved",
                },
                {
                    id: 3,
                    talent: "Aman Patel",
                    role: "DJ",
                    event: "Birthday Party",
                    date: "28 Jul 2026",
                    status: "Rejected",
                },
            ]
            : []
    );

    const cancelRequest = (id) => {
        setRequests((prev) =>
            prev.map((request) =>
                request.id === id
                    ? { ...request, status: "Cancelled" }
                    : request
            )
        );
    };

    return (
        <div className="flex bg-gray-100 min-h-screen">

            <Sidebar role="client" />

            <main className="flex-1 p-8">

                <Topbar title="My Requests" />

                {/* Header */}
                <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl text-white p-8 mt-8">

                    <h2 className="text-3xl font-bold">
                        My Hiring Requests
                    </h2>

                    <p className="mt-3 text-purple-100">
                        Track the status of all your talent hiring requests.
                    </p>

                </div>

                {/* Table */}
                <div className="bg-white rounded-3xl shadow-lg mt-8 overflow-x-auto">

                    <table className="w-full">

                        <thead className="bg-gray-100">

                            <tr>
                                <th className="p-4 text-left">Talent</th>
                                <th className="p-4 text-left">Role</th>
                                <th className="p-4 text-left">Event</th>
                                <th className="p-4 text-left">Date</th>
                                <th className="p-4 text-center">Status</th>
                                <th className="p-4 text-center">Action</th>
                            </tr>

                        </thead>

                        <tbody>

                            {requests.length === 0 ? (

                                <tr>

                                    <td
                                        colSpan="6"
                                        className="text-center py-12 text-gray-500 font-semibold"
                                    >
                                        No hiring requests available.
                                    </td>

                                </tr>

                            ) : (

                                requests.map((request) => (

                                    <tr
                                        key={request.id}
                                        className="border-b hover:bg-gray-50"
                                    >

                                        <td className="p-4 font-medium">
                                            {request.talent}
                                        </td>

                                        <td className="p-4">
                                            {request.role}
                                        </td>

                                        <td className="p-4">
                                            {request.event}
                                        </td>

                                        <td className="p-4">
                                            {request.date}
                                        </td>

                                        <td className="p-4 text-center">

                                            <span
                                                className={`px-4 py-2 rounded-full text-sm font-semibold
                        ${request.status === "Approved"
                                                        ? "bg-green-100 text-green-600"
                                                        : request.status === "Pending"
                                                            ? "bg-yellow-100 text-yellow-600"
                                                            : request.status === "Rejected"
                                                                ? "bg-red-100 text-red-600"
                                                                : "bg-gray-200 text-gray-700"
                                                    }`}
                                            >
                                                {request.status}
                                            </span>

                                        </td>

                                        <td className="p-4 text-center">

                                            {request.status === "Pending" ? (

                                                <button
                                                    onClick={() => cancelRequest(request.id)}
                                                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                                                >
                                                    Cancel
                                                </button>

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

export default ClientRequests;