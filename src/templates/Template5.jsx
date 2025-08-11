import React from "react";

const Template5 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 font-['Inter']">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden p-10">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center mb-4">
            <span className="text-3xl font-bold text-gray-800">JB</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 tracking-wide">
            JERRY BROWN
          </h1>
          <div className="flex flex-wrap items-center justify-center mt-2 text-sm text-gray-600 space-x-4">
            <p>example@example.com</p>
            <p>|</p>
            <p>555-555-5555</p>
            <p>|</p>
            <p>Mundelein, IL 60060</p>
          </div>
        </div>

        {/* Main Content Two-Column Layout */}
        <div className="grid grid-cols-3 gap-8">
          {/* Left Column (Main Content) */}
          <div className="col-span-2 space-y-6">
            {/* Professional Statement Section */}
            <div>
              <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 text-gray-800">
                Professional Statement
              </h2>
              <p className="text-sm text-gray-700 mt-4 leading-relaxed">
                A certified nursing assistant offering three years of experience
                in healthcare environments and more than seven as a family
                caregiver. Possesses superior time-management skills,
                compassionate bedside manner, and astute observational ability.
                Knowledgeable about mobility assistance and patient hygiene
                needs. Skilled at operating within long-term care environments
                or outpatient centers.
              </p>
            </div>

            {/* Professional Skills Section */}
            <div>
              <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 text-gray-800">
                Professional Skills
              </h2>
              <div className="mt-4 text-sm text-gray-700 space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800">CNA</h3>
                  <ul className="list-disc list-inside mt-1 ml-4 space-y-1">
                    <li>
                      Support diagnostic and treatment procedures, including
                      setting up and operating specialized medical equipment.
                    </li>
                    <li>
                      Render hands-on nursing care under direct RN supervision,
                      adhering to medical center policies and procedures.
                    </li>
                    <li>
                      Transcribe over 15 activities and record information in
                      the EMR system each day.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Personal Care</h3>
                  <ul className="list-disc list-inside mt-1 ml-4 space-y-1">
                    <li>
                      Prepare food and helped three family members eat to
                      support healthy nutrition.
                    </li>
                    <li>
                      Changed bed linens, made beds and laundered soiled linens
                      to keep patients' beds clean.
                    </li>
                    <li>
                      Checked mail, shopped for groceries, and handled bill
                      payments.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Communication</h3>
                  <ul className="list-disc list-inside mt-1 ml-4 space-y-1">
                    <li>
                      Consulted with 10+ nurses to develop patient care plans
                      and evaluate treatment options.
                    </li>
                    <li>
                      Engaged with patient family and friends to provide
                      courteous, efficient visit experience.
                    </li>
                    <li>
                      Promoted continuity of care by accurately and altogether
                      communicating to other caregivers the status of patients
                      for which care is provided.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Work History Section */}
            <div>
              <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 text-gray-800">
                Work History
              </h2>
              <div className="mt-4 text-sm text-gray-700 space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800">
                    MADO Healthcare | Mundelein, IL
                  </h3>
                  <p className="font-semibold text-gray-700">
                    Certified Nursing Assistant
                  </p>
                  <p className="text-xs text-gray-500">07/2019 - Current</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    MADO Healthcare | Mundelein, IL
                  </h3>
                  <p className="font-semibold text-gray-700">
                    Nursing Assistant Intern
                  </p>
                  <p className="text-xs text-gray-500">07/2018 - 07/2019</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Edward Family | Mundelein, IL
                  </h3>
                  <p className="font-semibold text-gray-700">
                    Family Caregiver
                  </p>
                  <p className="text-xs text-gray-500">06/2012 - 07/2018</p>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 text-gray-800">
                Education
              </h2>
              <div className="mt-4 text-sm text-gray-700">
                <h3 className="font-semibold text-gray-800">
                  University of St Mary of The Lake | Mundelein, IL
                </h3>
                <p className="font-semibold text-gray-700">
                  Associate of Science in Nursing
                </p>
                <p className="text-xs text-gray-500">06/2019</p>
              </div>
            </div>

            {/* Certifications Section */}
            <div>
              <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 text-gray-800">
                Certifications
              </h2>
              <ul className="list-disc list-inside mt-4 text-sm text-gray-700 space-y-1">
                <li>Certified Nursing Assistant - 2020</li>
                <li>Valid CNA License #123456</li>
              </ul>
            </div>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="col-span-1 space-y-6">
            {/* Skills Section */}
            <div>
              <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 text-gray-800">
                Skills
              </h2>
              <div className="grid grid-cols-2 mt-4 text-sm text-gray-700">
                <ul className="list-disc list-inside space-y-1">
                  <li>General housekeeping ability</li>
                  <li>Documentation procedures expert</li>
                  <li>Family care expertise</li>
                  <li>Quick problem solver</li>
                </ul>
                <ul className="list-disc list-inside space-y-1">
                  <li>Preparing meals</li>
                  <li>Helping with medication</li>
                  <li>Monitoring vitals</li>
                  <li>Microsoft Office</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template5;
