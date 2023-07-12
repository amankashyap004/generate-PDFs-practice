import React from "react";
import jsPDF from "jspdf";

const UsingJsPDF = () => {
   const generatePDF = () => {
      // Create a new jsPDF instance
      const doc = new jsPDF();

      // Set the font size and add content to the PDF
      doc.setFontSize(16);
      doc.text("Hello, World!", 10, 10);
      doc.setFontSize(12);
      doc.text("This is a sample PDF generated with jsPDF in React.", 10, 20);

      // Save the PDF
      doc.save("sample.pdf");
   };

   return (
      <section>
         <div>
            <h2>PDF Generate using jspdf</h2>
         </div>
         <div>
            <button onClick={generatePDF}>Generate PDF</button>
         </div>
      </section>
   );
};

export default UsingJsPDF;
