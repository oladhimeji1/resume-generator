import { Link } from "react-router-dom";


export default function Sidebar({ handleStep, step }) {

  return (
    <div className="sidebar fixed left-0 top-0 bottom-0  w-full hidden  bg-emerald-900 min-h-screen md:w-1/5 md:block">
      <div className="flex flex-col justify-between min-h-full">
        <div className="mb-12">
          <Link to="/" className="font-bold p-4 text-white text-xl block">
            <img src="/resume_logo_green.jpg" alt="logo" width="230px" />
          </Link>
          <div className="mt-10">

            <Link
              onClick={() => handleStep(1)}
              className={`py-3 ${
                step == 1 ? "bg-white" : "text-white"
              } font-semibold text-lg block hover:bg-emerald-800 hover:text-white hover:pl-6 pl-4 transition-all duration-500 border-b border-b-gray-500`}
            >
              Personal Information
            </Link>
          </div>
          <div className="">
            <Link
              onClick={() => handleStep(2)}
              className={`py-3 ${
                step == 2 ? "bg-white" : "text-white"
              } font-semibold text-lg block hover:bg-emerald-800 hover:text-white hover:pl-6 pl-4 transition-all duration-500 border-b border-b-gray-500`}
            >
              Work Experience
            </Link>
          </div>
          <div className="">
            <Link
              onClick={() => handleStep(3)}
              className={`py-3 ${
                step == 3 ? "bg-white" : "text-white"
              } font-semibold text-lg block hover:bg-emerald-800 hover:text-white hover:pl-6 pl-4 transition-all duration-500 border-b border-b-gray-500`}
            >
              Education
            </Link>
          </div>
          <div className="">
            <Link
              onClick={() => handleStep(4)}
              className={`py-3 ${
                step == 4 ? "bg-white" : "text-white"
              } font-semibold text-lg block hover:bg-emerald-800 hover:text-white hover:pl-6 pl-4 transition-all duration-500 border-b border-b-gray-500`}
            >
              Skills
            </Link>
          </div>
          <div className="">
            <Link
              onClick={() => handleStep(5)}
              className={`py-3 ${
                step == 5 ? "bg-white" : "text-white"
              } font-semibold text-lg block hover:bg-emerald-800 hover:text-white hover:pl-6 pl-4 transition-all duration-500 border-b border-b-gray-500`}
            >
              Reference
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-4">
          <div className="flex flex-col text-amber-500 font-bold">
            <Link target="_blank" title="Terms and Conditions" to="/policy">
              Terms and Conditions
            </Link>
            <Link target="_blank" title="Privacy Policy" to="/policy">
              Privacy Policy
            </Link>
            <Link target="_blank" title="Contact us" to="/contact">
              Contact us
            </Link>
          </div>
          <div>
            <p className="text-white text-xs md:text-sm">
              &copy; {new Date().getFullYear()} Resume Wizard. All Right
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
