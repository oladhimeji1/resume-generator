export default function BioDataForm() {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="text-2xl font-bold mb-4 ">
            What's the best way for employers to contact you
          </h1>

          <p className="text-xl text-zinc-700">
            We suggest including an email and phone number
          </p>
        </div>

        <p className="text-indigo-900 font-extrabold mb-8 text-sm">
          * Indicate a required field
        </p>
      </div>

      <div className="grid grid-cols-1 mb-12  md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="name" className="font-bold">
            NAME
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="e.g Godstime"
            className="border border-slate-400 bg-white py-2 px-4 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="surname" className="font-bold">
            SURNAME
          </label>
          <input
            type="text"
            id="surname"
            name="surname"
            placeholder="e.g Olademeji"
            className="border border-slate-400 bg-white py-2 px-4 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="city" className="font-bold">
            CITY
          </label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="e.g Kano"
            className="border border-slate-400 bg-white py-2 px-4 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="country" className="font-bold">
            COUNTRY
          </label>
          <input
            type="text"
            id="country"
            name="country"
            placeholder="e.g Nigeria"
            className="border border-slate-400 bg-white py-2 px-4 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="phone" className="font-bold">
            PHONE
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="e.g 1234567890"
            className="border border-slate-400 bg-white py-2 px-4 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="email" className="font-bold">
            EMAIL *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="e.g godstimeolademeji@email.com"
            className="border border-slate-400 bg-white py-2 px-4 focus:outline-none"
          />
        </div>
      </div>
    </>
  );
}
