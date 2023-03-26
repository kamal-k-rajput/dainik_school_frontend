import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import samplePDF from "./policy.pdf";

export default function AllPages(props) {
  const [numPages, setNumPages] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    console.log("object");
  }

  const { pdf } = props;

  return (
    <Document
      file={samplePDF}
      options={{ workerSrc: "/pdf.worker.js" }}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document>
  );
}
