import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrustedAndUsedBy from "../components/TrustedAndUsedBy";
import CRMPrice from "../components/CRMPrice";

const HERO_IMAGE =
  "https://res.cloudinary.com/tpxo8m6a/image/upload/v1787977676/Dashboard_IMG.png";

/* =====================================================
   SHARED BUSINESS IMAGE
   Used by Section 5 and the final/Your Business section.
===================================================== */

const SHARED_BUSINESS_IMAGE =
  "https://res.cloudinary.com/tpxo8m6a/image/upload/v1787762725/e1b401cb4e4c9b406541ebaf104107c3180075c3.png";

/* =====================================================
   SECTION 6 — THREE IMAGE SLOTS
   Keep blank for now.
===================================================== */

const SECTION6_CRM_IMAGE = "";
const SECTION6_INVOICING_IMAGE = "";
const SECTION6_PAYMENTS_IMAGE = "";

/* =====================================================
   SECTION 7 — THREE IMAGES + THREE VIDEOS
   Reserved for future section.
===================================================== */

const SECTION7_IMAGE_1 = "";
const SECTION7_IMAGE_2 = "";
const SECTION7_IMAGE_3 = "";

const SECTION7_VIDEO_1 = "";
const SECTION7_VIDEO_2 = "";
const SECTION7_VIDEO_3 = "";

/* =====================================================
   LAST SECTION
   Uses the same image as Section 5.
===================================================== */

const LAST_SECTION_IMAGE ="https://res.cloudinary.com/tpxo8m6a/image/upload/v1787996595/Dashboard_IMG_2.png";


/* =====================================================
   SECTION 7 — EXACT SVG LAYOUT
   SVG reference: 1440 × 2121
   Three image slots + three video slots.
   All media constants remain blank.
===================================================== */

function Section7() {
  return (
    <section
      className="section7"
      style={{
        position: "relative",
        width: "100%",
        height: "2121px",
        overflow: "hidden",
        background: "#000000",
        color: "#FFFFFF",
        fontFamily: "Inter, Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "1440px",
          height: "2121px",
          margin: "0 auto",
        }}
      >
        {/* =================================================
            TOP HEADING
        ================================================== */}

        <div
          style={{
            position: "absolute",
            left: "108px",
            top: "126px",
            width: "620px",
          }}
        >
          <h2
            style={{
              margin: 0,
              color: "#FFFFFF",
              fontSize: "34px",
              lineHeight: "40px",
              fontWeight: 400,
              letterSpacing: "-1.2px",
            }}
          >
            One Flow from Enquiry to Paid
          </h2>

          <p
            style={{
              margin: "10px 0 0",
              width: "520px",
              color: "#8E8E8E",
              fontSize: "14px",
              lineHeight: "18px",
              fontWeight: 400,
            }}
          >
            Each step carries the last one forward. Nothing is retyped, and
            nothing falls through the gap between two apps.
          </p>
        </div>

        {/* =================================================
            TOP CTA
        ================================================== */}

        <button
          type="button"
          style={{
            position: "absolute",
            left: "1111px",
            top: "180.13px",
            width: "221px",
            height: "52px",
            border: "none",
            borderRadius: "26px",
            background: "#0085FF",
            color: "#FFFFFF",
            fontFamily: "Inter, Arial, Helvetica, sans-serif",
            fontSize: "13px",
            lineHeight: "16px",
            fontWeight: 400,
            cursor: "pointer",
          }}
        >
          CTA BUTTON HERE
        </button>

        {/* =================================================
            IMAGE 1
        ================================================== */}

        <div
          style={{
            position: "absolute",
            left: "108px",
            top: "285.13px",
            width: "392px",
            height: "512px",
            borderRadius: "16px",
            overflow: "hidden",
            background: "#3A3A3A",
          }}
        >
          {SECTION7_IMAGE_1 && (
            <img
              src={SECTION7_IMAGE_1}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                display: "block",
                objectFit: "cover",
              }}
            />
          )}

          <div
            style={{
              position: "absolute",
              left: "16px",
              right: "16px",
              bottom: "28px",
            }}
          >
            <h3
              style={{
                margin: 0,
                color: "#FFFFFF",
                fontSize: "16px",
                lineHeight: "20px",
                fontWeight: 600,
              }}
            >
              Bring your data across
            </h3>

            <p
              style={{
                margin: "5px 0 0",
                color: "#D0D0D0",
                fontSize: "11px",
                lineHeight: "15px",
                fontWeight: 400,
              }}
            >
              Send us your client list from Excel or Tally, and our team helps
              you import it properly.
            </p>
          </div>
        </div>

        {/* =================================================
            IMAGE 2
        ================================================== */}

        <div
          style={{
            position: "absolute",
            left: "524px",
            top: "285.13px",
            width: "392px",
            height: "512px",
            borderRadius: "16px",
            overflow: "hidden",
            background: "#3A3A3A",
          }}
        >
          {SECTION7_IMAGE_2 && (
            <img
              src={SECTION7_IMAGE_2}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                display: "block",
                objectFit: "cover",
              }}
            />
          )}

          <div
            style={{
              position: "absolute",
              left: "16px",
              right: "16px",
              bottom: "28px",
            }}
          >
            <h3
              style={{
                margin: 0,
                color: "#FFFFFF",
                fontSize: "16px",
                lineHeight: "20px",
                fontWeight: 600,
              }}
            >
              Set up your pipeline
            </h3>

            <p
              style={{
                margin: "5px 0 0",
                color: "#D0D0D0",
                fontSize: "11px",
                lineHeight: "15px",
                fontWeight: 400,
              }}
            >
              Use the stages your business actually works in, and add your
              team when you're ready.
            </p>
          </div>
        </div>

        {/* =================================================
            IMAGE 3
        ================================================== */}

        <div
          style={{
            position: "absolute",
            left: "940px",
            top: "285.13px",
            width: "392px",
            height: "512px",
            borderRadius: "16px",
            overflow: "hidden",
            background: "#3A3A3A",
          }}
        >
          {SECTION7_IMAGE_3 && (
            <img
              src={SECTION7_IMAGE_3}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                display: "block",
                objectFit: "cover",
              }}
            />
          )}

          <div
            style={{
              position: "absolute",
              left: "16px",
              right: "16px",
              bottom: "28px",
            }}
          >
            <h3
              style={{
                margin: 0,
                color: "#FFFFFF",
                fontSize: "16px",
                lineHeight: "20px",
                fontWeight: 600,
              }}
            >
              Start winning and billing
            </h3>

            <p
              style={{
                margin: "5px 0 0",
                color: "#D0D0D0",
                fontSize: "11px",
                lineHeight: "15px",
                fontWeight: 400,
              }}
            >
              Chase leads, send GST invoices, and watch the payments land in
              one place.
            </p>
          </div>
        </div>

        {/* =================================================
            REAL BUSINESSES / REAL RESULTS
        ================================================== */}

        <div
          style={{
            position: "absolute",
            left: "131px",
            top: "962px",
            width: "760px",
          }}
        >
          <div
            style={{
              color: "#0085FF",
              fontSize: "12px",
              lineHeight: "16px",
              fontWeight: 500,
            }}
          >
            Real Businesses. Real Results.
          </div>

          <h2
            style={{
              margin: "20px 0 0",
              width: "500px",
              color: "#FFFFFF",
              fontSize: "34px",
              lineHeight: "39px",
              fontWeight: 400,
              letterSpacing: "-1.4px",
            }}
          >
            Datacircles Replaced
            <br />
            3 Tools for Us
          </h2>

          <p
            style={{
              margin: "17px 0 0",
              width: "610px",
              color: "#858585",
              fontSize: "14px",
              lineHeight: "19px",
              fontWeight: 400,
            }}
          >
            Founders, accountants, and agency owners trust DataCircles to stay
            on top of sales and money without the stress of complex software.
          </p>
        </div>

        {/* =================================================
            VIDEO 1 — LEFT PARTIAL CARD
        ================================================== */}

        <div
          style={{
            position: "absolute",
            left: "-1102px",
            top: "1249.13px",
            width: "1177.33px",
            height: "685px",
            borderRadius: "8px",
            overflow: "hidden",
            background: "#111216",
            opacity: 0.72,
          }}
        >
          {SECTION7_VIDEO_1 && (
            <video
              src={SECTION7_VIDEO_1}
              playsInline
              controls
              style={{
                width: "100%",
                height: "100%",
                display: "block",
                objectFit: "cover",
              }}
            />
          )}
        </div>

        {/* =================================================
            VIDEO 2 — CENTER CARD
        ================================================== */}

        <div
          style={{
            position: "absolute",
            left: "131.333px",
            top: "1249.13px",
            width: "1177.33px",
            height: "685px",
            borderRadius: "8px",
            overflow: "hidden",
            background: "#111216",
          }}
        >
          {SECTION7_VIDEO_2 && (
            <video
              src={SECTION7_VIDEO_2}
              playsInline
              controls
              style={{
                width: "100%",
                height: "100%",
                display: "block",
                objectFit: "cover",
              }}
            />
          )}

          <div
            style={{
              position: "absolute",
              left: "32px",
              right: "32px",
              bottom: "29px",
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                color: "#FFFFFF",
                fontSize: "16px",
                lineHeight: "20px",
                fontWeight: 600,
              }}
            >
              Pradhyumn Dhondi, Creative Director
            </div>

            <p
              style={{
                margin: "5px 0 0",
                width: "560px",
                color: "rgba(255,255,255,0.72)",
                fontSize: "11px",
                lineHeight: "15px",
                fontWeight: 400,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* =================================================
            VIDEO 3 — RIGHT PARTIAL CARD
        ================================================== */}

        <div
          style={{
            position: "absolute",
            left: "1364.67px",
            top: "1249.13px",
            width: "1177.33px",
            height: "685px",
            borderRadius: "8px",
            overflow: "hidden",
            background: "#111216",
            opacity: 0.72,
          }}
        >
          {SECTION7_VIDEO_3 && (
            <video
              src={SECTION7_VIDEO_3}
              playsInline
              controls
              style={{
                width: "100%",
                height: "100%",
                display: "block",
                objectFit: "cover",
              }}
            />
          )}
        </div>

        {/* =================================================
            CAROUSEL ARROWS
        ================================================== */}

        <button
          type="button"
          aria-label="Previous story"
          style={{
            position: "absolute",
            left: "1218px",
            top: "1990.13px",
            width: "38px",
            height: "38px",
            padding: 0,
            border: "none",
            borderRadius: "50%",
            background: "#111216",
            color: "#F4F3EA",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            lineHeight: 1,
            cursor: "pointer",
          }}
        >
          ←
        </button>

        <button
          type="button"
          aria-label="Next story"
          style={{
            position: "absolute",
            left: "1272px",
            top: "1990.13px",
            width: "38px",
            height: "38px",
            padding: 0,
            border: "none",
            borderRadius: "50%",
            background: "#111216",
            color: "#F4F3EA",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            lineHeight: 1,
            cursor: "pointer",
          }}
        >
          →
        </button>
      </div>

      {/* =====================================================
          SECTION 7 RESPONSIVE SCALING
      ===================================================== */}

      <style>{`
        @media (max-width: 1439px) {
          .section7 {
            height: calc(2121px * (100vw / 1440));
            min-height: 0;
          }

          .section7 > div {
            transform-origin: top center;
            transform: scale(
              calc(100vw / 1440)
            );
          }
        }

        @media (max-width: 700px) {
          .section7 {
            height: calc(2121px * (100vw / 1440));
          }
        }
      `}</style>
    </section>
  );
}

