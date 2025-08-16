import React from "react";

const Template1 = ({ resumeData, ref }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "auto",
        background: "#f3f4f6",
      }}
    >
      <div
        ref={ref}
        style={{
          width: "210mm",
          minHeight: "297mm",
          margin: "auto",
          background: "#fff",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          borderRadius: "12px",
          padding: "32px",
        }}
      >
        {/* Header Section */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold" style={{ color: "#1e3a8a" }}>
            {resumeData.name} {resumeData.surname}
          </h1>
          <p className="text-sm mt-2" style={{ color: "#374151" }}>
            {resumeData.location}, {resumeData.city} ,{resumeData.country}
          </p>
          <p className="text-sm italic" style={{ color: "#1e3a8a" }}>
            {resumeData.email} - {resumeData.phone}
          </p>
        </div>

        {/* Professional Summary Section */}
        <div className="mb-8">
          <h2
            className="text-lg font-bold uppercase tracking-wide border-b-2 pb-1"
            style={{ borderColor: "#d1d5db", color: "#1e293b" }}
          >
            Professional Summary
          </h2>
          <p
            className="text-sm mt-2 break-all leading-relaxed"
            style={{ color: "#374151" }}
          >
            {resumeData.summary}
          </p>
        </div>

        {/* Employment History Section */}
        <div className="mb-8">
          <h2
            className="text-lg font-bold uppercase tracking-wide border-b-2 pb-1"
            style={{ borderColor: "#d1d5db", color: "#1e293b" }}
          >
            Employment History
          </h2>

          {resumeData.workExperience.map((exp, i) => {
            return (
              <div key={i} className="mt-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold" style={{ color: "#1e293b" }}>
                      {exp.jobTitle},{exp.company}
                    </h3>
                    <p className="text-xs italic" style={{ color: "#6b7280" }}>
                      {exp.startMonth}. {exp.startYear} -{" "}
                      {exp.presently
                        ? "Present"
                        : `${exp.endMonth}.${exp.endYear}`}
                    </p>
                  </div>
                  <p className="text-sm" style={{ color: "#4b5563" }}>
                    {exp.location}, {exp.state}
                  </p>
                </div>
                <ul
                  className="list-disc list-inside text-sm mt-2 space-y-1 ml-4"
                  style={{ color: "#374151" }}
                >
                  {exp.duties.map((duty, i) => {
                    return <li key={i}>{duty.name}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Education Section */}
        <div className="mb-8">
          <h2
            className="text-lg font-bold uppercase tracking-wide border-b-2 pb-1"
            style={{ borderColor: "#d1d5db", color: "#1e293b" }}
          >
            Education
          </h2>
          {resumeData.education.map((edu, i) => (
            <div key={i} className="mt-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold" style={{ color: "#1e293b" }}>
                    {edu.school}
                  </h3>
                  <p className="text-xs italic" style={{ color: "#6b7280" }}>
                    {edu.startMonth}. {edu.startYear} -{" "}
                    {edu.currentlyEnrolled
                      ? "Present"
                      : `${edu.endMonth}.${edu.endYear}`}
                  </p>
                </div>
                <p className="text-sm" style={{ color: "#4b5563" }}>
                  {edu.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mb-8">
          <h2
            className="text-lg font-bold uppercase tracking-wide border-b-2 pb-1"
            style={{ borderColor: "#d1d5db", color: "#1e293b" }}
          >
            Skills
          </h2>
          <ul className="flex flex-wrap gap-2 mt-4">
            {resumeData.skills &&
              resumeData.skills.map((skill, i) => (
                <li
                  key={i}
                  style={{ background: "#dbeafe", color: "#1e3a8a" }}
                  className="px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill.name}
                </li>
              ))}
          </ul>
        </div>

        {/* References Section */}
        <div className="mb-4">
          <h2
            className="text-lg font-bold uppercase tracking-wide border-b-2 pb-1"
            style={{ borderColor: "#d1d5db", color: "#1e293b" }}
          >
            References
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {resumeData.references &&
              resumeData.references.map((ref, i) => (
                <div
                  key={i}
                  style={{ background: "#f9fafb", borderColor: "#e5e7eb" }}
                  className="border rounded-lg p-4"
                >
                  <h3
                    className="font-semibold mb-1"
                    style={{ color: "#1e3a8a" }}
                  >
                    {ref.name}
                  </h3>
                  <p className="text-sm mb-1" style={{ color: "#374151" }}>
                    {ref.occupation}
                  </p>
                  <p className="text-xs mb-1" style={{ color: "#6b7280" }}>
                    {ref.location}
                  </p>
                  <p className="text-xs" style={{ color: "#6b7280" }}>
                    {ref.phone}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template1;
