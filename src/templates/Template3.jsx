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

// Web styles
const webStyles = {
  wrapper: {
    background: "#fff",
    color: "#333",
    fontFamily: "'Inter', Arial, sans-serif",
    padding: 32,
    borderRadius: 16,
    boxShadow: "0 4px 24px 0 rgba(0,0,0,0.08)",
    maxWidth: 800,
    margin: "0 auto",
    minHeight: 900,
    width: "100%",
    boxSizing: "border-box",
  },
  header: {
    marginBottom: 20,
    borderBottom: "1px solid #007bff",
    paddingBottom: 10,
    textAlign: "center",
  },
  name: {
    fontSize: 28,
    fontWeight: 800,
    color: "#007bff",
    marginBottom: 14,
    letterSpacing: 1,
    display: "block",
  },
  contact: {
    fontSize: 13,
    color: "#555",
    marginTop: 5,
    textAlign: "center",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 700,
    color: "#007bff",
    marginBottom: 8,
    borderBottom: "1px solid #ddd",
    paddingBottom: 4,
    letterSpacing: 1,
  },
  text: {
    fontSize: 15,
    marginBottom: 5,
    lineHeight: 1.5,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 700,
  },
  company: {
    fontSize: 15,
    color: "#555",
    fontStyle: "italic",
  },
  date: {
    fontSize: 13,
    color: "#777",
    marginBottom: 5,
  },
  listItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 5,
  },
  bullet: {
    width: 18,
    fontSize: 18,
    color: "#007bff",
    display: "inline-block",
  },
};

const Template3 = ({ resumeData, isWeb }) => {
  if (typeof window !== "undefined" || isWeb) {
    return (
      <div style={webStyles.wrapper}>
        {/* Header */}
        <div style={webStyles.header}>
          <div style={webStyles.name}>
            {resumeData.name} {resumeData.surname}
          </div>
          <div style={webStyles.contact}>Email: {resumeData.email}</div>
          <div style={webStyles.contact}>Phone: {resumeData.phone}</div>
          <div style={webStyles.contact}>
            Location: {resumeData.city}, {resumeData.country}
          </div>
        </div>
        {/* Summary */}
        <div style={webStyles.section}>
          <div style={webStyles.sectionTitle}>Professional Summary</div>
          <div style={webStyles.text}>{resumeData.summary}</div>
        </div>
        {/* Experience */}
        <div style={webStyles.section}>
          <div style={webStyles.sectionTitle}>Work Experience</div>
          {resumeData.workExperience.map((exp, i) => (
            <div key={i} style={webStyles.section}>
              <div style={webStyles.jobTitle}>{exp.jobTitle}</div>
              <div style={webStyles.company}>
                {exp.company}, {exp.location}
              </div>
              <div style={webStyles.date}>
                {exp.startDate} - {exp.endDate}
                {exp.isRemote && <span> (Remote) </span>}
              </div>
              {exp.duties.map((duty, index) => (
                <div key={index} style={webStyles.listItem}>
                  <span style={webStyles.bullet}>•</span>
                  <span style={webStyles.text}>{duty.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* Education */}
        <div style={webStyles.section}>
          <div style={webStyles.sectionTitle}>Education</div>
          {resumeData.education.map((edu, i) => (
            <div key={i} style={webStyles.section}>
              <div style={webStyles.jobTitle}>{edu.degree}</div>
              <div style={webStyles.company}>
                {edu.institution}, {edu.location}
              </div>
              <div style={webStyles.date}>
                {edu.startDate} - {edu.endDate}
              </div>
            </div>
          ))}
        </div>
        {/* Skills */}
        <div style={webStyles.section}>
          <div style={webStyles.sectionTitle}>Skills</div>
          {resumeData.skills.map((skill, index) => (
            <div key={index} style={webStyles.listItem}>
              <span style={webStyles.bullet}>•</span>
              <span style={webStyles.text}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // PDF rendering
  return (
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
                {exp.isRemote && <Text> (Remote) </Text>}
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
};

export default Template3;
