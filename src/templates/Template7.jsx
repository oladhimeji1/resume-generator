import React from "react";
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
    backgroundColor: "#008080",
    padding: 15,
    color: "#FFFFFF",
    borderRight: "2px solid #FF6F61",
  },
  rightColumn: { width: "60%", padding: 20 },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "Helvetica-Bold",
    color: "#FFFFFF",
  },
  subHeader: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333333",
    borderBottom: "1px solid #D3D3D3",
  },
  text: { fontSize: 10, marginBottom: 5, lineHeight: 1.5, color: "#333333" },
  textLight: { fontSize: 10, marginBottom: 5, lineHeight: 1.5, color: "#eee" },
  section: { marginBottom: 15 },
  bullet: { flexDirection: "row", marginBottom: 5 },
  bulletPoint: { width: 10, textAlign: "center", color: "#FFFFFF" },
  skillMatrix: { flexDirection: "row", flexWrap: "wrap", gap: 5 },
  skillItem: {
    backgroundColor: "#FF6F61",
    padding: 5,
    borderRadius: 3,
    fontSize: 9,
  },
  divider: { borderBottom: "1px dashed #FF6F61", marginVertical: 10 },
});

// Document component
const Template7 = ({ resumeData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
        {/* Left Column (Sidebar) */}
        <View style={styles.leftColumn}>
          <Text style={styles.header}>
            {resumeData.name} {resumeData.surname}
          </Text>
          <View style={styles.section}>
            <Text style={{ ...styles.subHeader, color: "#FFFFFF" }}>
              Contact
            </Text>
            <Text style={styles.textLight}>{resumeData.email}</Text>
            <Text style={styles.textLight}>{resumeData.phone}</Text>
            <Text style={styles.textLight}>
              {resumeData.city} {resumeData.country}
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={{ ...styles.subHeader, color: "#FFFFFF" }}>
              Skills
            </Text>
            <View style={styles.skillMatrix}>
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
            <Text style={styles.subHeader}>Professional Summary</Text>

            <Text style={styles.text}>{resumeData.summary}</Text>
            <View style={styles.divider} />
          </View>

          <View style={styles.section}>
            <Text style={styles.subHeader}>Professional Experience</Text>
            {resumeData.workExperience.map((job, index) => (
              <View key={index} style={styles.section}>
                <Text style={styles.text}>
                  {job.jobTitle} - {job.company}
                </Text>
                <Text style={styles.text}>
                  {job.startDate} - {job.endDate}
                  {job.isRemote && <Text> (Remote) </Text>}
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
      </View>
    </Page>
  </Document>
);

export default Template7;
