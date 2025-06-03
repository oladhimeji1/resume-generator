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
    lineHeight: 1.5,
    color: "#333",
    backgroundColor: "#fff",
  },
  header: {
    marginBottom: 20,
    borderBottom: "1pt solid #007bff",
    paddingBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#007bff",
    textAlign: "center",
    marginBottom: 14,
    display: "block",
  },
  title: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },
  contact: {
    fontSize: 10,
    color: "#555",
    marginTop: 5,
    textAlign: "center",
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: 5,
    borderBottom: "1pt solid #ddd",
  },
  text: {
    fontSize: 11,
    marginBottom: 5,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: "bold",
  },
  company: {
    fontSize: 11,
    color: "#555",
  },
  date: {
    fontSize: 10,
    color: "#777",
  },
  listItem: {
    flexDirection: "row",
    marginBottom: 5,
  },
  bullet: {
    width: 10,
    fontSize: 11,
  },
});

// CV Component
const Template3 = ({ resumeData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>
          {resumeData.name} {resumeData.surname}
        </Text>
        <Text style={styles.title}></Text>
        <Text style={styles.contact}>Email: {resumeData.email}</Text>
        <Text style={styles.contact}>Phone: {resumeData.phone}</Text>

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
        <Text style={styles.sectionTitle}>Work Experience</Text>
        {resumeData.workExperience.map((exp, i) => (
          <View key={i} style={styles.section}>
            <Text style={styles.jobTitle}>{exp.jobTitle}</Text>
            <Text style={styles.company}>
              {exp.company}, {exp.location}
            </Text>
            <Text style={styles.date}>
              {exp.startDate} - {exp.endDate}
            </Text>

            {exp.duties.map((duty, index) => {
              return (
                <View key={index} style={styles.listItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.text}>{duty.name}</Text>
                </View>
              );
            })}
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
        {resumeData.skills.map((skill, index) => (
          <View key={index} style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.text}>{skill.name}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default Template3;
