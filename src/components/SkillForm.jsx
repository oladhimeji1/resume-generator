import { FaPlus, FaTrash } from "react-icons/fa";

function SkillForm({
  setResumeData,
  handleNextStep,
  resumeData,
  handlePrevStep,
}) {
  const handleSkillChange = (index, field, value) => {
    setResumeData((prevResumeData) => {
      const skills = [...prevResumeData.skills];
      skills[index][field] = value;
      return { ...prevResumeData, skills };
    });
  };

  const handleAddSkill = () => {
    setResumeData((prevResumeData) => ({
      ...prevResumeData,
      skills: [...prevResumeData.skills, { name: "" }],
    }));
  };

  const handleRemoveSkill = (index) => {
    setResumeData((prevResumeData) => ({
      ...prevResumeData,
      skills: prevResumeData.skills.filter((_, i) => i !== index),
    }));
  };
  return (
    <form className="max-w-7xl mx-auto bg-white rounded-lg shadow p-8 relative">
      <h2 className="text-2xl font-bold mb-1">SKILLS</h2>
      <p className="text-gray-600 mb-6">
        List your core skills. We suggest you add up to five (5) core skills.
      </p>

      <div className="flex flex-col gap-2 mb-4 mt-8">
        {resumeData.skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-2 mb-4">
            <input
              type="text"
              id={`skill${index}`}
              name={`skill${index}`}
              placeholder={`Skill ${index + 1}`}
              className="w-full border border-gray-300 rounded px-4 py-2"
              value={skill.name}
              onChange={(e) => handleSkillChange(index, "name", e.target.value)}
            />
            <button
              type="button"
              onClick={() => handleRemoveSkill(index)}
              className="text-red-500 hover:text-red-700"
              aria-label="Remove skill"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
      <button
        aria-label="Add skill"
        type="button"
        onClick={handleAddSkill}
        className="py-2 px-6 mb-8 cursor-pointer font-semibold bg-emerald-800 text-white hover:bg-emerald-900 rounded-full"
        disabled={resumeData.skills.length >= 5}
      >
        <FaPlus />
      </button>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8 md:static fixed left-0 bottom-0 w-full bg-white p-4 z-10 border-t md:border-none">
        <button
          type="button"
          className="border border-gray-400 rounded px-6 py-2 font-semibold text-gray-700 hover:bg-gray-100 w-1/2 mr-2"
          onClick={handlePrevStep}
        >
          BACK
        </button>
        <button
          type="button"
          className="bg-orange-500 text-white px-8 py-2 rounded font-bold shadow hover:bg-orange-600 w-1/2 ml-2"
          onClick={handleNextStep}
        >
          SAVE & NEXT
        </button>
      </div>
    </form>
  );
}

export default SkillForm;
