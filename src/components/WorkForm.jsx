import { useEffect, useRef } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

export default function WorkForm({
  resumeData,
  setResumeData,
  handlePrevStep,
  handleNextStep,
}) {
  const workRefs = useRef([]);

  const handleWorkExperienceChange = (index, field, value) => {
    setResumeData((prevResumeData) => {
      const workExperience = [...prevResumeData.workExperience];
      workExperience[index][field] = value;

      // Reset end date fields when "presently work here" is checked
      if (field === "presently" && value === true) {
        workExperience[index].endMonth = "Month";
        workExperience[index].endYear = "Year";
      }

      return { ...prevResumeData, workExperience };
    });
  };
  function handleWorkDutiesChange(workIndex, dutyIndex, value) {
    setResumeData((prev) => {
      const workExperience = [...prev.workExperience];
      const duties = [...(workExperience[workIndex].duties || [])];
      duties[dutyIndex] = { ...duties[dutyIndex], name: value };
      workExperience[workIndex] = { ...workExperience[workIndex], duties };
      return { ...prev, workExperience };
    });
  }
  const addWorkExperience = () => {
    setResumeData((prevResumeData) => ({
      ...prevResumeData,
      workExperience: [
        ...prevResumeData.workExperience,
        {
          jobTitle: "",
          company: "",
          location: "",
          state: "",
          startMonth: "Month",
          startYear: "Year",
          endMonth: "Month",
          endYear: "Year",
          presently: false,
          duties: [],
        },
      ],
    }));
  };

  useEffect(() => {
    if (resumeData.workExperience.length > 0) {
      // Scroll to the last work experience
      const lastIndex = resumeData.workExperience.length - 1;
      if (workRefs.current[lastIndex]) {
        workRefs.current[lastIndex].scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [resumeData.workExperience.length]);

  const months = [
    "Month",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const years = [
    "Year",
    ...Array.from({ length: 50 }, (_, i) => `${new Date().getFullYear() - i}`),
  ];

  const removeWorkExperience = (index) => {
    setResumeData((prevResumeData) => ({
      ...prevResumeData,
      workExperience: prevResumeData.workExperience.filter(
        (_, i) => i !== index
      ),
    }));
  };

  return (
    <form className="max-w-7xl mx-auto bg-white rounded-lg shadow p-8 relative">
      <h2 className="text-2xl font-bold mb-1">EXPERIENCE</h2>
      <p className="text-gray-600 mb-6">
        List your work experience, from the most recent to the oldest. Feel free
        to use our pre-written examples.
      </p>
      {resumeData.workExperience.map((experience, index) => (
        <div key={index} className="mb-8 border-b pb-6 relative">
          <button
            type="button"
            onClick={() => removeWorkExperience(index)}
            className="absolute right-0 top-0 text-red-500 hover:text-red-700"
          >
            <FaTrash />
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block font-semibold mb-1">Employer</label>
              <input
                type="text"
                placeholder="e.g. IBM"
                className="w-full border border-gray-300 rounded px-4 py-2"
                value={experience.company}
                onChange={(e) =>
                  handleWorkExperienceChange(index, "company", e.target.value)
                }
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Job title</label>
              <input
                type="text"
                placeholder="e.g. Engineer"
                className="w-full border border-gray-300 rounded px-4 py-2"
                value={experience.jobTitle}
                onChange={(e) =>
                  handleWorkExperienceChange(index, "jobTitle", e.target.value)
                }
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block font-semibold mb-1">City</label>
              <input
                type="text"
                placeholder="e.g. San Francisco"
                className="w-full border border-gray-300 rounded px-4 py-2"
                value={experience.location}
                onChange={(e) =>
                  handleWorkExperienceChange(index, "location", e.target.value)
                }
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">State</label>
              <input
                type="text"
                placeholder="e.g. California"
                className="w-full border border-gray-300 rounded px-4 py-2"
                value={experience.state || ""}
                onChange={(e) =>
                  handleWorkExperienceChange(index, "state", e.target.value)
                }
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="flex gap-2 items-center">
              <label className="block font-semibold mb-1 mr-2">
                Start date
              </label>
              <select
                className="border border-gray-300 rounded px-2 py-1"
                value={experience.startMonth || "Month"}
                onChange={(e) =>
                  handleWorkExperienceChange(
                    index,
                    "startMonth",
                    e.target.value
                  )
                }
              >
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                className="border border-gray-300 rounded px-2 py-1 ml-2"
                value={experience.startYear || "Year"}
                onChange={(e) =>
                  handleWorkExperienceChange(index, "startYear", e.target.value)
                }
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex gap-2 items-center">
              <label className="block font-semibold mb-1 mr-2">End date</label>
              <select
                className="border border-gray-300 rounded px-2 py-1"
                value={experience.endMonth || "Month"}
                onChange={(e) =>
                  handleWorkExperienceChange(index, "endMonth", e.target.value)
                }
                disabled={experience.presently}
              >
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                className="border border-gray-300 rounded px-2 py-1 ml-2"
                value={experience.endYear || "Year"}
                onChange={(e) =>
                  handleWorkExperienceChange(index, "endYear", e.target.value)
                }
                disabled={experience.presently}
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              id={`presently_${index}`}
              checked={experience.presently || false}
              onChange={(e) =>
                handleWorkExperienceChange(index, "presently", e.target.checked)
              }
              className="mr-2"
            />
            <label htmlFor={`presently_${index}`} className="text-gray-700">
              I presently work here
            </label>
          </div>

          {/* Work Duties Section */}
          <div className="mt-6">
            <label className="block font-semibold mb-2">
              Work Duties / Responsibilities
            </label>
            {experience.duties &&
              experience.duties.map((duty, dutyIndex) => (
                <div key={dutyIndex} className="flex items-center gap-2 mb-2">
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-4 py-2"
                    placeholder={`Duty/Responsibility #${dutyIndex + 1}`}
                    value={duty.name || ""}
                    onChange={(e) =>
                      handleWorkDutiesChange(index, dutyIndex, e.target.value)
                    }
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setResumeData((prev) => {
                        const workExperience = [...prev.workExperience];
                        const duties = [
                          ...(workExperience[index].duties || []),
                        ];
                        duties.splice(dutyIndex, 1);
                        workExperience[index] = {
                          ...workExperience[index],
                          duties,
                        };
                        return { ...prev, workExperience };
                      });
                    }}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            <button
              type="button"
              onClick={() => {
                setResumeData((prev) => {
                  const workExperience = [...prev.workExperience];
                  const duties = [...(workExperience[index].duties || [])];
                  duties.push({ name: "" });
                  workExperience[index] = { ...workExperience[index], duties };
                  return { ...prev, workExperience };
                });
              }}
              className="text-emerald-600 hover:text-emerald-700 flex items-center gap-2"
              disabled={experience.duties?.length >= 5}
            >
              <FaPlus /> Add Duty
            </button>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={addWorkExperience}
        className="py-2 px-6 mb-8 cursor-pointer font-semibold bg-emerald-800 text-white hover:bg-emerald-900 rounded-full mb-20"
      >
        Add Work Experience
      </button>
      {/* Responsive fixed buttons for mobile */}
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

function WorkDuties({
  workIndex,
  experience,
  setResumeData,
  setActiveWorkDutiesIndex,
  handleWorkDutiesChange,
}) {
  const handleAddWorkDuties = () => {
    setResumeData((prev) => {
      const workExperience = [...prev.workExperience];
      const duties = [...(workExperience[workIndex].duties || [])];
      duties.push({ name: "" });
      workExperience[workIndex] = { ...workExperience[workIndex], duties };
      return { ...prev, workExperience };
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="relative w-[95%] max-w-xl bg-white rounded-2xl shadow-xl p-8">
        <button
          type="button"
          className="absolute top-4 right-4 text-gray-500 hover:text-red-600"
          onClick={() => setActiveWorkDutiesIndex(null)}
          aria-label="Close"
        >
          <FaTrash className="text-2xl" />
        </button>
        <h2 className="text-2xl font-bold mb-2 text-emerald-900">
          Duties/Responsibilities
        </h2>
        <p className="mb-6 text-gray-700">
          List up to three key responsibilities for this role.
        </p>
        <div className="space-y-4 mb-6">
          {experience.duties.map((duty, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="font-semibold text-gray-600">{index + 1}.</span>
              <input
                type="text"
                className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                placeholder="e.g. Managed a team of 5"
                value={duty.name}
                onChange={(e) =>
                  handleWorkDutiesChange(workIndex, index, e.target.value)
                }
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <button
            type="button"
            className="bg-emerald-800 text-white px-6 py-2 rounded-full hover:bg-emerald-900 transition"
            onClick={handleAddWorkDuties}
            disabled={experience.duties.length >= 5}
          >
            Add Duty
          </button>
          <span className="text-sm text-gray-500">
            {experience.duties.length}/5 duties
          </span>
        </div>
      </div>
    </div>
  );
}
