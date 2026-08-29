import Navbar from "../components/navbar";

export default function Blog() {
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
          min-height: 2543px;
          background: #ffffff;
          overflow-x: hidden;
          position: relative;
        }

        .blog-canvas {
          width: 1440px;
          min-height: 2543px;
          margin: 0 auto;
          position: relative;
          background: #ffffff;
        }

        /* ============================================================
           HERO BACKGROUND
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

          opacity: 0.5;
          pointer-events: none;
        }

        /* ============================================================
           HERO GRID
           ============================================================ */

        .blog-hero-grid {
          position: absolute;
          top: 313px;
          left: 50%;
          transform: translateX(-50%);

          width: 1340px;
          height: 1078px;

          pointer-events: none;
          opacity: 0.25;

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
           HERO
           ============================================================ */

        .blog-hero {
          position: relative;
          width: 1440px;
          height: 313px;
          z-index: 2;
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
           HERO LABEL
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
           HERO TITLE
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
           HERO DESCRIPTION
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
           CONTENT AREA
           ============================================================ */

        .blog-main {
          position: relative;

          width: 1216px;

          margin-left: auto;
          margin-right: auto;

          z-index: 5;
        }

        /* ============================================================
           CATEGORY TABS
           ============================================================ */

        .blog-category-row {
          width: 100%;
          height: 40px;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 12px;

          margin-top: 98px;
          margin-bottom: 32px;
        }

        .blog-category-button {
          height: 40px;

          padding: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 20px;

          border: 0.6px solid #dce7f0;

          background: #ffffff;

          color: #242424;

          font-size: 11px;
          line-height: 17px;

          font-weight: 400;

          box-shadow: 0 2px 3px rgba(0, 0, 0, 0.04);
        }

        .blog-category-button.active {
          background: #0085ff;
          border-color: #0085ff;
          color: #ffffff;
        }

        .blog-category-button.crm {
          width: 144px;
        }

        .blog-category-button.invoicing {
          width: 168px;
        }

        .blog-category-button.videos {
          width: 88px;
        }

        .blog-category-button.testimonials {
          width: 122px;
        }

        .blog-category-button.support {
          width: 135px;
        }

        /* ============================================================
           SEARCH + FILTERS
           ============================================================ */

        .blog-toolbar {
          width: 1216px;
          height: 42px;

          display: flex;
          align-items: center;

          gap: 12px;

          margin-bottom: 32px;
        }

        .blog-search {
          width: 917px;
          height: 41px;

          display: flex;
          align-items: center;

          border-radius: 20.5px;

          border: 1px solid #e0e0e1;

          background: #ffffff;

          padding: 0 16px;
        }

        .blog-search-icon {
          width: 16px;
          height: 16px;

          position: relative;

          flex: none;

          margin-right: 7px;
        }

        .blog-search-icon::before {
          content: "";

          position: absolute;

          width: 9px;
          height: 9px;

          left: 1px;
          top: 1px;

          border: 1.5px solid #48494c;

          border-radius: 50%;
        }

        .blog-search-icon::after {
          content: "";

          position: absolute;

          width: 6px;
          height: 1.5px;

          left: 9px;
          top: 11px;

          background: #48494c;

          transform: rotate(45deg);

          transform-origin: left center;
        }

        .blog-search-input {
          flex: 1;

          width: 100%;

          border: 0;
          outline: none;

          background: transparent;

          color: #242424;

          font-size: 11px;
          line-height: 17px;

          font-weight: 400;
        }

        .blog-search-input::placeholder {
          color: #777777;
        }

        .blog-filter {
          height: 42px;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 6px;

          border-radius: 21px;

          border: 1px solid #e5e5ec;

          background: #ffffff;

          color: #48494c;

          font-size: 10px;
          line-height: 15px;

          font-weight: 400;
        }

        .blog-filter.category {
          width: 120px;
        }

        .blog-filter.sort {
          width: 118px;
        }

        .blog-filter-icon {
          font-size: 10px;
          line-height: 1;
        }

        /* ============================================================
           ARTICLE LIST
           ============================================================ */

        .blog-list {
          width: 1216px;

          display: flex;
          flex-direction: column;

          gap: 32px;
        }

        /* ============================================================
           ARTICLE CARD
           ============================================================ */

        .blog-card {
          width: 1216px;
          height: 373.59px;

          padding: 14px;

          display: flex;
          flex-direction: row;

          align-items: stretch;

          gap: 32px;

          border-radius: 5px;

          background: #f3f9fc;

          overflow: hidden;
        }

        /* ============================================================
           ARTICLE IMAGE
           ============================================================ */

        .blog-card-image {
          width: 447.02px;
          height: 345.59px;

          flex: none;

          border-radius: 4px;

          overflow: hidden;

          background: #000000;

          position: relative;
        }

        .blog-card-image img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
        }

        /* ============================================================
           ARTICLE CONTENT
           ============================================================ */

        .blog-card-content {
          width: 652.61px;
          height: 345.59px;

          flex: none;

          display: flex;
          flex-direction: column;

          padding-top: 12px;
          padding-right: 0;
        }

        /* ============================================================
           TAGS
           ============================================================ */

        .blog-card-tags {
          height: 17px;

          display: flex;
          align-items: center;

          color: #635557;

          font-size: 10px;
          line-height: 17px;

          font-weight: 400;

          margin-bottom: 8px;
        }

        /* ============================================================
           ARTICLE TITLE
           ============================================================ */

        .blog-card-title {
          width: 100%;

          margin: 0 0 8px;
          padding: 0;

          color: #242424;

          font-size: 28.1px;
          line-height: 36.86px;

          font-weight: 500;

          letter-spacing: -2px;
        }

        /* ============================================================
           ARTICLE DESCRIPTION
           ============================================================ */

        .blog-card-description {
          width: 100%;
          max-width: 631.81px;

          margin: 0;

          color: #635557;

          font-size: 13.2px;
          line-height: 19.6px;

          font-weight: 400;
        }

        /* ============================================================
           ARTICLE BUTTON AREA
           ============================================================ */

        .blog-card-actions {
          width: 100%;

          display: flex;

          align-items: center;
          justify-content: space-between;

          margin-top: auto;

          padding-bottom: 8px;
        }

        .blog-card-cta {
          width: 346.5px;
          height: 48px;

          border: 0;

          border-radius: 24px;

          background: #ffffff;

          color: #0085ff;

          font-size: 11px;
          line-height: 17px;

          font-weight: 500;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .blog-card-read {
          width: 120px;

          color: #0085ff;

          background: transparent;

          border: 0;

          font-size: 11px;
          line-height: 17px;

          font-weight: 500;

          text-align: right;
        }

        /* ============================================================
           GOOD THINGS BANNER
           ============================================================ */

        .blog-good-things {
          width: 1216px;
          height: 220px;

          margin-top: 85px;

          border-radius: 12px;

          background: #f3f9fc;

          position: relative;

          display: flex;
          align-items: center;

          padding: 38px;
        }

        /* ============================================================
           GOOD THINGS IMAGE
           ============================================================ */

        .blog-good-things-image {
          width: 120px;
          height: 120px;

          flex: none;

          border-radius: 8px;

          overflow: hidden;

          background: transparent;
        }

        .blog-good-things-image img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
        }

        /* ============================================================
           GOOD THINGS CONTENT
           ============================================================ */

        .blog-good-things-content {
          width: 650px;

          margin-left: 32px;

          display: flex;
          flex-direction: column;
        }

        .blog-good-things-title {
          margin: 0 0 12px;

          color: #242424;

          font-size: 20px;
          line-height: 26px;

          font-weight: 500;
        }

        .blog-good-things-text {
          width: 620px;

          margin: 0;

          color: #707173;

          font-size: 12px;
          line-height: 18px;

          font-weight: 400;
        }

        /* ============================================================
           GOOD THINGS BUTTON
           ============================================================ */

        .blog-good-things-button {
          width: 190px;
          height: 48px;

          position: absolute;

          right: 38px;
          top: 86px;

          border: 0;

          border-radius: 24px;

          background: #ffffff;

          color: #0085ff;

          font-size: 11px;
          line-height: 17px;

          font-weight: 500;
        }

        /* ============================================================
           BLUE CTA FOOTER
           ============================================================ */

        .blog-footer {
          position: absolute;

          left: 0;
          top: 2139px;

          width: 1440px;
          height: 404px;

          background: linear-gradient(
            90deg,
            #0a55af 0%,
            #0085ff 100%
          );

          display: flex;
          flex-direction: column;

          align-items: center;
          justify-content: center;

          text-align: center;
        }

        /* ============================================================
           FOOTER TITLE
           ============================================================ */

        .blog-footer-title {
          margin: 0;

          color: #ffffff;

          font-size: 42px;
          line-height: 46px;

          font-weight: 500;

          letter-spacing: -2px;
        }

        /* ============================================================
           FOOTER DESCRIPTION
           ============================================================ */

        .blog-footer-description {
          width: 662px;

          margin: 18px 0 0;

          color: #ffffff;

          font-size: 13px;
          line-height: 20px;

          font-weight: 400;
        }

        /* ============================================================
           FOOTER BUTTONS
           ============================================================ */

        .blog-footer-buttons {
          display: flex;

          align-items: center;
          justify-content: center;

          gap: 8px;

          margin-top: 28px;
        }

        .blog-footer-button {
          height: 42px;

          padding: 0 20px;

          border-radius: 21px;

          font-size: 11px;
          line-height: 17px;

          font-weight: 500;
        }

        .blog-footer-button.primary {
          width: 142px;

          border: 0;

          background: #ffffff;

          color: #014c6c;
        }

        .blog-footer-button.secondary {
          width: 135px;

          border: 1px solid #ffffff;

          background: transparent;

          color: #ffffff;
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

          .blog-main {
            width: calc(100% - 48px);
          }

          .blog-category-row {
            width: 100%;
          }

          .blog-toolbar {
            width: 100%;
          }

          .blog-list {
            width: 100%;
          }

          .blog-card {
            width: 100%;
          }

          .blog-good-things {
            width: 100%;
          }

          .blog-footer {
            width: 100%;
          }
        }

        /* ============================================================
           TABLET
           ============================================================ */

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

          .blog-toolbar {
            flex-wrap: wrap;

            height: auto;
          }

          .blog-search {
            flex: 1;
            min-width: 300px;
          }

          .blog-card {
            height: auto;
            min-height: 373.59px;
          }

          .blog-card-image {
            width: 40%;
          }

          .blog-card-content {
            width: auto;
            flex: 1;
          }

          .blog-card-title {
            font-size: 24px;
            line-height: 31px;
          }

          .blog-card-description {
            font-size: 12px;
            line-height: 18px;
          }

          .blog-good-things-content {
            width: auto;
            flex: 1;
          }

          .blog-good-things-text {
            width: 100%;
          }
        }

        /* ============================================================
           MOBILE
           ============================================================ */

        @media (max-width: 700px) {
          .blog-page {
            min-height: 100vh;
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

          .blog-main {
            width: calc(100% - 32px);
          }

          .blog-category-row {
            margin-top: 30px;
            margin-bottom: 20px;
          }

          .blog-toolbar {
            display: grid;

            grid-template-columns: 1fr 100px;

            gap: 8px;
          }

          .blog-search {
            width: 100%;

            grid-column: 1 / 3;
          }

          .blog-filter.category,
          .blog-filter.sort {
            width: 100%;
          }

          .blog-card {
            flex-direction: column;

            height: auto;

            min-height: 0;

            padding: 10px;

            gap: 16px;
          }

          .blog-card-image {
            width: 100%;
            height: 250px;
          }

          .blog-card-content {
            width: 100%;
            height: auto;
            min-height: 280px;

            padding: 5px 8px 8px;
          }

          .blog-card-title {
            font-size: 23px;
            line-height: 29px;
            letter-spacing: -1px;
          }

          .blog-card-description {
            font-size: 12px;
            line-height: 18px;
          }

          .blog-card-actions {
            margin-top: 30px;
          }

          .blog-card-cta {
            width: 65%;
            height: 42px;
          }

          .blog-good-things {
            height: auto;
            min-height: 180px;

            margin-top: 40px;

            padding: 20px;
          }

          .blog-good-things-image {
            width: 75px;
            height: 75px;
          }

          .blog-good-things-content {
            margin-left: 16px;
          }

          .blog-good-things-title {
            font-size: 16px;
            line-height: 21px;
          }

          .blog-good-things-text {
            font-size: 10px;
            line-height: 15px;
          }

          .blog-good-things-button {
            display: none;
          }

          .blog-footer {
            position: relative;

            top: auto;
            left: auto;

            width: 100%;
            height: 330px;

            margin-top: 50px;

            padding: 40px 20px;
          }

          .blog-footer-title {
            font-size: 30px;
            line-height: 34px;
          }

          .blog-footer-description {
            width: 100%;

            font-size: 12px;
            line-height: 18px;
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
              >
                CRM Resources
              </button>

              <button
                type="button"
                className="blog-category-button invoicing"
              >
                Invoicing Resources
              </button>

              <button
                type="button"
                className="blog-category-button videos"
              >
                Videos
              </button>

              <button
                type="button"
                className="blog-category-button testimonials"
              >
                Testimonials
              </button>

              <button
                type="button"
                className="blog-category-button support"
              >
                Support Guide
              </button>

            </nav>

            {/* ========================================================
                SEARCH / FILTER
                ======================================================== */}

            <div className="blog-toolbar">

              <label className="blog-search">

                <span className="blog-search-icon" />

                <input
                  className="blog-search-input"
                  type="text"
                  placeholder="Lorem ipsum dolor self amet consectetur"
                  aria-label="Search blog"
                />

              </label>

              <button
                type="button"
                className="blog-filter category"
              >
                <span className="blog-filter-icon">
                  ◉
                </span>

                Category
              </button>

              <button
                type="button"
                className="blog-filter sort"
              >
                <span className="blog-filter-icon">
                  ⇅
                </span>

                Sort by
              </button>

            </div>

            {/* ========================================================
                BLOG POSTS
                ======================================================== */}

            <section className="blog-list">

              {posts.map((post, index) => (
                <article
                  className="blog-card"
                  key={index}
                >

                  {/* ==================================================
                      IMAGE
                      ================================================== */}

                  <div className="blog-card-image">

                    {post.image && (
                      <img
                        src={post.image}
                        alt=""
                      />
                    )}

                  </div>

                  {/* ==================================================
                      CONTENT
                      ================================================== */}

                  <div className="blog-card-content">

                    <div className="blog-card-tags">
                      Tag 1 · Tag 2 · Tag 3
                    </div>

                    <h2 className="blog-card-title">
                      Lorem ipsum dolor self amet
                    </h2>

                    <p className="blog-card-description">
                      Straightforward guides on sales, follow-ups, GST and getting
                      paid on time, written for the people actually running Indian
                      businesses.
                    </p>

                    <div className="blog-card-actions">

                      <button
                        type="button"
                        className="blog-card-cta"
                      >
                        CTA 1
                      </button>

                      <button
                        type="button"
                        className="blog-card-read"
                      >
                        CTA 2 →
                      </button>

                    </div>

                  </div>

                </article>
              ))}

            </section>

            {/* ========================================================
                GOOD THINGS ARE ON THE WAY
                IMAGE 4
                ======================================================== */}

            <section className="blog-good-things">

              <div className="blog-good-things-image">

                {GOOD_THINGS_IMAGE && (
                  <img
                    src={GOOD_THINGS_IMAGE}
                    alt=""
                  />
                )}

              </div>

              <div className="blog-good-things-content">

                <h2 className="blog-good-things-title">
                  Good things are on the way!
                </h2>

                <p className="blog-good-things-text">
                  We're a small team, and we'd rather publish something genuinely
                  useful than fill this page for the sake of it. Our first guides
                  are coming soon. In the meantime, our free tools are ready for
                  you today.
                </p>

              </div>

              <button
                type="button"
                className="blog-good-things-button"
              >
                Try our Free Tools
              </button>

            </section>

          </main>

          {/* ==========================================================
              BLUE CTA FOOTER
              ========================================================== */}

          <section className="blog-footer">

            <h2 className="blog-footer-title">
              Let's Connect
              <br />
              More than just works
            </h2>

            <p className="blog-footer-description">
              Start free for 7 days at full limits. No credit card needed,
              and our team will help you bring your data across.
            </p>

            <div className="blog-footer-buttons">

              <button
                type="button"
                className="blog-footer-button primary"
              >
                Create Account
              </button>

              <button
                type="button"
                className="blog-footer-button secondary"
              >
                Book a Demo
              </button>

            </div>

          </section>

        </div>
      </div>
    </>
  );
}