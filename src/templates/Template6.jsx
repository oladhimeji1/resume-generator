import React from "react";

const Template6 = ({ ref, resumeData }) => {
  // Inline styles to match the original layout
  const sidebarBg = "#1F2937";
  const borderColor = "#D1D5DB";
  const sidebarBorder = "#374151";
  const mainText = "#1F2937";
  const subText = "#6B7280";
  const accent = "#0594C3";

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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            minHeight: 600,
          }}
        >
          {/* Left Column (Main Content) */}
          <div
            style={{
              padding: 40,
              display: "flex",
              flexDirection: "column",
              gap: 40,
            }}
          >
            {/* Header Section */}
            <div style={{ marginBottom: 16 }}>
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
                <p
                  style={{
                    fontSize: 15,
                    color: mainText,
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
                <div>
                  <h2
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      color: mainText,
                    }}
                  >
                    Work History
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
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 24,
                    }}
                  >
                    {resumeData.workExperience.map((job, idx) => (
                      <div key={idx}>
                        <h3
                          style={{
                            fontWeight: 600,
                            color: mainText,
                            margin: 0,
                          }}
                        >
                          {job.jobTitle}{" "}
                          <span
                            style={{
                              fontWeight: 400,
                              color: subText,
                              marginLeft: 8,
                            }}
                          >
                            {job.startMonth} {job.startYear} -{" "}
                            {job.presently
                              ? "Current"
                              : `${job.endMonth} ${job.endYear}`}
                          </span>
                        </h3>
                        <p
                          style={{
                            fontStyle: "italic",
                            fontSize: 15,
                            color: mainText,
                          }}
                        >
                          {job.company}{" "}
                          {job.location ? `- ${job.location}` : ""}
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
          </div>

          {/* Right Column (Sidebar) */}
          <div
            style={{
              background: sidebarBg,
              color: "#fff",
              padding: 40,
              display: "flex",
              flexDirection: "column",
              gap: 40,
            }}
          >
            {/* Contact Section */}
            <div>
              <h2
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                Contact
              </h2>
              <div
                style={{
                  borderBottom: `2px solid ${sidebarBorder}`,
                  width: "100%",
                  marginTop: 4,
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
                    Address: {resumeData.address}{" "}
                    {resumeData?.city ? `, ${resumeData.city}` : ""}{" "}
                    {resumeData?.country ? `, ${resumeData.country}` : ""}
                  </p>
                )}
                {resumeData?.phone && <p>Phone: {resumeData.phone}</p>}
                {resumeData?.email && <p>Email: {resumeData.email}</p>}
              </div>
            </div>

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
                      borderBottom: `2px solid ${sidebarBorder}`,
                      width: "100%",
                      marginTop: 4,
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

            {/* Education Section */}
            {Array.isArray(resumeData?.education) &&
              resumeData.education.length > 0 && (
                <div>
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
                      borderBottom: `2px solid ${sidebarBorder}`,
                      width: "100%",
                      marginTop: 4,
                      marginBottom: 16,
                    }}
                  ></div>
                  <div
                    style={{
                      fontSize: 15,
                      color: "#fff",
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                    }}
                  >
                    {resumeData.education.map((edu, idx) => (
                      <div key={idx}>
                        <h3
                          style={{
                            fontWeight: 600,
                            color: "#fff",
                            margin: 0,
                          }}
                        >
                          {edu.degree}{" "}
                          {edu.fieldOfStudy ? `in ${edu.fieldOfStudy}` : ""}
                        </h3>
                        <p
                          style={{
                            fontSize: 13,
                            color: "#fff",
                            margin: 0,
                          }}
                        >
                          {edu.school} {edu.location ? `- ${edu.location}` : ""}
                        </p>
                        <p
                          style={{
                            fontSize: 13,
                            color: "#fff",
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
                <div>
                  <h2
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      textTransform: "uppercase",
                    }}
                  >
                    References
                  </h2>
                  <div
                    style={{
                      borderBottom: `2px solid ${sidebarBorder}`,
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
                      color: "#fff",
                    }}
                  >
                    {resumeData.references.map((ref, idx) => (
                      <li key={idx} style={{ marginBottom: 12 }}>
                        <span
                          style={{
                            fontWeight: 600,
                            color: "#fff",
                          }}
                        >
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
    </div>
  );
};

export default Template6;
