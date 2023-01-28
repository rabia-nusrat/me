import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import magazine from "../assets/magazine-for-webiste.pdf";
import { GradientText } from "../utils/StyledComponents";

export default function MyApp() {
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div id="magazine" className="snap-start w-full min-h-screen text-white">
      {/* <Document
        file="../assets/magazine-for-webiste.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document> */}
      <h1 className="heading-gradient my-[50px]">
        <GradientText>Earthly Perspective</GradientText> Magazine
      </h1>
      <embed
        src={magazine + "#toolbar=0"}
        type="application/pdf"
        className="w-full h-screen"
      />
    </div>
  );
}
