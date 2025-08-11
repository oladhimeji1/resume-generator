import React from "react";

const Template4 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 font-['Inter']">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden p-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">JAMES MILLER</h1>
          <div className="flex flex-wrap items-center mt-4 text-sm text-gray-600 space-x-4">
            <p className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              44 Shirley Ave, West Chicago, IL 60185
            </p>
            <p className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              jmiller@gmail.com
            </p>
            <p className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              563-458-6942
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="col-span-2 space-y-6">
            {/* Professional Summary Section */}
            <div>
              <h2 className="flex items-center text-lg font-semibold text-gray-800 mb-2">
                <svg
                  className="w-5 h-5 mr-2 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Professional summary
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                A highly resourceful, flexible, innovative, and enthusiastic
                project manager. Possessing considerable experience of managing
                projects from beginning to end, defining the project plan,
                timeline, scope and executing the analysis before providing
                detailed recommendations. Having an impressive track record of
                delivering major operational improvement and of orchestrating
                people, schedules and resources for optimum productivity,
                efficiency and quality. Keen to find a challenging position
                within an ambitious company where I will be able to continue to
                increase my project management skills.
              </p>
            </div>

            {/* Employment History Section */}
            <div>
              <h2 className="flex items-center text-lg font-semibold text-gray-800 mb-2">
                <svg
                  className="w-5 h-5 mr-2 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Employment History
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800">
                    IT Project Manager at Telecommunicado Ltd, Birmingham
                  </h3>
                  <p className="text-xs text-gray-500">May 2017 - Current</p>
                  <ul className="list-disc list-inside text-sm text-gray-700 mt-1 ml-4">
                    <li>Lead a team of technical staff</li>
                    <li>Planning, procurement and execution of projects</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    IT Technician at International Mobilites, Birmingham
                  </h3>
                  <p className="text-xs text-gray-500">
                    October 2015 - April 2016
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-700 mt-1 ml-4">
                    <li>Operate and maintain information systems</li>
                    <li>Facilitating system utilization</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h2 className="flex items-center text-lg font-semibold text-gray-800 mb-2">
                <svg
                  className="w-5 h-5 mr-2 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0L.294 8.788A1 1 0 001 10.5h18a1 1 0 00.706-1.712L10.394 2.08zM16 14a1 1 0 01-1 1H5a1 1 0 010-2h10a1 1 0 011 1z"></path>
                </svg>
                Education
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800">
                    BSc Computer Science (2:1), University of Birmingham
                  </h3>
                  <p className="text-xs text-gray-500">
                    September 2014 - May 2016
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    A-Levels: ICT (B), Maths (C), Biology (B), Washwood Heath
                    Technology College
                  </h3>
                  <p className="text-xs text-gray-500">
                    September 2011 - May 2014
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    10 GCSE's including Maths (A), Business Studies (B), ICT
                    (C), Bournville School Secondary School
                  </h3>
                  <p className="text-xs text-gray-500">
                    September 1999 - May 2011
                  </p>
                </div>
              </div>
            </div>

            {/* Honors Section */}
            <div>
              <h2 className="flex items-center text-lg font-semibold text-gray-800 mb-2">
                <svg
                  className="w-5 h-5 mr-2 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm-5 8a5 5 0 1110 0 5 5 0 01-10 0z"></path>
                </svg>
                Honors
              </h2>
              <h3 className="font-semibold text-gray-800">
                Board Member Mensa, Birmingham
              </h3>
              <p className="text-xs text-gray-500">June 2015 - June 2017</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-1 space-y-6">
            {/* Skills Section */}
            <div>
              <h2 className="flex items-center text-lg font-semibold text-gray-800 mb-2">
                <svg
                  className="w-5 h-5 mr-2 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm-5 8a5 5 0 1110 0 5 5 0 01-10 0z"></path>
                </svg>
                Skills
              </h2>
              <div className="text-sm text-gray-700">
                <p className="flex justify-between">
                  <span>XHTML</span>
                  <span className="text-gray-500">Advanced</span>
                </p>
                <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden mt-1 mb-2">
                  <div
                    className="bg-blue-500 h-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>

                <p className="flex justify-between">
                  <span>JavaScript</span>
                  <span className="text-gray-500">Expert</span>
                </p>
                <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden mt-1 mb-2">
                  <div
                    className="bg-blue-500 h-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>

                <p className="flex justify-between">
                  <span>CSS</span>
                  <span className="text-gray-500">Advanced</span>
                </p>
                <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden mt-1 mb-2">
                  <div
                    className="bg-blue-500 h-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>

                <p className="flex justify-between">
                  <span>Visual Basic</span>
                  <span className="text-gray-500">Advanced</span>
                </p>
                <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden mt-1 mb-2">
                  <div
                    className="bg-blue-500 h-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Hobbies Section */}
            <div>
              <h2 className="flex items-center text-lg font-semibold text-gray-800 mb-2">
                <svg
                  className="w-5 h-5 mr-2 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16z"></path>
                  <path
                    d="M10 11a1 1 0 110-2 1 1 0 010 2z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Hobbies
              </h2>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Web Design</li>
                <li>Shopping</li>
                <li>Travelling</li>
              </ul>
            </div>

            {/* Languages Section */}
            <div>
              <h2 className="flex items-center text-lg font-semibold text-gray-800 mb-2">
                <svg
                  className="w-5 h-5 mr-2 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM5 8a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Languages
              </h2>
              <div className="text-sm text-gray-700 space-y-2">
                <div>
                  <p className="flex justify-between">
                    <span>English</span>
                  </p>
                  <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden mt-1 mb-2">
                    <div
                      className="bg-blue-500 h-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <p className="flex justify-between">
                    <span>French</span>
                  </p>
                  <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden mt-1 mb-2">
                    <div
                      className="bg-blue-500 h-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <p className="flex justify-between">
                    <span>Spanish</span>
                  </p>
                  <div className="w-full bg-gray-200 h-1 rounded-full overflow-hidden mt-1 mb-2">
                    <div
                      className="bg-blue-500 h-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template4;
