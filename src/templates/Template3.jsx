const Template3 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4 font-['Inter']">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-xl overflow-hidden py-12 px-16">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-light text-gray-800">James Miller</h1>
          <p className="text-sm text-gray-600 mt-2">
            44 Shirley Ave, West Chicago, IL 60185, 563-458-6942
          </p>
          <p className="text-sm text-gray-600 italic">jmiller@gmail.com</p>
        </div>

        {/* Professional Summary Section */}
        <div className="mb-6">
          <h2 className="text-lg font-normal uppercase tracking-wide border-b border-gray-400 pb-1 text-gray-800">
            Professional Summary
          </h2>
          <p className="text-sm text-gray-700 mt-4 leading-relaxed">
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
        <div className="mb-6">
          <h2 className="text-lg font-normal uppercase tracking-wide border-b border-gray-400 pb-1 text-gray-800">
            Employment History
          </h2>
          <div className="mt-4 flex">
            <div className="w-1/4 pr-4">
              <p className="text-sm text-gray-600">Oct. 2015 - Apr. 2016</p>
              <p className="text-sm text-gray-600">Birmingham</p>
            </div>
            <div className="w-3/4">
              <h3 className="font-semibold text-gray-800">
                IT Technician, International Mobilites
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-1 ml-4">
                <li>Operate and maintain information systems</li>
                <li>Facilitating system utilization</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 flex">
            <div className="w-1/4 pr-4">
              <p className="text-sm text-gray-600">May 2017 - Current</p>
              <p className="text-sm text-gray-600">Birmingham</p>
            </div>
            <div className="w-3/4">
              <h3 className="font-semibold text-gray-800">
                IT Project Manager, Telecommunicado Ltd
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-1 space-y-1 ml-4">
                <li>Lead a team of technical staff</li>
                <li>Planning, procurement and execution of projects</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-6">
          <h2 className="text-lg font-normal uppercase tracking-wide border-b border-gray-400 pb-1 text-gray-800">
            Education
          </h2>
          <div className="mt-4 flex">
            <div className="w-1/4 pr-4">
              <p className="text-sm text-gray-600">Sep. 1999 - May 2011</p>
              <p className="text-sm text-gray-600">Bournville</p>
            </div>
            <div className="w-3/4">
              <h3 className="font-semibold text-gray-800">
                10 GCSEs including Maths (A), Business Studies (B), ICT (C),
                Bournville School Secondary School
              </h3>
            </div>
          </div>
        </div>

        {/* Honors Section */}
        <div className="mb-6">
          <h2 className="text-lg font-normal uppercase tracking-wide border-b border-gray-400 pb-1 text-gray-800">
            Honors
          </h2>
          <div className="mt-4 flex">
            <div className="w-1/4 pr-4">
              <p className="text-sm text-gray-600">Jun. 2015 - Jun. 2017</p>
              <p className="text-sm text-gray-600">Washwood</p>
            </div>
            <div className="w-3/4">
              <h3 className="font-semibold text-gray-800">
                ICT (B), Maths (C), Biology (B), Washwood Heath Technology
                College
              </h3>
              <p className="text-sm text-gray-700">
                Excellent notes in everything.
              </p>
            </div>
          </div>
        </div>

        {/* Courses Section */}
        <div className="mb-6">
          <h2 className="text-lg font-normal uppercase tracking-wide border-b border-gray-400 pb-1 text-gray-800">
            Courses
          </h2>
          <div className="mt-4 flex">
            <div className="w-1/4 pr-4">
              <p className="text-sm text-gray-600">Jan. 2014 - Jun. 2017</p>
            </div>
            <div className="w-3/4">
              <h3 className="font-semibold text-gray-800">
                BSc Computer Science (2:1), University of Birmingham
              </h3>
            </div>
          </div>
        </div>

        {/* References Section */}
        <div className="mb-6">
          <h2 className="text-lg font-normal uppercase tracking-wide border-b border-gray-400 pb-1 text-gray-800">
            References
          </h2>
          <div className="mt-4 flex">
            <div className="w-1/4 pr-4">
              <p className="text-sm text-gray-600">
                gary.com@G.C. Projects Inc
              </p>
            </div>
            <div className="w-3/4">
              <h3 className="font-semibold text-gray-800">
                Gary Cox from G.C. Projects Inc
              </h3>
              <p className="text-sm text-gray-700">
                garycox@gmail.com | 123456789
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-6">
          <h2 className="text-lg font-normal uppercase tracking-wide border-b border-gray-400 pb-1 text-gray-800">
            Skills
          </h2>
          <div className="mt-4 flex">
            <div className="w-1/4 pr-4">
              <p className="text-sm text-gray-600">XHTML</p>
              <p className="text-sm text-gray-600">Javascript</p>
              <p className="text-sm text-gray-600">CSS</p>
              <p className="text-sm text-gray-600">Visual Basic</p>
            </div>
            <div className="w-3/4">
              <p className="text-sm text-gray-800">Advanced</p>
              <p className="text-sm text-gray-800">Expert</p>
              <p className="text-sm text-gray-800">Advanced</p>
              <p className="text-sm text-gray-800">Advanced</p>
            </div>
          </div>
        </div>

        {/* Hobbies Section */}
        <div>
          <h2 className="text-lg font-normal uppercase tracking-wide border-b border-gray-400 pb-1 text-gray-800">
            Hobbies
          </h2>
          <div className="mt-4">
            <p className="text-sm text-gray-700">
              Web Design, Shopping, Traveling
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template3;
