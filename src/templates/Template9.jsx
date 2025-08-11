const Template9 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 font-['Inter']">
      <div className="w-full max-w-4xl bg-white shadow-xl overflow-hidden rounded-lg">
        {/* Header Section */}
        <div className="bg-blue-600 text-white p-6 md:p-8 flex items-center">
          <div className="w-16 h-16 bg-white rounded-md flex items-center justify-center mr-6">
            <span className="text-3xl font-bold text-blue-600">TP</span>
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-wide">TAMMY PHILLIPS</h1>
            <div className="flex flex-wrap items-center mt-2 text-sm space-x-4">
              <p>Newark, NJ 07102</p>
              <p className="hidden md:inline">|</p>
              <p>example@example.com</p>
              <p className="hidden md:inline">|</p>
              <p>(555) 555-5555</p>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Professional Summary Section */}
          <div>
            <h2 className="text-xl font-bold uppercase tracking-wide text-blue-800">
              Professional Summary
            </h2>
            <div className="border-b-2 border-gray-300 w-full mt-1 mb-4"></div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Dedicated and results-driven brand ambassador manager with over 10
              years of experience in creating memorable brand experiences and
              driving brand awareness. Proven track record of exceeding
              performance targets, building strong client relationships and
              delivering exceptional customer service. Adept at developing and
              implementing strategic marketing campaigns to maximize brand
              visibility and engagement.
            </p>
          </div>

          {/* Work History Section */}
          <div>
            <h2 className="text-xl font-bold uppercase tracking-wide text-blue-800">
              Work History
            </h2>
            <div className="border-b-2 border-gray-300 w-full mt-1 mb-4"></div>
            <div className="relative space-y-6">
              {/* Job 1 */}
              <div className="border-l-2 border-gray-300 pl-4 relative pb-4">
                <span className="absolute -left-2 top-0 w-4 h-4 bg-white border-2 border-blue-600 rounded-full"></span>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-800">
                      Brand Ambassador Manager /{" "}
                      <span className="font-normal text-gray-700">
                        Aspirant LLC - New York, NY
                      </span>
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 font-semibold">
                    01/2021 - Current
                  </p>
                </div>
                <ul className="list-disc list-inside text-sm text-gray-700 mt-2 ml-4 space-y-1">
                  <li>
                    Develop and execute marketing campaigns for various clients,
                    resulting in a 20% increase in brand visibility and about
                    15% boost in sales each quarter.
                  </li>
                  <li>
                    Conduct market research and analysis to identify trends and
                    opportunities, leading to the creation of targeted
                    promotional events that generate an approximate 25% increase
                    in customer engagement.
                  </li>
                  <li>
                    Collaborate with clients to set objectives, create key
                    performance indicators (KPIs) and provide regular reports on
                    campaign effectiveness.
                  </li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="border-l-2 border-gray-300 pl-4 relative pb-4">
                <span className="absolute -left-2 top-0 w-4 h-4 bg-white border-2 border-blue-600 rounded-full"></span>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-800">
                      Senior Brand Ambassador /{" "}
                      <span className="font-normal text-gray-700">
                        Dagne Dover - New York, NY
                      </span>
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 font-semibold">
                    06/2018 - 12/2020
                  </p>
                </div>
                <ul className="list-disc list-inside text-sm text-gray-700 mt-2 ml-4 space-y-1">
                  <li>
                    Spearheaded the execution of on-site and off-site
                    promotional events, increasing brand reach by 30% and
                    captivating valuable customer feedback.
                  </li>
                  <li>
                    Acted as a brand spokesperson at trade shows and events,
                    engaging with at least 100 customers daily, resulting in a
                    15% conversion rate.
                  </li>
                  <li>
                    Met or exceeded individual KPIs, earning recognition as a
                    top-performing senior brand ambassador consistently.
                  </li>
                </ul>
              </div>

              {/* Job 3 */}
              <div className="border-l-2 border-gray-300 pl-4 relative">
                <span className="absolute -left-2 top-0 w-4 h-4 bg-white border-2 border-blue-600 rounded-full"></span>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-800">
                      Brand Ambassador /{" "}
                      <span className="font-normal text-gray-700">
                        Goodwill Industries of Greater New York - New York, NY
                      </span>
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 font-semibold">
                    03/2013 - 06/2018
                  </p>
                </div>
                <ul className="list-disc list-inside text-sm text-gray-700 mt-2 ml-4 space-y-1">
                  <li>
                    Conducted product demonstrations at various retail
                    locations, achieving an average sales increase of 25% during
                    promotional events.
                  </li>
                  <li>
                    Built and maintained positive relationships with key retail
                    partners, ensuring prime shelf placement and product
                    visibility.
                  </li>
                  <li>
                    Gathered customer feedback and market insights, which led to
                    product improvement recommendations and a 10% increase in
                    customer satisfaction.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h2 className="text-xl font-bold uppercase tracking-wide text-blue-800">
              Skills
            </h2>
            <div className="border-b-2 border-gray-300 w-full mt-1 mb-4"></div>
            <div className="grid grid-cols-2 mt-4 text-sm text-gray-700">
              <ul className="list-disc list-inside space-y-1">
                <li>Brand promotion</li>
                <li>Event planning</li>
                <li>Customer engagement</li>
                <li>Marketing strategy</li>
              </ul>
              <ul className="list-disc list-inside space-y-1">
                <li>Team management</li>
                <li>Data analysis</li>
                <li>Relationship-building</li>
                <li>Public speaking</li>
              </ul>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h2 className="text-xl font-bold uppercase tracking-wide text-blue-800">
              Education
            </h2>
            <div className="border-b-2 border-gray-300 w-full mt-1 mb-4"></div>
            <div className="mt-4 text-sm text-gray-700 space-y-2">
              <div>
                <p className="font-semibold text-gray-800">
                  Master of Professional Studies:{" "}
                  <span className="font-normal">
                    Branding And Integrated Communication
                  </span>
                </p>
                <p className="italic">CUNY City College - New York, NY</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">
                  BBA:{" "}
                  <span className="font-normal">Business Administration</span>
                </p>
                <p className="italic">
                  Metropolitan College of New York - New York, NY
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template9;
