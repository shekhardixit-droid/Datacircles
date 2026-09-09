import React, { useState } from "react";
import SetupComplete from "./SetupComplete";

const CreateFirstDeal = ({ onBack }) => {
  const savedCompany = JSON.parse(
    localStorage.getItem("datacircles_company") || "null"
  );

  const [showComplete, setShowComplete] = useState(false);

  const [dealName, setDealName] = useState("");
  const [companyName, setCompanyName] = useState(
    savedCompany?.companyName || ""
  );
  const [contact, setContact] = useState(
    savedCompany?.contactName || ""
  );
  const [dealValue, setDealValue] = useState("");
  const [pipelineStage, setPipelineStage] = useState("New");
  const [error, setError] = useState("");

  const handleCreateDeal = () => {
    setError("");

    if (!dealName.trim()) {
      setError("Deal Name is required.");
      return;
    }

    if (!companyName.trim()) {
      setError("Company Name is required.");
      return;
    }

    if (!contact.trim()) {
      setError("Contact is required.");
      return;
    }

    if (!dealValue.trim()) {
      setError("Deal Value is required.");
      return;
    }

    if (!pipelineStage) {
      setError("Pipeline Stage is required.");
      return;
    }

    localStorage.setItem(
      "datacircles_first_deal",
      JSON.stringify({
        dealName: dealName.trim(),
        companyName: companyName.trim(),
        contact: contact.trim(),
        dealValue: dealValue.trim(),
        pipelineStage,
      })
    );

    // Stay on Step 4 and show completion screen
    setShowComplete(true);
  };

  /*
   * COMPLETION SCREEN
   *
   * This is still inside Step 4.
   * AccountSetup shell remains unchanged.
   */
  if (showComplete) {
    return (
      <SetupComplete
        onGoToCRM={() => {
          window.location.href = "/dashboard";
        }}
      />
    );
  }

  return (
    <div className="w-[596px] pt-[64px]">
      {/* HEADING */}
      <div className="mb-[40px]">
        <h1 className="text-[30px] font-semibold leading-[38px] tracking-[-0.6px] text-[#0F172A]">
          Create your First Deal
        </h1>

        <p className="mt-[6px] w-[560px] text-[16px] font-normal leading-[24px] text-[#475569]">
          Turn your first opportunity into a trackable deal and start
          <br />
          managing your pipeline.
        </p>
      </div>

      {/* DEAL DETAILS */}
      <div className="w-[596px] rounded-[20px] border border-[#E2E8F0] bg-[#F1F3F3] p-[24px]">
        {/* DEAL NAME */}
        <div>
          <label className="block text-[14px] font-medium leading-[20px] text-[#0F172A]">
            Deal Name <span className="text-[#DC2626]">*</span>
          </label>

          <input
            type="text"
            value={dealName}
            onChange={(e) => {
              setDealName(e.target.value);
              setError("");
            }}
            placeholder="e.g. Website Development — ABC Builders"
            className="mt-[8px] h-[48px] w-full rounded-full border border-[#E2E8F0] bg-white px-[16px] text-[14px] font-normal text-[#0F172A] outline-none placeholder:text-[#64748B] focus:border-[#0085FF]"
          />
        </div>

        {/* COMPANY NAME + CONTACT */}
        <div className="mt-[24px] grid grid-cols-2 gap-[24px]">
          {/* COMPANY NAME */}
          <div>
            <label className="block text-[14px] font-medium leading-[20px] text-[#0F172A]">
              Company Name <span className="text-[#DC2626]">*</span>
            </label>

            <input
              type="text"
              value={companyName}
              onChange={(e) => {
                setCompanyName(e.target.value);
                setError("");
              }}
              placeholder="ABC Builders Pvt. Ltd."
              className="mt-[8px] h-[48px] w-full rounded-full border border-[#E2E8F0] bg-white px-[16px] text-[14px] font-normal text-[#0F172A] outline-none placeholder:text-[#64748B] focus:border-[#0085FF]"
            />
          </div>

          {/* CONTACT */}
          <div>
            <label className="block text-[14px] font-medium leading-[20px] text-[#0F172A]">
              Contact <span className="text-[#DC2626]">*</span>
            </label>

            <input
              type="text"
              value={contact}
              onChange={(e) => {
                setContact(e.target.value);
                setError("");
              }}
              placeholder="Rohit Sharma"
              className="mt-[8px] h-[48px] w-full rounded-full border border-[#E2E8F0] bg-white px-[16px] text-[14px] font-normal text-[#0F172A] outline-none placeholder:text-[#64748B] focus:border-[#0085FF]"
            />
          </div>
        </div>

        {/* DEAL VALUE + PIPELINE STAGE */}
        <div className="mt-[24px] grid grid-cols-2 gap-[24px]">
          {/* DEAL VALUE */}
          <div>
            <label className="block text-[14px] font-medium leading-[20px] text-[#0F172A]">
              Deal Value <span className="text-[#DC2626]">*</span>
            </label>

            <div className="relative mt-[8px]">
              <span className="absolute left-[16px] top-1/2 -translate-y-1/2 text-[14px] text-[#64748B]">
                ₹
              </span>

              <input
                type="number"
                min="0"
                value={dealValue}
                onChange={(e) => {
                  setDealValue(e.target.value);
                  setError("");
                }}
                placeholder="Enter deal value"
                className="h-[48px] w-full rounded-full border border-[#E2E8F0] bg-white pl-[34px] pr-[16px] text-[14px] font-normal text-[#0F172A] outline-none placeholder:text-[#64748B] focus:border-[#0085FF]"
              />
            </div>
          </div>

          {/* PIPELINE STAGE */}
          <div>
            <label className="block text-[14px] font-medium leading-[20px] text-[#0F172A]">
              Pipeline Stage <span className="text-[#DC2626]">*</span>
            </label>

            <div className="relative mt-[8px]">
              <select
                value={pipelineStage}
                onChange={(e) => {
                  setPipelineStage(e.target.value);
                  setError("");
                }}
                className="h-[48px] w-full appearance-none rounded-full border border-[#E2E8F0] bg-white px-[16px] pr-[42px] text-[14px] font-normal text-[#64748B] outline-none focus:border-[#0085FF]"
              >
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Qualified">Qualified</option>
                <option value="Proposal">Proposal</option>
                <option value="Negotiation">Negotiation</option>
                <option value="Won">Won</option>
                <option value="Lost">Lost</option>
              </select>

              <svg
                className="pointer-events-none absolute right-[18px] top-1/2 -translate-y-1/2"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="#0F172A"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* ERROR */}
        {error && (
          <p className="mt-[16px] text-[13px] font-medium leading-[20px] text-[#DC2626]">
            {error}
          </p>
        )}
      </div>

      {/* ACTIONS */}
      <div className="mt-[24px] flex w-[596px] items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="h-[48px] rounded-full border border-[#E2E8F0] bg-white px-[20px] text-[14px] font-medium text-[#0F172A] transition hover:bg-[#F8FAFC]"
        >
          Back
        </button>

        <button
          type="button"
          onClick={handleCreateDeal}
          className="h-[48px] rounded-full bg-[#0085FF] px-[21px] text-[14px] font-medium text-white transition hover:bg-[#0078E8]"
        >
          Create Deal
        </button>
      </div>
    </div>
  );
};

export default CreateFirstDeal;