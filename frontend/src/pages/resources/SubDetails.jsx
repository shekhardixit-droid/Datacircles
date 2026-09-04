import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

/* =========================================================
   SUB DETAILS IMAGES
   Replace these with your actual Cloudinary URLs.
   ========================================================= */

const imgCustomer = "";
const imgMainStory = "";


export default function SubDetails() {
  const navigate = useNavigate();
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          margin: 0;
          padding: 0;
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          padding: 0;
          background: #ffffff;
          color: #242424;
          font-family: Inter, Arial, Helvetica, sans-serif;
        }

        a {
          text-decoration: none;
        }

        /* =====================================================
           PAGE
           ===================================================== */

        .sub-details-page {
          width: 100%;
          min-height: 0;
          background: #ffffff;
          overflow-x: hidden;
        }

        .sub-details-canvas {
          width: 1440px;
          min-height: 0;
          margin: 0 auto;
          position: relative;
          background: #ffffff;
        }

        /* =====================================================
           NAVBAR
           ===================================================== */

        .sub-details-navbar {
          position: relative;
          z-index: 20;
          padding-top: 24px;
        }

        /* =====================================================
           STORY HEADER
           ===================================================== */

        .sub-details-header {
          position: relative;
          width: 1440px;
          height: 335px;
          background: #ffffff;
        }

        .sub-details-previous {
          position: absolute;

          left: 22px;
          top: 102px;

          display: flex;
          align-items: center;

          gap: 8px;

          color: #888b96;

          font-size: 12px;
          line-height: 18px;

          font-weight: 400;
        }

        .sub-details-previous-arrow {
          font-size: 18px;
          line-height: 1;

          color: #9a9ca5;
        }

        .sub-details-next {
          position: absolute;

          right: 23px;
          top: 102px;

          display: flex;
          align-items: center;

          gap: 8px;

          color: #242424;

          font-size: 12px;
          line-height: 18px;

          font-weight: 400;
        }

        .sub-details-next-arrow {
          font-size: 18px;
          line-height: 1;
        }

        /* =====================================================
           HEADER CONTENT

           IMPORTANT:
           760px centered on 1440px canvas
           = starts at x 340px.
           Main image below is also 760px centered.
           ===================================================== */

        .sub-details-header-content {
          position: absolute;

          top: 83px;

          left: 50%;

          transform: translateX(-50%);

          width: 760px;
        }

        .sub-details-tag {
          width: 94px;
          height: 29px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 16px;

          background: #0085ff;

          color: #ffffff;

          font-size: 11px;
          line-height: 16px;

          font-weight: 400;

          margin-bottom: 27px;
        }

        .sub-details-title {
          width: 760px;

          margin: 0;
          padding: 0;

          color: #242424;

          font-size: 28px;
          line-height: 32px;

          font-weight: 500;

          letter-spacing: -1.2px;
        }

        .sub-details-summary {
          width: 760px;

          margin: 20px 0 0;

          color: #77798a;

          font-size: 13px;
          line-height: 19px;

          font-weight: 400;
        }

        /* =====================================================
           BLUE BACKGROUND
           ===================================================== */

        .sub-details-background {
          position: absolute;

          top: 380px;
          left: 50%;

          transform: translateX(-50%);

          width: 1920px;
          height: 945px;

          pointer-events: none;

          background:
            linear-gradient(
              to bottom,
              #ffffff 0%,
              #e4f3ff 19%,
              #c5e5ff 45%,
              #dcefff 66%,
              #ffffff 100%
            );
        }

        /* =====================================================
           BACKGROUND GRID
           ===================================================== */

        .sub-details-grid-background {
          position: absolute;

          top: 313px;
          left: 50%;

          transform: translateX(-50%);

          width: 1340px;
          height: 1078px;

          pointer-events: none;

          opacity: 0.26;

          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.95) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.95) 1px,
              transparent 1px
            );

          background-size: 135px 135px;

          mask-image:
            linear-gradient(
              to bottom,
              transparent 0%,
              #000 10%,
              #000 70%,
              transparent 100%
            );

          -webkit-mask-image:
            linear-gradient(
              to bottom,
              transparent 0%,
              #000 10%,
              #000 70%,
              transparent 100%
            );
        }

        /* =====================================================
           MAIN CONTENT
           ===================================================== */

        .sub-details-content {
          position: relative;

          z-index: 5;

          width: 1008px;

          margin: 0 auto;
        }

        /* =====================================================
           MAIN STORY IMAGE

           760px wide and centered:
           (1440 - 760) / 2 = 340px
           ===================================================== */

        .sub-details-main-image {
          width: 760px;
          height: 455px;

          margin: 0 auto;

          border-radius: 9px;

          overflow: hidden;

          background: #d9d9d9;

          position: relative;
        }

        .sub-details-main-image img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
        }

        /* =====================================================
           CUSTOMER INFORMATION CARD
           ===================================================== */

        .sub-details-info-card {
          width: 760px;
          height: 248px;

          margin: 49px auto 0;

          padding: 33px 34px 29px;

          border-radius: 10px;

          background: rgba(247, 252, 255, 0.9);

          border: 1px solid rgba(255, 255, 255, 0.45);

          position: relative;
        }

        .sub-details-customer {
          display: flex;

          align-items: center;

          height: 44px;

          padding-bottom: 13px;

          border-bottom: 1px solid #d7dce1;
        }

        .sub-details-customer-avatar {
          width: 42px;
          height: 42px;

          border-radius: 50%;

          flex: none;

          overflow: hidden;

          background: #d9d9d9;
        }

        .sub-details-customer-avatar img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
        }

        .sub-details-customer-text {
          margin-left: 10px;
        }

        .sub-details-customer-name {
          margin: 0;

          color: #242424;

          font-size: 12px;
          line-height: 16px;

          font-weight: 500;
        }

        .sub-details-customer-role {
          margin: 2px 0 0;

          color: #9294a0;

          font-size: 9px;
          line-height: 12px;

          font-weight: 400;
        }

        /* =====================================================
           INFO ROWS
           ===================================================== */

        .sub-details-info-rows {
          width: 100%;

          margin-top: 14px;
        }

        .sub-details-info-row {
          width: 100%;

          height: 32px;

          display: grid;

          grid-template-columns: 20px 100px 1fr;

          align-items: center;
        }

        .sub-details-info-icon {
          color: #777c87;

          font-size: 13px;

          text-align: center;
        }

        .sub-details-info-label {
          color: #777c87;

          font-size: 11px;
          line-height: 16px;

          font-weight: 400;
        }

        .sub-details-info-value {
          color: #242424;

          font-size: 11px;
          line-height: 16px;

          font-weight: 500;

          text-align: right;
        }

        /* =====================================================
           ARTICLE
           ===================================================== */

        .sub-details-article {
          width: 760px;

          margin: 38px auto 0;
        }

        .sub-details-article-title {
          margin: 0;

          color: #242424;

          font-size: 21px;
          line-height: 27px;

          font-weight: 500;

          letter-spacing: -0.6px;
        }

        .sub-details-article-intro {
          margin: 22px 0 0;

          color: #77798a;

          font-size: 13px;
          line-height: 19px;

          font-weight: 400;
        }

        .sub-details-article-block {
          margin-top: 30px;
        }

        .sub-details-article-heading {
          margin: 0 0 4px;

          color: #242424;

          font-size: 15px;
          line-height: 21px;

          font-weight: 600;
        }

        .sub-details-article-text {
          margin: 0;

          color: #858798;

          font-size: 13px;
          line-height: 18px;

          font-weight: 400;
        }

        /* =====================================================
           PULL QUOTE
           ===================================================== */

        .sub-details-pullquote {
          width: 100%;

          min-height: 77px;

          margin-top: 28px;

          padding: 11px 0 11px 25px;

          border-left: 5px solid #0085ff;

          display: flex;

          align-items: center;
        }

        .sub-details-pullquote-text {
          width: 600px;

          margin: 0;

          color: #242424;

          font-size: 15px;
          line-height: 19px;

          font-weight: 500;
        }

        /* =====================================================
           FEATURE LIST
           ===================================================== */

        .sub-details-features {
          margin-top: 31px;
        }

        .sub-details-feature-title {
          margin: 0 0 17px;

          color: #242424;

          font-size: 15px;
          line-height: 20px;

          font-weight: 600;
        }

        .sub-details-pills {
          display: flex;

          flex-wrap: wrap;

          gap: 8px;
        }

        .sub-details-pill {
          height: 28px;

          padding: 0 14px;

          display: inline-flex;

          align-items: center;
          justify-content: center;

          border-radius: 15px;

          border: 1px solid #8cc8ff;

          background: #eaf5ff;

          color: #0879df;

          font-size: 10px;
          line-height: 15px;

          font-weight: 500;
        }

        /* =====================================================
           FINAL BLUE SECTION
           ===================================================== */

        .sub-details-final-card {
          width: 760px;
          height: 279px;

          margin: 29px auto 0;

          border-radius: 10px;

          overflow: hidden;

          background:
            linear-gradient(
              110deg,
              #095bb9 0%,
              #007df1 52%,
              #0b8cff 100%
            );

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          text-align: center;
        }

        .sub-details-final-title {
          margin: 0;

          color: #ffffff;

          font-size: 25px;
          line-height: 31px;

          font-weight: 500;

          letter-spacing: -0.7px;
        }

        .sub-details-final-description {
          width: 610px;

          margin: 24px 0 0;

          color: rgba(255, 255, 255, 0.75);

          font-size: 13px;
          line-height: 19px;

          font-weight: 400;
        }

        .sub-details-final-button {
          width: 190px;
          height: 48px;

          margin-top: 24px;

          border: none;

          border-radius: 25px;

          background: #ffffff;

          color: #0085ff;

          font-size: 11px;
          line-height: 17px;

          font-weight: 500;
        }

        /* =====================================================
           RESPONSIVE
           ===================================================== */

        @media (max-width: 1439px) {

          .sub-details-canvas {
            width: 100%;
          }

          .sub-details-header {
            width: 100%;
          }

          .sub-details-content {
            width: calc(100% - 48px);
          }

          .sub-details-header-content {
            width: min(760px, calc(100% - 48px));
          }

          .sub-details-title,
          .sub-details-summary {
            width: 100%;
          }

          .sub-details-main-image,
          .sub-details-info-card,
          .sub-details-article,
          .sub-details-final-card {
            width: min(760px, 100%);
          }

          .sub-details-main-image {
            height: min(455px, 60vw);
          }

          .sub-details-info-card {
            height: auto;
            min-height: 248px;
          }

          .sub-details-article {
            width: min(760px, 100%);
          }

          .sub-details-final-card {
            width: min(760px, 100%);
          }

          .sub-details-background {
            width: 1920px;
          }

          .sub-details-grid-background {
            width: min(1340px, 100%);
          }
        }

        @media (max-width: 800px) {

          .sub-details-navbar {
            padding-top: 16px;
          }

          .sub-details-header {
            height: 350px;
          }

          .sub-details-previous {
            left: 16px;
            top: 92px;
          }

          .sub-details-next {
            right: 16px;
            top: 92px;
          }

          .sub-details-header-content {
            width: calc(100% - 48px);
            top: 85px;
          }

          .sub-details-title {
            width: 100%;

            font-size: 24px;
            line-height: 29px;
          }

          .sub-details-summary {
            width: 100%;

            font-size: 12px;
            line-height: 18px;
          }

          .sub-details-main-image {
            height: 300px;
          }

          .sub-details-info-card {
            padding: 24px 20px;
          }

          .sub-details-info-row {
            grid-template-columns: 20px 90px 1fr;
          }

          .sub-details-info-value {
            font-size: 10px;
          }

          .sub-details-article-title {
            font-size: 19px;
            line-height: 25px;
          }

          .sub-details-article-intro,
          .sub-details-article-text {
            font-size: 12px;
            line-height: 18px;
          }

          .sub-details-pullquote-text {
            width: 100%;
            font-size: 14px;
          }

          .sub-details-final-card {
            height: 260px;
          }

          .sub-details-final-description {
            width: calc(100% - 60px);
          }
        }

        @media (max-width: 520px) {

          .sub-details-header {
            height: 370px;
          }

          .sub-details-previous,
          .sub-details-next {
            top: 78px;
          }

          .sub-details-header-content {
            top: 112px;
          }

          .sub-details-title {
            font-size: 22px;
            line-height: 27px;
          }

          .sub-details-main-image {
            height: 230px;
          }

          .sub-details-info-card {
            padding: 20px 15px;
          }

          .sub-details-info-row {
            grid-template-columns: 18px 75px 1fr;
          }

          .sub-details-info-value {
            font-size: 9px;
          }

          .sub-details-feature-title {
            font-size: 14px;
          }

          .sub-details-final-title {
            font-size: 21px;
          }

          .sub-details-final-description {
            width: calc(100% - 40px);
          }
        }
      `}</style>

      <div className="sub-details-page">

        <div className="sub-details-canvas">

          {/* =====================================================
              NAVBAR
              ===================================================== */}

          <div className="sub-details-navbar">
            <Navbar />
          </div>

          {/* =====================================================
              BACKGROUND
              ===================================================== */}

          <div className="sub-details-background" />

          <div className="sub-details-grid-background" />

          {/* =====================================================
              STORY HEADER
              ===================================================== */}

          <header className="sub-details-header">

            <a
              href="#"
              className="sub-details-previous"
            >
              <span className="sub-details-previous-arrow">
                ‹
              </span>

              <span>
                Previous Story
              </span>
            </a>

            <a
              href="#"
              className="sub-details-next"
            >
              <span>
                Next Story
              </span>

              <span className="sub-details-next-arrow">
                ›
              </span>
            </a>

            {/* =================================================
                HEADER CONTENT
                Same 760px alignment as image
                ================================================= */}

            <div className="sub-details-header-content">

              <div className="sub-details-tag">
                Customer Story
              </div>

              <h1 className="sub-details-title">
                [ Headline: the change, e.g. "How [Business] put
                CRM and invoicing in one place" ]
              </h1>

              <p className="sub-details-summary">
                [ One-line summary of who they are and what changed. ]
              </p>

            </div>

          </header>

          {/* =====================================================
              MAIN STORY
              ===================================================== */}

          <main className="sub-details-content">

            {/* ===================================================
                MAIN IMAGE
                =================================================== */}

            <div className="sub-details-main-image">

              {imgMainStory && (
                <img
                  src={imgMainStory}
                  alt=""
                />
              )}

            </div>

            {/* ===================================================
                CUSTOMER INFORMATION
                =================================================== */}

            <section className="sub-details-info-card">

              <div className="sub-details-customer">

                <div className="sub-details-customer-avatar">

                  {imgCustomer && (
                    <img
                      src={imgCustomer}
                      alt=""
                    />
                  )}

                </div>

                <div className="sub-details-customer-text">

                  <p className="sub-details-customer-name">
                    Client Name
                  </p>

                  <p className="sub-details-customer-role">
                    Industry · Designation
                  </p>

                </div>

              </div>

              <div className="sub-details-info-rows">

                <div className="sub-details-info-row">

                  <span className="sub-details-info-icon">
                    ♜
                  </span>

                  <span className="sub-details-info-label">
                    Business
                  </span>

                  <span className="sub-details-info-value">
                    [Name]
                  </span>

                </div>

                <div className="sub-details-info-row">

                  <span className="sub-details-info-icon">
                    ◈
                  </span>

                  <span className="sub-details-info-label">
                    Type
                  </span>

                  <span className="sub-details-info-value">
                    [Agency / Studio / etc.]
                  </span>

                </div>

                <div className="sub-details-info-row">

                  <span className="sub-details-info-icon">
                    ♧
                  </span>

                  <span className="sub-details-info-label">
                    Location
                  </span>

                  <span className="sub-details-info-value">
                    [City]
                  </span>

                </div>

                <div className="sub-details-info-row">

                  <span className="sub-details-info-icon">
                    ◉
                  </span>

                  <span className="sub-details-info-label">
                    Before
                  </span>

                  <span className="sub-details-info-value">
                    [ Separate CRM + Billing App ]
                  </span>

                </div>

              </div>

            </section>

            {/* ===================================================
                ARTICLE
                =================================================== */}

            <article className="sub-details-article">

              <h2 className="sub-details-article-title">
                [The headline result or change]
              </h2>

              <p className="sub-details-article-intro">
                [A line of context for it]
              </p>

              {/* =================================================
                  WHAT THEY DO
                  ================================================= */}

              <section className="sub-details-article-block">

                <h3 className="sub-details-article-heading">
                  What they do
                </h3>

                <p className="sub-details-article-text">
                  dolor sit amet consectetur adipiscing elit. Quisque faucibus
                  ex sapien vitae pellentesque sem placerat. In id cursus mi
                  pretium tellus duis convallis. Tempus leo eu aenean sed diam
                  urna tempor. Pulvinar vivamus fringilla lacus nec metus
                  bibendum egestas. Iaculis massa nisl malesuada lacinia
                  integer nunc posuere. Ut hendrerit semper vel class aptent
                  taciti sociosqu. Ad litora torquent per conubia nostra
                  inceptos himenaeos.
                </p>

              </section>

              {/* =================================================
                  THE MESS BEFORE
                  ================================================= */}

              <section className="sub-details-article-block">

                <h3 className="sub-details-article-heading">
                  The mess before
                </h3>

                <p className="sub-details-article-text">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  Quisque faucibus ex sapien vitae pellentesque sem placerat.
                  In id cursus mi pretium tellus duis convallis. Tempus leo eu
                  aenean sed diam urna tempor. Pulvinar vivamus fringilla
                  lacus nec metus bibendum egestas. Iaculis massa nisl
                  malesuada lacinia integer nunc posuere. Ut hendrerit semper
                  vel class aptent taciti sociosqu. Ad litora torquent per
                  conubia nostra inceptos himenaeos.
                </p>

              </section>

              {/* =================================================
                  PULL QUOTE
                  ================================================= */}

              <div className="sub-details-pullquote">

                <p className="sub-details-pullquote-text">
                  “[Strong pull-quote in their own words, lifted from
                  the video.]”
                </p>

              </div>

              {/* =================================================
                  SWITCHING TO DATACIRCLES
                  ================================================= */}

              <section className="sub-details-article-block">

                <h3 className="sub-details-article-heading">
                  Switching to DataCircles
                </h3>

                <p className="sub-details-article-text">
                  dolor sit amet consectetur adipiscing elit. Quisque faucibus
                  ex sapien vitae pellentesque sem placerat. In id cursus mi
                  pretium tellus duis convallis. Tempus leo eu aenean sed diam
                  urna tempor. Pulvinar vivamus fringilla lacus nec metus
                  bibendum egestas. Iaculis massa nisl malesuada lacinia
                  integer nunc posuere. Ut hendrerit semper vel class aptent
                  taciti sociosqu. Ad litora torquent per conubia nostra
                  inceptos himenaeos.
                </p>

              </section>

              {/* =================================================
                  HOW IT WORKS
                  ================================================= */}

              <section className="sub-details-article-block">

                <h3 className="sub-details-article-heading">
                  How it works for them now
                </h3>

                <p className="sub-details-article-text">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  Quisque faucibus ex sapien vitae pellentesque sem placerat.
                  In id cursus mi pretium tellus duis convallis. Tempus leo eu
                  aenean sed diam urna tempor. Pulvinar vivamus fringilla
                  lacus nec metus bibendum egestas. Iaculis massa nisl
                  malesuada lacinia integer nunc posuere. Ut hendrerit semper
                  vel class aptent taciti sociosqu. Ad litora torquent per
                  conubia nostra inceptos himenaeos.
                </p>

              </section>

              {/* =================================================
                  FEATURES
                  ================================================= */}

              <section className="sub-details-features">

                <h3 className="sub-details-feature-title">
                  What they use in DataCircles
                </h3>

                <div className="sub-details-pills">

                  <span className="sub-details-pill">
                    Lead Pipeline
                  </span>

                  <span className="sub-details-pill">
                    Follow-Ups
                  </span>

                  <span className="sub-details-pill">
                    GST Invoicing
                  </span>

                  <span className="sub-details-pill">
                    Payment Reminders
                  </span>

                </div>

              </section>

            </article>

            {/* ===================================================
                FINAL BLUE SECTION
                =================================================== */}

            <section className="sub-details-final-card">

              <h2 className="sub-details-final-title">
                Your Business could be next
              </h2>

              <p className="sub-details-final-description">
                Send an invoice, and automatic reminders do the follow-up so
                you don't have to. Everything in one place, from lead to paid.
              </p>

              <button
                type="button"
                className="sub-details-final-button"
                onClick={() => navigate("/pricing")}
              >
                Start Free
              </button>

            </section>

          </main>

        </div>
      </div>
    </>
  );
}