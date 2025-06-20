import { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight, FaPlus, FaTimes } from "react-icons/fa";

export default function WorkForm({
  resumeData,
  setResumeData,
  handlePrevStep,
  handleNextStep,
}) {
  const [activeWorkDutiesIndex, setActiveWorkDutiesIndex] = useState(null);

  const workRefs = useRef([]);

  const handleWorkExperienceChange = (index, field, value) => {
    setResumeData((prevResumeData) => {
      const workExperience = [...prevResumeData.workExperience];
      workExperience[index][field] = value;
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
          dates: "",
          location: "",
          isRemote: false,
          startDate: "",
          endDate: "",
          duties: [{ name: "" }],
        },
      ],
    }));
  };

  /*
  const removeWorkExperience = (index) => {
    setResumeData((prevResumeData) => ({
      ...prevResumeData,
      workExperience: prevResumeData.workExperience.filter(
        (_, i) => i !== index
      ),
    }));
  };

  */
  useEffect(() => {
    if (resumeData.workExperience.length > 0) {
      // Scroll to the last work experience
      const lastIndex = resumeData.workExperience.length - 1;
      if (workRefs.current[lastIndex]) {
        workRefs.current[lastIndex].scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [resumeData.workExperience.length]);

  return (
    <section className="mb-12 p-2 sm:p-0 flex flex-col md:flex-row gap-2">
      <div className="flex-1 relative">
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-2xl font-semibold mb-4 ">
              Tell us about your most recent jobs
            </h1>

            <p className="text-xl text-zinc-700">
              We will start there and work backwards
            </p>
          </div>

          <p className="text-red-500 font-semibold mb-8 text-sm">
            * Indicate a required field
          </p>
        </div>

        <div>
          {resumeData.workExperience.map((experience, index) => {
            return (
              <>
                <div
                  ref={(el) => (workRefs.current[index] = el)}
                  key={index}
                  className="grid grid-cols-1  md:grid-cols-2 gap-4"
                >
                  {activeWorkDutiesIndex === index && (
                    <WorkDuties
                      handleWorkDutiesChange={handleWorkDutiesChange}
                      experience={experience}
                      setActiveWorkDutiesIndex={setActiveWorkDutiesIndex}
                      setResumeData={setResumeData}
                      workIndex={index}
                    />
                  )}
                  <div className="flex flex-col gap-2 mb-4">
                    <label
                      htmlFor={`jobTitle_${index}`}
                      className="font-semibold"
                    >
                      Title<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id={`jobTitle_${index}`}
                      name={`jobTitle_${index}`}
                      placeholder="e.g Sales Manager"
                      className="bg-[#e6e6e6] bg-whie py-3 rounded-md px-4 focus:outline-none"
                      value={experience.jobTitle}
                      onChange={(e) =>
                        handleWorkExperienceChange(
                          index,
                          `jobTitle`,
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-2 mb-4">
                    <label
                      htmlFor={`employer_${index}`}
                      className="font-semibold"
                    >
                      Employer<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id={`employer_${index}`}
                      name={`employer_${index}`}
                      placeholder="e.g KondiPress LLC"
                      className="bg-[#e6e6e6] bg-whie py-3 rounded-md px-4 focus:outline-none"
                      value={experience.company}
                      onChange={(e) =>
                        handleWorkExperienceChange(
                          index,
                          `company`,
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-2 mb-4">
                    <label
                      htmlFor={`location_${index}`}
                      className="font-semibold"
                    >
                      Location<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id={`location_${index}`}
                      name={`location_${index}`}
                      placeholder="e.g Kano, Nigeria"
                      className="bg-[#e6e6e6] bg-whie py-3 rounded-md px-4 focus:outline-none"
                      value={experience.location}
                      onChange={(e) =>
                        handleWorkExperienceChange(
                          index,
                          "location",
                          e.target.value
                        )
                      }
                    />

                    <div className="flex gap-4 items-center ">
                      <input
                        type="checkbox"
                        id={`remote${index}`}
                        className="p-40 accent-indigo-900 inline-block"
                        checked={experience.isRemote}
                        onChange={() =>
                          handleWorkExperienceChange(
                            index,
                            "isRemote",
                            !experience.isRemote
                          )
                        }
                      />

                      <label
                        htmlFor={`remote${index}`}
                        className="text-xl text-indigo-900 font-semibold"
                      >
                        Remote
                      </label>
                    </div>
                  </div>
                  <div></div>
                  <div className="flex flex-col gap-2 mb-4">
                    <label
                      htmlFor={`startdate_${index}`}
                      className="font-semibold"
                    >
                      Start Date<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id={`startdate_${index}`}
                      name={`startdate_${index}`}
                      placeholder="e.g GtechCorporation"
                      className="bg-[#e6e6e6] bg-whie py-3 rounded-md px-4 focus:outline-none block w-full"
                      value={experience.startDate}
                      onChange={(e) =>
                        handleWorkExperienceChange(
                          index,
                          "startDate",
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-2 mb-4">
                    <label
                      htmlFor={`enddate_${index}`}
                      className="font-semibold"
                    >
                      End Date<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id={`enddate_${index}`}
                      name={`enddate_${index}`}
                      placeholder="e.g GtechCorporation"
                      className="bg-[#e6e6e6] bg-whie py-3 rounded-md px-4 focus:outline-none w-full block"
                      value={experience.endDate}
                      onChange={(e) =>
                        handleWorkExperienceChange(
                          index,
                          "endDate",
                          e.target.value
                        )
                      }
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveWorkDutiesIndex(index)}
                  className="py-2 inline-block mb-8 px-4 cursor-pointer font-light bg-emerald-800 text-white hover:bg-emerald-900 rounded-full"
                >
                  <FaPlus />
                </button>
              </>
            );
          })}
        </div>

        <button
          type="button"
          onClick={addWorkExperience}
          className="py-2 px-6 cursor-pointer font-semibold bg-emerald-800 text-white hover:bg-emerald-900 rounded-full"
        >
          Add{" "}
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
            className="text-white border-emerald-800 border-2 bg-emerald-800 py-3 px-9 md:px-12 cursor-pointer rounded-full  transition pointer"
            onClick={() => {
              handleNextStep();
            }}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
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
          <FaTimes className="text-2xl" />
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
