import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaUserTie,
  FaCamera,
  FaUserShield,
} from "react-icons/fa";
import { useState } from "react";
import { loginUser } from "../services/authService";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [role, setRole] = useState("client");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser({
        email,
        password,
      });

      const user = response.data.user;

      // Optional Role Check
      if (user.role !== role) {
        alert("Please select the correct role.");
        return;
      }

      localStorage.setItem("isLoggedIn", "true");

      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      localStorage.setItem("role", user.role);

      if (user.role === "client") {
        navigate("/client-dashboard");
      } else if (user.role === "talent") {
        navigate("/talent-dashboard");
      } else {
        navigate("/admin-dashboard");
      }

      window.location.reload();
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">

      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-full grid lg:grid-cols-2">

        {/* Left */}
        <div className="hidden lg:flex bg-gradient-to-br from-primary to-secondary text-white p-12 flex-col justify-center">

          <img
            src="/heroillustration.png"
            alt="Login"
            className="w-80 mx-auto mb-8"
          />

          <h2 className="text-4xl font-bold">
            Welcome to Eventra
          </h2>

          <p className="mt-5 leading-8 text-purple-100">
            Login as a Client, Talent or Admin to continue your journey with
            Eventra.
          </p>

        </div>

        {/* Right */}
        <div className="p-10">

          <h1 className="text-4xl font-bold">
            Login
          </h1>

          <p className="text-gray-500 mt-2 mb-8">
            Select your role and sign in
          </p>

          <form onSubmit={handleLogin} className="space-y-6">

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
                  placeholder="Enter your password"
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

            {/* Login As */}
            <div>

              <label className="font-medium block mb-3">
                Login As
              </label>

              <div className="grid grid-cols-3 gap-3">

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

                <button
                  type="button"
                  onClick={() => setRole("admin")}
                  className={`border rounded-xl p-4 transition ${role === "admin"
                      ? "bg-primary text-white border-primary"
                      : "hover:border-primary"
                    }`}
                >
                  <FaUserShield className="mx-auto text-2xl mb-2" />
                  Admin
                </button>

              </div>

            </div>

            <div className="flex justify-between text-sm">

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember Me
              </label>

              <button
                type="button"
                className="text-primary"
              >
                Forgot Password?
              </button>

            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-4 rounded-xl hover:bg-secondary transition"
            >
              Login
            </button>

          </form>

          <p className="text-center mt-8">

            Don't have an account?{" "}

            <Link
              to="/register"
              className="text-primary font-semibold"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </section>
  );
};

export default Login;