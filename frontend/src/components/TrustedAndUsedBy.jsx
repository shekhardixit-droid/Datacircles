export default function TrustedAndUsedBy() {
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

  return (
    <>
      <style>{`
        /* =========================================================
           TRUSTED AND USED BY
           ========================================================= */

        .trusted-section {
          width: 100%;
          margin-top: 32px;
          background: #ffffff;
        }

        .trusted-title {
          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 14px;

          font-family: Inter, Arial, Helvetica, sans-serif;
          font-size: 14px;
          line-height: 18px;
          font-weight: 400;

          letter-spacing: 0.5px;
          text-transform: uppercase;

          color: #666666;
        }

        /* =========================================================
           MARQUEE
           EXACT DESKTOP SIZE: 820px × 40px
           ========================================================= */

        .trusted-marquee {
          position: relative;

          width: 820px;
          height: 40px;

          margin: 0 auto;

          overflow: hidden;

          background: #ffffff;
        }

        /* =========================================================
           MOVING TRACK
           RIGHT → LEFT
           
           Runs permanently.
           ========================================================= */

        .trusted-track {
          position: absolute;

          top: 0;
          left: 0;

          width: max-content;
          height: 40px;

          display: flex;
          align-items: center;

          animation: trustedMoveLeft 18s linear infinite;

          will-change: transform;
        }

        /* =========================================================
           LOGO
           ========================================================= */

        .trusted-logo {
          width: 130px;
          height: 32px;

          flex: 0 0 130px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-right: 34px;
        }

        .trusted-logo img {
          display: block;

          width: auto;
          height: auto;

          max-width: 120px;
          max-height: 24px;

          object-fit: contain;
        }

        /* =========================================================
           RIGHT → LEFT
           ========================================================= */

        @keyframes trustedMoveLeft {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        /* =========================================================
           SOFT LEFT FADE
           
           No border.
           No hard clipping line.
           ========================================================= */

        .trusted-fade-left {
          position: absolute;

          top: 0;
          left: 0;

          z-index: 10;

          width: 105px;
          height: 40px;

          pointer-events: none;

          background: linear-gradient(
            to right,
            #ffffff 0%,
            rgba(255, 255, 255, 0.96) 18%,
            rgba(255, 255, 255, 0.72) 45%,
            rgba(255, 255, 255, 0.35) 70%,
            rgba(255, 255, 255, 0) 100%
          );
        }

        /* =========================================================
           SOFT RIGHT FADE
           
           No border.
           No hard clipping line.
           ========================================================= */

        .trusted-fade-right {
          position: absolute;

          top: 0;
          right: 0;

          z-index: 10;

          width: 105px;
          height: 40px;

          pointer-events: none;

          background: linear-gradient(
            to left,
            #ffffff 0%,
            rgba(255, 255, 255, 0.96) 18%,
            rgba(255, 255, 255, 0.72) 45%,
            rgba(255, 255, 255, 0.35) 70%,
            rgba(255, 255, 255, 0) 100%
          );
        }

        /* =========================================================
           PERMANENT MARQUEE
           
           No hover pause.
           ========================================================= */

        .trusted-marquee:hover .trusted-track {
          animation-play-state: running;
        }

        /* =========================================================
           RESPONSIVE
           ========================================================= */

        @media (max-width: 900px) {
          .trusted-marquee {
            width: calc(100% - 32px);
          }
        }

        @media (max-width: 700px) {
          .trusted-title {
            font-size: 12px;
          }

          .trusted-marquee {
            width: calc(100% - 32px);
            height: 40px;
          }

          .trusted-logo {
            width: 110px;
            flex-basis: 110px;
            margin-right: 24px;
          }

          .trusted-logo img {
            max-width: 100px;
            max-height: 22px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .trusted-track {
            animation: trustedMoveLeft 18s linear infinite;
          }
        }
      `}</style>

      <section className="trusted-section">

        {/* =====================================================
            TITLE
            ===================================================== */}

        <div className="trusted-title">
          Trusted and used by
        </div>

        {/* =====================================================
            820 × 40 MARQUEE
            ===================================================== */}

        <div className="trusted-marquee">

          {/* ===================================================
              MOVING LOGOS
              =================================================== */}

          <div className="trusted-track">

            {/* FIRST LOGO SET */}

            {TRUSTED_LOGOS.map((logo) => (
              <div
                className="trusted-logo"
                key={`first-${logo.src}`}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}

            {/* DUPLICATED LOGO SET */}

            {TRUSTED_LOGOS.map((logo) => (
              <div
                className="trusted-logo"
                key={`second-${logo.src}`}
                aria-hidden="true"
              >
                <img
                  src={logo.src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}

          </div>

          {/* ===================================================
              SOFT EDGE FADE
              =================================================== */}

          <div className="trusted-fade-left" />

          <div className="trusted-fade-right" />

        </div>

      </section>
    </>
  );
}