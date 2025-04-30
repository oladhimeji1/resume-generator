import { useState } from "react";

import { useLocation, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { PDFDownloadLink, Document, Page, Text } from "@react-pdf/renderer";
import Template1 from "../templates/Template1";

import BioDataForm from "./BioDataForm";
import WorkForm from "./WorkForm";
import EducationForm from "./EducationForm";
import Sidebar from "./Sidebar";

export default function ResumeBuilder() {
  // form element state
  const [contactInfo, setContactInfo] = useState([
    {
      name: "",
      surname: "",
      city: "",
      country: "",
      phone: "",
      email: "",
      summary: "s",
    },
  ]);

  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [skill, setSkill] = useState([]);

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

          <form action={handleResumeSubmit} className="">
            <BioDataForm
              onContactInfoChange={handleContactInfoChange}
              contactInfo={contactInfo}
            />
            <WorkForm />
            <EducationForm />
          </form>

          {resumeGenerated && (
            <PDFDownloadLink
              filename="resume.pdf"
              document={
                <Document>
                  <Page>
                    <Text>Hello World</Text>
                  </Page>
                </Document>
              }
            ></PDFDownloadLink>
          )}
        </div>
      </section>
    </>
  );
}
