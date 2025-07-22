import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Address */}
        <div>
          {/* <img
            src="/resume_logo_green.jpg"
            alt="Intelligent CV 247 Logo"
            className="mb-4"
            width={180}
          /> */}
          <h4 className="cursor-pointer uppercase text-2xl  font-bold text-emerald-600">
            IntelligentCV 247
          </h4>
          <p>Build. Scale. Standout</p>
          {/* <p>Suite 116 #1040</p>
          <p>Cornelius, NC 28031</p>
          <p>United States</p> */}

          <div className="mt-6">
            <p className="font-semibold">Phone number</p>
            <p className="text-sm">+234 7069223477</p>
            <p className="font-semibold mt-4">Email</p>
            <p className="text-sm">intelligentcv247@gmail.com</p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <Link
                to="https://facebook.com"
                target="_blank"
                title="Visit our Facebook Page"
              >
                <FaFacebookSquare className="h-6 w-6" />
              </Link>
              <Link
                target="_blank"
                to="https://instagram.com"
                title="Visit our Instagram Page"
              >
                <FaInstagramSquare className="h-6 w-6" />
              </Link>
              <Link
                target="_blank"
                to="https://telegram.com"
                title="Visit our Telegram Channel"
              >
                <FaTelegramPlane className="h-6 w-6" />
              </Link>
              <Link
                target="_blank"
                to="https://linkedin.com"
                title="Connect with us on LinkedIn"
              >
                <FaLinkedinIn className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-4">Quick links</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/">Pricing</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
            {/* <li>
              <Link to="/about">About us</Link>
            </li> */}
            <li>
              <Link to="/">FAQ</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-bold text-lg mb-4">Social</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="">Facebook</Link>
            </li>
            <li>
              <Link to="">Instagram</Link>
            </li>
            <li>
              <Link to="">LinkedIn</Link>
            </li>
            <li>
              <Link to="">Twitter</Link>
            </li>
            <li>
              <Link to="">Youtube</Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-bold text-lg mb-4">Legal</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/policy">Terms of service</Link>
            </li>
            <li>
              <Link to="/policy">Privacy policy</Link>
            </li>
            <li>
              <Link to="">Cookie policy</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-xs mt-10 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} Intelligentcv247. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
