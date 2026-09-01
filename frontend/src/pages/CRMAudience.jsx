import React from "react";
import { ChevronRight, ArrowRight, Check } from "lucide-react";
import Navbar from "../components/Navbar";

const resourceTabs = [
  "1 · How-To Guide",
  "2 · Checklist / Explainer",
  "3 · Comparison",
  "4 · CRM for [audience]",
];

const relatedReads = [
  {
    category: "GST & INVOICING",
    title: "GST invoice mistakes that cost businesses money",
    description:
      "The small invoice details worth checking before you send a bill.",
  },
  {
    category: "GETTING PAID",
    title: "How to get clients to pay on time",
    description:
      "Simple payment habits that help reduce late-payment follow-ups.",
  },
  {
    category: "INVOICING",
    title: "What to put on every professional invoice",
    description:
      "The essential information customers need to understand and pay your bill.",
  },
];

const workflowItems = [
  {
    title: "Every lead stays in one place",
    description:
      "Keep customer details, conversations and next steps together instead of jumping between WhatsApp, email and spreadsheets.",
  },
  {
    title: "Follow-ups become visible",
    description:
      "Know which prospect needs attention, what has already happened and what your team should do next.",
  },
  {
    title: "Customer history stays connected",
    description:
      "See the relationship from first conversation through proposal, invoice and payment without rebuilding the context.",
  },
  {
    title: "Your team works from the same information",
    description:
      "Give everyone one clear view of customer status so work does not depend on one person's memory or spreadsheet.",
  },
];

