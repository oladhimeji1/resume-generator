import React from "react";

const Template7 = ({ ref, resumeData }) => {
  // Inline styles to match the original layout
  const sidebarBg = "#2b7264";
  const mainText = "#222";
  const accent = "#0594C3";
  const borderColor = "#D1D5DB";
  const subText = "#6B7280";

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
        {/* Left Column (Sidebar) */}
        <div
          style={{
            background: sidebarBg,
            color: "#fff",
            padding: 32,
            display: "flex",
            flexDirection: "column",
            gap: 32,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: 24,
            }}
          >
            {/* Picture area remains */}
            <img
              src={resumeData?.photoUrl || "image_5c7463.jpg"}
              alt={resumeData?.name || "Profile"}
              style={{
                width: 192,
                height: 192,
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: 16,
              }}
            />
          </div>

          {/* Contact Section */}
          <div style={{ marginBottom: 24 }}>
            <div
              style={{
                borderBottom: "1px solid #fff",
                paddingBottom: 8,
                marginBottom: 16,
              }}
            ></div>
            <div
              style={{
                fontSize: 15,
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              {resumeData?.address && (
                <p>
                  {resumeData.address}{" "}
                  {resumeData?.city ? `, ${resumeData.city}` : ""}{" "}
                  {resumeData?.country ? `, ${resumeData.country}` : ""}
                </p>
              )}
              {resumeData?.phone && <p>{resumeData.phone}</p>}
              {resumeData?.email && <p>{resumeData.email}</p>}
            </div>
          </div>

          {/* Education Section */}
          {Array.isArray(resumeData?.education) &&
            resumeData.education.length > 0 && (
              <div style={{ marginBottom: 24 }}>
                <h2
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >
                  Education
                </h2>
                <div
                  style={{
                    borderBottom: "1px solid #fff",
                    paddingBottom: 8,
                    marginBottom: 16,
                  }}
                ></div>
                <div
                  style={{
                    fontSize: 15,
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  {resumeData.education.map((edu, idx) => (
                    <div key={idx}>
                      <p style={{ fontWeight: 700 }}>
                        {edu.degree}{" "}
                        {edu.fieldOfStudy ? `| ${edu.fieldOfStudy}` : ""}
                      </p>
                      <p>
                        {edu.school} {edu.location ? `, ${edu.location}` : ""}
                      </p>
                      <p>
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

          {/* Skills Section */}
          {Array.isArray(resumeData?.skills) &&
            resumeData.skills.length > 0 && (
              <div>
                <h2
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >
                  Skills
                </h2>
                <div
                  style={{
                    borderBottom: "1px solid #fff",
                    paddingBottom: 8,
                    marginBottom: 16,
                  }}
                ></div>
                <ul
                  style={{
                    listStyle: "disc",
                    paddingLeft: 20,
                    fontSize: 15,
                    color: "#fff",
                    margin: 0,
                  }}
                >
                  {resumeData.skills.map((skill, idx) => (
                    <li key={idx}>{skill.name}</li>
                  ))}
                </ul>
              </div>
            )}
        </div>

        {/* Right Column (Main Content) */}
        <div
          style={{
            padding: 40,
            display: "flex",
            flexDirection: "column",
            gap: 40,
          }}
        >
          <div style={{ marginBottom: 16 }}>
            <h1
              style={{
                fontSize: 36,
                fontWeight: 700,
                color: sidebarBg,
                letterSpacing: 1,
              }}
            >
              {resumeData?.name || ""} {resumeData?.surname || ""}
            </h1>
          </div>

          {/* Professional Summary Section */}
          {resumeData?.summary && (
            <div>
              <h2
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: mainText,
                }}
              >
                Professional Summary
              </h2>
              <div
                style={{
                  borderBottom: `2px solid ${borderColor}`,
                  width: "100%",
                  marginTop: 4,
                  marginBottom: 16,
                }}
              ></div>
              <p style={{ fontSize: 15, color: mainText, lineHeight: 1.7 }}>
                {resumeData.summary}
              </p>
            </div>
          )}

          {/* Experience Section */}
          {Array.isArray(resumeData?.workExperience) &&
            resumeData.workExperience.length > 0 && (
              <div>
                <h2
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: mainText,
                  }}
                >
                  Experience
                </h2>
                <div
                  style={{
                    borderBottom: `2px solid ${borderColor}`,
                    width: "100%",
                    marginTop: 4,
                    marginBottom: 16,
                  }}
                ></div>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 24 }}
                >
                  {resumeData.workExperience.map((job, idx) => (
                    <div key={idx}>
                      <h3
                        style={{ fontWeight: 600, color: mainText, margin: 0 }}
                      >
                        {job.jobTitle}{" "}
                        <span
                          style={{
                            fontWeight: 400,
                            color: subText,
                            marginLeft: 8,
                          }}
                        >
                          {job.company}{" "}
                          {job.location ? `| ${job.location}` : ""}
                        </span>
                      </h3>
                      <p
                        style={{
                          fontStyle: "italic",
                          fontSize: 13,
                          color: subText,
                        }}
                      >
                        {job.startMonth} {job.startYear} -{" "}
                        {job.presently
                          ? "Current"
                          : `${job.endMonth} ${job.endYear}`}
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
                  ))}
                </div>
              </div>
            )}

          {/* References Section */}
          {Array.isArray(resumeData?.references) &&
            resumeData.references.length > 0 && (
              <div>
                <h2
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: mainText,
                  }}
                >
                  References
                </h2>
                <div
                  style={{
                    borderBottom: `2px solid ${borderColor}`,
                    width: "100%",
                    marginTop: 4,
                    marginBottom: 16,
                  }}
                ></div>
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
                      <span style={{ fontWeight: 600, color: mainText }}>
                        {ref.name}
                      </span>
                      {ref.occupation && (
                        <span style={{ color: subText }}>
                          {" "}
                          — {ref.occupation}
                        </span>
                      )}
                      <br />
                      <span style={{ color: accent }}>{ref.phone}</span>
                      {ref.location && (
                        <span style={{ color: subText }}>
                          {" "}
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
  );
};

export default Template7;
