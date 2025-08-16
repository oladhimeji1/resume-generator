import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function ResumeDownload({
  resumeData,
  TemplateComponent,
  handlePrevStep,
}) {
  const resumeRef = useRef();

  const handleDownloadPDF = async () => {
    const input = resumeRef.current;
    if (!input) return;
    const canvas = await html2canvas(input, { scale: 1.8 });
    const imgData = canvas.toDataURL("image/jpeg");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: "a4",
      compress: true,
    });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    // Calculate image dimensions to fit A4
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pageWidth;
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    let position = 0;
    let remainingHeight = pdfHeight;

    // If content fits on one page
    if (pdfHeight <= pageHeight) {
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    } else {
      // Content spans multiple pages
      while (remainingHeight > 0) {
        pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
        remainingHeight -= pageHeight;
        position -= pageHeight;
        if (remainingHeight > 0) pdf.addPage();
      }
    }
    pdf.save("resume.pdf");
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-[#f4f6fa] py-4 px-1 md:py-8 md:px-2">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-0 flex flex-col gap-0 border border-gray-200">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between px-4 py-6 md:px-8 md:py-8 border-b border-gray-100 bg-gradient-to-r from-white to-[#eaf3f7] rounded-t-2xl">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 tracking-tight font-serif">
              Review & Download
            </h2>
            <p className="text-gray-500 text-sm md:text-base mb-2 font-medium">
              Preview your resume below. Download as PDF or go back to edit any
              section.
            </p>
          </div>
          <button
            onClick={handleDownloadPDF}
            className="bg-emerald-600 text-white px-5 py-2 md:px-7 md:py-3 rounded-lg font-semibold shadow hover:bg-emerald-700 transition text-base md:text-lg flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            Download PDF
          </button>
        </div>
        {/* Resume Preview */}
        <div className="w-full flex flex-col items-center justify-center px-2 md:px-8 py-4 md:py-8 bg-white">
          <div
            className="w-full max-w-full md:max-w-6xl bg-white border border-gray-100 rounded-xl shadow-md p-2 md:p-10 overflow-auto"
            style={{ minHeight: 300 }}
          >
            {TemplateComponent ? (
              <TemplateComponent
                ref={resumeRef}
                resumeData={resumeData}
                isWeb
              />
            ) : (
              <div className="text-center text-gray-400 py-20">
                No template selected.
              </div>
            )}
          </div>
        </div>
        {/* Footer Actions */}
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 px-4 md:px-8 py-4 md:py-6 border-t border-gray-100 bg-gradient-to-r from-white to-[#eaf3f7] rounded-b-2xl">
          <button
            type="button"
            className="border border-gray-400 rounded-lg px-4 py-2 md:px-6 md:py-2 font-semibold text-gray-700 hover:bg-gray-100 w-full md:w-1/2 transition focus:outline-none focus:ring-2 focus:ring-emerald-400"
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
