import React, { useState } from "react";
import { Document, Page } from "react-pdf";

export const AllPages = (props) => {
  const [numPages, setNumPages] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);

  }

  const { pdf } = props;
  console.log(pdf);
  return (
    <Document
      file={pdf}
      options={{ workerSrc: "/pdf.worker.js" }}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document>
  );
};
