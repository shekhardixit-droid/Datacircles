import React, { useRef, useState } from "react";

const ImportCompany = ({ onBack }) => {
  const fileInputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const MAX_FILE_SIZE = 25 * 1024 * 1024;

  const allowedExtensions = [".xlsx", ".xls", ".csv"];

  const validateFile = (file) => {
    if (!file) return false;

    const fileName = file.name.toLowerCase();

    const isValidExtension = allowedExtensions.some((extension) =>
      fileName.endsWith(extension)
    );

    if (!isValidExtension) {
      setError("Please upload a .xlsx, .xls, or .csv file.");
      return false;
    }

    if (file.size > MAX_FILE_SIZE) {
      setError("Maximum file size is 25 MB.");
      return false;
    }

    setError("");
    setSelectedFile(file);

    localStorage.setItem(
      "datacircles_import_company_file",
      JSON.stringify({
        name: file.name,
        size: file.size,
        type: file.type,
      })
    );

    return true;
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (file) {
      validateFile(file);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);

    const file = event.dataTransfer.files?.[0];

    if (file) {
      validateFile(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleDownloadTemplate = () => {
    const csvContent =
      "Company Name,Industry,Address,Website\nABC Builders Pvt. Ltd.,Construction,Mumbai Maharashtra,https://company.com";

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "company_import_template.csv";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full max-w-[596px] px-[16px] pt-[24px] sm:px-0 sm:pt-[40px] lg:pt-[64px]">

      {/* HEADING */}
      <div className="mb-[24px] sm:mb-[40px]">
        <h1 className="text-[22px] sm:text-[30px] font-semibold leading-[30px] sm:leading-[38px] tracking-[-0.6px] text-[#0F172A]">
          Import Your Existing Company
        </h1>

        <p className="mt-[6px] text-[14px] sm:text-[16px] font-normal leading-[22px] sm:leading-[24px] text-[#475569]">
          Upload an Excel or CSV file and we’ll help structure your Company
          data.
        </p>
      </div>

      {/* UPLOAD CARD */}
      <div
        onDragOver={handleDragOver}
        onDragEnter={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`flex h-auto min-h-[220px] w-full flex-col items-center justify-center rounded-[20px] border border-[#E2E8F0] bg-[#F1F3F3] px-[16px] py-[24px] text-center transition sm:h-[252px] sm:py-0 ${
          isDragging ? "border-[#0085FF] bg-[#F0F8FF]" : ""
        }`}
      >
        {/* UPLOAD ICON */}
        <div
          className={`flex h-[62px] w-[62px] items-center justify-center rounded-full border border-[#0085FF] bg-[#F1F5F9] ${
            selectedFile ? "bg-[#EFF6FF]" : ""
          }`}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 19V9"
              stroke="#0085FF"
              strokeWidth="1.8"
              strokeLinecap="round"
            />

            <path
              d="M10 13L14 9L18 13"
              stroke="#0085FF"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="M7 19.5C5.89543 19.5 5 18.6046 5 17.5C5 16.3954 5.89543 15.5 7 15.5"
              stroke="#0085FF"
              strokeWidth="1.8"
              strokeLinecap="round"
            />

            <path
              d="M21 19.5C22.1046 19.5 23 18.6046 23 17.5C23 16.3954 22.1046 15.5 21 15.5"
              stroke="#0085FF"
              strokeWidth="1.8"
              strokeLinecap="round"
            />

            <path
              d="M7 19.5H21"
              stroke="#0085FF"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* FILE TEXT */}
        <button
          type="button"
          onClick={handleUploadClick}
          className="mt-[24px] max-w-full truncate px-[8px] text-[14px] font-medium leading-[20px] text-[#0F172A] hover:text-[#0085FF]"
        >
          {selectedFile ? selectedFile.name : "Drag & Drop Your File Here"}
        </button>

        {!selectedFile && (
          <>
            <span className="mt-[2px] text-[13px] font-normal text-[#64748B]">
              or
            </span>

            <button
              type="button"
              onClick={handleDownloadTemplate}
              className="mt-[8px] h-[32px] rounded-full border border-[#CBD5E1] bg-white px-[14px] text-[12px] font-medium text-[#0F172A] transition hover:border-[#0085FF]"
            >
              Download Sample Template
            </button>
          </>
        )}

        {selectedFile && (
          <button
            type="button"
            onClick={handleUploadClick}
            className="mt-[8px] h-[32px] rounded-full border border-[#CBD5E1] bg-white px-[14px] text-[12px] font-medium text-[#0F172A] transition hover:border-[#0085FF]"
          >
            Choose Another File
          </button>
        )}

        <p className="mt-[10px] text-[12px] font-normal leading-[18px] text-[#64748B]">
          Supported: .xlsx, .xls, .csv&nbsp; · &nbsp;Maximum file size: 25 MB
        </p>

        <input
          ref={fileInputRef}
          type="file"
          accept=".xlsx,.xls,.csv"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {/* ERROR */}
      {error && (
        <p className="mt-[10px] text-[13px] font-medium text-[#DC2626]">
          {error}
        </p>
      )}

      {/* IMPORT INSTRUCTIONS */}
      <div className="mt-[24px] w-full max-w-[596px] rounded-[20px] border border-[#E2E8F0] bg-[#F1F3F3] px-[16px] py-[12px]">

        {/* TITLE */}
        <div className="flex items-center gap-[10px]">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="9"
              stroke="#0F172A"
              strokeWidth="1.7"
            />

            <path
              d="M12 10.5V16"
              stroke="#0F172A"
              strokeWidth="1.7"
              strokeLinecap="round"
            />

            <circle
              cx="12"
              cy="7.5"
              r="1"
              fill="#0F172A"
            />
          </svg>

          <span className="text-[14px] font-medium leading-[20px] text-[#0F172A]">
            Import Instructions
          </span>
        </div>

        {/* INSTRUCTIONS */}
        <ul className="mt-[8px] ml-[20px] sm:ml-[32px] list-disc text-[13px] font-normal leading-[20px] text-[#64748B]">
          <li>
            Your CSV should include column headers in the first row
          </li>

          <li>
            Supported fields: Company Name, Industry, Address, Website
          </li>

          <li>
            Custom fields will be automatically mapped if column names match
          </li>

          <li>
            You'll be able to map fields manually after file upload
          </li>

          <li>
            Download the sample templates above to see the expected format
          </li>
        </ul>
      </div>

      {/* ACTION */}
      <div className="mt-[24px] flex w-full max-w-[596px] items-center justify-between pb-[24px] sm:pb-0">
        <button
          type="button"
          onClick={onBack}
          className="h-[48px] rounded-full border border-[#E2E8F0] bg-white px-[20px] text-[14px] font-medium text-[#0F172A] transition hover:bg-[#F8FAFC]"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ImportCompany;