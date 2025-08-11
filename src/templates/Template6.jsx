import React from "react";

const Template6 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 font-['Inter']">
      <div className="w-full max-w-5xl bg-white shadow-2xl overflow-hidden rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Left Column (Main Content) */}
          <div className="md:col-span-2 p-10 space-y-8">
            {/* Header Section */}
            <div className="flex flex-col mb-4">
              <h1 className="text-4xl font-bold text-gray-800 tracking-wide">
                ALLEN SMITH
              </h1>
            </div>

            {/* Professional Summary Section */}
            <div>
              <h2 className="text-xl font-bold uppercase tracking-wide text-gray-800">
                Professional Summary
              </h2>
              <div className="border-b-2 border-gray-300 w-full mt-1 mb-4"></div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Highly organized paralegal executes case flow management through
                advanced technical skills. Successful at sorting and
                categorizing high volumes of legal documents and data.
                Prioritizes tasks and remains productive while balancing
                multiple projects and deadlines. Effective communicator talented
                in managing complex schedules, goal setting and office
                administration.
              </p>
            </div>

            {/* Summary of Qualifications Section */}
            <div>
              <h2 className="text-xl font-bold uppercase tracking-wide text-gray-800">
                Summary of Qualifications
              </h2>
              <div className="border-b-2 border-gray-300 w-full mt-1 mb-4"></div>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 ml-4">
                <li>
                  Well-versed in drafting briefs, legal memorandums, motions and
                  correspondence.
                </li>
                <li>
                  Collaborative team player comfortable working independently
                  and accepting a high degree of unsupervised responsibility.
                </li>
                <li>
                  Skilled writer, organizer and project manager with a solid
                  background in legal research and witness statements.
                </li>
              </ul>
            </div>

            {/* Work History Section */}
            <div>
              <h2 className="text-xl font-bold uppercase tracking-wide text-gray-800">
                Work History
              </h2>
              <div className="border-b-2 border-gray-300 w-full mt-1 mb-4"></div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Paralegal{" "}
                    <span className="font-normal text-gray-500">
                      11/2021 - Current
                    </span>
                  </h3>
                  <p className="italic text-sm text-gray-700">
                    Imani/Magic Christopher & Toale - Seattle, WA
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-700 mt-1 ml-4 space-y-1">
                    <li>
                      Participate in weekly client interviews, observe the
                      questioning process and document information for 10
                      ongoing cases.
                    </li>
                    <li>
                      Use WestLaw and LexisNexis to examine secondary sources,
                      statutory and case law and federal and state regulations.
                    </li>
                    <li>
                      Manage data, produce well-researched and articulate legal
                      briefs for pleadings and summaries for 12 attorneys and
                      organize exhibits for trial by preparing materials and
                      supporting documentation.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Legal Assistant{" "}
                    <span className="font-normal text-gray-500">
                      09/2018 - 10/2021
                    </span>
                  </h3>
                  <p className="italic text-sm text-gray-700">
                    CGI Group Inc. - Seattle, WA
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-700 mt-1 ml-4 space-y-1">
                    <li>
                      Provided administrative support and conducted research to
                      assist 12 attorneys in complex cases and legal process
                      preparation.
                    </li>
                    <li>
                      Used computer databases, created reports and tax and legal
                      filings to locate persons and compile information for
                      investigations.
                    </li>
                    <li>
                      Drafted motions and other legal documents and liaised with
                      eight company departments to facilitate responsive
                      documents and document retention.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Legal Secretary{" "}
                    <span className="font-normal text-gray-500">
                      06/2016 - 08/2018
                    </span>
                  </h3>
                  <p className="italic text-sm text-gray-700">
                    Tyson & Mendes - Seattle, WA
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-700 mt-1 ml-4 space-y-1">
                    <li>
                      Photocopied all correspondence, documents and other
                      printed materials and filed copies and documents and
                      briefs in legal files to prevent loss.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="md:col-span-1 bg-gray-800 text-white p-10 space-y-8">
            <div className="flex items-center justify-center">
              <img
                src="image_5c6d3c.png"
                alt="Allen Smith"
                className="w-48 h-48 rounded-full border-4 border-gray-600 object-cover"
              />
            </div>

            {/* Contact Section */}
            <div>
              <h2 className="text-xl font-bold uppercase tracking-wide">
                Contact
              </h2>
              <div className="border-b-2 border-gray-600 w-full mt-1 mb-4"></div>
              <div className="text-sm space-y-2">
                <p>Address: Seattle, WA 98144</p>
                <p>Phone: 555-555-5555</p>
                <p>Email: example@example.com</p>
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <h2 className="text-xl font-bold uppercase tracking-wide">
                Skills
              </h2>
              <div className="border-b-2 border-gray-600 w-full mt-1 mb-4"></div>
              <ul className="list-disc list-inside text-sm space-y-2 ml-4">
                <li>Expertise in legal proceedings</li>
                <li>Project management</li>
                <li>Strong research skills</li>
                <li>Court filings</li>
                <li>MS Office</li>
                <li>Amiclable</li>
                <li>Attention to detail</li>
                <li>Conflict mediation</li>
              </ul>
            </div>

            {/* Education Section */}
            <div>
              <h2 className="text-xl font-bold uppercase tracking-wide">
                Education
              </h2>
              <div className="border-b-2 border-gray-600 w-full mt-1 mb-4"></div>
              <div className="text-sm space-y-2">
                <div>
                  <h3 className="font-semibold">
                    Certificate, Paralegal Studies
                  </h3>
                  <p className="text-xs">06/2017</p>
                  <p className="font-normal">
                    University of Washington - Seattle, WA
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">
                    Bachelor of Arts, Law, Society & Justice
                  </h3>
                  <p className="text-xs">06/2016</p>
                  <p className="font-normal">
                    University of Washington - Seattle, WA
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications Section */}
            <div>
              <h2 className="text-xl font-bold uppercase tracking-wide">
                Certifications
              </h2>
              <div className="border-b-2 border-gray-600 w-full mt-1 mb-4"></div>
              <div className="text-sm">
                <p>Paralegal Certified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template6;
