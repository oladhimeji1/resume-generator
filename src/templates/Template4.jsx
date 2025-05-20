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
const Template4 = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>Jane Smith</Text>
        <Text style={styles.title}>Full-Stack Developer</Text>
        <Text style={styles.contact}>Email: jane.smith@example.com</Text>
        <Text style={styles.contact}>Phone: (987) 654-3210</Text>
        <Link style={styles.contact} src="https://linkedin.com/in/janesmith">
          LinkedIn
        </Link>
        <Text style={styles.contact}>Location: San Francisco, CA</Text>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.text}>
          Results-driven Full-Stack Developer with 6 years of experience
          building high-performance web applications. Proficient in JavaScript,
          Python, and cloud technologies, with a focus on creating user-centric
          solutions. Adept at leading projects from concept to deployment,
          ensuring quality and scalability.
        </Text>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Work Experience</Text>
        <View style={styles.section}>
          <Text style={styles.jobTitle}>Lead Full-Stack Developer</Text>
          <Text style={styles.company}>
            Nexlify Technologies, San Francisco, CA
          </Text>
          <Text style={styles.date}>March 2021 – Present</Text>
          <View style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.text}>
              Spearheaded development of a SaaS platform, improving user
              retention by 25%.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.text}>
              Optimized backend APIs with Python and FastAPI, reducing latency
              by 40%.
            </Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.jobTitle}>Full-Stack Developer</Text>
          <Text style={styles.company}>BrightWave Solutions, Seattle, WA</Text>
          <Text style={styles.date}>July 2018 – February 2021</Text>
          <View style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.text}>
              Developed responsive front-end interfaces using React and
              TypeScript.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.text}>
              Integrated MongoDB databases, enhancing data retrieval efficiency.
            </Text>
          </View>
        </View>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.jobTitle}>
          Master of Science in Computer Science
        </Text>
        <Text style={styles.company}>
          University of Technology, San Francisco, CA
        </Text>
        <Text style={styles.date}>Graduated: May 2018</Text>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.text}>
            JavaScript (React, Node.js), TypeScript
          </Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.text}>Python (FastAPI, Django)</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.text}>Cloud Platforms (AWS, Azure)</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.text}>
            Database Management (MongoDB, PostgreSQL)
          </Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.text}>Agile & Scrum Methodologies</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default Template4;
