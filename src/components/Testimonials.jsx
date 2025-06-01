const Testimonials = () => {
  return (
    <div className="bg-emerald-200 w-full p-6 min-h-90">
      <div className="max-w-7xl my-8 mx-auto w-[95%]">
        <h2 className="text-2xl font-extrabold text-center md:text-4xl leading-relaxed mb-20">
          What People Are Saying About Our Resume Maker.
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-4 rounded-lg shadow-lg hover:ring-2 ring-emerald-900">
            <div className="flex items-center justify-between gap-10 mb-8">
              <h4 className="text-xl">Gail Ann ONeil</h4>
              <img
                src="/reviewers/grid1.png"
                className="w-18 rounded-full md:w-20"
                alt=""
              />
            </div>

            <p className="text-xl text-zinc-700 leading-relaxed">
              ResumeWizard enabled me to put together an updated resume very
              easily. The templates provided made it simple to choose the right
              wording.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:ring-2 ring-emerald-900">
            <div className="flex items-center justify-between gap-10 mb-8">
              <h4 className="text-xl">Tina</h4>
              <img
                src="/reviewers/grid2.png"
                className="w-18 rounded-full md:w-20"
                alt=""
              />
            </div>

            <p className="text-xl text-zinc-700 leading-relaxed">
              Clear directions and high definitions. A good range for resume
              styles and templates, cost effective. Professional services
              including reviews and feedback for imporvement.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg hover:ring-2 ring-emerald-900">
            <div className="flex items-center justify-between gap-10 mb-8">
              <h4 className="text-xl">Damian</h4>
              <img
                src="/reviewers/grid12.png"
                className="w-18 rounded-full md:w-20"
                alt=""
              />
            </div>

            <p className="text-xl text-zinc-700 leading-relaxed">
              More easy to create resume in the PRO version with AI which takes
              the work out of me by populating the required field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
