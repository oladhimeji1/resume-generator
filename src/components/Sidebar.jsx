import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar fixed left-0 top-0 bottom-0  w-full hidden  bg-emerald-900 min-h-screen p-4 md:w-1/5 md:block">
      <div className="flex flex-col justify-between min-h-full">
        <div className="mb-12">
          <Link to="/" className="font-bold text-white text-xl">
            Resume Wizard
          </Link>
        </div>

        <div className="flex flex-col gap-4">
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
