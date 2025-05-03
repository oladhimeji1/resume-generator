import { useState, useEffect } from "react";

import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import BioDataForm from "./BioDataForm";
import WorkForm from "./WorkForm";
import EducationForm from "./EducationForm";
import Sidebar from "./Sidebar";
import TemplatePreview from "./TemplatePreview";
import templates from "../data.js";

export default function ResumeBuilder() {
  const { templateId } = useParams();
  const [TemplateComponent, setTemplateComponent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  // form element state
  const [resumeData, setResumeData] = useState({
    name: "Godstime",
    surname: "",
    city: "",
    country: "",
    email: "",
    phone: "",
    summary: "",

    workExperience: [
      {
        jobTitle: "",
        company: "",
        startDate: "",
        endDate: "",
        location: "",
        isRemote: false,
      },
    ],
    education: [
      { institution: "", location: "", degree: "", startDate: "", endDate: "" },
    ],
    skills: [""],
    referee: [{ name: "", phone: "", location: "" }],
  });
  const handleInputChange = (field, value) => {
    setResumeData((prevResume) => ({ ...prevResume, [field]: value }));
  };
  useEffect(() => {
    const loadTemplate = async () => {
      setLoading(true);
      setError(null);
      setTemplateComponent(null);

      try {
        const selectedTemplate = templates.find((template) => {
          return template.id == templateId;
        });

        if (!selectedTemplate) {
          setError("Template not Found");
          setLoading(false);
          return;
        }

        const module = await import(selectedTemplate.path);
        setTemplateComponent(() => module.default);
        setLoading(false);
      } catch (e) {
        setError("Error Loading Template");
        console.error(e);
        setLoading(false);
      }
    };

    loadTemplate();
  }, [templateId]);

  if (loading) return <div> Loading Template </div>;
  if (error) return <div> Error </div>;
  if (!TemplateComponent) return <div> No template selected </div>;

  return (
    <>
      <section className="min-h-screen p-2 sm:p-0 flex flex-col md:flex-row gap-2 ">
        <Sidebar />
        <div className="flex-1 relative px-4 lg:ml-70 md:ml-50">
          <div className="flex gap-4 items-center mb-8 p-4">
            <FaArrowLeft className="text-blue-500" />
            <Link
              to="/build-resume/resume-templates"
              className="underline text-blue-500 font-bold"
            >
              Go Back
            </Link>
          </div>
          <form className="mb-12">
            <BioDataForm
              handleInputChange={handleInputChange}
              resumeData={resumeData}
            />
            <WorkForm resumeData={resumeData} setResumeData={setResumeData} />
            <EducationForm
              resumeData={resumeData}
              setResumeData={setResumeData}
            />
          </form>
        </div>
      </section>
    </>
  );
}
