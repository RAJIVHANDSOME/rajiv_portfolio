import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './Resume.css';
import pdf from './RajivRatna_Resume.pdf';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Set worker URL for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="resume-container">
      <div className="resume-header">
        <h2>My Resume</h2>
        <a href={pdf} target="_blank" className="download-button">
          Download PDF
        </a>
      </div>
      
      <div className="pdf-container">
       
        <Worker workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`}>
          <Viewer fileUrl={pdf} className="pdf-viewer" />
        </Worker>
      </div>
      
      {numPages > 1 && (
        <div className="page-controls">
          <button
            disabled={pageNumber <= 1}
            onClick={() => setPageNumber(pageNumber - 1)}
          >
            Previous
          </button>
          <span>
            Page {pageNumber} of {numPages}
          </span>
          <button
            disabled={pageNumber >= numPages}
            onClick={() => setPageNumber(pageNumber + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Resume;