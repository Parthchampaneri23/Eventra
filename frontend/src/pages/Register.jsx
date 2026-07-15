import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaUserTie,
  FaCamera,
} from "react-icons/fa";
import { registerUser } from "../services/authService";

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("client");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await registerUser({
        name,
        email,
        password,
        role,
      });

      alert(response.data.message);

      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">

      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-full grid lg:grid-cols-2">

        {/* Left */}
        <div className="hidden lg:flex bg-gradient-to-br from-primary to-secondary text-white p-12 flex-col justify-center">

          <img
            src="/heroillustration.png"
            alt="Register"
            className="w-80 mx-auto mb-8"
          />

          <h2 className="text-4xl font-bold">
            Join Eventra
          </h2>

          <p className="mt-5 leading-8 text-purple-100">
            Create your account and start hiring talent, applying for events,
            or managing the Eventra platform.
          </p>

        </div>

        {/* Right */}
        <div className="p-10">

          <h1 className="text-4xl font-bold">
            Create Account
          </h1>

          <p className="text-gray-500 mt-2 mb-8">
            Register to get started
          </p>

          <form onSubmit={handleRegister} className="space-y-6">

            {/* Name */}
            <div>

              <label className="font-medium">
                Full Name
              </label>

              <div className="relative mt-2">

                <FaUser className="absolute left-4 top-4 text-gray-400" />

                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full border rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary outline-none"
                />

              </div>

            </div>

            {/* Email */}
            <div>

              <label className="font-medium">
                Email
              </label>

              <div className="relative mt-2">

                <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary outline-none"
                />

              </div>

            </div>

            {/* Password */}
            <div>

              <label className="font-medium">
                Password
              </label>

              <div className="relative mt-2">

                <FaLock className="absolute left-4 top-4 text-gray-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full border rounded-xl py-3 pl-12 pr-16 focus:ring-2 focus:ring-primary outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3 text-primary"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

            </div>

            {/* Register As */}
            <div>

              <label className="font-medium block mb-3">
                Register As
              </label>

              <div className="grid grid-cols-2 gap-3">

                <button
                  type="button"
                  onClick={() => setRole("client")}
                  className={`border rounded-xl p-4 transition ${role === "client"
                      ? "bg-primary text-white border-primary"
                      : "hover:border-primary"
                    }`}
                >
                  <FaUserTie className="mx-auto text-2xl mb-2" />
                  Client
                </button>

                <button
                  type="button"
                  onClick={() => setRole("talent")}
                  className={`border rounded-xl p-4 transition ${role === "talent"
                      ? "bg-primary text-white border-primary"
                      : "hover:border-primary"
                    }`}
                >
                  <FaCamera className="mx-auto text-2xl mb-2" />
                  Talent
                </button>

              </div>

            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-4 rounded-xl hover:bg-secondary transition"
            >
              Create Account
            </button>

          </form>

          <p className="text-center mt-8">

            Already have an account?{" "}

            <Link
              to="/login"
              className="text-primary font-semibold hover:underline"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </section>
  );
};

export default Register;