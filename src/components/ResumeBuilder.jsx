import { useState, useEffect } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { PDFDownloadLink, Document, Page, Text } from "@react-pdf/renderer";
import Template1 from "../templates/Template1";

import BioDataForm from "./BioDataForm";
import WorkForm from "./WorkForm";
import EducationForm from "./EducationForm";
import Sidebar from "./Sidebar";

import SkillForm from "./SkillForm";

import templates from "../data.js";

export default function ResumeBuilder() {
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

  const location = useLocation();
  const [resumeGenerated, setResumeGenerated] = useState(false);
  const templateId = location.state.template.id;

  function handleContactInfoChange(newInfo) {
    setContactInfo(newInfo);
  }

  function handleSummaryChange(newSummary) {
    setSummary(newSummary);
  }

  function handleAddExperience(newExperience) {
    setExperience([...experience, newExperience]);
  }

  function handleUpdateExperience(index, updatedExperience) {
    const newExperience = [...experience];
    newExperience[index] = updatedExperience;
    setExperience(newExperience);
  }

  function handleDeleteExperience(index) {
    const newExperience = experience.filter((_, i) => i !== index);
    setExperience(newExperience);
  }

  function handleResumeSubmit() {
    setResumeGenerated(true);
  }
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
              onContactInfoChange={handleContactInfoChange}
              contactInfo={contactInfo}
            />

            <SkillForm resumeData={resumeData} setResumeData={setResumeData} />
            {TemplateComponent && <TemplateComponent resumeData={resumeData} />}
            {TemplateComponent && (
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
            )}
          </form>
          <Link
            className="inline-block my-8 text-right py-2 px-6 bg-blue-900 text-white rounded-full font-bold"
            to={`/build-resume/resume-builder/preview/${templateId}`}
          >
            Finalize
          </Link>
        </div>
      </section>
    </>
  );
}
