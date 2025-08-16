import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function ResumeDownload({
  resumeData,
  TemplateComponent,
  handlePrevStep,
  handleResetStep,
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
    pdf.save(`${resumeData.name}'s resume.pdf`);
    if (handleResetStep) handleResetStep();
  };

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
          <button
            onClick={handleDownloadPDF}
            className="bg-emerald-600 text-white px-7 py-3 rounded-lg font-semibold shadow hover:bg-emerald-700 transition text-lg flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            Download PDF
          </button>
        </div>
        {/* Resume Preview */}
        <div className="w-full flex flex-col items-center justify-center px-0 py-0 bg-white">
          {/* Mobile scroll/overlay note */}
          <div className="block md:hidden w-full text-center text-xs text-gray-500 mb-2">
            Scroll to preview your resume. PDF will be downloaded in A4 size.
          </div>
          <div
            className="bg-white border border-gray-100 rounded-xl shadow-md overflow-auto"
            style={{
              minHeight: 400,
              width: "210mm",
              height: "297mm",
              margin: "0 auto",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              borderRadius: 16,
              border: "1px solid #e5e7eb",
              background: "#fff",
              padding: 0,
              maxWidth: "100vw",
              maxHeight: "80vh",
            }}
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
