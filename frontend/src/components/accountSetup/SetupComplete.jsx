import React from "react";

const SetupComplete = ({ onGoToCRM }) => {
  const workspace = JSON.parse(
    localStorage.getItem("datacircles_workspace") || "null"
  );

  const company = JSON.parse(
    localStorage.getItem("datacircles_company") || "null"
  );

  const deal = JSON.parse(
    localStorage.getItem("datacircles_first_deal") || "null"
  );

  const basics = JSON.parse(
    localStorage.getItem("datacircles_basics") || "null"
  );

  const workspaceName = workspace?.workspaceName || "Workspace Name Here";
  const companyName = company?.companyName || "Company Name Here";
  const dealName = deal?.dealName || "Deal Name Here";
  const dealValue = deal?.dealValue || "1,20,000";
  const contactName =
    deal?.contact ||
    company?.contactName ||
    "Contact Name Here";

  const currency =
    basics?.currency || "INR - ₹ - Rupee";

  return (
    <div className="flex w-[596px] flex-col items-center pt-[64px]">

      {/* SUCCESS ICON */}
      <div className="flex h-[82px] w-[82px] items-center justify-center rounded-full border border-[#86EFAC] bg-white">
        <div className="flex h-[66px] w-[66px] items-center justify-center rounded-full border-2 border-[#22C55E] bg-[#DCFCE7]">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              d="M8 14L12 18L20 10"
              stroke="#22C55E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* HEADING */}
      <h1 className="mt-[42px] text-center text-[30px] font-semibold leading-[38px] tracking-[-0.6px] text-[#0F172A]">
        Create Your First Project
      </h1>

      <p className="mt-[6px] text-center text-[16px] font-normal leading-[24px] text-[#475569]">
        Start with the project your team is currently working on.
      </p>

      {/* SUMMARY CARD */}
      <div className="mt-[40px] w-[596px] rounded-[20px] border border-[#E2E8F0] bg-[#F1F3F3] px-[24px]">

        {/* WORKSPACE */}
        <div className="flex h-[58px] items-center justify-between border-b border-[#E2E8F0]">
          <div className="flex items-center gap-[10px]">
            <div className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#22C55E]">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M3 6L5 8L9 4"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <span className="text-[14px] font-medium text-[#475569]">
              Workspace
            </span>
          </div>

          <span className="text-[14px] font-medium text-[#0F172A]">
            {workspaceName}
          </span>
        </div>

        {/* COMPANY */}
        <div className="flex h-[58px] items-center justify-between border-b border-[#E2E8F0]">
          <div className="flex items-center gap-[10px]">
            <div className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#22C55E]">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M3 6L5 8L9 4"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <span className="text-[14px] font-medium text-[#475569]">
              Company
            </span>
          </div>

          <span className="text-[14px] font-medium text-[#0F172A]">
            {companyName}
          </span>
        </div>

        {/* DEAL */}
        <div className="flex min-h-[76px] items-center justify-between border-b border-[#E2E8F0]">
          <div className="flex items-center gap-[10px]">
            <div className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#22C55E]">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M3 6L5 8L9 4"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <span className="text-[14px] font-medium text-[#475569]">
              Deal
            </span>
          </div>

          <div className="text-right">
            <p className="text-[14px] font-medium text-[#0F172A]">
              {dealName}
            </p>

            <p className="mt-[3px] text-[14px] font-normal text-[#475569]">
              ₹{dealValue}
            </p>
          </div>
        </div>

        {/* CURRENCY */}
        <div className="flex h-[58px] items-center justify-between border-b border-[#E2E8F0]">
          <div className="flex items-center gap-[10px]">
            <div className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#22C55E]">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M3 6L5 8L9 4"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <span className="text-[14px] font-medium text-[#475569]">
              Currency
            </span>
          </div>

          <span className="text-[14px] font-medium text-[#0F172A]">
            {currency}
          </span>
        </div>

        {/* CONTACT */}
        <div className="flex h-[58px] items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <div className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#22C55E]">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M3 6L5 8L9 4"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <span className="text-[14px] font-medium text-[#475569]">
              Contact
            </span>
          </div>

          <span className="text-[14px] font-medium text-[#0F172A]">
            {contactName}
          </span>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="mt-[24px] flex w-[596px] items-center justify-between">

        <button
          type="button"
          onClick={() => {
            window.open("https://datacircles.com", "_blank");
          }}
          className="h-[48px] rounded-full border border-[#E2E8F0] bg-white px-[20px] text-[14px] font-medium text-[#0F172A] transition hover:bg-[#F8FAFC]"
        >
          Explore DataCircles
        </button>

        <button
          type="button"
          onClick={onGoToCRM}
          className="h-[48px] rounded-full bg-[#0085FF] px-[24px] text-[14px] font-medium text-white transition hover:bg-[#0078E8]"
        >
          Go to CRM
        </button>

      </div>
    </div>
  );
};

export default SetupComplete;