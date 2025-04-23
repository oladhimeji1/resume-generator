import { Link } from "react-router-dom";

export default function ResumeTemplates() {
  return (
    <section className="min-h-screen p-2 relative">
      <div className="mb-4">
        <Link to="/" className="font-bold text-cyan-950 text-xl">
          Resume Wizard
        </Link>
      </div>

      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-3xl font-bold text-cyan-900">
          Choose from our resume templates
        </h2>
        <p className="text-zinc-700">
          Be sure to make a right choice, there is no going back
        </p>
      </div>

      <div className="shadow-2xl shadow-zinc-700 fixed bottom-0 left-0 right-0 h-18 px-12 bg-white">
        <div className="flex gap-4 items-center h-full justify-end">
          <button className="text-cyan-950 font-bold underline ">
            Choose later
          </button>
          <button className="text-white bg-fuchsia-600 py-2 px-4 rounded-full">
            Use this template
          </button>
        </div>
      </div>
    </section>
  );
}
