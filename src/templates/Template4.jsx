import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

// Define styles for the CV
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
    fontSize: 11,
    lineHeight: 1.6,
    color: "#333333",
    backgroundColor: "#ffffff",
  },
  header: {
    marginBottom: 20,
    borderBottom: "0.5pt solid #2e7d32",
    paddingBottom: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2e7d32",
    marginBottom: 14,
    textAlign: "center",
  },
  title: {
    fontSize: 13,
    color: "#555555",
    textAlign: "center",
    marginTop: 4,
  },
  contact: {
    fontSize: 10,
    color: "#555555",
    textAlign: "center",
    marginTop: 3,
  },
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#2e7d32",
    marginBottom: 5,
    borderBottom: "0.5pt solid #e8f5e9",
    paddingBottom: 2,
  },
  text: {
    fontSize: 11,
    marginBottom: 4,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#333333",
  },
  company: {
    fontSize: 11,
    color: "#555555",
  },
  date: {
    fontSize: 10,
    color: "#777777",
  },
  listItem: {
    flexDirection: "row",
    marginBottom: 4,
  },
  bullet: {
    width: 10,
    fontSize: 11,
  },
});

const Template4 = ({ resumeData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>
          {resumeData.name} {resumeData.surname}
        </Text>
        <Text style={styles.title}></Text>
        <Text style={styles.contact}>Email: {resumeData.email}</Text>
        <Text style={styles.contact}>Phone:{resumeData.phone}</Text>

        <Text style={styles.contact}>
          Location: {resumeData.city}, {resumeData.country}
        </Text>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.text}>{resumeData.summary}</Text>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Experience</Text>
        {resumeData.workExperience.map((exp, i) => (
          <View key={i} style={styles.section}>
            <Text style={styles.jobTitle}>{exp.jobTitle}</Text>
            <Text style={styles.company}>
              {exp.company}, {exp.location}
            </Text>
            <Text style={styles.date}>
              {exp.startDate} – {exp.endDate}
            </Text>
            <View style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.text}>
                Led redesign of a mobile app interface, improving user
                engagement by 35%.
              </Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.text}>
                Conducted user testing sessions, resulting in a 20% increase in
                usability scores.
              </Text>
            </View>
          </View>
        ))}
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        {resumeData.education.map((edu, i) => (
          <View key={i}>
            <Text style={styles.jobTitle}>{edu.degree}</Text>
            <Text style={styles.company}>
              {edu.institution}, {edu.location}
            </Text>
            <Text style={styles.date}>
              {edu.startDate} - {edu.endDate}
            </Text>
          </View>
        ))}
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        {resumeData.skills.map((skill, i) => (
          <View key={i} style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.text}>{skill.name}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default Template4;
