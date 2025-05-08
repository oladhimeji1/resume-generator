import { useState, useEffect } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import BioDataForm from "./BioDataForm";
import WorkForm from "./WorkForm";
import EducationForm from "./EducationForm";
import Sidebar from "./Sidebar";
import SkillForm from "./SkillForm";
import ResumePreview from "./ResumePreview";

import templates from "../data.js";

export default function ResumeBuilder() {
  const { templateId } = useParams();
  const [TemplateComponent, setTemplateComponent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isPreviewed, setIsPreviewed] = useState(false);
  // form element state
  const [resumeData, setResumeData] = useState({
    name: "Godstime",
    surname: "Pious",
    city: "Port Harcourt",
    country: "Nigeria",
    email: "piousgodstime3@yahoo.com",
    phone: "09130327299",
    summary:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quae, exercitationem eveniet delectus cupiditate maiores aliquid culpa dolorem. Perspiciatis a corrupti molestiae magnam obcaecati eius velit unde nam architecto. Error commodi impedit adipisci praesentium optio voluptates sequi quam itaque expedita iste. Inventore asperiores beatae quasi dolore minima, quia autem!",

    workExperience: [
      {
        jobTitle: "Software Engineer",
        company: "ABC Limited",
        startDate: "22-04-2005",
        endDate: "20-11-2023",
        location: "Northern Ireland",
        isRemote: false,
      },
      {
        jobTitle: "Software Engineer",
        company: "ABC Limited",
        startDate: "22-04-2005",
        endDate: "20-11-2023",
        location: "Northern Ireland",
        isRemote: false,
      },
      {
        jobTitle: "Software Engineer",
        company: "ABC Limited",
        startDate: "22-04-2005",
        endDate: "20-11-2023",
        location: "Northern Ireland",
        isRemote: false,
      },
      {
        jobTitle: "Software Engineer",
        company: "ABC Limited",
        startDate: "22-04-2005",
        endDate: "20-11-2023",
        location: "Northern Ireland",
        isRemote: false,
      },
    ],
    education: [
      { institution: "", location: "", degree: "", startDate: "", endDate: "" },
    ],
    skills: [
      {
        name: "Proficient in React and Backend Development",
      },
    ],
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
        <div className="flex-1 relative px-4 lg:ml-70  md:ml-50">
          <div className="flex gap-4 items-center mb-8 p-4">
            <FaArrowLeft className="text-blue-500" />
            <Link
              to="/build-resume/resume-templates"
              className="underline text-blue-500 font-bold"
            >
              Go Back
            </Link>
          </div>
          <form className="mb-4">
            <BioDataForm
              handleInputChange={handleInputChange}
              resumeData={resumeData}
            />
            <WorkForm resumeData={resumeData} setResumeData={setResumeData} />
            <EducationForm
              resumeData={resumeData}
              setResumeData={setResumeData}
            />
            <SkillForm resumeData={resumeData} setResumeData={setResumeData} />

            {/* {TemplateComponent && (
              <PDFDownloadLink
                document={<TemplateComponent resumeData={resumeData} />}
                filename="myResume.pdf"
              >
                {({ loading }) => {
                  return loading ? (
                    <button type="button">Loading Document...</button>
                  ) : (
                    <button type="button">Download Document...</button>
                  );
                }}
              </PDFDownloadLink>
            )} */}
          </form>
          <button
            className="text-white bg-fuchsia-600 py-2 px-4 rounded-full mr-8 transition pointer hover:bg-fuchsia-900 fixed bottom-6 right-6"
            onClick={() => {
              setIsPreviewed(!isPreviewed);
            }}
          >
            Preview Template
          </button>
          <Link
            className="inline-block my-8 text-right py-2  px-6 bg-blue-900 text-white rounded-full font-bold"
            to={`/build-resume/resume-builder/preview/${templateId}`}
          >
            Finalize
          </Link>
        </div>

        {isPreviewed && (
          <ResumePreview
            TemplateComponent={TemplateComponent}
            resumeData={resumeData}
            setIsPreviewed={setIsPreviewed}
          />
        )}
      </section>
    </>
  );
}
