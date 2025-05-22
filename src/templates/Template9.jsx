import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Define styles
const styles = StyleSheet.create({
  page: { padding: 30, fontFamily: 'Helvetica', fontSize: 11, backgroundColor: '#FFFFFF' },
  container: { flexDirection: 'column', minHeight: '100%' },
  headerSection: {
    backgroundColor: '#4DB6AC', // Teal base for gradient effect
    padding: 20,
    marginBottom: 20,
    borderBottom: '2px solid #4DB6AC',
  },
  header: { fontSize: 28, fontWeight: 'bold', color: '#FFFFFF', fontFamily: 'Helvetica-Bold', textAlign: 'center' },
  contact: { fontSize: 10, color: '#FFFFFF', textAlign: 'center', marginTop: 5 },
  section: { marginBottom: 15 },
  subHeader: { fontSize: 14, fontWeight: 'bold', marginBottom: 8, color: '#4DB6AC', borderBottom: '1px solid #4DB6AC' },
  text: { fontSize: 10, marginBottom: 5, lineHeight: 1.5, color: '#333333' },
  bullet: { flexDirection: 'row', marginBottom: 5 },
  bulletPoint: { width: 10, textAlign: 'center', color: '#4DB6AC' },
  skillsList: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  skillItem: { fontSize: 9, color: '#333333', padding: 5 },
  divider: { borderBottom: '1px dotted #4DB6AC', marginVertical: 10 },
});

// Sample data
const data = {
  name: 'Emma Wilson',
  contact: {
    email: 'emma.wilson@email.com',
    phone: '(456) 123-7890',
    address: '123 Stream Lane, City, ST 34567',
    linkedin: 'linkedin.com/in/emmawilson',
  },
  skills: ['Technical Writing', 'Editing', 'Project Coordination', 'Research', 'Communication', 'MS Office'],
  experience: [
    {
      title: 'Technical Writer',
      company: 'ClearDocs Inc',
      dates: 'Apr 2021 - Present',
      achievements: [
        'Authored 50+ technical manuals, improving user comprehension by 30%.',
        'Collaborated with SMEs to streamline documentation processes.',
      ],
    },
    {
      title: 'Content Editor',
      company: 'WriteWell Media',
      dates: 'Jun 2018 - Mar 2021',
      achievements: [
        'Edited 100+ articles, ensuring 98% error-free publications.',
        'Developed style guides, standardizing content across teams.',
      ],
    },
  ],
  education: [
    {
      degree: 'B.A. English Literature',
      school: 'State College',
      dates: '2014 - 2018',
    },
  ],
};

// Document component
const Template9 = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.headerSection}>
          <Text style={styles.header}>{data.name}</Text>
          <Text style={styles.contact}>{data.contact.email} | {data.contact.phone}</Text>
          <Text style={styles.contact}>{data.contact.address} | {data.contact.linkedin}</Text>
        </View>
        {/* Skills Section */}
        <View style={styles.section}>
          <Text style={styles.subHeader}>Skills</Text>
          <View style={styles.skillsList}>
            {data.skills.map((skill, index) => (
              <Text key={index} style={styles.skillItem}>• {skill}</Text>
            ))}
          </View>
        </View>
        {/* Experience Section */}
        <View style={styles.section}>
          <Text style={styles.subHeader}>Professional Experience</Text>
          {data.experience.map((job, index) => (
            <View key={index} style={styles.section}>
              <Text style={styles.text}>{job.title} - {job.company}</Text>
              <Text style={styles.text}>{job.dates}</Text>
              {job.achievements.map((achievement, i) => (
                <View key={i} style={styles.bullet}>
                  <Text style={styles.bulletPoint}>•</Text>
                  <Text style={styles.text}>{achievement}</Text>
                </View>
              ))}
              {index < data.experience.length - 1 && <View style={styles.divider} />}
            </View>
          ))}
        </View>
        {/* Education Section */}
        <View style={styles.section}>
          <Text style={styles.subHeader}>Education</Text>
          {data.education.map((edu, index) => (
            <View key={index} style={styles.section}>
              <Text style={styles.text}>{edu.degree}</Text>
              <Text style={styles.text}>{edu.school}</Text>
              <Text style={styles.text}>{edu.dates}</Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default Template9;