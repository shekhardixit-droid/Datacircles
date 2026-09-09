import React, { useState } from "react";

const StartFromScratch = ({ onContinue, onBack }) => {
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [website, setWebsite] = useState("");
  const [gstin, setGstin] = useState("");
  const [location, setLocation] = useState("");
  const [contactName, setContactName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleContinue = () => {
    setError("");

    if (!companyName.trim()) {
      setError("Company Name is required.");
      return;
    }

    if (!industry) {
      setError("Industry is required.");
      return;
    }

    if (!website.trim()) {
      setError("Website is required.");
      return;
    }

    if (!contactName.trim()) {
      setError("Contact Name is required.");
      return;
    }

    if (!workEmail.trim()) {
      setError("Work Email is required.");
      return;
    }

    if (!phone.trim()) {
      setError("Phone is required.");
      return;
    }

    localStorage.setItem(
      "datacircles_company",
      JSON.stringify({
        companyName: companyName.trim(),
        industry,
        website: website.trim(),
        gstin: gstin.trim(),
        location: location.trim(),
        contactName: contactName.trim(),
        workEmail: workEmail.trim(),
        phone: phone.trim(),
      })
    );

    onContinue();
  };

  return (
    <div className="w-[584px] mb-10 pt-[64px]">

      {/* ==================================================
          HEADING
          ================================================== */}
      <h1 className="text-[28px] font-semibold leading-[36px] tracking-[-0.14px] text-[#0F172A]">
        Add your first company
      </h1>

      <p className="mt-[8px] w-[560px] text-[16px] font-medium leading-[22px] text-[#475569]">
        Start your CRM with a company you already do business with.
        <br />
        You can add more companies anytime.
      </p>

      {/* ==================================================
          COMPANY DETAILS
          ================================================== */}
      <div className="mt-[40px] w-[584px] rounded-[20px] border border-[#E2E8F0] bg-[#F1F3F3] p-[24px]">

        {/* COMPANY NAME + INDUSTRY */}
        <div className="grid grid-cols-2 gap-[24px]">

          {/* COMPANY NAME */}
          <div>
            <label className="block text-[14px] font-medium leading-[20px] text-[#0F172A]">
              Company Name{" "}
              <span className="text-[#DC2626]">*</span>
            </label>

            <input
              type="text"
              value={companyName}
              onChange={(e) => {
                setCompanyName(e.target.value);
                setError("");
              }}
              placeholder="e.g. ABC Builders Pvt. Ltd."
              className="
                mt-[8px]
                h-[48px]
                w-full
                rounded-full
                border
                border-[#E2E8F0]
                bg-white
                px-[16px]
                text-[14px]
                font-normal
                text-[#0F172A]
                outline-none
                placeholder:text-[#64748B]
                focus:border-[#0085FF]
              "
            />
          </div>

          {/* INDUSTRY */}
          <div>
            <label className="block text-[14px] font-medium leading-[20px] text-[#0F172A]">
              Industry{" "}
              <span className="text-[#DC2626]">*</span>
            </label>

            <div className="relative mt-[8px]">
              <select
                value={industry}
                onChange={(e) => {
                  setIndustry(e.target.value);
                  setError("");
                }}
                className="
                  h-[48px]
                  w-full
                  appearance-none
                  rounded-full
                  border
                  border-[#E2E8F0]
                  bg-white
                  px-[16px]
                  pr-[42px]
                  text-[14px]
                  font-normal
                  text-[#64748B]
                  outline-none
                  focus:border-[#0085FF]
                "
              >
                <option value="">Select Industry</option>
                <option value="Construction">Construction</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Technology">Technology</option>
                <option value="Consulting">Consulting</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Other">Other</option>
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

        {/* WEBSITE */}
        <div className="mt-[24px]">
          <label className="block text-[14px] font-medium leading-[20px] text-[#0F172A]">
            Website{" "}
            <span className="text-[#DC2626]">*</span>
          </label>

          <input
            type="text"
            value={website}
            onChange={(e) => {
              setWebsite(e.target.value);
              setError("");
            }}
            placeholder="https://company.com"
            className="
              mt-[8px]
              h-[48px]
              w-full
              rounded-full
              border
              border-[#E2E8F0]
              bg-white
              px-[16px]
              text-[14px]
              font-normal
              text-[#0F172A]
              outline-none
              placeholder:text-[#64748B]
              focus:border-[#0085FF]
            "
          />
        </div>

        {/* GSTIN */}
        <div className="mt-[24px]">
          <label className="block text-[14px] font-medium leading-[20px] text-[#0F172A]">
            GSTIN
          </label>

          <input
            type="text"
            value={gstin}
            onChange={(e) => setGstin(e.target.value)}
            placeholder="Enter GSTIN"
            className="
              mt-[8px]
              h-[48px]
              w-full
              rounded-full
              border
              border-[#E2E8F0]
              bg-white
              px-[16px]
              text-[14px]
              font-normal
              text-[#0F172A]
              outline-none
              placeholder:text-[#64748B]
              focus:border-[#0085FF]
            "
          />
        </div>

        {/* COMPANY LOCATION */}
        <div className="mt-[24px]">
          <label className="block text-[14px] font-medium leading-[20px] text-[#0F172A]">
            Company Location
          </label>

          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="ex. Mumbai, Maharashtra"
            className="
              mt-[8px]
              h-[48px]
              w-full
              rounded-full
              border
              border-[#E2E8F0]
              bg-white
              px-[16px]
              text-[14px]
              font-normal
              text-[#0F172A]
              outline-none
              placeholder:text-[#64748B]
              focus:border-[#0085FF]
            "
          />

          <p className="mt-[5px] text-[12px] font-normal leading-[18px] text-[#64748B]">
            Optional — helps with reporting.
          </p>
        </div>
      </div>

      {/* ==================================================
          CONTACT DETAILS
          ================================================== */}
      <div className="mt-[24px] w-[584px] rounded-[20px] border border-[#E2E8F0] bg-[#F1F3F3] p-[24px]">

        {/* CONTACT NAME + WORK EMAIL */}
        <div className="grid grid-cols-2 gap-[24px]">

          {/* CONTACT NAME */}
          <div>
            <label className="block text-[14px] font-medium leading-[20px] text-[#0F172A]">
              Contact Name{" "}
              <span className="text-[#DC2626]">*</span>
            </label>

            <input
              type="text"
              value={contactName}
              onChange={(e) => {
                setContactName(e.target.value);
                setError("");
              }}
              placeholder="e.g. Rohit Sharma"
              className="
                mt-[8px]
                h-[48px]
                w-full
                rounded-full
                border
                border-[#E2E8F0]
                bg-white
                px-[16px]
                text-[14px]
                font-normal
                text-[#0F172A]
                outline-none
                placeholder:text-[#64748B]
                focus:border-[#0085FF]
              "
            />
          </div>

          {/* WORK EMAIL */}
          <div>
            <label className="block text-[14px] font-medium leading-[20px] text-[#0F172A]">
              Work Email{" "}
              <span className="text-[#DC2626]">*</span>
            </label>

            <input
              type="email"
              value={workEmail}
              onChange={(e) => {
                setWorkEmail(e.target.value);
                setError("");
              }}
              placeholder="rohit@company.com"
              className="
                mt-[8px]
                h-[48px]
                w-full
                rounded-full
                border
                border-[#E2E8F0]
                bg-white
                px-[16px]
                text-[14px]
                font-normal
                text-[#0F172A]
                outline-none
                placeholder:text-[#64748B]
                focus:border-[#0085FF]
              "
            />
          </div>
        </div>

        {/* PHONE */}
        <div className="mt-[24px]">
          <label className="block text-[14px] font-medium leading-[20px] text-[#0F172A]">
            Phone{" "}
            <span className="text-[#DC2626]">*</span>
          </label>

          <input
            type="tel"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              setError("");
            }}
            placeholder="+91 XXXXX XXXXX"
            className="
              mt-[8px]
              h-[48px]
              w-full
              rounded-full
              border
              border-[#E2E8F0]
              bg-white
              px-[16px]
              text-[14px]
              font-normal
              text-[#0F172A]
              outline-none
              placeholder:text-[#64748B]
              focus:border-[#0085FF]
            "
          />
        </div>

        {/* ERROR */}
        {error && (
          <div className="mt-[16px] flex items-center gap-[8px]">

            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="#DC2626"
                strokeWidth="1.8"
              />

              <path
                d="M12 8V12"
                stroke="#DC2626"
                strokeWidth="1.8"
                strokeLinecap="round"
              />

              <circle
                cx="12"
                cy="16"
                r="1"
                fill="#DC2626"
              />
            </svg>

            <span className="text-[13px] font-medium leading-[20px] text-[#DC2626]">
              {error}
            </span>

          </div>
        )}
      </div>

      {/* ==================================================
          ACTIONS
          ================================================== */}
      <div className="mt-[24px] flex w-[584px] items-center justify-between">

        <button
          type="button"
          onClick={onBack}
          className="
            h-[48px]
            rounded-full
            border
            border-[#E2E8F0]
            bg-white
            px-[20px]
            text-[14px]
            font-medium
            text-[#0F172A]
            transition
            hover:bg-[#F8FAFC]
          "
        >
          Back
        </button>

        <button
          type="button"
          onClick={handleContinue}
          className="
            h-[48px]
            rounded-full
            bg-[#0085FF]
            px-[21px]
            text-[14px]
            font-medium
            text-white
            transition
            hover:bg-[#0078E8]
          "
        >
          Create Company & Continue
        </button>

      </div>
    </div>
  );
};

export default StartFromScratch;