import { useState } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import Topbar from "../../components/dashboard/Topbar";
import { FaSearch, FaTrash } from "react-icons/fa";

const ManageUsers = () => {
    const [users, setUsers] = useState([
        {
            id: 1,
            name: "Parth Champaneri",
            email: "parth@gmail.com",
            role: "Client",
        },
        {
            id: 2,
            name: "Rahul Sharma",
            email: "rahul@gmail.com",
            role: "Talent",
        },
        {
            id: 3,
            name: "Priya Mehta",
            email: "priya@gmail.com",
            role: "Talent",
        },
        {
            id: 4,
            name: "Aman Patel",
            email: "aman@gmail.com",
            role: "Client",
        },
    ]);

    const [search, setSearch] = useState("");

    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    const filteredUsers = users.filter(
        (user) =>
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase()) ||
            user.role.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="flex bg-gray-100 min-h-screen">

            <Sidebar role="admin" />

            <main className="flex-1 p-8">

                <Topbar title="Manage Users" />

                {/* Hero */}
                <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl text-white p-8 mt-8">

                    <h2 className="text-3xl font-bold">
                        Manage Users
                    </h2>

                    <p className="mt-3 text-purple-100">
                        View, search and manage all registered users.
                    </p>

                </div>

                {/* Search */}
                <div className="bg-white rounded-3xl shadow-lg p-6 mt-8">

                    <div className="flex flex-col md:flex-row justify-between gap-4">

                        <div className="relative w-full md:w-96">

                            <FaSearch className="absolute left-4 top-4 text-gray-400" />

                            <input
                                type="text"
                                placeholder="Search users..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full border rounded-xl py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary"
                            />

                        </div>

                        <div className="bg-primary text-white px-6 py-3 rounded-xl font-semibold">
                            Total Users : {filteredUsers.length}
                        </div>

                    </div>

                </div>

                {/* Users Table */}
                <div className="bg-white rounded-3xl shadow-lg mt-8 overflow-x-auto">

                    <table className="w-full">

                        <thead className="bg-gray-100">

                            <tr>

                                <th className="text-left p-4">Name</th>
                                <th className="text-left p-4">Email</th>
                                <th className="text-left p-4">Role</th>
                                <th className="text-center p-4">Action</th>

                            </tr>

                        </thead>

                        <tbody>

                            {filteredUsers.length > 0 ? (
                                filteredUsers.map((user) => (

                                    <tr
                                        key={user.id}
                                        className="border-b hover:bg-gray-50"
                                    >

                                        <td className="p-4 font-medium">
                                            {user.name}
                                        </td>

                                        <td className="p-4">
                                            {user.email}
                                        </td>

                                        <td className="p-4">

                                            <span
                                                className={`px-3 py-1 rounded-full text-sm font-semibold
                        ${user.role === "Admin"
                                                        ? "bg-red-100 text-red-600"
                                                        : user.role === "Talent"
                                                            ? "bg-green-100 text-green-600"
                                                            : "bg-blue-100 text-blue-600"
                                                    }`}
                                            >
                                                {user.role}
                                            </span>

                                        </td>

                                        <td className="p-4 text-center">

                                            <button
                                                onClick={() => deleteUser(user.id)}
                                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition flex items-center gap-2 mx-auto"
                                            >
                                                <FaTrash />
                                                Delete
                                            </button>

                                        </td>

                                    </tr>

                                ))
                            ) : (
                                <tr>

                                    <td
                                        colSpan="4"
                                        className="text-center py-10 text-gray-500"
                                    >
                                        No users found.
                                    </td>

                                </tr>
                            )}

                        </tbody>

                    </table>

                </div>

            </main>

        </div>
    );
};

export default ManageUsers;