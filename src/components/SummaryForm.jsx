import React from "react";

function SummaryForm({
  resumeData,
  setResumeData,
  handlePrevStep,
  handleNextStep,
}) {
  return (
    <form className="max-w-6xl mx-auto bg-white rounded-lg shadow p-8 relative">
      <h2 className="text-2xl font-bold mb-1">CAREER SUMMARY</h2>
      <p className="text-gray-600 mb-6">
        Write a brief summary or career objective to highlight your strengths,
        experience, and goals.
      </p>
      <textarea
        className="w-full border border-gray-300 rounded px-4 py-3 min-h-[120px] resize-none"
        maxLength={500}
        placeholder="e.g. Results-driven software engineer with 5+ years of experience..."
        value={resumeData.summary || ""}
        onChange={(e) =>
          setResumeData((prev) => ({ ...prev, summary: e.target.value }))
        }
      />
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
          onClick={handleNextStep}
          className="bg-orange-500 text-white px-8 py-2 rounded font-bold shadow hover:bg-orange-600 w-1/2 ml-2"
        >
          Review & Download
        </button>
      </div>
    </form>
  );
}

export default SummaryForm;
