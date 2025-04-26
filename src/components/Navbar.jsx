import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navBarOpen, setNavBarOpen] = useState(true);
  const toggleNavbar = () => {
    setNavBarOpen(!navBarOpen);
  };
  return (
    <nav className="bg-white h-20 shadow-md p-6 flex items-center justify-between fixed top-0 left-0 right-0 w-full">
      <Link
        to="/"
        className="text-3xl font-[poppins] font-bold text-emerald-900 "
      >
        Resume Wizard
      </Link>

      <button
        onClick={toggleNavbar}
        className="text-2xl bg-emerald-900 text-white rounded-md px-4 py-2 flex align-items-center justify-content-center cursor-pointer md:hidden"
      >
        &#9776;
      </button>

      <div className="hidden md:flex space-x-10">
        <Link to="/" className="hover:text-emerald-900">
          Home
        </Link>
        <Link
          to="/build-resume/resume-templates"
          className="hover:text-emerald-900"
        >
          Template
        </Link>
        <Link to="/pricing" className="hover:text-emerald-900">
          Pricing
        </Link>
        <Link to="/contact" className="hover:text-emerald-900">
          Contact
        </Link>
      </div>

      <div
        id="mobile-menu"
        className={`${
          navBarOpen ? "-translate-y-96" : "-translate-y-0"
        } absolute bg-white   top-20 transition left-0 right-0 min-h-50 shadow-lg p-6 flex flex-col items-center justify-center space-y-4 md:hidden`}
      >
        <Link to="/" className="hover:text-emerald-900">
          Home
        </Link>
        <Link to="/ResumeTemplates" className="hover:text-emerald-900">
          Template
        </Link>
        <Link to="/pricing" className="hover:text-emerald-900">
          Pricing
        </Link>
        <Link to="/contact" className="hover:text-emerald-900">
          Contact
        </Link>
      </div>
    </nav>
  );
}
