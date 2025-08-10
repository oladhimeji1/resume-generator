import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";

export default function ResumeDownload({
  resumeData,
  TemplateComponent,
  handlePrevStep,
}) {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-[#f4f6fa] py-8 px-2">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-0 flex flex-col gap-0 border border-gray-200">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between px-8 py-8 border-b border-gray-100 bg-gradient-to-r from-white to-[#eaf3f7] rounded-t-2xl">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight font-serif">
              Review & Download
            </h2>
            <p className="text-gray-500 text-base mb-2 font-medium">
              Preview your resume below. Download as PDF or go back to edit any
              section.
            </p>
          </div>
          <PDFDownloadLink
            document={<TemplateComponent resumeData={resumeData} />}
            fileName="resume.pdf"
            className="bg-emerald-600 text-white px-7 py-3 rounded-lg font-semibold shadow hover:bg-emerald-700 transition text-lg flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            {({ loading }) =>
              loading ? (
                "Preparing PDF..."
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  Download PDF
                </>
              )
            }
          </PDFDownloadLink>
        </div>
        {/* Resume Preview */}
        <div className="w-full flex flex-col items-center justify-center px-4 md:px-8 py-8 bg-white">
          <div
            className="w-full max-w-2xl bg-white border border-gray-100 rounded-xl shadow-md p-6 md:p-10 overflow-auto"
            style={{ minHeight: 400 }}
          >
            {TemplateComponent ? (
              <TemplateComponent resumeData={resumeData} isWeb />
            ) : (
              <div className="text-center text-gray-400 py-20">
                No template selected.
              </div>
            )}
          </div>
        </div>
        {/* Footer Actions */}
        <div className="flex flex-col md:flex-row gap-4 px-8 py-6 border-t border-gray-100 bg-gradient-to-r from-white to-[#eaf3f7] rounded-b-2xl">
          <button
            type="button"
            className="border border-gray-400 rounded-lg px-6 py-2 font-semibold text-gray-700 hover:bg-gray-100 w-full md:w-1/2 transition focus:outline-none focus:ring-2 focus:ring-emerald-400"
            onClick={handlePrevStep}
          >
            Go Back & Edit
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-2 text-center pb-6">
          Tip: Double-check your details before downloading. You can always go
          back and make changes.
        </p>
      </div>
    </section>
  );
}
