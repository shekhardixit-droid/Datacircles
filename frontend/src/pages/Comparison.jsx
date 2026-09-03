import React from "react";
import { ChevronRight, ArrowRight, Check, X } from "lucide-react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const comparisonRows = [
  {
    feature: "Invoice creation",
    manual: "Create from scratch",
    spreadsheet: "Templates + manual edits",
    datacircles: "Ready-to-use invoice builder",
  },
  {
    feature: "GST calculations",
    manual: "Manual calculation",
    spreadsheet: "Formula dependent",
    datacircles: "Calculated automatically",
  },
  {
    feature: "Payment tracking",
    manual: "Separate tracking",
    spreadsheet: "Manual updates",
    datacircles: "Tracked in one place",
  },
  {
    feature: "Payment reminders",
    manual: "Send manually",
    spreadsheet: "Send manually",
    datacircles: "Automated follow-ups",
  },
  {
    feature: "Customer records",
    manual: "Scattered",
    spreadsheet: "Separate sheet",
    datacircles: "Centralized CRM",
  },
];

const relatedReads = [
  {
    category: "GST & INVOICING",
    title: "What every GST invoice must include",
    description:
      "A simple checklist of the information every compliant GST invoice needs.",
  },
  {
    category: "GETTING PAID",
    title: "How to get clients to pay on time",
    description:
      "Practical ways to reduce late payments and make follow-ups easier.",
  },
  {
    category: "CRM",
    title: "Why your invoice and customer data belong together",
    description:
      "See how connecting customer and payment information simplifies daily work.",
  },
];

