import { useState, useEffect } from "react";
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
  // const [isPreviewed, setIsPreviewed] = useState(false);
  // form element state
  const [step, setStep] = useState(1);
  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };
  const [resumeData, setResumeData] = useState({
    name: "Godstime",
    surname: "Pious",
    city: "Port Harcourt",
    country: "Nigeria",
    email: "piousgodstime3@yahoo.com",
    phone: "09130327299",
    summary: ` A highly resourceful, flexible, innovative project manager, possessing considerable experience of managing projects from beginning to end, defining the purpose line timeline, scope and executing the analysis before providing detail recommendations. Having an impressive track records of delivering major operational improvement and of orhchresting people, schedules and resources for optimum productivity, efficiency and quality. Keen to find a challenging position within an ambitious company where i will be able to continue to increase my managment skills.`,

    workExperience: [
      {
        jobTitle: "Software Engineer",
        company: "ABC Limited",
        startDate: "2002-04-02",
        endDate: "2023-11-20",
        location: "Northern Ireland",
        isRemote: false,
        duties: [
          {name: ''}
        ],
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
      const templateImportMap = {
        1: () => import("../templates/Template1"),
        2: () => import("../templates/Template2"),
        3: () => import("../templates/Template3"),
        4: () => import("../templates/Template4"),
        5: () => import("../templates/Template5"),
        6: () => import("../templates/Template6"),
        7: () => import("../templates/Template7"),
        8: () => import("../templates/Template8"),
        9: () => import("../templates/Template9"),
      };

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

        const importFunc = templateImportMap[selectedTemplate.id];
        if (!importFunc) {
          setError("Template import not found");
          setLoading(false);
          return;
        }
        const module = await importFunc();
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
              Change Template
            </Link>
          </div>
          <form className="mb-4">
            {step === 1 && (
              <BioDataForm
                handleInputChange={handleInputChange}
                resumeData={resumeData}
                handleNextStep={handleNextStep}
                step={step}
              />
            )}

            {step === 2 && (
              <WorkForm
                resumeData={resumeData}
                setResumeData={setResumeData}
                handleNextStep={handleNextStep}
                handlePrevStep={handlePrevStep}
                step={step}
              />
            )}

            {step === 3 && (
              <EducationForm
                resumeData={resumeData}
                setResumeData={setResumeData}
                handleNextStep={handleNextStep}
                handlePrevStep={handlePrevStep}
                step={step}
              />
            )}

            {step === 4 && (
              <SkillForm
                resumeData={resumeData}
                setResumeData={setResumeData}
                handleNextStep={handleNextStep}
                handlePrevStep={handlePrevStep}
                TemplateComponent={TemplateComponent}
                step={step}
              />
            )}
          </form>
          {/* <button
            className="hidden sm:block text-white bg-fuchsia-600 py-2 px-4 rounded-full mr-8 transition pointer hover:bg-fuchsia-900 fixed bottom-6 right-6"
            onClick={() => {
              setIsPreviewed(!isPreviewed);
            }}
          >
            Preview Template
          </button> */}
        </div>

        {/* {isPreviewed && (
          <ResumePreview
            TemplateComponent={TemplateComponent}
            resumeData={resumeData}
            setIsPreviewed={setIsPreviewed}
          />
        )} */}
      </section>
    </>
  );
}
