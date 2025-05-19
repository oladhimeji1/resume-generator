import {
  Document,
  Page,
  View,
  Text,
  Font,
  StyleSheet,
} from "@react-pdf/renderer";

import { FaEnvelope } from "react-icons/fa";
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

      height: "100%",
      fontSize: 13,
      fontFamily: "Century Gothic",
    },

    section: {
      marginBottom: 25,
      display: "block",
    },
    sectionTitle: {
      marginBottom: 1,
      fontSize: 15,
      fontWeight: "bold",
      color: "#fff",
      backgroundColor: "#193cb8",
      display: "block",
      padding: 8,
      textTranform: "uppercase",
    },
  });
  return (
    <Document className="">
      <Page size="A4" style={styles.page}>
        {/* Header Section */}
        <View style={styles.section}>
          <View>
            <Text
              style={{
                fontSize: 28,
                textAlign: "center",
                textTransform: "uppercase",
                fontWeight: "bold",
                fontFamily: "Georgia",
                display: "block",
                color: "#193",
              }}
            >
              Godstime Pious
            </Text>

            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text>Port Harcourt, Rivers</Text>
              <Text>09130327299</Text>
              <Text>piousgodstime3@gmail.com</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default Template1;
