import Sidebar from "../../components/dashboard/Sidebar";
import Topbar from "../../components/dashboard/Topbar";

const TalentProfile = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div className="flex bg-gray-100 min-h-screen">

            <Sidebar role="talent" />

            <main className="flex-1 p-8">

                <Topbar title="Talent Profile" />

                {/* Profile Card */}
                <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">

                    <div className="flex flex-col md:flex-row items-center gap-8">

                        {/* Profile Image */}
                        <div>
                            <img
                                src="https://ui-avatars.com/api/?name=Talent&background=7c3aed&color=fff&size=200"
                                alt="Profile"
                                className="w-40 h-40 rounded-full object-cover border-4 border-primary"
                            />
                        </div>

                        {/* User Details */}
                        <div className="flex-1">

                            <h2 className="text-3xl font-bold">
                                {user?.name || "Talent User"}
                            </h2>

                            <p className="text-gray-500 mt-2">
                                {user?.email}
                            </p>

                            <span className="inline-block mt-4 px-4 py-2 rounded-full bg-primary text-white capitalize">
                                {user?.role}
                            </span>

                        </div>

                    </div>

                </div>

                {/* Information */}
                <div className="grid md:grid-cols-2 gap-8 mt-8">

                    <div className="bg-white rounded-3xl shadow-lg p-6">

                        <h3 className="text-2xl font-bold mb-5">
                            Personal Information
                        </h3>

                        <div className="space-y-4">

                            <p>
                                <strong>Name :</strong> {user?.name}
                            </p>

                            <p>
                                <strong>Email :</strong> {user?.email}
                            </p>

                            <p>
                                <strong>Role :</strong> {user?.role}
                            </p>

                            <p>
                                <strong>Experience :</strong> 5 Years
                            </p>

                            <p>
                                <strong>Location :</strong> Mumbai
                            </p>

                        </div>

                    </div>

                    <div className="bg-white rounded-3xl shadow-lg p-6">

                        <h3 className="text-2xl font-bold mb-5">
                            Professional Skills
                        </h3>

                        <div className="flex flex-wrap gap-3">

                            <span className="bg-purple-100 text-primary px-4 py-2 rounded-full">
                                Photography
                            </span>

                            <span className="bg-purple-100 text-primary px-4 py-2 rounded-full">
                                Event Coverage
                            </span>

                            <span className="bg-purple-100 text-primary px-4 py-2 rounded-full">
                                Video Editing
                            </span>

                            <span className="bg-purple-100 text-primary px-4 py-2 rounded-full">
                                Lightroom
                            </span>

                            <span className="bg-purple-100 text-primary px-4 py-2 rounded-full">
                                Photoshop
                            </span>

                        </div>

                    </div>

                </div>

                {/* About */}
                <div className="bg-white rounded-3xl shadow-lg p-6 mt-8">

                    <h3 className="text-2xl font-bold mb-4">
                        About Me
                    </h3>

                    <p className="text-gray-600 leading-8">
                        I am a passionate event professional with experience in
                        photography, event management and creative media production.
                        I enjoy working with clients to deliver memorable experiences
                        and high-quality services for weddings, corporate events,
                        concerts and festivals.
                    </p>

                </div>

            </main>

        </div>
    );
};

export default TalentProfile;