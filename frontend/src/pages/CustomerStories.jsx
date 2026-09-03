import Navbar from "../components/navbar";
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

const imgCustomerMain = "";
const imgUsingDatacircles = "";

/* =========================================================
   DATA
   ========================================================= */

const customerStories = [
  {
    image: imgCustomer2,
    name: "[ Business name ]",
    role: "[ Business type ] · [ City ]",
    description: '[“One-line pulled quote from this customer.”]',
  },
  {
    image: imgCustomer3,
    name: "[ Business name ]",
    role: "[ Business type ] · [ City ]",
    description: '[“One-line pulled quote from this customer.”]',
  },
  {
    image: imgCustomer4,
    name: "[ Business name ]",
    role: "[ Business type ] · [ City ]",
    description: '[“One-line pulled quote from this customer.”]',
  },
  {
    image: imgCustomer5,
    name: "[ Business name ]",
    role: "[ Business type ] · [ City ]",
    description: '[“One-line pulled quote from this customer.”]',
  },
  {
    image: imgCustomer6,
    name: "[ Business name ]",
    role: "[ Business type ] · [ City ]",
    description: '[“One-line pulled quote from this customer.”]',
  },
  {
    image: imgCustomer7,
    name: "[ Business name ]",
    role: "[ Business type ] · [ City ]",
    description: '[“One-line pulled quote from this customer.”]',
  },
];

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
          color: #ffffff;
          font-family: Inter, Arial, Helvetica, sans-serif;
        }

        button,
        input,
        textarea {
          font-family: inherit;
        }

        button {
          cursor: pointer;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        /* =========================================================
           PAGE
           ========================================================= */

        .customer-stories-page {
          width: 100%;
          min-height: 100vh;
          overflow-x: hidden;
          background: #ffffff;
        }

        .customer-stories-canvas {
          width: 100%;
          max-width: 1680px;
          min-height: 100vh;
          margin: 0 auto;
          position: relative;
          background: #ffffff;
        }

        /* =========================================================
           NAVBAR
           ========================================================= */

        .customer-stories-navbar {
          width: 100%;
          padding: 32px 32px 0;
          position: relative;
          z-index: 20;
        }

        /* =========================================================
           SMALL SECTION LABEL / WIREFRAME MARKER
           ========================================================= */

        .customer-stories-section-heading {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 12px;
          color: #8a8585;
          font-size: 12px;
          line-height: 18px;
          font-weight: 400;
        }

        .customer-stories-section-number {
          width: 20px;
          height: 20px;
          flex: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          background: #0085ff;
          color: #ffffff;
          font-size: 10px;
          line-height: 1;
          font-weight: 600;
        }

        .customer-stories-section-heading strong {
          color: #242424;
          font-weight: 500;
        }

        /* =========================================================
           HERO
           ========================================================= */

        .customer-stories-hero {
          width: 100%;
          min-height: 420px;
          padding: 40px 32px 0;
          background: #ffffff;
        }

        .customer-stories-hero-inner {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
        }

        .customer-stories-breadcrumb {
          margin-bottom: 64px;
        }

        .customer-stories-hero-content {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .customer-stories-label {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          height: 36px;
          min-width: 168px;
          padding: 0 18px;
          margin-bottom: 22px;
          border-radius: 18px;
          background: rgba(235, 230, 224, 0.24);
          color: #635557;
          font-size: 14px;
          line-height: 21px;
          font-weight: 400;
        }

        .customer-stories-label-dot {
          width: 8px;
          height: 8px;
          flex: none;
          border-radius: 50%;
          background: #0085ff;
        }

        .customer-stories-hero-title {
          max-width: 900px;
          margin: 0;
          color: #000000;
          font-size: 56px;
          line-height: 62px;
          font-weight: 500;
          letter-spacing: -2.4px;
        }

        .customer-stories-hero-description {
          max-width: 780px;
          margin: 18px auto 0;
          color: #635557;
          font-size: 16px;
          line-height: 24px;
          font-weight: 400;
        }

        /* =========================================================
           FEATURED VIDEO / TESTIMONIAL
           ========================================================= */

        .customer-stories-featured-section {
          width: 100%;
          padding: 0 32px;
          background: #f5f9f7;
        }

        .customer-stories-featured-wrap {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 28px 0 34px;
        }

        .customer-stories-featured-heading {
          margin-bottom: 20px;
        }

        .customer-stories-featured {
          width: 100%;
          min-height: 440px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 0.92fr);
          gap: 40px;
          align-items: stretch;
        }

        .customer-stories-featured-media {
          width: 100%;
          min-height: 440px;
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          background: #d9d9d9;
        }

        .customer-stories-featured-media img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .customer-stories-video-placeholder {
          width: 100%;
          height: 100%;
          min-height: 440px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #d9d9d9;
        }

        .customer-stories-play {
          width: 72px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #ffffff;
          color: #0085ff;
          font-size: 24px;
          padding-left: 4px;
          box-shadow: 0 10px 26px rgba(35, 16, 20, 0.1);
        }

        .customer-stories-video-caption {
          position: absolute;
          left: 18px;
          bottom: 16px;
          color: #ffffff;
          font-size: 11px;
          line-height: 16px;
          font-weight: 400;
        }

        .customer-stories-featured-content {
          min-width: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 16px 6px 16px 0;
        }

        .customer-stories-featured-label {
          margin: 0 0 22px;
          color: #0085ff;
          font-size: 14px;
          line-height: 20px;
          font-weight: 500;
        }

        .customer-stories-featured-quote {
          max-width: 600px;
          margin: 0;
          color: #242424;
          font-size: 26px;
          line-height: 33px;
          font-weight: 500;
          letter-spacing: -0.5px;
        }

        .customer-stories-featured-description {
          max-width: 580px;
          margin: 18px 0 0;
          color: #707173;
          font-size: 13px;
          line-height: 20px;
          font-weight: 400;
        }

        .customer-stories-person {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 24px;
        }

        .customer-stories-avatar {
          width: 44px;
          height: 44px;
          flex: none;
          overflow: hidden;
          border-radius: 50%;
          background: #dddddd;
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
          font-size: 14px;
          line-height: 19px;
          font-weight: 500;
        }

        .customer-stories-person-role {
          margin: 0;
          color: #635557;
          font-size: 12px;
          line-height: 17px;
          font-weight: 400;
        }

        .customer-stories-featured-result {
          width: fit-content;
          max-width: 100%;
          margin-top: 20px;
          padding: 8px 14px;
          border-radius: 8px;
          background: rgba(0, 133, 255, 0.08);
          color: #0085ff;
          font-size: 12px;
          line-height: 17px;
          font-weight: 500;
        }

        /* =========================================================
           OTHER STORIES
           ========================================================= */

        .customer-stories-other {
          width: 100%;
          padding: 28px 32px 0;
          background: #ffffff;
        }

        .customer-stories-other-wrap {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
        }

        .customer-stories-other-heading {
          margin-bottom: 18px;
        }

        .customer-stories-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .customer-stories-card {
          width: 100%;
          min-height: 178px;
          padding: 22px 24px 20px;
          border: 1px solid #dfe5e2;
          border-radius: 13px;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        .customer-stories-card-person {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .customer-stories-card-avatar {
          width: 44px;
          height: 44px;
          flex: none;
          overflow: hidden;
          border-radius: 50%;
          background: #edf1ef;
          border: 1px solid #dce5e1;
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
          font-size: 14px;
          line-height: 19px;
          font-weight: 500;
        }

        .customer-stories-card-role {
          margin: 0;
          color: #635557;
          font-size: 12px;
          line-height: 17px;
          font-weight: 400;
        }

        .customer-stories-card-description {
          margin: 14px 0 0;
          color: #48494c;
          font-size: 14px;
          line-height: 21px;
          font-weight: 400;
        }

        .customer-stories-card-link {
          margin-top: auto;
          padding-top: 12px;
          color: #0085ff;
          font-size: 12px;
          line-height: 17px;
          font-weight: 500;
        }

        /* =========================================================
           STATS STRIP
           ========================================================= */

        .customer-stories-stats {
          width: 100%;
          margin-top: 28px;
          padding: 26px 32px;
          background: #f1f9fd;
        }

        .customer-stories-stats-wrap {
          width: 100%;
          max-width: 1020px;
          margin: 0 auto;
        }

        .customer-stories-stats-heading {
          max-width: 1280px;
          margin: 0 auto 16px;
        }

        .customer-stories-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .customer-stories-stat {
          min-height: 112px;
          padding: 20px 16px;
          border-radius: 13px;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .customer-stories-stat-value {
          margin: 0;
          color: #0085ff;
          font-size: 26px;
          line-height: 31px;
          font-weight: 600;
          letter-spacing: -0.7px;
        }

        .customer-stories-stat-label {
          max-width: 190px;
          margin: 6px 0 0;
          color: #8a8585;
          font-size: 11px;
          line-height: 16px;
          font-weight: 400;
        }

        /* =========================================================
           SHARE YOUR STORY
           ========================================================= */

        .customer-stories-share-section {
          width: 100%;
          padding: 26px 32px 30px;
          background: #ffffff;
        }

        .customer-stories-share-wrap {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
        }

        .customer-stories-share-heading {
          margin-bottom: 18px;
        }

        .customer-stories-share {
          width: 100%;
          min-height: 112px;
          display: flex;
          align-items: center;
          gap: 22px;
          padding: 18px 26px;
          border-radius: 13px;
          background: #ffffff;
        }

        .customer-stories-share-image {
          width: 58px;
          height: 58px;
          flex: none;
          overflow: hidden;
          border-radius: 10px;
          background: #eaf5f0;
        }

        .customer-stories-share-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .customer-stories-share-content {
          min-width: 0;
          flex: 1;
        }

        .customer-stories-share-title {
          margin: 0;
          color: #242424;
          font-size: 17px;
          line-height: 22px;
          font-weight: 500;
        }

        .customer-stories-share-description {
          margin: 5px 0 0;
          color: #707173;
          font-size: 13px;
          line-height: 19px;
          font-weight: 400;
        }

        .customer-stories-share-button {
          width: 170px;
          height: 46px;
          flex: none;
          border: 0;
          border-radius: 23px;
          background: #ffffff;
          color: #0085ff;
          font-size: 13px;
          line-height: 18px;
          font-weight: 500;
        }

        /* =========================================================
           CTA
           ========================================================= */

        .customer-stories-cta {
          width: 100%;
          margin: 0;
          position: relative;
          z-index: 10;
        }

        /* =========================================================
           FOOTER
           ========================================================= */

        .customer-stories-footer {
          width: 100%;
          min-height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 18px 32px;
          background: #f1f4f2;
        }

        .customer-stories-footer-inner {
          width: 100%;
          max-width: 1280px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 26px;
        }

        .customer-stories-footer-copy,
        .customer-stories-footer-links {
          color: #8a8585;
          font-size: 11px;
          line-height: 16px;
          font-weight: 400;
        }

        .customer-stories-footer-links {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        /* =========================================================
           TABLET
           ========================================================= */

        @media (max-width: 900px) {
          .customer-stories-navbar {
            padding-left: 18px;
            padding-right: 18px;
          }

          .customer-stories-hero {
            min-height: 400px;
            padding-left: 24px;
            padding-right: 24px;
          }

          .customer-stories-featured-section,
          .customer-stories-other,
          .customer-stories-share-section {
            padding-left: 24px;
            padding-right: 24px;
          }

          .customer-stories-featured {
            grid-template-columns: 1fr;
            gap: 26px;
          }

          .customer-stories-featured-media,
          .customer-stories-video-placeholder {
            min-height: 400px;
          }

          .customer-stories-featured-content {
            padding: 0 6px 16px;
          }

          .customer-stories-grid {
            grid-template-columns: 1fr;
          }

          .customer-stories-stats {
            padding-left: 24px;
            padding-right: 24px;
          }

          .customer-stories-share {
            padding: 17px;
          }
        }

        /* =========================================================
           MOBILE
           ========================================================= */

        @media (max-width: 600px) {
          .customer-stories-navbar {
            padding-top: 18px;
          }

          .customer-stories-section-heading {
            font-size: 11px;
          }

          .customer-stories-hero {
            min-height: 380px;
            padding: 28px 18px 0;
          }

          .customer-stories-breadcrumb {
            margin-bottom: 46px;
          }

          .customer-stories-hero-title {
            font-size: 42px;
            line-height: 48px;
            letter-spacing: -2px;
          }

          .customer-stories-hero-description {
            max-width: 520px;
            font-size: 15px;
            line-height: 22px;
          }

          .customer-stories-featured-section,
          .customer-stories-other,
          .customer-stories-share-section {
            padding-left: 16px;
            padding-right: 16px;
          }

          .customer-stories-featured-wrap {
            padding-top: 20px;
            padding-bottom: 24px;
          }

          .customer-stories-featured {
            gap: 20px;
          }

          .customer-stories-featured-media,
          .customer-stories-video-placeholder {
            min-height: 300px;
          }

          .customer-stories-play {
            width: 60px;
            height: 60px;
            font-size: 20px;
          }

          .customer-stories-featured-quote {
            font-size: 23px;
            line-height: 29px;
          }

          .customer-stories-featured-description {
            font-size: 13px;
            line-height: 20px;
          }

          .customer-stories-grid {
            gap: 14px;
          }

          .customer-stories-card {
            min-height: 172px;
          }

          .customer-stories-stats {
            margin-top: 22px;
            padding: 22px 16px;
          }

          .customer-stories-stats-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .customer-stories-stat {
            min-height: 92px;
          }

          .customer-stories-share-section {
            padding-top: 22px;
            padding-bottom: 24px;
          }

          .customer-stories-share {
            align-items: flex-start;
            flex-wrap: wrap;
            gap: 15px;
          }

          .customer-stories-share-content {
            width: calc(100% - 78px);
            flex: none;
          }

          .customer-stories-share-button {
            margin-left: 78px;
          }

          .customer-stories-footer-inner {
            flex-direction: column;
            align-items: flex-start;
            gap: 11px;
          }

          .customer-stories-footer-links {
            gap: 16px;
            flex-wrap: wrap;
          }
        }

        @media (max-width: 420px) {
          .customer-stories-hero-title {
            font-size: 36px;
            line-height: 42px;
          }

          .customer-stories-featured-quote {
            font-size: 21px;
            line-height: 27px;
          }

          .customer-stories-card {
            padding: 18px;
          }

          .customer-stories-share {
            padding: 15px;
          }
        }
      `}</style>

      <div className="customer-stories-page">
        <div className="customer-stories-canvas">

          {/* =====================================================
              NAVBAR
              ===================================================== */}

          <div className="customer-stories-navbar">
            <Navbar />
          </div>

          {/* =====================================================
              G1 — HEADER / HERO
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
                Real businesses,
                
                in their own words
              </h1>

              <p className="customer-stories-hero-description">
                Hear from the Indian businesses using DataCircles to keep their
                leads and <br/> invoices in one place, and get paid without the chaos.
              </p>

            </div>

          </section>

          {/* =====================================================
              G2 — HERO VIDEO / FEATURED STORY
              ===================================================== */}

          <section className="customer-stories-featured-section">
            <div className="customer-stories-featured-wrap">

             
              <div className="customer-stories-featured">

                <div className="customer-stories-featured-media">
                  {imgCustomerMain ? (
                    <img src={imgCustomerMain} alt="Featured customer story" />
                  ) : (
                    <div className="customer-stories-video-placeholder">
                      <div className="customer-stories-play" aria-hidden="true">
                        ▶
                      </div>
                    </div>
                  )}

                  <span className="customer-stories-video-caption">
                    [Customer video testimonial — YouTube/Vimeo embed]
                  </span>
                </div>

                <div className="customer-stories-featured-content">
                  <p className="customer-stories-featured-label">
                    Customer Testimonial
                  </p>

                  <h2 className="customer-stories-featured-quote">
                    "[Pulled quote from the video, e.g. “We used to juggle a CRM
                    and a separate billing app. Now it’s all in one place.”]"
                  </h2>

                  <p className="customer-stories-featured-description">
                    [2 to 3 line summary in the DataCircles voice, so the point
                    lands even for people who don't press play. Describe the
                    before and after.]
                  </p>

                  <div className="customer-stories-person">
                    <div className="customer-stories-avatar">
                      {imgCustomer1 && (
                        <img src={imgCustomer1} alt="" />
                      )}
                    </div>

                    <div className="customer-stories-person-details">
                      <p className="customer-stories-person-name">
                        [Customer name]
                      </p>
                      <p className="customer-stories-person-role">
                        [Role] · [Business name]
                      </p>
                    </div>
                  </div>

                  <div className="customer-stories-featured-result">
                    [The change, e.g. “CRM + invoicing, finally in one place”]
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* =====================================================
              G3 — OTHER STORIES
              ===================================================== */}

          <section className="customer-stories-other">
            <div className="customer-stories-other-wrap">


              <div className="customer-stories-grid">
                {customerStories.map((story, index) => (
                  <article className="customer-stories-card" key={index}>
                    <div className="customer-stories-card-person">
                      <div className="customer-stories-card-avatar">
                        {story.image && (
                          <img src={story.image} alt="" />
                        )}
                      </div>

                      <div className="customer-stories-card-person-info">
                        <p className="customer-stories-card-name">
                          {story.name}
                        </p>
                        <p className="customer-stories-card-role">
                          {story.role}
                        </p>
                      </div>
                    </div>

                    <p className="customer-stories-card-description">
                      {story.description}
                    </p>

                    <a href="#" className="customer-stories-card-link">
                      Watch / read story
                    </a>
                  </article>
                ))}
              </div>

            </div>
          </section>

          {/* =====================================================
              G4 — TRUST / STATS STRIP
              ===================================================== */}

          <section className="customer-stories-stats">
           

            <div className="customer-stories-stats-wrap">
              <div className="customer-stories-stats-grid">

                <div className="customer-stories-stat">
                  <p className="customer-stories-stat-value">100+</p>
                  <p className="customer-stories-stat-label">
                    businesses run on DataCircles
                  </p>
                </div>

                <div className="customer-stories-stat">
                  <p className="customer-stories-stat-value">1,00,000+</p>
                  <p className="customer-stories-stat-label">
                    invoices raised
                  </p>
                </div>

                <div className="customer-stories-stat">
                  <p className="customer-stories-stat-value">Mumbai</p>
                  <p className="customer-stories-stat-label">
                    built in India, for India
                  </p>
                </div>

              </div>
            </div>
          </section>

          {/* =====================================================
              G5 — SHARE YOUR STORY
              ===================================================== */}

          <section className="customer-stories-share-section">
            <div className="customer-stories-share-wrap">

             

              <div className="customer-stories-share">

                <div className="customer-stories-share-image">
                  {imgUsingDatacircles && (
                    <img src={imgUsingDatacircles} alt="" />
                  )}
                </div>

                <div className="customer-stories-share-content">
                  <h2 className="customer-stories-share-title">
                    Using DataCircles and happy with it?
                  </h2>

                  <p className="customer-stories-share-description">
                    We'd love to hear your story. It takes a few minutes, and it
                    helps other businesses like yours.
                  </p>
                </div>

                <button type="button" className="customer-stories-share-button">
                  Share your story
                </button>

              </div>
            </div>
          </section>

          {/* =====================================================
              G6 — CTA
              ===================================================== */}

          <section className="customer-stories-cta">
            <CTA />
          </section>


        </div>
      </div>
    </>
  );
}