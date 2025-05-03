import { Document, Page, View, Text } from "@react-pdf/renderer";

function Template1({ resumeData }) {
  return (
    <Document className="p-10 border">
      <Page size="A4"></Page>
    </Document>
  );
}

export default Template1;
