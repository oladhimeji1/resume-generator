const Template3 = ({ ref, resumeData }) => {
  const mainColor = "#0594C3";
  const textColor = "#222";
  const lightBg = "#F9FAFB";
  const borderColor = "#D1D5DB";

  return (
    <div
      ref={ref}
      style={{
        minHeight: "100vh",
        background: lightBg,
        padding: 16,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 800,
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          overflow: "hidden",
          padding: 32,
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* Header Section */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h1
            style={{
              fontSize: 40,
              fontWeight: 400,
              color: mainColor,
              margin: 0,
            }}
          >
            {resumeData?.name || ""} {resumeData?.surname || ""}
          </h1>
          <p style={{ fontSize: 15, color: textColor, margin: "8px 0 0 0" }}>
            {resumeData?.address || ""} {resumeData?.city || ""}{" "}
            {resumeData?.country || ""}{" "}
            {resumeData?.phone ? ", " + resumeData.phone : ""}
          </p>
          <p
            style={{
              fontSize: 15,
              color: mainColor,
              fontStyle: "italic",
              margin: 0,
            }}
          >
            {resumeData?.email || ""}
          </p>
        </div>

        {/* Professional Summary Section */}
        <div style={{ marginBottom: 32 }}>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 700,
              textTransform: "uppercase",
              borderBottom: `1px solid ${borderColor}`,
              paddingBottom: 8,
              color: textColor,
            }}
          >
            Professional Summary
          </h2>
          <p
            style={{
              fontSize: 15,
              color: textColor,
              marginTop: 16,
              lineHeight: 1.7,
            }}
          >
            {resumeData?.summary || ""}
          </p>
        </div>

        {/* Employment History Section */}
        <div style={{ marginBottom: 32 }}>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 700,
              textTransform: "uppercase",
              borderBottom: `1px solid ${borderColor}`,
              paddingBottom: 8,
              color: textColor,
            }}
          >
            Employment History
          </h2>
          {Array.isArray(resumeData?.workExperience) &&
          resumeData.workExperience.length > 0 ? (
            resumeData.workExperience.map((job, idx) => (
              <div key={idx} style={{ display: "flex", marginTop: 16 }}>
                <div style={{ width: "25%", paddingRight: 16 }}>
                  <p style={{ fontSize: 14, color: "#6B7280", margin: 0 }}>
                    {job.startMonth} {job.startYear} -{" "}
                    {job.presently
                      ? "Present"
                      : `${job.endMonth} ${job.endYear}`}
                  </p>
                  <p style={{ fontSize: 14, color: "#6B7280", margin: 0 }}>
                    {job.location}
                  </p>
                </div>
                <div style={{ width: "75%" }}>
                  <h3 style={{ fontWeight: 600, color: textColor, margin: 0 }}>
                    {job.jobTitle}, {job.company}
                  </h3>
                  {Array.isArray(job.duties) && job.duties.length > 0 && (
                    <ul
                      style={{
                        listStyle: "disc",
                        paddingLeft: 20,
                        fontSize: 14,
                        color: textColor,
                        margin: "4px 0",
                      }}
                    >
                      {job.duties.map((duty, i) => (
                        <li key={i}>{duty.name}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p style={{ fontSize: 14, color: textColor }}>
              No work experience added.
            </p>
          )}
        </div>

        {/* Education Section */}
        <div style={{ marginBottom: 32 }}>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 700,
              textTransform: "uppercase",
              borderBottom: `1px solid ${borderColor}`,
              paddingBottom: 8,
              color: textColor,
            }}
          >
            Education
          </h2>
          {Array.isArray(resumeData?.education) &&
          resumeData.education.length > 0 ? (
            resumeData.education.map((edu, idx) => (
              <div key={idx} style={{ display: "flex", marginTop: 16 }}>
                <div style={{ width: "25%", paddingRight: 16 }}>
                  <p style={{ fontSize: 14, color: "#6B7280", margin: 0 }}>
                    {edu.startMonth} {edu.startYear} -{" "}
                    {edu.currentlyEnrolled
                      ? "Present"
                      : `${edu.endMonth} ${edu.endYear}`}
                  </p>
                  <p style={{ fontSize: 14, color: "#6B7280", margin: 0 }}>
                    {edu.location}
                  </p>
                </div>
                <div style={{ width: "75%" }}>
                  <h3 style={{ fontWeight: 600, color: textColor, margin: 0 }}>
                    {edu.degree}{" "}
                    {edu.fieldOfStudy ? `(${edu.fieldOfStudy})` : ""},{" "}
                    {edu.school}
                  </h3>
                </div>
              </div>
            ))
          ) : (
            <p style={{ fontSize: 14, color: textColor }}>
              No education added.
            </p>
          )}
        </div>

        {/* Skills Section */}
        <div style={{ marginBottom: 32 }}>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 700,
              textTransform: "uppercase",
              borderBottom: `1px solid ${borderColor}`,
              paddingBottom: 8,
              color: textColor,
            }}
          >
            Skills
          </h2>
          {Array.isArray(resumeData?.skills) && resumeData.skills.length > 0 ? (
            <ul
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                padding: 0,
                margin: 0,
                listStyle: "none",
                marginTop: 16,
              }}
            >
              {resumeData.skills.map((skill, idx) => (
                <li
                  key={idx}
                  style={{
                    background: mainColor,
                    color: "#fff",
                    borderRadius: 6,
                    padding: "6px 16px",
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  {skill.name}
                </li>
              ))}
            </ul>
          ) : (
            <p style={{ fontSize: 14, color: textColor }}>No skills added.</p>
          )}
        </div>

        {/* References Section */}
        <div style={{ marginBottom: 32 }}>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 700,
              textTransform: "uppercase",
              borderBottom: `1px solid ${borderColor}`,
              paddingBottom: 8,
              color: textColor,
            }}
          >
            References
          </h2>
          {Array.isArray(resumeData?.references) &&
          resumeData.references.length > 0 ? (
            resumeData.references.map((ref, idx) => (
              <div key={idx} style={{ display: "flex", marginTop: 16 }}>
                <div style={{ width: "25%", paddingRight: 16 }}>
                  <p style={{ fontSize: 14, color: "#6B7280", margin: 0 }}>
                    {ref.phone}
                  </p>
                </div>
                <div style={{ width: "75%" }}>
                  <h3 style={{ fontWeight: 600, color: textColor, margin: 0 }}>
                    {ref.name} {ref.occupation ? `(${ref.occupation})` : ""}
                  </h3>
                  <p style={{ fontSize: 14, color: textColor, margin: 0 }}>
                    {ref.location}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p style={{ fontSize: 14, color: textColor }}>
              No references added.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Template3;
