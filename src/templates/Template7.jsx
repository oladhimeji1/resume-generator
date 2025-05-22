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
    width: "25%",
    backgroundColor: "#008080", // Teal base, gradient applied via pseudo-effect
    padding: 15,
    color: "#FFFFFF",
    borderRight: "2px solid #FF6F61", // Coral accent
  },
  rightColumn: { width: "75%", padding: 20 },
  header: {
    fontSize: 26,
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

// Sample data
const data = {
  name: "Sarah Johnson",
  contact: {
    email: "sarah.johnson@email.com",
    phone: "(555) 987-6543",
    address: "321 Flow St, City, ST 45678",
    linkedin: "linkedin.com/in/sarahjohnson",
  },
  skills: [
    "Product Management",
    "Agile",
    "React",
    "SQL",
    "UX Research",
    "Scrum",
  ],
  certifications: ["Certified ScrumMaster", "PMP", "Google Analytics"],
  experience: [
    {
      title: "Product Manager",
      company: "Innovative Solutions",
      dates: "May 2021 - Present",
      achievements: [
        "Launched a SaaS product, increasing customer base by 35% in 12 months.",
        "Collaborated with engineering teams to reduce feature delivery time by 20%.",
      ],
    },
    {
      title: "Associate Product Manager",
      company: "TechTrend Inc",
      dates: "Aug 2018 - Apr 2021",
      achievements: [
        "Defined product roadmaps, aligning with 95% stakeholder approval.",
        "Conducted user research, improving UX scores by 15%.",
      ],
    },
  ],
  education: [
    {
      degree: "M.S. Business Analytics",
      school: "City University",
      dates: "2016 - 2018",
    },
    {
      degree: "B.S. Computer Science",
      school: "Tech Institute",
      dates: "2012 - 2016",
    },
  ],
};

// Document component
const Template7 = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
        {/* Left Column (Sidebar) */}
        <View style={styles.leftColumn}>
          <Text style={styles.header}>{data.name}</Text>
          <View style={styles.section}>
            <Text style={{ ...styles.subHeader, color: "#FFFFFF" }}>
              Contact
            </Text>
            <Text style={styles.text}>{data.contact.email}</Text>
            <Text style={styles.text}>{data.contact.phone}</Text>
            <Text style={styles.text}>{data.contact.address}</Text>
            <Text style={styles.text}>{data.contact.linkedin}</Text>
          </View>
          <View style={styles.section}>
            <Text style={{ ...styles.subHeader, color: "#FFFFFF" }}>
              Skills
            </Text>
            <View style={styles.skillMatrix}>
              {data.skills.map((skill, index) => (
                <Text key={index} style={styles.skillItem}>
                  {skill}
                </Text>
              ))}
            </View>
          </View>
          <View style={styles.section}>
            <Text style={{ ...styles.subHeader, color: "#FFFFFF" }}>
              Certifications
            </Text>
            {data.certifications.map((cert, index) => (
              <View key={index} style={styles.bullet}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.text}>{cert}</Text>
              </View>
            ))}
          </View>
        </View>
        {/* Right Column */}
        <View style={styles.rightColumn}>
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
      </View>
    </Page>
  </Document>
);

export default Template7;
