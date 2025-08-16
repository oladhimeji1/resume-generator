import React from "react";

const Template5 = ({ ref, resumeData }) => {
  // Inline styles to match the original layout
  const mainBg = "#F3F4F6";
  const cardBg = "#fff";
  const borderColor = "#D1D5DB";
  const mainText = "#1F2937";
  const subText = "#6B7280";
  const accent = "#0594C3";

  return (
    <div
      ref={ref}
      style={{
        minHeight: "100vh",
        background: mainBg,
        padding: 16,
        fontFamily: "Inter, sans-serif",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 900,
          background: cardBg,
          borderRadius: 16,
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          overflow: "hidden",
          padding: 40,
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
          <div
            style={{
              width: 80,
              height: 80,
              background: borderColor,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 16,
            }}
          >
            <span
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: mainText,
              }}
            >
              {resumeData?.name?.[0] || ""}
              {resumeData?.surname?.[0] || ""}
            </span>
          </div>
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
              color: subText,
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
                {resumeData?.city ? `, ${resumeData.city}` : ""}
                {resumeData?.country ? `, ${resumeData.country}` : ""}
              </span>
            )}
          </div>
        </div>

        {/* Main Content Two-Column Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: 32,
          }}
        >
          {/* Left Column (Main Content) */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {/* Professional Statement Section */}
            {resumeData?.summary && (
              <div>
                <h2
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    borderBottom: `2px solid ${borderColor}`,
                    paddingBottom: 4,
                    color: mainText,
                  }}
                >
                  Professional Statement
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
                <div>
                  <h2
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      borderBottom: `2px solid ${borderColor}`,
                      paddingBottom: 4,
                      color: mainText,
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
                      <div key={idx}>
                        <h3
                          style={{
                            fontWeight: 600,
                            color: mainText,
                            margin: 0,
                          }}
                        >
                          {job.company}{" "}
                          {job.location ? `| ${job.location}` : ""}
                        </h3>
                        <p
                          style={{
                            fontWeight: 600,
                            color: mainText,
                            margin: 0,
                          }}
                        >
                          {job.jobTitle}
                        </p>
                        <p
                          style={{
                            fontSize: 13,
                            color: subText,
                            margin: 0,
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

            {/* Education Section */}
            {Array.isArray(resumeData?.education) &&
              resumeData.education.length > 0 && (
                <div>
                  <h2
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      borderBottom: `2px solid ${borderColor}`,
                      paddingBottom: 4,
                      color: mainText,
                    }}
                  >
                    Education
                  </h2>
                  <div
                    style={{
                      marginTop: 16,
                      fontSize: 15,
                      color: mainText,
                    }}
                  >
                    {resumeData.education.map((edu, idx) => (
                      <div key={idx}>
                        <h3
                          style={{
                            fontWeight: 600,
                            color: mainText,
                            margin: 0,
                          }}
                        >
                          {edu.school} {edu.location ? `| ${edu.location}` : ""}
                        </h3>
                        <p
                          style={{
                            fontWeight: 600,
                            color: mainText,
                            margin: 0,
                          }}
                        >
                          {edu.degree}{" "}
                          {edu.fieldOfStudy ? `in ${edu.fieldOfStudy}` : ""}
                        </p>
                        <p
                          style={{
                            fontSize: 13,
                            color: subText,
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
          </div>

          {/* Right Column (Sidebar) */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {/* Skills Section */}
            {Array.isArray(resumeData?.skills) &&
              resumeData.skills.length > 0 && (
                <div>
                  <h2
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      borderBottom: `2px solid ${borderColor}`,
                      paddingBottom: 4,
                      color: mainText,
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

            {/* References Section */}
            {Array.isArray(resumeData?.references) &&
              resumeData.references.length > 0 && (
                <div>
                  <h2
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      borderBottom: `2px solid ${borderColor}`,
                      paddingBottom: 4,
                      color: mainText,
                    }}
                  >
                    References
                  </h2>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      marginTop: 16,
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

export default Template5;
