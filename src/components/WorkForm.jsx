import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function WorkForm({
  resumeData,
  setResumeData,
  handlePrevStep,
  handleNextStep,
}) {
  const [activeWorkDutiesIndex, setActiveWorkDutiesIndex] = useState(null);

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
  return (
    <section className="mb-12 p-2 sm:p-0 flex flex-col md:flex-row gap-2">
      <div className="flex-1 relative">
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-2xl font-bold mb-4 ">
              Tell us about your most recent jobs
            </h1>

            <p className="text-xl text-zinc-700">
              We will start there and work backwards
            </p>
          </div>

          <p className="text-indigo-900 font-extrabold mb-8 text-sm">
            * Indicate a required field
          </p>
        </div>

        <div>
          {resumeData.workExperience.map((experience, index) => {
            return (
              <>
                <div
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
                    <label htmlFor={`jobTitle_${index}`} className="font-bold">
                      Title *
                    </label>
                    <input
                      type="text"
                      id={`jobTitle_${index}`}
                      name={`jobTitle_${index}`}
                      placeholder="e.g Sales Manager"
                      className="bg-gray-400 bg-whie py-3 rounded-md px-4 focus:outline-none"
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
                    <label htmlFor={`employer_${index}`} className="font-bold">
                      Employer *
                    </label>
                    <input
                      type="text"
                      id={`employer_${index}`}
                      name={`employer_${index}`}
                      placeholder="e.g KondiPress LLC"
                      className="bg-gray-400 bg-whie py-3 rounded-md px-4 focus:outline-none"
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
                    <label htmlFor={`location_${index}`} className="font-bold">
                      Location *
                    </label>
                    <input
                      type="text"
                      id={`location_${index}`}
                      name={`location_${index}`}
                      placeholder="e.g Kano, Nigeria"
                      className="bg-gray-400 bg-whie py-3 rounded-md px-4 focus:outline-none"
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
                        className="text-xl text-indigo-900 font-bold"
                      >
                        Remote
                      </label>
                    </div>
                  </div>
                  <div></div>
                  <div className="flex flex-col gap-2 mb-4">
                    <label htmlFor={`startdate_${index}`} className="font-bold">
                      Start Date *
                    </label>
                    <input
                      type="date"
                      id={`startdate_${index}`}
                      name={`startdate_${index}`}
                      placeholder="e.g GtechCorporation"
                      className="bg-gray-400 bg-whie py-3 rounded-md px-4 focus:outline-none block w-full"
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
                    <label htmlFor={`enddate_${index}`} className="font-bold">
                      End Date *
                    </label>
                    <input
                      type="date"
                      id={`enddate_${index}`}
                      name={`enddate_${index}`}
                      placeholder="e.g GtechCorporation"
                      className="bg-gray-400 bg-whie py-3 rounded-md px-4 focus:outline-none w-full block"
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
                  className="py-2 inline-block mb-8 px-6 cursor-pointer font-bold bg-emerald-800 text-white hover:bg-emerald-900 rounded-full"
                >
                  Append Work Duties?
                </button>
              </>
            );
          })}
        </div>

        <button
          type="button"
          onClick={addWorkExperience}
          className="py-2 px-6 cursor-pointer font-bold bg-emerald-800 text-white hover:bg-emerald-900 rounded-full"
        >
          Add{" "}
        </button>

        <div className="mt-8 flex items-center justify-between gap-3 w-full">
          <button
            type="button"
            className="text-emerald-600 border-emerald-600 border-3  bg-white py-3 px-9 md:px-12 cursor-pointer rounded-full  transition pointer"
            onClick={() => {
              handlePrevStep();
            }}
          >
            Back
          </button>
          <button
            type="button"
            className="text-white  bg-emerald-600 py-3 cursor-pointer px-12 rounded-full  transition pointer hover:bg-emerald-900"
            onClick={() => {
              handleNextStep();
            }}
          >
            Next
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
      duties.push(""); // Add a new empty duty (or { name: "" } if you want objects)
      workExperience[workIndex] = { ...workExperience[workIndex], duties };
      return { ...prev, workExperience };
    });
  };

  return (
    <div className="h-full w-full z-500 bg-[#7B7B79] fixed inset-0 left-0 right-0 flex items-center justify-center">
      <div className="max-w-[700px] bg-white relative w-[90%]  min-h-[450px] p-4  rounded-3xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4 ">
          What are the Duties you performed as a Frontend Developer employers
        </h1>
        <p className="text-xl mb-6 text-zinc-700">
          We suggest you add up to three (3) responsiblities.
        </p>
        {experience.duties.map((duty, index) => {
          return (
            <>
              <div key={index} className="flex flex-col gap-2 mb-4">
                <label htmlFor={`duties_${index}`} className="font-bold">
                  Task {index + 1}
                </label>
                <input
                  type="text"
                  id={`duty${index}`}
                  name={`duty${index}`}
                  placeholder="e.g Good Communication skills"
                  className="border border-slate-400 bg-white py-2 px-4 focus:outline-none"
                  value={duty.name}
                  onChange={(e) =>
                    handleWorkDutiesChange(workIndex, index, e.target.value)
                  }
                />
              </div>
            </>
          );
        })}
        <button
          type="button"
          className="text-white  bg-emerald-600 py-3 cursor-pointer px-12 rounded-full  transition pointer hover:bg-emerald-900"
          onClick={() => {
            handleAddWorkDuties();
          }}
        >
          Add Duties
        </button>
        <FaTimes
          className="text-xl z-1000 text-emerald-900 cursor-pointer absolute top-5 right-10  md:text-3xl"
          onClick={() => {
            setActiveWorkDutiesIndex(null);
          }}
        />
      </div>
    </div>
  );
}
