export default function ResumePreview({
  TemplateComponent,
  resumeData,
  setIsPreviewed,
}) {
  return (
    <div className="h-full w-full bg-[#B0B6BD] fixed inset-0 z-1000 right-0  p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-4xl h-[520px]  ">
        <div className="flex items-center justify-between py-2 px-8 shadow-md">
          <h2 className="text-2xl text-emerald-800">Resume Preview</h2>
          <button
            onClick={() => {
              setIsPreviewed(false);
            }}
            className="text-2xl font-bold text-emerald-900 cursor-pointer"
          >
            X
          </button>
        </div>

        <div className="bg-[#092347] h-[500px] mt-4 overflow-y-scroll">
          {TemplateComponent && <TemplateComponent resumeData={resumeData} />}
        </div>
      </div>
    </div>
  );
}
