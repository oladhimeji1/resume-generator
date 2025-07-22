import { FaArrowLeft } from "react-icons/fa";
import download from "../assets/images/svg/download.svg";
import { useState } from "react";
import ResumeDownload from "./ResumeDownload";

function ReferenceForm({
  setResumeData,
  resumeData,
  TemplateComponent,
  handlePrevStep,
}) {
  const [isDownloadTemplateShown, setIsDownloadTemplateShown] = useState(false);

  const handleReferenceChange = (index, field, value) => {
    setResumeData((prevResumeData) => {
      const reference = [...prevResumeData.references];
      console.log(reference);
      reference[index][field] = value;
      return { ...prevResumeData, reference };
    });
  };

  /*
  const handleAddReference = () => {
    setResumeData((prevResumeData) => ({
      ...prevResumeData,
      references: [
        ...prevResumeData.references,
        { name: "", phone: "", location: "", occupation: "" },
      ],
    }));
  };
  */
  return (
    <>
      <div className="flex flex-col gap-5 mt-12 mb-12">
        <div>
          <h1 className="text-2xl font-semibold mb-4 ">
            Who are your reference? 😐🤔
          </h1>
          <p className="text-xl text-zinc-700">
            We suggest you add up to two (2) references to boost the credibility
            of your resume
          </p>
          <div className="flex flex-col gap-2 mb-4 mt-8">
            {resumeData.references.map((reference, index) => {
              return (
                <div className="grid grid-cols-1 mb-12  md:grid-cols-2 gap-4 ">
                  <div className="flex flex-col gap-2 mb-2">
                    <label
                      htmlFor={`fullName_${index}`}
                      className="font-semibold"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id={`fullName_${index}`}
                      name={`fullName_${index}`}
                      placeholder="e.g John Doe"
                      className="bg-[#e6e6e6] border-2 border-dashed border-emerald-900 bg-whie py-3 rounded-md px-4 focus:outline-none focus:border-emerald-400"
                      value={reference.name}
                      onChange={(e) => {
                        handleReferenceChange(index, "name", e.target.value);
                      }}
                      autoComplete="true"
                    />
                  </div>
                  <div className="flex flex-col gap-2 mb-2">
                    <label htmlFor={`phone_${index}`} className="font-semibold">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id={`phone_${index}`}
                      name={`phone_${index}`}
                      placeholder="e.g +123456790"
                      className="bg-[#e6e6e6] border-2 border-dashed border-emerald-900  bg-whie py-3 rounded-md px-4 focus:outline-none focus:border-emerald-400"
                      onChange={(e) => {
                        handleReferenceChange(index, "phone", e.target.value);
                      }}
                      value={reference.phone}
                      autoComplete="true"
                    />
                  </div>
                  <div className="flex flex-col gap-2 mb-2">
                    <label
                      htmlFor={`address_${index}`}
                      className="font-semibold"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id={`address_${index}`}
                      name={`address_${index}`}
                      placeholder="e.g Texas, United State"
                      className="bg-[#e6e6e6] bg-whie border-2 border-dashed border-emerald-900 py-3 rounded-md px-4 focus:outline-none"
                      onChange={(e) => {
                        handleReferenceChange(
                          index,
                          "location",
                          e.target.value
                        );
                      }}
                      value={reference.location}
                    />
                  </div>
                  <div className="flex flex-col gap-2 mb-2">
                    <label
                      htmlFor={`occupation_${index}`}
                      className="font-semibold"
                    >
                      Occupation
                    </label>
                    <input
                      type="text"
                      id={`occupation_${index}`}
                      name={`occupation_${index}`}
                      placeholder="e.g Software Enginneer"
                      className="bg-[#e6e6e6] bg-whie border-2 border-dashed border-emerald-900 py-3 rounded-md px-4 focus:outline-none"
                      onChange={(e) => {
                        handleReferenceChange(
                          index,
                          "occupation",
                          e.target.value
                        );
                      }}
                      value={reference.occupation}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <button
          type="button"
          className="text-white border-emerald-800 border-2 bg-emerald-800 py-3 px-9 md:px-12 cursor-pointer rounded-full  transition pointer"
          onClick={() => {
            handlePrevStep();
          }}
        >
          <FaArrowLeft className="inline mr-3" />
          Back to Skills
        </button>
        <button
          type="button"
          className="text-white bg-emerald-600 py-3 cursor-pointer px-12 rounded-full  transition pointer hover:bg-emerald-900"
          onClick={() => {
            setIsDownloadTemplateShown(true);
          }}
        >
          Download
          {/* <FaDownload /> */}
          <img src={download} alt="logo" width="20px" className="ml-3 inline" />
        </button>
      </div>

      {isDownloadTemplateShown && (
        <ResumeDownload
          TemplateComponent={TemplateComponent}
          setIsDownloadTemplateShown={setIsDownloadTemplateShown}
          resumeData={resumeData}
        />
      )}
    </>
  );
}

export default ReferenceForm;
