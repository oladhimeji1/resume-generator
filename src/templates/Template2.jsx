const Template2 = ({ ref, resumeData }) => {
  const mainColor = "#0594C3";
  const textColor = "#222";
  const borderColor = "#D1D5DB";
  const sectionBg = "#F3F4F6";

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
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 32,
          }}
        >
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
          <div style={{ textAlign: "right" }}>
            <p style={{ fontSize: 15, color: textColor, margin: 0 }}>
              {resumeData?.address || ""} {resumeData?.city || ""}{" "}
              {resumeData?.country || ""}
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
            <p style={{ fontSize: 15, color: textColor, margin: 0 }}>
              {resumeData?.phone || ""}
            </p>
          </div>
        </div>

        {/* Professional Summary Section */}
        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              background: mainColor,
              color: "#fff",
              padding: "8px 16px",
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}
          >
            <h2
              style={{
                fontSize: 20,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              Professional Summary
            </h2>
          </div>
          <div
            style={{
              padding: 16,
              background: sectionBg,
              borderBottom: `2px solid ${borderColor}`,
              borderLeft: `2px solid ${borderColor}`,
              borderRight: `2px solid ${borderColor}`,
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
            }}
          >
            <p
              style={{
                fontSize: 15,
                color: textColor,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {resumeData?.summary || ""}
            </p>
          </div>
        </div>

        {/* Employment History Section */}
        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              background: mainColor,
              color: "#fff",
              padding: "8px 16px",
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}
          >
            <h2
              style={{
                fontSize: 20,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              Employment History
            </h2>
          </div>
          <div
            style={{
              padding: 16,
              background: sectionBg,
              borderBottom: `2px solid ${borderColor}`,
              borderLeft: `2px solid ${borderColor}`,
              borderRight: `2px solid ${borderColor}`,
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 16,
                width: 1,
                background: borderColor,
                height: "100%",
              }}
            ></div>
            {Array.isArray(resumeData?.workExperience) &&
            resumeData.workExperience.length > 0 ? (
              resumeData.workExperience.map((job, idx) => (
                <div
                  key={idx}
                  style={{
                    position: "relative",
                    marginBottom:
                      idx !== resumeData.workExperience.length - 1 ? 24 : 0,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: 6,
                      top: 4,
                      height: 8,
                      width: 8,
                      background: mainColor,
                      borderRadius: "50%",
                    }}
                  ></div>
                  <div style={{ marginLeft: 32 }}>
                    <p
                      style={{
                        fontSize: 13,
                        color: "#6B7280",
                        fontStyle: "italic",
                        margin: 0,
                      }}
                    >
                      {job.startMonth} {job.startYear} -{" "}
                      {job.presently
                        ? "Present"
                        : `${job.endMonth} ${job.endYear}`}
                    </p>
                    <h3
                      style={{
                        fontWeight: 600,
                        color: textColor,
                        margin: "4px 0",
                      }}
                    >
                      {job.jobTitle} at {job.company}
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
        </div>

        {/* Education Section */}
        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              background: mainColor,
              color: "#fff",
              padding: "8px 16px",
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}
          >
            <h2
              style={{
                fontSize: 20,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              Education
            </h2>
          </div>
          <div
            style={{
              padding: 16,
              background: sectionBg,
              borderBottom: `2px solid ${borderColor}`,
              borderLeft: `2px solid ${borderColor}`,
              borderRight: `2px solid ${borderColor}`,
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 16,
                width: 1,
                background: borderColor,
                height: "100%",
              }}
            ></div>
            {Array.isArray(resumeData?.education) &&
            resumeData.education.length > 0 ? (
              resumeData.education.map((edu, idx) => (
                <div
                  key={idx}
                  style={{
                    position: "relative",
                    marginBottom:
                      idx !== resumeData.education.length - 1 ? 16 : 0,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: 6,
                      top: 4,
                      height: 8,
                      width: 8,
                      background: mainColor,
                      borderRadius: "50%",
                    }}
                  ></div>
                  <div style={{ marginLeft: 32 }}>
                    <p
                      style={{
                        fontSize: 13,
                        color: "#6B7280",
                        fontStyle: "italic",
                        margin: 0,
                      }}
                    >
                      {edu.startMonth} {edu.startYear} -{" "}
                      {edu.currentlyEnrolled
                        ? "Present"
                        : `${edu.endMonth} ${edu.endYear}`}
                    </p>
                    <h3
                      style={{
                        fontWeight: 600,
                        color: textColor,
                        margin: "4px 0",
                      }}
                    >
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
        </div>

        {/* Skills Section */}
        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              background: mainColor,
              color: "#fff",
              padding: "8px 16px",
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}
          >
            <h2
              style={{
                fontSize: 20,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              Skills
            </h2>
          </div>
          <div
            style={{
              padding: 16,
              background: sectionBg,
              borderBottom: `2px solid ${borderColor}`,
              borderLeft: `2px solid ${borderColor}`,
              borderRight: `2px solid ${borderColor}`,
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
            }}
          >
            {Array.isArray(resumeData?.skills) &&
            resumeData.skills.length > 0 ? (
              <ul
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 12,
                  padding: 0,
                  margin: 0,
                  listStyle: "none",
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
        </div>

        {/* References Section */}
        <div>
          <div
            style={{
              background: mainColor,
              color: "#fff",
              padding: "8px 16px",
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}
          >
            <h2
              style={{
                fontSize: 20,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              References
            </h2>
          </div>
          <div
            style={{
              padding: 16,
              background: sectionBg,
              borderBottom: `2px solid ${borderColor}`,
              borderLeft: `2px solid ${borderColor}`,
              borderRight: `2px solid ${borderColor}`,
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
            }}
          >
            {Array.isArray(resumeData?.references) &&
            resumeData.references.length > 0 ? (
              <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
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
                      <span style={{ color: textColor }}>, {ref.location}</span>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p style={{ fontSize: 14, color: textColor }}>
                No references added.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template2;
