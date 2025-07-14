import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Define styles using react-pdf's StyleSheet
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    fontFamily: "Helvetica",
    padding: 20,
  },
  sidebar: {
    width: "35%",
    backgroundColor: "#f4f4f4",
    padding: 20,
    borderRight: "1px solid #e0e0e0",
  },
  main: {
    width: "65%",
    padding: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 10,
    borderBottom: "1px solid #3498db",
    paddingBottom: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 5,
  },
  title: {
    fontSize: 12,
    color: "#7f8c8d",
    marginBottom: 15,
  },
  contactItem: {
    fontSize: 10,
    color: "#34495e",
    marginBottom: 5,
  },
  summaryText: {
    fontSize: 10,
    color: "#34495e",
    lineHeight: 1.5,
    marginBottom: 15,
  },
  experienceItem: {
    marginBottom: 15,
  },
  experienceTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  experienceCompany: {
    fontSize: 10,
    color: "#7f8c8d",
    marginBottom: 5,
  },
  experienceDescription: {
    fontSize: 10,
    color: "#34495e",
    lineHeight: 1.5,
  },
  educationItem: {
    marginBottom: 15,
  },
  educationTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  educationDetails: {
    fontSize: 10,
    color: "#34495e",
  },
  skillsList: {
    fontSize: 10,
    color: "#34495e",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skillItem: {
    backgroundColor: "#3498db",
    color: "#ffffff",
    padding: 5,
    borderRadius: 3,
    marginRight: 5,
    marginBottom: 5,
    fontSize: 9,
  },
});

// Resume component
const Template5 = ({ resumeData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Sidebar */}
      <View style={styles.sidebar}>
        <Text style={styles.name}>
          {resumeData.name} <br /> {resumeData.surname}
        </Text>
        <Text style={styles.title}></Text>

        {/* Contact Info */}
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.sectionTitle}>Contact</Text>
          <Text style={styles.contactItem}>Email: {resumeData.email}</Text>
          <Text style={styles.contactItem}>Phone:{resumeData.phone}</Text>

          <Text style={styles.contactItem}>
            Location: {resumeData.city}, {resumeData.country}
          </Text>
        </View>

        {/* Skills */}
        <View>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillsList}>
            {resumeData.skills.map((skill, i) => (
              <Text key={i} style={styles.skillItem}>
                {skill.name}
              </Text>
            ))}
          </View>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.main}>
        {/* Summary */}
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.summaryText}>{resumeData.summary}</Text>
        </View>

        {/* Experience */}
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {resumeData.workExperience.map((exp, i) => (
            <View key={i} style={styles.experienceItem}>
              <Text style={styles.experienceTitle}>{exp.jobTitle}</Text>
              <Text style={styles.experienceCompany}>
                {exp.company} | {exp.startDate} - {exp.endDate}
                {exp.isRemote && <Text> (Remote) </Text>}
              </Text>
              {exp.duties.map((duty, i) => (
                <Text key={i} style={styles.experienceDescription}>
                  {duty.name}
                </Text>
              ))}
            </View>
          ))}
        </View>

        {/* Education */}
        <View>
          <Text style={styles.sectionTitle}>Education</Text>
          {resumeData.education.map((edu, i) => (
            <View key={i} style={styles.educationItem}>
              <Text style={styles.educationTitle}>{edu.degree}</Text>
              <Text style={styles.educationDetails}>
                {edu.institution} | {edu.startDate} - {edu.endDate}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default Template5;
