import Sidebar from "../../components/dashboard/Sidebar";
import Topbar from "../../components/dashboard/Topbar";

const ClientProfile = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div className="flex bg-gray-100 min-h-screen">

            <Sidebar role="client" />

            <main className="flex-1 p-8">

                <Topbar title="My Profile" />

                <div className="bg-white rounded-3xl shadow p-8 mt-8">

                    <h2 className="text-3xl font-bold mb-6">
                        Client Profile
                    </h2>

                    <div className="space-y-4">

                        <p>
                            <strong>Name:</strong> {user?.name}
                        </p>

                        <p>
                            <strong>Email:</strong> {user?.email}
                        </p>

                        <p>
                            <strong>Role:</strong> {user?.role}
                        </p>

                    </div>

                </div>

            </main>

        </div>
    );
};

export default ClientProfile;