import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaPaperPlane,
} from "react-icons/fa6";
import { useState } from "react";

const StayConnected = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    const emailRegex =
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setSubscribed(true);
    setEmail("");

    setTimeout(() => {
      setSubscribed(false);
    }, 3000);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4">

        <div className="max-w-4xl mx-auto text-center">

          <span className="bg-white/20 px-4 py-2 rounded-full">
            Join Our Community
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6">
            Stay Connected with Eventra
          </h2>

          <p className="mt-5 text-lg text-purple-100">
            Get the latest events, talented professionals,
            platform updates and exclusive opportunities directly
            in your inbox.
          </p>

          {/* Newsletter */}
          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-4 rounded-xl text-gray-800 outline-none"
            />

            <button
              type="submit"
              className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2"
            >
              Subscribe
              <FaPaperPlane />
            </button>
          </form>

          {subscribed && (
            <p className="mt-5 text-green-200 font-medium">
              ✅ Thank you for subscribing to Eventra!
            </p>
          )}

          {/* Social Icons */}
          <div className="flex justify-center gap-5 mt-12">

            <a
              href="#"
              className="w-14 h-14 rounded-full bg-white/20 hover:bg-white hover:text-primary transition flex items-center justify-center text-xl"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-14 h-14 rounded-full bg-white/20 hover:bg-white hover:text-primary transition flex items-center justify-center text-xl"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-14 h-14 rounded-full bg-white/20 hover:bg-white hover:text-primary transition flex items-center justify-center text-xl"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="w-14 h-14 rounded-full bg-white/20 hover:bg-white hover:text-primary transition flex items-center justify-center text-xl"
            >
              <FaXTwitter />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default StayConnected;