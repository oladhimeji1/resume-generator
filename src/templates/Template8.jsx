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
    width: "30%",
    backgroundColor: "#333333",
    padding: 20,
    color: "#FFFFFF",
    borderRight: "2px solid #FFD700", // Gold accent
  },
  rightColumn: { width: "70%", padding: 20 },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
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
  section: { marginBottom: 15 },
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

// Sample data
const data = {
  name: "Liam Carter",
  contact: {
    email: "liam.carter@email.com",
    phone: "(789) 123-4567",
    address: "654 Urban Ave, City, ST 78901",
    linkedin: "linkedin.com/in/liamcarter",
  },
  skills: [
    "Marketing Strategy",
    "SEO",
    "React",
    "Python",
    "Content Creation",
    "Data Analysis",
  ],
  hobbies: ["Photography", "Cycling", "Blogging"],
  experience: [
    {
      title: "Marketing Lead",
      company: "Pulse Media",
      dates: "Jun 2022 - Present",
      achievements: [
        "Developed a digital campaign that boosted brand engagement by 40%.",
        "Led SEO initiatives, increasing organic traffic by 25%.",
      ],
    },
    {
      title: "Marketing Coordinator",
      company: "CityVibe Agency",
      dates: "Sep 2019 - May 2022",
      achievements: [
        "Managed social media accounts, growing followers by 15K.",
        "Coordinated events, improving client satisfaction by 20%.",
      ],
    },
  ],
  education: [
    {
      degree: "B.A. Marketing",
      school: "Metro University",
      dates: "2015 - 2019",
    },
  ],
};

// Document component
const Template8 = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
        {/* Left Column (Sidebar) */}
        <View style={styles.leftColumn}>
          <Text style={styles.header}>{data.name}</Text>
          <View style={styles.section}>
            <Text style={styles.subHeader}>Contact</Text>
            <Text style={styles.text}>{data.contact.email}</Text>
            <Text style={styles.text}>{data.contact.phone}</Text>
            <Text style={styles.text}>{data.contact.address}</Text>
            <Text style={styles.text}>{data.contact.linkedin}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.subHeader}>Skills</Text>
            <View style={styles.skillGrid}>
              {data.skills.map((skill, index) => (
                <Text key={index} style={styles.skillItem}>
                  {skill}
                </Text>
              ))}
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.subHeader}>Hobbies</Text>
            {data.hobbies.map((hobby, index) => (
              <View key={index} style={styles.bullet}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.text}>{hobby}</Text>
              </View>
            ))}
          </View>
        </View>
        {/* Right Column */}
        <View style={styles.rightColumn}>
          <View style={styles.section}>
            <Text style={{ ...styles.subHeader, color: "#333333" }}>
              Professional Experience
            </Text>
            {data.experience.map((job, index) => (
              <View key={index} style={styles.section}>
                <Text style={styles.text}>
                  {job.title} - {job.company}
                </Text>
                <Text style={styles.text}>{job.dates}</Text>
                {job.achievements.map((achievement, i) => (
                  <View key={i} style={styles.bullet}>
                    <Text style={{ ...styles.bulletPoint, color: "#333333" }}>
                      •
                    </Text>
                    <Text style={styles.text}>{achievement}</Text>
                  </View>
                ))}
                {index < data.experience.length - 1 && (
                  <View style={styles.divider} />
                )}
              </View>
            ))}
          </View>
          <View style={styles.section}>
            <Text style={{ ...styles.subHeader, color: "#333333" }}>
              Education
            </Text>
            {data.education.map((edu, index) => (
              <View key={index} style={styles.section}>
                <Text style={styles.text}>{edu.degree}</Text>
                <Text style={styles.text}>{edu.school}</Text>
                <Text style={styles.text}>{edu.dates}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default Template8;
