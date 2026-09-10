import React, { useState } from "react";

const Company = ({
  onStartFromScratch,
  onImportCompany,
  onContinue,
  onBack,
}) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleCreateProject = () => {
    setSelectedOption("scratch");
    localStorage.setItem("datacircles_company_setup", "scratch");

    // Stay inside AccountSetup shell
    onStartFromScratch();
  };

  const handleImportBOQ = () => {
    setSelectedOption("import");
    localStorage.setItem("datacircles_company_setup", "import");

    // Stay inside AccountSetup shell
    onImportCompany();
  };

  const handleDashboard = () => {
    localStorage.setItem("datacircles_company_setup", "skipped");
    window.location.href = "/dashboard";
  };

  return (
    <div className="w-full max-w-[596px] px-[16px] pt-[24px] sm:px-0 sm:pt-[40px] lg:pt-[64px]">
      {/* HEADING */}
      <div className="mb-[24px] sm:mb-[40px]">
        <h1 className="text-[22px] sm:text-[30px] font-semibold leading-[30px] sm:leading-[38px] tracking-[-0.6px] text-[#0F172A]">
          How Would You Like to Get Started?
        </h1>

        <p className="mt-[6px] text-[14px] sm:text-[16px] font-normal leading-[22px] sm:leading-[24px] text-[#475569]">
          Start with a new project or bring your existing BOQ into your
          workspace.
        </p>
      </div>

      {/* OPTIONS */}
      <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-2 sm:gap-[24px]">
        {/* START FROM SCRATCH */}
        <div className="flex h-auto flex-col rounded-[20px] border border-[#E2E8F0] bg-white p-[16px] sm:h-[284px] sm:p-[24px]">
          <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#F1F5F9]">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.5 8.5C5.5 7.39543 6.39543 6.5 7.5 6.5H11.5C12.0523 6.5 12.5711 6.77614 12.881 7.233L14 8.5H20.5C21.6046 8.5 22.5 9.39543 22.5 10.5V20C22.5 21.1046 21.6046 22 20.5 22H7.5C6.39543 22 5.5 21.1046 5.5 20V8.5Z"
                stroke="#0085FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M14 12.5V18.5"
                stroke="#0085FF"
                strokeWidth="2"
                strokeLinecap="round"
              />

              <path
                d="M11 15.5H17"
                stroke="#0085FF"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <h2 className="mt-[18px] text-[18px] font-semibold leading-[24px] text-[#0F172A]">
            Start From Scratch
          </h2>

          <p className="mt-[4px] text-[15px] sm:text-[16px] font-normal leading-[22px] text-[#475569]">
            Create your first company and build a structured contact from the
            ground up.
          </p>

          <button
            type="button"
            onClick={handleCreateProject}
            className="mt-[24px] sm:mt-10 h-[48px] w-full rounded-full bg-[#0085FF] text-[14px] font-medium text-white transition hover:bg-[#0078E8]"
          >
            Create a Project
          </button>
        </div>

        {/* IMPORT EXISTING COMPANY */}
        <div className="flex h-auto flex-col rounded-[20px] border border-[#E2E8F0] bg-white p-[16px] sm:h-[284px] sm:p-[24px]">
          <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#F1F5F9]">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.5 8.5C5.5 7.39543 6.39543 6.5 7.5 6.5H11.5C12.0523 6.5 12.5711 6.77614 12.881 7.233L14 8.5H20.5C21.6046 8.5 22.5 9.39543 22.5 10.5V20C22.5 21.1046 21.6046 22 20.5 22H7.5C6.39543 22 5.5 21.1046 5.5 20V8.5Z"
                stroke="#0085FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M14 12.5V18.5"
                stroke="#0085FF"
                strokeWidth="2"
                strokeLinecap="round"
              />

              <path
                d="M11 15.5H17"
                stroke="#0085FF"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <h2 className="mt-[18px] text-[18px] font-semibold leading-[24px] text-[#0F172A]">
            Import an existing Company
          </h2>

          <p className="mt-[4px] text-[15px] sm:text-[16px] font-normal leading-[22px] text-[#475569]">
            Bring your Excel or CSV data into a structured Company workflow.
          </p>

          <button
            type="button"
            onClick={handleImportBOQ}
            className="mt-[16px] sm:mt-4 h-[48px] w-full rounded-full bg-[#0085FF] text-[14px] font-medium text-white transition hover:bg-[#0078E8]"
          >
            Import BOQ
          </button>
        </div>
      </div>

      {/* BOTTOM ACTIONS */}
      <div className="mt-[24px] flex w-full flex-col items-center gap-[16px] pb-[24px] sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:pb-0">
        <button
          type="button"
          onClick={onBack}
          className="h-[48px] w-full rounded-full border border-[#E2E8F0] bg-white px-[30px] text-[14px] font-medium text-[#0F172A] transition hover:bg-[#F8FAFC] sm:w-auto"
        >
          Back
        </button>

        <div className="flex items-center gap-[5px] text-[14px] font-medium text-[#0F172A]">
          <span>Not ready yet?</span>

          <button
            type="button"
            onClick={handleDashboard}
            className="text-[#0085FF] hover:underline"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Company;