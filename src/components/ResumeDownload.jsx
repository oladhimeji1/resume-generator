import { FaTimes } from "react-icons/fa";
import { PDFDownloadLink } from "@react-pdf/renderer";
export default function ResumeDownload({
  setIsDownloadTemplateShown,
  resumeData,
  TemplateComponent,
}) {
  return (
    <div className="h-full w-full z-500 bg-[#7B7B79] fixed inset-0 left-0 right-0 flex items-center justify-center">
      <div className="max-w-[700px] bg-white relative w-[90%]  min-h-[450px] p-4  rounded-3xl shadow-lg">
        <FaTimes
          className="text-xl z-1000 text-emerald-700 cursor-pointer absolute top-5 right-10  md:text-3xl"
          onClick={() => {
            setIsDownloadTemplateShown(false);
          }}
        />
        <div className="flex flex-col gap-8">
          <div>
            <img
              src={"/resume-build-illustration.svg"}
              alt=""
              className="w-full h-auto max-w-full"
            />
          </div>
          <div className="flex text-center md:text-left flex-col md:flex-row items-center gap-4  justify-between">
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-xl md:text-2xl">Great work!</h2>
              <p className="text-sm font-medium md:text-lg text-zinc-600">
                Your resume is really looking good. Click the Download button to
                save your resume on your local machine for free 🤗
              </p>
            </div>
            <div>
              {TemplateComponent && (
                <PDFDownloadLink
                  document={<TemplateComponent resumeData={resumeData} />}
                  fileName={`${resumeData.name} ${resumeData.surname} Resume`}
                  className="cursor-pointer"
                >
                  <button
                    type="button"
                    className="py-4 px-12 bg-emerald-700 cursor-pointer rounded-full text-white font-bold text-xl "
                  >
                    Download
                  </button>
                </PDFDownloadLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
