import { Link } from "react-router-dom";
import Template from "../components/Template";
import CVBoldImg from "../assets/images/templates-img/cv-bold.webp";
import CVDistinctImg from "../assets/images/templates-img/cv-distinct.webp";
import CVExpressiveImg from "../assets/images/templates-img/cv-expressive.webp";
import CV1 from "../assets/images/templates-img/cv1.webp";
import CV4 from "../assets/images/templates-img/cv4.webp";
import CV5 from "../assets/images/templates-img/cv5.webp";
import CV7 from "../assets/images/templates-img/cv7.webp";
import CV14 from "../assets/images/templates-img/cv14.webp";
import CV20 from "../assets/images/templates-img/cv20.webp";

export default function ResumeTemplates() {
  const templatesPathArray = [
    CVBoldImg,
    CVDistinctImg,
    CVExpressiveImg,
    CV1,
    CV4,
    CV5,
    CV7,
    CV14,
    CV20,
  ];
  return (
    <section className="min-h-screen p-2 relative">
      <div className="mb-12">
        <Link to="/" className="font-bold text-cyan-950 text-xl">
          Resume Wizard
        </Link>
      </div>

      <div className="flex flex-col gap-2 items-center text-center ">
        <h2 className="text-3xl font-bold text-cyan-900">
          Choose from our resume templates
        </h2>
        <p className="text-zinc-700">
          Be sure to make a right choice, there is no going back
        </p>
      </div>

      <div className="grid grid-cols-1 justify-center gap-3 md:grid-cols-2 lg:grid-cols-3 mt-10 max-w-7xl mx-auto">
        {templatesPathArray.map((src, index) => {
          return <Template key={index} src={src} />;
        })}
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
