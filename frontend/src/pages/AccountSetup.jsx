import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SetupWorkspace from "../components/accountSetup/SetupWorkspace";
import ConfigureBasics from "../components/accountSetup/ConfigureBasics";
import Company from "../components/accountSetup/Company";
import StartFromScratch from "../components/accountSetup/StartFromScratch";
import ImportCompany from "../components/accountSetup/ImportCompany";
import CreateFirstDeal from "../components/accountSetup/CreateFirstDeal";
import SetupComplete from "../components/accountSetup/SetupComplete";

// ==================================================
// STEP META — used only by the compact mobile stepper
// (the desktop sidebar below still hardcodes its own copy,
// left untouched)
// ==================================================
const STEP_META = [
  { title: "Workspace", description: "Tell us about your business" },
  { title: "Configure Basics", description: "Configure a few basics." },
  { title: "Company", description: "Start with new or Existing" },
  { title: "Create First Deal", description: "Start with the Deal" },
];

const AccountSetup = () => {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);
  const [showStartFromScratch, setShowStartFromScratch] = useState(false);
  const [showImportCompany, setShowImportCompany] = useState(false);

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep === 1) {
      navigate("/login");
      return;
    }

    setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="min-h-screen w-full bg-white font-['Inter']">

      {/* ==================================================
          TOP HEADER — NEVER CHANGES
          ================================================== */}
      <div className="relative h-[72px] sm:h-[88px] w-full border-b border-dashed border-[#E2E8F0]">

        {/* DATACIRCLES LOGO */}
        <div className="absolute left-[16px] top-[16px] flex h-[36px] w-[36px] items-center justify-center sm:left-[44px] sm:top-[24px] sm:h-[40px] sm:w-[40px]">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 10C15.0294 10 11 14.0294 11 19V31.0498C11 31.5743 10.5743 32 10.0498 32C9.798 31.9999 9.557 31.8997 9.3789 31.7217L0 22.3428V26.585L7.2578 33.8428C7.9984 34.5834 9.002 34.9999 10.0498 35C12.2312 35 14 33.2312 14 31.0498V19C14 15.6863 16.6863 13 20 13C23.3137 13 26 15.6863 26 19V31.0498C26 33.2312 27.7688 35 29.9502 35C30.998 34.9999 32.0016 34.5834 32.7422 33.8428L34.707 31.8785L37.707 28.8785L40 26.585V22.3428L37.8789 24.4639L35.585 26.7574L32.585 29.7574L30.6211 31.7217C30.443 31.8997 30.202 31.9999 29.9502 32C29.4257 32 29 31.5743 29 31.0498V19C29 14.0294 24.9706 10 20 10ZM20 15C17.7909 15 16 16.7909 16 19V31.0498C16 34.3358 13.3358 37 10.0498 37C8.472 36.9999 6.958 36.3735 5.8428 35.2578L0 29.4141V33.6562L3.722 37.3789C5.400 39.0572 7.676 39.9999 10.0498 40C14.9926 39.9999 19 35.9926 19 31.0498V19C19 18.4477 19.4477 18 20 18C20.5523 18 21 18.4477 21 19V31.0498C21 35.9926 25.0074 40 29.9502 40C32.324 39.9999 34.6 39.0572 36.278 37.3789L40 33.6562V29.4141L34.1572 35.2578C33.042 36.3734 31.528 36.9999 29.9502 37C26.6642 37 24 34.3358 24 31.0498V19C24 16.7909 22.2091 15 20 15Z"
              fill="#0085FF"
            />

            <path
              d="M20 5C12.268 5 6 11.268 6 19V25.1719L9 28.1719V19C9 12.9249 13.9249 8 20 8C26.0751 8 31 12.9249 31 19V28.1719L34 25.1719V19C34 11.268 27.732 5 20 5Z"
              fill="#0085FF"
            />

            <path
              d="M20 0C9.5066 0 1 8.5066 1 19V20.1719L4 23.1719V19C4 10.1634 11.1634 3 20 3C28.8366 3 36 10.1634 36 19V23.1719L39 20.1719V19C39 8.5066 30.4934 0 20 0Z"
              fill="#0085FF"
            />
          </svg>
        </div>

        {/* LANGUAGE */}
        <button
          type="button"
          className="
            absolute
            right-[16px]
            top-[18px]
            flex
            h-[32px]
            w-[84px]
            items-center
            justify-center
            gap-[6px]
            rounded-full
            border
            border-[#E2E8F0]
            bg-white
            text-[#0F172A]
            sm:right-[44px]
            sm:top-[26px]
            sm:h-[36px]
            sm:w-[101px]
            sm:gap-[10px]
          "
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <circle
              cx="8"
              cy="8"
              r="6.5"
              stroke="#475569"
            />

            <path
              d="M1.5 8H14.5"
              stroke="#475569"
            />

            <path
              d="M8 1.5C9.7 3.3 10.6 5.5 10.6 8C10.6 10.5 9.7 12.7 8 14.5"
              stroke="#475569"
            />

            <path
              d="M8 1.5C6.3 3.3 5.4 5.5 5.4 8C5.4 10.5 6.3 12.7 8 14.5"
              stroke="#475569"
            />
          </svg>

          <span className="text-[13px] sm:text-[14px] font-normal">
            ENG
          </span>

          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M3 4.5L6 7.5L9 4.5"
              stroke="#475569"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* ==================================================
          MOBILE / TABLET STEP INDICATOR — hidden at lg
          Compact horizontal progress bar + current step label,
          replaces the vertical sidebar below lg.
          ================================================== */}
      <div className="border-b border-dashed border-[#E2E8F0] px-[16px] py-[16px] lg:hidden">

        <div className="flex w-full items-center">
          {STEP_META.map((step, idx) => {
            const stepNumber = idx + 1;
            const isComplete = currentStep > stepNumber;
            const isActive = currentStep >= stepNumber;

            return (
              <React.Fragment key={step.title}>
                <div
                  className={`
                    flex
                    h-[17px]
                    w-[17px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    bg-white
                    ${
                      isActive
                        ? "border-[#16A34A]"
                        : "border-[#94A3B8]"
                    }
                  `}
                >
                  {isComplete && (
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                    >
                      <path
                        d="M2 5L4.2 7L8 3"
                        stroke="#16A34A"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>

                {idx < STEP_META.length - 1 && (
                  <div
                    className={`
                      mx-[6px]
                      h-px
                      flex-1
                      ${
                        currentStep > stepNumber
                          ? "bg-[#16A34A]"
                          : "bg-[#94A3B8]"
                      }
                    `}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>

        <p className="mt-[12px] text-[14px] font-semibold leading-[20px] text-[#0F172A]">
          Step {currentStep} of {STEP_META.length} — {STEP_META[currentStep - 1]?.title}
        </p>

        <p className="mt-[1px] text-[12px] font-normal leading-[18px] text-[#64748B]">
          {STEP_META[currentStep - 1]?.description}
        </p>
      </div>

      {/* ==================================================
          MAIN CONTENT
          ================================================== */}
      <div className="flex min-h-0 w-full flex-col lg:min-h-[812px] lg:flex-row">

        {/* ==================================================
            LEFT SIDEBAR — NEVER CHANGES (desktop only, lg+)
            ================================================== */}
        <div className="hidden w-[350px] shrink-0 border-r border-dashed border-[#E2E8F0] lg:block">

          <div className="ml-[50px] mt-[64px]">

            {/* SIDEBAR TITLE */}
            <div className="flex items-center gap-[12px]">

              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="7"
                  r="3"
                  stroke="#0F172A"
                  strokeWidth="1.6"
                />

                <path
                  d="M5 20C5 16.6863 7.68629 14 11 14H13C16.3137 14 19 16.6863 19 20"
                  stroke="#0F172A"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />

                <circle
                  cx="5"
                  cy="9"
                  r="2"
                  stroke="#0F172A"
                  strokeWidth="1.4"
                />

                <circle
                  cx="19"
                  cy="9"
                  r="2"
                  stroke="#0F172A"
                  strokeWidth="1.4"
                />
              </svg>

              <span className="text-[14px] font-semibold text-[#0F172A]">
                Set up your account
              </span>
            </div>

            {/* STEPS */}
            <div className="mt-[26px]">

              {/* STEP 1 */}
              <div className="relative flex">

                <div className="flex w-[28px] flex-col items-center">

                  <div
                    className={`
                      flex
                      h-[17px]
                      w-[17px]
                      items-center
                      justify-center
                      rounded-full
                      border-2
                      bg-white
                      ${
                        currentStep >= 1
                          ? "border-[#16A34A]"
                          : "border-[#94A3B8]"
                      }
                    `}
                  >
                    {currentStep > 1 && (
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M2 5L4.2 7L8 3"
                          stroke="#16A34A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>

                  <div
                    className={`
                      mt-[4px]
                      h-[36px]
                      w-px
                      ${
                        currentStep > 1
                          ? "bg-[#16A34A]"
                          : "bg-[#94A3B8]"
                      }
                    `}
                  />
                </div>

                <div className="ml-[2px]">

                  <p
                    className={`
                      text-[14px]
                      leading-[20px]
                      ${
                        currentStep >= 1
                          ? "font-semibold text-[#0F172A]"
                          : "font-medium text-[#94A3B8]"
                      }
                    `}
                  >
                    Workspace
                  </p>

                  <p className="mt-[1px] text-[12px] font-normal leading-[18px] text-[#64748B]">
                    Tell us about your business
                  </p>
                </div>
              </div>

              {/* STEP 2 */}
              <div className="relative flex">

                <div className="flex w-[28px] flex-col items-center">

                  <div
                    className={`
                      flex
                      h-[17px]
                      w-[17px]
                      items-center
                      justify-center
                      rounded-full
                      border-2
                      bg-white
                      ${
                        currentStep >= 2
                          ? "border-[#16A34A]"
                          : "border-[#94A3B8]"
                      }
                    `}
                  >
                    {currentStep > 2 && (
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M2 5L4.2 7L8 3"
                          stroke="#16A34A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>

                  <div
                    className={`
                      mt-[4px]
                      h-[36px]
                      w-px
                      ${
                        currentStep > 2
                          ? "bg-[#16A34A]"
                          : "bg-[#94A3B8]"
                      }
                    `}
                  />
                </div>

                <div className="ml-[2px]">

                  <p
                    className={`
                      text-[14px]
                      leading-[20px]
                      ${
                        currentStep >= 2
                          ? "font-semibold text-[#0F172A]"
                          : "font-medium text-[#94A3B8]"
                      }
                    `}
                  >
                    Configure Basics
                  </p>

                  <p
                    className={`
                      mt-[1px]
                      text-[12px]
                      font-normal
                      leading-[18px]
                      ${
                        currentStep >= 2
                          ? "text-[#64748B]"
                          : "text-[#94A3B8]"
                      }
                    `}
                  >
                    Configure a few basics.
                  </p>
                </div>
              </div>

              {/* STEP 3 */}
              <div className="relative flex">

                <div className="flex w-[28px] flex-col items-center">

                  <div
                    className={`
                      flex
                      h-[17px]
                      w-[17px]
                      items-center
                      justify-center
                      rounded-full
                      border-2
                      bg-white
                      ${
                        currentStep >= 3
                          ? "border-[#16A34A]"
                          : "border-[#94A3B8]"
                      }
                    `}
                  >
                    {currentStep > 3 && (
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M2 5L4.2 7L8 3"
                          stroke="#16A34A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>

                  <div
                    className={`
                      mt-[4px]
                      h-[36px]
                      w-px
                      ${
                        currentStep > 3
                          ? "bg-[#16A34A]"
                          : "bg-[#94A3B8]"
                      }
                    `}
                  />
                </div>

                <div className="ml-[2px]">

                  <p
                    className={`
                      text-[14px]
                      leading-[20px]
                      ${
                        currentStep >= 3
                          ? "font-semibold text-[#0F172A]"
                          : "font-medium text-[#94A3B8]"
                      }
                    `}
                  >
                    Company
                  </p>

                  <p
                    className={`
                      mt-[1px]
                      text-[12px]
                      font-normal
                      leading-[18px]
                      ${
                        currentStep >= 3
                          ? "text-[#64748B]"
                          : "text-[#94A3B8]"
                      }
                    `}
                  >
                    Start with new or Existing
                  </p>
                </div>
              </div>

              {/* STEP 4 */}
              <div className="relative flex">

                <div className="flex w-[28px] items-start justify-center">

                  <div
                    className={`
                      flex
                      h-[17px]
                      w-[17px]
                      items-center
                      justify-center
                      rounded-full
                      border-2
                      bg-white
                      ${
                        currentStep >= 4
                          ? "border-[#16A34A]"
                          : "border-[#94A3B8]"
                      }
                    `}
                  >
                    {currentStep > 4 && (
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M2 5L4.2 7L8 3"
                          stroke="#16A34A"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                </div>

                <div className="ml-[2px]">

                  <p
                    className={`
                      text-[14px]
                      leading-[20px]
                      ${
                        currentStep >= 4
                          ? "font-semibold text-[#0F172A]"
                          : "font-medium text-[#94A3B8]"
                      }
                    `}
                  >
                    Create First Deal
                  </p>

                  <p
                    className={`
                      mt-[1px]
                      text-[12px]
                      font-normal
                      leading-[18px]
                      ${
                        currentStep >= 4
                          ? "text-[#64748B]"
                          : "text-[#94A3B8]"
                      }
                    `}
                  >
                    Start with the Deal
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ==================================================
            CHANGING CENTER CONTENT
            ================================================== */}
        <div className="flex w-full min-w-0 flex-1 items-center justify-center px-[16px] py-[32px] sm:px-[24px] lg:px-0 lg:py-0">

          {/* STEP 1 */}
          {currentStep === 1 && (
            <SetupWorkspace
              onContinue={handleNext}
              onBack={handleBack}
            />
          )}

          {/* STEP 2 */}
          {currentStep === 2 && (
            <ConfigureBasics
              onContinue={handleNext}
              onBack={handleBack}
            />
          )}

          {/* STEP 3 — COMPANY SELECTION */}
{currentStep === 3 &&
  !showStartFromScratch &&
  !showImportCompany && (
    <Company
      onStartFromScratch={() => setShowStartFromScratch(true)}
      onImportCompany={() => setShowImportCompany(true)}
      onBack={handleBack}
    />
  )}

{/* STEP 3 — START FROM SCRATCH */}
{currentStep === 3 && showStartFromScratch && (
  <StartFromScratch
    onContinue={handleNext}
    onBack={() => setShowStartFromScratch(false)}
  />
)}

{/* STEP 3 — IMPORT COMPANY */}
{currentStep === 3 && showImportCompany && (
  <ImportCompany
    onBack={() => setShowImportCompany(false)}
  />
)}

          {/* STEP 4 */}
          {currentStep === 4 && (
  <CreateFirstDeal
    onContinue={handleNext}
    onBack={handleBack}
  />
)}

        </div>
      </div>
    </div>
  );
};

export default AccountSetup;