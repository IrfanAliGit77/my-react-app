import React from "react";
import { utils, writeFile } from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

const ExportButton = ({ data }) => {
  // Fungsi untuk ekspor ke Excel
  const exportToExcel = () => {
    const worksheet = utils.json_to_sheet(data);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "Data");
    writeFile(workbook, "data_export.xlsx");
  };

  // Fungsi untuk ekspor ke PDF
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text("Data Export", 10, 10);
    doc.autoTable({
      head: [Object.keys(data[0])],
      body: data.map((row) => Object.values(row)),
    });
    doc.save("data_export.pdf");
  };

  return (
    <div className="flex gap-4">
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={exportToExcel}>
        Export to Excel
      </button>
      <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={exportToPDF}>
        Export to PDF
      </button>
    </div>
  );
};

export default ExportButton;
