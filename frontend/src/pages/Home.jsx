import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrustedAndUsedBy from "../components/TrustedAndUsedBy";
import PricingSection from "../components/PricingSection";

const HERO_IMAGE =
  "https://res.cloudinary.com/tpxo8m6a/image/upload/v1787977676/Dashboard_IMG.png";

const SHARED_BUSINESS_IMAGE =
  "https://res.cloudinary.com/tpxo8m6a/image/upload/v1787762725/e1b401cb4e4c9b406541ebaf104107c3180075c3.png";

const SECTION6_CRM_IMAGE = "";
const SECTION6_INVOICING_IMAGE = "";
const SECTION6_PAYMENTS_IMAGE = "";

const SECTION7_IMAGE_1 = "";
const SECTION7_IMAGE_2 = "";
const SECTION7_IMAGE_3 = "";

const SECTION7_VIDEO_1 = "";
const SECTION7_VIDEO_2 = "";
const SECTION7_VIDEO_3 = "";

const LAST_SECTION_IMAGE =
  "https://res.cloudinary.com/tpxo8m6a/image/upload/v1787996595/Dashboard_IMG_2.png";

const pillClass =
  "rounded-full border border-[#75B9FF] bg-[#EAF5FF] px-[16px] py-[7px] text-[12px] font-medium leading-[16px] text-[#0069D9]";

const FlowStep = ({ number, title }) => (
  <div className="relative flex min-h-[175px] flex-col items-center text-center">
    <div className="relative flex h-[64px] w-full items-center justify-center">
      <div className="relative z-10 flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#0A5AFE] text-[20px] font-semibold text-white">
        {number}
      </div>
    </div>
    <div className="mt-[8px] text-[20px] font-semibold leading-[22px] text-[#2B2C30]">
      {title}
    </div>
    <p className="m-0 mt-[8px] w-[384px] max-w-full text-center text-[16px] font-normal leading-[19.2px] text-[#707173]">
      We understand your business goals, study your audience behavior, and
      analyze existing data to uncover real growth opportunities.
    </p>
  </div>
);

const FeaturePills = ({ items }) => (
  <div className="mt-[18px] flex w-full flex-wrap gap-[8px]">
    {items.map((item) => (
      <span key={item} className={pillClass}>
        {item}
      </span>
    ))}
  </div>
);

const ProductFeature = ({ image, alt, title, description, items, last = false }) => (
  <>
    <div
      className="h-[300px] w-full overflow-hidden rounded-[8px] bg-[#EAEAEA]"
    >
      {image && (
        <img src={image} alt={alt} className="block h-full w-full object-cover" />
      )}
    </div>

    <div className={`w-full pt-[21px] ${last ? "pb-[40px]" : ""}`}>
      <h2 className="m-0 text-[24px] font-semibold leading-[29px] tracking-[-0.6px] text-[#242424]">
        {title}
      </h2>
      <p className="m-0 mt-[12px] w-full text-[16px] font-normal leading-[24px] text-[#303030]">
        {description}
      </p>
      <FeaturePills items={items} />
    </div>
  </>
);

