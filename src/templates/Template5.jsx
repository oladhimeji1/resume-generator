import React from 'react';
import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';

// Define styles for the CV
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 11,
    lineHeight: 1.6,
    color: '#333333',
    backgroundColor: '#ffffff',
  },
  header: {
    marginBottom: 20,
    borderBottom: '0.5pt solid #2e7d32',
    paddingBottom: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2e7d32',
    textAlign: 'center',
  },
  title: {
    fontSize: 13,
    color: '#555555',
    textAlign: 'center',
    marginTop: 4,
  },
  contact: {
    fontSize: 10,
    color: '#555555',
    textAlign: 'center',
    marginTop: 3,
  },
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 5,
    borderBottom: '0.5pt solid #e8f5e9',
    paddingBottom: 2,
  },
  text: {
    fontSize: 11,
    marginBottom: 4,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333333',
  },
  company: {
    fontSize: 11,
    color: '#555555',
  },
  date: {
    fontSize: 10,
    color: '#777777',
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  bullet: {
    width: 10,
    fontSize: 11,
  },
});

// CV Component
const Template5 = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>Emma Wilson</Text>
        <Text style={styles.title}>UX/UI Designer</Text>
        <Text style={styles.contact}>Email: emma.wilson@example.com</Text>
        <Text style={styles.contact}>Phone: (321) 987-6543</Text>
        <Link style={styles.contact} src="https://linkedin.com/in/emmawilson">LinkedIn</Link>
        <Text style={styles.contact}>Location: Austin, TX</Text>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.text}>
          Creative UX/UI Designer with 5 years of experience crafting intuitive and visually appealing user interfaces. Skilled in user research, wireframing, and prototyping, with a passion for enhancing user experiences through design. Proficient in Figma, Adobe XD, and front-end development.
        </Text>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Experience</Text>
        <View style={styles.section}>
          <Text style={styles.jobTitle}>Senior UX/UI Designer</Text>
          <Text style={styles.company}>CreativeLabs, Austin, TX</Text>
          <Text style={styles.date}>June 2021 – Present</Text>
          <View style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.text}>Led redesign of a mobile app interface, improving user engagement by 35%.</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.text}>Conducted user testing sessions, resulting in a 20% increase in usability scores.</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.jobTitle}>UX/UI Designer</Text>
          <Text style={styles.company}>DesignWorks, Denver, CO</Text>
          <Text style={styles.date}>August 2019 – May 2021</Text>
          <View style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.text}>Developed wireframes and prototypes for web applications using Figma.</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.text}>Collaborated with developers to ensure pixel-perfect implementation of designs.</Text>
          </View>
        </View>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.jobTitle}>Bachelor of Fine Arts in Graphic Design</Text>
        <Text style={styles.company}>University of Texas, Austin, TX</Text>
        <Text style={styles.date}>Graduated: May 2019</Text>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.text}>UX/UI Design (Figma, Adobe XD, Sketch)</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.text}>User Research & Usability Testing</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.text}>HTML, CSS, JavaScript (React)</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.text}>Prototyping & Wireframing</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.text}>Design Systems & Accessibility</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default Template5;