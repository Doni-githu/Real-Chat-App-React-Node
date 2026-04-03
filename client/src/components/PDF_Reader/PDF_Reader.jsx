// import { Document, Page } from "react-pdf";
// import { useState } from "react";

export default function PdfViewer({ url }) {
  // const [numPages, setNumPages] = useState(null);

  return (
    <>
      {/* <Document
        file={url}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        {Array.from(new Array(numPages), (_, i) => (
          <Page key={i} pageNumber={i + 1} />
        ))}
      </Document> */}
      <embed src={url} type="application/pdf" width={'100%'} height={'600px'} />


    </>);
}