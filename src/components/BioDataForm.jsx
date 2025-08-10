import { useState } from "react";
import photoPlaceholder from "../assets/images/photo-placeholder.jpg";
export default function BioDataForm({
  handleInputChange,
  resumeData,
  handleNextStep,
}) {
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form className="bg-white rounded-lg shadow p-8 relative">
      <h2 className="text-2xl font-bold mb-1">
        COMPLETE YOUR <span className="text-black">RESUME HEADING</span>
      </h2>
      <p className="text-gray-600 mb-6">
        Employers will use this information to contact you.
      </p>
      <div className="flex items-center gap-8 mb-8">
        <div className="w-28 h-28 bg-gray-100 rounded flex items-center justify-center border border-gray-300 overflow-hidden">
          <img
            src={photo || photoPlaceholder}
            alt="profile"
            className="w-24 h-24 object-cover rounded"
          />
        </div>
        <div>
          <label htmlFor="photo-upload">
            <span className="bg-emerald-600 text-white px-6 py-2 rounded font-semibold shadow hover:bg-emerald-700 cursor-pointer inline-block">
              UPLOAD PHOTO
            </span>
          </label>
          <input
            id="photo-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handlePhotoChange}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block font-semibold mb-1">First name</label>
          <input
            type="text"
            placeholder="e.g. John"
            className="w-full border border-gray-300 rounded px-4 py-2"
            value={resumeData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Last name</label>
          <input
            type="text"
            placeholder="e.g. Williams"
            className="w-full border border-gray-300 rounded px-4 py-2"
            value={resumeData.surname}
            onChange={(e) => handleInputChange("surname", e.target.value)}
          />
        </div>
      </div>
      <div className="mb-6">
        <label className="block font-semibold mb-1">Address</label>
        <input
          type="text"
          placeholder="e.g. 60, Collins st."
          className="w-full border border-gray-300 rounded px-4 py-2"
          value={resumeData.address || ""}
          onChange={(e) => handleInputChange("address", e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block font-semibold mb-1">City</label>
          <input
            type="text"
            placeholder="e.g. San Francisco"
            className="w-full border border-gray-300 rounded px-4 py-2"
            value={resumeData.city}
            onChange={(e) => handleInputChange("city", e.target.value)}
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Country</label>
          <select
            className="w-full border border-gray-300 rounded px-4 py-2"
            value={resumeData.country}
            onChange={(e) => handleInputChange("country", e.target.value)}
          >
            <option value="">Select Country</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Ghana">Ghana</option>
            <option value="South Africa">South Africa</option>
            <option value="Kenya">Kenya</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            {/* Add more countries as needed */}
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-1">Zip code</label>
          <input
            type="text"
            placeholder="e.g. 60185"
            className="w-full border border-gray-300 rounded px-4 py-2"
            value={resumeData.zip || ""}
            onChange={(e) => handleInputChange("zip", e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block font-semibold mb-1">Email address</label>
          <input
            type="email"
            placeholder="e.g. john_williams@example.com"
            className="w-full border border-gray-300 rounded px-4 py-2"
            value={resumeData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Phone</label>
          <input
            type="tel"
            placeholder="e.g. 202-555-0145"
            className="w-full border border-gray-300 rounded px-4 py-2"
            value={resumeData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
          />
        </div>
      </div>
      {/* Responsive fixed buttons for mobile */}
      <div className="flex justify-between mt-8 md:static fixed left-0 bottom-0 w-full bg-white p-4 z-10 border-t md:border-none">
        <button
          type="button"
          className="border border-gray-400 rounded px-6 py-2 font-semibold text-gray-700 hover:bg-gray-100 w-1/2 mr-2"
        >
          BACK
        </button>
        <button
          type="button"
          className="bg-orange-500 text-white px-8 py-2 rounded font-bold shadow hover:bg-orange-600 w-1/2 ml-2"
          onClick={handleNextStep}
        >
          SAVE & NEXT
        </button>
      </div>
    </form>
  );
}
