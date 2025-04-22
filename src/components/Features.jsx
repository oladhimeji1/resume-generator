import {
  FaCheck,
  FaBookOpen,
  FaEyeDropper,
  FaArrowRight,
} from "react-icons/fa";
export default function Features() {
  return (
    <section className="max-w-7xl mx-auto p-4 mt-12 bg-white min-h-70 flex items-center justify-center gap-4 flex-col mb-12 rounded-lg">
      <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2 md:grid-cols-3 min-h-full">
        <div className="flex flex-col items-center text-center justify-center gap-2 mb-4 sm:md-0">
          <FaCheck className="bg-emerald-900 text-white w-6 h-6 rounded-full " />
          <p className="text-xl text-zinc-800 font-bold">
            User-Friendly professional designed resumes
          </p>
        </div>
        <div className="flex flex-col items-center text-center justify-center gap-2 mb-4 sm:md-0">
          <FaBookOpen className=" text-emerald-900 w-6 h-6 " />
          <p className="text-xl text-zinc-800 font-bold">
            Two-column, single-column, and multi-page layouts
          </p>
        </div>
        <div className="flex flex-col items-center text-center justify-center gap-2 mb-4 sm:md-0">
          <FaEyeDropper className="text-emerald-900 w-6 h-6 " />
          <p className="text-xl text-zinc-800 font-bold">
            Change the font, color and background combinations
          </p>
        </div>
      </div>
      <a
        href="#"
        className="flex items-center gap-2  mx-auto text-xl text-emerald-600 underline"
      >
        Browse More Templates <FaArrowRight className="" />
      </a>
    </section>
  );
}
