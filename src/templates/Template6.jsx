import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Define styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
    fontSize: 12,
    backgroundColor: "#FFFFFF",
  },
  container: { flexDirection: "column", minHeight: "100%" },
  headerSection: {
    padding: 15,
    marginBottom: 15,
    borderBottom: "2px solid #666666", // Gray underline
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#000000",
    fontFamily: "Helvetica-Bold",
    textAlign: "center",
  },
  contact: {
    fontSize: 10,
    color: "#000000",
    textAlign: "center",
    marginTop: 5,
  },
  section: { marginBottom: 12 },
  subHeader: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000000",
    borderBottom: "1px solid #666666",
  },
  text: { fontSize: 10, marginBottom: 5, lineHeight: 1.5, color: "#000000" },
  bullet: { flexDirection: "row", marginBottom: 5 },
  bulletPoint: { width: 10, textAlign: "center", color: "#000000" },
  skillsList: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  skillItem: { fontSize: 9, color: "#000000", padding: 5 },
  divider: { borderBottom: "1px solid #666666", marginVertical: 10 },
});

// Document component
const Template6 = ({ resumeData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.headerSection}>
          <Text style={styles.header}>
            {resumeData.name} {resumeData.surname}
          </Text>
          <Text style={styles.contact}>
            {resumeData.email} | {resumeData.phone}
          </Text>
          <Text style={styles.contact}>
            {resumeData.city} {resumeData.country}
          </Text>
        </View>

        <View style={styles.section}>
            <Text style={styles.text}>
                {resumeData.summary}
              </Text>
        </View>
        {/* Skills Section */}
        <View style={styles.section}>
          <Text style={styles.subHeader}>Skills</Text>
          <View style={styles.skillsList}>
            {resumeData.skills.map((skill, index) => (
              <Text key={index} style={styles.skillItem}>
                ■ {skill.name}
              </Text>
            ))}
          </View>
        </View>
        {/* Experience Section */}
        <View style={styles.section}>
          <Text style={styles.subHeader}>Professional Experience</Text>
          {resumeData.workExperience.map((job, index) => (
            <View key={index} style={styles.section}>
              <Text style={styles.text}>
                {job.jobTitle} - {job.company}
              </Text>
              <Text style={styles.text}>
                {job.startDate} - {job.endDate}
              </Text>
              {job.duties.map((duty, i) => (
                <View key={i} style={styles.bullet}>
                  <Text style={styles.bulletPoint}>■</Text>
                  <Text style={styles.text}>{duty.name}</Text>
                </View>
              ))}
              {index < resumeData.workExperience.length - 1 && (
                <View style={styles.divider} />
              )}
            </View>
          ))}
        </View>
        {/* Education Section */}
        <View style={styles.section}>
          <Text style={styles.subHeader}>Education</Text>
          {resumeData.education.map((edu, index) => (
            <View key={index} style={styles.section}>
              <Text style={styles.text}>{edu.degree}</Text>
              <Text style={styles.text}>{edu.institution}</Text>
              <Text style={styles.text}>
                {edu.startDate} - {edu.endDate}
              </Text>
              {index < resumeData.education.length - 1 && (
                <View style={styles.divider} />
              )}
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default Template6;
