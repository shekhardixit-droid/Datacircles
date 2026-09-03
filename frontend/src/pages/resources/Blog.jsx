import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Blog() {
  const navigate = useNavigate();
  /*
   * ============================================================
   * BLOG IMAGES
   * ============================================================
   *
   * Paste your Cloudinary URLs here later.
   *
   * Image 1 = Blog card 1
   * Image 2 = Blog card 2
   * Image 3 = Blog card 3
   * Image 4 = Good Things section
   */

  const BLOG_IMAGE_1 = "https://res.cloudinary.com/tpxo8m6a/image/upload/v1787925586/b53ad774db53413711aeb21c7fda31ba77fde6ed_1.jpg";
  const BLOG_IMAGE_2 = "https://res.cloudinary.com/tpxo8m6a/image/upload/v1787925586/b53ad774db53413711aeb21c7fda31ba77fde6ed_1.jpg";
  const BLOG_IMAGE_3 = "https://res.cloudinary.com/tpxo8m6a/image/upload/v1787925586/b53ad774db53413711aeb21c7fda31ba77fde6ed_1.jpg";
  const GOOD_THINGS_IMAGE = "https://res.cloudinary.com/tpxo8m6a/image/upload/v1787925572/9ceea6c9995cc123e0a4b3b50ef9ac054933cbda_1.png";

  const posts = [
    {
      image: BLOG_IMAGE_1,
    },
    {
      image: BLOG_IMAGE_2,
    },
    {
      image: BLOG_IMAGE_3,
    },
  ];

  return (
    <>
      <style>{`
        /* ============================================================
           GLOBAL
           ============================================================ */

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
          font-family: "Inter", Arial, Helvetica, sans-serif;
        }

        button,
        input {
          font-family: inherit;
        }

        button {
          cursor: pointer;
        }

        a {
          text-decoration: none;
        }

        /* ============================================================
           MAIN PAGE
           ============================================================ */

        .blog-page {
          width: 100%;
          min-height: unset;
          height: auto;
          background: #ffffff;
          overflow-x: hidden;
          position: relative;
        }

        .blog-canvas {
          width: 1440px;
          min-height: unset;
          height: auto;
          margin: 0 auto;
          position: relative;
          background: #ffffff;
        }

        /* ============================================================
           HERO BACKGROUND (untouched)
           ============================================================ */

        .blog-hero-background {
          position: absolute;
          top: 379.939px;
          left: 50%;
          transform: translateX(-50%);
          width: 1920px;
          height: 945px;

          background: linear-gradient(
            to bottom,
            #ffffff 9.46%,
            #9cd0ff 45.045%,
            #ffffff 89.631%,
            #ffffff 100%
          );

          opacity: 1;
          pointer-events: none;
        }

        /* ============================================================
           HERO GRID (untouched)
           ============================================================ */

        .blog-hero-grid {
          position: absolute;
          top: 313px;
          left: 50%;
          transform: translateX(-50%);

          width: 1340px;
          height: 1078px;

          pointer-events: none;
          opacity: 1;

          background-image:
            linear-gradient(
              #ffffff 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              #ffffff 1px,
              transparent 1px
            );

          background-size: 135px 135px;

          mask-image: linear-gradient(
            to bottom,
            #000000 0%,
            #000000 80%,
            transparent 100%
          );

          -webkit-mask-image: linear-gradient(
            to bottom,
            #000000 0%,
            #000000 80%,
            transparent 100%
          );
        }

        /* ============================================================
           HERO (untouched)
           ============================================================ */

        .blog-hero {
          position: relative;
          width: 1440px;
          height: 313px;
          z-index: 2;
        }


        /* ============================================================
           NAVBAR (untouched)
           ============================================================ */

        .blog-navbar {
          position: absolute;
          top: 12px;
          left: 0;
          z-index: 50;

          width: 100%;

          display: flex;
          justify-content: center;
          align-items: flex-start;

          padding: 0 8px;
        }

        .blog-hero-content {
          position: absolute;
          top: 164px;
          left: 50%;
          transform: translateX(-50%);

          width: 1600px;
          max-width: 1600px;

          display: flex;
          flex-direction: column;
          align-items: center;

          text-align: center;
        }

        /* ============================================================
           HERO LABEL / PILL (untouched)
           ============================================================ */

        .blog-hero-label {
          width: 146px;
          height: 25.8px;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 5px;

          border-radius: 12.9px;

          background: rgba(235, 230, 224, 0.2);

          margin-bottom: 28px;
        }

        .blog-hero-label-dot {
          width: 6px;
          height: 6px;

          flex: none;

          border-radius: 50%;

          background: #0085ff;
        }

        .blog-hero-label-text {
          color: #231014;

          font-size: 11.4px;
          line-height: 17px;
          font-weight: 400;

          white-space: nowrap;
        }

        /* ============================================================
           HERO TITLE (untouched)
           ============================================================ */

        .blog-hero-title {
          width: 760px;
          max-width: 90%;

          margin: 0;
          padding: 0;

          color: #231014;

          font-size: 51px;
          line-height: 54px;

          font-weight: 500;

          letter-spacing: -2.7px;
        }

        /* ============================================================
           HERO DESCRIPTION (untouched)
           ============================================================ */

        .blog-hero-description {
          width: 685px;

          margin: 18px 0 0;

          color: #635557;

          font-size: 13.2px;
          line-height: 20px;

          font-weight: 400;

          text-align: center;
        }

        .blog-hero-description-line {
          display: block;
        }

        /* ============================================================
           CONTENT AREA — enlarged
           ============================================================ */

        .blog-main {
          position: relative;

          width: 1340px;

          margin-left: auto;
          margin-right: auto;

          z-index: 5;
        }

        /* ============================================================
           CATEGORY TABS — enlarged
           ============================================================ */

        .blog-category-row {
          width: 100%;
          height: 52px;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 16px;

          margin-top: 98px;
          margin-bottom: 42px;
        }

        .blog-category-button {
          height: 52px;

          padding: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 26px;

          border: 0.6px solid #dce7f0;

          background: #ffffff;

          color: #242424;

          font-size: 14px;
          line-height: 21px;

          font-weight: 400;

          box-shadow: 0 3px 5px rgba(0, 0, 0, 0.04);

          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }

        .blog-category-button:hover {
          background: #0085ff;
          border-color: #0085ff;
          color: #ffffff;
        }

        .blog-category-button.active {
          background: #0085ff;
          border-color: #0085ff;
          color: #ffffff;
        }

        .blog-category-button.active:hover {
          background: #000000;
          border-color: #000000;
          color: #ffffff;
        }

        .blog-category-button.crm {
          width: 176px;
        }

        .blog-category-button.invoicing {
          width: 200px;
        }

        .blog-category-button.videos {
          width: 104px;
        }

        .blog-category-button.testimonials {
          width: 148px;
        }

        .blog-category-button.support {
          width: 164px;
        }

        /* ============================================================
           FEATURED POST — enlarged
           ============================================================ */

        .blog-featured-section {
          width: 100%;
          margin-top: 0;
          padding: 34px 0 40px;
          background: #ffffff;
          position: relative;
          z-index: 5;
        }

        .blog-featured-wrap {
          width: 1340px;
          margin: 0 auto;
        }

        .blog-wire-heading {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          color: #635557;
          font-size: 12px;
          line-height: 18px;
          font-weight: 400;
        }

        .blog-wire-heading strong {
          color: #242424;
          font-weight: 500;
        }

        .blog-wire-number {
          width: 24px;
          height: 24px;
          flex: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 7px;
          background: #0085ff;
          color: #ffffff;
          font-size: 10px;
          line-height: 1;
          font-weight: 600;
        }

        .blog-featured-slot {
          width: 100%;
          height: 68px;
          display: flex;
          align-items: center;
          padding: 0 26px;
          margin-bottom: 14px;
          border: 1px dashed #9cd0ff;
          border-radius: 13px;
          background: #ffffff;
          color: #635557;
          font-size: 13px;
          line-height: 19px;
          opacity: 1;
        }

        .blog-featured-card {
          width: 100%;
          height: 280px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          overflow: hidden;
          border: 1px solid #dce7f0;
          border-radius: 13px;
          background: #ffffff;
          opacity: 1;
        }

        .blog-featured-image {
          width: 100%;
          height: 100%;
          background: #ffffff;
          overflow: hidden;
        }

        .blog-featured-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .blog-featured-content {
          padding: 36px 34px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .blog-featured-tag {
          margin: 0 0 13px;
          color: #0085ff;
          font-size: 12px;
          line-height: 16px;
          font-weight: 600;
        }

        .blog-featured-line {
          width: 85%;
          height: 13px;
          margin-bottom: 12px;
          border-radius: 6px;
          background: #dce7f0;
        }

        .blog-featured-line.medium {
          width: 66%;
        }

        .blog-featured-line.short {
          width: 54%;
        }

        .blog-featured-caption {
          margin: 14px 0 0;
          text-align: center;
          color: #635557;
          font-size: 12px;
          line-height: 18px;
          font-style: italic;
        }

        /* ============================================================
           POSTS / EMPTY STATE — enlarged
           ============================================================ */

        .blog-post-section {
          width: 1340px;
          margin: 0 auto;
          padding-top: 46px;
          position: relative;
          z-index: 5;
          opacity: 1;
        }

        .blog-post-divider {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 32px;
          color: #635557;
          font-size: 12px;
          line-height: 18px;
          font-weight: 500;
          letter-spacing: 0.2px;
          text-transform: uppercase;
        }

        .blog-post-divider::after {
          content: "";
          height: 1px;
          flex: 1;
          background: #dce7f0;
        }

        .blog-empty-state {
          width: 100%;
          min-height: 320px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          opacity: 1;
        }

        .blog-empty-icon {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: rgba(235, 230, 224, 0.2);
          margin-bottom: 20px;
        }

        .blog-empty-title {
          margin: 0;
          color: #231014;
          font-size: 26px;
          line-height: 33px;
          font-weight: 600;
        }

        .blog-empty-description {
          width: 600px;
          max-width: 100%;
          margin: 11px 0 0;
          color: #635557;
          font-size: 14px;
          line-height: 21px;
        }

        .blog-empty-button {
          width: 176px;
          height: 50px;
          margin-top: 20px;
          border: 0;
          border-radius: 25px;
          background: #0085ff;
          color: #ffffff;
          font-size: 13px;
          line-height: 19px;
          font-weight: 500;
        }

        /* ============================================================
           GRID LAYOUT — enlarged
           ============================================================ */

        .blog-grid-section {
          width: 1340px;
          margin: 0 auto;
          padding: 14px 0 60px;
        }

        .blog-grid-divider {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 20px;
          color: #635557;
          font-size: 12px;
          line-height: 18px;
          font-weight: 500;
          text-transform: uppercase;
        }

        .blog-grid-divider::after {
          content: "";
          height: 1px;
          flex: 1;
          background: #dce7f0;
        }

        .blog-grid {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .blog-grid-card {
          width: 100%;
          height: 340px;
          overflow: hidden;
          border: 1px solid #dce7f0;
          border-radius: 13px;
          background: #ffffff;
          opacity: 1;
        }

        .blog-grid-image {
          width: 100%;
          height: 175px;
          background: #ffffff;
          overflow: hidden;
        }

        .blog-grid-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .blog-grid-content {
          padding: 20px;
        }

        .blog-grid-tag {
          margin: 0 0 12px;
          color: #0085ff;
          font-size: 11px;
          line-height: 16px;
          font-weight: 600;
          text-transform: uppercase;
        }

        .blog-grid-line {
          width: 88%;
          height: 10px;
          margin-bottom: 10px;
          border-radius: 5px;
          background: #dce7f0;
        }

        .blog-grid-line.medium {
          width: 72%;
        }

        .blog-grid-line.short {
          width: 42%;
        }

        .blog-grid-caption {
          margin: 16px 0 0;
          text-align: center;
          color: #635557;
          font-size: 11px;
          line-height: 16px;
          font-style: italic;
        }

        /* ============================================================
           NEWSLETTER STRIP — enlarged
           ============================================================ */

        .blog-newsletter {
          width: 100%;
          padding: 32px 0;
          background: #ffffff;
          border-top: 1px solid #dce7f0;
          border-bottom: 1px solid #dce7f0;
        }

        .blog-newsletter-inner {
          width: 1340px;
          min-height: 124px;
          margin: 0 auto;
          padding: 20px 28px;
          display: flex;
          align-items: center;
          gap: 20px;
          border: 1px solid #dce7f0;
          border-radius: 14px;
          background: #ffffff;
        }

        .blog-newsletter-icon {
          width: 64px;
          height: 64px;
          flex: none;
          border-radius: 12px;
          background: rgba(235, 230, 224, 0.2);
        }

        .blog-newsletter-copy {
          flex: 1;
          min-width: 0;
        }

        .blog-newsletter-title {
          margin: 0;
          color: #231014;
          font-size: 16px;
          line-height: 22px;
          font-weight: 600;
        }

        .blog-newsletter-text {
          margin: 4px 0 0;
          color: #635557;
          font-size: 13px;
          line-height: 19px;
        }

        .blog-newsletter-input {
          width: 220px;
          height: 50px;
          flex: none;
          padding: 0 18px;
          border: 1px solid #dce7f0;
          border-radius: 10px;
          outline: none;
          color: #231014;
          font-size: 13px;
          background: #ffffff;
        }

        .blog-newsletter-button {
          width: 110px;
          height: 50px;
          flex: none;
          border: 0;
          border-radius: 10px;
          background: #0085ff;
          color: #ffffff;
          font-size: 13px;
          line-height: 19px;
          font-weight: 500;
        }

        /* ============================================================
           SOFT CTA — enlarged
           ============================================================ */

        .blog-soft-cta {
          width: 100%;
          min-height: 380px;
          padding: 64px 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: #0085ff;
        }

        .blog-soft-cta-heading {
          margin-bottom: 24px;
        }

        .blog-soft-cta .blog-wire-heading {
          width: auto;
          margin-bottom: 22px;
          color: rgba(255,255,255,0.7);
        }

        .blog-soft-cta .blog-wire-heading strong {
          color: #ffffff;
        }

        .blog-soft-cta .blog-wire-number {
          background: #ffffff;
          color: #0085ff;
        }

        .blog-soft-cta-title {
          margin: 0;
          color: #ffffff;
          font-size: 38px;
          line-height: 45px;
          font-weight: 600;
          letter-spacing: -1.2px;
        }

        .blog-soft-cta-description {
          width: 660px;
          max-width: 100%;
          margin: 16px 0 0;
          color: rgba(255,255,255,0.78);
          font-size: 14px;
          line-height: 21px;
        }

        .blog-soft-cta-buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 28px;
        }

        .blog-soft-cta-button {
          height: 52px;
          padding: 0 26px;
          border-radius: 26px;
          font-size: 13px;
          line-height: 19px;
          font-weight: 500;
        }

        .blog-soft-cta-button.primary {
          min-width: 130px;
          border: 0;
          background: #ffffff;
          color: #0085ff;
        }

        .blog-soft-cta-button.secondary {
          min-width: 155px;
          border: 1px solid rgba(255,255,255,0.75);
          background: transparent;
          color: #ffffff;
        }

        /* ============================================================
           FOOTER — enlarged
           ============================================================ */

        .blog-site-footer {
          width: 100%;
          min-height: 230px;
          padding: 34px 30px 22px;
          background: #ffffff;
        }

        .blog-site-footer-inner {
          width: 1340px;
          margin: 0 auto;
        }

        .blog-footer-columns {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 48px;
        }

        .blog-footer-column-title {
          margin: 0 0 15px;
          color: #231014;
          font-size: 11px;
          line-height: 16px;
          font-weight: 600;
        }

        .blog-footer-line {
          width: 90px;
          height: 8px;
          margin-bottom: 9px;
          border-radius: 4px;
          background: #dce7f0;
        }

        .blog-footer-bottom {
          margin-top: 27px;
          padding-top: 15px;
          border-top: 1px solid #dce7f0;
          display: flex;
          justify-content: flex-start;
          gap: 22px;
          color: #635557;
          font-size: 11px;
          line-height: 15px;
        }

        /* ============================================================
           RESPONSIVE
           ============================================================ */

        @media (max-width: 1439px) {
          .blog-canvas {
            width: 100%;
            min-width: 0;
          }

          .blog-hero {
            width: 100%;
          }

          .blog-hero-content {
            width: 100%;
          }

          .blog-main,
          .blog-featured-wrap,
          .blog-post-section,
          .blog-grid-section,
          .blog-newsletter-inner,
          .blog-site-footer-inner {
            width: calc(100% - 56px);
            max-width: 1340px;
          }

          .blog-featured-section,
          .blog-newsletter,
          .blog-soft-cta,
          .blog-site-footer {
            width: 100%;
          }

          .blog-newsletter > .blog-wire-heading {
            width: calc(100% - 56px) !important;
            max-width: 1340px;
          }
        }

        @media (max-width: 1000px) {
          .blog-hero-title {
            width: 720px;
            font-size: 43px;
            line-height: 48px;
          }

          .blog-category-row {
            overflow-x: auto;
            justify-content: flex-start;
            padding-bottom: 4px;
          }

          .blog-featured-card {
            height: auto;
            min-height: 380px;
            grid-template-columns: 1fr 1fr;
          }

          .blog-featured-image {
            min-height: 380px;
          }

          .blog-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .blog-newsletter-inner {
            flex-wrap: wrap;
          }

          .blog-newsletter-copy {
            min-width: 240px;
          }

          .blog-newsletter-input {
            flex: 1;
            min-width: 180px;
          }
        }

        @media (max-width: 700px) {
          .blog-navbar {
            top: 12px;
            left: 0;
            width: 100%;
            padding: 0 8px;
            display: flex;
            justify-content: center;
            transform: none;
          }

          .blog-navbar > * {
            width: 100%;
            max-width: 100%;
          }

          .blog-hero {
            height: 390px;
          }

          .blog-hero-content {
            top: 130px;
            padding: 0 20px;
          }

          .blog-hero-title {
            width: 100%;
            max-width: 600px;
            font-size: 34px;
            line-height: 39px;
            letter-spacing: -1.8px;
          }

          .blog-hero-description {
            width: 100%;
            font-size: 12px;
            line-height: 18px;
          }

          .blog-hero-description-line {
            display: inline;
          }

          .blog-main,
          .blog-featured-wrap,
          .blog-post-section,
          .blog-grid-section,
          .blog-newsletter-inner,
          .blog-site-footer-inner {
            width: calc(100% - 32px);
          }

          .blog-category-row {
            margin-top: 30px;
            margin-bottom: 26px;
          }

          .blog-featured-section {
            padding: 26px 0 30px;
          }

          .blog-featured-card {
            grid-template-columns: 1fr;
            min-height: 0;
          }

          .blog-featured-image {
            height: 260px;
            min-height: 260px;
          }

          .blog-featured-content {
            min-height: 220px;
          }

          .blog-post-section {
            padding-top: 34px;
          }

          .blog-empty-state {
            min-height: 340px;
          }

          .blog-empty-description {
            width: 100%;
          }

          .blog-grid-section {
            padding-bottom: 40px;
          }

          .blog-grid {
            grid-template-columns: 1fr;
          }

          .blog-grid-card {
            height: 300px;
          }

          .blog-newsletter {
            padding: 22px 0;
          }

          .blog-newsletter > .blog-wire-heading {
            width: calc(100% - 32px) !important;
          }

          .blog-newsletter-inner {
            padding: 18px;
            display: grid;
            grid-template-columns: 60px 1fr;
            gap: 14px;
          }

          .blog-newsletter-input {
            width: 100%;
            grid-column: 1 / 3;
          }

          .blog-newsletter-button {
            width: 100%;
            grid-column: 1 / 3;
          }

          .blog-soft-cta {
            min-height: 400px;
            padding: 50px 22px;
          }

          .blog-soft-cta-title {
            font-size: 32px;
            line-height: 38px;
          }

          .blog-soft-cta-buttons {
            flex-direction: column;
            width: 100%;
          }

          .blog-soft-cta-button.primary,
          .blog-soft-cta-button.secondary {
            width: 190px;
          }

          .blog-site-footer {
            padding: 34px 18px 22px;
          }

          .blog-footer-columns {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px 24px;
          }

          .blog-footer-bottom {
            flex-wrap: wrap;
            gap: 12px 18px;
          }
        }
      `}</style>

      <div className="blog-page">
        <div className="blog-canvas">

          {/* ==========================================================
              HERO BACKGROUND
              ========================================================== */}

          <div className="blog-hero-background" />
          <div className="blog-hero-grid" />

          {/* ==========================================================
              HERO
              ========================================================== */}

          <section className="blog-hero">

            {/* ========================================================
                NAVBAR
                Same placement/scaling as Code 2
                ======================================================== */}

            <div className="blog-navbar">
              <Navbar />
            </div>
            <div className="blog-hero-content">

              <div className="blog-hero-label">
                <span className="blog-hero-label-dot" />

                <span className="blog-hero-label-text">
                  DataCircles Blog
                </span>
              </div>

              <h1 className="blog-hero-title">
                Practical advice for
                <br />
                winning customers and getting paid.
              </h1>

              <p className="blog-hero-description">
                <span className="blog-hero-description-line">
                  Straightforward guides on sales, follow-ups, GST and getting paid on
                </span>

                <span className="blog-hero-description-line">
                  time, written for the people actually running Indian businesses.
                </span>
              </p>

            </div>
          </section>

          {/* ==========================================================
              MAIN CONTENT
              ========================================================== */}

          <main className="blog-main">

            {/* ========================================================
                CATEGORY TABS
                ======================================================== */}

            <nav className="blog-category-row">

              <button
                type="button"
                className="blog-category-button crm active"
                onClick={() => navigate("/blogs")}
              >
                CRM Resources
              </button>

              <button
                type="button"
                className="blog-category-button invoicing"
                onClick={() => navigate("/invoicing-billing")}
              >
                Invoicing Resources
              </button>

              <button
                type="button"
                className="blog-category-button videos"
                onClick={() => navigate("/how-to-guide")}
              >
                Videos
              </button>

              <button
                type="button"
                className="blog-category-button testimonials"
                onClick={() => navigate("/customer-stories")}
              >
                Testimonials
              </button>

              <button
                type="button"
                className="blog-category-button support"
                onClick={() => navigate("/freetools")}
              >
                Support Guide
              </button>

            </nav>

            {/* ========================================================
                FEATURED POST SLOT
                ======================================================== */}

            <section className="blog-featured-section">
              <div className="blog-featured-wrap">

                <div className="blog-wire-heading">
                 
                </div>

               

                <div className="blog-featured-card">
                  <div className="blog-featured-image">
                    {BLOG_IMAGE_1 && (
                      <img src={BLOG_IMAGE_1} alt="" />
                    )}
                  </div>

                  <div className="blog-featured-content">
                    <p className="blog-featured-tag">GETTING PAID</p>
                    <div className="blog-featured-line" />
                    <div className="blog-featured-line medium" />
                    <div className="blog-featured-line" />
                    <div className="blog-featured-line short" />
                  </div>
                </div>

              </div>
            </section>

            {/* ========================================================
                POST GRID + EMPTY STATE
                ======================================================== */}

            <section className="blog-post-section">

              

              <div className="blog-empty-state">
                <div className="blog-empty-icon" />

                <h2 className="blog-empty-title">
                  Good things are on the way.
                </h2>

                <p className="blog-empty-description">
                  We're a small team, and we'd rather publish something genuinely
                  useful than fill this page for the sake of it. Our first guides
                  on winning customers and getting paid are coming soon. In the
                  meantime, our free tools are ready for you today.
                </p>

                <button type="button" className="blog-empty-button">
                  Try our free tools
                </button>
              </div>

            </section>

            <section className="blog-grid-section">


              <div className="blog-grid">
                {[0, 1, 2, 3, 4, 5].map((item, index) => {
                  const image = [BLOG_IMAGE_1, BLOG_IMAGE_2, BLOG_IMAGE_3][index % 3];

                  return (
                    <article className="blog-grid-card" key={item}>

                      <div className="blog-grid-image">
                        {image && (
                          <img src={image} alt="" />
                        )}
                      </div>

                      <div className="blog-grid-content">
                        <p className="blog-grid-tag">
                          {index % 3 === 0
                            ? "WINNING CUSTOMERS"
                            : index % 3 === 1
                              ? "GETTING PAID"
                              : "GST & INVOICING"}
                        </p>

                        <div className="blog-grid-line" />
                        <div className="blog-grid-line medium" />
                        <div className="blog-grid-line short" />
                      </div>

                    </article>
                  );
                })}
              </div>


            </section>

            {/* ========================================================
                NEWSLETTER
                ======================================================== */}

            <section className="blog-newsletter">

             

              <div className="blog-newsletter-inner">

                <div className="blog-newsletter-icon" />

                <div className="blog-newsletter-copy">
                  <h2 className="blog-newsletter-title">
                    We'll tell you when there's something worth reading.
                  </h2>
                  <p className="blog-newsletter-text">
                    New guides, now and then. No spam, just useful.
                  </p>
                </div>

                <input
                  className="blog-newsletter-input"
                  type="email"
                  placeholder="you@business.in"
                  aria-label="Email address"
                />

                <button type="button" className="blog-newsletter-button">
                  Notify me
                </button>

              </div>
            </section>

          
           
          </main>
 
        <section
  className="
    relative
    left-1/2
    w-screen
    -translate-x-1/2
    flex
    h-auto
    flex-col
    items-center
    justify-center
    gap-[28px]
    sm:gap-[34px]
    md:gap-[42px]
    overflow-hidden
    bg-gradient-to-r
    from-[#0a55af]
    to-[#0085ff]
    px-6
    sm:px-12
    md:px-24
    lg:px-[160px]
    xl:px-[320px]
    py-[48px]
    sm:py-[64px]
    md:py-[80px]
  "
>
      {/* CONTENT */}
      <div className="flex flex-col items-center gap-[14px] sm:gap-[18px] text-center text-white">
        <h2
          className="
            m-0
            whitespace-normal
            sm:whitespace-nowrap
            text-[28px]
            sm:text-[34px]
            md:text-[42px]
            font-medium
            leading-[1.1]
            text-white
          "
        >
         When you're ready for more, it's all in one place.
         </h2>

        <p
          className="
            m-0
            w-full
            max-w-[662px]
            text-center
            text-[15px]
            sm:text-[16px]
            md:text-[18px]
            font-normal
            leading-[1.4]
            text-white
          "
        >
          DataCircles keeps every invoice, quote, lead and payment together, so nothing slips. Plans start at ₹199 a month, and there's a discount waiting when you sign up.
        </p>
      </div>

      {/* BUTTONS */}
      <div className="flex flex-col sm:flex-row items-center gap-[10px] sm:gap-[8px] w-full sm:w-auto px-4 sm:px-0">

        {/* Create Account */}
        <button
          type="button"
          className="
            flex
            h-[42px]
            w-full
            sm:w-[142px]
            items-center
            justify-center
            overflow-hidden
            rounded-full
            border
            border-white
            bg-transparent
            px-[12px]
            text-center
            text-[14px]
            font-medium
            leading-[1.2]
            text-white
            transition-all
            duration-200
            hover:bg-white
            hover:text-[#014c6c]
          "
        >
          Start Free
        </button>

        {/* Book a Demo */}
        <button
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
            border-white
            bg-transparent
            px-[12px]
            text-center
            text-[14px]
            font-medium
            leading-[1.2]
            text-white
            transition-all
            duration-200
            hover:bg-white
            hover:text-[#014c6c]
          "
        >
          See Pricing
        </button>

      </div>
    </section>

        </div>

      </div>
    </>
  );
}