function Section7() {
  const videosRef = useRef(null);

  useEffect(() => {
    const container = videosRef.current;
    if (!container) return;

    const middleVideo = container.querySelector("[data-middle-video]");
    if (!middleVideo) return;

    container.scrollLeft =
      middleVideo.offsetLeft -
      (container.clientWidth - middleVideo.offsetWidth) / 2;
  }, []);

  const imageCards = [
    {
      image: SECTION7_IMAGE_1,
      title: "Bring your data across",
      description:
        "Send us your client list from Excel or Tally, and our team helps you import it properly.",
    },
    {
      image: SECTION7_IMAGE_2,
      title: "Set up your pipeline",
      description:
        "Use the stages your business actually works in, and add your team when you're ready.",
    },
    {
      image: SECTION7_IMAGE_3,
      title: "Start winning and billing",
      description:
        "Chase leads, send GST invoices, and watch the payments land in one place.",
    },
  ];

  const videos = [SECTION7_VIDEO_1, SECTION7_VIDEO_2, SECTION7_VIDEO_3];

  return (
    <section className="w-full overflow-hidden bg-black font-inter text-white">
      <div className="mx-auto w-full max-w-[1440px] py-[126px] max-[1024px]:py-[90px] max-[768px]:py-[72px]">
        {/* TOP CONTENT */}
        <div className="flex items-start justify-between gap-10 px-[108px] max-[1024px]:px-[48px] max-[768px]:flex-col max-[768px]:px-6">
          <div className="w-[620px] max-w-full">
            <h2 className="m-0 text-[34px] font-normal leading-[40px] tracking-[-1.2px] text-white max-[768px]:text-[30px] max-[768px]:leading-[36px]">
              One Flow from Enquiry to Paid
            </h2>
            <p className="m-[10px_0_0] w-[520px] max-w-full text-[14px] font-normal leading-[18px] text-[#8E8E8E]">
              Each step carries the last one forward. Nothing is retyped, and
              nothing falls through the gap between two apps.
            </p>
          </div>

          <button
            type="button"
            className="flex h-[52px] w-[221px] shrink-0 items-center justify-center rounded-[26px] border-0 bg-[#0085FF] text-[13px] font-normal leading-[16px] text-white max-[768px]:w-full"
          >
            CTA BUTTON HERE
          </button>
        </div>

        {/* STORY PHOTOS — USER CAN SCROLL LEFT / RIGHT */}
        <div className="mt-[58px] w-full overflow-x-auto overscroll-x-contain px-[108px] pb-2 [scrollbar-gutter:stable] max-[1024px]:px-[48px] max-[768px]:px-6">
          <div className="flex w-max gap-[24px] snap-x snap-mandatory">
            {imageCards.map(({ image, title, description }) => (
              <div
                key={title}
                className="relative h-[512px] w-[392px] shrink-0 snap-start overflow-hidden rounded-[16px] bg-[#3A3A3A] max-[600px]:h-[460px] max-[600px]:w-[calc(100vw-48px)]"
              >
                {image && (
                  <img
                    src={image}
                    alt=""
                    className="block h-full w-full object-cover"
                  />
                )}

                <div className="absolute bottom-[28px] left-4 right-4">
                  <h3 className="m-0 text-[16px] font-semibold leading-[20px] text-white">
                    {title}
                  </h3>
                  <p className="m-[5px_0_0] text-[11px] font-normal leading-[15px] text-[#D0D0D0]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CUSTOMER STORIES */}
        <div className="mt-[165px] px-[131px] max-[1024px]:mt-[110px] max-[1024px]:px-[48px] max-[768px]:mt-[90px] max-[768px]:px-6">
          <div className="w-[760px] max-w-full">
            <div className="text-[12px] font-medium leading-[16px] text-[#0085FF]">
              Real Businesses. Real Results.
            </div>
            <h2 className="m-[20px_0_0] w-[500px] max-w-full text-[34px] font-normal leading-[39px] tracking-[-1.4px] text-white max-[768px]:text-[30px] max-[768px]:leading-[36px]">
              Datacircles Replaced
              <br />
              3 Tools for Us
            </h2>
            <p className="m-[17px_0_0] w-[610px] max-w-full text-[14px] font-normal leading-[19px] text-[#858585]">
              Founders, accountants, and agency owners trust DataCircles to stay
              on top of sales and money without the stress of complex software.
            </p>
          </div>
        </div>

        {/* VIDEOS — LARGE CARDS, USER CAN SCROLL LEFT / RIGHT */}
        <div ref={videosRef} className="mt-[70px] w-full overflow-x-auto overscroll-x-contain pb-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max gap-[24px] snap-x snap-mandatory pl-[131px] pr-[131px] max-[1024px]:gap-[32px] max-[1024px]:pl-[48px] max-[1024px]:pr-[48px] max-[768px]:gap-5 max-[768px]:pl-6 max-[768px]:pr-6">
            {videos.map((src, index) => (
              <div
                key={index}
                data-middle-video={index === 1 ? "true" : undefined}
                className={`relative aspect-[1177.33/685] w-[1177.33px] shrink-0 snap-start overflow-hidden rounded-[8px] bg-[#111216] ${
                  index !== 1 ? "opacity-70" : ""
                } max-[1200px]:w-[calc(100vw-96px)] max-[768px]:w-[calc(100vw-48px)]`}
              >
                {src && (
                  <video
                    src={src}
                    playsInline
                    controls
                    className="block h-full w-full object-cover"
                  />
                )}

                {index === 1 && (
                  <div className="pointer-events-none absolute bottom-[29px] left-8 right-8">
                    <div className="text-[16px] font-semibold leading-[20px] text-white">
                      Pradhyumn Dhondi, Creative Director
                    </div>
                    <p className="m-[5px_0_0] w-[560px] max-w-full text-[11px] font-normal leading-[15px] text-white/72">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const BusinessValue = () => (
  <section className="mx-auto mt-[32px] w-[calc(100%-32px)] max-w-[1280px] px-[30px] py-[50px] sm:px-[24px]">
    <div className="flex w-full flex-col items-center">
      <div className="flex h-[24px] w-[118px] items-center justify-center gap-[5px] rounded-full bg-[#F7F5F3] px-[10px] py-[4px]">
        <span className="h-[5px] w-[5px] rounded-full bg-[#1683F7]" />
        <span className="whitespace-nowrap text-[8px] font-normal leading-[16px] text-[#666666]">
          Built for Growth
        </span>
      </div>

      <h2 className="mt-[16px] w-full text-center text-[clamp(24px,2.43vw,33.8px)] font-medium leading-[1.17] tracking-[-1.08px] text-[#231014]">
        One system. Every moving part of your business.
      </h2>
    </div>

    <div className="mt-[20px] grid w-full grid-cols-3 items-center gap-6 max-[768px]:grid-cols-1">
      {[
        ["1× Platform", "CRM + Billing"],
        ["100%", "GST Ready"],
        ["₹0 Upfront", "7-Day Free Trial"],
      ].map(([value, label]) => (
        <div key={value} className="flex h-[68px] w-full flex-col items-center justify-center">
          <div className="whitespace-nowrap text-center text-[clamp(32px,4vw,56px)] font-medium leading-[1.2] tracking-[-0.56px] text-black">
            {value}
          </div>
          <span className="mt-[-2px] text-center text-[7px] font-normal leading-[10px] text-[#666666]">
            {label}
          </span>
        </div>
      ))}
    </div>

    <div className="mt-[70px]" />
  </section>
);

const OneSystemSection = () => (
  <section className="mx-auto flex w-full max-w-[1440px] flex-row items-start gap-[80px] bg-white px-[112px] py-[80px] max-[1024px]:flex-col max-[1024px]:gap-[48px] max-[1024px]:px-[40px] max-[768px]:px-[20px] max-[768px]:py-[40px]">
    <div className="h-[720px] w-[600px] shrink-0 overflow-hidden rounded-[16px] bg-[#F7F7F7] max-[1024px]:h-auto max-[1024px]:w-full">
      <img
        src="https://res.cloudinary.com/tpxo8m6a/image/upload/v1787752478/d6f257d56522395c4acc1a366f2bc996ca30f77b.png"
        alt="DataCircles platform dashboard"
        width="600"
        height="720"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="block h-full w-full rounded-[16px] object-cover max-[1024px]:h-auto"
        onError={(e) => console.error("Cloudinary image failed to load:", e.currentTarget.src)}
      />
    </div>

    <div className="flex w-[536px] shrink-0 flex-col gap-[32px] max-[1024px]:w-full">
      <div className="flex w-full flex-col gap-[14px]">
        <h2 className="m-0 w-full text-[32px] font-medium leading-[110%] tracking-[-2px] text-[#2B2C30] max-[768px]:text-[28px]">
          Your business shouldn't live in two systems that never talk.
        </h2>
        <p className="m-0 w-full text-[16px] font-normal leading-[120%] text-[#666666]">
          Leads in one app, invoices in another, and you in the middle copying
          details from one to the other. Every win deal means retyping what you
          already typed once, and answering "has this client paid?" means
          opening two tabs.
        </p>
      </div>

      <div className="flex w-full flex-col">
        {[
          "•  The same client details entered twice, in two different tools",
          "•  Leads going cold because follow-ups live in someone's memory",
          "•  No single view of who owes you what",
          "•  Two subscriptions, and still no full picture of a client",
        ].map((item) => (
          <div key={item} className="flex min-h-[40px] w-full items-center border-b border-[#E0E0E1]">
            <p className="m-0 w-full py-[10px] text-[16px] font-normal leading-[120%] text-[#2B2C30]">
              {item}
            </p>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="flex h-[40px] w-fit items-center justify-center gap-[8px] rounded-full bg-[#1683F7] px-[16px] text-[12px] font-medium leading-[16px] text-white transition-opacity hover:opacity-90"
      >
        Start Your Project
        <span className="text-[14px] leading-none">→</span>
      </button>
    </div>
  </section>
);

const FlowSection = () => (
  <section className="w-full bg-white">
    <div className="mx-auto w-full max-w-[1216px] px-6 py-[80px] max-[768px]:px-4 max-[768px]:py-[40px]">
      <div className="mx-auto flex w-[444px] max-w-full flex-col items-center text-center">
        <h2 className="m-0 text-[35.2px] font-medium leading-[39.6px] tracking-[-1.08px] text-[#2B2C30] max-[768px]:text-[30px]">
          One Flow from Enquiry to Paid
        </h2>
        <p className="m-0 mt-[4px] text-[16px] font-normal leading-[19.2px] text-[#707173]">
          Each step carries the last one forward. Nothing is retyped, and
          nothing falls through the gap between two apps.
        </p>
      </div>

      <div className="mx-auto mt-[32px] w-full">
        <div className="grid grid-cols-3 gap-x-[24px] max-[768px]:grid-cols-1 max-[768px]:gap-y-[28px]">
          <FlowStep number="1" title="Enquiry" />
          <FlowStep number="2" title="Follow-Up" />
          <FlowStep number="3" title="Quote" />
        </div>

        <div className="mx-auto mt-[40px] grid w-[816px] max-w-full grid-cols-2 gap-x-[24px] max-[768px]:mt-[28px] max-[768px]:grid-cols-1 max-[768px]:gap-y-[28px]">
          <FlowStep number="4" title="Invoice" />
          <FlowStep number="5" title="Get Paid" />
        </div>
      </div>
    </div>
  </section>
);

const BusinessProfileSection = () => (
  <section className="mx-auto w-full max-w-[1216px] overflow-hidden rounded-[8px] border border-[#C4C4C5] bg-white max-[1024px]:mx-6 max-[768px]:mx-3">
    <div className="flex h-[660.48px] w-full max-[1024px]:h-auto max-[1024px]:flex-col">
      <div className="flex h-full w-[550px] shrink-0 flex-col justify-between px-[50px] py-[50px] max-[1024px]:h-auto max-[1024px]:w-full max-[768px]:px-6 max-[768px]:py-8">
        <div>
          <h2 className="m-0 w-[340px] max-w-full text-[16px] font-medium leading-[120%] text-[#231014]">
            Keep every company, relationship, and interaction organized in one
            place.
          </h2>
          <p className="m-0 mt-[12px] w-[340px] max-w-full text-[11.4px] font-normal leading-[16.8px] text-[#635557]">
            Create a complete business profile for every company you work with.
            Centralize contacts, deals, invoices, notes, tasks, meetings, and
            activity history so your team always has the full context before
            making the next move.
          </p>
        </div>

        <div className="w-[329px] max-w-full">
          <p className="m-0 w-full text-[13.3px] font-normal leading-[19.6px] text-[#231014]">
            “We wanted businesses to stop searching across five different
            places just to understand what’s happening with one customer.
            DataCircles brings that entire relationship together.”
          </p>
          <p className="m-0 mt-[8px] text-[11px] font-normal leading-[16px] text-[#635557]">
            — Yash Mishra, CEO &amp; Founder
          </p>
        </div>
      </div>

      <div className="relative h-full flex-1 overflow-hidden bg-[#F7F5F3] max-[1024px]:h-[520px] max-[768px]:h-[420px]">
        <img
          src={SHARED_BUSINESS_IMAGE}
          alt="DataCircles dashboard"
          loading="lazy"
          decoding="async"
          className="absolute bottom-0 left-0 h-auto w-[600px] max-w-none object-contain max-[1024px]:w-full"
        />
      </div>
    </div>
  </section>
);

const ProductFlowSection = () => (
  <section className="mx-auto mt-[56px] grid w-full max-w-[1216px] grid-cols-[520px_minmax(0,1fr)] items-start gap-[80px] px-6 max-[1200px]:gap-[48px] max-[1024px]:grid-cols-1 max-[1024px]:gap-[48px]">
    <div className="flex w-[520px] max-w-full flex-col items-start">
      <h2 className="m-0 w-full text-[35.2px] font-medium leading-[39.6px] tracking-[-1.08px] text-[#2B2C30] max-[768px]:text-[30px]">
        One Flow from Enquiry to Paid
      </h2>
      <p className="m-0 mt-0 w-full text-[16px] font-normal leading-[19.2px] text-[#707173]">
        Each step carries the last one forward. Nothing is retyped, and
        nothing falls through the gap between two apps.
      </p>

      <div className="mt-[22px] flex w-full flex-col">
        {["CRM", "Invoicing", "Payments"].map((item) => (
          <div
            key={item}
            className="flex h-[60px] w-full items-center justify-between border-b border-[#E0E0E1] text-[16px] font-semibold leading-[24px] text-[#1E1E1E]"
          >
            <span className="opacity-50">{item}</span>
            <span className="text-[22px] font-normal leading-[24px] opacity-50">→</span>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="mt-[20px] inline-flex h-[48px] min-w-[174px] items-center justify-center gap-[10px] rounded-full border-0 bg-[#0A5AFE] px-[20px] text-[16px] font-semibold leading-[24px] text-white"
      >
        <span>Start Your Project</span>
        <span className="text-[20px] font-normal leading-[20px]">→</span>
      </button>
    </div>

    <section className="w-full max-w-[523px] bg-white font-inter max-[1024px]:mx-auto max-[1024px]:max-w-[523px] max-[768px]:max-w-full">
      <ProductFeature
        image={SECTION6_CRM_IMAGE}
        alt="CRM dashboard"
        title="Never lose a lead again."
        description="Every enquiry in one pipeline, every follow-up on time, and every client's full history in one record. Tasks, meetings and notes sit where they belong."
        items={["Deal pipeline", "Contacts & companies", "Tasks & meetings", "Activity timeline"]}
      />

      <div className="mt-[42px]">
        <ProductFeature
          image={SECTION6_INVOICING_IMAGE}
          alt="GST invoicing dashboard"
          title="GST invoices in seconds, from the deal you just won."
          description="The client details and line items are already there. Quotations, proforma invoices, delivery challans and credit notes too, with unlimited invoices on every plan."
          items={["GST handled", "Unlimited invoices", "Your branding", "Every document type"]}
        />
      </div>

      <div className="mt-[42px]">
        <ProductFeature
          image={SECTION6_PAYMENTS_IMAGE}
          alt="Payments dashboard"
          title="Know exactly who owes you what."
          description="Invoiced, pending, overdue and collected, on one screen. Late invoices flag themselves, and reminders do the chasing you'd rather not do."
          items={["Payment status", "Overdue alerts", "Reminders", "Cash flow reports"]}
          last
        />
      </div>
    </section>
  </section>
);

const AccordionItem = ({ children, open = false, content }) => (
  <details
    open={open}
    className="w-full border-b border-[#A8A8A8] first:border-t"
  >
    <summary className="flex h-[72px] cursor-pointer list-none items-center justify-between px-4 text-[15px] font-normal leading-[20px] text-[#171717] [&::-webkit-details-marker]:hidden">
      <span>{children}</span>
      <span className="text-[22px] font-light leading-[22px]">{open ? "−" : "+"}</span>
    </summary>

    {content && (
      <div className="min-h-[160px] w-full border-t border-[#A8A8A8] px-4 py-[19px]">
        <p className="m-0 max-w-[550px] text-[13px] font-normal leading-[18px] text-[#7C7E87]">
          {content}
        </p>
        <a
          href="#"
          className="mt-[12px] inline-block text-[12px] font-normal leading-[16px] text-[#0085FF] underline"
        >
          Learn More
        </a>
      </div>
    )}
  </details>
);

const FAQSection = () => (
  <section className="relative w-full overflow-hidden bg-white font-inter">
    <div className="mx-auto grid min-h-[708px] w-full max-w-[1440px] grid-cols-2 gap-[98px] px-[122px] py-[96px] max-[900px]:grid-cols-1 max-[900px]:gap-[48px] max-[900px]:px-6 max-[900px]:py-16">
      <div className="w-full max-w-[500px] pt-[13px]">
        <div className="text-[14px] font-medium leading-[18px] text-[#0085FF]">
          Lorem ipsum
        </div>
        <h2 className="m-[28px_0_0] w-[410px] max-w-full text-[34px] font-medium leading-[32px] tracking-[-1.5px] text-[#171717]">
          Lorem ipsum dolor
          <br />
          self amet consectetyr alit
        </h2>
        <p className="m-[26px_0_0] w-full text-[16px] font-normal leading-[24px] text-[#6E7079]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="w-full max-w-[603px]">
        <AccordionItem
          open
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        >
          Lorem ipsum dolor self amet, consectetur
        </AccordionItem>
        {Array.from({ length: 4 }).map((_, index) => (
          <AccordionItem key={index}>
            Lorem ipsum dolor self amet, consectetur
          </AccordionItem>
        ))}
      </div>
    </div>
  </section>
);

const FinalCTASection = () => (
  <section className="relative w-full overflow-hidden bg-white">
    <div className="mx-auto min-h-[1072px] w-full max-w-[1440px] px-6 pt-[8px] text-center">
      <h2 className="mx-auto m-0 w-[850px] max-w-full text-[50px] font-normal leading-[58px] tracking-[-2.2px] text-black max-[768px]:text-[36px] max-[768px]:leading-[42px]">
        Stop switching between apps.
      </h2>

      <p className="mx-auto mt-[25px] w-[600px] max-w-full text-[14px] font-normal leading-[19px] text-[#8F8F8F]">
        Try DataCircles free for 7 days at full limits and see your leads,
        <br className="max-[600px]:hidden" />
        invoices and payments in one place. No credit card needed.
      </p>

      <div className="mt-[49px] flex items-center justify-center gap-[12px] max-[480px]:flex-col">
        <a
          href="/signup"
 type="button"
          className="
            flex
            h-[42px]
            w-full
            sm:w-[136px]
            items-center
            justify-center
            overflow-hidden
            rounded-full
            border
            border-black
            bg-transparent
            px-[12px]
            text-center
            text-[14px]
            font-medium
            leading-[1.2]
            text-black
            transition-all
            duration-200
            hover:!bg-[#0085FF]
            hover:!text-white
            hover:!border-[#0085FF]
          "        >
          Get Start Now
        </a>
        <a
          href="/demo"
          type="button"
          className="
            flex
            h-[42px]
            w-full
            sm:w-[136px]
            items-center
            justify-center
            overflow-hidden
            rounded-full
            border
            border-black
            bg-transparent
            px-[12px]
            text-center
            text-[14px]
            font-medium
            leading-[1.2]
            text-black
            transition-all
            duration-200
            hover:!bg-[#0085FF]
            hover:!text-white
            hover:!border-[#0085FF]
          "        >
          Book Demo
        </a>
      </div>

      <div className="relative mt-[68px] h-[785px] w-full overflow-hidden rounded-t-[14px] bg-[#F7F7F7]">
        {LAST_SECTION_IMAGE && (
          <img
            src={LAST_SECTION_IMAGE}
            alt="DataCircles dashboard"
            className="absolute inset-0 block h-full w-full object-cover"
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_38%,rgba(255,255,255,0.18)_58%,rgba(255,255,255,0.72)_82%,rgba(255,255,255,1)_100%)]" />
        <div className="pointer-events-none absolute left-0 top-0 h-full w-[120px] bg-[linear-gradient(to_right,rgba(255,255,255,0.88),rgba(255,255,255,0))]" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-[120px] bg-[linear-gradient(to_left,rgba(255,255,255,0.88),rgba(255,255,255,0))]" />
      </div>
    </div>
  </section>
);

function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white font-inter">
      <section className="relative mx-auto aspect-[1392/890] w-[calc(100%-32px)] max-w-[1392px] overflow-hidden rounded-[24px] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFF_23%,#BADEFF_70%,#BADEFF_100%)] max-[768px]:aspect-auto max-[768px]:min-h-0 max-[768px]:rounded-[18px]">
        <div className="absolute left-1/2 top-[0.7%] z-50 flex -translate-x-1/2 justify-center scale-[0.5] min-[900px]:scale-[0.7] min-[1200px]:scale-[0.85] min-[1400px]:scale-100 max-[768px]:left-0 max-[768px]:top-[12px] max-[768px]:w-full max-[768px]:translate-x-0 max-[768px]:scale-100 max-[768px]:px-[8px] max-[768px]:[&>*]:w-full max-[768px]:[&>*]:max-w-full">
          <Navbar />
        </div>

        <div className="absolute left-[6.75%] top-[29.9%] z-30 w-[45.83%] max-[768px]:relative max-[768px]:left-auto max-[768px]:top-auto max-[768px]:w-full max-[768px]:px-[6%] max-[768px]:pt-[150px]">
          <div className="flex h-[24.8px] w-fit items-center gap-[5px] rounded-full bg-[#EBE6E0]/20 px-[10px] py-[4px]">
            <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-[#1683F7]" />
            <span className="whitespace-nowrap text-[9px] font-normal leading-[17px] text-[#444444]">
              CRM + Invoicing Infrastructure
            </span>
          </div>

          <h1 className="mt-[18px] w-full text-[clamp(28px,3.45vw,48px)] font-semibold leading-[1.08] tracking-[-0.045em] text-[#171717]">
            Win customers and get paid,
            <br />
            all in once place
          </h1>

          <p className="mt-[15px] w-full max-w-[638px] text-[clamp(9px,0.95vw,13.2px)] font-normal leading-[1.48] text-[#635557]">
            CRM and GST invoicing in a single app, built for Indian businesses.
            The lead you chase today becomes the invoice you send tomorrow,
            without switching between tools.
          </p>

          <div className="mt-[16px] flex h-[49px] w-[307px] origin-left items-center gap-[8px] scale-[0.7] min-[900px]:scale-[0.85] min-[1200px]:scale-100">
            <a
              href="/signup"
            className="flex h-[49px] w-full items-center justify-center rounded-full bg-[#FFFFFF] font-inter text-[14px] font-medium text-black transition-colors duration-200 hover:bg-[#0085FF] hover:text-white sm:w-[149px]"
            >
              Start Free
            </a>
            <a
              href="/demo"
            className="flex h-[49px] w-full items-center justify-center rounded-full bg-[#FFFFFF] font-inter text-[14px] font-medium text-black transition-colors duration-200 hover:bg-[#0085FF] hover:text-white sm:w-[149px]"
            >
              Book a Demo
            </a>
          </div>

          <p className="mt-[1px] text-[8px] font-normal leading-[12px] text-[#635557] min-[900px]:mt-[9px]">
            7-day free trial · No card required · GST-ready · Works on any
            device
          </p>
        </div>

        <div className="absolute left-[48.7%] top-[8.1%] z-20 w-[60%] overflow-hidden rounded-[24px] border border-white bg-white shadow-[0_12px_40px_rgba(80,140,210,0.10)] max-[768px]:relative max-[768px]:left-auto max-[768px]:top-auto max-[768px]:mt-[24px] max-[768px]:ml-0 max-[768px]:w-full">
          <img
            src={HERO_IMAGE}
            alt="DataCircles dashboard"
            className="block h-auto w-full rounded-[23px] object-cover"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </section>

      <TrustedAndUsedBy />

      <BusinessValue />
      <OneSystemSection />
      <FlowSection />
      <BusinessProfileSection />
      <ProductFlowSection />

      <Section7 />

      <PricingSection />

      <FAQSection />
      <FinalCTASection />

      <Footer />
    </main>
  );
}

export default Home;
