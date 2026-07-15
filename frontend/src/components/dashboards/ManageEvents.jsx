import { useState } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import Topbar from "../../components/dashboard/Topbar";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const ManageEvents = () => {
    const [events, setEvents] = useState([
        {
            id: 1,
            title: "Wedding Ceremony",
            location: "Mumbai",
            date: "20 Jul 2026",
            status: "Active",
        },
        {
            id: 2,
            title: "Corporate Meetup",
            location: "Pune",
            date: "26 Jul 2026",
            status: "Upcoming",
        },
        {
            id: 3,
            title: "Music Festival",
            location: "Goa",
            date: "05 Aug 2026",
            status: "Completed",
        },
    ]);

    const deleteEvent = (id) => {
        setEvents(events.filter((event) => event.id !== id));
    };

    return (
        <div className="flex bg-gray-100 min-h-screen">

            <Sidebar role="admin" />

            <main className="flex-1 p-8">

                <Topbar title="Manage Events" />

                <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl text-white p-8 mt-8">

                    <h2 className="text-3xl font-bold">
                        Manage Events
                    </h2>

                    <p className="mt-3 text-purple-100">
                        Create, update and manage all events available on Eventra.
                    </p>

                </div>

                <div className="flex justify-end mt-8">

                    <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl hover:bg-secondary transition">

                        <FaPlus />

                        Add Event

                    </button>

                </div>

                <div className="bg-white rounded-3xl shadow-lg mt-6 overflow-x-auto">

                    <table className="w-full">

                        <thead className="bg-gray-100">

                            <tr>

                                <th className="p-4 text-left">Event</th>
                                <th className="p-4 text-left">Location</th>
                                <th className="p-4 text-left">Date</th>
                                <th className="p-4 text-center">Status</th>
                                <th className="p-4 text-center">Actions</th>

                            </tr>

                        </thead>

                        <tbody>

                            {events.map((event) => (

                                <tr
                                    key={event.id}
                                    className="border-b hover:bg-gray-50"
                                >

                                    <td className="p-4 font-semibold">
                                        {event.title}
                                    </td>

                                    <td className="p-4">
                                        {event.location}
                                    </td>

                                    <td className="p-4">
                                        {event.date}
                                    </td>

                                    <td className="text-center">

                                        <span
                                            className={`px-4 py-2 rounded-full text-sm font-semibold ${event.status === "Active"
                                                    ? "bg-green-100 text-green-600"
                                                    : event.status === "Upcoming"
                                                        ? "bg-yellow-100 text-yellow-600"
                                                        : "bg-gray-200 text-gray-700"
                                                }`}
                                        >
                                            {event.status}
                                        </span>

                                    </td>

                                    <td className="text-center">

                                        <div className="flex justify-center gap-3">

                                            <button className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">

                                                <FaEdit />

                                            </button>

                                            <button
                                                onClick={() => deleteEvent(event.id)}
                                                className="bg-red-500 text-white p-3 rounded-lg hover:bg-red-600"
                                            >

                                                <FaTrash />

                                            </button>

                                        </div>

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

export default ManageEvents;