export default function Comparison() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white text-black font-['Inter',Arial,Helvetica,sans-serif]">
      {/* Navbar */}
      <div className="absolute left-1/2 top-3 z-50 -translate-x-1/2">
        <Navbar />
      </div>

      {/* ============================================================
          RESOURCE NAVIGATION
         ============================================================ */}
      <nav
        aria-label="Guide sections"
        className="
          absolute
          left-1/2
          z-[100]
          -translate-x-1/2
          overflow-x-auto
          whitespace-nowrap
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
        style={{ top: 92, width: "min(1120px, calc(100% - 64px))" }}
      >
        <div className="flex w-max min-w-full items-center justify-start gap-2">
          <button type="button" className="h-10 shrink-0 rounded-lg border border-[#dce7f0] bg-white px-[18px] text-xs font-semibold leading-[17px] text-[#635557] transition-all duration-200 ease-out hover:border-[#0085ff] hover:bg-[#0085ff] hover:text-white active:translate-y-0 max-[600px]:h-9 max-[600px]:px-[14px] max-[600px]:text-[11px]" onClick={() => navigate("/how-to-guide")}>
            1 · How-To Guide
          </button>

          <button type="button" className="h-10 shrink-0 rounded-lg border border-[#dce7f0] bg-white px-[18px] text-xs font-semibold leading-[17px] text-[#635557] transition-all duration-200 ease-out hover:border-[#0085ff] hover:bg-[#0085ff] hover:text-white active:translate-y-0 max-[600px]:h-9 max-[600px]:px-[14px] max-[600px]:text-[11px]" onClick={() => navigate("/checklist")}>
            2 · Checklist / Explainer
          </button>

          <button type="button" aria-current="page" className="h-10 shrink-0 rounded-lg border border-[#0085ff] bg-[#0085ff] px-[18px] text-xs font-semibold leading-[17px] text-white transition-all duration-200 ease-out hover:border-[#000000] hover:bg-[#000000] active:translate-y-0 max-[600px]:h-9 max-[600px]:px-[14px] max-[600px]:text-[11px]" onClick={() => navigate("/comparison")}>
            3 · Comparison
          </button>

          <button type="button" className="h-10 shrink-0 rounded-lg border border-[#dce7f0] bg-white px-[18px] text-xs font-semibold leading-[17px] text-[#635557] transition-all duration-200 ease-out hover:border-[#0085ff] hover:bg-[#0085ff] hover:text-white active:translate-y-0 max-[600px]:h-9 max-[600px]:px-[14px] max-[600px]:text-[11px]" onClick={() => navigate("/crm-for-audience")}>
            4 · CRM for [audience]
          </button>
        </div>
      </nav>

      {/* ============================================================
          HERO
         ============================================================ */}
      <header className="relative w-full overflow-hidden bg-white">
        <div className="mx-auto w-[min(1100px,calc(100%-64px))] pt-[168px] pb-[70px] max-[900px]:w-[calc(100%-40px)] max-[600px]:w-[calc(100%-24px)] max-[600px]:pt-[132px]">
          <div className="flex items-center whitespace-nowrap text-[12px] font-medium leading-[18px] text-[#635557]">
            <span>Blog</span>
            <ChevronRight size={16} strokeWidth={2} className="mx-1 shrink-0" />
            <span>Comparisons</span>
          </div>

          <div className="mt-6 inline-flex h-[38px] items-center rounded-full bg-[#0085ff] px-[18px] text-[11px] font-semibold uppercase text-white">
            Comparison
          </div>

          <h1 className="mt-[26px] max-w-[920px] text-[clamp(46px,5vw,68px)] font-semibold leading-[1.03] tracking-[-3px] text-black max-[600px]:text-[38px] max-[600px]:leading-[1.08] max-[600px]:tracking-[-1.6px]">
            Excel vs a proper tool: when to make the switch
          </h1>

          <p className="mt-5 max-w-[790px] text-[clamp(17px,1.4vw,21px)] leading-[1.5] text-[#635557] max-[600px]:text-[15px] max-[600px]:leading-[22px]">
            Spreadsheets are free and familiar. Here's exactly when they start costing you more than they save.
          </p>

          <div className="mt-8 flex items-center gap-[14px]">
            <div className="h-12 w-12 shrink-0 rounded-full bg-[#dce7f0]" />
            <div className="flex flex-col gap-[3px]">
              <span className="text-[13px] font-semibold leading-[18px] text-black">
                Author name
              </span>
              <span className="text-[11px] leading-4 text-[#635557]">
                22 Jul 2026 · 5 min read
              </span>
            </div>
          </div>

          <div className="mt-8 h-px w-full bg-[#dce7f0]" />
        </div>
      </header>

      {/* ============================================================
          ARTICLE / COMPARISON
         ============================================================ */}
      <main className="mx-auto w-[min(1100px,calc(100%-64px))] pb-[90px] max-[900px]:w-[calc(100%-40px)] max-[600px]:w-[calc(100%-24px)]">
        {/* Cover */}
        <div
          className="
            w-full
            overflow-hidden
            rounded-[16px]
            border
            border-[#dce7f0]
          "
        >
          <div
            className="
              relative
              aspect-[672/358]
              w-full
            "
          >
            <img
              src="/images/comparison-cover.png"
              alt="Comparison guide cover"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
            />
          </div>
        </div>

        {/* Intro */}
        <section className="mx-auto mt-[48px] w-[min(900px,100%)]">
          

          <p className="mt-[18px] text-[18px] leading-[1.65] text-[#635557] max-[600px]:text-[16px]">
            Spreadsheets can work when your process is small and simple.
            Dedicated invoicing software becomes more useful when invoices,
            customers and payments start moving at the same time.
          </p>
        </section>

        {/* Comparison table */}
<section className="mx-auto mt-[52px] w-full">
  <div
    className="
      overflow-hidden
      rounded-[18px]
      border
      border-[#dce7f0]
      bg-white
    "
  >
    <div className="overflow-x-auto">
      <div className="min-w-[850px]">

        {/* Table Header */}
        <div
          className="
            grid
            grid-cols-[1.25fr_1fr_1fr_1.15fr]
            bg-[#000000]
            text-white
          "
        >
          <div className="px-6 py-6 text-[14px] font-semibold">
            Feature
          </div>

          <div className="px-6 py-6 text-[14px] font-semibold">
            Manual
          </div>

          <div className="px-6 py-6 text-[14px] font-semibold">
            Spreadsheet
          </div>

          {/* Highlighted column */}
          <div className="bg-[#0085ff] px-6 py-6">
            <div className="flex items-center gap-2">
              <span className="text-[14px] font-semibold">
                DataCircles
              </span>

             
            </div>
          </div>
        </div>

        {/* Table Rows */}
        {comparisonRows.map((row, index) => (
         <div
  key={row.feature}
  className="
    group
    grid
    grid-cols-[1.25fr_1fr_1fr_1.15fr]
    border-t
    border-[#dce7f0]
    bg-white
    transition-colors
    duration-200
    hover:bg-[#dce7f0]
  "
>
            {/* Feature */}
            <div
              className="
                flex
                min-h-[82px]
                items-center
                px-6
                py-5
                text-[14px]
                font-semibold
                text-black
              "
            >
              {row.feature}
            </div>

            {/* Manual */}
            <div
              className="
                flex
                min-h-[82px]
                items-center
                gap-3
                border-l
                border-[#dce7f0]
                px-6
                py-5
                text-[14px]
                leading-5
                text-[#635557]
              "
            >
              

              <span>{row.manual}</span>
            </div>

            {/* Spreadsheet */}
            <div
              className="
                flex
                min-h-[82px]
                items-center
                gap-3
                border-l
                border-[#dce7f0]
                px-6
                py-5
                text-[14px]
                leading-5
                text-[#635557]
              "
            >
              

              <span>{row.spreadsheet}</span>
            </div>
{/* DataCircles */}
<div
  className="
    flex
    min-h-[82px]
    items-center
    gap-3
    border-l
    border-[#dce7f0]
    bg-white
    px-6
    py-5
    text-[14px]
    font-semibold
    leading-5
    text-black
    transition-all
    duration-200

    group-hover:bg-[#0085ff]
    group-hover:text-white
    group-hover:border-[#0085ff]
  "
>
  <span
    className="
      flex
      h-7
      w-7
      shrink-0
      items-center
      justify-center
      rounded-full
      bg-[#0085ff]
      text-white
      transition-all
      duration-200

      group-hover:bg-white
      group-hover:text-[#0085ff]
    "
  >
    <Check
      size={14}
      strokeWidth={2.5}
    />
  </span>

  <span>{row.datacircles}</span>
</div>
          </div>
        ))}

        {/* Bottom Highlight */}
        <div
          className="
            flex
            items-center
            justify-between
            gap-6
            border-t
            border-[#dce7f0]
            bg-[#0085ff]
            px-6
            py-5
            text-white
          "
        >
          <div>
            <p className="m-0 text-[13px] font-semibold">
              The simpler way to manage your workflow
            </p>

            <p className="mt-1 m-0 text-[12px] leading-5 text-white">
              Keep invoices, customers and payments together.
            </p>
          </div>

          <button
            type="button"
            className="
              flex
              h-10
              shrink-0
              items-center
              gap-2
              rounded-full
              bg-white
              px-5
              text-[12px]
              font-semibold
              text-[#0085ff]
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-[#000000]
              hover:text-white
              active:translate-y-0
            "
          >
            Get started
            <ArrowRight size={15} />
          </button>
        </div>

      </div>
    </div>
  </div>
</section>
        {/* Pros / cons */}
        <section className="mx-auto mt-[54px] w-[min(900px,100%)]">
          <div className="inline-flex min-h-[32px] items-center rounded-[7px] bg-[#dce7f0] px-3 py-2 text-[11px] font-bold uppercase tracking-[.35px] text-[#0085ff]">
            What changes as you grow
          </div>

          <div className="mt-[22px] grid grid-cols-2 gap-5 max-[700px]:grid-cols-1">
            <article className="rounded-[14px] border border-[#dce7f0] bg-white p-7">
              <h2 className="m-0 text-[24px] font-semibold leading-8 text-black">
                Spreadsheets work when...
              </h2>

              <ul className="mt-5 space-y-4">
                {[
                  "You send only a few invoices.",
                  "One person manages the workflow.",
                  "You are comfortable maintaining formulas.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[15px] leading-6 text-[#635557]"
                  >
                    <Check className="mt-1 shrink-0 text-[#0085ff]" size={17} />
                    {item}
                  </li>
                ))}
              </ul>
            </article>

    <article className="rounded-[14px] border border-[#dce7f0] bg-white p-7">
              <h2 className="-mt-1 text-[24px] font-semibold leading-8 text-black">
                Software makes more sense when...
              </h2>

              <ul className="mt-5 space-y-4">
                {[
                  "Invoices and payments need one source of truth.",
                  "You need consistent GST calculations.",
                  "Someone else needs visibility into customer status.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[15px] leading-6 text-[#635557]"
                  >
                    <Check className="mt-1 shrink-0 text-[#0085ff]" size={17} />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        {/* Verdict */}
        <section className="mx-auto mt-[54px] w-[min(900px,100%)]">
          <div className="rounded-[16px] bg-[#0085ff] px-8 py-8 text-white max-[600px]:px-6">
            

            <h2 className="mt-3 text-[30px] font-semibold leading-9 tracking-[-.7px] text-white">
              Choose the workflow that removes the most manual work.
            </h2>

            <p className="mt-3 max-w-[760px] text-[15px] leading-6 text-white">
              If invoices, customer records and payment follow-ups are already
              becoming difficult to coordinate, a dedicated workflow will
              usually give your team more control.
            </p>
          </div>
        </section>

        {/* Related Reads */}
        <section className="mt-[76px] w-full">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="inline-flex min-h-[32px] items-center rounded-[7px] bg-[#dce7f0] px-3 py-2 text-[11px] font-bold uppercase tracking-[.35px] text-[#0085ff]">
                Related Reads
              </div>

              <h2 className="mt-4 text-[40px] font-semibold leading-[46px] tracking-[-1.6px] text-black max-[600px]:text-[32px] max-[600px]:leading-10">
                More useful guides
              </h2>
            </div>

            <button
              type="button"
              className="flex h-[46px] shrink-0 items-center gap-2 rounded-full border border-[#dce7f0] bg-white px-5 text-[12px] font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0085ff] hover:bg-[#0085ff] hover:text-white max-[600px]:hidden"
            >
              View all
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-5 max-[1000px]:grid-cols-2 max-[650px]:grid-cols-1">
            {relatedReads.map((read) => (
              <article
                key={read.title}
                className="overflow-hidden rounded-[16px] border border-[#dce7f0] bg-white"
              >
                <div className="aspect-[1.5/1] w-full bg-white">
                  <div className="flex h-full items-center justify-center border-b border-[#dce7f0] text-[12px] font-medium text-[#635557]">
                    Related article image
                  </div>
                </div>

                <div className="p-6">
                  <p className="m-0 text-[11px] font-bold uppercase tracking-[.35px] text-[#0085ff]">
                    {read.category}
                  </p>

                  <h3 className="mt-2.5 text-[21px] font-semibold leading-7 tracking-[-.5px] text-black">
                    {read.title}
                  </h3>

                  <p className="mt-2.5 text-[14px] leading-[21px] text-[#635557]">
                    {read.description}
                  </p>

                  <button
                    type="button"
                    className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold text-[#0085ff] transition-all duration-200 hover:text-black"
                  >
                    Read article
                    <ArrowRight size={15} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* ============================================================
          PUT THIS INTO PRACTICE
         ============================================================ */}
      <section className="w-full bg-[#0085ff] px-8 py-[84px] text-center text-white max-[600px]:px-4 max-[600px]:py-[64px]">
       
            <p
          className="
            m-0
            text-[13px]
            font-bold
            uppercase
            tracking-[.4px]
            text-white
          "
        >
          One Dashboard
        </p>

        <h2 className="mt-4 text-[clamp(40px,4vw,58px)] font-semibold leading-[1.05] tracking-[-2px] text-white">
          Put this into Practice
        </h2>

        <p className="mx-auto mt-5 max-w-[700px] text-[16px] leading-6 text-white">
          Compare your current process with a workflow that keeps customers,
          invoices and payments together.
        </p>

        <div className="mt-7 flex justify-center gap-3 max-[600px]:flex-col max-[600px]:items-center">
          <button
            type="button"
            className="h-[50px] rounded-[25px] bg-white px-7 text-[13px] font-semibold text-[#0085ff] transition-all duration-200 hover:-translate-y-0.5 hover:bg-black hover:text-white max-[600px]:w-[190px]"
          >
            Create Account
          </button>

          <button
            type="button"
            className="h-[50px] rounded-[25px] border border-white bg-transparent px-7 text-[13px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[#0085ff] max-[600px]:w-[190px]"
          >
            Book a Demo
          </button>
        </div>
      </section>
    </div>
  );
}
