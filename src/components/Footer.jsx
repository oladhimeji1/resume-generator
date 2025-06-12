import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Address */}
        <div>
          <img src="/logo_1.png" alt="Skipmatrix Logo" className="mb-4" width={180} />
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
              <Link to="">
                <img src="/facebook-icon.svg" alt="Facebook" className="h-6 w-6" />
              </Link>
              <Link to="">
                <img src="/instagram-icon.svg" alt="Instagram" className="h-6 w-6" />
              </Link>
              <Link to="">
                <img src="/linkedin-icon.svg" alt="LinkedIn" className="h-6 w-6" />
              </Link>
              <Link to="">
                <img src="/twitter-icon.svg" alt="Twitter" className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-4">Quick links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="">Pricing</Link></li>
            <li><Link to="">Resources</Link></li>
            <li><Link to="">About us</Link></li>
            <li><Link to="">FAQ</Link></li>
            <li><Link to="">Contact us</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-bold text-lg mb-4">Social</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="">Facebook</Link></li>
            <li><Link to="">Instagram</Link></li>
            <li><Link to="">LinkedIn</Link></li>
            <li><Link to="">Twitter</Link></li>
            <li><Link to="">Youtube</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-bold text-lg mb-4">Legal</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="">Terms of service</Link></li>
            <li><Link to="">Privacy policy</Link></li>
            <li><Link to="">Cookie policy</Link></li>
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