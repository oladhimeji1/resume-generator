import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";

function Template2({ resumeData, isWeb }) {
  // PDF styles
  const styles = StyleSheet.create({
    page: {
      padding: 30,
      fontFamily: "Helvetica",
      fontSize: 12,
      color: "#333",
      flexDirection: "column",
    },
    header: {
      backgroundColor: "#f8f8f8",
      padding: 20,
      marginBottom: 10,
      borderBottom: "2px solid #007bff",
      textAlign: "center",
    },
    name: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#007bff",
      marginBottom: 5,
    },
    section: {
      marginBottom: 10,
    },
    sectionTitle: {
      fontSize: 12,
      fontWeight: "bold",
      marginBottom: 10,
      borderBottom: "1px solid #007bff",
    },
    text: {
      marginBottom: 5,
      lineHeight: 1.15,
    },
    listItem: {
      marginBottom: 5,
      paddingLeft: 10,
      position: "relative",
    },
    bullet: {
      position: "absolute",
      left: 0,
      fontSize: 12,
    },
    jobTitle: {
      fontWeight: "bold",
      fontSize: 13,
    },
    company: {
      fontStyle: "italic",
      color: "#555",
    },
    date: {
      color: "#777",
      fontSize: 11,
      marginBottom: 5,
    },
    skillsContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
    skill: {
      backgroundColor: "#e9f5ff",
      padding: "5px 10px",
      borderRadius: 5,
      marginRight: 10,
      marginBottom: 10,
    },
  });

  // Web styles
  const webStyles = {
    wrapper: {
      background: "#fff",
      color: "#333",
      fontFamily: "'Inter', Arial, sans-serif",
      padding: 32,
      borderRadius: 12,
      boxShadow: "0 4px 24px 0 rgba(0,0,0,0.08)",
      maxWidth: 800,
      margin: "0 auto",
      minHeight: 900,
      width: "100%",
      boxSizing: "border-box",
    },
    header: {
      background: "#f8f8f8",
      padding: 20,
      marginBottom: 10,
      borderBottom: "2px solid #007bff",
      textAlign: "center",
      borderRadius: 8,
    },
    name: {
      fontSize: 28,
      fontWeight: 800,
      color: "#007bff",
      marginBottom: 5,
      letterSpacing: 1,
    },
    section: {
      marginBottom: 24,
    },
    sectionTitle: {
      fontSize: 14,
      fontWeight: 700,
      marginBottom: 10,
      borderBottom: "1px solid #007bff",
      paddingBottom: 4,
      letterSpacing: 1,
    },
    text: {
      marginBottom: 5,
      lineHeight: 1.5,
      fontSize: 12,
    },
    listItem: {
      marginBottom: 5,
      paddingLeft: 18,
      position: "relative",
      fontSize: 12,
    },
    bullet: {
      position: "absolute",
      left: 0,
      fontSize: 12,
      color: "#007bff",
    },
    jobTitle: {
      fontWeight: 700,
      fontSize: 12,
    },
    company: {
      fontStyle: "italic",
      color: "#555",
      fontSize: 15,
    },
    date: {
      color: "#777",
      fontSize: 14,
      marginBottom: 5,
    },
    skillsContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
    },
    skill: {
      background: "#e9f5ff",
      padding: "6px 14px",
      borderRadius: 8,
      marginRight: 10,
      marginBottom: 10,
      fontWeight: 600,
      fontSize: 14,
      color: "#007bff",
    },
  };

  // Render for web preview
  if (typeof window !== "undefined" || isWeb) {
    return (
      <div style={webStyles.wrapper}>
        <div style={webStyles.header}>
          <div style={webStyles.name}>
            {resumeData.name} {resumeData.surname}
          </div>
        </div>
        <div style={webStyles.section}>
          <div style={webStyles.sectionTitle}>Contact</div>
          <div style={webStyles.text}>Email: {resumeData.email}</div>
          <div style={webStyles.text}>Phone: {resumeData.phone}</div>
          <div style={webStyles.text}>
            Location: {resumeData.city} {resumeData.country}
          </div>
        </div>
        <div style={webStyles.section}>
          <div style={webStyles.sectionTitle}>Summary</div>
          <div style={webStyles.text}>{resumeData.summary}</div>
        </div>
        <div style={webStyles.section}>
          <div style={webStyles.sectionTitle}>Work Experience</div>
          {resumeData.workExperience.map((experience, index) => (
            <div key={index} style={webStyles.section}>
              <div style={webStyles.jobTitle}>{experience.jobTitle}</div>
              <div style={webStyles.company}>{experience.company}</div>
              <div style={webStyles.date}>
                {experience.startDate} - {experience.endDate}
                {experience.isRemote && <span> (Remote) </span>}
              </div>
              {experience.duties.map((duty, i) => (
                <div key={i} style={webStyles.listItem}>
                  <span style={webStyles.bullet}>•</span> {duty.name}
                </div>
              ))}
            </div>
          ))}
        </div>
        {resumeData.education.map((education, index) => (
          <div key={index} style={webStyles.section}>
            <div style={webStyles.sectionTitle}>Education</div>
            <div style={webStyles.jobTitle}>{education.degree}</div>
            <div style={webStyles.company}>{education.institution}</div>
            <div style={webStyles.date}>
              {education.startDate} - {education.endDate}
            </div>
          </div>
        ))}
        <div style={webStyles.section}>
          <div style={webStyles.sectionTitle}>Skills</div>
          <div style={webStyles.skillsContainer}>
            {resumeData.skills.map((skill, index) => (
              <span key={index} style={webStyles.skill}>
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Render for PDF
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>
            {resumeData.name} {resumeData.surname}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact</Text>
          <Text style={styles.text}>Email: {resumeData.email}</Text>
          <Text style={styles.text}>Phone: {resumeData.phone}</Text>
          <Text style={styles.text}>
            Location: {resumeData.city} {resumeData.country}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.text}>{resumeData.summary}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Work Experience</Text>
          {resumeData.workExperience.map((experience, index) => (
            <View key={index} style={styles.section}>
              <Text style={styles.jobTitle}>{experience.jobTitle}</Text>
              <Text style={styles.company}>{experience.company}</Text>
              <Text style={styles.date}>
                {experience.startDate} - {experience.endDate}
                {experience.isRemote && <Text> (Remote) </Text>}
              </Text>
              {experience.duties.map((duty, i) => (
                <Text key={i} style={styles.listItem}>
                  <Text style={styles.bullet}>•</Text> {duty.name}
                </Text>
              ))}
            </View>
          ))}
        </View>
        {resumeData.education.map((education, index) => {
          return (
            <View key={index} style={styles.section}>
              <Text style={styles.sectionTitle}>Education</Text>
              <Text style={styles.jobTitle}>{education.degree}</Text>
              <Text style={styles.company}>{education.institution}</Text>
              <Text style={styles.date}>
                {education.startDate} - {education.endDate}
              </Text>
            </View>
          );
        })}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillsContainer}>
            {resumeData.skills.map((skill, index) => (
              <Text key={index} style={styles.skill}>
                {skill.name}
              </Text>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default Template2;
