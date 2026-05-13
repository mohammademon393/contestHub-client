import { FaFacebookF, FaLinkedinIn, FaTrophy } from "react-icons/fa";
import { Link } from "react-router"; 
import logo from "../assets/logo.png";
import Logo from "../components/logo/Logo";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white border-t border-base-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <Link
              to="/"
              className="flex items-center gap-1 text-3xl font-extrabold"
            >
              <Logo></Logo>
            </Link>

            <p className="mt-4 text-gray-400 leading-relaxed">
              Discover creative contests, compete with talented people, showcase
              your skills, and win amazing prizes from around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-3 text-gray-400">
              <Link
                to="/"
                className="hover:text-primary transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/all-contests"
                className="hover:text-primary transition duration-300"
              >
                All Contests
              </Link>
              <Link
                to="/leaderboard"
                className="hover:text-primary transition duration-300"
              >
                Leaderboard
              </Link>
              <Link
                to="/community"
                className="hover:text-primary transition duration-300"
              >
                Community
              </Link>
            </div>
          </div>

          {/* Contest Categories */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contest Categories</h3>
            <div className="flex flex-col gap-3 text-gray-400">
              <p>Image Design</p>
              <p>Article Writing</p>
              <p>Business Ideas</p>
              <p>Gaming Reviews</p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer" // Security-r jonno eta add kora bhalo
                className="w-11 h-11 rounded-full bg-blue-700 text-white flex items-center justify-center hover:scale-110 transition duration-300 shadow-lg"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-blue-700 text-white flex items-center justify-center hover:scale-110 transition duration-300 shadow-lg"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
            <p className="mt-5 text-gray-400 italic text-sm">
              "Where talent meets opportunity."
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-base-200 mt-10 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} ContestHub. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
