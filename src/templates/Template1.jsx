import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";

function Template1({ resumeData }) {
  const styles = StyleSheet.create({
    page: {
      padding: "20px",
      textAlign: "justify",
      color: "#333",
      margin: 0,
      lineHeight: 1.3,
      fontSize: "12px",
      fontFamily: "Century Gothic",
    },

    section: {
      marginBottom: "20px",
      display: "block",
    },
    sectionTitle: {
      marginBottom: 20,
      fontSize: "12px",
      fontWeight: "bold",
      color: "#000",
      borderBottom: "2px solid black",
      display: "block",
      padding: "4px 0",
    },

    heading: {
      fontSize: "24px",
      fontWeight: "600",
      color: "#000",
      marginBottom: "16px",
      display: "block",
    },

    textBlock: {
      display: "block",
      marginBottom: "8px",
    },

    textCaption: {
      marginRight: "8px",
      color: "#000",
    },

    listItem: {
      marginBottom: 5,
      paddingLeft: 10,
      position: "relative",
      display: "block",
    },
    bullet: {
      position: "absolute",
      left: 0,
    },
  });
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.heading}>
            {resumeData.name.toUpperCase()} {resumeData.surname.toUpperCase()}
          </Text>
        </View>

        <View style={styles.section}>
          <View>
            <Text style={styles.textBlock}>
              {resumeData.city}, {resumeData.country}
            </Text>
            <Text style={styles.textBlock}>{resumeData.phone}</Text>
            <Text style={styles.textBlock}>{resumeData.email}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PROFESSIONAL SUMMARY:</Text>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
            expedita adipisci cupiditate, omnis saepe tempora quam praesentium
            nesciunt possimus, ipsa corporis eligendi beatae voluptatibus eos.
            Asperiores architecto dolorem similique doloremque animi veritatis
            quasi pariatur illo?
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>EMPLOYMENT HISTORY:</Text>
          {resumeData.workExperience.map((exp, i) => (
            <View key={i}>
              <View>
                <Text style={{ marginRight: "30px" }}>
                  {exp.startDate} - {exp.endDate}
                </Text>
                <Text>
                  {exp.jobTitle}, {exp.company} {exp.isRemote ? `(Remote)` : ""}
                </Text>
              </View>
              <Text style={{ display: "block" }}>{exp.location}</Text>
              {exp.duties.map((duty, i) => (
                <View key={i} style={{ display: "block" }}>
                  <Text style={styles.listItem}>
                    <Text style={styles.bullet}>•</Text> {duty.name}
                  </Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>EDUCATION :</Text>
          {resumeData.education.map((edu, i) => (
            <View key={i}>
              <View>
                <Text style={{ marginRight: "30px" }}>
                  {edu.startDate} - {edu.endDate}
                </Text>
                <Text>{edu.degree}</Text>
              </View>
              <Text style={{ display: "block" }}>
                {edu.institution}, {edu.location}
              </Text>
            </View>
          ))}
        </View>

        <View styles={styles.section}>
          <Text style={styles.sectionTitle}>SKILLS :</Text>

          {resumeData.skills.map((skill, i) => (
            <View key={i} style={{ display: "block" }}>
              <Text style={styles.listItem}>
                <Text style={styles.bullet}>•</Text> {skill.name}
              </Text>
            </View>
          ))}
        </View>
        <View styles={styles.section}>
          <Text style={styles.sectionTitle}>REFERENCE :</Text>

          {resumeData.references.map((reference, i) => (
            <View key={i}>
              <View style={{ display: "block" }}>
                <Text style={{ fontWeight: "bold", color: "#000" }}>
                  {reference.name}
                </Text>
              </View>
              <View style={{ display: "block" }}>
                <Text>{reference.occupation}</Text>
              </View>
              <View style={{ display: "block" }}>
                <Text>{reference.location}</Text>
              </View>
              <View style={{ display: "block" }}>
                <Text>{reference.phone}</Text>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}

export default Template1;
