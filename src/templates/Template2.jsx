import {
  Document,
  Page,
  View,
  Text,
  Font,
  StyleSheet,
} from "@react-pdf/renderer";

function Template2() {
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

  return(
    <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.header}>
            <Text style={styles.name}>Jane Smith</Text>
            <Text style={styles.title}>Full-Stack Developer</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contact</Text>
            <Text style={styles.text}>Email: jane.smith@example.com</Text>
            <Text style={styles.text}>Phone: (987) 654-3210</Text>
            <Text style={styles.text}>LinkedIn: linkedin.com/in/janesmith</Text>
            <Text style={styles.text}>Location: San Francisco, CA</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Summary</Text>
            <Text style={styles.text}>
              Experienced Full-Stack Developer with over 6 years of experience in designing and
              implementing robust web applications. Skilled in JavaScript, Python, and cloud
              technologies, with a passion for creating efficient and user-friendly solutions.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Work Experience</Text>
            <View style={styles.section}>
              <Text style={styles.jobTitle}>Lead Developer</Text>
              <Text style={styles.company}>Nexlify Technologies</Text>
              <Text style={styles.date}>Mar 2021 - Present</Text>
              <Text style={styles.listItem}>
                <Text style={styles.bullet}>•</Text> Architected a microservices-based application,
                improving scalability for 20,000+ users.
              </Text>
              <Text style={styles.listItem}>
                <Text style={styles.bullet}>•</Text> Mentored a team of 5 junior developers, enhancing
                code quality and delivery speed.
              </Text>
            </View>
            <View style={styles.section}>
              <Text style={styles.jobTitle}>Software Developer</Text>
              <Text style={styles.company}>BrightWave Solutions</Text>
              <Text style={styles.date}>Jul 2018 - Feb 2021</Text>
              <Text style={styles.listItem}>
                <Text style={styles.bullet}>•</Text> Built a React-based e-commerce platform,
                increasing sales conversions by 25%.
              </Text>
              <Text style={styles.listItem}>
                <Text style={styles.bullet}>•</Text> Integrated CI/CD pipelines, reducing deployment
                time by 40%.
              </Text>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            <Text style={styles.jobTitle}>M.S. in Computer Science</Text>
            <Text style={styles.company}>Tech University</Text>
            <Text style={styles.date}>Sep 2016 - May 2018</Text>
            <Text style={styles.jobTitle}>B.S. in Software Engineering</Text>
            <Text style={styles.company}>Tech University</Text>
            <Text style={styles.date}>Sep 2012 - May 2016</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.skillsContainer}>
              <Text style={styles.skill}>React</Text>
              <Text style={styles.skill}>Python</Text>
              <Text style={styles.skill}>AWS</Text>
              <Text style={styles.skill}>GraphQL</Text>
              <Text style={styles.skill}>Docker</Text>
              <Text style={styles.skill}>PostgreSQL</Text>
            </View>
          </View>
        </Page>
      </Document>
  )
}

export default Template2;
