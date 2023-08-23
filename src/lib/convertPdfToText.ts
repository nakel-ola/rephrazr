import { pdfjs } from "react-pdf";

export const convertPdfToText = async (file: any) => {
  const arrayBuffer = await file.arrayBuffer();
  const loadingTask = pdfjs.getDocument(new Uint8Array(arrayBuffer));
  const pdf = await loadingTask.promise;
  const fullText = await extractText(pdf);

  return fullText;
};

const extractText = async (pdf: any) => {
  let fullText = "";

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const textContent = await page.getTextContent();
    const pageText = textContent.items.map((item: any) => item.str).join(" ");
    fullText += pageText + " ";
  }

  return fullText;
};
