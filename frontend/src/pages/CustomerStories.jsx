import Navbar from "../components/Navbar";
import CTA from "../components/payments/CTA";

/* =========================================================
   CUSTOMER STORY IMAGES
   Replace these URLs with your actual Cloudinary URLs.
   ========================================================= */

const imgCustomer1 = "";
const imgCustomer2 = "";
const imgCustomer3 = "";
const imgCustomer4 = "";
const imgCustomer5 = "";
const imgCustomer6 = "";
const imgCustomer7 = "";

/* =========================================================
   FEATURED / MAIN CUSTOMER STORY IMAGE
   ========================================================= */

const imgCustomerMain = "";

/* =========================================================
   USING DATACIRCLES SECTION IMAGE
   ========================================================= */

const imgUsingDatacircles = "";


export default function CustomerStories() {
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
          color: #231014;
          font-family: Inter, Arial, Helvetica, sans-serif;
        }

        button {
          font-family: inherit;
          cursor: pointer;
        }

        a {
          text-decoration: none;
        }

        /* =========================================================
           PAGE
           ========================================================= */

        .customer-stories-page {
          width: 100%;
          min-height: 0;
          background: #ffffff;
          overflow-x: hidden;
        }

        .customer-stories-canvas {
          width: 1440px;
          min-height: 0;
          margin: 0 auto;
          position: relative;
          background: #ffffff;
        }

        /* =========================================================
           NAVBAR
           ========================================================= */

        .customer-stories-navbar {
          padding-top: 24px;
          position: relative;
          z-index: 20;
        }

        /* =========================================================
           HERO
           ========================================================= */

        .customer-stories-hero {
          width: 1440px;
          height: 470px;
          position: relative;
          background: #ffffff;
        }

        .customer-stories-hero-content {
          position: absolute;
          top: 166px;
          left: 50%;
          transform: translateX(-50%);

          width: 650px;

          display: flex;
          flex-direction: column;
          align-items: center;

          text-align: center;
        }

        .customer-stories-label {
          height: 26px;
          min-width: 132px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 7px;

          padding: 0 12px;

          border-radius: 14px;

          background: rgba(235, 230, 224, 0.24);

          color: #635557;

          font-size: 11px;
          line-height: 17px;
          font-weight: 400;

          margin-bottom: 28px;
        }

        .customer-stories-label-dot {
          width: 6px;
          height: 6px;

          flex: none;

          border-radius: 50%;

          background: #0085ff;
        }

        .customer-stories-hero-title {
          width: 650px;

          margin: 0;
          padding: 0;

          color: #231014;

          font-size: 51px;
          line-height: 53px;

          font-weight: 500;

          letter-spacing: -2.7px;
        }

        .customer-stories-hero-description {
          width: 520px;

          margin: 19px 0 0;

          color: #635557;

          font-size: 13px;
          line-height: 20px;

          font-weight: 400;
        }

        /* =========================================================
           TESTIMONIAL BACKGROUND
           ========================================================= */

        .customer-stories-testimonials-background {
          position: absolute;

          top: 470px;
          left: 50%;

          transform: translateX(-50%);

          width: 1920px;
          height: 1220px;

          pointer-events: none;

          background:
            linear-gradient(
              to bottom,
              #ffffff 0%,
              #dcefff 27%,
              #b6ddff 48%,
              #eaf6ff 70%,
              #ffffff 100%
            );

          opacity: 0.78;
        }

        .customer-stories-testimonials-grid {
          position: absolute;

          top: 450px;
          left: 50%;

          transform: translateX(-50%);

          width: 1340px;
          height: 1150px;

          pointer-events: none;

          opacity: 0.17;

          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.9) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.9) 1px,
              transparent 1px
            );

          background-size: 135px 135px;

          mask-image:
            linear-gradient(
              to bottom,
              #000 0%,
              #000 70%,
              transparent 100%
            );

          -webkit-mask-image:
            linear-gradient(
              to bottom,
              #000 0%,
              #000 70%,
              transparent 100%
            );
        }

        /* =========================================================
           MAIN CONTENT
           ========================================================= */

        .customer-stories-main {
          position: relative;

          width: 1236px;

          margin: 0 auto;

          z-index: 5;
        }

        /* =========================================================
           FEATURED STORY
           ========================================================= */

        .customer-stories-featured {
          width: 1236px;
          height: 454px;

          display: grid;

          grid-template-columns: 548px 660px;

          column-gap: 28px;

          padding: 0;

          border-radius: 14px;

          background: #ffffff;

          overflow: hidden;
        }

        .customer-stories-featured-content {
          width: 548px;
          height: 454px;

          display: flex;
          flex-direction: column;

          justify-content: center;

          padding: 38px 20px 38px 27px;
        }

        .customer-stories-featured-label {
          margin: 0 0 22px;

          color: #0085ff;

          font-size: 12px;
          line-height: 17px;

          font-weight: 500;
        }

        .customer-stories-featured-quote {
          width: 500px;

          margin: 0;

          color: #242424;

          font-size: 20px;
          line-height: 24px;

          font-weight: 500;

          letter-spacing: -0.5px;
        }

        .customer-stories-featured-description {
          width: 500px;

          margin: 18px 0 0;

          color: #48494c;

          font-size: 12px;
          line-height: 18px;

          font-weight: 400;
        }

        /* =========================================================
           FEATURED PERSON
           ========================================================= */

        .customer-stories-person {
          display: flex;
          align-items: center;

          gap: 10px;

          margin-top: 20px;
        }

        .customer-stories-avatar {
          width: 31px;
          height: 31px;

          flex: none;

          border-radius: 50%;

          background: #dddddd;

          overflow: hidden;
        }

        .customer-stories-avatar img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
        }

        .customer-stories-person-details {
          display: flex;
          flex-direction: column;

          gap: 3px;
        }

        .customer-stories-person-name {
          margin: 0;

          color: #242424;

          font-size: 11px;
          line-height: 15px;

          font-weight: 500;
        }

        .customer-stories-person-role {
          margin: 0;

          color: #635557;

          font-size: 10px;
          line-height: 14px;

          font-weight: 400;
        }

        /* =========================================================
           FEATURED MAIN IMAGE
           ========================================================= */

        .customer-stories-featured-media {
          width: 660px;
          height: 454px;

          margin: 0;

          border-radius: 10px;

          background: #d9d9d9;

          overflow: hidden;

          position: relative;
        }

        .customer-stories-featured-media img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
        }

        /* =========================================================
           STORY GRID
           ========================================================= */

        .customer-stories-grid {
          width: 1236px;

          display: grid;

          grid-template-columns: 610px 610px;

          column-gap: 16px;
          row-gap: 16px;

          margin-top: 16px;
        }

        /* =========================================================
           STORY CARD
           ========================================================= */

        .customer-stories-card {
          width: 610px;
          height: 177px;

          padding: 28px 28px 24px;

          border-radius: 10px;

          background: rgba(255, 255, 255, 0.72);

          display: flex;
          flex-direction: column;

          position: relative;

          overflow: hidden;
        }

        .customer-stories-card-person {
          display: flex;
          align-items: center;

          gap: 10px;
        }

        .customer-stories-card-avatar {
          width: 31px;
          height: 31px;

          flex: none;

          border-radius: 50%;

          background: #dddddd;

          overflow: hidden;
        }

        .customer-stories-card-avatar img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
        }

        .customer-stories-card-person-info {
          display: flex;
          flex-direction: column;

          gap: 3px;
        }

        .customer-stories-card-name {
          margin: 0;

          color: #242424;

          font-size: 11px;
          line-height: 15px;

          font-weight: 500;
        }

        .customer-stories-card-role {
          margin: 0;

          color: #635557;

          font-size: 10px;
          line-height: 14px;

          font-weight: 400;
        }

        .customer-stories-card-description {
          width: 540px;

          margin: 16px 0 0;

          color: #48494c;

          font-size: 11px;
          line-height: 16px;

          font-weight: 400;
        }

        .customer-stories-card-link {
          margin-top: auto;

          color: #0085ff;

          font-size: 11px;
          line-height: 17px;

          font-weight: 500;
        }

        /* =========================================================
           USING DATACIRCLES SECTION
           ========================================================= */

        .customer-stories-share {
          width: 1236px;
          height: 220px;

          margin-top: 58px;

          border-radius: 12px;

          background: #f1f9fd;

          display: flex;

          align-items: center;

          padding: 32px 38px;
        }

        .customer-stories-share-image {
          width: 120px;
          height: 120px;

          flex: none;

          border-radius: 8px;

          background: #d9d9d9;

          overflow: hidden;
        }

        .customer-stories-share-image img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
        }

        .customer-stories-share-content {
          margin-left: 32px;

          width: 700px;

          display: flex;
          flex-direction: column;
        }

        .customer-stories-share-title {
          margin: 0;

          color: #242424;

          font-size: 22px;
          line-height: 28px;

          font-weight: 500;

          letter-spacing: -0.7px;
        }

        .customer-stories-share-description {
          width: 610px;

          margin: 13px 0 0;

          color: #707173;

          font-size: 12px;
          line-height: 18px;

          font-weight: 400;
        }

        .customer-stories-share-button {
          width: 190px;
          height: 48px;

          margin-left: auto;

          border: 0;

          border-radius: 24px;

          background: #ffffff;

          color: #0085ff;

          font-size: 11px;
          line-height: 17px;

          font-weight: 500;
        }

        /* =========================================================
           CTA
           ========================================================= */

        .customer-stories-cta {
          position: relative;

          width: 100vw;

          margin-top: 42px;
          margin-left: calc(50% - 50vw);

          z-index: 10;
        }

        /* =========================================================
           RESPONSIVE
           ========================================================= */

        @media (max-width: 1439px) {

          .customer-stories-canvas {
            width: 100%;
          }

          .customer-stories-hero {
            width: 100%;
          }

          .customer-stories-main {
            width: calc(100% - 48px);
          }

          .customer-stories-featured {
            width: 100%;

            grid-template-columns:
              minmax(0, 0.83fr)
              minmax(0, 1fr);
          }

          .customer-stories-featured-content,
          .customer-stories-featured-media {
            width: 100%;
          }

          .customer-stories-grid {
            width: 100%;

            grid-template-columns:
              minmax(0, 1fr)
              minmax(0, 1fr);
          }

          .customer-stories-card {
            width: 100%;
          }

          .customer-stories-share {
            width: 100%;
          }

          .customer-stories-share-content {
            width: auto;
            flex: 1;
          }
        }

        @media (max-width: 900px) {

          .customer-stories-hero-content {
            width: calc(100% - 40px);
          }

          .customer-stories-hero-title {
            width: 100%;

            font-size: 43px;
            line-height: 47px;
          }

          .customer-stories-hero-description {
            width: 100%;
          }

          .customer-stories-featured {
            height: auto;

            grid-template-columns: 1fr;

            row-gap: 20px;

            padding: 16px;
          }

          .customer-stories-featured-content {
            width: 100%;
            height: auto;

            padding: 24px;
          }

          .customer-stories-featured-media {
            width: 100%;
            height: 420px;
          }

          .customer-stories-grid {
            grid-template-columns: 1fr;
          }

          .customer-stories-card {
            width: 100%;
            height: auto;
            min-height: 177px;
          }

          .customer-stories-share {
            height: auto;
            min-height: 200px;

            padding: 25px;
          }

          .customer-stories-share-content {
            margin-left: 20px;
          }

          .customer-stories-share-description {
            width: 100%;
          }
        }

        @media (max-width: 600px) {

          .customer-stories-page {
            min-height: 100vh;
          }

          .customer-stories-hero {
            height: 390px;
          }

          .customer-stories-hero-content {
            top: 135px;
          }

          .customer-stories-hero-title {
            font-size: 34px;
            line-height: 39px;
            letter-spacing: -1.8px;
          }

          .customer-stories-hero-description {
            font-size: 12px;
            line-height: 18px;
          }

          .customer-stories-main {
            width: calc(100% - 32px);
          }

          .customer-stories-featured {
            width: 100%;

            padding: 10px;

            border-radius: 10px;
          }

          .customer-stories-featured-content {
            padding: 20px 10px;
          }

          .customer-stories-featured-quote {
            width: 100%;

            font-size: 18px;
            line-height: 23px;
          }

          .customer-stories-featured-description {
            width: 100%;
          }

          .customer-stories-featured-media {
            width: 100%;
            height: 270px;
          }

          .customer-stories-card {
            padding: 22px;
          }

          .customer-stories-card-description {
            width: 100%;
          }

          .customer-stories-share {
            flex-direction: column;

            align-items: flex-start;

            gap: 18px;

            padding: 24px;
          }

          .customer-stories-share-image {
            width: 80px;
            height: 80px;
          }

          .customer-stories-share-content {
            width: 100%;
            margin-left: 0;
          }

          .customer-stories-share-title {
            font-size: 18px;
            line-height: 24px;
          }

          .customer-stories-share-button {
            width: 180px;
            margin-left: 0;
          }

          .customer-stories-cta {
            margin-top: 30px;
          }
        }
      `}</style>

      <div className="customer-stories-page">

        <div className="customer-stories-canvas">

          {/* =====================================================
              EXISTING NAVBAR
              ===================================================== */}

          <div className="customer-stories-navbar">
            <Navbar />
          </div>

          {/* =====================================================
              BACKGROUND
              ===================================================== */}

          <div className="customer-stories-testimonials-background" />

          <div className="customer-stories-testimonials-grid" />

          {/* =====================================================
              HERO
              ===================================================== */}

          <section className="customer-stories-hero">

            <div className="customer-stories-hero-content">

              <div className="customer-stories-label">

                <span className="customer-stories-label-dot" />

                <span>
                  CUSTOMER STORIES
                </span>

              </div>

              <h1 className="customer-stories-hero-title">
                Real Businesses,
                <br />
                in their own words
              </h1>

              <p className="customer-stories-hero-description">
                Hear from the Indian businesses using DataCircles to keep their
                leads and invoices in one place, and get paid without the chaos.
              </p>

            </div>

          </section>

          {/* =====================================================
              MAIN CUSTOMER STORIES
              ===================================================== */}

          <main className="customer-stories-main">

            {/* ===================================================
                FEATURED CUSTOMER STORY
                =================================================== */}

            <section className="customer-stories-featured">

              <div className="customer-stories-featured-content">

                <p className="customer-stories-featured-label">
                  Customer Testimonial
                </p>

                <h2 className="customer-stories-featured-quote">
                  "[Pulled quote from the video, e.g. "We used
                  to juggle a CRM and a separate billing app.
                  Now it's all in one place."]"
                </h2>

                <p className="customer-stories-featured-description">
                  [2 to 3 line summary in the DataCircles voice, so the point
                  lands even for people who don't press play. Describe the
                  before and after.]
                </p>

                <div className="customer-stories-person">

                  <div className="customer-stories-avatar">

                    {imgCustomer1 && (
                      <img
                        src={imgCustomer1}
                        alt=""
                      />
                    )}

                  </div>

                  <div className="customer-stories-person-details">

                    <p className="customer-stories-person-name">
                      [ Customer Name ]
                    </p>

                    <p className="customer-stories-person-role">
                      [ Role ] · [ Business Name ]
                    </p>

                  </div>

                </div>

              </div>

              {/* =================================================
                  MAIN CUSTOMER IMAGE
                  ================================================= */}

              <div className="customer-stories-featured-media">

                {imgCustomerMain && (
                  <img
                    src={imgCustomerMain}
                    alt=""
                  />
                )}

              </div>

            </section>

            {/* ===================================================
                CUSTOMER STORY CARDS
                =================================================== */}

            <section className="customer-stories-grid">

              {/* CARD 1 */}

              <article className="customer-stories-card">

                <div className="customer-stories-card-person">

                  <div className="customer-stories-card-avatar">

                    {imgCustomer2 && (
                      <img
                        src={imgCustomer2}
                        alt=""
                      />
                    )}

                  </div>

                  <div className="customer-stories-card-person-info">

                    <p className="customer-stories-card-name">
                      [ Customer Name ]
                    </p>

                    <p className="customer-stories-card-role">
                      [ Role ] · [ Business Name ]
                    </p>

                  </div>

                </div>

                <p className="customer-stories-card-description">
                  [2 to 3 line summary in the DataCircles voice, so the point
                  lands even for people who don't press play. Describe the
                  before and after.]
                </p>

                <a
                  href="#"
                  className="customer-stories-card-link"
                >
                  Watch / Read Story
                </a>

              </article>

              {/* CARD 2 */}

              <article className="customer-stories-card">

                <div className="customer-stories-card-person">

                  <div className="customer-stories-card-avatar">

                    {imgCustomer3 && (
                      <img
                        src={imgCustomer3}
                        alt=""
                      />
                    )}

                  </div>

                  <div className="customer-stories-card-person-info">

                    <p className="customer-stories-card-name">
                      [ Customer Name ]
                    </p>

                    <p className="customer-stories-card-role">
                      [ Role ] · [ Business Name ]
                    </p>

                  </div>

                </div>

                <p className="customer-stories-card-description">
                  [2 to 3 line summary in the DataCircles voice, so the point
                  lands even for people who don't press play. Describe the
                  before and after.]
                </p>

                <a
                  href="#"
                  className="customer-stories-card-link"
                >
                  Watch / Read Story
                </a>

              </article>

              {/* CARD 3 */}

              <article className="customer-stories-card">

                <div className="customer-stories-card-person">

                  <div className="customer-stories-card-avatar">

                    {imgCustomer4 && (
                      <img
                        src={imgCustomer4}
                        alt=""
                      />
                    )}

                  </div>

                  <div className="customer-stories-card-person-info">

                    <p className="customer-stories-card-name">
                      [ Customer Name ]
                    </p>

                    <p className="customer-stories-card-role">
                      [ Role ] · [ Business Name ]
                    </p>

                  </div>

                </div>

                <p className="customer-stories-card-description">
                  [2 to 3 line summary in the DataCircles voice, so the point
                  lands even for people who don't press play. Describe the
                  before and after.]
                </p>

                <a
                  href="#"
                  className="customer-stories-card-link"
                >
                  Watch / Read Story
                </a>

              </article>

              {/* CARD 4 */}

              <article className="customer-stories-card">

                <div className="customer-stories-card-person">

                  <div className="customer-stories-card-avatar">

                    {imgCustomer5 && (
                      <img
                        src={imgCustomer5}
                        alt=""
                      />
                    )}

                  </div>

                  <div className="customer-stories-card-person-info">

                    <p className="customer-stories-card-name">
                      [ Customer Name ]
                    </p>

                    <p className="customer-stories-card-role">
                      [ Role ] · [ Business Name ]
                    </p>

                  </div>

                </div>

                <p className="customer-stories-card-description">
                  [2 to 3 line summary in the DataCircles voice, so the point
                  lands even for people who don't press play. Describe the
                  before and after.]
                </p>

                <a
                  href="#"
                  className="customer-stories-card-link"
                >
                  Watch / Read Story
                </a>

              </article>

              {/* CARD 5 */}

              <article className="customer-stories-card">

                <div className="customer-stories-card-person">

                  <div className="customer-stories-card-avatar">

                    {imgCustomer6 && (
                      <img
                        src={imgCustomer6}
                        alt=""
                      />
                    )}

                  </div>

                  <div className="customer-stories-card-person-info">

                    <p className="customer-stories-card-name">
                      [ Customer Name ]
                    </p>

                    <p className="customer-stories-card-role">
                      [ Role ] · [ Business Name ]
                    </p>

                  </div>

                </div>

                <p className="customer-stories-card-description">
                  [2 to 3 line summary in the DataCircles voice, so the point
                  lands even for people who don't press play. Describe the
                  before and after.]
                </p>

                <a
                  href="#"
                  className="customer-stories-card-link"
                >
                  Watch / Read Story
                </a>

              </article>

              {/* CARD 6 */}

              <article className="customer-stories-card">

                <div className="customer-stories-card-person">

                  <div className="customer-stories-card-avatar">

                    {imgCustomer7 && (
                      <img
                        src={imgCustomer7}
                        alt=""
                      />
                    )}

                  </div>

                  <div className="customer-stories-card-person-info">

                    <p className="customer-stories-card-name">
                      [ Customer Name ]
                    </p>

                    <p className="customer-stories-card-role">
                      [ Role ] · [ Business Name ]
                    </p>

                  </div>

                </div>

                <p className="customer-stories-card-description">
                  [2 to 3 line summary in the DataCircles voice, so the point
                  lands even for people who don't press play. Describe the
                  before and after.]
                </p>

                <a
                  href="#"
                  className="customer-stories-card-link"
                >
                  Watch / Read Story
                </a>

              </article>

            </section>

            {/* ===================================================
                USING DATACIRCLES SECTION
                =================================================== */}

            <section className="customer-stories-share">

              <div className="customer-stories-share-image">

                {imgUsingDatacircles && (
                  <img
                    src={imgUsingDatacircles}
                    alt=""
                  />
                )}

              </div>

              <div className="customer-stories-share-content">

                <h2 className="customer-stories-share-title">
                  Using DataCircles and happy with it?
                </h2>

                <p className="customer-stories-share-description">
                  We'd love to hear your story. It takes a few minutes,
                  and it helps other businesses like yours.
                </p>

              </div>

              <button
                type="button"
                className="customer-stories-share-button"
              >
                Share Your Story
              </button>

            </section>

          </main>

          {/* =====================================================
              EXISTING CTA — EDGE TO EDGE
              ===================================================== */}

          <section className="customer-stories-cta">
            <CTA />
          </section>

        </div>
      </div>
    </>
  );
}