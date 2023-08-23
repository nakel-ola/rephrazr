import { NeuButton } from "@/components/NeuButton";
import { convertDocxToText } from "@/lib/convertDocxToText";
import { convertPdfToText } from "@/lib/convertPdfToText";
import { cn } from "@/lib/utils";
import { DocumentUpload } from "iconsax-react";
import React, { ChangeEvent, Fragment, useState } from "react";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

type Props = {
  value: string;
  onChange: (e: string) => void;
  onBtnClick(): void;
};

export const TextEditorCard = (props: Props) => {
  const { onChange, value, onBtnClick } = props;

  const [isHovering, setIsHovering] = useState(false);

  const [canDrop, setCanDrop] = useState<boolean | null>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsHovering(true);
  };

  const handleFile = async (file: any) => {
    const name = file.name as string;

    if (name.endsWith(".pdf")) {
      const fullText = await convertPdfToText(file);

      onChange(fullText);
    } else if (name.endsWith(".docx")) {
      const fullText = await convertDocxToText(file);

      if (!fullText) return;

      onChange(fullText);
    } else {
      setCanDrop(true);
    }
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const files = [...(e.dataTransfer.files as any)];

    if (files && files.length > 0) {
      const file = files[0];

      if (file) await handleFile(file);
    }
    setTimeout(() => setIsHovering(false), 300);
  };

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      if (file) await handleFile(file);
    }
  };

  return (
    <Fragment>
      <div className="w-full flex flex-col h-[300px] lg:h-full">
      <input
        id="fileUpload"
        type="file"
        accept="application/pdf, .docx"
        className="hidden border-0"
        multiple={false}
        onChange={handleChange}
      />
        <div
          className={cn(
            "relative h-[calc(100%-55px)]",
            isHovering ? "bg-red-500/50" : ""
          )}
          onDragOver={handleDragOver}
          onDragLeave={() => {
            setIsHovering(false);
            setCanDrop(null);
          }}
          onDrop={handleDrop}
          onDragStart={() => {}}
        >
          <textarea
            cols={30}
            rows={10}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder='To rewrite text, enter or paste it here and press "Paraphrase" '
            className="w-full h-full resize-none p-2 outline-none border-0 relative"
          ></textarea>

          {isHovering ? (
            <div
              className={cn(
                "absolute top-0 w-full h-full border-2 border-dashed bg-green-500/30 border-green-500 grid place-items-center",
                canDrop === true ? "bg-red-500/30 border-red-500" : ""
              )}
            >
              <p
                className={cn(
                  "font-bold text-2xl",
                  canDrop === true ? "text-red-500" : "text-green-500"
                )}
              >
                Drop your PDF or Word(.DOCX) file here.
              </p>
            </div>
          ) : null}
        </div>

        <div className="flex items-center justify-between h-[55px] px-3 border-t-2 border-black">
          <label id="label-file-upload" htmlFor="fileUpload">
            <div className="flex items-center cursor-pointer hover:bg-slate-100 py-2 px-2 rounded-lg">
              <DocumentUpload variant="Bold" />
              <span className="">&nbsp; Upload Doc</span>
            </div>
          </label>

          <NeuButton onClick={onBtnClick} className="p-2 px-4 mb-1">
            Paraphrase
          </NeuButton>
        </div>
      </div>
    </Fragment>
  );
};
