import Sidebar from "../../components/dashboard/Sidebar";
import Topbar from "../../components/dashboard/Topbar";
import StatCard from "../../components/dashboard/StatCard";

import {
    FaUsers,
    FaUserTie,
    FaCalendarAlt,
    FaClipboardList,
    FaCheckCircle,
    FaClock,
} from "react-icons/fa";

const ViewReports = () => {
    return (
        <div className="flex bg-gray-100 min-h-screen">

            <Sidebar role="admin" />

            <main className="flex-1 p-8">

                <Topbar title="View Reports" />

                <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl text-white p-8 mt-8">

                    <h2 className="text-3xl font-bold">
                        System Reports
                    </h2>

                    <p className="mt-3 text-purple-100">
                        Monitor Eventra platform performance and statistics.
                    </p>

                </div>

                {/* Statistics */}

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">

                    <StatCard
                        title="Total Users"
                        value="120"
                        icon={<FaUsers />}
                        color="bg-purple-600"
                    />

                    <StatCard
                        title="Talents"
                        value="60"
                        icon={<FaUserTie />}
                        color="bg-blue-600"
                    />

                    <StatCard
                        title="Events"
                        value="18"
                        icon={<FaCalendarAlt />}
                        color="bg-green-600"
                    />

                    <StatCard
                        title="Requests"
                        value="75"
                        icon={<FaClipboardList />}
                        color="bg-orange-500"
                    />

                    <StatCard
                        title="Approved"
                        value="50"
                        icon={<FaCheckCircle />}
                        color="bg-green-500"
                    />

                    <StatCard
                        title="Pending"
                        value="20"
                        icon={<FaClock />}
                        color="bg-yellow-500"
                    />

                </div>

                {/* Summary */}

                <div className="bg-white rounded-3xl shadow-lg mt-8 p-8">

                    <h2 className="text-2xl font-bold mb-6">
                        Platform Summary
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">

                        <div className="border rounded-2xl p-6">

                            <h3 className="font-bold text-lg">
                                User Growth
                            </h3>

                            <p className="text-gray-600 mt-3">
                                Total registered users continue to grow steadily with
                                increased client and talent registrations every month.
                            </p>

                        </div>

                        <div className="border rounded-2xl p-6">

                            <h3 className="font-bold text-lg">
                                Hiring Activity
                            </h3>

                            <p className="text-gray-600 mt-3">
                                Most hiring requests are successfully approved,
                                demonstrating strong engagement between clients and
                                talented professionals.
                            </p>

                        </div>

                        <div className="border rounded-2xl p-6">

                            <h3 className="font-bold text-lg">
                                Event Performance
                            </h3>

                            <p className="text-gray-600 mt-3">
                                Weddings and corporate events remain the most popular
                                event categories on the Eventra platform.
                            </p>

                        </div>

                        <div className="border rounded-2xl p-6">

                            <h3 className="font-bold text-lg">
                                Overall Status
                            </h3>

                            <p className="text-green-600 font-semibold mt-3">
                                ✔ Platform Running Successfully
                            </p>

                        </div>

                    </div>

                </div>

            </main>

        </div>
    );
};

export default ViewReports;