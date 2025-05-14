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
      color: "#333",
      margin: 0,
      lineHeight: 1.3,
      fontSize: 12,
    },

    section: {
      marginBottom: 25,
      display: "block",
    },
    sectionTitle: {
      marginBottom: 1,
      fontSize: 14,
      fontWeight: "bold",
      color: "#193cb8",
      borderBottom: "3px dashed black",
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
              marginBottom: 10,
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
            Port Harcourt, Nigeria
          </Text>
          <Text
            style={{
              marginTop: "5px",
              display: "block",
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#193cb8" }}>Phone:</Text>{" "}
            09130327299
          </Text>
          <Text
            style={{
              marginTop: "5px",
              display: "block",
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#193cb8" }}>Email:</Text>{" "}
            piousgodstime3@gmail.com
          </Text>
        </View>

        {/* Summary Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PROFESSIONAL SUMMARY</Text>
          <Text style={{ marginTop: 10, marginBottom: 10, display: "block" }}>
            A highly resourceful, flexible, innovative project manager,
            possessing considerable experience of managing projects from
            beginning to end, defining the purpose line timeline, scope and
            executing the analysis before providing detail recommendations.
            Having an impressive track records of delivering major operational
            improvement and of orhchresting people, schedules and resources for
            optimum productivity, efficiency and quality. Keen to find a
            challenging position within an ambitious company where i will be
            able to continue to increase my managment skills.
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

            <View
              style={{
                marginTop: 10,
                marginBottom: 15,
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
                  <Text>I.T Technician, International Mobilities </Text>
                  <Text style={{ color: "#193cb8" }}>
                    Oct. 2015 - May. 2016{" "}
                  </Text>
                </View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2px",
                  }}
                >
                  <Text>Operate and maintain information system </Text>
                  <Text>Facilitating system utilization </Text>
                </View>
              </View>
              <View>
                <Text>Birmingham, England </Text>
              </View>
            </View>
            <View
              style={{
                marginTop: 10,
                marginBottom: 15,
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
                  <Text>I.T Technician, International Mobilities </Text>
                  <Text style={{ color: "#193cb8" }}>
                    Oct. 2015 - May. 2016{" "}
                  </Text>
                </View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2px",
                  }}
                >
                  <Text>Operate and maintain information system </Text>
                  <Text>Facilitating system utilization </Text>
                </View>
              </View>
              <View>
                <Text>Birmingham, England </Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default Template1;
