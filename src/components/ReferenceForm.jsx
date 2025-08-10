import { FaArrowLeft, FaTrash } from "react-icons/fa";

function ReferenceForm({
  setResumeData,
  resumeData,
  handlePrevStep,
  handleNextStep,
}) {
  // Add reference
  const handleAddReference = () => {
    if (resumeData.references.length < 2) {
      setResumeData((prev) => ({
        ...prev,
        references: [
          ...prev.references,
          { name: "", phone: "", location: "", occupation: "" },
        ],
      }));
    }
  };

  // Remove reference
  const handleRemoveReference = (index) => {
    setResumeData((prev) => ({
      ...prev,
      references: prev.references.filter((_, i) => i !== index),
    }));
  };

  // Change reference field
  const handleReferenceChange = (index, field, value) => {
    setResumeData((prev) => {
      const references = [...prev.references];
      references[index][field] = value;
      return { ...prev, references };
    });
  };

  return (
    <form className="max-w-7xl mx-auto bg-white rounded-lg shadow p-8 relative">
      <h2 className="text-2xl font-bold mb-1">REFERENCES</h2>
      <p className="text-gray-600 mb-6">
        Add up to two references to boost the credibility of your resume.
      </p>
      <div className="flex flex-col gap-8">
        {resumeData.references.map((reference, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#f6f6f6] rounded-lg p-6 border border-emerald-100 relative"
          >
            <button
              type="button"
              className="absolute top-4 right-4 text-red-500 hover:text-red-700"
              onClick={() => handleRemoveReference(index)}
              aria-label="Delete Reference"
            >
              <FaTrash />
            </button>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g John Doe"
                className="bg-white border border-emerald-300 py-3 rounded-md px-4 focus:outline-none focus:border-emerald-500 transition"
                value={reference.name}
                onChange={(e) =>
                  handleReferenceChange(index, "name", e.target.value)
                }
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g +123456790"
                className="bg-white border border-emerald-300 py-3 rounded-md px-4 focus:outline-none focus:border-emerald-500 transition"
                value={reference.phone}
                onChange={(e) =>
                  handleReferenceChange(index, "phone", e.target.value)
                }
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Address</label>
              <input
                type="text"
                placeholder="e.g Texas, United States"
                className="bg-white border border-emerald-300 py-3 rounded-md px-4 focus:outline-none focus:border-emerald-500 transition"
                value={reference.location}
                onChange={(e) =>
                  handleReferenceChange(index, "location", e.target.value)
                }
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Occupation</label>
              <input
                type="text"
                placeholder="e.g Software Engineer"
                className="bg-white border border-emerald-300 py-3 rounded-md px-4 focus:outline-none focus:border-emerald-500 transition"
                value={reference.occupation}
                onChange={(e) =>
                  handleReferenceChange(index, "occupation", e.target.value)
                }
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          className={`w-fit px-6 py-2 rounded bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700 transition ${
            resumeData.references.length >= 2
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          onClick={handleAddReference}
          disabled={resumeData.references.length >= 2}
        >
          + Add Reference
        </button>
      </div>
      <div className="flex justify-between mt-8 md:static fixed left-0 bottom-0 w-full bg-white p-4 z-10 border-t md:border-none">
        <button
          type="button"
          className="border border-gray-400 rounded px-6 py-2 font-semibold text-gray-700 hover:bg-gray-100 w-1/2 mr-2"
          onClick={handlePrevStep}
        >
          <FaArrowLeft className="inline mr-2" />
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

export default ReferenceForm;
