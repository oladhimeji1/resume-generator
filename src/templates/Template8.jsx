import React from "react";

const Template8 = ({ ref, resumeData }) => {
  // Inline styles to match the original layout
  const mainText = "#222";
  const accent = "#2563EB";

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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 32,
          }}
        >
          <h1
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: mainText,
              letterSpacing: 1,
            }}
          >
            {resumeData?.name || ""} {resumeData?.surname || ""}
          </h1>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 8,
              fontSize: 15,
              color: "#333",
              gap: 16,
            }}
          >
            {resumeData?.email && <span>{resumeData.email}</span>}
            {resumeData?.phone && <span>|</span>}
            {resumeData?.phone && <span>{resumeData.phone}</span>}
            {resumeData?.address && <span>|</span>}
            {resumeData?.address && (
              <span>
                {resumeData.address}{" "}
                {resumeData?.city ? `, ${resumeData.city}` : ""}{" "}
                {resumeData?.country ? `, ${resumeData.country}` : ""}
              </span>
            )}
          </div>
        </div>

        {/* Professional Summary Section */}
        {resumeData?.summary && (
          <div style={{ marginBottom: 32 }}>
            <h2
              style={{
                fontSize: 20,
                fontWeight: 700,
                textTransform: "uppercase",
                color: accent,
              }}
            >
              Professional Summary
            </h2>
            <p
              style={{
                fontSize: 15,
                color: mainText,
                marginTop: 16,
                lineHeight: 1.7,
              }}
            >
              {resumeData.summary}
            </p>
          </div>
        )}

        {/* Work History Section */}
        {Array.isArray(resumeData?.workExperience) &&
          resumeData.workExperience.length > 0 && (
            <div style={{ marginBottom: 32 }}>
              <h2
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: accent,
                }}
              >
                Work History
              </h2>
              <div
                style={{
                  marginTop: 16,
                  fontSize: 15,
                  color: mainText,
                  display: "flex",
                  flexDirection: "column",
                  gap: 24,
                }}
              >
                {resumeData.workExperience.map((job, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 2fr",
                      gap: 24,
                    }}
                  >
                    <div style={{ color: "#333" }}>
                      <p>
                        {job.startMonth} {job.startYear} -{" "}
                        {job.presently
                          ? "Current"
                          : `${job.endMonth} ${job.endYear}`}
                      </p>
                      <p
                        style={{
                          fontWeight: 600,
                          color: mainText,
                        }}
                      >
                        {job.company}
                      </p>
                      <p>{job.location}</p>
                    </div>
                    <div>
                      <p
                        style={{
                          fontWeight: 600,
                          color: mainText,
                        }}
                      >
                        {job.jobTitle}
                      </p>
                      {Array.isArray(job.duties) && job.duties.length > 0 && (
                        <ul
                          style={{
                            listStyle: "disc",
                            paddingLeft: 20,
                            fontSize: 14,
                            color: mainText,
                            margin: "8px 0",
                          }}
                        >
                          {job.duties.map((duty, i) => (
                            <li key={i}>{duty.name}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        {/* Skills Section */}
        {Array.isArray(resumeData?.skills) && resumeData.skills.length > 0 && (
          <div style={{ marginBottom: 32 }}>
            <h2
              style={{
                fontSize: 20,
                fontWeight: 700,
                textTransform: "uppercase",
                color: accent,
              }}
            >
              Skills
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                marginTop: 16,
                fontSize: 15,
                color: mainText,
                gap: 8,
              }}
            >
              <ul
                style={{
                  listStyle: "disc",
                  paddingLeft: 20,
                  margin: 0,
                }}
              >
                {resumeData.skills
                  .slice(0, Math.ceil(resumeData.skills.length / 2))
                  .map((skill, idx) => (
                    <li key={idx}>{skill.name}</li>
                  ))}
              </ul>
              <ul
                style={{
                  listStyle: "disc",
                  paddingLeft: 20,
                  margin: 0,
                }}
              >
                {resumeData.skills
                  .slice(Math.ceil(resumeData.skills.length / 2))
                  .map((skill, idx) => (
                    <li key={idx}>{skill.name}</li>
                  ))}
              </ul>
            </div>
          </div>
        )}

        {/* Education Section */}
        {Array.isArray(resumeData?.education) &&
          resumeData.education.length > 0 && (
            <div style={{ marginBottom: 32 }}>
              <h2
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: accent,
                }}
              >
                Education
              </h2>
              <div style={{ marginTop: 16, fontSize: 15, color: mainText }}>
                {resumeData.education.map((edu, idx) => (
                  <div key={idx}>
                    <h3
                      style={{
                        fontWeight: 600,
                        color: mainText,
                        margin: 0,
                      }}
                    >
                      {edu.degree}{" "}
                      {edu.fieldOfStudy ? `in ${edu.fieldOfStudy}` : ""}
                    </h3>
                    <p
                      style={{
                        fontSize: 13,
                        color: mainText,
                        margin: 0,
                      }}
                    >
                      {edu.school} {edu.location ? `- ${edu.location}` : ""}
                    </p>
                    <p
                      style={{
                        fontSize: 13,
                        color: mainText,
                        margin: 0,
                      }}
                    >
                      {edu.startMonth} {edu.startYear}{" "}
                      {edu.currentlyEnrolled
                        ? "- Current"
                        : edu.endMonth && edu.endYear
                        ? `- ${edu.endMonth} ${edu.endYear}`
                        : ""}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        {/* References Section */}
        {Array.isArray(resumeData?.references) &&
          resumeData.references.length > 0 && (
            <div style={{ marginBottom: 32 }}>
              <h2
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: accent,
                }}
              >
                References
              </h2>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  fontSize: 15,
                  color: mainText,
                }}
              >
                {resumeData.references.map((ref, idx) => (
                  <li key={idx} style={{ marginBottom: 12 }}>
                    <span
                      style={{
                        fontWeight: 600,
                        color: mainText,
                      }}
                    >
                      {ref.name}
                    </span>
                    {ref.occupation && (
                      <span style={{ color: accent }}> — {ref.occupation}</span>
                    )}
                    <br />
                    <span style={{ color: accent }}>{ref.phone}</span>
                    {ref.location && (
                      <span style={{ color: accent }}>, {ref.location}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
      </div>
    </div>
  );
};

export default Template8;
