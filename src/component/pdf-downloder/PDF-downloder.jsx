import React from "react";
import generatePDF from "react-to-pdf";
import { Containers } from "./Container";

const getTargetElement = () => document.getElementById("containers-pdf");

const downloadPdf = () =>
  generatePDF(getTargetElement, {
    filename: "using-function.pdf",
   
  });

const PdfGenerator = ({ children }) => {
  return (
    <Containers>
      <button className="btn text-white" onClick={downloadPdf}>
        download
      </button>
      <div id="containers-pdf">{children}</div>
    </Containers>
  );
};

export default PdfGenerator;
