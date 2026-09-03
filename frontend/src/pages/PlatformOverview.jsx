import React from "react";
import Navbar from "../components/Navbar";
import CTA from "../components/payments/CTA";

/* =========================================================
   FIGMA ASSETS — CURRENT NODE 102:1475
   ========================================================= */

const imgDashboard =
  "https://res.cloudinary.com/tpxo8m6a/image/upload/v1787985998/b785b93f10ee527292fd9e6b3cba9c838587764b_1.png";

const imgFloatingDashboard =
  "https://res.cloudinary.com/tpxo8m6a/image/upload/v1787986192/7318c219e2b5c2c73ed078df153915c50d9cc106_2.png";


const imgProblem =
  "https://www.figma.com/api/mcp/asset/660b337f-7ddf-4840-b081-24b11063395c.png";

const imgProblemOverlay =
  "https://www.figma.com/api/mcp/asset/e8fa4a3f-18eb-4f14-9c86-87ca7e4a9324.png";

const imgFeature =
  "https://res.cloudinary.com/tpxo8m6a/image/upload/v1787917181/e1b401cb4e4c9b406541ebaf104107c3180075c3_5.png";

const imgPattern =
  "https://www.figma.com/api/mcp/asset/af560372-12d0-4da2-9b06-70b1012c6d3f.svg";

const imgGroup =
  "https://www.figma.com/api/mcp/asset/3723193f-cbcb-4762-82df-38ae8f908d84.svg";



const imgArrow =
  "https://www.figma.com/api/mcp/asset/97787264-fe83-4295-8892-1b7a706fe5ed.svg";

const imgStep1 =
  "https://www.figma.com/api/mcp/asset/b9288a23-a5b6-4068-909a-9ffea9306416.svg";

const imgStep2 =
  "https://www.figma.com/api/mcp/asset/744ec614-49c7-4486-b622-d0895a1bf8f2.svg";

const imgStep3 =
  "https://www.figma.com/api/mcp/asset/34fcee76-c4ea-4ac1-850f-3a3dad4b3444.svg";

const imgConnector =
  "https://www.figma.com/api/mcp/asset/aa77ee8e-e281-4dfc-9390-c2f9974370dd.svg";

const imgIndia =
  "https://www.figma.com/api/mcp/asset/57cd47d7-b834-439a-95aa-c16be80d4baf.svg";


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
   EXACT FIGMA FLOATING CARD SHADOW
   ========================================================= */

const floatingCardShadow = `
  drop-shadow-[0px_44.21px_6px_rgba(150,186,232,0.18)]
  drop-shadow-[0px_19.342px_4.5px_rgba(150,186,232,0.30)]
  drop-shadow-[0px_5.526px_2.5px_rgba(150,186,232,0.34)]
`;


/* =========================================================
   HERO
   ========================================================= */

