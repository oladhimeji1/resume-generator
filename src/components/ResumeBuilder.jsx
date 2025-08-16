import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// RESUME FORMS SECTION FIELD
import BioDataForm from "./BioDataForm";
import WorkForm from "./WorkForm";
import EducationForm from "./EducationForm";
import SkillForm from "./SkillForm";
import ReferenceForm from "./ReferenceForm.jsx";

import templates from "../data.js";
import SummaryForm from "./SummaryForm.jsx";
import ResumeDownload from "./ResumeDownload.jsx";
export default function ResumeBuilder() {
  const { templateId } = useParams();
  const [TemplateComponent, setTemplateComponent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  // form element state
  const [step, setStep] = useState(
    JSON.parse(localStorage.getItem("step")) || 1
  );

  useEffect(() => {
    localStorage.setItem("step", JSON.stringify(step));
  }, [step]);

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
    email: "piousgodstime3@gmail.com",
    phone: "09130328299",
    summary: "Result Oriented Software Engineer with 5+ years of experience ",
    workExperience: [
      {
        jobTitle: "Software Engineer",
        company: "Google ",
        startDate: "",
        endDate: "",
        location: "San Jose",
        isRemote: false,
        duties: [
          {
            name: "Responsible for Developing Single Page Apps for Clients and Business",
          },
          {
            name: "Work with Backend Developer closely and Devops",
          },
        ],
        state: "California",
        startMonth: "November",
        presently: false,
        endMonth: "March",
        endYear: "2018",
      },
    ],
    education: [
      {
        institution: "",
        location: "San Francisco",
        degree: "Master's",
        startDate: "",
        endDate: "",
        school: "Standford University",
        fieldOfStudy: "Computer Science",
        state: "California",
        startMonth: "August",
        startYear: "2018",
        currentlyEnrolled: false,
        endMonth: "September",
        endYear: "2020",
      },
    ],
    skills: [
      {
        name: "Proficient in React and Backend Development",
      },
      {
        name: "Good Communication Skill",
      },
      {
        name: "Ability to work minimal experience",
      },
    ],
    references: [
      {
        name: "Pious Odoyi",
        phone: "08030415899",
        location: "46 Patterson Street, Trans Amadi, Port Harcourt",
        occupation: "Store Clerk",
      },
    ],
    address: "46 Patterson Street, Emma Estate",
    zip: "50012",
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

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-emerald-600">
        Loading Template...
      </div>
    );
  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        Error
      </div>
    );
  if (!TemplateComponent)
    return (
      <div className="min-h-screen flex items-center justify-center text-zinc-800">
        No template selected
      </div>
    );

  return (
    <>
      <section className="bg-white px-4 py-4">
        <div className="flex items-center justify-between gap-6 max-w-7xl mx-auto">
          <Link to="/">
            <img src="/resume_logo_light.jpg" alt="" width="200px" />
          </Link>
          {/* Stepper */}
          <div className="flex items-center gap-4">
            {
              {
                1: "PERSONAL INFO",
                2: "EXPERIENCE",
                3: "EDUCATION",
                4: "SKILLS",
                5: "REFERENCES",
                6: "SUMMARY",
                7: "REVIEW & DOWNLOAD",
              }[step]
            }
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto mt-8">
        {step === 1 && (
          <BioDataForm
            resumeData={resumeData}
            setResumeData={setResumeData}
            handleNextStep={handleNextStep}
            handleInputChange={handleInputChange}
          />
        )}
        {step === 2 && (
          <WorkForm
            resumeData={resumeData}
            setResumeData={setResumeData}
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
            handleInputChange={handleInputChange}
          />
        )}
        {step === 3 && (
          <EducationForm
            resumeData={resumeData}
            setResumeData={setResumeData}
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
          />
        )}
        {step === 4 && (
          <SkillForm
            resumeData={resumeData}
            setResumeData={setResumeData}
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
            handleInputChange={handleInputChange}
          />
        )}
        {step === 5 && (
          <ReferenceForm
            resumeData={resumeData}
            setResumeData={setResumeData}
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
            handleInputChange={handleInputChange}
          />
        )}
        {/* Add summary and review/download steps as needed */}
        {step === 6 && (
          <SummaryForm
            resumeData={resumeData}
            setResumeData={setResumeData}
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
            handleInputChange={handleInputChange}
          />
        )}

        {step === 7 && (
          <ResumeDownload
            resumeData={resumeData}
            TemplateComponent={TemplateComponent}
            handlePrevStep={handlePrevStep}
          />
        )}
      </section>
    </>
  );
}
