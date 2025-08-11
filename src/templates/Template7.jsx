import React from 'react';

const Template7 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 font-['Inter']">
      <div className="w-full max-w-5xl bg-white shadow-xl overflow-hidden rounded-lg grid grid-cols-1 md:grid-cols-3">

        {/* Left Column (Sidebar) */}
        <div className="md:col-span-1 bg-[#2b7264] text-white p-8">
          <div className="flex flex-col items-center mb-6">
            <img
              src="image_5c7463.jpg"
              alt="Rachel Jones"
              className="w-48 h-48 rounded-full object-cover mb-4"
            />
          </div>

          {/* Contact Section */}
          <div className="mb-6">
            <div className="border-b border-gray-400 pb-2 mb-4"></div>
            <div className="text-sm space-y-2">
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                New Orleans, LA 70115
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                555-555-5555
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                example@example.com
              </p>
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-6">
            <h2 className="text-xl font-bold uppercase tracking-wide">Education</h2>
            <div className="border-b border-gray-400 pb-2 mb-4"></div>
            <div className="text-sm">
              <p className="font-bold">BBA | Business Administration</p>
              <p>The University of New Orleans, </p>
              <p>New Orleans, LA</p>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="mb-6">
            <h2 className="text-xl font-bold uppercase tracking-wide">Certifications</h2>
            <div className="border-b border-gray-400 pb-2 mb-4"></div>
            <div className="text-sm">
              <p className="font-bold">Certified Administrative Professional (CAP), by the International Association of Administrative Professionals (IAAP)</p>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h2 className="text-xl font-bold uppercase tracking-wide">Skills</h2>
            <div className="border-b border-gray-400 pb-2 mb-4"></div>
            <ul className="list-disc list-inside text-sm space-y-2 ml-4">
              <li>Management software</li>
              <li>Budgetary planning</li>
              <li>Problem-solving</li>
              <li>Banking operations</li>
              <li>Data entry</li>
              <li>Adaptability</li>
              <li>Event coordination</li>
              <li>Management</li>
              <li>Expense reporting</li>
            </ul>
          </div>
        </div>

        {/* Right Column (Main Content) */}
        <div className="md:col-span-2 p-10 space-y-8">
          <div className="flex flex-col mb-4">
            <h1 className="text-4xl font-bold text-[#2b7264] tracking-wide">Rachel Jones</h1>
          </div>

          {/* Professional Summary Section */}
          <div>
            <h2 className="text-xl font-bold uppercase tracking-wide text-gray-800">Professional Summary</h2>
            <div className="border-b-2 border-gray-300 w-full mt-1 mb-4"></div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Professional and well-rounded office manager with excellent clerical and
              team support skills. Smooth when handling administrative tasks by
              coordinating mail, records and travel arrangements. Highly dependable,
              ethical and reliable leader.
            </p>
          </div>

          {/* Experience Section */}
          <div>
            <h2 className="text-xl font-bold uppercase tracking-wide text-gray-800">Experience</h2>
            <div className="border-b-2 border-gray-300 w-full mt-1 mb-4"></div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800">Office Manager <span className="font-normal text-gray-500">KIPP | New Orleans, LA</span></h3>
                <p className="italic text-xs text-gray-500">November 2019 - Current</p>
                <ul className="list-disc list-inside text-sm text-gray-700 mt-1 ml-4 space-y-1">
                  <li>Handle scheduling and managed timely and effective allocation of resources and executives calendars.</li>
                  <li>Oversee day-to-day office operations, including receiving and organizing correspondence, and answering and forwarding calls.</li>
                  <li>Created training program for new office employees, decreasing training time 13%.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Office Coordinator <span className="font-normal text-gray-500">Deloitte | New Orleans, LA</span></h3>
                <p className="italic text-xs text-gray-500">May 2016 - November 2019</p>
                <ul className="list-disc list-inside text-sm text-gray-700 mt-1 ml-4 space-y-1">
                  <li>Supported internal team members with technical knowledge, operational support and exemplary customer service.</li>
                  <li>Balanced and updated computer accounting records and physical petty cash, including receipt documentation and expense tracking.</li>
                  <li>Supervised reception office with three employees, consistently cultivating productive and positive atmosphere.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Receptionist <span className="font-normal text-gray-500">Lineage Logistics | New Orleans, LA</span></h3>
                <p className="italic text-xs text-gray-500">July 2010 - May 2016</p>
                <ul className="list-disc list-inside text-sm text-gray-700 mt-1 ml-4 space-y-1">
                  <li>Answered and directed incoming calls using multi-line telephone system.</li>
                  <li>Oversaw office inventory by restocking supplies and submitting purchase orders.</li>
                  <li>Screened and verified over 50 visitors a day for identification credentials and purpose of visit to maintain security of personnel and office environment.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Languages Section */}
          <div>
            <h2 className="text-xl font-bold uppercase tracking-wide text-gray-800">Languages</h2>
            <div className="border-b-2 border-gray-300 w-full mt-1 mb-4"></div>
            <div className="grid grid-cols-2 text-sm text-gray-700">
              <div>
                <p>English</p>
                <p>French</p>
              </div>
              <div>
                <p>First Language</p>
                <p>82</p>
                <p>Upper Intermediate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template7;
