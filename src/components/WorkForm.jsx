export default function WorkForm({
  resumeData,
  setResumeData,
  handlePrevStep,
  handleNextStep,
}) {
  const handleWorkExperienceChange = (index, field, value) => {
    setResumeData((prevResumeData) => {
      const workExperience = [...prevResumeData.workExperience];
      workExperience[index][field] = value;
      return { ...prevResumeData, workExperience };
    });
  };

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
              <div
                key={index}
                className="grid grid-cols-1  md:grid-cols-2 gap-4"
              >
                <div className="flex flex-col gap-2 mb-4">
                  <label htmlFor={`jobTitle_${index}`} className="font-bold">
                    TITLE *
                  </label>
                  <input
                    type="text"
                    id={`jobTitle_${index}`}
                    name={`jobTitle_${index}`}
                    placeholder="e.g Sales Manager"
                    className="border border-slate-400 bg-white py-2 px-4 focus:outline-none"
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
                    EMPLOYER *
                  </label>
                  <input
                    type="text"
                    id={`employer_${index}`}
                    name={`employer_${index}`}
                    placeholder="e.g KondiPress LLC"
                    className="border border-slate-400 bg-white py-2 px-4 focus:outline-none"
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
                    LOCATION *
                  </label>
                  <input
                    type="text"
                    id={`location_${index}`}
                    name={`location_${index}`}
                    placeholder="e.g Kano, Nigeria"
                    className="border border-slate-400 bg-white py-2 px-4 focus:outline-none"
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
                    START DATE *
                  </label>
                  <input
                    type="date"
                    id={`startdate_${index}`}
                    name={`startdate_${index}`}
                    placeholder="e.g GtechCorporation"
                    className="border border-slate-400 bg-white py-2 px-4 focus:outline-none block w-full"
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
                    END DATE *
                  </label>
                  <input
                    type="date"
                    id={`enddate_${index}`}
                    name={`enddate_${index}`}
                    placeholder="e.g GtechCorporation"
                    className="border border-slate-400 bg-white py-2 px-4 focus:outline-none w-full block"
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
