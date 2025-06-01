import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Define styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
    fontSize: 11,
    backgroundColor: "#FFFFFF",
  },
  container: { flexDirection: "row", minHeight: "100%" },
  leftColumn: {
    width: "40%",
    backgroundColor: "#333333",
    padding: 20,
    color: "#FFFFFF",
    borderRight: "2px solid #FFD700",
  },
  rightColumn: { width: "60%", padding: 20 },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "Helvetica-Bold",
    color: "#FFD700",
  },
  subHeader: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#FFD700",
    borderBottom: "1px solid #FFD700",
  },
  text: { fontSize: 10, marginBottom: 5, lineHeight: 1.5, color: "#333333" },
  textLight: { fontSize: 10, marginBottom: 5, lineHeight: 1.5, color: "#eee" },
  section: { marginBottom: 12 },
  bullet: { flexDirection: "row", marginBottom: 5 },
  bulletPoint: { width: 10, textAlign: "center", color: "#FFFFFF" },
  skillGrid: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  skillItem: {
    border: "1px solid #FFD700",
    padding: 4,
    borderRadius: 3,
    fontSize: 9,
    color: "#FFFFFF",
  },
  divider: { borderBottom: "1px solid #E0E0E0", marginVertical: 10 },
});

// Document component
const Template8 = ({ resumeData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
        {/* Left Column (Sidebar) */}
        <View style={styles.leftColumn}>
          <Text style={styles.header}>
            {resumeData.name} {resumeData.surname}
          </Text>
          <View style={styles.section}>
            <Text style={styles.subHeader}>Contact</Text>
            <Text style={styles.textLight}>{resumeData.email}</Text>
            <Text style={styles.textLight}>{resumeData.phone}</Text>
            <Text style={styles.textLight}>
              {resumeData.city} {resumeData.country}
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.subHeader}>Professional Summary</Text>
            <Text style={styles.textLight}>{resumeData.summary}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.subHeader}>Skills</Text>
            <View style={styles.skillGrid}>
              {resumeData.skills.map((skill, index) => (
                <Text key={index} style={styles.skillItem}>
                  {skill.name}
                </Text>
              ))}
            </View>
          </View>
        </View>
        {/* Right Column */}
        <View style={styles.rightColumn}>
          <View style={styles.section}>
            <Text style={{ ...styles.subHeader, color: "#333333" }}>
              Professional Experience
            </Text>
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
                    <Text style={{ ...styles.bulletPoint, color: "#333333" }}>
                      •
                    </Text>
                    <Text style={styles.text}>{duty.name}</Text>
                  </View>
                ))}
                {index < resumeData.workExperience.length - 1 && (
                  <View style={styles.divider} />
                )}
              </View>
            ))}
          </View>
          <View style={styles.section}>
            <Text style={{ ...styles.subHeader, color: "#333333" }}>
              Education
            </Text>
            {resumeData.education.map((edu, index) => (
              <View key={index} style={styles.section}>
                <Text style={styles.text}>{edu.degree}</Text>
                <Text style={styles.text}>{edu.institution}</Text>
                <Text style={styles.text}>
                  {edu.startDate}- {edu.endDate}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default Template8;
