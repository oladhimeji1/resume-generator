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
    padding: 35,
    fontFamily: "Times",
    fontSize: 11,
    lineHeight: 1.6,
    color: "#2d2d2d",
    backgroundColor: "#fff",
  },
  header: {
    marginBottom: 25,
    borderBottom: "0.5pt solid #4a4a4a",
    paddingBottom: 8,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#2d2d2d",
    textAlign: "center",
  },
  title: {
    fontSize: 13,
    color: "#4a4a4a",
    textAlign: "center",
    marginTop: 5,
  },
  contact: {
    fontSize: 10,
    color: "#4a4a4a",
    textAlign: "center",
    marginTop: 3,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#2d2d2d",
    marginBottom: 6,
    borderBottom: "0.5pt solid #e0e0e0",
    paddingBottom: 2,
  },
  text: {
    fontSize: 11,
    marginBottom: 4,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#2d2d2d",
  },
  company: {
    fontSize: 11,
    color: "#4a4a4a",
  },
  date: {
    fontSize: 10,
    color: "#6a6a6a",
  },
  listItem: {
    flexDirection: "row",
    marginBottom: 4,
  },
  bullet: {
    width: 10,
    fontSize: 11,
  },
});

// CV Component
const Template6 = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>Alex Carter</Text>
        <Text style={styles.title}>Data Scientist</Text>
        <Text style={styles.contact}>Email: alex.carter@example.com</Text>
        <Text style={styles.contact}>Phone: (555) 123-4567</Text>
        <Link style={styles.contact} src="https://linkedin.com/in/alexcarter">
          LinkedIn
        </Link>
        <Text style={styles.contact}>Location: Chicago, IL</Text>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.text}>
          Data Scientist with 7 years of experience in leveraging machine
          learning and statistical analysis to drive business insights.
          Proficient in Python, R, and big data technologies, with a proven
          track record of delivering predictive models that enhance
          decision-making. Committed to advancing data-driven strategies.
        </Text>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Experience</Text>
        <View style={styles.section}>
          <Text style={styles.jobTitle}>Senior Data Scientist</Text>
          <Text style={styles.company}>DataCore Analytics, Chicago, IL</Text>
          <Text style={styles.date}>April 2020 – Present</Text>
          <View style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.text}>
              Developed machine learning models for customer segmentation,
              increasing marketing ROI by 30%.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.text}>
              Led data pipeline optimization using Apache Spark, reducing
              processing time by 50%.
            </Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.jobTitle}>Data Scientist</Text>
          <Text style={styles.company}>Insight Systems, Boston, MA</Text>
          <Text style={styles.date}>June 2017 – March 2020</Text>
          <View style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.text}>
              Built predictive models for churn analysis, improving retention
              rates by 15%.
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.text}>
              Collaborated with cross-functional teams to integrate data
              solutions into business workflows.
            </Text>
          </View>
        </View>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.jobTitle}>Master of Science in Data Science</Text>
        <Text style={styles.company}>University of Chicago, Chicago, IL</Text>
        <Text style={styles.date}>Graduated: May 2017</Text>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.text}>
            Python (Pandas, Scikit-learn, TensorFlow)
          </Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.text}>R, SQL</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.text}>Big Data (Hadoop, Spark)</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.text}>
            Data Visualization (Tableau, Matplotlib)
          </Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.text}>Cloud Platforms (AWS, GCP)</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default Template6;
