import React, { useState } from "react";
import Navbar from "../components/navbar";

/* =========================================================
   FIGMA ASSETS
   ========================================================= */

const heroDashboard =
  "https://www.figma.com/api/mcp/asset/74e28dcd-28bc-4e8c-8ce4-b739298a049c.png";

const leadImage =
  "https://www.figma.com/api/mcp/asset/a89476bf-1cf4-4a50-9043-c19293a361ef.png";

const leadImageOverlay =
  "https://www.figma.com/api/mcp/asset/a619252d-e5b8-4c20-8952-8fb52abc4c6d.png";

const timelineImage =
  "https://www.figma.com/api/mcp/asset/385a9a88-7e6b-4f6b-bc6c-420024e495ef.png";

const crmImage =
  "https://www.figma.com/api/mcp/asset/de5e423f-5c97-46a1-bc85-092d405eba9c.png";

const crmImageOverlay =
  "https://www.figma.com/api/mcp/asset/9db8c0ba-c310-497e-983a-dd0f8f99f222.png";

const logo1 =
  "https://www.figma.com/api/mcp/asset/8df68bb9-800e-46e6-80ff-842557a8e129.png";

const logo2 =
  "https://www.figma.com/api/mcp/asset/e538e449-908f-4def-a260-47e1a9625ec3.png";

const logo3 =
  "https://www.figma.com/api/mcp/asset/6b6b73dd-14a8-4e55-968d-16a6055d16d2.png";

const logo4 =
  "https://www.figma.com/api/mcp/asset/fc36b465-f4f3-49f3-9c4e-35b516cfa0f2.png";

const logo5 =
  "https://www.figma.com/api/mcp/asset/eeabcb48-fe87-4427-85d3-e3144135dc1a.png";

const iconLead =
  "https://www.figma.com/api/mcp/asset/11a68835-9c2f-46e1-8d25-30712ad366ee.svg";

const iconCheck =
  "https://www.figma.com/api/mcp/asset/38f5bfe1-ebbb-47b5-9497-12286e64ff5c.svg";

const iconPhone =
  "https://www.figma.com/api/mcp/asset/8ab2ce43-6a7e-4901-93b0-2514c1474a7a.svg";

const iconInvoice =
  "https://www.figma.com/api/mcp/asset/b0477281-96c0-4e66-892d-0c8a4f1d87e8.svg";

const iconDeal =
  "https://www.figma.com/api/mcp/asset/25f01bb5-d7ae-4d07-aedd-149a2d9e13ec.svg";

const iconPayment =
  "https://www.figma.com/api/mcp/asset/6248b1ed-6c9c-4545-8e73-fadc1481bbb8.svg";

const iconFeature =
  "https://www.figma.com/api/mcp/asset/a753caf9-f5f8-486f-a45d-31222a0b4c0a.svg";

const iconPricingCheck =
  "https://www.figma.com/api/mcp/asset/dded33c0-9508-44ef-97d2-c45407d62b29.svg";

/* =========================================================
   COMMON BUTTON EFFECT
   ========================================================= */

const buttonEffect = `
  transition-all
  duration-200
  ease-out
  hover:-translate-y-[2px]
  hover:scale-[1.03]
  active:translate-y-0
  active:scale-[0.98]
`;

/* =========================================================
   ARROW
   ========================================================= */

function ArrowIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M4 10H15M10 5L15 10L10 15"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   BUTTON
   ========================================================= */

function BlueButton({
  children,
  width = "auto",
  arrow = false,
  className = "",
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ width }}
      className={`
        group relative flex h-12 items-center justify-center
        gap-2 overflow-hidden rounded-full
        bg-[#0085ff] px-5
        text-[16px] font-medium text-white
        shadow-[0_4px_12px_rgba(0,133,255,0.18)]
        transition-all duration-300
        hover:-translate-y-[2px]
        hover:shadow-[0_10px_24px_rgba(0,133,255,0.25)]
        active:translate-y-0
        ${className}
      `}
    >
      <span
        className="
          pointer-events-none absolute inset-0
          -translate-x-full
          bg-gradient-to-r
          from-transparent via-white/20 to-transparent
          transition-transform duration-700
          group-hover:translate-x-full
        "
      />

      <span className="relative z-10 whitespace-nowrap">
        {children}
      </span>

      {arrow && (
        <ArrowIcon className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </button>
  );
}

