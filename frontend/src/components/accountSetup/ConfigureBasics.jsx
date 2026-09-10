import React, { useState } from "react";

const ConfigureBasics = ({ onContinue, onBack }) => {
  const [businessType, setBusinessType] = useState("");
  const [currency, setCurrency] = useState("Indian Rupee (₹)");
  const [gstRegistered, setGstRegistered] = useState("");
  const [error, setError] = useState("");
  const [gstin, setGstin] = useState("");

  const businessTypes = [
    {
      label: "Digital Agency",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 9.5L6.5 5H17.5L19 9.5M5 9.5H19M5 9.5V18H19V9.5M8 13H16"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Consultancy",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 20H20M6 20V7L13 4V20M13 10H18V20M9 9H10M9 12H10M9 15H10"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Service Business",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 4H16M12 4V20M7 8H17M5 20H19"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Real Estate",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 5H19V19H5V5ZM8 9H16M8 12H13M8 15H16"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 12L16 10"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      label: "Manufacturing",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 19L18 7M7 7L17 17M5 5L9 9M15 15L19 19M14 5L19 10M5 14L10 19"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Other",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V8M12 16V19M5 12H8M16 12H19M7.05 7.05L9.17 9.17M14.83 14.83L16.95 16.95M16.95 7.05L14.83 9.17M9.17 14.83L7.05 16.95"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <rect
            x="9"
            y="9"
            width="6"
            height="6"
            rx="1"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      ),
    },
  ];

  const handleContinue = () => {
    setError("");

    if (!businessType) {
      setError("Please select your business type.");
      return;
    }

    if (!currency) {
      setError("Please select your currency.");
      return;
    }

    if (!gstRegistered) {
      setError("Please select whether your business is GST registered.");
      return;
    }

    localStorage.setItem(
      "datacircles_basics",
      JSON.stringify({
        businessType,
        currency,
        gstRegistered,
      })
    );

    onContinue();
  };

  return (
   <div className="w-full max-w-[596px] px-[16px] pt-[24px] sm:px-0 sm:pt-[40px] lg:pt-[64px]">
      {/* HEADING */}
      <div className="mb-[24px] sm:mb-[40px]">
        <h1 className="text-[22px] sm:text-[30px] font-semibold leading-[30px] sm:leading-[38px] tracking-[-0.6px] text-[#0F172A]">
          Configure your basics
        </h1>

        <p className="mt-[6px] max-w-full sm:max-w-[650px] text-[14px] sm:text-[16px] font-normal leading-[22px] sm:leading-[24px] text-[#475569]">
          A few details help DataCircles tailor your workspace to how your
          business operates.
        </p>
      </div>

      {/* FORM CARD */}
      <div className="w-full rounded-[20px] border border-[#E2E8F0] bg-[#F1F3F3] p-[16px] sm:p-[24px]">
        {/* BUSINESS TYPE */}
        <div>
          <label className="block text-[14px] font-medium leading-[20px] text-[#0F172A]">
            Business Type <span className="text-[#DC2626]">*</span>
          </label>

          <div className="mt-[10px] grid grid-cols-1 gap-[10px] sm:grid-cols-2 sm:gap-[16px]">
            {businessTypes.map((type) => {
              const isSelected = businessType === type.label;

              return (
                <button
                  key={type.label}
                  type="button"
                  onClick={() => {
                    setBusinessType(type.label);
                    setError("");
                  }}
                  className={`flex h-[48px] items-center gap-[12px] rounded-full border px-[16px] text-left text-[14px] font-medium transition ${
                    isSelected
                      ? "border-[#0085FF] bg-[#EFF8FF] text-[#0085FF]"
                      : "border-[#E2E8F0] bg-white text-[#0F172A] hover:border-[#0085FF]"
                  }`}
                >
                  <span className="flex h-[20px] w-[20px] shrink-0 items-center justify-center">
                    {type.icon}
                  </span>

                  <span>{type.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* CURRENCY */}
        <div className="mt-[24px]">
          <label
            htmlFor="currency"
            className="block text-[14px] font-medium leading-[20px] text-[#0F172A]"
          >
            Currency <span className="text-[#DC2626]">*</span>
          </label>

          <div className="relative mt-[10px]">
            <select
              id="currency"
              value={currency}
              onChange={(e) => {
                setCurrency(e.target.value);
                setError("");
              }}
              className="h-[48px] w-full appearance-none rounded-full border border-[#E2E8F0] bg-white px-[16px] pr-[44px] text-[14px] font-normal text-[#0F172A] outline-none focus:border-[#0085FF]"
            >
              <option value="Indian Rupee (₹)">Indian Rupee (₹)</option>
              <option value="US Dollar ($)">US Dollar ($)</option>
              <option value="Euro (€)">Euro (€)</option>
              <option value="British Pound (£)">British Pound (£)</option>
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

        {/* GST */}
<div className="mt-[24px]">
  <label className="block text-[14px] font-medium leading-[20px] text-[#0F172A]">
    GST Registered? <span className="text-[#DC2626]">*</span>
  </label>

  <div className="mt-[10px] grid grid-cols-2 gap-[10px] sm:gap-[16px]">
    <button
      type="button"
      onClick={() => {
        setGstRegistered("Yes");
        setError("");
      }}
      className={`h-[48px] rounded-full border text-[14px] font-medium transition ${
        gstRegistered === "Yes"
          ? "border-[#0085FF] bg-[#0085FF] text-white"
          : "border-[#E2E8F0] bg-white text-[#0F172A] hover:border-[#0085FF]"
      }`}
    >
      Yes
    </button>

    <button
      type="button"
      onClick={() => {
        setGstRegistered("No");
        setError("");
      }}
      className={`h-[48px] rounded-full border text-[14px] font-medium transition ${
        gstRegistered === "No"
          ? "border-[#0085FF] bg-[#0085FF] text-white"
          : "border-[#E2E8F0] bg-white text-[#0F172A] hover:border-[#0085FF]"
      }`}
    >
      No
    </button>
  </div>

  {gstRegistered === "Yes" && (
    <input
      type="text"
      placeholder="Enter GSTIN"
      value={gstin}
      onChange={(e) => {
        setGstin(e.target.value);
        setError("");
      }}
      className="mt-[10px] h-[48px] w-full rounded-full border border-[#E2E8F0] bg-white px-[16px] text-[14px] text-[#0F172A] outline-none placeholder:text-[#64748B] focus:border-[#0085FF]"
    />
  )}
</div>

        {/* ERROR */}
        {error && (
          <p className="mt-[16px] text-[13px] font-medium text-[#DC2626]">
            {error}
          </p>
        )}
      </div>

      {/* ACTIONS */}
      <div className="mt-[24px] flex w-full items-center justify-between pb-[24px] sm:pb-0">
        <button
          type="button"
          onClick={onBack}
          className="h-[48px] rounded-full border border-[#E2E8F0] bg-white px-[20px] text-[14px] font-medium text-[#0F172A] transition hover:bg-[#F8FAFC]"
        >
          Back
        </button>

        <button
          type="button"
          onClick={handleContinue}
          className="h-[48px] rounded-full bg-[#0085FF] px-[20px] text-[14px] font-medium text-white transition hover:bg-[#0078E8]"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ConfigureBasics;