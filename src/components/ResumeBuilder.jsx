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
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobEmployer, setJobEmployer] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [isRemote, setIsRemote] = useState(false);
  const [jobStartDate, setJobStartDate] = useState("");
  const [jobEndDate, setJobEndDate] = useState("");

  const location = useLocation();
  const [resumeGenerated, setResumeGenerated] = useState(false);
  const templateId = location.state.template.id;

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
            <BioDataForm />
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
