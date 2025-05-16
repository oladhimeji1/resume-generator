import { useState } from "react";
import ResumeDownload from "./ResumeDownload";
function SkillForm({ setResumeData, resumeData, handlePrevStep, TemplateComponent }) {
  const [isDownloadTemplateShown, setIsDownloadTemplateShown] = useState(true);
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
          <h1 className="text-2xl font-bold mb-4 ">
            What are the core skills you prohibit to engage your potential
            employers
          </h1>
          <p className="text-xl text-zinc-700">
            We suggest you add up to five (5) core skills
          </p>
          <div className="flex flex-col gap-2 mb-4 mt-8">
            {resumeData.skills.map((skill, index) => {
              return (
                <>
                  <div key={index} className="flex flex-col gap-2 mb-4">
                    <label htmlFor={`skill${index}`} className="font-bold">
                      SKILL {index + 1}
                    </label>
                    <input
                      type="text"
                      id={`skill${index}`}
                      name={`skill${index}`}
                      placeholder="e.g Proficient with Programming Languages"
                      className="border border-slate-400 bg-white py-2 px-4 focus:outline-none"
                      value={skill.name}
                      onChange={(e) => {
                        handleSkillChange(index, "name", e.target.value);
                      }}
                    />
                  </div>
                </>
              );
            })}
          </div>
          <button
            type="button"
            onClick={handleAddSkill}
            className="py-2 px-6 cursor-pointer font-bold bg-emerald-800 text-white hover:bg-emerald-900 rounded-full"
          >
            Add skill{" "}
          </button>

          <div className="mt-8 flex items-center gap-8">
            <button
              type="button"
              className="text-blue-600 border-blue-600 border-3  bg-white py-3 px-12 cursor-pointer rounded-full mr-8 transition pointer"
              onClick={() => {
                handlePrevStep();
              }}
            >
              Back
            </button>
            <button
              type="button"
              className="text-white  bg-blue-600 py-3 cursor-pointer px-12 rounded-full mr-8 transition pointer hover:bg-blue-900"
              onClick={() => {
                setIsDownloadTemplateShown(true);
              }}
            >
              Finalize
            </button>
          </div>
        </div>
      </div>

    {isDownloadTemplateShown && <ResumeDownload TemplateComponent={TemplateComponent} setIsDownloadTemplateShown={setIsDownloadTemplateShown} resumeData={resumeData}/>}
    </>
  );
}

export default SkillForm;
