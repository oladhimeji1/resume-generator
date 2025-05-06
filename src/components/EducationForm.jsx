export default function EducationForm({ resumeData, setResumeData }) {
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
                <label htmlFor="institution" className="font-bold">
                  INSTITUTION
                </label>
                <input
                  type="text"
                  id="institution"
                  name="institution"
                  placeholder="e.g University of Port Harcourt"
                  className="border border-slate-400 bg-white py-2 px-4 focus:outline-none"
                  value={education.institution}
                  onChange={(e) =>
                    handleEducationChange(index, "institution", e.target.value)
                  }
                />
              </div>
              <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="schoolLocation" className="font-bold">
                  SCHOOL LOCATION
                </label>
                <input
                  type="text"
                  id="schoolLocation"
                  name="schoolLocation"
                  placeholder="e.g Kano, Nigeria"
                  className="border border-slate-400 bg-white py-2 px-4 focus:outline-none"
                  value={education.location}
                  onChange={(e) =>
                    handleEducationChange(index, "location", e.target.value)
                  }
                />
              </div>
              <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="degree" className="font-bold">
                  DEGREE
                </label>
                <input
                  type="text"
                  id="degree"
                  name="degree"
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
                <label htmlFor="school_start_date" className="font-bold">
                  START DATE *
                </label>
                <input
                  type="date"
                  id="school_start_date"
                  name="school_start_date"
                  placeholder="e.g GtechCorporation"
                  className="border border-slate-400 bg-white py-2 px-4 focus:outline-none"
                  value={education.startDate}
                  onChange={(e) =>
                    handleEducationChange(index, "startDate", e.target.value)
                  }
                />
              </div>
              <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="school_end_date" className="font-bold">
                  END DATE *
                </label>
                <input
                  type="date"
                  id="school_end_date"
                  name="school_end_date"
                  placeholder="e.g GtechCorporation"
                  className="border border-slate-400 bg-white py-2 px-4 focus:outline-none"
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
    </>
  );
}
