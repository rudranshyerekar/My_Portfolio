const fs = require('fs');
let pdfParse;
try {
  pdfParse = require('pdf-parse');
} catch (err) {
  console.error("error requiring", err);
}

console.log(typeof pdfParse);
if (typeof pdfParse === 'function') {
  pdfParse(fs.readFileSync('public/data/Rudransh Yerekar.pdf')).then(d => console.log("DATA FUNC:", d.text)).catch(console.error);
} else if (pdfParse && typeof pdfParse.default === 'function') {
  pdfParse.default(fs.readFileSync('public/data/Rudransh Yerekar.pdf')).then(d => console.log("DATA DEFAULT:", d.text)).catch(console.error);
} else if (pdfParse) {
  const p = new pdfParse.PDFParse(fs.readFileSync('public/data/Rudransh Yerekar.pdf'));
  p.parse().then(d => console.log("DATA OBJ:", d.text)).catch(console.error);
}
