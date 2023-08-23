import * as mammoth from "mammoth";

export const convertDocxToText = async (file: any) => {
  const arrayBuffer = await file.arrayBuffer();
  try {
    const result = await mammoth.extractRawText({ arrayBuffer });
    const extractedText = result.value;

    return extractedText;
  } catch (error) {
    console.error("Error extracting text from .docx:", error);
  }
};
