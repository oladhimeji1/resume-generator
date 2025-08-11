import React from "react";

const Template8 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 font-['Inter']">
      <div className="w-full max-w-4xl bg-white shadow-xl overflow-hidden rounded-lg p-10">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 tracking-wide">
            EILEEN DAVIS
          </h1>
          <div className="flex flex-wrap items-center justify-center mt-2 text-sm text-gray-600 space-x-4">
            <p>example@example.com</p>
            <p>|</p>
            <p>555-555-5555</p>
            <p>|</p>
            <p>Grand Forks, ND 58201</p>
          </div>
        </div>

        {/* Professional Summary Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold uppercase tracking-wide text-blue-600">
            Professional Summary
          </h2>
          <p className="text-sm text-gray-700 mt-4 leading-relaxed">
            Responsible secretary possessing first-rate scheduling, telephone,
            and documentation abilities. A service-oriented individual with
            expertise in preparing and modifying documents, coordinating
            meetings and trips and preparing responses on behalf of the company.
            Committed to establishing stellar rapport with clients of diverse
            backgrounds.
          </p>
        </div>

        {/* Work History Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold uppercase tracking-wide text-blue-600">
            Work History
          </h2>
          <div className="mt-4 text-sm text-gray-700 space-y-6">
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-1 text-gray-500">
                <p>12/2018 - Current</p>
                <p className="font-semibold text-gray-800">CeleraPro</p>
                <p>Grand Forks, ND</p>
              </div>
              <div className="col-span-3">
                <p className="font-semibold text-gray-800">Secretary</p>
                <ul className="list-disc list-inside mt-1 ml-4 space-y-1">
                  <li>
                    Maintain office safety by screening visitors, updating logs
                    and issuing temporary passes.
                  </li>
                  <li>
                    Complete supply orders and maintaining appropriate levels of
                    office supplies.
                  </li>
                  <li>
                    Create over 30 agendas, meeting notes and other documents to
                    enhance the collaborative process each quarter.
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-1 text-gray-500">
                <p>11/2014 - 12/2018</p>
                <p className="font-semibold text-gray-800">McDonald Hopkins</p>
                <p>Thompson, ND</p>
              </div>
              <div className="col-span-3">
                <p className="font-semibold text-gray-800">
                  Corporate Secretary's Assistant
                </p>
                <ul className="list-disc list-inside mt-1 ml-4 space-y-1">
                  <li>
                    Aided board of directors during executive decision-making
                    processes by generating staff reports to support corrective
                    actions and improvements.
                  </li>
                  <li>
                    Managed clerical staff of 123 employees and reorganized
                    training procedures to increase productivity.
                  </li>
                  <li>
                    Worked professionally to handle all client, vendor and
                    public guest requirements.
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-1 text-gray-500">
                <p>09/2012 - 11/2014</p>
                <p className="font-semibold text-gray-800">MZ Engineering</p>
                <p>Emerado, ND</p>
              </div>
              <div className="col-span-3">
                <p className="font-semibold text-gray-800">Secretary Intern</p>
                <ul className="list-disc list-inside mt-1 ml-4 space-y-1">
                  <li>
                    Requisitioned office supplies, assisting in payroll,
                    performed recordkeeping and tracked time cards for all
                    departmental office employees.
                  </li>
                  <li>
                    Received incoming packages and mail, dispersed parcels and
                    shipped outgoing items for a team of 48 employees.
                  </li>
                  <li>
                    Updated system to organize office documentation, maximizing
                    efficiency and increasing productivity.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold uppercase tracking-wide text-blue-600">
            Skills
          </h2>
          <div className="grid grid-cols-2 mt-4 text-sm text-gray-700">
            <ul className="list-disc list-inside space-y-1">
              <li>Filing experience</li>
              <li>Developing presentations</li>
              <li>Microsoft Office expertise</li>
              <li>Database management</li>
            </ul>
            <ul className="list-disc list-inside space-y-1">
              <li>Govenda proficiency</li>
              <li>Writing and organizational skills</li>
              <li>Time-management</li>
              <li>Teamwork</li>
            </ul>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold uppercase tracking-wide text-blue-600">
            Education
          </h2>
          <div className="mt-4 text-sm text-gray-700">
            <h3 className="font-semibold text-gray-800">
              Bachelor of Science{" "}
              <span className="font-normal">
                in Administrative Assistance And Secretarial Science
              </span>
            </h3>
            <p>University of North Dakota</p>
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h2 className="text-xl font-bold uppercase tracking-wide text-blue-600">
            Certifications
          </h2>
          <div className="mt-4 text-sm text-gray-700 space-y-1">
            <p>Microsoft Word Certified, Microsoft Corporation - 2014</p>
            <p>Google Project Management, Google Career Certificates - 2013</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template8;
