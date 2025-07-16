import { useState } from "react";
import ResumeDownload from "./ResumeDownload";
import { FaArrowLeft, FaDownload, FaPlus } from "react-icons/fa";
import download from "../assets/images/svg/download.svg";

function SkillForm({
  setResumeData,
  resumeData,
  handlePrevStep,
  TemplateComponent,
}) {
  const [isDownloadTemplateShown, setIsDownloadTemplateShown] = useState(false);
  const handleSkillChange = (index, field, value) => {
    setResumeData((prevResumeData) => {
      const skill = [...prevResumeData.skills];
      skill[index][field] = value;
      return { ...prevResumeData, skill };
    });
  };
  const handleAddSkill = () => {
    setResumeData((prevResumeData) => ({
      ...prevResumeData,
      skills: [
        ...prevResumeData.skills,
        {
          name: "",
        },
      ],
    }));
  };
  return (
    <>
      <div className="flex flex-col gap-5 mt-12 mb-12">
        <div>
          <h1 className="text-2xl font-semibold mb-4 ">
            What are the core skills you prohibit to engage your potential
            employers
          </h1>
          <p className="text-xl text-zinc-700">
            We suggest you add up to five (5) core skills
          </p>
          <div className="flex flex-col gap-2 mb-4 mt-8">
            {resumeData.skills.map((skill, index) => {
              return (
                <div key={index} className="flex flex-col gap-2 mb-4">
                  <label htmlFor={`skill${index}`} className="font-semibold">
                    Skill {index + 1}
                  </label>
                  <input
                    type="text"
                    id={`skill${index}`}
                    name={`skill${index}`}
                    placeholder="e.g Frontend: HTML, CSS, JavaScript"
                    className="bg-[#e6e6e6] bg-whie py-3 rounded-md px-4 focus:outline-none"
                    value={skill.name}
                    onChange={(e) => {
                      handleSkillChange(index, "name", e.target.value);
                    }}
                  />
                </div>
              );
            })}
          </div>
          <button
            type="button"
            onClick={handleAddSkill}
            className="py-2 px-4 cursor-pointer font-semibold bg-emerald-800 text-white hover:bg-emerald-900 rounded-full"
          >
            <FaPlus />
          </button>

          <div className="mt-8 flex items-center justify-between gap-3 w-full">
            <button
              type="button"
              className="text-white border-emerald-800 border-2 bg-emerald-800 py-3 px-9 md:px-12 cursor-pointer rounded-full  transition pointer"
              onClick={() => {
                handlePrevStep();
              }}
            >
              <FaArrowLeft />
            </button>
            <button
              type="button"
              className="text-white bg-emerald-600 py-3 cursor-pointer px-12 rounded-full  transition pointer hover:bg-emerald-900"
              onClick={() => {
                setIsDownloadTemplateShown(true);
              }}
            >
              {/* <FaDownload /> */}
              <img src={download} alt="logo" width="20px" className="inline" />
            </button>
          </div>
        </div>
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

export default SkillForm;
