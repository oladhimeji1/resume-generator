export default function WorkForm() {
  return (
    <section className="mb-12 p-2 sm:p-0 flex flex-col md:flex-row gap-2">
      <div className="flex-1 relative">
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-2xl font-bold mb-4 ">
              Tell us about your most recent jobs
            </h1>

            <p className="text-xl text-zinc-700">
              We will start there and work backwards
            </p>
          </div>

          <p className="text-indigo-900 font-extrabold mb-8 text-sm">
            * Indicate a required field
          </p>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="jobtitle" className="font-bold">
              TITLE *
            </label>
            <input
              type="text"
              id="jobtitle"
              name="jobtitle"
              placeholder="e.g Sales Manager"
              className="border border-slate-400 bg-white py-2 px-4 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="employer" className="font-bold">
              EMPLOYER *
            </label>
            <input
              type="text"
              id="employer"
              name="employer"
              placeholder="e.g GtechCorporation"
              className="border border-slate-400 bg-white py-2 px-4 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="location" className="font-bold">
              LOCATION *
            </label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="e.g Kano, Nigeria"
              className="border border-slate-400 bg-white py-2 px-4 focus:outline-none"
            />

            <div className="flex gap-4 items-center ">
              <input
                type="checkbox"
                id="remote"
                className="p-40 accent-indigo-900 inline-block"
              />

              <label
                htmlFor="remote"
                className="text-xl text-indigo-900 font-bold"
              >
                Remote
              </label>
            </div>
          </div>
          <div></div>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="startdate" className="font-bold">
              START DATE *
            </label>
            <input
              type="date"
              id="startdate"
              name="startdate"
              placeholder="e.g GtechCorporation"
              className="border border-slate-400 bg-white py-2 px-4 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="enddate" className="font-bold">
              END DATE *
            </label>
            <input
              type="date"
              id="enddate"
              name="enddate"
              placeholder="e.g GtechCorporation"
              className="border border-slate-400 bg-white py-2 px-4 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
