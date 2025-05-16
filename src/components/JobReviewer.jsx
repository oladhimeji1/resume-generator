const JobReviewer = () => {
  return (
    <div className="bg-white min-h-80 py-12 px-8 md:px-12">
      <div className="max-w-7xl mx-auto w-[90%] grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold md:text-4xl">
            Trusted by recruiters and job-seekers around the world.
          </h2>
          <p className="text-xl font-medium text-zinc-600">
            ResumeWizard customers got the job on average 48 days faster.*
          </p>

          <p className="mt-8 font-sm text-zinc-600">
            Based on survey of 258 ResumeWizard users
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 md:grid-cols-4 mb-12">
          <img src="/reviewers/grid1.png" alt="" />
          <img src="/reviewers/grid2.png" alt="" />
          <img src="/reviewers/grid3.png" alt="" />
          <img src="/reviewers/grid4.png" alt="" />
          <img src="/reviewers/grid5.png" alt="" />
          <img src="/reviewers/grid6.png" alt="" />
          <img src="/reviewers/grid7.png" alt="" />
          <img src="/reviewers/grid8.png" alt="" />
          <img src="/reviewers/grid9.png" alt="" />
          <img src="/reviewers/grid10.png" alt="" />
          <img src="/reviewers/grid11.png" alt="" />
          <img src="/reviewers/grid12.png" alt="" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-[90%]">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-2xl font-bold text-emerald-900">
              Our customers were hired by*:
            </h3>

            <p className="text-xl text-zinc-700">
              *ResumeWizard is not affiliated to those companies
            </p>
          </div>

          <div className="flex flex-wrap gap-6 items-center justify-between">
            <img src="/companies/dark-logo-amazon.svg" alt="Amazon logo." />
            <img src="/companies/dark-logo-apple.svg" alt="Apple logo." />
            <img src="/companies/dark-logo-gsk.svg" alt="Gsk logo." />
            <img src="/companies/dark-logo-pwc.svg" alt="pwc logo." />
            <img
              src="/companies/dark-logo-saintburys.svg"
              alt="Saintburys logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobReviewer;