function Hero() {
  return (
    <section
      id="home"
      className="
        absolute
        left-0
        top-0
        h-[1325px]
        w-[1440px]
        overflow-hidden
        bg-white
      "
    >

      {/* =====================================================
          HERO GRADIENT
          ===================================================== */}

      <div
        className="
          absolute
          left-[-240px]
          top-[379.94px]
          h-[945px]
          w-[1920px]
          overflow-hidden
        "
        style={{
          background:
            "linear-gradient(180deg, rgb(255,255,255) 9.4595%, rgb(156,208,255) 45.045%, rgb(255,255,255) 89.631%, rgb(255,255,255) 100%)",
        }}
      >

        {/* PATTERN */}

        <div
          className="
            absolute
            left-[290px]
            top-[-67px]
            h-[1078px]
            w-[1340px]
            overflow-hidden
          "
          style={{
            maskImage: `url("${imgPattern}")`,
            WebkitMaskImage: `url("${imgPattern}")`,
            maskSize: "1340px 1078px",
            WebkitMaskSize: "1340px 1078px",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        >

          <div
            className="
              absolute
              left-0
              top-[139px]
              h-[800px]
              w-[1340px]
            "
          >
            <img
              src={imgGroup}
              alt=""
              className="
                absolute
                inset-[0.06%_0.04%]
                h-auto
                w-full
                max-w-none
              "
            />
          </div>

        </div>


        {/* DASHBOARD */}

        <div
          className="
            absolute
            left-1/2
            top-[160px]
            flex
            h-[733px]
            w-[1360px]
            -translate-x-1/2
            items-center
            justify-center
            overflow-clip
          "
        >

          <div
            className="
              relative
              h-[733px]
              w-[1060px]
              rounded-[7px]
            "
          >

            <div
              className="
                absolute
                inset-0
                overflow-hidden
                rounded-[7px]
              "
            >
              <img
                src={imgDashboard}
                alt="DataCircles dashboard"
                className="
                  absolute
                  left-[-0.04%]
                  top-[0.03%]
                  h-[126.85%]
                  w-full
                  max-w-none
                "
              />
            </div>


            {/* FLOATING CARD */}

            <div
              className={`
                absolute
                bottom-[128px]
                left-[-33px]
                z-30
                flex
                w-[233px]
                flex-col
                items-start
                justify-center
                ${floatingCardShadow}
              `}
            >
              <div
                className="
                  relative
                  h-[230.22px]
                  w-full
                  shrink-0
                  overflow-hidden
                "
              >
                <img
                  src={imgFloatingDashboard}
                  alt=""
                  className="
                    absolute
                    left-[-5.65%]
                    top-[-0.02%]
                    h-full
                    w-[111.31%]
                    max-w-none
                  "
                />
              </div>
            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          HERO TEXT
          ===================================================== */}

      <div
        className="
          absolute
          left-1/2
          top-[164px]
          flex
          w-[1600px]
          -translate-x-1/2
          flex-col
          items-center
          justify-center
          gap-[20px]
          px-[20px]
        "
      >

        {/* BADGE */}

        <div
          className="
            flex
            h-[24.8px]
            items-center
            justify-center
            rounded-[999px]
            bg-[#ebe6e0]
            px-[10px]
            py-[4px]
          "
        >
          <span className="mr-[5px] h-[6px] w-[6px] rounded-full bg-[#0085ff]" />

          <span className="text-center text-[11.4px] leading-[16.8px] text-[#231014]">
            CRM + Invoicing Infrastructure
          </span>
        </div>


        {/* HEADING */}

        <div className="flex h-[108px] w-[635px] flex-col items-center">

          <h1
            className="
              m-0
              w-full
              whitespace-nowrap
              text-center
              text-[51px]
              font-medium
              leading-[54px]
              tracking-[-2.7px]
              items-center
              text-[#231014]
            "
          >
            From first enquiry to final payment,
            <br />
                         all in once place
          </h1>

        </div>


        {/* DESCRIPTION */}

        <div className="flex h-[39.19px] w-[685px] flex-col items-center">

          <p
            className="
              m-0
              w-full
              whitespace-nowrap
              text-center
              text-[13.2px]
              font-normal
              leading-[19.6px]
              text-[#635557]
            "
          >
            DataCircles brings your leads, follow-ups, invoices and payments into
            <br />
            a single connected system, so nothing gets lost between apps.
          </p>

        </div>


        {/* CTA */}

        <div
          className="
            flex
            w-full
            flex-col
            items-center
            justify-center
            gap-[10px]
            pt-[10px]
          "
        >

          <div className="flex items-center gap-[10px]">

            <button
              type="button"
              className={`
                flex
                h-[49px]
                w-[149px]
                items-center
                justify-center
                rounded-[999px]
                bg-[#0085ff]
                text-[15.1px]
                font-medium
                leading-[22.4px]
                text-white
                ${buttonEffect}
              `}
            >
              Start Free
            </button>

            <button
              type="button"
              className={`
                flex
                h-[49px]
                w-[148px]
                items-center
                justify-center
                rounded-[999px]
                bg-[#e5edf5]
                text-[15.3px]
                font-medium
                leading-[22.4px]
                text-[#231014]
                ${buttonEffect}
              `}
            >
              Book a Demo
            </button>

          </div>

          <p className="m-0 whitespace-nowrap text-center text-[9px] leading-[19.6px] text-[#635557]">
            7-day free trial · No card required · GST-ready · Works on any device
          </p>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   PROBLEM SECTION
   ========================================================= */

function ProblemSection() {
  return (
    <section
      id="about"
      className="
        absolute
        left-1/2
        top-[1537px]
        flex
        h-[880px]
        w-[1440px]
        -translate-x-1/2
        items-center
        gap-[80px]
        px-[112px]
        py-[80px]
      "
    >

      {/* IMAGE */}

      <div
        className="
          relative
          h-[720px]
          w-[600px]
          shrink-0
          overflow-hidden
          rounded-[16px]
        "
      >

        <img
          src={imgProblem}
          alt=""
          className="
            absolute
            left-[-13.83%]
            top-0
            h-full
            w-[127.67%]
            max-w-none
          "
        />

        <img
          src={imgProblemOverlay}
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


      {/* CONTENT */}

      <div
        className="
          flex
          h-[585px]
          min-w-0
          flex-1
          flex-col
          gap-[32px]
        "
      >

        <div className="flex flex-col gap-[14px]">

          <h2
            className="
              m-0
              w-full
              text-[32px]
              font-medium
              leading-[1.1]
              tracking-[-2px]
              text-[#2b2c30]
            "
          >
            Most businesses run on two systems that never talk.
          </h2>

          <p className="m-0 text-[16px] leading-[1.2] text-[#707173]">
            Your leads live in one place, your invoices in another. Every won
            deal means retyping the same client details into a billing app, and
            every payment question means opening two tabs to answer it. Nothing
            is wrong with either tool. The gap between them is what costs you.
          </p>

        </div>


        <div className="flex flex-col gap-[20px]">

          <div className="h-px w-full bg-[#e0e0e1]" />

          <ul className="m-0 list-disc pl-[30px] text-[20px] leading-[1.2] tracking-[-1px] text-[#2b2c30]">
            <li>
              Client details typed twice, once in the CRM and again in the
              billing app
            </li>
          </ul>

          <div className="h-px w-full bg-[#e0e0e1]" />

          <ul className="m-0 list-disc pl-[30px] text-[20px] leading-[1.2] tracking-[-1px] text-[#2b2c30]">
            <li>
              No single answer to "has this client paid us yet?"
            </li>
          </ul>

          <div className="h-px w-full bg-[#e0e0e1]" />

          <ul className="m-0 list-disc pl-[30px] text-[20px] leading-[1.2] tracking-[-1px] text-[#2b2c30]">
            <li>
              Follow-ups forgotten because they live in WhatsApp and memory
            </li>
          </ul>

          <div className="h-px w-full bg-[#e0e0e1]" />

          <ul className="m-0 list-disc pl-[30px] text-[20px] leading-[1.2] tracking-[-1px] text-[#2b2c30]">
            <li>
              Two subscriptions, two logins, and still no full picture
            </li>
          </ul>

          <div className="h-px w-full bg-[#e0e0e1]" />

        </div>


        <button
          type="button"
          className={`
            flex
            h-[52px]
            w-[206px]
            items-center
            justify-center
            gap-[10px]
            rounded-[32px]
            bg-[#0085ff]
            px-[20px]
            py-[16px]
            text-[16px]
            font-medium
            text-white
            ${buttonEffect}
          `}
        >
          Start Your Project

          <img
            src={imgArrow}
            alt=""
            className="h-[20px] w-[20px]"
          />
        </button>

      </div>

    </section>
  );
}


/* =========================================================
   BUSINESS FLOW
   ========================================================= */

const flowSteps = [
  {
    number: "1",
    title: "Enquiry",
    image: imgStep1,
  },
  {
    number: "2",
    title: "Follow-Up",
    image: imgStep2,
  },
  {
    number: "3",
    title: "Quote",
    image: imgStep3,
  },
  {
    number: "4",
    title: "Invoice",
    image: imgStep3,
  },
  {
    number: "5",
    title: "Paid",
    image: imgStep3,
  },
];


function FlowStep({ number, title, image }) {
  return (
    <div
      className="
        flex
        h-[110px]
        flex-1
        flex-col
        items-center
        gap-[24px]
      "
    >

      <div className="relative h-[64px] w-[64px]">

        <img
          src={image}
          alt=""
          className="
            absolute
            inset-[3.13%]
            h-[93.74%]
            w-[93.74%]
          "
        />

        <p
          className="
            absolute
            left-1/2
            top-1/2
            m-0
            -translate-x-1/2
            -translate-y-1/2
            text-[24px]
            font-semibold
            leading-[1.2]
            text-white
          "
        >
          {number}
        </p>

      </div>


      <span
        className="
          text-center
          text-[20px]
          font-semibold
          leading-[1.1]
          text-[#2b2c30]
        "
      >
        {title}
      </span>

    </div>
  );
}


function BusinessFlow() {
  return (
    <section
      className="
        absolute
        left-1/2
        top-[2417px]
        h-[350px]
        w-[1440px]
        -translate-x-1/2
      "
    >

      {/* HEADING */}

      <div
        className="
          absolute
          left-[112px]
          right-[112px]
          top-0
          flex
          flex-col
          items-center
          gap-[14px]
          text-center
        "
      >

        <h2
          className="
            m-0
            text-[35.2px]
            font-medium
            leading-[39.6px]
            tracking-[-1.08px]
            text-[#2b2c30]
          "
        >
          One flow, start to finish.
        </h2>

        <p
          className="
            m-0
            w-[444px]
            text-center
            text-[16px]
            leading-[1.2]
            text-[#707173]
          "
        >
          Each step carries the last one forward, so nothing is retyped and
          nothing falls through.
        </p>

      </div>


      {/* STEPS */}

      <div
        className="
          absolute
          left-[112px]
          right-[112px]
          top-[172px]
          grid
          h-[110px]
          grid-cols-5
          gap-x-[32px]
        "
      >

        {flowSteps.map((step) => (
          <FlowStep
            key={step.number}
            number={step.number}
            title={step.title}
            image={step.image}
          />
        ))}


        {/* CONNECTORS */}

        <img
          src={imgConnector}
          alt=""
          className="
            absolute
            left-[141px]
            top-[32px]
            h-[12px]
            w-[185px]
          "
        />

        <img
          src={imgConnector}
          alt=""
          className="
            absolute
            left-[393px]
            top-[32px]
            h-[12px]
            w-[185px]
          "
        />

        <img
          src={imgConnector}
          alt=""
          className="
            absolute
            left-[640px]
            top-[32px]
            h-[12px]
            w-[185px]
          "
        />

        <img
          src={imgConnector}
          alt=""
          className="
            absolute
            left-[890px]
            top-[32px]
            h-[12px]
            w-[185px]
          "
        />

      </div>


      {/* DESCRIPTION */}

      <p
        className="
          absolute
          left-1/2
          top-[321px]
          m-0
          w-[723px]
          -translate-x-1/2
          text-center
          text-[16px]
          leading-[1.2]
          text-[#707173]
        "
      >
        The enquiry becomes a deal, the deal becomes a quote, the quote becomes
        an invoice, and the payment closes the loop against the same client
        record.
      </p>

    </section>
  );
}


/* =========================================================
   FEATURE TAG
   ========================================================= */

function FeatureTag({ children }) {
  return (
    <span
      className="
        inline-flex
        h-[31px]
        items-center
        justify-center
        rounded-[100px]
        border
        border-[rgba(0,133,255,0.3)]
        bg-[rgba(0,133,255,0.1)]
        px-[16px]
        py-[8px]
        text-[12px]
        font-semibold
        text-[#0a55af]
      "
    >
      {children}
    </span>
  );
}


/* =========================================================
   FEATURE CARD
   ========================================================= */

function FeatureCard({
  reverse = false,
  label,
  title,
  description,
  tags,
  link,
}) {
  return (
    <article
      className={`
        absolute
        left-1/2
        flex
        h-[588px]
        w-[1216px]
        -translate-x-1/2
        overflow-hidden
        rounded-[8px]
        bg-white
        ${reverse ? "flex-row-reverse" : ""}
      `}
    >

      {/* IMAGE */}

      <div
        className="
          relative
          flex
          h-[588px]
          flex-1
          items-center
          justify-center
          overflow-hidden
        "
      >

        <div
          className="
            relative
            h-[658.48px]
            w-full
          "
        >
          <img
            src={imgFeature}
            alt=""
            className="
              absolute
              left-0
              top-[0.11%]
              h-[158.82%]
              w-full
              max-w-none
            "
          />
        </div>

      </div>


      {/* CONTENT */}

      <div
        className="
          flex
          h-full
          w-[550px]
          shrink-0
          flex-col
          items-start
          justify-between
          overflow-hidden
        "
      >

        <div
          className={`
            flex
            w-full
            flex-col
            gap-[14px]
            pt-0
            ${reverse ? "pr-[32px]" : "px-[32px]"}
          `}
        >

          <p
            className="
              m-0
              text-[16px]
              font-medium
              leading-[24px]
              tracking-[-0.16px]
              text-[#0085ff]
            "
          >
            {label}
          </p>

          <h3
            className="
              m-0
              text-[24px]
              font-semibold
              leading-[28px]
              tracking-[-0.72px]
              text-[#1e1e1e]
            "
          >
            {title}
          </h3>

          <p
            className="
              m-0
              text-[16px]
              font-normal
              leading-[24px]
              tracking-[-0.16px]
              text-[#252525]
            "
          >
            {description}
          </p>

        </div>


        <div
          className={`
            flex
            flex-col
            gap-[32px]
            pb-0
            ${reverse ? "pr-[32px]" : "px-[32px]"}
          `}
        >

          <div className="flex max-w-[486px] flex-wrap gap-[8px]">

            {tags.map((tag) => (
              <FeatureTag key={tag}>
                {tag}
              </FeatureTag>
            ))}

          </div>

          <span
            className="
              text-[16px]
              font-bold
              leading-[24px]
              tracking-[-0.16px]
              text-[#0085ff]
            "
          >
            {link} →
          </span>

        </div>

      </div>

    </article>
  );
}


/* =========================================================
   FEATURES
   ========================================================= */

function Features() {
  return (
    <section
      id="features"
      className="
        absolute
        left-0
        top-0
        h-[5422px]
        w-[1440px]
      "
    >

      <div
        className="
          absolute
          left-0
          top-[2863px]
          h-[588px]
          w-full
        "
      >
        <FeatureCard
          label="WIN The Work"
          title="Every lead, every follow-up, one pipeline."
          description="Track deals through your own stages, keep contacts and companies together, and see exactly what needs a follow-up today. Tasks, meetings and notes sit against the client they belong to, so context never goes missing."
          tags={[
            "Deal pipeline",
            "Contacts & companies",
            "Tasks",
            "Meetings",
            "Activity timeline",
            "Notes",
          ]}
          link="Explore the CRM"
        />
      </div>


      <div
        className="
          absolute
          left-0
          top-[3520px]
          h-[588px]
          w-full
        "
      >
        <FeatureCard
          reverse
          label="Bill without the busywork"
          title="GST invoices in seconds, from the deal you just won."
          description="Turn a won deal into a quote or an invoice without retyping anything. Full GST handling, professional formats, and every document filed against the right client."
          tags={[
            "GST invoices",
            "Quotations",
            "Proforma",
            "Unlimited invoices",
            "Professional formats",
          ]}
          link="Explore invoicing"
        />
      </div>


      <div
        className="
          absolute
          left-0
          top-[4177px]
          h-[588px]
          w-full
        "
      >
        <FeatureCard
          label="Get Paid"
          title="Know what's collected, what's pending, what's overdue."
          description="See your money at a glance and let reminders do the chasing. Clients pay on UPI, cards or net banking, and the payment lands against the invoice on its own."
          tags={[
            "Payment status",
            "Overdue alerts",
            "Automatic reminders",
            "UPI & cards",
            "Financial overview",
          ]}
          link="Explore Payments"
        />
      </div>


      <div
        className="
          absolute
          left-0
          top-[4834px]
          h-[588px]
          w-full
        "
      >
        <FeatureCard
          reverse
          label="Everything else is Connected"
          title="Files, vendors, meetings and calendar, all in context."
          description="Store contracts and documents against the company they belong to. Track vendors and purchases. Keep meetings and tasks on one calendar. It's the day-to-day glue that usually lives in five other apps."
          tags={[
            "File storage",
            "Vendors",
            "Purchases",
            "Calender",
            "Meetings",
          ]}
          link="Explore CRM"
        />
      </div>

    </section>
  );
}


/* =========================================================
   BLACK DASHBOARD SECTION
   ========================================================= */

function DashboardSection() {
  return (
    <section
      className="
        absolute
        left-1/2
        top-[5572px]
        h-[1316px]
        w-[1440px]
        -translate-x-1/2
        overflow-hidden
        bg-black
      "
    >

      {/* =====================================================
          HEADING
          ===================================================== */}

      <div
        className="
          absolute
          left-1/2
          top-[77px]
          flex
          w-[1180px]
          -translate-x-1/2
          flex-col
          items-center
          justify-center
          border-t
          border-[rgba(0,0,0,0.2)]
          pt-[46px]
        "
      >

        <div className="flex w-[1178px] flex-col items-center">

          <div
            className="
              flex
              w-full
              flex-col
              items-center
              justify-center
              text-center
            "
          >

            <p
              className="
                m-0
                w-[493px]
                text-[18px]
                font-medium
                leading-[26px]
                tracking-[-0.72px]
                text-[#0085ff]
              "
            >
              One Dashboard
            </p>


            <h2
              className="
                m-0
                mt-[24px]
                whitespace-nowrap
                text-[45px]
                font-medium
                leading-[52px]
                tracking-[-2px]
                text-white
              "
            >
              Your whole business on one screen.
            </h2>


            <p
              className="
                m-0
                mt-[24px]
                w-[571px]
                text-[18px]
                font-normal
                leading-[26px]
                tracking-[-0.72px]
                text-[#b5b6b7]
              "
            >
              Overview, CRM and invoices sit side by side, so you can see
              revenue, pipeline and outstanding money without leaving the page.
              Reports and dashboards come as standard, on every plan.
            </p>

          </div>

        </div>

      </div>


      {/* =====================================================
          MAIN DASHBOARD
          ===================================================== */}

      <div
        className="
          absolute
          left-[190px]
          top-[406px]
          h-[733px]
          w-[1060px]
          rounded-[7px]
        "
      >

        <div
          className="
            absolute
            inset-0
            overflow-hidden
            rounded-[7px]
          "
        >
          <img
            src={imgDashboard}
            alt=""
            className="
              absolute
              left-[-0.04%]
              top-[0.03%]
              h-[126.85%]
              w-full
              max-w-none
            "
          />
        </div>


        {/* =================================================
            LEFT FLOATING CARD
            EXACT FIGMA BLUE BLUR / SHADOW
            ================================================= */}

        <div
          className={`
            absolute
            bottom-[128px]
            left-[-33px]
            z-30
            flex
            w-[233px]
            flex-col
            items-start
            justify-center
            ${floatingCardShadow}
          `}
        >

          <div
            className="
              relative
              h-[230.22px]
              w-full
              shrink-0
              overflow-hidden
            "
          >

            <img
              src={imgFloatingDashboard}
              alt=""
              className="
                absolute
                left-[-5.65%]
                top-[-0.02%]
                h-full
                w-[111.31%]
                max-w-none
              "
            />

          </div>

        </div>

      </div>


      {/* =====================================================
          RIGHT FLOATING CARD
          EXACT FIGMA POSITION + SAME BLUR
          ===================================================== */}

      <div
        className={`
          absolute
          bottom-[542.78px]
          left-[1111px]
          z-40
          flex
          w-[233px]
          flex-col
          items-start
          justify-center
          ${floatingCardShadow}
        `}
      >

        <div
          className="
            relative
            h-[230.22px]
            w-full
            shrink-0
            overflow-hidden
          "
        >

          <img
            src={imgFloatingDashboard}
            alt=""
            className="
              absolute
              left-[-5.65%]
              top-[-0.02%]
              h-full
              w-[111.31%]
              max-w-none
            "
          />

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   INDIA PILLS
   ========================================================= */

const indiaRows = [
  [
    ["Lorem ipsum dolor sit amet", 314],
    ["Lorem ipsum dolor sit", 254],
    ["Lorem ipsum dolor sit amet consec", 357],
    ["Lorem ipsum dolor", 227],
  ],

  [
    ["Lorem ipsum dolor sit", 248],
    ["Lorem ipsum dolor sit", 264],
    ["Lorem ipsum dolor sit amet", 274],
    ["Lorem ipsum dolor sit amet con", 312],
  ],

  [
    ["Lorem ipsum dolor sit", 270],
    ["Lorem ipsum dolor sit", 250],
    ["Lorem ipsum dolor sit amet", 274],
    ["Lorem ipsum dolor sit amet con", 312],
  ],

  [
    ["Lorem ipsum dolor sit amet", 296],
    ["Lorem ipsum dolor sit", 232],
    ["Lorem ipsum dolor sit amet", 310],
    ["Lorem ipsum dolor sit amet con", 312],
  ],

  [
    ["Lorem ipsum dolor sit", 312],
    ["Lorem ipsum dolor sit amet", 310],
    ["Lorem ipsum dolor sit amet con", 300],
  ],
];


function IndiaPill({ text, width }) {
  return (
    <div
      className="
        flex
        h-[51px]
        shrink-0
        items-center
        gap-[10px]
        rounded-[47px]
        border
        border-dashed
        border-[#ececec]
        bg-[#f8f8f8]
        px-[20px]
        py-[16px]
      "
      style={{
        width: `${width}px`,
      }}
    >

      <div className="relative h-[18px] w-[18px] shrink-0">
        <img
          src={imgIndia}
          alt=""
          className="absolute inset-0 h-full w-full"
        />
      </div>

      <p
        className="
          m-0
          whitespace-nowrap
          text-[16px]
          font-normal
          leading-[1.2]
          text-[#1c1c1d]
        "
      >
        {text}
      </p>

    </div>
  );
}


/* =========================================================
   INDIA SECTION
   ========================================================= */

function IndiaSection() {
  return (
    <section
      id="pricing"
      className="
        absolute
        left-1/2
        top-[6930px]
        flex
        w-[1920px]
        -translate-x-1/2
        flex-col
        items-center
        gap-[62px]
        bg-white
        px-[320px]
        py-[80px]
      "
    >

      {/* =====================================================
          CENTERED HEADING
          ===================================================== */}

      <div
        className="
          flex
          w-[876px]
          flex-col
          items-center
        "
      >

        <div
          className="
            flex
            w-full
            flex-col
            items-center
            gap-[14px]
            text-center
          "
        >

          <h2
            className="
              m-0
              w-full
              text-center
              text-[32px]
              font-medium
              leading-[1.1]
              tracking-[-2px]
              text-[#2b2c30]
            "
          >
            Built for how Indian businesses actually work.
          </h2>

          <p
            className="
              m-0
              w-full
              text-center
              text-[16px]
              font-normal
              leading-[1.2]
              text-[#707173]
            "
          >
            Not a global tool with a rupee sign added on.
          </p>

        </div>

      </div>


      {/* =====================================================
          EXACT CENTERED 1200PX PILL AREA
          ===================================================== */}

      <div
        className="
          flex
          w-[1200px]
          flex-col
          items-center
          justify-center
          gap-[16px]
        "
      >

        {indiaRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="
              flex
              w-full
              items-center
              justify-center
              gap-[16px]
            "
          >

            {row.map(([text, width], itemIndex) => (
              <IndiaPill
                key={`${rowIndex}-${itemIndex}`}
                text={text}
                width={width}
              />
            ))}

          </div>
        ))}

      </div>

    </section>
  );
}


/* =========================================================
   GUIDE FINAL FRAME
   ========================================================= */

function GuideFinalFrame() {
  return (
    <>
      <style>{`
        .guide-final-frame {
          width: 1280px;
          height: 543px;
          margin: 0 auto;

          display: grid;
          grid-template-columns: 818px 437px;
          column-gap: 25px;

          background: #ffffff;

          font-family: Inter, Arial, Helvetica, sans-serif;
          box-sizing: border-box;
        }

        /* =========================================
           LEFT IMAGE
           ========================================= */

        .guide-final-left {
          width: 818px;
          height: 543px;

          border: 1px solid #e8e8e8;
          border-radius: 10px;

          background: #f8f8f8;

          overflow: hidden;
          position: relative;

          box-sizing: border-box;
        }

        .guide-final-left img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
        }

        /* =========================================
           IMAGE SLOT
           ========================================= */

        .guide-final-image-slot {
          position: absolute;
          inset: 0;

          width: 100%;
          height: 100%;

          background: #f8f8f8;
        }

        /* =========================================
           RIGHT COLUMN
           ========================================= */

        .guide-final-right {
          width: 437px;
          height: 543px;

          display: flex;
          flex-direction: column;

          gap: 16px;

          box-sizing: border-box;
        }

        /* =========================================
           CONTENT CARDS
           ========================================= */

        .guide-final-card {
          width: 437px;
          height: 170.33px;

          flex: 0 0 170.33px;

          background: #ffffff;

          border: 1px solid #e5e5e5;

          border-radius: 16px;

          position: relative;

          padding: 24px 30px;

          box-sizing: border-box;

          overflow: hidden;
        }

        /* =========================================
           CARD NUMBERS
           ========================================= */

        .guide-final-number {
          margin: 0;

          color: #0085ff;

          font-size: 52px;
          line-height: 56px;

          font-weight: 500;

          letter-spacing: -2px;
        }

        /* =========================================
           MADE IN INDIA
           ========================================= */

        .guide-final-made {
          margin: 0;

          color: #0085ff;

          font-size: 40px;
          line-height: 46px;

          font-weight: 500;

          letter-spacing: -1.8px;
        }

        /* =========================================
           CARD DESCRIPTION
           ========================================= */

        .guide-final-card-text {
          width: 100%;

          margin: 14px 0 0;

          color: #78788d;

          font-size: 14px;
          line-height: 20px;

          font-weight: 400;
        }

        /* =========================================
           RESPONSIVE
           ========================================= */

        @media (max-width: 1350px) {
          .guide-final-frame {
            transform-origin: top center;

            transform: scale(
              min(1, calc((100vw - 32px) / 1280))
            );
          }
        }

        @media (max-width: 800px) {
          .guide-final-frame {
            width: 100%;
            height: auto;

            transform: none;

            display: flex;
            flex-direction: column;

            gap: 20px;
          }

          .guide-final-left {
            width: 100%;
            height: 400px;
          }

          .guide-final-right {
            width: 100%;
            height: auto;

            display: flex;
            flex-direction: column;

            gap: 16px;
          }

          .guide-final-card {
            width: 100%;
            height: 170.33px;

            flex: 0 0 170.33px;
          }
        }
      `}</style>

      <section className="guide-final-frame">

        {/* =====================================================
            LEFT — IMAGE SLOT
            ===================================================== */}

        <div className="guide-final-left">

          {/*
            PASTE YOUR IMAGE HERE:

            <img
              src="YOUR_CLOUDINARY_IMAGE_URL"
              alt=""
            />
          */}

          <div className="guide-final-image-slot" />

        </div>

        {/* =====================================================
            RIGHT — THREE CONTENT CARDS
            ===================================================== */}

        <div className="guide-final-right">

          {/* ===================================================
              CARD 1 — 100+
              =================================================== */}

          <div className="guide-final-card">

            <h3 className="guide-final-number">
              100+
            </h3>

            <p className="guide-final-card-text">
              Businesses run on Datacircles
            </p>

          </div>

          {/* ===================================================
              CARD 2 — 1,00,000+
              =================================================== */}

          <div className="guide-final-card">

            <h3 className="guide-final-number">
              1,00,000+
            </h3>

            <p className="guide-final-card-text">
              Invoices Raised
            </p>

          </div>

          {/* ===================================================
              CARD 3 — MADE IN INDIA
              =================================================== */}

          <div className="guide-final-card">

            <h3 className="guide-final-made">
              Made in India
            </h3>

            <p className="guide-final-card-text">
              Built in Mumbai, hosted in India
            </p>

          </div>

        </div>

      </section>
    </>
  );
}

/* =========================================================
   COMPLETE PAGE
   ========================================================= */

export default function PlatformOverview() {
  return (
    <div
      className="
        w-full
        min-w-[1440px]
        overflow-x-hidden
        overflow-y-hidden
      "
    >
      <main
        className="
          relative
          mx-auto
          h-[8200px]
          w-[1440px]
          bg-white
        "
      >
        {/* NAVBAR — SAME PLACEMENT AS CODE 2 */}
        <div
          className="
            absolute
            left-1/2
            top-[30px]
            z-[100]
            -translate-x-1/2
          "
        >
          <Navbar />
        </div>

        <Hero />
        <ProblemSection />
        <BusinessFlow />
        <Features />
        <DashboardSection />
        <IndiaSection />

        {/* GUIDE FINAL FRAME — BEFORE CTA */}
        <div
          className="
            absolute
            left-1/2
            top-[7650px]
            z-[20]
            -translate-x-1/2
          "
        >
          <GuideFinalFrame />
        </div>
      </main>

      <CTA />
    </div>
  );
}