/* =========================================================
   HERO
   ========================================================= */

function Hero() {
  return (
    <section
      id="home"
      className="
        relative overflow-hidden
        bg-white
        pt-[155px]
        md:pt-[175px]
      "
    >
      {/* NAVBAR */}
      <div
        className="
          absolute
          left-1/2
          top-[0.7%]
          z-50
          -translate-x-1/2
          scale-[0.5]
          min-[1000px]:scale-[0.75]
          min-[1400px]:scale-100
        "
      >
        <Navbar />
      </div>

      {/* SOFT BACKGROUND */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-260px]
          h-[700px]
          w-[1000px]
          -translate-x-1/2
          rounded-full
          bg-[#0085ff]/[0.045]
          blur-[90px]
        "
      />

      <div
        className="
          relative
          mx-auto
          flex
          max-w-[1600px]
          flex-col
          items-center
          px-5
        "
      >
        {/* BADGE */}
        <div
          className="
            flex
            items-center
            gap-[5px]
            rounded-full
            bg-[#ebe6e0]
            px-[10px]
            py-[4px]
          "
        >
          <span className="h-[6px] w-[6px] rounded-full bg-[#0085ff]" />

          <span
            className="
              text-center
              text-[11.4px]
              leading-[16.8px]
              text-[#231014]
            "
          >
            CRM + Invoicing Infrastructure
          </span>
        </div>

        {/* HEADING */}
        <h1
          className="
            mt-8
            max-w-[850px]
            text-center
            text-[42px]
            font-medium
            leading-[1.05]
            tracking-[-2.7px]
            text-[#231014]
            sm:text-[48px]
            md:text-[51px]
          "
        >
          Never lose a lead again
        </h1>

        {/* DESCRIPTION */}
        <p
          className="
            mt-6
            max-w-[685px]
            text-center
            text-[14px]
            leading-[1.48]
            text-[#635557]
            md:text-[13.2px]
          "
        >
          Capture every enquiry, follow up on time, and move deals through
          your own pipeline.
          <br />
          When you win, the invoice is one click away.
        </p>

        {/* BUTTONS */}
        <div className="mt-7 flex flex-col items-center">
          <div className="flex flex-col gap-[10px] sm:flex-row">
            <BlueButton width="149px">Start Free</BlueButton>

            <button
              type="button"
              className={`
                flex
                h-[49px]
                w-[148px]
                items-center
                justify-center
                rounded-full
                bg-[#e5edf5]
                text-[15.3px]
                font-medium
                text-[#231014]
                ${buttonEffect}
              `}
            >
              Book a Demo
            </button>
          </div>

          <p
            className="
              mt-2
              text-center
              text-[9px]
              leading-[19.6px]
              text-[#635557]
            "
          >
            7-day free trial · No card required · GST-ready · Works on any
            device
          </p>
        </div>

        {/* DASHBOARD */}
        <div
          className="
            relative
            mt-14
            w-full
            max-w-[1258px]
            overflow-hidden
            rounded-[30px]
            border
            border-white
            bg-white
            shadow-[0_20px_70px_rgba(0,133,255,0.10)]
          "
        >
          <img
            src={heroDashboard}
            alt="DataCircles CRM dashboard"
            className="
              block
              h-auto
              w-full
              object-cover
              object-top
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              h-[35%]
              bg-gradient-to-b
              from-transparent
              to-white
            "
          />
        </div>
      </div>

      <PartnerSection />
    </section>
  );
}

/* =========================================================
   PARTNERS
   ========================================================= */

function PartnerSection() {
  const logos = [logo1, logo2, logo3, logo4, logo5];

  return (
    <section className="relative mt-8 bg-white py-12">
      <div
        className="
          mx-auto
          flex
          max-w-[1360px]
          flex-col
          items-center
          px-6
        "
      >
        <p
          className="
            text-center
            text-[14px]
            uppercase
            tracking-[0.5px]
            text-[#666]
          "
        >
          Trusted and used by
        </p>

        <div
          className="
            mt-8
            flex
            w-full
            max-w-[820px]
            items-center
            justify-center
            gap-6
            overflow-hidden
            py-2
          "
        >
          {logos.map((item, index) => (
            <img
              key={index}
              src={item}
              alt=""
              className="
                h-[40px]
                max-w-[195px]
                shrink-0
                object-contain
              "
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROBLEM SECTION
   ========================================================= */

function LeadProblem() {
  const problems = [
    "Enquiries scattered across WhatsApp, email and phone calls",
    "No record of who promised what, and when",
    "Follow-ups that depend entirely on somebody's memory",
    "No clear view of which deals are actually close to closing",
  ];

  return (
    <section
      className="
        mx-auto
        flex
        max-w-[1216px]
        flex-col
        gap-10
        px-6
        py-20
        md:flex-row
        md:items-center
        md:gap-20
        md:px-0
      "
    >
      <div
        className="
          relative
          h-[460px]
          w-full
          shrink-0
          overflow-hidden
          rounded-[16px]
          md:h-[720px]
          md:w-[600px]
        "
      >
        <img
          src={leadImage}
          alt=""
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        />

        <img
          src={leadImageOverlay}
          alt=""
          className="
            absolute
            inset-0
            h-full
            w-full
            rounded-[16px]
            object-cover
          "
        />
      </div>

      <div
        className="
          flex
          min-w-0
          flex-1
          flex-col
          gap-8
        "
      >
        <div className="flex flex-col gap-[14px]">
          <h2
            className="
              text-[30px]
              font-medium
              leading-[1.1]
              tracking-[-2px]
              text-[#2b2c30]
              md:text-[32px]
            "
          >
            Leads don't go cold on purpose.
          </h2>

          <p
            className="
              text-[16px]
              leading-[1.2]
              text-[#707173]
            "
          >
            They slip. An enquiry comes in on WhatsApp, someone means to call
            back on Thursday, and by Monday it's buried under twenty newer
            messages. The lead was never lost because the work was bad. It was
            lost because nobody remembered.
          </p>
        </div>

        <div className="flex flex-col">
          {problems.map((item, index) => (
            <React.Fragment key={item}>
              <div className="h-px w-full bg-[#e0e0e1]" />

              <div className="flex items-start gap-4 py-5">
                <span className="mt-1 text-[18px] text-[#2b2c30]">•</span>

                <p
                  className="
                    text-[18px]
                    leading-[1.2]
                    tracking-[-1px]
                    text-[#2b2c30]
                  "
                >
                  {item}
                </p>
              </div>

              {index === problems.length - 1 && (
                <div className="h-px w-full bg-[#e0e0e1]" />
              )}
            </React.Fragment>
          ))}
        </div>

        <BlueButton width="174px" arrow>
          Explore CRM
        </BlueButton>
      </div>
    </section>
  );
}

/* =========================================================
   FLOW DATA
   THIS IS THE IMPORTANT FIX
   ========================================================= */

const flowTabs = ["Capture", "Convert", "Remember", "Followup"];

const flowData = {
  Capture: {
    pill: "Capture",
    badge: "Lead Capture",
    title: "Every enquiry, in one list.",
    description:
      "Add leads yourself, bring them in from your website forms, or import your existing list from Excel. However the enquiry arrives, it lands in the same place, with the details you need attached.",
    bullets: [
      "Website Forms",
      "Manual Entry",
      "CSV & Excel Import",
      "Custom Fields",
      "Tags",
    ],
    button: "Explore Product",
  },

  Convert: {
    pill: "Convert",
    badge: "The core CRM Promise",
    title: "Your pipeline, Your Stages",
    description:
      "Set the stages your business actually uses, then drag deals across as they progress. See deal values by stage, so you know what's real and what's still hopeful.",
    bullets: [
      "Custom Stages",
      "Deal Values",
      "Multiple Pipelines",
      "Won & Lost Tracking",
    ],
    button: "Explore Deal Management",
  },

  Remember: {
    pill: "Remember",
    badge: "Contact & Companies",
    title: "One record per client, not five scattered notes.",
    description:
      "Every contact sits under the company they work for, with their deals, invoices, tasks, meetings, notes and files in the same place. Anyone on your team can pick up a client cold and know exactly where things stand.",
    bullets: [
      "Companies",
      "Contacts",
      "Files & Notes",
      "Full History",
    ],
    button: "View Company Management",
  },

  Followup: {
    pill: "Followup",
    badge: "Growth & Business",
    title: "The system remembers, so you don't have to.",
    description:
      "Set tasks with priorities, schedule meetings, and see everything due today on one calendar. Rotten deal alerts flag the deals that have gone quiet, before they go cold for good.",
    bullets: [
      "Tasks & Priorities",
      "Meetings",
      "Shared Calendar",
      "Rotten Deal Alerts",
    ],
    button: "Explore CRM",
  },
};

/* =========================================================
   FLOW SECTION
   ========================================================= */

function FlowSection() {
  const [active, setActive] = useState("Capture");

  const content = flowData[active];

  return (
    <section
      className="
        mx-auto
        flex
        max-w-[1216px]
        flex-col
        items-center
        gap-14
        px-6
        py-20
        md:px-0
      "
    >
      {/* SECTION HEADING */}
      <div
        className="
          flex
          w-full
          max-w-[1000px]
          flex-col
          items-center
          gap-8
        "
      >
        <div className="text-center">
          <h2
            className="
              text-[30px]
              font-medium
              tracking-[-2px]
              text-[#2b2c30]
              md:text-[32px]
            "
          >
            Capture every opportunity.
          </h2>

          <p
            className="
              mt-[14px]
              text-[16px]
              leading-[1.2]
              text-[#707173]
            "
          >
            However the enquiry arrives, it lands in the same place.
          </p>
        </div>

        {/* =================================================
            TOP PILLS
            ================================================= */}

        <div
          className="
            flex
            flex-wrap
            items-center
            justify-center
            rounded-full
            border
            border-[#ececec]
            bg-[#f8f8f8]
            p-1
          "
        >
          {flowTabs.map((tab) => (
            <button
              type="button"
              key={tab}
              onClick={() => setActive(tab)}
              aria-pressed={active === tab}
              className={`
                h-10
                min-w-[130px]
                rounded-full
                px-4
                text-[14px]
                transition-all
                duration-300
                ${
                  active === tab
                    ? "bg-[#0085ff] font-medium text-white shadow-[0_3px_10px_rgba(0,133,255,0.18)]"
                    : "text-[#78788d] hover:bg-white hover:text-[#1c1c1d]"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* =================================================
          DYNAMIC CONTENT
          ================================================= */}

      <div
        key={active}
        className="
          flex
          w-full
          flex-col
          items-center
          gap-10
          md:flex-row
          md:gap-12
        "
      >
        {/* LEFT CONTENT */}
        <div className="flex flex-1 flex-col gap-8">
          <div className="flex flex-col gap-6">
            {/* DYNAMIC BADGE */}
            <div
              className="
                flex
                w-fit
                items-center
                gap-2
                rounded-full
                border
                border-[#ececec]
                bg-[#f8f8f8]
                px-3
                py-1.5
              "
            >
              <img
                src={iconLead}
                alt=""
                className="h-5 w-5"
              />

              <span
                className="
                  text-[14px]
                  font-medium
                  text-[#78788d]
                "
              >
                {content.badge}
              </span>
            </div>

            {/* DYNAMIC HEADING + DESCRIPTION */}
            <div>
              <h3
                className="
                  max-w-[570px]
                  text-[34px]
                  font-medium
                  leading-[1.1]
                  tracking-[-1.5px]
                  text-[#1c1c1d]
                  md:text-[40px]
                "
              >
                {content.title}
              </h3>

              <p
                className="
                  mt-4
                  max-w-[569px]
                  text-[16px]
                  leading-[1.4]
                  text-[#78788d]
                "
              >
                {content.description}
              </p>
            </div>
          </div>

          {/* DYNAMIC CHECKLIST */}
          <div className="flex flex-col gap-4">
            {content.bullets.map((item) => (
              <div
                key={`${active}-${item}`}
                className="flex items-center gap-2"
              >
                <CheckIcon />

                <span
                  className="
                    text-[16px]
                    font-medium
                    text-[#1c1c1d]
                  "
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* DYNAMIC BUTTON */}
          <BlueButton width="auto" arrow className="self-start px-5">
            {content.button}
          </BlueButton>
        </div>

        {/* RIGHT FIGMA FRAME */}
        <div
          className="
            relative
            h-[320px]
            w-full
            shrink-0
            overflow-hidden
            rounded-lg
            border
            border-[#ececec]
            bg-[#f8f8f8]
            md:h-[468px]
            md:w-[620px]
          "
        >
          {/* 
            Keep this frame clean.
            The Figma screenshot area is intentionally light.
          */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-[#fafafa]
              via-[#f7f7f7]
              to-[#f3f3f3]
            "
          />
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <img
      src={iconCheck}
      alt=""
      className="h-[22px] w-[22px]"
    />
  );
}

/* =========================================================
   TIMELINE
   ========================================================= */

function TimelineSection() {
  return (
    <section
      className="
        mx-auto
        flex
        max-w-[1216px]
        flex-col
        items-center
        gap-14
        px-6
        py-20
        md:px-0
      "
    >
      <div className="max-w-[728px] text-center">
        <h2
          className="
            text-[30px]
            font-medium
            tracking-[-2px]
            text-[#2b2c30]
            md:text-[32px]
          "
        >
          The full history, in order.
        </h2>

        <p
          className="
            mt-[14px]
            text-[16px]
            leading-[1.2]
            text-[#707173]
          "
        >
          Every call logged, deal moved, invoice raised and payment received
          shows up on one timeline against the client.
        </p>
      </div>

      <div
        className="
          w-full
          overflow-hidden
          rounded-lg
          border
          border-[#ececec]
          bg-white
        "
      >
        <img
          src={timelineImage}
          alt="CRM activity timeline"
          className="
            block
            h-auto
            w-full
            object-cover
          "
        />
      </div>
    </section>
  );
}

/* =========================================================
   CRM MEASUREMENT
   ========================================================= */

function MeasureSection() {
  const tags = [
    "Revenue",
    "Deals won & lost",
    "Average deal size",
    "Pipeline value",
  ];

  return (
    <section
      className="
        mx-auto
        max-w-[1216px]
        px-6
        py-20
        md:px-0
      "
    >
      <div
        className="
          flex
          min-h-[588px]
          flex-col
          overflow-hidden
          rounded-lg
          bg-white
          md:flex-row
        "
      >
        <div
          className="
            flex
            w-full
            flex-col
            justify-between
            py-10
            pr-8
            md:w-[550px]
          "
        >
          <div>
            <p className="text-[16px] font-medium text-[#0085ff]">
              Measure
            </p>

            <h2
              className="
                mt-2
                text-[24px]
                font-semibold
                tracking-[-0.72px]
                text-[#1e1e1e]
              "
            >
              Know what's working
            </h2>

            <p
              className="
                mt-3
                text-[16px]
                leading-6
                text-[#252525]
              "
            >
              Dashboards show revenue, deals closed, average deal size and
              what's sitting in your pipeline. Included on every plan.
            </p>
          </div>

          <div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    rounded-full
                    border
                    border-[rgba(0,133,255,0.3)]
                    bg-[rgba(0,133,255,0.1)]
                    px-4
                    py-2
                    text-[12px]
                    font-semibold
                    text-[#0a55af]
                  "
                >
                  {tag}
                </span>
              ))}
            </div>

            <button
              type="button"
              className="
                mt-8
                text-[16px]
                font-bold
                text-[#0085ff]
                transition-transform
                duration-300
                hover:translate-x-1
              "
            >
              Explore CRM →
            </button>
          </div>
        </div>

        <div
          className="
            min-h-[500px]
            flex-1
            overflow-hidden
          "
        >
          <div className="relative h-full w-full">
            <img
              src={crmImage}
              alt=""
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
            />

            <img
              src={crmImageOverlay}
              alt=""
              className="
                absolute
                left-0
                top-1/2
                w-full
                -translate-y-1/2
                object-cover
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   INVOICE WORKFLOW
   ========================================================= */

const invoiceCards = [
  {
    icon: iconInvoice,
    title: "Negotiations",
    description:
      "Keep the client, deal and commercial details together.",
  },
  {
    icon: iconDeal,
    title: "Deal Won",
    description:
      "Move the successful deal straight into invoicing.",
  },
  {
    icon: iconFeature,
    title: "Quote or Invoice",
    description:
      "Turn the deal into the next step without retyping information.",
  },
  {
    icon: iconPayment,
    title: "Payment Received",
    description:
      "Keep the payment status connected to the original deal.",
  },
];

function InvoiceWorkflow() {
  return (
    <section
      className="
        mx-auto
        max-w-[1280px]
        px-6
        py-20
        md:px-0
      "
    >
      <div
        className="
          flex
          flex-col
          gap-12
          rounded-xl
          bg-[#f3f9fc]
          p-8
          lg:flex-row
          lg:items-center
        "
      >
        <div className="w-full lg:w-[580px]">
          <h2
            className="
              max-w-[480px]
              text-[30px]
              font-medium
              leading-[1.2]
              tracking-[-2px]
              text-[#1c1c1d]
              md:text-[32px]
            "
          >
            Won the deal? The invoice is already half written.
          </h2>

          <div className="mt-6 flex flex-col gap-[18px]">
            <p
              className="
                text-[18px]
                leading-[1.4]
                text-[#78788d]
              "
            >
              This is what a CRM bolted onto a separate billing app can never
              do. The client details, the amount and the line items are already
              in the deal.
            </p>

            <div className="h-px w-full bg-[#bedeef]" />

            <p
              className="
                text-[18px]
                leading-[1.4]
                text-[#78788d]
              "
            >
              Turn it into a quote or a GST invoice without typing any of it
              twice.
            </p>
          </div>

          <button
            type="button"
            className="
              mt-8
              text-[16px]
              font-bold
              text-[#0085ff]
              transition-transform
              duration-300
              hover:translate-x-1
            "
          >
            See How Invoicing Works →
          </button>
        </div>

        <div
          className="
            grid
            flex-1
            grid-cols-1
            gap-5
            sm:grid-cols-2
          "
        >
          {invoiceCards.map((card, index) => (
            <div
              key={card.title}
              className={`
                rounded-2xl
                border
                border-[#ececec]
                bg-white
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_12px_30px_rgba(0,0,0,0.07)]
                ${
                  index % 2 === 1
                    ? "sm:translate-y-[60px]"
                    : ""
                }
              `}
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-[27px]
                  bg-[rgba(0,133,255,0.08)]
                "
              >
                <img
                  src={card.icon}
                  alt=""
                  className="h-5 w-5"
                />
              </div>

              <h3
                className="
                  mt-[18px]
                  text-[20px]
                  font-medium
                  text-[#1c1c1d]
                "
              >
                {card.title}
              </h3>

              <p
                className="
                  mt-2
                  text-[14px]
                  leading-[1.3]
                  text-[#78788d]
                "
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   WORK STYLE
   ========================================================= */

const workPills = [
  "Works on Any Phone",
  "WhatsApp Enquiries",
  "Website Leads",
  "Excel Import",
  "Custom Pipelines",
  "Tasks & Priorities",
  "Meetings",
  "Shared Calendar",
  "GST Invoices",
  "Payment Tracking",
  "Deal Tracking",
  "Team Collaboration",
  "Client History",
  "Files & Notes",
];

function WorkStyle() {
  return (
    <section
      className="
        mx-auto
        flex
        max-w-[1200px]
        flex-col
        items-center
        px-6
        py-20
      "
    >
      <h2
        className="
          text-center
          text-[30px]
          font-medium
          tracking-[-2px]
          text-[#2b2c30]
          md:text-[32px]
        "
      >
        Made for how you already work
      </h2>

      <div
        className="
          mt-14
          flex
          max-w-[1100px]
          flex-wrap
          justify-center
          gap-4
        "
      >
        {workPills.map((pill, index) => (
          <div
            key={`${pill}-${index}`}
            className="
              flex
              items-center
              gap-2.5
              rounded-full
              border
              border-dashed
              border-[#ececec]
              bg-[#f8f8f8]
              px-5
              py-4
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#0085ff]/30
              hover:bg-white
              hover:shadow-[0_8px_20px_rgba(0,133,255,0.07)]
            "
          >
            <img
              src={iconPhone}
              alt=""
              className="h-[18px] w-[18px]"
            />

            <span
              className="
                whitespace-nowrap
                text-[16px]
                text-[#1c1c1d]
              "
            >
              {pill}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   PRICING
   ========================================================= */

const plans = [
  {
    name: "Starter",
    price: "₹199",
    featured: false,
    features: [
      "Full CRM and invoicing",
      "Unlimited invoices",
      "1 pipeline",
      "24x7 Support",
      "Tasks and follow-ups",
      "GST-ready invoicing",
    ],
  },
  {
    name: "Growth",
    price: "₹399",
    featured: true,
    features: [
      "Full CRM and invoicing",
      "Unlimited invoices",
      "Multiple pipelines",
      "24x7 Support",
      "Advanced deal tracking",
      "Team collaboration",
    ],
  },
  {
    name: "Business",
    price: "₹599",
    featured: false,
    features: [
      "Full CRM and invoicing",
      "Unlimited invoices",
      "Multiple pipelines",
      "24x7 Support",
      "Advanced reporting",
      "Priority support",
    ],
  },
];

function PricingCard({ plan }) {
  return (
    <div
      className={`
        relative
        flex
        w-full
        flex-col
        rounded-[20px]
        border
        bg-white
        p-3
        pb-12
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)]
        ${
          plan.featured
            ? "border-2 border-[#0085ff]"
            : "border-[rgba(0,0,0,0.12)]"
        }
      `}
    >
      <div
        className={`
          rounded-xl
          p-5
          ${
            plan.featured
              ? "bg-gradient-to-br from-white to-[#0085ff]/20"
              : "bg-[#fafafa]"
          }
        `}
      >
        <h3
          className="
            text-[20px]
            font-semibold
            text-[#1e1e1e]
          "
        >
          {plan.name}
        </h3>

        <div className="mt-4 flex items-end gap-1.5">
          <span
            className="
              text-[44px]
              font-medium
              leading-[1.2]
              tracking-[-0.72px]
              text-[#1e1e1e]
            "
          >
            {plan.price}
          </span>

          <span
            className="
              mb-1
              text-[16px]
              text-[#252525]
            "
          >
            /User/Month
          </span>
        </div>

        <button
          type="button"
          className="
            mt-4
            flex
            h-10
            w-full
            items-center
            justify-center
            rounded-lg
            bg-[#0085ff]
            text-[14px]
            font-semibold
            text-white
            transition-all
            duration-300
            hover:-translate-y-[1px]
            hover:bg-[#087ce8]
            hover:shadow-[0_7px_18px_rgba(0,133,255,0.2)]
          "
        >
          Get Started
        </button>
      </div>

      <div className="flex flex-col gap-4 px-5 pt-8">
        {plan.features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-2.5"
          >
            <img
              src={iconPricingCheck}
              alt=""
              className="h-6 w-6 shrink-0"
            />

            <span
              className="
                text-[16px]
                font-medium
                text-[#252525]
              "
            >
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Pricing() {
  const [billing, setBilling] = useState("Monthly");

  return (
    <section
      id="pricing"
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-white
        via-[#f7fbff]
        to-white
        px-6
        py-24
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          left-[5%]
          top-[25%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#0085ff]/10
          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[10%]
          right-[5%]
          h-[320px]
          w-[320px]
          rounded-full
          bg-[#0085ff]/10
          blur-[100px]
        "
      />

      <div
        className="
          relative
          mx-auto
          flex
          max-w-[1180px]
          flex-col
          items-center
        "
      >
        <div className="text-center">
          <h2
            className="
              mx-auto
              max-w-[550px]
              text-[32px]
              font-medium
              leading-[1.13]
              tracking-[-1.08px]
              text-[#2b2c30]
              md:text-[35px]
            "
          >
            One price for CRM and invoicing together.
          </h2>

          <p
            className="
              mt-3
              text-[15px]
              leading-6
              text-[#707173]
            "
          >
            Per user, per month, billed yearly. Plus 18% GST. No setup fee,
            no lock-in.
          </p>
        </div>

        <div
          className="
            mt-10
            flex
            items-center
            gap-1.5
            rounded-[10px]
            bg-white
            p-1.5
            shadow-[0_3px_4px_-1.5px_rgba(0,0,0,0.14),0_0_0_1px_rgba(0,0,0,0.06)]
          "
        >
          {["Monthly", "Yearly"].map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setBilling(item)}
              className={`
                rounded-lg
                px-3.5
                py-2
                text-[14px]
                transition-all
                duration-300
                ${
                  billing === item
                    ? "bg-[#0085ff] font-semibold text-white"
                    : "font-medium text-[#1e1e1e] hover:bg-[#f5f5f5]"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>

        <div
          className="
            mt-10
            grid
            w-full
            grid-cols-1
            gap-6
            md:grid-cols-3
          "
        >
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              plan={plan}
            />
          ))}
        </div>

        <p
          className="
            mt-10
            text-center
            text-[15px]
            leading-6
            text-[#707173]
          "
        >
          Every plan starts with a 7-day free trial at full limits. No credit
          card needed.
        </p>
      </div>
    </section>
  );
}

/* =========================================================
   FINAL CTA
   ========================================================= */

function FinalCTA() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-r
        from-[#0a55af]
        to-[#0085ff]
        px-6
        py-20
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[800px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/10
          blur-[90px]
        "
      />

      <div
        className="
          relative
          mx-auto
          flex
          max-w-[900px]
          flex-col
          items-center
          text-center
        "
      >
        <h2
          className="
            text-[34px]
            font-medium
            leading-[1.1]
            text-white
            md:text-[42px]
          "
        >
          Try it on your own leads.
        </h2>

        <p
          className="
            mt-4
            max-w-[662px]
            text-[16px]
            leading-[1.4]
            text-white/90
            md:text-[18px]
          "
        >
          Start free for 7 days at full limits. No credit card needed, and
          our team will help you bring your data across.
        </p>

        <div className="mt-8 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            className="
              h-[42px]
              min-w-[142px]
              rounded-full
              bg-white
              px-4
              text-[14px]
              font-medium
              text-[#014c6c]
              transition-all
              duration-300
              hover:-translate-y-[2px]
              hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)]
            "
          >
            Create Account
          </button>

          <button
            type="button"
            className="
              h-[42px]
              min-w-[136px]
              rounded-full
              border
              border-white
              px-4
              text-[14px]
              font-medium
              text-white
              transition-all
              duration-300
              hover:-translate-y-[2px]
              hover:bg-white
              hover:text-[#0085ff]
            "
          >
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   COMPLETE CRM PAGE
   ========================================================= */

export default function ProductCRM() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <Hero />

      <LeadProblem />

      <FlowSection />

      <TimelineSection />

      <MeasureSection />

      <InvoiceWorkflow />

      <WorkStyle />

      <Pricing />

      <FinalCTA />
    </main>
  );
}