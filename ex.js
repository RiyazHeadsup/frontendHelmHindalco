// This code will generate an Excel file format for the Planner Aadmi Quotation
// You can copy this code and use it with SheetJS or similar library

function createPlannerAadmiQuotation() {
    // Create a new workbook
    const wb = XLSX.utils.book_new();
    
    // Data for the sheet
    const data = [
      ["Quotation - Planner Aadmi"], 
      ["2nd Floor, A4, Sri Aurobindo Marg, Sarvodaya Enclave, Adchini, New Delhi, Delhi 110017"],
      [""],
      ["Scope of Work"],
      ["We are delighted to present this quotation for the design and production of bespoke wedding collaterals.",
       "Our aim is to ensure that each element reflects the elegance, personality, and theme of the wedding.",
       "All items will be crafted using high-quality materials, with attention to detail in design.",
       "This project will be handled with a commitment to timely delivery and seamless coordination to support the event timeline."],
      [""],
      ["No.", "Items", "Qty", "Size", "Unit Price", "Amount"],
      [1, "Mehendi Ceremony Cards", 1, "A4", "₹6000", "₹6000"],
      [2, "Sangeet Ceremony Cards", 1, "A4", "₹6000", "₹6000"],
      [3, "Haldi Ceremony Cards", 1, "A4", "₹6000", "₹6000"],
      [4, "Wedding Ceremony Cards", 1, "A4", "₹6000", "₹6000"],
      [5, "Itinerary (Room Hamper)", 1, "Tri-fold A5", "₹7000", "₹7000"],
      [6, "Welcome Note (Room Hamper)", 1, "A4", "₹3500", "₹3500"],
      [7, "Welcome Signage", 1, "2x3 ft", "₹7000", "₹7000"],
      [8, "Mehendi Signage", 1, "2x3 ft", "₹7000", "₹7000"],
      [9, "Sangeet Signage", 1, "2x3 ft", "₹7000", "₹7000"],
      [10, "Haldi Signage", 1, "2x3 ft", "₹7000", "₹7000"],
      [11, "Wedding Signage", 1, "2x3 ft", "₹7000", "₹7000"],
      [12, "Thank You Card", 1, "A4", "₹4500", "₹4500"],
      [13, "Vendor Thank You Cards", 1, "A4", "₹4500", "₹4500"],
      [14, "Monogrammed Paper Bags/Gift Bags", 1, "1", "₹3000", "₹3000"],
      [15, "Wedding Monogram Stickers", 1, "2x1 inch", "₹4000", "₹4000"],
      [16, "Customised Luggage Tags", 1, "1", "₹3500", "₹3500"],
      [17, "Custom Rom Keys", 1, "1", "₹2500", "₹2500"],
      [""],
      ["Total:", "", "", "", "", "₹91,500"],
      ["GST (18%):", "", "", "", "", "₹16,470"],
      ["Grand Total:", "", "", "", "", "₹1,07,970"],
      ["Amount in words:", "One Lakh Seven Thousand Ninety Seven Only"],
      [""],
      ["Terms & Conditions"],
      ["All design collaterals mentioned above will be delivered in JPEG/PNG formats."],
      ["Editable files (AI) will be costed separately at INR 2,000 each."],
      ["Proposal includes a maximum of two iterations per deliverable. Additional iterations will be charged separately."],
      [""],
      ["Payment Terms"],
      ["50% Advance: Payable at the time of order confirmation."],
      ["50% Balance: Payable upon delivery of the final materials."],
      ["Kindly ensure timely payments to avoid production delays."],
      ["This quotation is valid for 15 days from the date of issue."],
      [""],
      ["Best Regards,"],
      ["Headsup Corporation Pvt. Ltd"],
      ["+91 97117 89456, +91 95556 13115"]
    ];
    
    // Create worksheet from data
    const ws = XLSX.utils.aoa_to_sheet(data);
    
    // Set column widths
    const colWidths = [10, 30, 10, 15, 15, 15];
    ws['!cols'] = colWidths.map(w => ({width: w}));
    
    // Set row heights for header and content
    const rowHeights = {};
    rowHeights[0] = {hpt: 30}; // Title
    rowHeights[3] = {hpt: 25}; // Scope of Work
    rowHeights[6] = {hpt: 25}; // Table header
    ws['!rows'] = rowHeights;
    
    // Apply styles to worksheet
    
    // Header styles - Title
    ws.A1.s = {
      font: {bold: true, sz: 16, color: {rgb: "2E3A59"}},
      alignment: {horizontal: "center", vertical: "center"}
    };
    
    // Merge cells for header and address
    ws['!merges'] = [
      {s: {r: 0, c: 0}, e: {r: 0, c: 5}}, // Title
      {s: {r: 1, c: 0}, e: {r: 1, c: 5}}, // Address
      {s: {r: 3, c: 0}, e: {r: 3, c: 5}}, // Scope of Work
      {s: {r: 4, c: 0}, e: {r: 4, c: 5}}, // Scope description line 1
      {s: {r: 5, c: 0}, e: {r: 5, c: 5}}  // Empty row
    ];
    
    // Table header styles
    for (let i = 0; i < 6; i++) {
      const cell = XLSX.utils.encode_cell({r: 6, c: i});
      ws[cell].s = {
        fill: {fgColor: {rgb: "E6F0FA"}},
        font: {bold: true, color: {rgb: "2E3A59"}},
        border: {
          top: {style: "thin"},
          bottom: {style: "thin"},
          left: {style: "thin"},
          right: {style: "thin"}
        },
        alignment: {horizontal: "center", vertical: "center"}
      };
    }
    
    // Table data styles
    for (let r = 7; r < 24; r++) {
      for (let c = 0; c < 6; c++) {
        const cell = XLSX.utils.encode_cell({r: r, c: c});
        if (ws[cell]) {
          ws[cell].s = {
            border: {
              top: {style: "thin"},
              bottom: {style: "thin"},
              left: {style: "thin"},
              right: {style: "thin"}
            },
            alignment: c === 1 ? {horizontal: "left"} : {horizontal: "center"}
          };
        }
      }
    }
    
    // Footer styles - Total section
    for (let r = 25; r < 29; r++) {
      const cell = XLSX.utils.encode_cell({r: r, c: 0});
      if (ws[cell]) {
        ws[cell].s = {
          font: {bold: true, color: {rgb: "1B4F72"}}
        };
      }
      
      if (r >= 25 && r <= 27) {
        const amountCell = XLSX.utils.encode_cell({r: r, c: 5});
        if (ws[amountCell]) {
          ws[amountCell].s = {
            font: {bold: true},
            alignment: {horizontal: "right"}
          };
        }
      }
    }
    
    // Terms & Conditions header
    const termsHeaderCell = XLSX.utils.encode_cell({r: 30, c: 0});
    ws[termsHeaderCell].s = {
      font: {bold: true, sz: 12}
    };
    
    // Payment Terms header
    const paymentHeaderCell = XLSX.utils.encode_cell({r: 35, c: 0});
    ws[paymentHeaderCell].s = {
      font: {bold: true, sz: 12}
    };
    
    // Company name in signature
    const companyNameCell = XLSX.utils.encode_cell({r: 42, c: 0});
    ws[companyNameCell].s = {
      font: {bold: true}
    };
    
    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, "Quotation");
    
    // Generate Excel file
    XLSX.writeFile(wb, "Planner_Aadmi_Quotation.xlsx");
  }
  
  // Implementation guide:
  // 1. Install SheetJS library using npm: npm install xlsx
  // 2. Import the library in your JavaScript file: import * as XLSX from 'xlsx';
  // 3. Call the createPlannerAadmiQuotation() function to generate the Excel file
  
  // Excel formatting options that you should implement when using this template:
  // - Set print area to include all content
  // - Add header with company logo if available
  // - Add footer with page numbers
  // - Set page orientation to portrait
  // - Set appropriate margins (recommended: 0.7" on all sides)
  // - Enable "Fit to 1 page wide by 1 page tall" in Page Setup