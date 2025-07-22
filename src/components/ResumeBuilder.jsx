import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import BioDataForm from "./BioDataForm";
import WorkForm from "./WorkForm";
import EducationForm from "./EducationForm";
import Sidebar from "./Sidebar";
import SkillForm from "./SkillForm";

import templates from "../data.js";
import ReferenceForm from "./ReferenceForm.jsx";

export default function ResumeBuilder() {
  const { templateId } = useParams();
  const [TemplateComponent, setTemplateComponent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isPreviewed, setIsPreviewed] = useState(true);
  // form element state
  const [step, setStep] = useState(
    JSON.parse(localStorage.getItem("step")) || 1
  );

  useEffect(() => {
    localStorage.setItem("step", JSON.stringify(step));
  }, [step]);

  const handleStep = (step) => {
    setStep(step || 1);
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };
  const [resumeData, setResumeData] = useState({
    name: "",
    surname: "",
    city: "",
    country: "",
    email: "",
    phone: "",
    summary: ``,

    workExperience: [
      {
        jobTitle: "",
        company: "",
        startDate: "",
        endDate: "",
        location: "",
        isRemote: false,
        duties: [
          {
            name: "",
          },
        ],
      },
    ],
    education: [
      {
        institution: "",
        location: "",
        degree: "",
        startDate: "",
        endDate: "",
      },
    ],
    skills: [
      {
        name: "",
      },
    ],
    references: [{ name: "", phone: "", location: "", occupation: "" }],
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
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Loading Template...
      </div>
    );
  if (error)
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "red",
        }}
      >
        {" "}
        Error{" "}
      </div>
    );
  if (!TemplateComponent)
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {" "}
        No template selected{" "}
      </div>
    );

  return (
    <>
      <section className="min-h-screen p-2 sm:p-0 flex flex-col md:flex-row gap-2 bg-[#F4F5FB]">
        {/* Sidebar Left */}
        <div className="md:w-1/5 w-full lg:block">
          <Sidebar handleStep={handleStep} step={step} />
        </div>
        {/* Form Middle */}
        <div className="md:w-2/5 w-full relative px-4 lg:ml-0 md:ml-0">
          <div className="flex gap-4 items-center mb-8 p-4">
            <Link
              to="/build-resume/resume-templates"
              className="text-blue-500 font-bold flex justify-center items-center gap-2"
            >
              <FaArrowLeft className="text-blue-500" />
              <span>Change Template</span>
            </Link>
            {/* Mobile: Show Preview Button */}
            <button
              type="button"
              className="md:hidden ml-auto text-white bg-emerald-600 py-2 px-2 rounded-full transition pointer hover:bg-emerald-900"
              onClick={() => setIsPreviewed(!isPreviewed)}
            >
              {isPreviewed ? "Hide Preview" : "Show Preview"}
            </button>
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
                step={step}
              />
            )}

            {step === 5 && (
              <ReferenceForm
                resumeData={resumeData}
                setResumeData={setResumeData}
                handlePrevStep={handlePrevStep}
                step={step}
                TemplateComponent={TemplateComponent}
              />
            )}
          </form>
        </div>
        <div
          className={`md:w-2/5 w-full md:flex md:items-start md:justify-center md:relative ${
            isPreviewed ? "block" : "hidden md:block"
          }`}
          style={{ minHeight: "100vh", display: isPreviewed ? "flex" : "none" }}
        >
          {TemplateComponent && (
            <div
              className="hidden md:flex items-start justify-center w-full h-full"
              style={{ minHeight: "100vh", width: "100%" }}
            >
              <div
                className="bg-white shadow-lg rounded-lg w-full h-full p-8 box-border"
                style={{
                  width: "40%",
                  height: "100%",
                  minHeight: "100vh",
                  maxHeight: "100vh",
                  overflowY: "auto",
                  overflowX: "hidden",
                  boxSizing: "border-box",
                  padding: "32px",
                  position: "fixed",
                  right: 0,

                  margin: "auto",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  wordBreak: "break-word",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    wordBreak: "break-word",
                  }}
                >
                  <TemplateComponent resumeData={resumeData} />
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Mobile Overlay Preview: Full height and width with padding */}
        {isPreviewed && (
          <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-60 md:hidden">
            <div
              className="bg-white shadow-lg rounded-lg relative w-full h-full p-4 box-border"
              style={{
                width: "95vw",
                height: "100vh",
                minHeight: "100vh",
                maxHeight: "100vh",
                overflowY: "auto",
                overflowX: "hidden",
                boxSizing: "border-box",
                padding: "16px",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                wordBreak: "break-word",
              }}
            >
              <button
                className="absolute top-2 right-2 text-gray-600 bg-gray-200 rounded-full px-3 py-1 text-sm font-bold hover:bg-gray-300"
                onClick={() => setIsPreviewed(false)}
              >
                Close
              </button>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  wordBreak: "break-word",
                }}
              >
                {TemplateComponent && (
                  <TemplateComponent resumeData={resumeData} />
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
