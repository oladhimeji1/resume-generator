import { Link } from "react-router-dom";
import ResumeBuildImage from "../assets/images/svg/resume-build.svg";
import ResumeBuildUploadImg from "../assets/images/upload-resume.png";

export default function ResumeBuild() {
  return (
    <section className="max-w-7xl p-6 mx-auto flex flex-col justify-between min-h-screen bg-white">
      <div>
        <Link to="/" className="font-bold text-cyan-950 text-xl">
          Intelligent CV 247
        </Link>
      </div>

      <div className="grid grid-col-1 items-center  md:grid-cols-2 gap-10">
        <div className="flex-1/2">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-8 max-w-[400px]">
            Just three simple steps
          </h1>

          <div className="flex flex-col gap-6 ">
            <div className="flex gap-8 items-center">
              <div className="flex items-center justify-center bg-blue-500 py-2 px-4 rounded-full text-white font-bold">
                <p>01</p>
              </div>
              <p>
                <span className="font-bold text-blue-500">Select</span> a
                template from our library of professional designs
              </p>
            </div>
            <div className="flex gap-8 items-center">
              <div className="flex items-center justify-center bg-blue-500 py-2 px-4 rounded-full text-white font-bold">
                <p>02</p>
              </div>
              <p>
                <span className="font-bold text-blue-500">Build</span> a your
                resume with our industry-specific bullets points
              </p>
            </div>
            <div className="flex gap-8 items-center">
              <div className="flex items-center justify-center bg-blue-500 py-2 px-4 rounded-full text-white font-bold">
                <p>03</p>
              </div>
              <p>
                <span className="font-bold text-blue-500">Customize</span> the
                details and wrap it up. You're ready to send!
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1/2 flex flex-col items-center justify-center">
          <img src={ResumeBuildUploadImg} alt="" />
          <div className="flex flex-col gap-6">
            <Link
              className="text-center py-4 px-8 bg-emerald-600 text-white font-bold rounded-full transition hover:bg-blue-700 focus:bg-blue-900 focus:border-dotted border-white"
              to="/build-resume/resume-templates"
            >
              Next
            </Link>
            <p className="text-sm text-zinc-600 text-center mb-8">
              By clicking above, you agree to our {""}
              <a href="#" className="underline text-blue-500 font-bold">
                Terms of use
              </a>{" "}
              {""}
              and{" "}
              <a href="#" className="underline text-blue-500 font-bold">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center md:flex-row">
        <div className="">
          <p className="text-sm">
            <a href="#" className="text-blue-500 font-medium">
              TERMS & CONDITION |
            </a>
            <a href="#" className="text-blue-500 font-medium">
              {" "}
              PRICACY POLICY |
            </a>{" "}
            <a href="#" className="text-blue-500 font-medium">
              CONTACT US |
            </a>
          </p>
        </div>
        <div className="">
          <p className="text-zinc-600  text-xs">
            &copy; {new Date().getFullYear()} Intelligent CV 247. All Right
            Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
