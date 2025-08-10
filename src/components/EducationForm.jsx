
import { FaTrash } from "react-icons/fa";

export default function EducationForm({
  resumeData,
  setResumeData,
  handleNextStep,
  handlePrevStep,
}) {
  const handleEducationChange = (index, field, value) => {
    setResumeData((prevResumeData) => {
      const education = [...prevResumeData.education];
      education[index][field] = value;

      // Reset end date fields when "currently enrolled" is checked
      if (field === "currentlyEnrolled" && value === true) {
        education[index].endMonth = "Month";
        education[index].endYear = "Year";
      }

      return { ...prevResumeData, education };
    });
  };

  const addEducation = () => {
    setResumeData((prevResumeData) => ({
      ...prevResumeData,
      education: [
        ...prevResumeData.education,
        {
          school: "",
          degree: "",
          fieldOfStudy: "",
          location: "",
          state: "",
          startMonth: "Month",
          startYear: "Year",
          endMonth: "Month",
          endYear: "Year",
          currentlyEnrolled: false,
        },
      ],
    }));
  };

  const removeEducation = (index) => {
    setResumeData((prevResumeData) => ({
      ...prevResumeData,
      education: prevResumeData.education.filter((_, i) => i !== index),
    }));
  };

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

  return (
    <form className="max-w-7xl mx-auto bg-white rounded-lg shadow p-8 relative">
      <h2 className="text-2xl font-bold mb-1">EDUCATION</h2>
      <p className="text-gray-600 mb-6">
        List your educational background, from the most recent to the oldest.
      </p>

      {resumeData.education.map((education, index) => (
        <div key={index} className="mb-8 border-b pb-6 relative">
          <button
            type="button"
            onClick={() => removeEducation(index)}
            className="absolute right-0 top-0 text-red-500 hover:text-red-700"
          >
            <FaTrash />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block font-semibold mb-1">
                School/University
              </label>
              <input
                type="text"
                placeholder="e.g. Stanford University"
                className="w-full border border-gray-300 rounded px-4 py-2"
                value={education.school}
                onChange={(e) =>
                  handleEducationChange(index, "school", e.target.value)
                }
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Degree</label>
              <input
                type="text"
                placeholder="e.g. Bachelor's"
                className="w-full border border-gray-300 rounded px-4 py-2"
                value={education.degree}
                onChange={(e) =>
                  handleEducationChange(index, "degree", e.target.value)
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block font-semibold mb-1">Field of Study</label>
              <input
                type="text"
                placeholder="e.g. Computer Science"
                className="w-full border border-gray-300 rounded px-4 py-2"
                value={education.fieldOfStudy}
                onChange={(e) =>
                  handleEducationChange(index, "fieldOfStudy", e.target.value)
                }
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">City</label>
              <input
                type="text"
                placeholder="e.g. San Francisco"
                className="w-full border border-gray-300 rounded px-4 py-2"
                value={education.location}
                onChange={(e) =>
                  handleEducationChange(index, "location", e.target.value)
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block font-semibold mb-1">State</label>
              <input
                type="text"
                placeholder="e.g. California"
                className="w-full border border-gray-300 rounded px-4 py-2"
                value={education.state}
                onChange={(e) =>
                  handleEducationChange(index, "state", e.target.value)
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
                value={education.startMonth}
                onChange={(e) =>
                  handleEducationChange(index, "startMonth", e.target.value)
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
                value={education.startYear}
                onChange={(e) =>
                  handleEducationChange(index, "startYear", e.target.value)
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
                value={education.endMonth}
                onChange={(e) =>
                  handleEducationChange(index, "endMonth", e.target.value)
                }
                disabled={education.currentlyEnrolled}
              >
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                className="border border-gray-300 rounded px-2 py-1 ml-2"
                value={education.endYear}
                onChange={(e) =>
                  handleEducationChange(index, "endYear", e.target.value)
                }
                disabled={education.currentlyEnrolled}
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
              id={`currentlyEnrolled_${index}`}
              checked={education.currentlyEnrolled}
              onChange={(e) =>
                handleEducationChange(
                  index,
                  "currentlyEnrolled",
                  e.target.checked
                )
              }
              className="mr-2"
            />
            <label
              htmlFor={`currentlyEnrolled_${index}`}
              className="text-gray-700"
            >
              I am currently enrolled
            </label>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addEducation}
        className="py-2 px-6 mb-8 cursor-pointer font-semibold bg-emerald-800 text-white hover:bg-emerald-900 rounded-full"
      >
        Add Education
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
