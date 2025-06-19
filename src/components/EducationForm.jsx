import { FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa";

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
          <h1 className="text-2xl font-semibold mb-4 ">
            Tell us about your education
          </h1>

          <p className="text-md text-zinc-700">
            Enter your graduation experience so far, even if you are current
            student or did not graduate
          </p>
        </div>

        <p className="text-red-500 font-medium mb-8 text-sm">
          * Indicate a required field
        </p>
      </div>

      <div>
        {resumeData.education.map((education, index) => {
          return (
            <div key={index} className="grid grid-cols-1 mb-6 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2 mb-4">
                <label
                  htmlFor={`institution_${index}`}
                  className="font-semibold"
                >
                  Institution
                </label>
                <input
                  type="text"
                  id={`institution_${index}`}
                  name={`institution_${index}`}
                  placeholder="e.g University of Port Harcourt"
                  className="bg-[#e6e6e6] bg-whie py-3 rounded-md px-4 focus:outline-none"
                  value={education.institution}
                  onChange={(e) =>
                    handleEducationChange(index, "institution", e.target.value)
                  }
                />
              </div>
              <div className="flex flex-col gap-2 mb-4">
                <label
                  htmlFor={`schoolLocation_${index}`}
                  className="font-semibold"
                >
                  School Locaion
                </label>
                <input
                  type="text"
                  id={`schoolLocation_${index}`}
                  name={`schoolLocation_${index}`}
                  placeholder="e.g Kano, Nigeria"
                  className="bg-[#e6e6e6] bg-whie py-3 rounded-md px-4 focus:outline-none"
                  value={education.location}
                  onChange={(e) =>
                    handleEducationChange(index, "location", e.target.value)
                  }
                />
              </div>
              

              <div className="flex flex-col gap-2 mb-4">
                <label
                  htmlFor={`school_start_date${index}`}
                  className="font-semibold"
                >
                  Start Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id={`school_start_date${index}`}
                  name={`school_start_date${index}`}
                  placeholder="e.g GtechCorporation"
                  className="bg-[#e6e6e6] bg-whie py-3 rounded-md px-4 focus:outline-none block w-full"
                  value={education.startDate}
                  onChange={(e) =>
                    handleEducationChange(index, "startDate", e.target.value)
                  }
                />
              </div>
              <div className="flex flex-col gap-2 mb-4">
                <label
                  htmlFor={`school_end_date${index}`}
                  className="font-semibold"
                >
                  End Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id={`school_end_date${index}`}
                  name={`school_end_date${index}`}
                  placeholder="e.g GtechCorporation"
                  className="bg-[#e6e6e6] bg-whie py-3 rounded-md px-4 focus:outline-none block w-full "
                  value={education.endDate}
                  onChange={(e) =>
                    handleEducationChange(index, "endDate", e.target.value)
                  }
                />
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <label htmlFor={`degree_${index}`} className="font-semibold">
                  Degree
                </label>
                <input
                  type="text"
                  id={`degree_${index}`}
                  name={`degree_${index}`}
                  placeholder="e.g HND in Software Engineering"
                  className="bg-[#e6e6e6] bg-whie py-3 rounded-md px-4 focus:outline-none"
                  value={education.degree}
                  onChange={(e) =>
                    handleEducationChange(index, "degree", e.target.value)
                  }
                />
              </div>

              <div></div>
              
            </div>
          );
        })}
      </div>
      <button
        type="button"
        onClick={addEducation}
        className="py-2 px-4 cursor-pointer bg-emerald-800 text-white hover:bg-emerald-900 rounded-full"
      >
        <FaPlus />
      </button>


      <div className="mt-8 flex items-center justify-between gap-3 w-full">
        <button
          type="button"
          className="text-white border-emerald-800 border-2  bg-emerald-800 py-3 px-9 md:px-12 cursor-pointer rounded-full  transition pointer"
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
    </>
  );
}
