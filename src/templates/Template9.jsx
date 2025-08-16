const Template9 = ({ ref, resumeData }) => {
  // Color palette
  const cardBg = "#fff";
  const headerBg = "#2563EB";
  const headerText = "#fff";
  const accent = "#2563EB";
  const mainText = "#222";
  const subText = "#2563EB";
  const borderColor = "#333";

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
            background: headerBg,
            color: headerText,
            padding: 32,
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              background: headerText,
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 24,
            }}
          >
            <span
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: accent,
              }}
            >
              {resumeData?.name?.[0] || ""}
              {resumeData?.surname?.[0] || ""}
            </span>
          </div>
          <div>
            <h1
              style={{
                fontSize: 36,
                fontWeight: 700,
                color: headerText,
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
                marginTop: 8,
                fontSize: 15,
                color: headerText,
                gap: 16,
              }}
            >
              {resumeData?.address && (
                <span>
                  {resumeData.address}{" "}
                  {resumeData?.city ? `, ${resumeData.city}` : ""}{" "}
                  {resumeData?.country ? `, ${resumeData.country}` : ""}
                </span>
              )}
              {resumeData?.email && <span>|</span>}
              {resumeData?.email && <span>{resumeData.email}</span>}
              {resumeData?.phone && <span>|</span>}
              {resumeData?.phone && <span>{resumeData.phone}</span>}
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div style={{ padding: 32 }}>
          {/* Professional Summary Section */}
          {resumeData?.summary && (
            <div style={{ marginBottom: 32 }}>
              <h2
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: subText,
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
              <div style={{ marginBottom: 32 }}>
                <h2
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: subText,
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
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    gap: 32,
                  }}
                >
                  {resumeData.workExperience.map((job, idx) => (
                    <div
                      key={idx}
                      style={{
                        borderLeft: `2px solid ${borderColor}`,
                        paddingLeft: 16,
                        position: "relative",
                        paddingBottom: 16,
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: -10,
                          top: 0,
                          width: 16,
                          height: 16,
                          background: cardBg,
                          border: `2px solid ${accent}`,
                          borderRadius: "50%",
                        }}
                      ></span>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "start",
                        }}
                      >
                        <div>
                          <h3
                            style={{
                              fontWeight: 700,
                              color: mainText,
                            }}
                          >
                            {job.jobTitle}{" "}
                            <span
                              style={{
                                fontWeight: 400,
                                color: mainText,
                              }}
                            >
                              / {job.company}{" "}
                              {job.location ? `- ${job.location}` : ""}
                            </span>
                          </h3>
                        </div>
                        <p
                          style={{
                            fontSize: 13,
                            color: borderColor,
                            fontWeight: 600,
                          }}
                        >
                          {job.startMonth} {job.startYear} -{" "}
                          {job.presently
                            ? "Current"
                            : `${job.endMonth} ${job.endYear}`}
                        </p>
                      </div>
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

          {/* Skills Section */}
          {Array.isArray(resumeData?.skills) &&
            resumeData.skills.length > 0 && (
              <div style={{ marginBottom: 32 }}>
                <h2
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: subText,
                  }}
                >
                  Skills
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
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    marginTop: 16,
                    fontSize: 15,
                    color: mainText,
                    gap: 8,
                  }}
                >
                  <ul style={{ listStyle: "disc", paddingLeft: 20, margin: 0 }}>
                    {resumeData.skills
                      .slice(0, Math.ceil(resumeData.skills.length / 2))
                      .map((skill, idx) => (
                        <li key={idx}>{skill.name}</li>
                      ))}
                  </ul>
                  <ul style={{ listStyle: "disc", paddingLeft: 20, margin: 0 }}>
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
                    color: subText,
                  }}
                >
                  Education
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
                    marginTop: 16,
                    fontSize: 15,
                    color: mainText,
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  {resumeData.education.map((edu, idx) => (
                    <div key={idx}>
                      <p style={{ fontWeight: 700 }}>
                        {edu.degree}{" "}
                        {edu.fieldOfStudy ? `: ${edu.fieldOfStudy}` : ""}
                      </p>
                      <p
                        style={{
                          fontStyle: "italic",
                          color: accent,
                        }}
                      >
                        {edu.school} {edu.location ? `- ${edu.location}` : ""}
                      </p>
                      <p
                        style={{
                          fontSize: 13,
                          color: borderColor,
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
                    color: subText,
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
                        <span
                          style={{
                            color: accent,
                          }}
                        >
                          {" "}
                          — {ref.occupation}
                        </span>
                      )}
                      <br />
                      <span
                        style={{
                          color: accent,
                        }}
                      >
                        {ref.phone}
                      </span>
                      {ref.location && (
                        <span
                          style={{
                            color: accent,
                          }}
                        >
                          {", "}
                          {ref.location}
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

export default Template9;
