import { useState } from "react";
import { Link } from "react-router-dom";
import arrowup from "../assets/images/svg/chevron-up-outline.svg";
import arrowdown from "../assets/images/svg/chevron-down-outline.svg";

export default function Navbar() {
  const [navBarOpen, setNavBarOpen] = useState(true);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [ResourcesOpen, setResourcesOpen] = useState(false);

  const toggleNavbar = () => {
    setNavBarOpen(!navBarOpen);
  };

  const toggleMobileResources = () => {
    setMobileResourcesOpen(!mobileResourcesOpen);
  };

  const toggleResources = () => {
    setResourcesOpen(!ResourcesOpen);
  };

  return (
    <nav className="bg-white h-20 shadow-md p-6 flex items-center justify-between fixed top-5 left-0 right-0 w-[90%] mx-auto rounded-full z-[99] font-semibold">
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-10">
        <Link
          to="/build-resume/resume-templates"
          className="hover:text-emerald-900 border-b-2 border-transparent hover:border-emerald-800 transition"
        >
          Template
        </Link>

        {/* Resources Dropdown */}
        <div className="relative" onClick={toggleResources}>
          <button className="hover:text-emerald-900 border-b-2 border-transparent hover:border-emerald-800 transition inline">
            Resources{" "}
            {!ResourcesOpen ? (
              <img src={arrowdown} alt="logo" width="20px" className="inline" />
            ) : (
              <img src={arrowup} alt="logo" width="20px" className="inline" />
            )}
          </button>
          <div
            className={`absolute ${
              !ResourcesOpen ? "hidden" : "grid"
            } top-full mt-3 left-0  bg-white shadow-xl rounded-xl p-4 z-50 w-[320px] grid-cols-1 gap-3 text-sm`}
          >
            <Link
              to="/tools/ai-resume-generator"
              className="hover:text-emerald-900"
            >
              AI Resume Generator
            </Link>
            <Link
              to="/tools/ai-resume-refactor"
              className="hover:text-emerald-900"
            >
              AI Resume Refactoring
            </Link>
            <Link
              to="/tools/cover-letter-generator"
              className="hover:text-emerald-900"
            >
              Cover Letter Generator
            </Link>
            <Link
              to="/tools/resume-summary-writer"
              className="hover:text-emerald-900"
            >
              Resume Summary Writer
            </Link>
            <Link
              to="/tools/job-description-matcher"
              className="hover:text-emerald-900"
            >
              Job Description Matcher
            </Link>
            <Link
              to="/tools/resume-pdf-optimizer"
              className="hover:text-emerald-900"
            >
              Resume PDF Optimizer
            </Link>
          </div>
        </div>

        {/* <Link
          to="/pricing"
          className="hover:text-emerald-900 border-b-2 border-transparent hover:border-emerald-800 transition"
        >
          Pricing
        </Link> */}
      </div>

      {/* Logo */}
      <Link
        to="/"
        className="text-3xl font-[poppins] font-bold text-emerald-900"
      >
        <img src="/logo_1.png" alt="logo" width="200px" />
      </Link>

      {/* Desktop Right Links */}
      <div className="hidden md:flex justify-center items-center space-x-10">
        <Link
          to="/contact"
          className="hover:text-emerald-900 border-b-2 border-transparent hover:border-emerald-800 transition"
        >
          Contact
        </Link>

        <Link
          to="/signup"
          className="bg-emerald-900 text-white rounded-full px-4 py-2 flex items-center justify-center cursor-pointer hover:bg-green-800 transition duration-300"
        >
          Sign Up
        </Link>
      </div>

      {/* Hamburger Button */}
      <button
        onClick={toggleNavbar}
        className="text-2xl bg-emerald-900 text-white rounded-md px-4 py-2 flex items-center justify-center cursor-pointer md:hidden"
      >
        &#9776;
      </button>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`${
          navBarOpen ? "-translate-y-96" : "-translate-y-0"
        } absolute bg-white top-20 transition-transform duration-300 left-0 right-0 min-h-50 shadow-lg p-6 flex flex-col items-center justify-center space-y-4 md:hidden`}
      >
        {/* <Link to="/" className="hover:text-emerald-900">
          Home
        </Link> */}
        <Link
          to="/build-resume/resume-templates"
          className="hover:text-emerald-900"
        >
          Template
        </Link>

        {/* Mobile Resources Toggle */}
        <button
          onClick={toggleMobileResources}
          className="hover:text-emerald-900 focus:outline-none"
        >
          Resources {mobileResourcesOpen ? "▲" : "▼"}
        </button>
        {mobileResourcesOpen && (
          <div className="flex flex-col space-y-2 text-sm">
            <Link
              to="/tools/ai-resume-generator"
              className="hover:text-emerald-900"
            >
              AI Resume Generator
            </Link>
            <Link
              to="/tools/ai-resume-refactor"
              className="hover:text-emerald-900"
            >
              AI Resume Refactoring
            </Link>
            <Link
              to="/tools/cover-letter-generator"
              className="hover:text-emerald-900"
            >
              Cover Letter Generator
            </Link>
            <Link
              to="/tools/resume-summary-writer"
              className="hover:text-emerald-900"
            >
              Resume Summary Writer
            </Link>
            <Link
              to="/tools/job-description-matcher"
              className="hover:text-emerald-900"
            >
              Job Description Matcher
            </Link>
            <Link
              to="/tools/resume-pdf-optimizer"
              className="hover:text-emerald-900"
            >
              Resume PDF Optimizer
            </Link>
          </div>
        )}

        <Link to="/pricing" className="hover:text-emerald-900">
          Pricing
        </Link>
        <Link to="/contact" className="hover:text-emerald-900">
          Contact
        </Link>
        <Link to="/login" className="hover:text-emerald-900">
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-emerald-900 text-white rounded-full px-4 py-2 flex items-center justify-center cursor-pointer hover:bg-green-800 transition duration-300"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
