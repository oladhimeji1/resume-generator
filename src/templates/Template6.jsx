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
  container: { flexDirection: "column", minHeight: "100%" },
  headerSection: {
    padding: 15,
    marginBottom: 20,
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
  section: { marginBottom: 15 },
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

// Sample data
const data = {
  name: "James Thompson",
  contact: {
    email: "james.thompson@email.com",
    phone: "(789) 456-1234",
    address: "456 Clarity St, City, ST 67890",
    linkedin: "linkedin.com/in/jamesthompson",
  },
  skills: [
    "Legal Research",
    "Contract Drafting",
    "Compliance",
    "Negotiation",
    "Public Speaking",
    "Case Management",
  ],
  experience: [
    {
      title: "Associate Attorney",
      company: "Thompson & Partners",
      dates: "Jul 2020 - Present",
      achievements: [
        "Drafted 100+ legal documents, achieving 95% client approval rate.",
        "Represented clients in 20+ cases, securing favorable outcomes in 85% of cases.",
      ],
    },
    {
      title: "Legal Assistant",
      company: "City Law Firm",
      dates: "Aug 2017 - Jun 2020",
      achievements: [
        "Conducted research for 50+ cases, improving case preparation efficiency by 20%.",
        "Assisted in contract reviews, reducing errors by 15%.",
      ],
    },
  ],
  education: [
    {
      degree: "J.D. Law",
      school: "Prestige Law School",
      dates: "2014 - 2017",
    },
    {
      degree: "B.A. Political Science",
      school: "State University",
      dates: "2010 - 2014",
    },
  ],
};

// Document component
const MonochromeClarityResume = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.headerSection}>
          <Text style={styles.header}>{data.name}</Text>
          <Text style={styles.contact}>
            {data.contact.email} | {data.contact.phone}
          </Text>
          <Text style={styles.contact}>
            {data.contact.address} | {data.contact.linkedin}
          </Text>
        </View>
        {/* Skills Section */}
        <View style={styles.section}>
          <Text style={styles.subHeader}>Skills</Text>
          <View style={styles.skillsList}>
            {data.skills.map((skill, index) => (
              <Text key={index} style={styles.skillItem}>
                ■ {skill}
              </Text>
            ))}
          </View>
        </View>
        {/* Experience Section */}
        <View style={styles.section}>
          <Text style={styles.subHeader}>Professional Experience</Text>
          {data.experience.map((job, index) => (
            <View key={index} style={styles.section}>
              <Text style={styles.text}>
                {job.title} - {job.company}
              </Text>
              <Text style={styles.text}>{job.dates}</Text>
              {job.achievements.map((achievement, i) => (
                <View key={i} style={styles.bullet}>
                  <Text style={styles.bulletPoint}>■</Text>
                  <Text style={styles.text}>{achievement}</Text>
                </View>
              ))}
              {index < data.experience.length - 1 && (
                <View style={styles.divider} />
              )}
            </View>
          ))}
        </View>
        {/* Education Section */}
        <View style={styles.section}>
          <Text style={styles.subHeader}>Education</Text>
          {data.education.map((edu, index) => (
            <View key={index} style={styles.section}>
              <Text style={styles.text}>{edu.degree}</Text>
              <Text style={styles.text}>{edu.school}</Text>
              <Text style={styles.text}>{edu.dates}</Text>
              {index < data.education.length - 1 && (
                <View style={styles.divider} />
              )}
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default MonochromeClarityResume;
