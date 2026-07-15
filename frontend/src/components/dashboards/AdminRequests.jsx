import { useState } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import Topbar from "../../components/dashboard/Topbar";

const AdminRequests = () => {
    const [requests, setRequests] = useState([
        {
            id: 1,
            client: "ABC Events",
            talent: "Rahul Sharma",
            role: "Photographer",
            event: "Wedding",
            status: "Pending",
        },
        {
            id: 2,
            client: "Royal Weddings",
            talent: "Priya Mehta",
            role: "Singer",
            event: "Reception",
            status: "Approved",
        },
        {
            id: 3,
            client: "Dream Events",
            talent: "Aman Patel",
            role: "DJ",
            event: "Corporate Event",
            status: "Pending",
        },
    ]);

    const updateStatus = (id, status) => {
        setRequests((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, status } : item
            )
        );
    };

    return (
        <div className="flex bg-gray-100 min-h-screen">

            <Sidebar role="admin" />

            <main className="flex-1 p-8">

                <Topbar title="Manage Requests" />

                {/* Hero */}
                <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl text-white p-8 mt-8">

                    <h2 className="text-3xl font-bold">
                        Hiring Requests
                    </h2>

                    <p className="mt-3 text-purple-100">
                        Review all hiring requests submitted on the Eventra platform.
                    </p>

                </div>

                {/* Table */}
                <div className="bg-white rounded-3xl shadow-lg mt-8 overflow-x-auto">

                    <table className="w-full">

                        <thead className="bg-gray-100">

                            <tr>

                                <th className="p-4 text-left">Client</th>
                                <th className="p-4 text-left">Talent</th>
                                <th className="p-4 text-left">Role</th>
                                <th className="p-4 text-left">Event</th>
                                <th className="p-4 text-center">Status</th>
                                <th className="p-4 text-center">Action</th>

                            </tr>

                        </thead>

                        <tbody>

                            {requests.map((item) => (

                                <tr
                                    key={item.id}
                                    className="border-b hover:bg-gray-50"
                                >

                                    <td className="p-4">
                                        {item.client}
                                    </td>

                                    <td className="p-4">
                                        {item.talent}
                                    </td>

                                    <td className="p-4">
                                        {item.role}
                                    </td>

                                    <td className="p-4">
                                        {item.event}
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

                            ))}

                        </tbody>

                    </table>

                </div>

            </main>

        </div>
    );
};

export default AdminRequests;