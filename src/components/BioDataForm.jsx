import { FaArrowRight } from "react-icons/fa";

export default function BioDataForm({
  handleInputChange,
  resumeData,
  handleNextStep,
}) {
  return (
    <>
      <div className="flex flex-col gap-5 ">
        <div>
          <h1 className="text-2xl font-semibold mb-2 ">
            What's the best way for employers to contact you
          </h1>

          <p className="text-xl text-zinc-700">
            We suggest including an email and phone number
          </p>
        </div>

        <p className="text-red-500 font-semibold mb-2 text-sm">
          * Indicate a required field
        </p>
      </div>
      <div className="grid grid-cols-1 mb-12  md:grid-cols-2 gap-4 ">
        <div className="flex flex-col gap-2 mb-2">
          <label htmlFor="name" className="font-semibold">
            Firstname <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="e.g John"
            className="bg-[#e6e6e6] border-2 border-dashed border-emerald-900 bg-whie py-3 rounded-md px-4 focus:outline-none focus:border-emerald-400"
            onChange={(e) => {
              handleInputChange("name", e.target.value);
            }}
            value={resumeData.name}
            autoComplete="true"
          />
        </div>
        <div className="flex flex-col gap-2 mb-2">
          <label htmlFor="surname" className="font-semibold">
            Lastname <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="surname"
            name="surname"
            placeholder="e.g Doe"
            className="bg-[#e6e6e6] border-2 border-dashed border-emerald-900  bg-whie py-3 rounded-md px-4 focus:outline-none focus:border-emerald-400"
            onChange={(e) => {
              handleInputChange("surname", e.target.value);
            }}
            value={resumeData.surname}
            autoComplete="true"
          />
        </div>
        <div className="flex flex-col gap-2 mb-2">
          <label htmlFor="city" className="font-semibold">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="e.g Kano"
            className="bg-[#e6e6e6] bg-whie border-2 border-dashed border-emerald-900 py-3 rounded-md px-4 focus:outline-none"
            onChange={(e) => {
              handleInputChange("city", e.target.value);
            }}
            value={resumeData.city}
          />
        </div>
        <div className="flex flex-col gap-2 mb-2">
          <label htmlFor="country" className="font-semibold">
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            placeholder="e.g Nigeria"
            className="bg-[#e6e6e6] bg-whie py-3 border-2 border-dashed border-emerald-900 rounded-md px-4 focus:outline-none focus:border-emerald-400"
            onChange={(e) => {
              handleInputChange("country", e.target.value);
            }}
            value={resumeData.country}
            autoComplete="true"
          />
        </div>
        <div className="flex flex-col gap-2 mb-2">
          <label htmlFor="phone" className="font-semibold">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="e.g 1234567890"
            className="bg-[#e6e6e6] bg-whie py-3 border-2 border-dashed border-emerald-900 rounded-md px-4 focus:outline-none focus:border-emerald-400"
            onChange={(e) => {
              handleInputChange("phone", e.target.value);
            }}
            value={resumeData.phone}
            autoComplete="true"
          />
        </div>
        <div className="flex flex-col gap-2 mb-2">
          <label htmlFor="email" className="font-semibold">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="e.g johndoe@example.com"
            className="bg-[#e6e6e6] border-2 border-dashed border-emerald-900 py-3 rounded-md px-4 focus:outline-none focus:border-emerald-400"
            onChange={(e) => {
              handleInputChange("email", e.target.value);
            }}
            value={resumeData.email}
            autoComplete="true"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 mb-4 relative">
        <label htmlFor="summary" className="font-semibold">
          SUMMARY
        </label>
        <textarea
          rows="10"
          className="bg-[#e6e6e6] border-2 border-dashed border-emerald-900 py-3 rounded-md px-4 focus:outline-none focus:border-emerald-400"
          name="summary"
          id="summary"
          placeholder="Describe your Career Objectives"
          onChange={(e) => {
            handleInputChange("summary", e.target.value);
          }}
          value={resumeData.summary}
          autoComplete="true"
        ></textarea>
      </div>

      <button
        type="button"
        className="text-white bg-emerald-600 py-3 cursor-pointer px-6 rounded-full  transition pointer hover:bg-emerald-900"
        onClick={() => {
          handleNextStep();
        }}
      >
        Next: Work Experience
      </button>
    </>
  );
}
