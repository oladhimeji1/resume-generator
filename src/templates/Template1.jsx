import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";

function Template1({ resumeData }) {
  const styles = StyleSheet.create({
    page: {
      padding: 30,
      backgroundColor: "white",
      textAlign: "justify",
      color: "#333",
      margin: 0,
      lineHeight: 1.3,
      fontSize: 11,
    },

    section: {
      marginBottom: 10,
      display: "block",
    },
    sectionTitle: {
      marginBottom: 1,
      fontSize: 12,
      fontWeight: "bold",
      color: "#193cb8",
      borderBottom: "2px dashed black",
      display: "block",
      padding: 4,
    },
  });
  return (
    <Document className="">
      <Page size="A4" style={styles.page}>
        {/* Header Section */}
        <View style={styles.section}>
          <Text
            style={{
              textAlign: "left",
              color: "#193cb8",
              fontSize: 26,
              display: "block",
              fontWeight: "bold",
              marginBottom: 12,
            }}
          >
            {resumeData.name} {resumeData.surname}
          </Text>

          <Text
            style={{
              marginTop: "5px",
              display: "block",
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#193cb8" }}>
              Location:
            </Text>{" "}
            {resumeData.city}, {resumeData.country}
          </Text>
          <Text
            style={{
              marginTop: "5px",
              display: "block",
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#193cb8" }}>Phone:</Text>{" "}
            {resumeData.phone}
          </Text>
          <Text
            style={{
              marginTop: "5px",
              display: "block",
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#193cb8" }}>Email:</Text>{" "}
            {resumeData.email}
          </Text>
        </View>

        {/* Summary Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PROFESSIONAL SUMMARY</Text>
          <Text style={{ marginTop: 6, marginBottom: 8, display: "block" }}>
            {resumeData.summary}
          </Text>
        </View>

        {/* Employment Section */}

        <View style={styles.section}>
          <View
            style={{
              display: "block",
              marginBottom: 5,
            }}
          >
            <Text style={styles.sectionTitle}>EMPLOYMENT HISTORY</Text>

            {resumeData.workExperience.map((work, index) => {
              return (
                <View
                  key={index}
                  style={{
                    marginTop: 6,
                    marginBottom: 6,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        marginBottom: 6,
                      }}
                    >
                      <Text>
                        {work.jobTitle} at <Text>{work.company}</Text>
                      </Text>
                      <Text style={{ color: "#193cb8" }}>
                        {work.startDate} - {work.endDate}
                        {work.isRemote && <Text> (Remote) </Text>}
                      </Text>
                    </View>
                    <View>
                      <Text>{work.location} </Text>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "2px",
                      }}
                    >
                      {work.duties.map((duty, index) => (
                        <Text key={index}>{duty.name}</Text>
                      ))}
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
        {/* {Education Data} */}
        <View style={styles.section}>
          <View
            style={{
              display: "block",
              marginBottom: 5,
            }}
          >
            <Text style={styles.sectionTitle}>EDUCATION</Text>

            {resumeData.education.map((education, index) => {
              return (
                <View
                  key={index}
                  style={{
                    marginTop: 6,
                    marginBottom: 8,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        marginBottom: 8,
                      }}
                    >
                      <Text>{education.institution} </Text>
                      <Text style={{ color: "#193cb8" }}>
                        {education.startDate} - {education.endDate}
                      </Text>
                    </View>

                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "2px",
                      }}
                    >
                      <Text>{education.degree}</Text>
                    </View>
                  </View>
                  <View>
                    <Text>{education.location} </Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>

        <View style={styles.section}>
          <View
            style={{
              display: "block",
              marginBottom: 3,
            }}
          >
            <Text style={styles.sectionTitle}>SKILLS</Text>

            <View
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                marginTop: 6,
              }}
            >
              {resumeData.skills.map((skill, index) => (
                <Text key={index}>{skill.name}</Text>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default Template1;