export default function CRMAudience() {
  return (
    <div
      className="
        min-h-screen
        w-full
        overflow-x-hidden
        bg-white
        font-['Inter',Arial,Helvetica,sans-serif]
        text-black
      "
    >
      {/* Navbar */}
      <div
        className="
          absolute
          left-1/2
          top-3
          z-50
          -translate-x-1/2
        "
      >
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
          top-[88px]
          z-[100]
          w-[min(1100px,calc(100%-48px))]
          -translate-x-1/2
          overflow-x-auto
          whitespace-nowrap
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
          {resourceTabs.map((tab, index) => {
            const active = index === 3;

            return (
              <button
                key={tab}
                type="button"
                aria-current={active ? "page" : undefined}
                className={`
                  flex
                  h-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  border
                  px-[18px]
                  text-xs
                  font-semibold
                  leading-[17px]
                  transition-all
                  duration-200
                  ease-out
                  hover:-translate-y-0.5
                  active:translate-y-0
                  max-[600px]:h-9
                  max-[600px]:px-[14px]
                  max-[600px]:text-[11px]
                  ${
                    active
                      ? `
                        border-[#0085ff]
                        bg-[#0085ff]
                        text-white
                        hover:border-[#000000]
                        hover:bg-[#000000]
                        hover:text-white
                      `
                      : `
                        border-[#dce7f0]
                        bg-white
                        text-[#635557]
                        hover:border-[#0085ff]
                        hover:bg-[#0085ff]
                        hover:text-white
                      `
                  }
                `}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </nav>

      {/* ============================================================
          HERO
         ============================================================ */}
      <header
        className="
          relative
          w-full
          overflow-hidden
          bg-white
        "
      >
        <div
          className="
            mx-auto
            w-[min(1100px,calc(100%-64px))]
            pb-[70px]
            pt-[168px]
            max-[900px]:w-[calc(100%-40px)]
            max-[600px]:w-[calc(100%-24px)]
            max-[600px]:pt-[132px]
          "
        >
          {/* Breadcrumb */}
          <div
            className="
              flex
              items-center
              whitespace-nowrap
              text-[12px]
              font-medium
              leading-[18px]
              text-[#635557]
            "
          >
            <span>Blog</span>

            <ChevronRight
              size={16}
              strokeWidth={2}
              className="
                mx-1
                shrink-0
              "
            />

            <span>Winning customers</span>
          </div>

          {/* Category */}
          <div
            className="
              mt-6
              inline-flex
              h-[38px]
              items-center
              rounded-full
              bg-[#0085ff]
              px-[18px]
              text-[11px]
              font-semibold
              uppercase
              text-white
            "
          >
            CRM for [audience]
          </div>

          {/* Title */}
          <h1
            className="
              mt-[26px]
              max-w-[920px]
              text-[clamp(46px,5vw,68px)]
              font-semibold
              leading-[1.03]
              tracking-[-3px]
              text-black
              max-[600px]:text-[38px]
              max-[600px]:leading-[1.08]
              max-[600px]:tracking-[-1.6px]
            "
          >
            CRM for agencies: what it actually does for you
          </h1>

          {/* Description */}
          <p
            className="
              mt-5
              max-w-[790px]
              text-[clamp(17px,1.4vw,21px)]
              leading-[1.5]
              text-[#635557]
              max-[600px]:text-[15px]
              max-[600px]:leading-[22px]
            "
          >
            Spreadsheets and WhatsApp can work for a while. A CRM gives an
            agency one clear place to manage leads, customers, follow-ups and
            payments as the work grows.
          </p>

          {/* Author */}
          <div
            className="
              mt-8
              flex
              items-center
              gap-[14px]
            "
          >
            <div
              className="
                h-12
                w-12
                shrink-0
                rounded-full
                bg-[#dce7f0]
              "
            />

            <div
              className="
                flex
                flex-col
                gap-[3px]
              "
            >
              <span
                className="
                  text-[13px]
                  font-semibold
                  leading-[18px]
                  text-black
                "
              >
                Author name
              </span>

              <span
                className="
                  text-[11px]
                  leading-4
                  text-[#635557]
                "
              >
                22 Jul 2026 · 5 min read
              </span>
            </div>
          </div>

          <div
            className="
              mt-8
              h-px
              w-full
              bg-[#dce7f0]
            "
          />
        </div>
      </header>

      {/* ============================================================
          ARTICLE
         ============================================================ */}
      <main
        className="
          mx-auto
          w-[min(1100px,calc(100%-64px))]
          pb-[90px]
          max-[900px]:w-[calc(100%-40px)]
          max-[600px]:w-[calc(100%-24px)]
        "
      >
        {/* Cover */}
        <div
          className="
            w-full
            overflow-hidden
            rounded-[16px]
            border
            border-[#dce7f0]
            bg-white
          "
        >
          <div
            className="
              relative
              aspect-[672/358]
              w-full
          "
          >
            <div
              className="
                flex
                h-full
                w-full
                items-center
                justify-center
                text-[15px]
                font-medium
                text-[#635557]
              "
            >
              Cover image
            </div>
          </div>
        </div>

        {/* Intro */}
        <section
          className="
            mx-auto
            mt-[48px]
            w-[min(900px,100%)]
          "
        >
          <p
            className="
              text-[18px]
              leading-[1.65]
              text-[#635557]
              max-[600px]:text-[16px]
            "
          >
            If your agency is managing leads in chats, customer information in
            spreadsheets and payments somewhere else, the problem is not that
            you need more tools. You need the right information connected.
          </p>
        </section>

        {/* Audience pain */}
        <section
          className="
            mx-auto
            mt-[54px]
            w-[min(900px,100%)]
          "
        >
          <div
            className="
              inline-flex
              min-h-[32px]
              items-center
              rounded-[7px]
              bg-[#dce7f0]
              px-3
              py-2
              text-[11px]
              font-bold
              uppercase
              tracking-[.35px]
              text-[#0085ff]
            "
          >
            The agency problem
          </div>

          <h2
            className="
              mt-5
              text-[30px]
              font-semibold
              leading-9
              tracking-[-.7px]
              text-black
              max-[600px]:text-[25px]
              max-[600px]:leading-8
            "
          >
            Your customer information should not live in five places.
          </h2>

          <p
            className="
              mt-3
              text-[16px]
              leading-6
              text-[#635557]
              max-[600px]:text-[15px]
            "
          >
            When a lead moves from conversation to proposal to invoice, every
            handoff creates another opportunity for something to get missed.
          </p>
        </section>

        {/* Workflow cards */}
        <section
          className="
            mx-auto
            mt-[54px]
            w-[min(900px,100%)]
          "
        >
          <div
            className="
              inline-flex
              min-h-[32px]
              items-center
              rounded-[7px]
              bg-[#dce7f0]
              px-3
              py-2
              text-[11px]
              font-bold
              uppercase
              tracking-[.35px]
              text-[#0085ff]
            "
          >
            What changes with a CRM
          </div>

          <div
            className="
              mt-[22px]
              grid
              grid-cols-2
              gap-5
              max-[700px]:grid-cols-1
            "
          >
            {workflowItems.map((item) => (
              <article
                key={item.title}
                className="
                  rounded-[14px]
                  border
                  border-[#dce7f0]
                  bg-white
                  p-7
                  transition-all
                  duration-200
                  ease-out
                  hover:-translate-y-1
                  hover:border-[#0085ff]
                  hover:bg-[#dce7f0]
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0085ff]
                    text-white
                  "
                >
                  <Check
                    size={18}
                    strokeWidth={2.5}
                  />
                </div>

                <h3
                  className="
                    mt-5
                    text-[22px]
                    font-semibold
                    leading-7
                    tracking-[-.5px]
                    text-black
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-[15px]
                    leading-6
                    text-[#635557]
                  "
                >
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Verdict */}
        <section
          className="
            mx-auto
            mt-[54px]
            w-[min(900px,100%)]
          "
        >
          <div
            className="
              rounded-[16px]
               bg-[#0085ff]
              px-8
              py-8
              text-white
              max-[600px]:px-6
            "
          >
            

            <h2
              className="
                mt-3
                text-[30px]
                font-semibold
                leading-9
                tracking-[-.7px]
                text-white
              "
            >
              A CRM should remove admin, not create more of it.
            </h2>

            <p
              className="
                mt-3
                max-w-[760px]
                text-[15px]
                leading-6
                text-white
              "
            >
              For an agency, the value is simple: one place to know who your
              customers are, where each opportunity stands and what needs to
              happen next.
            </p>
          </div>
        </section>

        {/* Related Reads */}
        <section
          className="
            mt-[76px]
            w-full
          "
        >
          <div
            className="
              flex
              items-end
              justify-between
              gap-6
            "
          >
            <div>
              <div
                className="
                  inline-flex
                  min-h-[32px]
                  items-center
                  rounded-[7px]
                  bg-[#dce7f0]
                  px-3
                  py-2
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[.35px]
                  text-[#0085ff]
                "
              >
                Related Reads
              </div>

              <h2
                className="
                  mt-4
                  text-[40px]
                  font-semibold
                  leading-[46px]
                  tracking-[-1.6px]
                  text-black
                  max-[600px]:text-[32px]
                  max-[600px]:leading-10
                "
              >
                More useful guides
              </h2>
            </div>

            <button
              type="button"
              className="
                flex
                h-[46px]
                shrink-0
                items-center
                gap-2
                rounded-full
                border
                border-[#dce7f0]
                bg-white
                px-5
                text-[12px]
                font-semibold
                text-black
                transition-all
                duration-200
                ease-out
                hover:-translate-y-0.5
                hover:border-[#0085ff]
                hover:bg-[#0085ff]
                hover:text-white
                max-[600px]:hidden
              "
            >
              View all

              <ArrowRight
                size={16}
              />
            </button>
          </div>

          <div
            className="
              mt-8
              grid
              grid-cols-3
              gap-5
              max-[1000px]:grid-cols-2
              max-[650px]:grid-cols-1
            "
          >
            {relatedReads.map((read) => (
              <article
                key={read.title}
                className="
                  overflow-hidden
                  rounded-[16px]
                  border
                  border-[#dce7f0]
                  bg-white
                "
              >
                <div
                  className="
                    flex
                    aspect-[1.5/1]
                    w-full
                    items-center
                    justify-center
                    bg-white
                  "
                >
                  <span
                    className="
                      text-[12px]
                      font-medium
                      text-[#635557]
                    "
                  >
                    Related article image
                  </span>
                </div>

                <div
                  className="
                    p-6
                  "
                >
                  <p
                    className="
                      m-0
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[.35px]
                      text-[#0085ff]
                    "
                  >
                    {read.category}
                  </p>

                  <h3
                    className="
                      mt-2.5
                      text-[21px]
                      font-semibold
                      leading-7
                      tracking-[-.5px]
                      text-black
                    "
                  >
                    {read.title}
                  </h3>

                  <p
                    className="
                      mt-2.5
                      text-[14px]
                      leading-[21px]
                      text-[#635557]
                    "
                  >
                    {read.description}
                  </p>

                  <button
                    type="button"
                    className="
                      mt-5
                      inline-flex
                      items-center
                      gap-2
                      text-[12px]
                      font-semibold
                      text-[#0085ff]
                      transition-all
                      duration-200
                      ease-out
                      hover:-translate-y-0.5
                      hover:text-black
                    "
                  >
                    Read article

                    <ArrowRight
                      size={15}
                    />
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
      <section
        className="
          w-full
          bg-[#0085ff]
          px-8
          py-[84px]
          text-center
          text-white
          max-[600px]:px-4
          max-[600px]:py-[64px]
        "
      >
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

        <h2
          className="
            mt-4
            text-[clamp(40px,4vw,58px)]
            font-semibold
            leading-[1.05]
            tracking-[-2px]
            text-white
          "
        >
          Put this into Practice
        </h2>

        <p
          className="
            mx-auto
            mt-5
            max-w-[700px]
            text-[16px]
            leading-6
            text-white
          "
        >
          Keep leads, customers, follow-ups, invoices and payments connected
          in one workflow built for your business.
        </p>

        <div
          className="
            mt-7
            flex
            justify-center
            gap-3
            max-[600px]:flex-col
            max-[600px]:items-center
          "
        >
          <button
            type="button"
            className="
              h-[50px]
              rounded-[25px]
              bg-white
              px-7
              text-[13px]
              font-semibold
              text-[#0085ff]
              transition-all
              duration-200
              ease-out
              hover:-translate-y-0.5
              hover:bg-black
              hover:text-white
              max-[600px]:w-[190px]
            "
          >
            Create Account
          </button>

          <button
            type="button"
            className="
              h-[50px]
              rounded-[25px]
              border
              border-white
              bg-transparent
              px-7
              text-[13px]
              font-semibold
              text-white
              transition-all
              duration-200
              ease-out
              hover:-translate-y-0.5
              hover:bg-white
              hover:text-[#0085ff]
              max-[600px]:w-[190px]
            "
          >
            Book a Demo
          </button>
        </div>
      </section>
    </div>
  );
}
