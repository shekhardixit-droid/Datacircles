import React from "react";

const footerSections = [
  {
    title: "Product",
    links: [
      { label: "CRM", route: "/product-crm" },
      { label: "Lead capture", route: "" },
      { label: "Follow-ups & tasks", route: "" },
      { label: "Invoicing & billing", route: "/invoicing-billing" },
      { label: "Payments", route: "/payment1" },
      { label: "Integrations", route: "" },
      { label: "Platform overview", route: "/platform-overview" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Retailers & shops", route: "/solutions" },
      { label: "Agencies & services",  route: "" },
      { label: "Consultants & freelancers", route: "" },
      { label: "Distributors & wholesale", route: "" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", route: "/blogs" },
      { label: "Guides & learn", route: "/how-to-guide" },
      { label: "Help centre", route: "/freetools" },
      { label: "Free tools", route: "/freetools" },
      { label: "Customer stories", route: "/customer-stories" },
      { label: "Comparisons", route: "/comparison" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", route: "/about" },
      { label: "Security & Compliance", route: "/security&compliance" },
      { label: "Careers", route: "/careers" },
      { label: "Contact us", route: "/contact" },
      { label: "Referral", route: "/referral" },
    ],
  },
  {
    title: "Legal",
    links: [
      "Terms & Conditions",
      "Privacy Policy",
      "Refund & Cancellation",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="dc-footer">
      <div className="dc-footer-inner">

        {/* =========================
            TOP FOOTER
        ========================= */}

        <div className="dc-footer-grid">

          {/* BRAND / CONTACT */}
          <div className="dc-footer-brand">

            {/* Logo */}
            <div className="dc-footer-logo">
              <span>DataCircles</span>
              <span className="dc-logo-mark">✦</span>
            </div>

            {/* Description */}
            <p className="dc-footer-description">
             OFFICE

Regd. Office No. 721, 7th Floor,
Centura Square IT Park, Road No. 27,
Wagle Estate, Thane 400604,
Maharashtra.
            </p>

            {/* Phone */}
            <p className="dc-footer-phone">
              +91 98922 97764
            </p>

            {/* Social */}
            <div className="dc-footer-socials">

              <a
                href="#"
                aria-label="Facebook"
                className="dc-social facebook"
              >
                f
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="dc-social instagram"
              >
                <span className="instagram-camera">
                  <span className="instagram-lens" />
                  <span className="instagram-dot" />
                </span>
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="dc-social linkedin"
              >
                in
              </a>

            </div>
          </div>

          {/* FOOTER COLUMNS */}
          {footerSections.map((section) => (
            <div
              className="dc-footer-column"
              key={section.title}
            >
              <h3>{section.title}</h3>

              <div className="dc-footer-links">
                {section.links.map((link, index) => {
                  const isRouteLink =
                    typeof link === "object" &&
                    (section.title === "Product" ||
                      section.title === "Solutions" ||
                      section.title === "Resources" ||
                      section.title === "Company");

                  return (
                    <a
                      href={isRouteLink ? link.route : "#"}
                      key={`${section.title}-${index}`}
                    >
                      {isRouteLink ? (
                        <>
                          <span>{link.label}</span>
                          {link.sub && (
                            <span
                              style={{
                                fontSize: "inherit",
                                fontWeight: 400,
                                color: "#727687",
                                marginLeft: 4,
                              }}
                            >
                              {link.sub}
                            </span>
                          )}
                        </>
                      ) : (
                        link
                      )}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}

        </div>

        {/* =========================
            DIVIDER
        ========================= */}

        <div className="dc-footer-divider" />

        {/* =========================
            COPYRIGHT
        ========================= */}

        <div className="dc-footer-copyright">
          © 2026 DATACIRCLES. All rights reserved. Made in India
        </div>

        {/* =========================
            LARGE BRAND NAME
        ========================= */}

        <div className="dc-footer-wordmark">

          <span className="dc-wordmark-text">
            DataCircles
          </span>

          <span className="dc-wordmark-registered">
            R
          </span>

        </div>

      </div>

      {/* =========================
          FOOTER CSS
      ========================= */}

      <style>{`

        /* ========================================
           FOOTER
        ======================================== */

        .dc-footer {
          width: 100%;
          background: #000;
          color: #fff;
          overflow: hidden;
          position: relative;
        }

        .dc-footer-inner {
          width: 100%;
          max-width: 1440px;
          min-height: 830px;

          margin: 0 auto;

          position: relative;

          padding:
            100px
            24px
            0;

          font-family:
            Inter,
            Arial,
            sans-serif;
        }


        /* ========================================
           GRID
        ======================================== */

        .dc-footer-grid {
          display: grid;

          grid-template-columns:
            minmax(330px, 2fr)
            repeat(5, minmax(120px, 1fr));

          column-gap: 42px;

          align-items: start;
        }


        /* ========================================
           BRAND
        ======================================== */

        .dc-footer-brand {
          min-width: 0;

          padding-right: 40px;
        }


        /* LOGO */

        .dc-footer-logo {
          display: flex;

          align-items: center;

          width: fit-content;

          margin-bottom: 48px;

          color:
            rgba(255,255,255,0.06);

          font-size: 27px;

          font-weight: 700;

          line-height: 1;

          letter-spacing: -1.5px;
        }

        .dc-logo-mark {
          margin-left: 5px;

          font-size: 13px;

          opacity: 0.8;
        }


        /* DESCRIPTION */

        .dc-footer-description {
          max-width: 395px;

          margin: 0;

          color: #f1f1f1;

          font-size: 16px;

          font-weight: 400;

          line-height: 1.45;
        }


        /* PHONE */

        .dc-footer-phone {
          margin:
            27px
            0
            0;

          color: #f1f1f1;

          font-size: 16px;

          line-height: 1.4;
        }


        /* ========================================
           SOCIAL
        ======================================== */

        .dc-footer-socials {
          display: flex;

          align-items: center;

          gap: 22px;

          margin-top: 28px;
        }

        .dc-footer-socials a {
          color: #fff;

          text-decoration: none;

          transition:
            color 0.2s ease;
        }

        .dc-footer-socials a:hover {
          color: #0085ff;
        }


        /* FACEBOOK */

        .dc-social.facebook {
          width: 20px;
          height: 20px;

          border:
            2px solid currentColor;

          border-radius: 50%;

          display: flex;

          align-items: center;

          justify-content: center;

          font-family: Arial, sans-serif;

          font-size: 13px;

          font-weight: 700;

          line-height: 1;
        }


        /* INSTAGRAM */

        .dc-social.instagram {
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .dc-social.instagram:hover {
          color: #0085ff;
        }

        .instagram-camera {
          width: 18px;
          height: 18px;
          border: 2px solid currentColor;
          border-radius: 5px;
          position: relative;
          box-sizing: border-box;
        }

        .instagram-lens {
          position: absolute;
          width: 7px;
          height: 7px;
          border: 2px solid currentColor;
          border-radius: 50%;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          box-sizing: border-box;
        }

        .instagram-dot {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: currentColor;
          top: 2px;
          right: 2px;
        }


        /* LINKEDIN */

        .dc-social.linkedin {
          width: 20px;
          height: 20px;

          display: flex;

          align-items: center;

          justify-content: center;

          border:
            1.5px solid currentColor;

          border-radius: 1px;

          font-family: Arial, sans-serif;

          font-size: 11px;

          font-weight: 700;

          line-height: 1;
        }


        /* ========================================
           FOOTER COLUMNS
        ======================================== */

        .dc-footer-column {
          min-width: 0;
        }

        .dc-footer-column h3 {
          margin:
            0
            0
            25px;

          color: #fff;

          font-size: 18px;

          font-weight: 500;

          line-height: 1.2;
        }


        /* LINKS */

        .dc-footer-links {
          display: flex;

          flex-direction: column;

          gap: 14px;
        }

        .dc-footer-links a {
          color: #727687;

          text-decoration: none;

          font-size: 16px;

          font-weight: 400;

          line-height: 1.25;

          transition:
            color 0.2s ease;
        }

        .dc-footer-links a:hover {
          color: #0085ff;
        }


        /* ========================================
           DIVIDER
        ======================================== */

        .dc-footer-divider {
          width:
            calc(100% - 540px);

          margin-left: 276px;

          margin-top: 87px;

          border-top:
            1px solid
            rgba(255,255,255,0.13);
        }


        /* ========================================
           COPYRIGHT
        ======================================== */

        .dc-footer-copyright {
          width:
            calc(100% - 540px);

          margin-left: 276px;

          margin-top: 36px;

          text-align: center;

          color: #5d6271;

          font-size: 16px;

          font-weight: 400;

          line-height: 1.4;
        }


        /* ========================================
           LARGE DATACIRCLES
        ======================================== */

        .dc-footer-wordmark {
          position: absolute;

          left: 50%;
          right: auto;

          bottom: -24px;

          width: max-content;

          height: 285px;

          display: flex;

          align-items: flex-start;

          pointer-events: none;

          user-select: none;

          white-space: nowrap;

          transform: translateX(-50%);
        }


        .dc-wordmark-text {
          font-size:
            clamp(
              165px,
              15.8vw,
              240px
            );

          font-weight: 700;

          line-height: 0.88;

          letter-spacing: -10px;

          background:
            linear-gradient(
              to bottom,
              #aaa 0%,
              #777 47%,
              #151515 100%
            );

          -webkit-background-clip: text;
          background-clip: text;

          color: transparent;
        }


        /* ========================================
           REGISTERED CIRCLE
        ======================================== */

        .dc-wordmark-registered {
          width:
            clamp(
              125px,
              8.8vw,
              145px
            );

          height:
            clamp(
              125px,
              8.8vw,
              145px
            );

          margin-left: 8px;

          margin-top: 6px;

          border:
            clamp(
              7px,
              0.6vw,
              10px
            )
            solid
            #858585;

          border-radius: 50%;

          display: flex;

          align-items: center;

          justify-content: center;

          color: #858585;

          font-family: Arial, sans-serif;

          font-size:
            clamp(
              55px,
              4.8vw,
              75px
            );

          font-weight: 700;

          line-height: 1;
        }


        /* ========================================
           TABLET
        ======================================== */

        @media (max-width: 1050px) {

          .dc-footer-inner {
            padding-left: 32px;
            padding-right: 32px;
          }

          .dc-footer-grid {
            grid-template-columns:
              repeat(3, 1fr);

            row-gap: 55px;
          }

          .dc-footer-brand {
            grid-column: 1 / -1;

            padding-right: 0;
          }

          .dc-footer-divider {
            width: 100%;

            margin-left: 0;
          }

          .dc-footer-copyright {
            width: 100%;

            margin-left: 0;
          }

          .dc-footer-wordmark {
            width: max-content;
          }

          .dc-wordmark-text {
            font-size:
              clamp(
                140px,
                15vw,
                210px
              );
          }
        }


        /* ========================================
           MOBILE
        ======================================== */

        @media (max-width: 650px) {

          .dc-footer-inner {
            min-height: 950px;

            padding:
              65px
              22px
              0;
          }

          .dc-footer-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            column-gap: 28px;

            row-gap: 45px;
          }

          .dc-footer-brand {
            grid-column: 1 / -1;
          }

          .dc-footer-column h3 {
            font-size: 15px;
          }

          .dc-footer-links {
            gap: 12px;
          }

          .dc-footer-links a {
            font-size: 13px;
          }

          .dc-footer-divider {
            margin-top: 60px;
          }

          .dc-footer-copyright {
            margin-top: 26px;

            font-size: 13px;
          }

          .dc-footer-wordmark {
            left: 50%;
            right: auto;

            width: max-content;

            height: 155px;

            bottom: -5px;

            transform: translateX(-50%);
          }

          .dc-wordmark-text {
            font-size: 20vw;

            letter-spacing: -4px;
          }

          .dc-wordmark-registered {
            width: 19vw;
            height: 19vw;

            min-width: 55px;
            min-height: 55px;

            border-width: 5px;

            font-size: 8vw;
          }
        }


        /* ========================================
           SMALL MOBILE
        ======================================== */

        @media (max-width: 420px) {

          .dc-footer-inner {
            padding-left: 18px;
            padding-right: 18px;
          }

          .dc-footer-grid {
            column-gap: 20px;
          }

          .dc-footer-description {
            font-size: 14px;
          }

          .dc-footer-phone {
            font-size: 14px;
          }

          .dc-footer-links a {
            font-size: 12px;
          }

          .dc-wordmark-text {
            font-size: 19vw;

            letter-spacing: -3px;
          }
        }

      `}</style>
    </footer>
  );
};

export default Footer;