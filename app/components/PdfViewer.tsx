interface PdfViewerProps {
    file: string; // The URL to the PDF file you want to display
  }
  
  const PdfViewer: React.FC<PdfViewerProps> = ({ file }) => {
    return (
      <div className="flex justify-center items-center">
        <iframe
          src={file}
          className="w-full h-96"
        ></iframe>
      </div>
    );
  };
  
  export default PdfViewer;