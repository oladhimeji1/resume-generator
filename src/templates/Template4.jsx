const Template4 = ({ ref, resumeData }) => {
  const mainColor = "#0594C3";
  const textColor = "#222";
  const lightBg = "#F9FAFB";

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
          maxWidth: 900,
          background: "#fff",
          borderRadius: 16,
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          overflow: "hidden",
          padding: 32,
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* Header Section */}
        <div style={{ marginBottom: 32 }}>
          <h1
            style={{
              fontSize: 40,
              fontWeight: 700,
              color: mainColor,
              margin: 0,
            }}
          >
            {resumeData?.name || ""} {resumeData?.surname || ""}
          </h1>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              marginTop: 16,
              fontSize: 15,
              color: textColor,
            }}
          >
            <span style={{ marginRight: 16 }}>
              {resumeData?.address || ""} {resumeData?.city || ""}{" "}
              {resumeData?.country || ""}
            </span>
            <span style={{ marginRight: 16 }}>{resumeData?.email || ""}</span>
            <span>{resumeData?.phone || ""}</span>
          </div>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 32 }}
        >
          {/* Left Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {/* Professional Summary Section (only if available) */}
            {resumeData?.summary && (
              <div>
                <h2
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: textColor,
                    marginBottom: 8,
                  }}
                >
                  Professional Summary
                </h2>
                <p style={{ fontSize: 15, color: textColor, lineHeight: 1.7 }}>
                  {resumeData.summary}
                </p>
              </div>
            )}

            {/* Employment History Section (only if available) */}
            {Array.isArray(resumeData?.workExperience) &&
              resumeData.workExperience.length > 0 && (
                <div>
                  <h2
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: textColor,
                      marginBottom: 8,
                    }}
                  >
                    Employment History
                  </h2>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 16,
                    }}
                  >
                    {resumeData.workExperience.map((job, idx) => (
                      <div key={idx}>
                        <h3
                          style={{
                            fontWeight: 600,
                            color: textColor,
                            margin: 0,
                          }}
                        >
                          {job.jobTitle} at {job.company}
                        </h3>
                        <p
                          style={{ fontSize: 13, color: "#6B7280", margin: 0 }}
                        >
                          {job.startMonth} {job.startYear} -{" "}
                          {job.presently
                            ? "Present"
                            : `${job.endMonth} ${job.endYear}`}
                        </p>
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
                    ))}
                  </div>
                </div>
              )}

            {/* Education Section (only if available) */}
            {Array.isArray(resumeData?.education) &&
              resumeData.education.length > 0 && (
                <div>
                  <h2
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: textColor,
                      marginBottom: 8,
                    }}
                  >
                    Education
                  </h2>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 16,
                    }}
                  >
                    {resumeData.education.map((edu, idx) => (
                      <div key={idx}>
                        <h3
                          style={{
                            fontWeight: 600,
                            color: textColor,
                            margin: 0,
                          }}
                        >
                          {edu.degree}{" "}
                          {edu.fieldOfStudy ? `(${edu.fieldOfStudy})` : ""},{" "}
                          {edu.school}
                        </h3>
                        <p
                          style={{ fontSize: 13, color: "#6B7280", margin: 0 }}
                        >
                          {edu.startMonth} {edu.startYear} -{" "}
                          {edu.currentlyEnrolled
                            ? "Present"
                            : `${edu.endMonth} ${edu.endYear}`}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
          </div>
          {/* Right Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {/* Skills Section (only if available) */}
            {Array.isArray(resumeData?.skills) &&
              resumeData.skills.length > 0 && (
                <div>
                  <h2
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: textColor,
                      marginBottom: 8,
                    }}
                  >
                    Skills
                  </h2>
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
                </div>
              )}

            {/* References Section (only if available) */}
            {Array.isArray(resumeData?.references) &&
              resumeData.references.length > 0 && (
                <div>
                  <h2
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: textColor,
                      marginBottom: 8,
                    }}
                  >
                    References
                  </h2>
                  <ul
                    style={{
                      padding: 0,
                      margin: 0,
                      listStyle: "none",
                      marginTop: 16,
                    }}
                  >
                    {resumeData.references.map((ref, idx) => (
                      <li key={idx} style={{ marginBottom: 12 }}>
                        <span style={{ fontWeight: 600, color: textColor }}>
                          {ref.name}
                        </span>
                        <span style={{ color: textColor }}>
                          {" "}
                          — {ref.occupation || ""}
                        </span>
                        <br />
                        <span style={{ color: mainColor }}>{ref.phone}</span>
                        {ref.location && (
                          <span style={{ color: textColor }}>
                            , {ref.location}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template4;
