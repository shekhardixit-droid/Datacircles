import Navbar from "../components/navbar";

const HERO_IMAGE =
  "https://res.cloudinary.com/tpxo8m6a/image/upload/v1787746205/d5da18c5db90406a6e740b82dc3c12a903e7adb9.png";

/* Trusted company logos - exact order provided */
const TRUSTED_LOGOS = [
  {
    src: "https://res.cloudinary.com/tpxo8m6a/image/upload/v1787749787/6e8ca7c3e53836b10aab3e36b1c5f152347111a5.png",
    alt: "Codecrafter",
  },
  {
    src: "https://res.cloudinary.com/tpxo8m6a/image/upload/v1787749800/77d17fd71ccd171c93a6b9ea1612c2bb49ba7d84.png",
    alt: "3Portals",
  },
  {
    src: "https://res.cloudinary.com/tpxo8m6a/image/upload/v1787749813/96cd453112652b053c531a8b50744142de4f8157.png",
    alt: "Watchtower",
  },
  {
    src: "https://res.cloudinary.com/tpxo8m6a/image/upload/v1787749824/e70fa1d06917acd1f0823a31d3e0f3afc7a25309.png",
    alt: "Foresight",
  },
  {
    src: "https://res.cloudinary.com/tpxo8m6a/image/upload/v1787749851/7045ca502fa906344a3c06ce9a4b1ad9f91d3e50.png",
    alt: "Cons",
  },
];

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

          {/* =================================================
              DASHBOARD BOTTOM BLUR + FADE
          ================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              h-[38%]
              overflow-hidden
              rounded-b-[23px]
              backdrop-blur-[8px]
              bg-[linear-gradient(
                to_bottom,
                rgba(255,255,255,0)_0%,
                rgba(255,255,255,0.02)_10%,
                rgba(255,255,255,0.10)_25%,
                rgba(186,222,255,0.28)_48%,
                rgba(186,222,255,0.62)_72%,
                rgba(186,222,255,0.90)_90%,
                #BADEFF_100%
              )]
            "
          />

          {/* Stronger bottom blur */}

          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              h-[18%]
              rounded-b-[23px]
              backdrop-blur-[14px]
              bg-[linear-gradient(
                to_bottom,
                rgba(186,222,255,0.10)_0%,
                rgba(186,222,255,0.38)_35%,
                rgba(186,222,255,0.78)_70%,
                #BADEFF_100%
              )]
            "
          />
        </div>
      </section>

      {/* =====================================================
    TRUSTED AND USED BY
====================================================== */}

<section
  className="
    relative
    mx-auto
    mt-[32px]
    h-[90px]
    w-[calc(100%-32px)]
    max-w-[1360px]
    overflow-hidden
    bg-white
  "
>
  {/* TITLE */}

  <div className="flex justify-center">
    <span
      className="
        text-[14px]
        font-normal
        uppercase
        leading-[18px]
        tracking-[0.5px]
        text-[#666666]
      "
    >
      Trusted and used by
    </span>
  </div>

  {/* LOGOS */}

  <div
    className="
      relative
      mt-[14px]
      h-[38px]
      w-full
    "
  >
    <div
      className="
        absolute
        left-1/2
        top-0
        flex
        h-[32px]
        w-[820px]
        -translate-x-1/2
        items-center
        justify-between
      "
    >
      {TRUSTED_LOGOS.map((logo, index) => (
        <div
          key={logo.src}
          className="
            flex
            h-[30px]
            w-[130px]
            shrink-0
            items-center
            justify-center
          "
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className="
              max-h-[24px]
              max-w-[120px]
              object-contain
            "
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        </div>
      ))}
    </div>

    {/* =================================================
        LEFT EDGE BLUR
        Blurs only the existing logo row underneath.
    ================================================== */}

    <div
      className="
        pointer-events-none
        absolute
        left-0
        top-[-4px]
        z-20
        h-[42px]
        w-[150px]
        backdrop-blur-[5px]
        bg-gradient-to-r
        from-white
        via-white/70
        to-transparent
      "
    />

    {/* =================================================
        RIGHT EDGE BLUR
        Blurs only the existing logo row underneath.
    ================================================== */}

    <div
      className="
        pointer-events-none
        absolute
        right-0
        top-[-4px]
        z-20
        h-[42px]
        w-[150px]
        backdrop-blur-[5px]
        bg-gradient-to-l
        from-white
        via-white/70
        to-transparent
      "
    />
  </div>
</section>
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
        src="https://res.cloudinary.com/tpxo8m6a/image/upload/v1787762725/e1b401cb4e4c9b406541ebaf104107c3180075c3.png"
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

  {/* ================= RIGHT SIDE ================= */}
  <div
    style={{
      width: "100%",
      minWidth: 0,
      boxSizing: "border-box",
    }}
  >
    {/* Keep the right-side Section 6 content here.
        We will build this part separately next. */}
  </div>
</section>


</main>
  );
}

export default Home;