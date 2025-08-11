const Template2 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-2xl overflow-hidden p-8 font-['Inter']">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-[#0594C3]">JAMES MILLER</h1>
          <div className="text-right">
            <p className="text-sm text-gray-700">
              44 Shirley Ave, West Chicago, IL 60185
            </p>
            <p className="text-sm text-[#0594C3] italic">jmiller@gmail.com</p>
            <p className="text-sm text-gray-700">563-458-6942</p>
          </div>
        </div>

        {/* Professional Summary Section */}
        <div className="mb-8">
          <div className="bg-[#0594C3] text-white py-2 px-4 rounded-t-md">
            <h2 className="text-lg font-bold uppercase tracking-wide">
              Professional Summary
            </h2>
          </div>
          <div className="p-4 bg-gray-50 border-b-2 border-l-2 border-r-2 rounded-b-md border-gray-300">
            <p className="text-sm text-gray-700 leading-relaxed">
              A highly resourceful, flexible, innovative, and enthusiastic
              project manager. Possessing considerable experience of managing
              projects from beginning to end, defining the project plan,
              timeline, scope and executing the analysis before providing
              detailed recommendations. Having an impressive track record of
              delivering major operational improvement and of orchestrating
              people, schedules and resources for optimum productivity,
              efficiency and quality. Keen to find a challenging position within
              an ambitious company where I will be able to continue to increase
              my project management skills.
            </p>
          </div>
        </div>

        {/* Employment History Section */}
        <div className="mb-8">
          <div className="bg-[#0594C3] text-white py-2 px-4 rounded-t-md">
            <h2 className="text-lg font-bold uppercase tracking-wide">
              Employment History
            </h2>
          </div>
          <div className="p-4 bg-gray-50 border-b-2 border-l-2 border-r-2 rounded-b-md border-gray-300 relative">
            <div className="absolute top-0 left-4 w-px bg-gray-300 h-full"></div>{" "}
            {/* Vertical line */}
            {/* Employment 1 */}
            <div className="relative mb-6">
              <div className="absolute left-1.5 top-1 h-2 w-2 bg-[#0594C3] rounded-full"></div>
              <div className="ml-8">
                <p className="text-xs text-gray-500 italic">
                  May 2017 - Current
                </p>
                <h3 className="font-semibold text-gray-800">
                  IT Project Manager at Telecommunicado Ltd, Birmingham
                </h3>
                <ul className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-1 ml-4">
                  <li>Lead a team of technical staff</li>
                  <li>Planning, procurement and execution of projects</li>
                </ul>
              </div>
            </div>
            {/* Employment 2 */}
            <div className="relative mb-0">
              <div className="absolute left-1.5 top-1 h-2 w-2 bg-[#0594C3] rounded-full"></div>
              <div className="ml-8">
                <p className="text-xs text-gray-500 italic">
                  October 2015 - April 2016
                </p>
                <h3 className="font-semibold text-gray-800">
                  IT Technician at International Mobilites, Birmingham
                </h3>
                <ul className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-1 ml-4">
                  <li>Operate and maintain information systems</li>
                  <li>Facilitating system utilization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-8">
          <div className="bg-[#0594C3] text-white py-2 px-4 rounded-t-md">
            <h2 className="text-lg font-bold uppercase tracking-wide">
              Education
            </h2>
          </div>
          <div className="p-4 bg-gray-50 border-b-2 border-l-2 border-r-2 rounded-b-md border-gray-300 relative">
            <div className="absolute top-0 left-4 w-px bg-gray-300 h-full"></div>

            {/* Education 1 */}
            <div className="relative mb-4">
              <div className="absolute left-1.5 top-1 h-2 w-2 bg-[#0594C3] rounded-full"></div>
              <div className="ml-8">
                <p className="text-xs text-gray-500 italic">
                  September 2014 - May 2016
                </p>
                <h3 className="font-semibold text-gray-800">
                  BSc Computer Science (2:1), University of Birmingham
                </h3>
              </div>
            </div>

            {/* Education 2 */}
            <div className="relative mb-4">
              <div className="absolute left-1.5 top-1 h-2 w-2 bg-[#0594C3] rounded-full"></div>
              <div className="ml-8">
                <p className="text-xs text-gray-500 italic">
                  September 2011 - May 2014
                </p>
                <h3 className="font-semibold text-gray-800">
                  A-Levels: ICT (B), Maths (C), Biology (B), Washwood Heath
                  Technology College
                </h3>
              </div>
            </div>

            {/* Education 3 */}
            <div className="relative">
              <div className="absolute left-1.5 top-1 h-2 w-2 bg-[#0594C3] rounded-full"></div>
              <div className="ml-8">
                <p className="text-xs text-gray-500 italic">
                  September 1999 - May 2011
                </p>
                <h3 className="font-semibold text-gray-800">
                  10 GCSE's including Maths (A), Business Studies (B), ICT (C),
                  Bournville School Secondary School
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Honors Section */}
        <div>
          <div className="bg-[#0594C3] text-white py-2 px-4 rounded-t-md">
            <h2 className="text-lg font-bold uppercase tracking-wide">
              Honors
            </h2>
          </div>
          <div className="p-4 bg-gray-50 border-b-2 border-l-2 border-r-2 rounded-b-md border-gray-300 relative">
            <div className="absolute top-0 left-4 w-px bg-gray-300 h-full"></div>

            <div className="relative">
              <div className="absolute left-1.5 top-1 h-2 w-2 bg-[#0594C3] rounded-full"></div>
              <div className="ml-8">
                <p className="text-xs text-gray-500 italic">
                  June 2015 - June 2017
                </p>
                <h3 className="font-semibold text-gray-800">
                  Board Member Mensa, Birmingham
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template2;
