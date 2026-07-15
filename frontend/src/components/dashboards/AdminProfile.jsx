import Sidebar from "../../components/dashboard/Sidebar";
import Topbar from "../../components/dashboard/Topbar";

const AdminProfile = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div className="flex bg-gray-100 min-h-screen">

            <Sidebar role="admin" />

            <main className="flex-1 p-8">

                <Topbar title="Admin Profile" />

                {/* Profile Card */}
                <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">

                    <div className="flex flex-col md:flex-row items-center gap-8">

                        {/* Avatar */}
                        <div>
                            <img
                                src="https://ui-avatars.com/api/?name=Administrator&background=7c3aed&color=fff&size=200"
                                alt="Admin"
                                className="w-40 h-40 rounded-full border-4 border-primary"
                            />
                        </div>

                        {/* Details */}
                        <div className="flex-1">

                            <h2 className="text-3xl font-bold">
                                {user?.name || "Administrator"}
                            </h2>

                            <p className="text-gray-500 mt-2">
                                {user?.email || "admin@eventra.com"}
                            </p>

                            <span className="inline-block mt-4 px-4 py-2 rounded-full bg-primary text-white capitalize">
                                {user?.role || "admin"}
                            </span>

                        </div>

                    </div>

                </div>

                {/* Information */}
                <div className="grid md:grid-cols-2 gap-8 mt-8">

                    {/* Personal Info */}
                    <div className="bg-white rounded-3xl shadow-lg p-6">

                        <h3 className="text-2xl font-bold mb-5">
                            Administrator Information
                        </h3>

                        <div className="space-y-4">

                            <p>
                                <strong>Name :</strong> {user?.name || "Administrator"}
                            </p>

                            <p>
                                <strong>Email :</strong> {user?.email || "admin@eventra.com"}
                            </p>

                            <p>
                                <strong>Role :</strong> {user?.role || "admin"}
                            </p>

                            <p>
                                <strong>Department :</strong> System Administration
                            </p>

                            <p>
                                <strong>Location :</strong> Eventra Headquarters
                            </p>

                        </div>

                    </div>

                    {/* Responsibilities */}
                    <div className="bg-white rounded-3xl shadow-lg p-6">

                        <h3 className="text-2xl font-bold mb-5">
                            Responsibilities
                        </h3>

                        <div className="flex flex-wrap gap-3">

                            <span className="bg-purple-100 text-primary px-4 py-2 rounded-full">
                                Manage Users
                            </span>

                            <span className="bg-purple-100 text-primary px-4 py-2 rounded-full">
                                Manage Events
                            </span>

                            <span className="bg-purple-100 text-primary px-4 py-2 rounded-full">
                                Verify Talents
                            </span>

                            <span className="bg-purple-100 text-primary px-4 py-2 rounded-full">
                                View Reports
                            </span>

                            <span className="bg-purple-100 text-primary px-4 py-2 rounded-full">
                                Platform Settings
                            </span>

                        </div>

                    </div>

                </div>

                {/* About */}
                <div className="bg-white rounded-3xl shadow-lg p-6 mt-8">

                    <h3 className="text-2xl font-bold mb-4">
                        About Administrator
                    </h3>

                    <p className="text-gray-600 leading-8">
                        The administrator manages the entire Eventra platform, including
                        user accounts, event listings, talent verification, hiring requests,
                        and overall platform operations. This dashboard provides complete
                        control over the system to ensure smooth platform management.
                    </p>

                </div>

            </main>

        </div>
    );
};

export default AdminProfile;