function Home() {
  return (
    <main className="min-h-screen w-full bg-white font-inter">

        <style>{`
          /* Responsive layout only — existing content, copy, images and desktop
             sizing are preserved. These rules only take effect below desktop widths. */

          @media (max-width: 1200px) {
            main > section:nth-of-type(3) {
              max-width: calc(100% - 32px) !important;
              padding-left: 24px !important;
              padding-right: 24px !important;
            }

            main > section:nth-of-type(4) {
              padding-left: 40px !important;
              padding-right: 40px !important;
            }

            main > section:nth-of-type(7) {
              grid-template-columns: minmax(0, 520px) minmax(0, 1fr) !important;
              column-gap: 48px !important;
              padding-left: 24px !important;
              padding-right: 24px !important;
            }
          }

          @media (max-width: 1024px) {
            /* Hero */
            main > section:nth-of-type(1) {
              aspect-ratio: auto !important;
              min-height: 720px;
            }

            main > section:nth-of-type(1) > div:nth-of-type(2) {
              width: 48% !important;
            }

            main > section:nth-of-type(1) > div:nth-of-type(3) {
              left: 43% !important;
              width: 68% !important;
            }

            /* Trusted logos */
            main > section:nth-of-type(2) {
              max-width: calc(100% - 32px) !important;
            }

            main > section:nth-of-type(2) > div:nth-of-type(2) > div {
              width: min(820px, 100%) !important;
            }

            /* Business value */
            main > section:nth-of-type(3) > div:nth-of-type(2) {
              flex-wrap: wrap !important;
              gap: 24px !important;
              justify-content: center !important;
            }

            main > section:nth-of-type(3) > div:nth-of-type(2) > div {
              width: min(300px, 30%) !important;
            }

            /* One system section */
            main > section:nth-of-type(4) {
              flex-direction: column !important;
              gap: 48px !important;
              padding-left: 40px !important;
              padding-right: 40px !important;
            }

            main > section:nth-of-type(4) > div:first-child {
              width: 100% !important;
              height: auto !important;
              max-height: 720px;
            }

            main > section:nth-of-type(4) > div:first-child img {
              width: 100% !important;
              height: auto !important;
              object-fit: contain !important;
            }

            main > section:nth-of-type(4) > div:last-child {
              width: 100% !important;
            }

            /* Section 4 — flow */
            main > section:nth-of-type(5) > div {
              max-width: 100% !important;
              padding-left: 24px;
              padding-right: 24px;
              box-sizing: border-box;
            }

            main > section:nth-of-type(5) .grid-cols-3 {
              grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            }

            main > section:nth-of-type(5) .grid-cols-2 {
              width: 66.6667% !important;
            }

            /* Section 5 — company/dashboard */
            main > section:nth-of-type(6) {
              max-width: calc(100% - 48px) !important;
            }

            main > section:nth-of-type(6) > div {
              height: auto !important;
              min-height: 660px;
              flex-direction: column !important;
            }

            main > section:nth-of-type(6) > div > div:first-child {
              width: 100% !important;
              height: auto !important;
              min-height: 360px;
              padding: 40px !important;
            }

            main > section:nth-of-type(6) > div > div:first-child h2,
            main > section:nth-of-type(6) > div > div:first-child p {
              width: 100% !important;
              max-width: 520px;
            }

            main > section:nth-of-type(6) > div > div:last-child {
              width: 100% !important;
              height: 520px !important;
              flex: none !important;
            }

            main > section:nth-of-type(6) > div > div:last-child img {
              width: min(600px, 100%) !important;
              max-width: 600px !important;
            }

            /* Section 6 */
            main > section:nth-of-type(7) {
              display: block !important;
              width: calc(100% - 48px) !important;
              max-width: 1216px !important;
              padding-left: 0 !important;
              padding-right: 0 !important;
              box-sizing: border-box !important;
            }

            main > section:nth-of-type(7) > div:first-child {
              width: 100% !important;
            }

            main > section:nth-of-type(7) > div:first-child > div {
              width: 100% !important;
            }

            main > section:nth-of-type(7) > div:first-child > div:nth-child(3),
            main > section:nth-of-type(7) > div:first-child > div:nth-child(3) > div {
              width: 100% !important;
            }

            main > section:nth-of-type(7) > div:last-child {
              width: 100% !important;
              margin-top: 48px;
            }
          }

          @media (max-width: 768px) {
            /* Hero */
            main > section:nth-of-type(1) {
              width: calc(100% - 24px) !important;
              min-height: 680px;
              border-radius: 18px !important;
            }

            main > section:nth-of-type(1) > div:nth-of-type(2) {
              left: 6% !important;
              top: 24% !important;
              width: 88% !important;
            }

            main > section:nth-of-type(1) > div:nth-of-type(3) {
              left: 6% !important;
              top: 54% !important;
              width: 90% !important;
            }

            /* Business value */
            main > section:nth-of-type(3) {
              padding: 32px 16px !important;
            }

            main > section:nth-of-type(3) > div:nth-of-type(2) {
              flex-direction: column !important;
            }

            main > section:nth-of-type(3) > div:nth-of-type(2) > div {
              width: 100% !important;
            }

            /* One system */
            main > section:nth-of-type(4) {
              padding: 40px 20px !important;
            }

            main > section:nth-of-type(4) > div:last-child h2 {
              font-size: 28px !important;
            }

            /* Section 4 — flow */
            main > section:nth-of-type(5) > div {
              padding-left: 16px;
              padding-right: 16px;
            }

            main > section:nth-of-type(5) > div > div:first-child {
              width: 100% !important;
            }

            main > section:nth-of-type(5) .grid-cols-3 {
              grid-template-columns: 1fr !important;
              gap: 28px !important;
            }

            main > section:nth-of-type(5) .grid-cols-2 {
              width: 100% !important;
              grid-template-columns: 1fr !important;
              gap: 28px !important;
              margin-top: 28px !important;
            }

            main > section:nth-of-type(5) .relative.flex.min-h-\\[175px\\] {
              min-height: auto !important;
            }

            /* Section 5 */
            main > section:nth-of-type(6) {
              max-width: calc(100% - 24px) !important;
            }

            main > section:nth-of-type(6) > div > div:first-child {
              padding: 32px 24px !important;
              min-height: 320px;
            }

            main > section:nth-of-type(6) > div > div:last-child {
              height: 420px !important;
            }

            /* Section 6 */
            main > section:nth-of-type(7) {
              width: calc(100% - 32px) !important;
              margin-top: 40px !important;
            }

            main > section:nth-of-type(7) > div:first-child > div:first-child {
              height: auto !important;
              white-space: normal !important;
              font-size: 30px !important;
              line-height: 34px !important;
              letter-spacing: -0.8px !important;
            }

            main > section:nth-of-type(7) > div:first-child > div:nth-child(2) {
              width: 100% !important;
              font-size: 15px !important;
              line-height: 20px !important;
            }

            main > section:nth-of-type(7) > div:first-child > div:nth-child(3) > div {
              height: 56px !important;
              font-size: 15px !important;
            }

            main > section:nth-of-type(7) > div:first-child > button {
              min-width: 174px !important;
            }
          }

          @media (max-width: 480px) {
            /* Keep all existing content; only reduce layout dimensions for narrow screens. */
            main > section:nth-of-type(1) {
              min-height: 620px;
            }

            main > section:nth-of-type(1) > div:nth-of-type(2) h1 {
              font-size: 28px !important;
            }

            main > section:nth-of-type(4) {
              gap: 32px !important;
            }

            main > section:nth-of-type(6) > div > div:first-child {
              padding: 28px 20px !important;
            }

            main > section:nth-of-type(6) > div > div:last-child {
              height: 320px !important;
            }

            main > section:nth-of-type(7) > div:first-child > div:first-child {
              font-size: 27px !important;
              line-height: 32px !important;
            }

            main > section:nth-of-type(7) > div:first-child > div:nth-child(3) > div {
              height: 52px !important;
            }

            main > section:nth-of-type(7) > div:first-child > button {
              width: auto !important;
              max-width: 100% !important;
              font-size: 15px !important;
            }
          }
        `}</style>
      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section
        className="
          relative
          mx-auto
          aspect-[1392/890]
          w-[calc(100%-32px)]
          max-w-[1392px]
          overflow-hidden
          rounded-[24px]
          bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFF_23%,#BADEFF_70%,#BADEFF_100%)]
        "
      >
        {/* =================================================
            NAVBAR
        ================================================== */}

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

        {/* =================================================
            HERO CONTENT
        ================================================== */}

        <div
          className="
            absolute
            left-[6.75%]
            top-[29.9%]
            z-30
            w-[45.83%]
          "
        >
          {/* PILL */}

          <div
            className="
              flex
              h-[24.8px]
              w-fit
              items-center
              gap-[5px]
              rounded-[999px]
              bg-[#EBE6E0]/20
              px-[10px]
              py-[4px]
            "
          >
            <span
              className="
                h-[5px]
                w-[5px]
                shrink-0
                rounded-full
                bg-[#1683F7]
              "
            />

            <span
              className="
                whitespace-nowrap
                text-[9px]
                font-normal
                leading-[17px]
                text-[#444444]
              "
            >
              CRM + Invoicing Infrastructure
            </span>
          </div>

          {/* HEADING */}

          <h1
            className="
              mt-[18px]
              w-full
              text-[clamp(28px,3.45vw,48px)]
              font-semibold
              leading-[1.08]
              tracking-[-0.045em]
              text-[#171717]
            "
          >
            Win customers and get paid,
            <br />
            all in once place
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              mt-[15px]
              w-full
              max-w-[638px]
              text-[clamp(9px,0.95vw,13.2px)]
              font-normal
              leading-[1.48]
              text-[#635557]
            "
          >
            CRM and GST invoicing in a single app, built for Indian
            businesses. The lead you chase today becomes the invoice you send
            tomorrow, without switching between tools.
          </p>

          {/* BUTTONS */}

          <div
            className="
              mt-[16px]
              flex
              h-[49px]
              w-[307px]
              items-center
              gap-[8px]
              origin-left
              scale-[0.7]
              min-[900px]:scale-[0.85]
              min-[1200px]:scale-100
            "
          >
            {/* START FREE */}

            <a
              href="/signup"
              className="
                flex
                h-[49px]
                w-[144px]
                items-center
                justify-center
                rounded-[999px]
                bg-[#1683F7]
                text-[13px]
                font-medium
                leading-none
                text-white
                transition-colors
                hover:bg-[#0878E8]
              "
            >
              Start Free
            </a>

            {/* BOOK A DEMO */}

            <a
              href="/demo"
              className="
                flex
                h-[49px]
                w-[155px]
                items-center
                justify-center
                rounded-[999px]
                bg-white
                text-[13px]
                font-medium
                leading-none
                text-[#171717]
                shadow-[0_1px_5px_rgba(0,0,0,0.04)]
                transition-shadow
                hover:shadow-[0_4px_15px_rgba(0,0,0,0.08)]
              "
            >
              Book a Demo
            </a>
          </div>

          {/* TRIAL TEXT */}

          <p
            className="
              mt-[1px]
              text-[8px]
              font-normal
              leading-[12px]
              text-[#635557]
              min-[900px]:mt-[9px]
            "
          >
            7-day free trial · No card required · GST-ready · Works on any
            device
          </p>
        </div>

        {/* =================================================
            DASHBOARD IMAGE
        ================================================== */}

        <div
          className="
            absolute
            left-[48.7%]
            top-[8.1%]
            z-20
            w-[60%]
            overflow-hidden
            rounded-[24px]
            border
            border-white
            bg-white
            shadow-[0_12px_40px_rgba(80,140,210,0.10)]
          "
        >
          {/* Dashboard */}

          <img
            src={HERO_IMAGE}
            alt="DataCircles dashboard"
            className="
              block
              w-full
              rounded-[23px]
              object-contain
            "
            fetchPriority="high"
            decoding="async"
          />

        </div>
      </section>

      {/* =====================================================
    TRUSTED AND USED BY
====================================================== */}

      <TrustedAndUsedBy />
{/* =====================================================
    BUSINESS VALUE SECTION
====================================================== */}

<section
  className="
    mx-auto
    mt-[32px]
    w-[calc(100%-32px)]
    max-w-[1280px]
    px-[30px]
    py-[50px]
  "
>
  {/* =================================================
      GROWTH PILL + HEADING
  ================================================== */}

  <div className="flex w-full flex-col items-center">
    {/* Built for Growth Pill */}

    <div
      className="
        flex
        h-[24px]
        w-[118px]
        items-center
        justify-center
        gap-[5px]
        rounded-[999px]
        bg-[#F7F5F3]
        px-[10px]
        py-[4px]
      "
    >
      <span
        className="
          h-[5px]
          w-[5px]
          rounded-full
          bg-[#1683F7]
        "
      />

      <span
        className="
          whitespace-nowrap
          text-[8px]
          font-normal
          leading-[16px]
          text-[#666666]
        "
      >
        Built for Growth
      </span>
    </div>

    {/* Main Heading */}

    <h2
      className="
        mt-[16px]
        w-full
        text-center
        text-[clamp(24px,2.43vw,33.8px)]
        font-medium
        leading-[1.17]
        tracking-[-1.08px]
        text-[#231014]
      "
    >
      One system. Every moving part of your business.
    </h2>
  </div>

  {/* =================================================
      STATISTICS
  ================================================== */}

  <div
    className="
      mt-[20px]
      flex
      w-full
      items-center
      justify-between
    "
  >
    {/* ================= 1× PLATFORM ================= */}

    <div
      className="
        flex
        h-[68px]
        w-[300px]
        flex-col
        items-center
        justify-center
      "
    >
      <div
        className="
          text-center
          text-[clamp(32px,4vw,56px)]
          font-medium
          leading-[1.2]
          tracking-[-0.56px]
          text-black
        "
      >
        1× Platform
      </div>

      <span
        className="
          mt-[-2px]
          text-center
          text-[7px]
          font-normal
          leading-[10px]
          text-[#666666]
        "
      >
        CRM + Billing
      </span>
    </div>

    {/* ================= 100% ================= */}

    <div
      className="
        flex
        h-[68px]
        w-[300px]
        flex-col
        items-center
        justify-center
      "
    >
      <div
        className="
          text-center
          text-[clamp(32px,4vw,56px)]
          font-medium
          leading-[1.2]
          tracking-[-0.56px]
          text-black
        "
      >
        100%
      </div>

      <span
        className="
          mt-[-2px]
          text-center
          text-[7px]
          font-normal
          leading-[10px]
          text-[#666666]
        "
      >
        GST Ready
      </span>
    </div>

    {/* ================= ₹0 UPFRONT ================= */}

    <div
      className="
        flex
        h-[68px]
        w-[300px]
        flex-col
        items-center
        justify-center
      "
    >
      <div
        className="
          whitespace-nowrap
          text-center
          text-[clamp(32px,4vw,56px)]
          font-medium
          leading-[1.2]
          tracking-[-0.56px]
          text-black
        "
      >
        ₹0 Upfront
      </div>

      <span
        className="
          mt-[-2px]
          text-center
          text-[7px]
          font-normal
          leading-[10px]
          text-[#666666]
        "
      >
        7-Day Free Trial
      </span>
    </div>
  </div>

  {/* =================================================
      SPACE FOR NEXT CONTENT
      You can paste your next Figma content here.
  ================================================== */}

  <div className="mt-[70px]">
    {/* Next section content will go here */}
  </div>
</section>
{/* =====================================================
    ONE SYSTEM SECTION
====================================================== */}

<section
  className="
    mx-auto
    flex
    w-full
    max-w-[1440px]
    flex-row
    items-start
    gap-[80px]
    bg-white
    px-[112px]
    py-[80px]
  "
>
  {/* =================================================
      LEFT IMAGE
  ================================================== */}

  <div
    className="
      h-[720px]
      w-[600px]
      shrink-0
      overflow-hidden
      rounded-[16px]
      bg-[#F7F7F7]
    "
  >
    <img
      src="https://res.cloudinary.com/tpxo8m6a/image/upload/v1787752478/d6f257d56522395c4acc1a366f2bc996ca30f77b.png"
      alt="DataCircles platform dashboard"
      width="600"
      height="720"
      loading="eager"
      fetchPriority="high"
      decoding="async"
      className="
        block
        h-full
        w-full
        rounded-[16px]
        object-cover
      "
      onError={(e) => {
        console.error("Cloudinary image failed to load:", e.currentTarget.src);
      }}
    />
  </div>

  {/* =================================================
      RIGHT CONTENT
  ================================================== */}

  <div
    className="
      flex
      w-[536px]
      shrink-0
      flex-col
      gap-[32px]
    "
  >
    {/* ===============================================
        HEADING + DESCRIPTION
    ================================================ */}

    <div
      className="
        flex
        w-full
        flex-col
        gap-[14px]
      "
    >
      {/* Heading */}

      <h2
        className="
          m-0
          w-full
          text-[32px]
          font-medium
          leading-[110%]
          tracking-[-2px]
          text-[#2B2C30]
        "
      >
        Your business shouldn't live in two systems that never talk.
      </h2>

      {/* Description */}

      <p
        className="
          m-0
          w-full
          text-[16px]
          font-normal
          leading-[120%]
          tracking-[0]
          text-[#666666]
        "
      >
        Leads in one app, invoices in another, and you in the middle copying
        details from one to the other. Every win deal means retyping what you
        already typed once, and answering "has this client paid?" means
        opening two tabs.
      </p>
    </div>

    {/* ===============================================
        BULLET LIST
    ================================================ */}

    <div className="flex w-full flex-col">
      {/* Bullet 1 */}

      <div
        className="
          flex
          min-h-[40px]
          w-full
          items-center
          border-b
          border-[#E0E0E1]
        "
      >
        <p
          className="
            m-0
            w-full
            py-[10px]
            text-[16px]
            font-normal
            leading-[120%]
            tracking-[0]
            text-[#2B2C30]
          "
        >
          •&nbsp;&nbsp;The same client details entered twice, in two different
          tools
        </p>
      </div>

      {/* Bullet 2 */}

      <div
        className="
          flex
          min-h-[40px]
          w-full
          items-center
          border-b
          border-[#E0E0E1]
        "
      >
        <p
          className="
            m-0
            w-full
            py-[10px]
            text-[16px]
            font-normal
            leading-[120%]
            tracking-[0]
            text-[#2B2C30]
          "
        >
          •&nbsp;&nbsp;Leads going cold because follow-ups live in someone's
          memory
        </p>
      </div>

      {/* Bullet 3 */}

      <div
        className="
          flex
          min-h-[40px]
          w-full
          items-center
          border-b
          border-[#E0E0E1]
        "
      >
        <p
          className="
            m-0
            w-full
            py-[10px]
            text-[16px]
            font-normal
            leading-[120%]
            tracking-[0]
            text-[#2B2C30]
          "
        >
          •&nbsp;&nbsp;No single view of who owes you what
        </p>
      </div>

      {/* Bullet 4 */}

      <div
        className="
          flex
          min-h-[40px]
          w-full
          items-center
          border-b
          border-[#E0E0E1]
        "
      >
        <p
          className="
            m-0
            w-full
            py-[10px]
            text-[16px]
            font-normal
            leading-[120%]
            tracking-[0]
            text-[#2B2C30]
          "
        >
          •&nbsp;&nbsp;Two subscriptions, and still no full picture of a client
        </p>
      </div>
    </div>

    {/* ===============================================
        CTA
    ================================================ */}

    <button
      type="button"
      className="
        flex
        h-[40px]
        w-fit
        items-center
        justify-center
        gap-[8px]
        rounded-[999px]
        bg-[#1683F7]
        px-[16px]
        text-[12px]
        font-medium
        leading-[16px]
        text-white
        transition-opacity
        hover:opacity-90
      "
    >
      Start Your Project
      <span className="text-[14px] leading-none">
        →
      </span>
    </button>
  </div>
</section>
{/* =========================================================
    SECTION 4 — ONE FLOW FROM ENQUIRY TO PAID
========================================================= */}

<section className="w-full bg-white">
  <div className="mx-auto w-full max-w-[1216px] pt-[80px] pb-[80px]">

    {/* Heading */}
    <div className="mx-auto flex w-[444px] flex-col items-center text-center">
      <h2 className="m-0 text-[35.2px] font-medium leading-[39.6px] tracking-[-1.08px] text-[#2B2C30]">
        One Flow from Enquiry to Paid
      </h2>

      <p className="m-0 mt-[4px] text-[16px] font-normal leading-[19.2px] text-[#707173]">
        Each step carries the last one forward. Nothing is retyped,
        and nothing falls through the gap between two apps.
      </p>
    </div>

    {/* Steps */}
    <div className="mx-auto mt-[32px] w-full max-w-[1216px]">

      {/* ================= ROW 1 ================= */}
      <div className="grid grid-cols-3 gap-x-[24px]">

        {/* 1 — Enquiry */}
        <div className="relative flex min-h-[175px] flex-col items-center text-center">

          <div className="relative flex h-[64px] w-full items-center justify-center">


            <div className="relative z-10 flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#0A5AFE] text-[20px] font-semibold text-white">
              1
            </div>
          </div>

          <div className="mt-[8px] text-[20px] font-semibold leading-[22px] text-[#2B2C30]">
            Enquiry
          </div>

          <p className="m-0 mt-[8px] w-[384px] max-w-full text-center text-[16px] font-normal leading-[19.2px] text-[#707173]">
            We understand your business goals, study your audience behavior,
            and analyze existing data to uncover real growth opportunities.
          </p>
        </div>


        {/* 2 — Follow-Up */}
        <div className="relative flex min-h-[175px] flex-col items-center text-center">

          <div className="relative flex h-[64px] w-full items-center justify-center">



            <div className="relative z-10 flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#0A5AFE] text-[20px] font-semibold text-white">
              2
            </div>
          </div>

          <div className="mt-[8px] text-[20px] font-semibold leading-[22px] text-[#2B2C30]">
            Follow-Up
          </div>

          <p className="m-0 mt-[8px] w-[384px] max-w-full text-center text-[16px] font-normal leading-[19.2px] text-[#707173]">
            We understand your business goals, study your audience behavior,
            and analyze existing data to uncover real growth opportunities.
          </p>
        </div>


        {/* 3 — Quote */}
        <div className="relative flex min-h-[175px] flex-col items-center text-center">

          <div className="relative flex h-[64px] w-full items-center justify-center">


            <div className="relative z-10 flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#0A5AFE] text-[20px] font-semibold text-white">
              3
            </div>
          </div>

          <div className="mt-[8px] text-[20px] font-semibold leading-[22px] text-[#2B2C30]">
            Quote
          </div>

          <p className="m-0 mt-[8px] w-[384px] max-w-full text-center text-[16px] font-normal leading-[19.2px] text-[#707173]">
            We understand your business goals, study your audience behavior,
            and analyze existing data to uncover real growth opportunities.
          </p>
        </div>

      </div>


      {/* ================= ROW 2 ================= */}
      <div className="mx-auto mt-[40px] grid w-[816px] grid-cols-2 gap-x-[24px]">

        {/* 4 — Invoice */}
        <div className="relative flex min-h-[175px] flex-col items-center text-center">

          <div className="relative flex h-[64px] w-full items-center justify-center">


            <div className="relative z-10 flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#0A5AFE] text-[20px] font-semibold text-white">
              4
            </div>
          </div>

          <div className="mt-[8px] text-[20px] font-semibold leading-[22px] text-[#2B2C30]">
            Invoice
          </div>

          <p className="m-0 mt-[8px] w-[384px] max-w-full text-center text-[16px] font-normal leading-[19.2px] text-[#707173]">
            We understand your business goals, study your audience behavior,
            and analyze existing data to uncover real growth opportunities.
          </p>
        </div>


        {/* 5 — Get Paid */}
        <div className="relative flex min-h-[175px] flex-col items-center text-center">

          <div className="relative flex h-[64px] w-full items-center justify-center">


            <div className="relative z-10 flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#0A5AFE] text-[20px] font-semibold text-white">
              5
            </div>
          </div>

          <div className="mt-[8px] text-[20px] font-semibold leading-[22px] text-[#2B2C30]">
            Get Paid
          </div>

          <p className="m-0 mt-[8px] w-[384px] max-w-full text-center text-[16px] font-normal leading-[19.2px] text-[#707173]">
            We understand your business goals, study your audience behavior,
            and analyze existing data to uncover real growth opportunities.
          </p>
        </div>

      </div>

    </div>
  </div>
</section>
{/* =====================================================
    SECTION 5 — KEEP EVERY COMPANY, RELATIONSHIP...
====================================================== */}

<section
  className="
    mx-auto
    w-full
    max-w-[1216px]
    overflow-hidden
    rounded-[8px]
    border
    border-[#C4C4C5]
    bg-white
  "
>
  <div
    className="
      flex
      h-[660.48px]
      w-full
    "
  >

    {/* =================================================
        LEFT CONTENT — 550px
    ================================================== */}

    <div
      className="
        flex
        h-full
        w-[550px]
        shrink-0
        flex-col
        justify-between
        px-[50px]
        py-[50px]
      "
    >

      {/* ---------------------------------------------
          TOP CONTENT
      ---------------------------------------------- */}

      <div>

        {/* Heading */}

        <h2
          className="
            m-0
            w-[340px]
            text-[16px]
            font-medium
            leading-[120%]
            tracking-[0]
            text-[#231014]
          "
        >
          Keep every company, relationship, and interaction
          organized in one place.
        </h2>


        {/* Description */}

        <p
          className="
            m-0
            mt-[12px]
            w-[340px]
            text-[11.4px]
            font-normal
            leading-[16.8px]
            tracking-[0]
            text-[#635557]
          "
        >
          Create a complete business profile for every company
          you work with. Centralize contacts, deals, invoices,
          notes, tasks, meetings, and activity history so your
          team always has the full context before making the next
          move.
        </p>

      </div>


      {/* ---------------------------------------------
          QUOTE
      ---------------------------------------------- */}

      <div
        className="
          w-[329px]
        "
      >

        <p
          className="
            m-0
            w-[329px]
            text-[13.3px]
            font-normal
            leading-[19.6px]
            tracking-[0]
            text-[#231014]
          "
        >
          “We wanted businesses to stop searching across five
          different places just to understand what’s happening
          with one customer. DataCircles brings that entire
          relationship together.”
        </p>


        {/* Quote author */}

        <p
          className="
            m-0
            mt-[8px]
            text-[11px]
            font-normal
            leading-[16px]
            tracking-[0]
            text-[#635557]
          "
        >
          — Yash Mishra, CEO &amp; Founder
        </p>

      </div>

    </div>


    {/* =================================================
        RIGHT IMAGE CONTAINER
    ================================================== */}

    <div
      className="
        relative
        h-full
        flex-1
        overflow-hidden
        bg-[#F7F5F3]
      "
    >

      {/* Dashboard image */}

      <img
        src={SHARED_BUSINESS_IMAGE}
        alt="DataCircles dashboard"
        loading="lazy"
        decoding="async"
        className="
          absolute
          bottom-0
          left-0
          h-auto
          w-[600px]
          max-w-none
          object-contain
        "
      />

    </div>

  </div>
</section>
{/* =========================
    SECTION 6
    One Flow from Enquiry to Paid
========================= */}

<section
  style={{
    width: "100%",
    maxWidth: "1216px",
    margin: "0 auto",
    marginTop: "56px",
    display: "grid",
    gridTemplateColumns: "520px 1fr",
    columnGap: "80px",
    alignItems: "start",
    boxSizing: "border-box",
  }}
>
  {/* ================= LEFT SIDE ================= */}
  <div
    style={{
      width: "520px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      boxSizing: "border-box",
    }}
  >
    {/* Heading */}
    <div
      style={{
        width: "520px",
        height: "40px",
        fontFamily: "Inter, sans-serif",
        fontSize: "35.2px",
        lineHeight: "39.6px",
        fontWeight: 500,
        letterSpacing: "-1.08px",
        color: "#2B2C30",
        whiteSpace: "nowrap",
        boxSizing: "border-box",
      }}
    >
      One Flow from Enquiry to Paid
    </div>

    {/* Description */}
    <div
      style={{
        width: "520px",
        marginTop: "0px",
        fontFamily: "Inter, sans-serif",
        fontSize: "16px",
        lineHeight: "19.2px",
        fontWeight: 400,
        letterSpacing: "0px",
        color: "#707173",
        boxSizing: "border-box",
      }}
    >
      Each step carries the last one forward. Nothing is retyped, and
      nothing falls through the gap between two apps.
    </div>

    {/* CRM / Invoicing / Payments */}
    <div
      style={{
        width: "520px",
        marginTop: "22px",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      {/* CRM */}
      <div
        style={{
          width: "520px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #E0E0E1",
          boxSizing: "border-box",
          fontFamily: "Inter, sans-serif",
          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: 600,
          color: "#1E1E1E",
        }}
      >
        <span style={{ opacity: 0.5 }}>
          CRM
        </span>

        <span
          style={{
            fontSize: "22px",
            lineHeight: "24px",
            fontWeight: 400,
            opacity: 0.5,
          }}
        >
          →
        </span>
      </div>

      {/* Invoicing */}
      <div
        style={{
          width: "520px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #E0E0E1",
          boxSizing: "border-box",
          fontFamily: "Inter, sans-serif",
          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: 600,
          color: "#1E1E1E",
        }}
      >
        <span style={{ opacity: 0.5 }}>
          Invoicing
        </span>

        <span
          style={{
            fontSize: "22px",
            lineHeight: "24px",
            fontWeight: 400,
            opacity: 0.5,
          }}
        >
          →
        </span>
      </div>

      {/* Payments */}
      <div
        style={{
          width: "520px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #E0E0E1",
          boxSizing: "border-box",
          fontFamily: "Inter, sans-serif",
          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: 600,
          color: "#1E1E1E",
        }}
      >
        <span style={{ opacity: 0.5 }}>
          Payments
        </span>

        <span
          style={{
            fontSize: "22px",
            lineHeight: "24px",
            fontWeight: 400,
            opacity: 0.5,
          }}
        >
          →
        </span>
      </div>
    </div>

    {/* Start Your Project */}
    <button
      type="button"
      style={{
        marginTop: "20px",
        height: "48px",
        minWidth: "174px",
        padding: "0 20px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        border: "none",
        borderRadius: "999px",
        background: "#0A5AFE",
        color: "#FFFFFF",
        fontFamily: "Inter, sans-serif",
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: 600,
        cursor: "pointer",
        boxSizing: "border-box",
      }}
    >
      <span>Start Your Project</span>

      <span
        style={{
          fontSize: "20px",
          lineHeight: "20px",
          fontWeight: 400,
        }}
      >
        →
      </span>
    </button>
  </div>

  {/* =====================================================
    SECTION 6 — CRM / INVOICING / PAYMENTS
    EXACT SVG LAYOUT
===================================================== */}

<section
  className="
    mx-auto
    w-full
    max-w-[523px]
    bg-white
    font-inter
  "
>
  {/* =================================================
      CRM IMAGE
  ================================================== */}

  <div
    className="
      h-[300px]
      w-full
      overflow-hidden
      rounded-[8px]
      bg-[#EAEAEA]
    "
  >
    {SECTION6_CRM_IMAGE && (
      <img
        src={SECTION6_CRM_IMAGE}
        alt="CRM dashboard"
        className="
          block
          h-full
          w-full
          object-cover
        "
      />
    )}
  </div>


  {/* =================================================
      CRM CONTENT
  ================================================== */}

  <div className="w-full pt-[21px]">
    <h2
      className="
        m-0
        text-[24px]
        font-semibold
        leading-[29px]
        tracking-[-0.6px]
        text-[#242424]
      "
    >
      Never lose a lead again.
    </h2>

    <p
      className="
        m-0
        mt-[12px]
        w-full
        text-[16px]
        font-normal
        leading-[24px]
        text-[#303030]
      "
    >
      Every enquiry in one pipeline, every follow-up on time, and every
      client's full history in one record. Tasks, meetings and notes sit
      where they belong.
    </p>

    <div
      className="
        mt-[18px]
        flex
        w-full
        flex-wrap
        gap-[8px]
      "
    >
      <span
        className="
          rounded-full
          border
          border-[#75B9FF]
          bg-[#EAF5FF]
          px-[16px]
          py-[7px]
          text-[12px]
          font-medium
          leading-[16px]
          text-[#0069D9]
        "
      >
        Deal pipeline
      </span>

      <span
        className="
          rounded-full
          border
          border-[#75B9FF]
          bg-[#EAF5FF]
          px-[16px]
          py-[7px]
          text-[12px]
          font-medium
          leading-[16px]
          text-[#0069D9]
        "
      >
        Contacts &amp; companies
      </span>

      <span
        className="
          rounded-full
          border
          border-[#75B9FF]
          bg-[#EAF5FF]
          px-[16px]
          py-[7px]
          text-[12px]
          font-medium
          leading-[16px]
          text-[#0069D9]
        "
      >
        Tasks &amp; meetings
      </span>

      <span
        className="
          rounded-full
          border
          border-[#75B9FF]
          bg-[#EAF5FF]
          px-[16px]
          py-[7px]
          text-[12px]
          font-medium
          leading-[16px]
          text-[#0069D9]
        "
      >
        Activity timeline
      </span>
    </div>
  </div>


  {/* =================================================
      INVOICING IMAGE
  ================================================== */}

  <div
    className="
      mt-[42px]
      h-[300px]
      w-full
      overflow-hidden
      rounded-[8px]
      bg-[#EAEAEA]
    "
  >
    {SECTION6_INVOICING_IMAGE && (
      <img
        src={SECTION6_INVOICING_IMAGE}
        alt="GST invoicing dashboard"
        className="
          block
          h-full
          w-full
          object-cover
        "
      />
    )}
  </div>


  {/* =================================================
      INVOICING CONTENT
  ================================================== */}

  <div className="w-full pt-[21px]">
    <h2
      className="
        m-0
        text-[24px]
        font-semibold
        leading-[29px]
        tracking-[-0.6px]
        text-[#242424]
      "
    >
      GST invoices in seconds, from the deal you just won.
    </h2>

    <p
      className="
        m-0
        mt-[12px]
        w-full
        text-[16px]
        font-normal
        leading-[24px]
        text-[#303030]
      "
    >
      The client details and line items are already there. Quotations,
      proforma invoices, delivery challans and credit notes too, with
      unlimited invoices on every plan.
    </p>

    <div
      className="
        mt-[18px]
        flex
        w-full
        flex-wrap
        gap-[8px]
      "
    >
      <span
        className="
          rounded-full
          border
          border-[#75B9FF]
          bg-[#EAF5FF]
          px-[16px]
          py-[7px]
          text-[12px]
          font-medium
          leading-[16px]
          text-[#0069D9]
        "
      >
        GST handled
      </span>

      <span
        className="
          rounded-full
          border
          border-[#75B9FF]
          bg-[#EAF5FF]
          px-[16px]
          py-[7px]
          text-[12px]
          font-medium
          leading-[16px]
          text-[#0069D9]
        "
      >
        Unlimited invoices
      </span>

      <span
        className="
          rounded-full
          border
          border-[#75B9FF]
          bg-[#EAF5FF]
          px-[16px]
          py-[7px]
          text-[12px]
          font-medium
          leading-[16px]
          text-[#0069D9]
        "
      >
        Your branding
      </span>

      <span
        className="
          rounded-full
          border
          border-[#75B9FF]
          bg-[#EAF5FF]
          px-[16px]
          py-[7px]
          text-[12px]
          font-medium
          leading-[16px]
          text-[#0069D9]
        "
      >
        Every document type
      </span>
    </div>
  </div>


  {/* =================================================
      PAYMENTS IMAGE
  ================================================== */}

  <div
    className="
      mt-[42px]
      h-[300px]
      w-full
      overflow-hidden
      rounded-[8px]
      bg-[#EAEAEA]
    "
  >
    {SECTION6_PAYMENTS_IMAGE && (
      <img
        src={SECTION6_PAYMENTS_IMAGE}
        alt="Payments dashboard"
        className="
          block
          h-full
          w-full
          object-cover
        "
      />
    )}
  </div>


  {/* =================================================
      PAYMENTS CONTENT
  ================================================== */}

  <div className="w-full pt-[21px] pb-[40px]">
    <h2
      className="
        m-0
        text-[24px]
        font-semibold
        leading-[29px]
        tracking-[-0.6px]
        text-[#242424]
      "
    >
      Know exactly who owes you what.
    </h2>

    <p
      className="
        m-0
        mt-[12px]
        w-full
        text-[16px]
        font-normal
        leading-[24px]
        text-[#303030]
      "
    >
      Invoiced, pending, overdue and collected, on one screen. Late
      invoices flag themselves, and reminders do the chasing you'd
      rather not do.
    </p>

    <div
      className="
        mt-[18px]
        flex
        w-full
        flex-wrap
        gap-[8px]
      "
    >
      <span
        className="
          rounded-full
          border
          border-[#75B9FF]
          bg-[#EAF5FF]
          px-[16px]
          py-[7px]
          text-[12px]
          font-medium
          leading-[16px]
          text-[#0069D9]
        "
      >
        Payment status
      </span>

      <span
        className="
          rounded-full
          border
          border-[#75B9FF]
          bg-[#EAF5FF]
          px-[16px]
          py-[7px]
          text-[12px]
          font-medium
          leading-[16px]
          text-[#0069D9]
        "
      >
        Overdue alerts
      </span>

      <span
        className="
          rounded-full
          border
          border-[#75B9FF]
          bg-[#EAF5FF]
          px-[16px]
          py-[7px]
          text-[12px]
          font-medium
          leading-[16px]
          text-[#0069D9]
        "
      >
        Reminders
      </span>

      <span
        className="
          rounded-full
          border
          border-[#75B9FF]
          bg-[#EAF5FF]
          px-[16px]
          py-[7px]
          text-[12px]
          font-medium
          leading-[16px]
          text-[#0069D9]
        "
      >
        Cash flow reports
      </span>
    </div>
  </div>

</section>
</section>


      {/* =====================================================
          SECTION 7 — CUSTOMER STORIES / MEDIA
      ====================================================== */}

      <Section7 />

      <CRMPrice />
      {/* =========================================================
    SECTION 9 — FRAME 11
    SVG SIZE: 1440 × 708
========================================================= */}

<section
  style={{
    position: "relative",
    width: "100%",
    height: "708px",
    background: "#FFFFFF",
    overflow: "hidden",
    fontFamily: "Inter, Arial, sans-serif",
  }}
>
  <div
    style={{
      position: "relative",
      width: "1440px",
      height: "708px",
      margin: "0 auto",
    }}
  >

    {/* =====================================================
        LEFT CONTENT
    ====================================================== */}

    <div
      style={{
        position: "absolute",
        left: "122px",
        top: "109px",
        width: "500px",
      }}
    >

      {/* LABEL */}

      <div
        style={{
          fontSize: "14px",
          lineHeight: "18px",
          fontWeight: 500,
          color: "#0085FF",
        }}
      >
        Lorem ipsum
      </div>

      {/* HEADING */}

      <h2
        style={{
          width: "410px",
          margin: "28px 0 0",

          fontSize: "34px",
          lineHeight: "32px",
          fontWeight: 500,

          letterSpacing: "-1.5px",

          color: "#171717",
        }}
      >
        Lorem ipsum dolor
        <br />
        self amet consectetyr alit
      </h2>

      {/* DESCRIPTION */}

      <p
        style={{
          width: "500px",
          margin: "26px 0 0",

          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: 400,

          color: "#6E7079",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

    </div>


    {/* =====================================================
        RIGHT ACCORDION
        SVG:
        x = 720
        width = 603
    ====================================================== */}

    <div
      style={{
        position: "absolute",
        left: "720px",
        top: "96px",
        width: "603px",
      }}
    >

      {/* ===================================================
          OPEN ITEM
      ==================================================== */}

      <details
        open
        style={{
          width: "603px",
          borderTop: "1px solid #A8A8A8",
          borderBottom: "1px solid #A8A8A8",
        }}
      >
        <summary
          style={{
            height: "72px",

            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            padding: "0 16px",

            cursor: "pointer",
            listStyle: "none",

            fontSize: "15px",
            lineHeight: "20px",
            fontWeight: 400,

            color: "#171717",
          }}
        >
          <span>
            Lorem ipsum dolor self amet, consectetur
          </span>

          <span
            style={{
              fontSize: "22px",
              lineHeight: "22px",
              fontWeight: 300,
              color: "#171717",
            }}
          >
            −
          </span>
        </summary>

        <div
          style={{
            width: "100%",
            height: "160px",

            padding: "19px 16px 18px",

            borderTop: "1px solid #A8A8A8",
          }}
        >
          <p
            style={{
              width: "550px",
              margin: 0,

              fontSize: "13px",
              lineHeight: "18px",
              fontWeight: 400,

              color: "#7C7E87",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <a
            href="#"
            style={{
              display: "inline-block",
              marginTop: "12px",

              fontSize: "12px",
              lineHeight: "16px",
              fontWeight: 400,

              color: "#0085FF",
              textDecoration: "underline",
            }}
          >
            Learn More
          </a>
        </div>
      </details>


      {/* ===================================================
          CLOSED ITEM 1
      ==================================================== */}

      <details
        style={{
          width: "603px",
          height: "72px",
          borderBottom: "1px solid #A8A8A8",
        }}
      >
        <summary
          style={{
            width: "100%",
            height: "72px",

            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            padding: "0 16px",

            cursor: "pointer",
            listStyle: "none",

            fontSize: "15px",
            lineHeight: "20px",
            fontWeight: 400,

            color: "#171717",
          }}
        >
          <span>
            Lorem ipsum dolor self amet, consectetur
          </span>

          <span
            style={{
              fontSize: "22px",
              lineHeight: "22px",
              fontWeight: 300,
            }}
          >
            +
          </span>
        </summary>
      </details>


      {/* ===================================================
          CLOSED ITEM 2
      ==================================================== */}

      <details
        style={{
          width: "603px",
          height: "72px",
          borderBottom: "1px solid #A8A8A8",
        }}
      >
        <summary
          style={{
            width: "100%",
            height: "72px",

            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            padding: "0 16px",

            cursor: "pointer",
            listStyle: "none",

            fontSize: "15px",
            lineHeight: "20px",
            fontWeight: 400,

            color: "#171717",
          }}
        >
          <span>
            Lorem ipsum dolor self amet, consectetur
          </span>

          <span
            style={{
              fontSize: "22px",
              lineHeight: "22px",
              fontWeight: 300,
            }}
          >
            +
          </span>
        </summary>
      </details>


      {/* ===================================================
          CLOSED ITEM 3
      ==================================================== */}

      <details
        style={{
          width: "603px",
          height: "72px",
          borderBottom: "1px solid #A8A8A8",
        }}
      >
        <summary
          style={{
            width: "100%",
            height: "72px",

            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            padding: "0 16px",

            cursor: "pointer",
            listStyle: "none",

            fontSize: "15px",
            lineHeight: "20px",
            fontWeight: 400,

            color: "#171717",
          }}
        >
          <span>
            Lorem ipsum dolor self amet, consectetur
          </span>

          <span
            style={{
              fontSize: "22px",
              lineHeight: "22px",
              fontWeight: 300,
            }}
          >
            +
          </span>
        </summary>
      </details>


      {/* ===================================================
          CLOSED ITEM 4
      ==================================================== */}

      <details
        style={{
          width: "603px",
          height: "72px",
          borderBottom: "1px solid #A8A8A8",
        }}
      >
        <summary
          style={{
            width: "100%",
            height: "72px",

            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            padding: "0 16px",

            cursor: "pointer",
            listStyle: "none",

            fontSize: "15px",
            lineHeight: "20px",
            fontWeight: 400,

            color: "#171717",
          }}
        >
          <span>
            Lorem ipsum dolor self amet, consectetur
          </span>

          <span
            style={{
              fontSize: "22px",
              lineHeight: "22px",
              fontWeight: 300,
            }}
          >
            +
          </span>
        </summary>
      </details>

    </div>

  </div>


  {/* =====================================================
      RESPONSIVE
  ====================================================== */}

  <style>{`
    @media (max-width: 1439px) {
      .section9-scale {
        transform-origin: top left;
      }
    }

    @media (max-width: 900px) {
      .section9 {
        height: auto !important;
        min-height: 708px;
      }
    }
  `}</style>

</section>



{/* =========================================================
    SECTION 10 — FRAME 2147223788
    SVG SIZE: 1440 × 1072
========================================================= */}

<section
  style={{
    position: "relative",
    width: "100%",
    height: "1072px",
    overflow: "hidden",

    background: "#FFFFFF",
  }}
>
  <div
    style={{
      position: "relative",
      width: "1440px",
      height: "1072px",
      margin: "0 auto",
    }}
  >

    {/* =====================================================
        HEADING
    ====================================================== */}

    <h2
      style={{
        position: "absolute",

        top: "8px",
        left: "50%",

        transform: "translateX(-50%)",

        width: "850px",

        margin: 0,

        textAlign: "center",

        color: "#000000",

        fontSize: "50px",
        lineHeight: "58px",

        fontWeight: 400,

        letterSpacing: "-2.2px",
      }}
    >
      Stop switching between apps.
    </h2>


    {/* =====================================================
        DESCRIPTION
    ====================================================== */}

    <p
      style={{
        position: "absolute",

        top: "91px",
        left: "50%",

        transform: "translateX(-50%)",

        width: "600px",

        margin: 0,

        textAlign: "center",

        color: "#8F8F8F",

        fontSize: "14px",
        lineHeight: "19px",

        fontWeight: 400,
      }}
    >
      Try DataCircles free for 7 days at full limits and see your leads,
      <br />
      invoices and payments in one place. No credit card needed.
    </p>


    {/* =====================================================
        BUTTONS
    ====================================================== */}

    <div
      style={{
        position: "absolute",

        top: "178px",
        left: "50%",

        transform: "translateX(-50%)",

        display: "flex",
        alignItems: "center",

        gap: "12px",
      }}
    >

      {/* START NOW */}

      <a
        href="/signup"
        style={{
          width: "134px",
          height: "40px",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          borderRadius: "5px",

          background: "#0085FF",
          color: "#FFFFFF",

          fontSize: "12px",
          lineHeight: "16px",

          fontWeight: 400,

          textDecoration: "none",
        }}
      >
        Get Start Now
      </a>


      {/* BOOK DEMO */}

      <a
        href="/demo"
        style={{
          width: "117px",
          height: "40px",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          borderRadius: "5px",

          border: "1px solid #CCCCCC",

          background: "#FFFFFF",
          color: "#000000",

          fontSize: "12px",
          lineHeight: "16px",

          fontWeight: 400,

          textDecoration: "none",
        }}
      >
        Book Demo
      </a>

    </div>


    {/* =====================================================
        FINAL IMAGE

        Uses the existing LAST_SECTION_IMAGE constant.
    ====================================================== */}

    <div
      style={{
        position: "absolute",

        left: 0,
        top: "287px",

        width: "1440px",
        height: "785px",

        overflow: "hidden",

        borderTopLeftRadius: "14px",
        borderTopRightRadius: "14px",

        background: "#F7F7F7",
      }}
    >

      {LAST_SECTION_IMAGE && (
        <img
          src={LAST_SECTION_IMAGE}
          alt="DataCircles dashboard"
          style={{
            position: "absolute",

            left: "0",
            top: "0",

            width: "1440px",
            height: "785px",

            display: "block",

            objectFit: "cover",
          }}
        />
      )}


      {/* ===================================================
          FADE OVER IMAGE

          The SVG gradually fades the dashboard toward the
          bottom and sides.
      ==================================================== */}

      <div
        style={{
          position: "absolute",

          inset: 0,

          pointerEvents: "none",

          background:
            "linear-gradient(to bottom, rgba(255,255,255,0) 38%, rgba(255,255,255,0.18) 58%, rgba(255,255,255,0.72) 82%, rgba(255,255,255,1) 100%)",
        }}
      />

      <div
        style={{
          position: "absolute",

          left: 0,
          top: 0,

          width: "120px",
          height: "100%",

          pointerEvents: "none",

          background:
            "linear-gradient(to right, rgba(255,255,255,0.88), rgba(255,255,255,0))",
        }}
      />

      <div
        style={{
          position: "absolute",

          right: 0,
          top: 0,

          width: "120px",
          height: "100%",

          pointerEvents: "none",

          background:
            "linear-gradient(to left, rgba(255,255,255,0.88), rgba(255,255,255,0))",
        }}
      />

    </div>

  </div>


  {/* =====================================================
      RESPONSIVE
  ====================================================== */}

  <style>{`
    @media (max-width: 1439px) {
      .section10-canvas {
        transform-origin: top left;
      }
    }

    @media (max-width: 800px) {
      .section10 {
        height: 900px !important;
      }
    }
  `}</style>

</section>


      {/* =====================================================
          GLOBAL FOOTER — LAST ELEMENT ON THE PAGE
      ====================================================== */}
      <Footer />

</main>
  );
}

export default Home;