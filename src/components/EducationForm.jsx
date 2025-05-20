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
      return { ...prevResumeData, education };
    });
  };

  const addEducation = () => {
    setResumeData((prevResumeData) => ({
      ...prevResumeData,
      education: [
        ...prevResumeData.education,
        {
          jobTitle: "",
          company: "",
          dates: "",
          location: "",
        },
      ],
    }));
  };
  return (
    <>
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-2xl font-bold mb-4 ">
            Tell us about your education
          </h1>

          <p className="text-xl text-zinc-700">
            Enter your graduation experience so far, even if you are current
            student or did not graduate
          </p>
        </div>

        <p className="text-indigo-900 font-extrabold mb-8 text-sm">
          * Indicate a required field
        </p>
      </div>

      <div>
        {resumeData.education.map((education, index) => {
          return (
            <div key={index} className="grid grid-cols-1  md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2 mb-4">
                <label htmlFor={`institution_${index}`} className="font-bold">
                  INSTITUTION
                </label>
                <input
                  type="text"
                  id={`institution_${index}`}
                  name={`institution_${index}`}
                  placeholder="e.g University of Port Harcourt"
                  className="border border-slate-400 bg-white py-2 px-4 focus:outline-none"
                  value={education.institution}
                  onChange={(e) =>
                    handleEducationChange(index, "institution", e.target.value)
                  }
                />
              </div>
              <div className="flex flex-col gap-2 mb-4">
                <label
                  htmlFor={`schoolLocation_${index}`}
                  className="font-bold"
                >
                  SCHOOL LOCATION
                </label>
                <input
                  type="text"
                  id={`schoolLocation_${index}`}
                  name={`schoolLocation_${index}`}
                  placeholder="e.g Kano, Nigeria"
                  className="border border-slate-400 bg-white py-2 px-4 focus:outline-none"
                  value={education.location}
                  onChange={(e) =>
                    handleEducationChange(index, "location", e.target.value)
                  }
                />
              </div>
              <div className="flex flex-col gap-2 mb-4">
                <label htmlFor={`degree_${index}`} className="font-bold">
                  DEGREE
                </label>
                <input
                  type="text"
                  id={`degree_${index}`}
                  name={`degree_${index}`}
                  placeholder="e.g HND"
                  className="border border-slate-400 bg-white py-2 px-4 focus:outline-none"
                  value={education.degree}
                  onChange={(e) =>
                    handleEducationChange(index, "degree", e.target.value)
                  }
                />
              </div>

              <div></div>

              <div className="flex flex-col gap-2 mb-4">
                <label
                  htmlFor={`school_start_date${index}`}
                  className="font-bold"
                >
                  START DATE *
                </label>
                <input
                  type="date"
                  id={`school_start_date${index}`}
                  name={`school_start_date${index}`}
                  placeholder="e.g GtechCorporation"
                  className="border border-slate-400 bg-white py-2 px-4 focus:outline-none block w-full"
                  value={education.startDate}
                  onChange={(e) =>
                    handleEducationChange(index, "startDate", e.target.value)
                  }
                />
              </div>
              <div className="flex flex-col gap-2 mb-4">
                <label
                  htmlFor={`school_end_date${index}`}
                  className="font-bold"
                >
                  END DATE *
                </label>
                <input
                  type="date"
                  id={`school_end_date${index}`}
                  name={`school_end_date${index}`}
                  placeholder="e.g GtechCorporation"
                  className="border border-slate-400 bg-white py-2 px-4 focus:outline-none block w-full "
                  value={education.endDate}
                  onChange={(e) =>
                    handleEducationChange(index, "endDate", e.target.value)
                  }
                />
              </div>
            </div>
          );
        })}
      </div>
      <button
        type="button"
        onClick={addEducation}
        className="py-2 px-6 cursor-pointer font-bold bg-emerald-800 text-white hover:bg-emerald-900 rounded-full"
      >
        Add
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
    </>
  );
}
