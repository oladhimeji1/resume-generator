import React from "react";

const Template1 = ({ resumeData }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-2xl overflow-hidden p-8 font-['Inter']">
        {/* Header Section */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-blue-800">
            {resumeData.name}
          </h1>
          <p className="text-sm text-gray-700 mt-2">
            44 Shirley Ave, West Chicago, IL 60185, 563-458-6942
          </p>
          <p className="text-sm text-blue-800 italic">jmiller@gmail.com</p>
        </div>

        {/* Professional Summary Section */}
        <div className="mb-8">
          <h2 className="text-lg font-bold uppercase tracking-wide border-b-2 border-gray-300 pb-1">
            Professional Summary
          </h2>
          <p className="text-sm text-gray-700 mt-2 leading-relaxed">
            A highly resourceful, flexible, innovative, and enthusiastic project
            manager. Possessing considerable experience of managing projects
            from beginning to end, defining the project plan, timeline, scope
            and executing the analysis before providing detailed
            recommendations. Having an impressive track record of delivering
            major operational improvement and of orchestrating people, schedules
            and resources for optimum productivity, efficiency and quality. Keen
            to find a challenging position within an ambitious company where I
            will be able to continue to increase my project management skills.
          </p>
        </div>

        {/* Employment History Section */}
        <div className="mb-8">
          <h2 className="text-lg font-bold uppercase tracking-wide border-b-2 border-gray-300 pb-1">
            Employment History
          </h2>
          <div className="mt-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">
                  IT Technician, International Mobilites
                </h3>
                <p className="text-xs text-gray-500 italic">
                  Oct. 2015 - Apt. 2016
                </p>
              </div>
              <p className="text-sm text-gray-600">Birmingham</p>
            </div>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1 ml-4">
              <li>Operate and maintain information systems</li>
              <li>Facilitating system utilization</li>
            </ul>
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">
                  IT Project Manager, Telecommunicado Ltd
                </h3>
                <p className="text-xs text-gray-500 italic">
                  May 2017 - Current
                </p>
              </div>
              <p className="text-sm text-gray-600">Birmingham</p>
            </div>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1 ml-4">
              <li>Lead a team of technical staff</li>
              <li>Planning, procurement and execution of projects</li>
            </ul>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-8">
          <h2 className="text-lg font-bold uppercase tracking-wide border-b-2 border-gray-300 pb-1">
            Education
          </h2>
          <div className="mt-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">
                  Bournville School Secondary School
                </h3>
                <p className="text-xs text-gray-500 italic">
                  Sep. 1999 - May 2011
                </p>
              </div>
              <p className="text-sm text-gray-600">Bournville</p>
            </div>
            <p className="text-sm text-gray-700 mt-2">
              10 GCSE's including Maths (A), Business Studies (B), ICT (C)
            </p>
          </div>
        </div>

        {/* Honors Section */}
        <div>
          <h2 className="text-lg font-bold uppercase tracking-wide border-b-2 border-gray-300 pb-1">
            Honors
          </h2>
          <div className="mt-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">
                  Washwood Heath Technology College
                </h3>
                <p className="text-xs text-gray-500 italic">
                  Jun. 2015 - Jun. 2017
                </p>
              </div>
              <p className="text-sm text-gray-600">Washwood</p>
            </div>
            <p className="text-sm text-gray-700 mt-2">
              ICT (B), Maths (C), Biology (B)
            </p>
            <p className="text-sm text-gray-700">
              Excellent notes in everything.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template1;
