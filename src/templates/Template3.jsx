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
    textAlign: "center",
    marginBottom: 20,
    borderBottom: "1pt solid #007bff",
    paddingBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#007bff",
  },
  title: {
    fontSize: 14,
    color: "#555",
  },
  contact: {
    fontSize: 10,
    color: "#555",
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
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
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    width: "48%",
  },
  listItem: {
    flexDirection: "row",
    marginBottom: 5,
  },
  bullet: {
    width: 10,
    fontSize: 11,
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
});

// CV Component
const Template3 = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.title}>Software Engineer</Text>
        <View style={styles.contact}>
          <Text>Email: john.doe@example.com</Text>
          <Text>Phone: (123) 456-7890</Text>
          <Link src="https://linkedin.com/in/johndoe">LinkedIn</Link>
          <Text>Location: New York, NY</Text>
        </View>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.text}>
          Dedicated and detail-oriented Software Engineer with over 5 years of
          experience in developing robust web applications using modern
          JavaScript frameworks like React. Skilled in delivering scalable
          solutions, collaborating with cross-functional teams, and optimizing
          performance. Passionate about leveraging technology to solve
          real-world problems.
        </Text>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Work Experience</Text>
        <View style={styles.section}>
          <Text style={styles.jobTitle}>Senior Software Engineer</Text>
          <Text style={styles.company}>Tech Corp, New York, NY</Text>
          <Text style={styles.date}>January 2022 – Present</Text>
          <View style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.text}>
              Led a team of 5 developers to build a scalable e-commerce
              platform, increasing sales by 20%.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.text}>
              Implemented CI/CD pipelines, reducing deployment time by 30%.
            </Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.jobTitle}>Software Engineer</Text>
          <Text style={styles.company}>Innovate Solutions, Boston, MA</Text>
          <Text style={styles.date}>June 2019 – December 2021</Text>
          <View style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.text}>
              Developed RESTful APIs using Node.js, improving system integration
              efficiency.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.text}>
              Collaborated with UX designers to enhance user interfaces,
              improving user satisfaction by 15%.
            </Text>
          </View>
        </View>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.jobTitle}>
          Bachelor of Science in Computer Science
        </Text>
        <Text style={styles.company}>University of Example, Boston, MA</Text>
        <Text style={styles.date}>Graduated: May 2019</Text>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.flexRow}>
          <View style={styles.column}>
            <View style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.text}>JavaScript (React, Node.js)</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.text}>TypeScript</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.text}>HTML & CSS</Text>
            </View>
          </View>
          <View style={styles.column}>
            <View style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.text}>Git & CI/CD</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.text}>AWS & Docker</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.text}>Agile Methodologies</Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default Template3;
