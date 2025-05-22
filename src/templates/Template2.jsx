import {
  Document,
  Page,
  View,
  Text,
  Font,
  StyleSheet,
} from "@react-pdf/renderer";

function Template2({ resumeData }) {
  const styles = StyleSheet.create({
    page: {
      padding: 30,
      fontFamily: "Helvetica",
      fontSize: 12,
      color: "#333",
      flexDirection: "column",
    },
    header: {
      backgroundColor: "#f8f8f8",
      padding: 20,
      marginBottom: 20,
      borderBottom: "2px solid #007bff",
      textAlign: "center",
    },
    name: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#007bff",
      marginBottom: 5,
    },
    title: {
      fontSize: 14,
      color: "#555",
    },
    section: {
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 10,
      borderBottom: "1px solid #007bff",
    },
    text: {
      marginBottom: 5,
      lineHeight: 1.5,
    },
    listItem: {
      marginBottom: 5,
      paddingLeft: 10,
      position: "relative",
    },
    bullet: {
      position: "absolute",
      left: 0,
      fontSize: 12,
    },
    jobTitle: {
      fontWeight: "bold",
      fontSize: 13,
    },
    company: {
      fontStyle: "italic",
      color: "#555",
    },
    date: {
      color: "#777",
      fontSize: 11,
      marginBottom: 5,
    },
    skillsContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
    skill: {
      backgroundColor: "#e9f5ff",
      padding: "5px 10px",
      borderRadius: 5,
      marginRight: 10,
      marginBottom: 10,
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>
            {resumeData.name} {resumeData.surname}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact</Text>
          <Text style={styles.text}>Email: {resumeData.email}</Text>
          <Text style={styles.text}>Phone: {resumeData.phone}</Text>

          <Text style={styles.text}>
            Location: {resumeData.city} {resumeData.country}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.text}>{resumeData.summary}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Work Experience</Text>
          {resumeData.workExperience.map((experience, index) => (
            <View key={index} style={styles.section}>
              <Text style={styles.jobTitle}>{experience.jobTitle}</Text>
              <Text style={styles.company}>{experience.company}</Text>
              <Text style={styles.date}>
                {experience.startDate} - {experience.endDate}
              </Text>
              <Text style={styles.listItem}>
                <Text style={styles.bullet}>•</Text> Architected a
                microservices-based application, improving scalability for
                20,000+ users.
              </Text>
              <Text style={styles.listItem}>
                <Text style={styles.bullet}>•</Text> Mentored a team of 5 junior
                developers, enhancing code quality and delivery speed.
              </Text>
            </View>
          ))}
        </View>

        {resumeData.education.map((education, index) => {
          return (
            <View key={index} style={styles.section}>
              <Text style={styles.sectionTitle}>Education</Text>
              <Text style={styles.jobTitle}>{education.degree}</Text>
              <Text style={styles.company}>{education.institution}</Text>
              <Text style={styles.date}>
                {education.startDate} - {education.endDate}
              </Text>
            </View>
          );
        })}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillsContainer}>
            {resumeData.skills.map((skill, index) => (
              <Text key={index} style={styles.skill}>
                {skill.name}
              </Text>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default Template2;
