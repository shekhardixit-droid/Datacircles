import React from "react";
import { ChevronRight, Check, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";

const checklistItems = [
  "Supplier and recipient details",
  "Unique invoice number and invoice date",
  "HSN / SAC code for every item",
  "Taxable value and applicable GST rate",
  "CGST, SGST or IGST amounts",
  "Place of supply and reverse-charge details",
];

const relatedReads = [
  {
    category: "GST & INVOICING",
    title: "GST invoice mistakes that cost businesses money",
    description: "The small invoice details worth checking before you send a bill.",
  },
  {
    category: "GETTING PAID",
    title: "How to get clients to pay on time",
    description: "Simple payment habits that help reduce late-payment follow-ups.",
  },
  {
    category: "INVOICING",
    title: "What to put on every professional invoice",
    description: "The essential information customers need to understand and pay your bill.",
  },
];

const faqItems = [
  "What is the most important field on a GST invoice?",
  "Do all GST invoices need HSN or SAC codes?",
  "When should I use CGST and SGST instead of IGST?",
];

export default function ChecklistExplainer() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white text-[#000000] font-['Inter',Arial,Helvetica,sans-serif]">
      {/* Navbar */}
      <div className="absolute left-1/2 top-3 z-50 -translate-x-1/2">
        <Navbar />
      </div>

      {/* TOP RESOURCE NAVIGATION */}
      <nav
        aria-label="Guide sections"
        className="
          absolute
          left-1/2
          top-[88px]
          z-[100]
          w-[min(1100px,calc(100%-48px))]
          -translate-x-1/2
          overflow-x-auto
          overscroll-x-contain
          whitespace-nowrap
          rounded-[10px]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
          max-[900px]:top-[82px]
          max-[900px]:w-[calc(100%-32px)]
          max-[600px]:top-[78px]
          max-[600px]:w-[calc(100%-24px)]
        "
      >
        <div
          className="
            flex
            w-max
            min-w-full
            items-center
            justify-center
            gap-2
            max-[900px]:justify-start
          "
        >
          {/* How-To Guide */}
          <button
            type="button"
            className="
              group
              flex
              h-10
              shrink-0
              items-center
              justify-center
              rounded-lg
              border
              border-[#dce7f0]
              bg-white
              px-[18px]
              text-xs
              font-semibold
              leading-[17px]
              text-[#635557]
              transition-all
              duration-200
              ease-out
             
              hover:border-[#0085ff]
              hover:bg-[#0085ff]
              hover:text-white
              active:translate-y-0
              max-[600px]:h-9
              max-[600px]:px-[14px]
              max-[600px]:text-[11px]
            "
          >
            1 · How-To Guide
          </button>

          {/* Checklist / Explainer - ACTIVE */}
          <button
            type="button"
            aria-current="page"
            className="
              flex
              h-10
              shrink-0
              items-center
              justify-center
              rounded-lg
              border
              
              bg-[#0085ff]
              px-[18px]
              text-xs
              font-semibold
              leading-[17px]
              text-white
              transition-all
              duration-200
              ease-out
             
              hover:border-[#000000]
              
              hover:text-white
              active:translate-y-0
              max-[600px]:h-9
              max-[600px]:px-[14px]
              max-[600px]:text-[11px]
            "
          >
            2 · Checklist / Explainer
          </button>

          {/* Comparison */}
          <button
            type="button"
            className="
              flex
              h-10
              shrink-0
              items-center
              justify-center
              rounded-lg
              border
              border-[#dce7f0]
              bg-white
              px-[18px]
              text-xs
              font-semibold
              leading-[17px]
              text-[#635557]
              transition-all
              duration-200
              ease-out
              
              hover:border-[#0085ff]
              hover:bg-[#0085ff]
              hover:text-white
              active:translate-y-0
              max-[600px]:h-9
              max-[600px]:px-[14px]
              max-[600px]:text-[11px]
            "
          >
            3 · Comparison
          </button>

          {/* CRM */}
          <button
            type="button"
            className="
              flex
              h-10
              shrink-0
              items-center
              justify-center
              rounded-lg
              border
              border-[#dce7f0]
              bg-white
              px-[18px]
              text-xs
              font-semibold
              leading-[17px]
              text-[#635557]
              transition-all
              duration-200
              ease-out
             
              hover:border-[#0085ff]
              hover:bg-[#0085ff]
              hover:text-white
              active:translate-y-0
              max-[600px]:h-9
              max-[600px]:px-[14px]
              max-[600px]:text-[11px]
            "
          >
            4 · CRM for [audience]
          </button>
        </div>
      </nav>

      {/* ============================================================
          HERO
         ============================================================ */}
      <header className="relative w-full overflow-hidden bg-gradient-to-b from-white via-white via-[34%] to-[#ffffff]">
        <div className="mx-auto w-[min(1100px,calc(100%-64px))] max-[900px]:w-[calc(100%-40px)] max-[600px]:w-[calc(100%-24px)] pt-[168px] pb-[64px] max-[900px]:pt-[150px] max-[600px]:pt-[132px] max-[700px]:pt-[140px] max-[700px]:w-[calc(100%-32px)] max-[700px]:pt-[140px]">
          {/* Breadcrumb */}
          <div className="flex items-center whitespace-nowrap text-[12px] font-medium leading-[18px] text-[#635557] max-[700px]:text-[11px]">
            <span>Blog</span>
            <ChevronRight size={16} strokeWidth={2} className="mx-1 shrink-0" />
            <span>GST &amp; Invoicing</span>
          </div>

          {/* Category */}
          <div className="mt-6 inline-flex h-[38px] items-center rounded-full bg-[#0085ff] px-[18px] text-[11px] font-semibold uppercase tracking-[.2px] text-white">
            Checklist / Explainer
          </div>

          {/* Title */}
          <h1 className="mt-[26px] max-w-[920px] text-[clamp(46px,5vw,68px)] font-semibold leading-[1.03] tracking-[-3px] text-[#000000] max-[700px]:text-[38px] max-[700px]:leading-[1.08] max-[700px]:tracking-[-1.6px]">
            What every GST invoice must include
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-[790px] text-[clamp(17px,1.4vw,21px)] leading-[1.5] text-[#635557] max-[700px]:text-[15px] max-[700px]:leading-[22px]">
            Miss one field and your client can lose their input tax credit.
            Here&apos;s the full checklist, in plain language.
          </p>

          {/* Author */}
          <div className="mt-8 flex items-center gap-[14px]">
            <div className="h-12 w-12 shrink-0 rounded-full bg-[#dce7f0]" />
            <div className="flex flex-col gap-[3px]">
              <span className="text-[13px] font-semibold leading-[18px] text-[#000000]">
                Author name
              </span>
              <span className="text-[11px] leading-4 text-[#635557]">
                22 Jul 2026 · 4 min read
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* ============================================================
          ARTICLE
         ============================================================ */}
      <main className="mx-auto w-[min(1100px,calc(100%-64px))] pb-[90px] max-[700px]:w-[calc(100%-32px)]">
        {/* Cover */}
       <div className="w-full overflow-hidden rounded-[16px] border border-[#dce7f0]">
  <div className="relative aspect-[672/358] w-full">
    <img
      src="/images/comparison-cover.png"
      alt="Comparison guide cover"
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>
</div>

        {/* Intro */}
        <section className="mx-auto mt-[48px] w-[min(900px,100%)]">
          

          <p className="mt-[18px] text-[18px] leading-[1.65] text-[#635557] max-[700px]:text-[16px]">
            A GST invoice is more than a bill. It contains the information
            your customer and your business need to record the transaction
            correctly and claim eligible input tax credit.
          </p>
        </section>

        {/* Checklist */}
        <section className="mx-auto mt-[50px] w-[min(900px,100%)]">
         

          <div className="mt-[22px] grid grid-cols-2 gap-4 max-[700px]:grid-cols-1">
            {checklistItems.map((item, index) => (
              <div
                key={item}
                className="flex min-h-[76px] items-center gap-4 rounded-[12px] border border-[#dce7f0] bg-white px-5 py-4 shadow-[0_2px_10px_#ffffff]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0085ff] text-white">
                  <Check size={18} strokeWidth={2.6} />
                </span>

                <div>
                  <p className="m-0 text-[15px] font-semibold leading-5 text-[#000000]">
                    {item}
                  </p>
                  <span className="mt-1 block text-[11px] leading-4 text-[#635557]">
                    Checklist item {index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Explainer */}
        <section className="mx-auto mt-[52px] w-[min(900px,100%)]">
          

          <div className="mt-[26px] grid grid-cols-2 gap-5 max-[700px]:grid-cols-1">
            <article className="rounded-[14px] border border-[#dce7f0] bg-[#ffffff] p-[26px]">
              <h2 className="m-0 text-[23px] font-semibold leading-7 tracking-[-.5px] text-[#000000]">
                Taxable value
              </h2>
              <p className="mt-3 text-[15px] leading-6 text-[#635557]">
                The value on which GST is calculated before adding the
                applicable tax amount.
              </p>
            </article>

            <article className="rounded-[14px] border border-[#dce7f0] bg-[#ffffff] p-[26px]">
              <h2 className="m-0 text-[23px] font-semibold leading-7 tracking-[-.5px] text-[#000000]">
                Place of supply
              </h2>
              <p className="mt-3 text-[15px] leading-6 text-[#635557]">
                The place that determines whether the transaction attracts
                CGST + SGST or IGST.
              </p>
            </article>
          </div>

          <div className="mt-5 rounded-[14px] border border-[#0085ff] bg-[#ffffff] px-7 py-6">
            <p className="m-0 text-[13px] font-bold uppercase tracking-[.3px] text-[#0085ff]">
              In plain terms
            </p>
            <p className="mt-2 m-0 text-[16px] leading-6 text-[#635557]">
              The easiest way to stay compliant is to make every required
              field visible before the invoice reaches your customer.
            </p>
          </div>
        </section>

        {/* Tool tie-in */}
        <section className="mx-auto mt-[52px] w-[min(900px,100%)]">
         

          <div className="mt-[22px] rounded-[16px] bg-[#0085ff] px-[34px] py-[30px] max-[700px]:px-6">
            <h2 className="m-0 text-[27px] font-semibold leading-8 text-white">
              Make a GST-ready invoice in seconds.
            </h2>

            <p className="mt-2 max-w-[720px] text-[15px] leading-6 text-white/90">
              Our free GST Invoice Generator fills in every field on this
              checklist for you. No sign-up, no watermark.
            </p>

            <button
              type="button"
              className="mt-5 inline-flex h-[48px] items-center gap-2 rounded-[24px] bg-white px-6 text-[13px] font-semibold text-[#0085ff]"
            >
              Open the free tool
              <ArrowRight size={16} />
            </button>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto mt-[52px] w-[min(900px,100%)]">
         

          <div className="mt-[22px] divide-y divide-[#dce7f0] rounded-[14px] border border-[#dce7f0] bg-white">
            {faqItems.map((question) => (
              <button
                type="button"
                key={question}
                className="flex min-h-[68px] w-full items-center justify-between gap-5 px-6 text-left text-[15px] font-semibold leading-5 text-[#000000]"
              >
                <span>{question}</span>
                <ChevronRight size={19} className="shrink-0 text-[#0085ff]" />
              </button>
            ))}
          </div>
        </section>
      </main>

      {/* ============================================================
          RELATED READS
         ============================================================ */}
      <section
        id="related-reads"
        className="w-full bg-white px-8 py-[82px] max-[700px]:px-4 max-[700px]:py-[58px]"
      >
        <div className="mx-auto w-[min(1100px,100%)]">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="inline-flex min-h-[32px] items-center rounded-[7px] bg-[#dce7f033] px-3 py-2 text-[11px] font-bold uppercase tracking-[.35px] text-[#0085ff]">
                Related Reads
              </div>

              <h2 className="mt-4 text-[40px] font-semibold leading-[46px] tracking-[-1.6px] text-[#000000] max-[700px]:text-[32px] max-[700px]:leading-10">
                More useful guides
              </h2>
            </div>

            <button
              type="button"
              className="flex h-[46px] shrink-0 items-center gap-2 rounded-full border border-[#dce7f0] bg-white px-5 text-[12px] font-semibold text-[#000000] max-[700px]:hidden"
            >
              View all
              <ArrowRight size={16} className="text-[#0085ff]" />
            </button>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-5 max-[1000px]:grid-cols-2 max-[700px]:grid-cols-1">
            {relatedReads.map((read) => (
              <article
                key={read.title}
                className="overflow-hidden rounded-[16px] border border-[#dce7f0] bg-white"
              >
                <div className="flex aspect-[1.5/1] w-full items-center justify-center bg-[#ffffff]">
                  <span className="text-[12px] font-medium text-[#635557]">
                    Related article image
                  </span>
                </div>

                <div className="p-6">
                  <p className="m-0 text-[11px] font-bold uppercase tracking-[.35px] text-[#0085ff]">
                    {read.category}
                  </p>

                  <h3 className="mt-2.5 text-[22px] font-semibold leading-[29px] tracking-[-.5px] text-[#000000]">
                    {read.title}
                  </h3>

                  <p className="mt-2.5 text-[14px] leading-[21px] text-[#635557]">
                    {read.description}
                  </p>

                  <button
                    type="button"
                    className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold text-[#0085ff]"
                  >
                    Read article
                    <ArrowRight size={15} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex justify-end gap-2">
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#000000] text-white"
              aria-label="Previous related read"
            >
              ←
            </button>

            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#000000] text-white"
              aria-label="Next related read"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================
          PRACTICE / CTA
         ============================================================ */}
      <section className="w-full bg-[#0085ff] px-8 py-[84px] text-center text-white max-[700px]:px-4 max-[700px]:py-[64px]">
       
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

        <p className="mx-auto mt-5 max-w-[700px] text-[16px] leading-6 text-white/90">
          Keep your invoices, GST details and payment follow-ups in one place.
          Start free and spend less time checking whether every field is right.
        </p>

        <div className="mt-7 flex justify-center gap-3 max-[700px]:flex-col max-[700px]:items-center">
          <button
            type="button"
            className="h-[50px] rounded-[25px] bg-white px-7 text-[13px] font-semibold text-[#0085ff] max-[700px]:w-[190px]"
          >
            Create Account
          </button>

          <button
            type="button"
            className="h-[50px] rounded-[25px] border border-white bg-transparent px-7 text-[13px] font-semibold text-white max-[700px]:w-[190px]"
          >
            Book a Demo
          </button>
        </div>
      </section>
    </div>
  );
}
