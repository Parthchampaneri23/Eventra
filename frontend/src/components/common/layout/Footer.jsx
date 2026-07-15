import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">

            <img
              src="/logo.png"
              alt="Eventra"
              className="h-12 mb-5"
            />

            <p className="leading-7 text-gray-400 max-w-sm">
              Eventra connects talented professionals with event organizers,
              making collaboration simple, fast, and reliable.
            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-primary transition flex items-center justify-center"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-primary transition flex items-center justify-center"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-primary transition flex items-center justify-center"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-primary transition flex items-center justify-center"
              >
                <FaGithub />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-white text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <NavLink
                  to="/"
                  className="hover:text-white transition"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/events"
                  className="hover:text-white transition"
                >
                  Events
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/talent"
                  className="hover:text-white transition"
                >
                  Talent
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className="hover:text-white transition"
                >
                  About
                </NavLink>
              </li>

            </ul>

          </div>

          {/* Company */}
          <div>

            <h3 className="text-white text-lg font-semibold mb-5">
              Company
            </h3>

            <ul className="space-y-3">

              <li>
                <NavLink
                  to="/about"
                  className="hover:text-white transition"
                >
                  About Us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className="hover:text-white transition"
                >
                  Contact
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/privacy-policy"
                  className="hover:text-white transition"
                >
                  Privacy Policy
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/terms-conditions"
                  className="hover:text-white transition"
                >
                  Terms & Conditions
                </NavLink>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-white text-lg font-semibold mb-5">
              Contact
            </h3>

            <ul className="space-y-3">

              <li>📧 support@eventra.com</li>

              <li>📞 +91 98765 43210</li>

              <li>📍 Mumbai, Maharashtra, India</li>

            </ul>

          </div>

        </div>

        <hr className="border-slate-700 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-500">
            © 2026 Eventra. All Rights Reserved.
          </p>

          <p className="text-sm text-gray-500">
            Connect. Create. Celebrate.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;