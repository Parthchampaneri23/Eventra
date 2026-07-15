import { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

const Settings = () => {
  const user = JSON.parse(localStorage.getItem("user")) || {};

  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email || "");
  const [password, setPassword] = useState("");

  const handleSave = () => {
    const updatedUser = {
      ...user,
      name,
      email,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));

    alert("Settings updated successfully!");
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">

      <Sidebar role={user.role} />

      <main className="flex-1 p-8">

        <Topbar title="Settings" />

        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl text-white p-8 mt-8">

          <h2 className="text-3xl font-bold">
            Account Settings
          </h2>

          <p className="mt-3 text-purple-100">
            Manage your account information and preferences.
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">

          <div className="space-y-6">

            <div>
              <label className="font-semibold block mb-2">
                Full Name
              </label>

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded-xl p-3"
              />
            </div>

            <div>
              <label className="font-semibold block mb-2">
                Email
              </label>

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-xl p-3"
              />
            </div>

            <div>
              <label className="font-semibold block mb-2">
                Change Password
              </label>

              <input
                type="password"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-xl p-3"
              />
            </div>

            <div className="flex gap-4 pt-4">

              <button
                onClick={handleSave}
                className="bg-primary text-white px-8 py-3 rounded-xl hover:bg-secondary"
              >
                Save Changes
              </button>

              <button
                onClick={() => window.location.reload()}
                className="border px-8 py-3 rounded-xl"
              >
                Cancel
              </button>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
};

export default Settings;