import {
  Document,
  Page,
  View,
  Text,
  Font,
  StyleSheet,
} from "@react-pdf/renderer";

function Template1({ resumeData }) {
  const styles = StyleSheet.create({
    page: {
      padding: 40,

      display: "block",
      backgroundColor: "white",
      textAlign: "justify",
    },
    header: {
      marginBottom: 10,
      fontSize: 38,
      color: "#193cb8",
      textAlign: "center",
    },
    subheader: {
      color: "#666",
      textAlign: "center",
    },
    section: {
      marginBottom: 20,
    },
    sectionTitle: {
      marginBottom: 10,
      fontSize: 14,
      color: "#193cb8",
    },
    bulletPoint: {
      fontSize: 14,
      marginBottom: 5,
    },
  });
  return (
    <Document className="">
      <Page size="A4" style={styles.page}>
        {/* Header Section */}
        <View style={styles.section} className="block text-center">
          <Text
            style={styles.header}
            className="block text-blue-800  text-4xl font-bold"
          >
            {resumeData.name} {resumeData.surname}
          </Text>
          <Text style={{ textAlign: "center" }}>Software Engineer</Text>
        </View>

        {/* Contact Information */}
        <View
          style={{
            marginBottom: 20,
            textAlign: "center",
          }}
          className="block text-center"
        >
          <Text style={{ fontSize: 14 }} className="block">
            <b>Email:</b> {resumeData.email} | <b>Phone:</b> {resumeData.phone}
          </Text>
          <Text style={{ fontSize: 14 }} className="block">
            <b>City:</b> {resumeData.city} | <b>Country:</b>
            {""} {resumeData.country}
          </Text>
        </View>

        {/* Summary */}
        <View style={styles.section} className="block">
          <Text
            style={styles.sectionTitle}
            className="block font-bold text-blue-800 uppercase"
          >
            Summary
          </Text>
          <Text style={{ fontSize: 14 }}>{resumeData.summary}</Text>
        </View>

        {/* Work Experience */}
        <View
          style={{
            marginBottom: 20,
          }}
          className="block"
        >
          <Text
            style={styles.sectionTitle}
            className="font-bold text-blue-800 uppercase block"
          >
            Work Experience
          </Text>

          {resumeData.workExperience.map((experience, index) => {
            return (
              <View key={index} style={{ marginBottom: 10 }} className="block">
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 14,
                  }}
                  className="font-bold block"
                >
                  {experience.jobTitle} {experience.jobTitle ? "at " : ""}{" "}
                  {experience.company} {experience.company ? "," : ""}{" "}
                  {experience.location}
                </Text>
                <Text
                  style={{
                    color: "#52525c",

                    fontSize: 14,
                  }}
                  className="block text-zinc-600 text-sm mt-2"
                >
                  {experience.startDate} {experience.startDate ? "to" : ""}{" "}
                  {experience.endDate} {experience.isRemote ? "(Remote)" : ""}
                </Text>
              </View>
            );
          })}
        </View>

        {/* Education */}

        <View style={styles.section} className="block">
          <Text
            style={styles.sectionTitle}
            className="font-bold text-blue-800 uppercase block"
          >
            Education
          </Text>
          {resumeData.education.map((education, index) => {
            return (
              <View key={index} style={{ marginBottom: 10 }} className="block">
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 14,
                  }}
                  className="font-bold block"
                >
                  {education.degree} {education.degree ? "," : ""}{" "}
                  {education.institution}
                  {education.institution ? "," : ""} {education.location}
                </Text>
                <Text
                  style={{
                    color: "#52525c",

                    fontSize: 14,
                  }}
                  className="block text-zinc-600 text-sm mt-2"
                >
                  {education.startDate} {education.startDate ? "to" : ""}{" "}
                  {education.endDate}
                </Text>
              </View>
            );
          })}
        </View>
        {/* Skills */}
      </Page>
    </Document>
  );
}

export default Template1;
