import React from "react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

// Register the fonts required by pdfmake
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const UsingPDFMake = () => {
   const generatePDF = () => {
      // Create a document definition
      const documentDefinition = {
         content: [
            {
               text: "Hello, World!",
               fontSize: 16,
               bold: true,
               alignment: "center",
               margin: [0, 0, 0, 20],
            },
            { text: "This is a sample PDF generated with pdfmake in React.", fontSize: 12 },
         ],
      };

      // Generate the PDF
      const pdfDocGenerator = pdfMake.createPdf(documentDefinition);
      pdfDocGenerator.download("sample.pdf");
   };

   return (
      <section>
         <div>
            <h2>PDF Generate using pdfmake</h2>
         </div>
         <div>
            <button onClick={generatePDF}>Generate PDF</button>
         </div>
      </section>
   );
};

export default UsingPDFMake;
