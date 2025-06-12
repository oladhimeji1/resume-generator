import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar fixed left-0 top-0 bottom-0  w-full hidden  bg-emerald-900 min-h-screen md:w-1/5 md:block">
      <div className="flex flex-col justify-between min-h-full">
        <div className="mb-12">
          <Link to="/" className="font-bold p-4 text-white text-xl block">
            <img src="/logo_1.png" alt="logo" width="200px" />
          </Link>
          <div className="mt-10">
            <Link to="/" className="py-3 text-white font-semibold text-lg block hover:bg-emerald-500 hover:pl-6 pl-4 transition-all duration-500 border-b">Personal Information</Link>
          </div>
          <div className="">
            <Link to="/" className="py-3 text-white font-semibold text-lg block hover:bg-emerald-500 hover:pl-6 pl-4 transition-all duration-500 border-b">Work Experience</Link>
          </div>
          <div className="">
            <Link to="/" className="py-3 text-white font-semibold text-lg block hover:bg-emerald-500 hover:pl-6 pl-4 transition-all duration-500 border-b">Education</Link>
          </div>
          <div className="">
            <Link to="/" className="py-3 text-white font-semibold text-lg block hover:bg-emerald-500 hover:pl-6 pl-4 transition-all duration-500 border-b">Skills</Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-4">
          <div className="flex flex-col text-amber-500 font-bold">
            <Link>Terms and Conditions</Link>
            <Link>Privacy Policy</Link>
            <Link>Contact us</Link>
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
