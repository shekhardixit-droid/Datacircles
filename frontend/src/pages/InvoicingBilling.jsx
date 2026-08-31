import React from "react";
import TrustedAndUsedBy from "../components/TrustedAndUsedBy";
import CTA from "../components/invoicing-billing/CTA";
import Navbar from "../components/Navbar";
import CreateInvoiceSection from "../components/invoice/CreateInvoiceSection";


/* =========================================================
   PRODUCT CRM
   DATACIRCLES PUBLIC PAGE

   IMPORTANT:
   - Everything is inside this JSX file.
   - No external CSS file is required.
   - Images can be replaced manually with Cloudinary URLs.
   ========================================================= */


/* =========================================================
   IMAGE PLACEHOLDERS
   ========================================================= */

const billingImage = "https://res.cloudinary.com/tpxo8m6a/image/upload/v1787762725/e1b401cb4e4c9b406541ebaf104107c3180075c3.png";
const brandImage = "https://res.cloudinary.com/tpxo8m6a/image/upload/v1787917128/e1b401cb4e4c9b406541ebaf104107c3180075c3_4.png";
const deliveryImage = "https://res.cloudinary.com/tpxo8m6a/image/upload/v1787917181/e1b401cb4e4c9b406541ebaf104107c3180075c3_5.png";
const paymentsImage = "https://res.cloudinary.com/tpxo8m6a/image/upload/v1787918010/5de050cbe28eed0966420b6f6655576e9eadfad2.png";


/* =========================================================
   COMMON CONSTANTS
   ========================================================= */

const baseFont = "Inter, Arial, sans-serif";

const blue = "#0085FF";
const darkBlue = "#0A55AF";
const darkText = "#2B2C30";
const normalText = "#707173";
const lightText = "#78788D";
const border = "#E0E0E1";


/* =========================================================
   IMAGE PLACEHOLDER
   ========================================================= */

function ImagePlaceholder({
  src,
  label,
  style = {},
  imageStyle = {},
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background: "#F8FAFC",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        ...style,
      }}
    >
      {src ? (
        <img
          src={src}
          alt=""
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            ...imageStyle,
          }}
        />
      ) : (
        <span
          style={{
            fontFamily: baseFont,
            fontSize: "14px",
            fontWeight: 400,
            color: "#B8B8B8",
            userSelect: "none",
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
}


/* =========================================================
   HERO
   ========================================================= */

function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "1325px",
        overflow: "hidden",
        background: "#FFFFFF",
        fontFamily: baseFont,
        boxSizing: "border-box",
      }}
    >

      {/* =====================================================
          NAVBAR
          ===================================================== */}

      <div
        style={{
          position: "absolute",
          top: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 100,
          width: "720px",
          maxWidth: "calc(100% - 40px)",
        }}
      >
        <Navbar />
      </div>


      {/* =====================================================
          HERO TEXT
          ===================================================== */}

      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "1600px",
          margin: "0 auto",
          paddingTop: "164px",
          paddingLeft: "20px",
          paddingRight: "20px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >

        {/* BADGE */}

        <div
          style={{
            height: "25px",
            minWidth: "160px",
            padding: "4px 10px",
            borderRadius: "999px",
            background: "rgba(235, 230, 224, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            boxSizing: "border-box",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: blue,
              display: "block",
              flexShrink: 0,
            }}
          />

          <span
            style={{
              fontSize: "11.4px",
              lineHeight: "17px",
              fontWeight: 400,
              color: "#231014",
              whiteSpace: "nowrap",
            }}
          >
            Invoicing Infrastructure
          </span>
        </div>


        {/* HEADING */}

        <h1
          style={{
            margin: "14px 0 0 0",
            padding: 0,
            width: "100%",
            maxWidth: "952px",
            textAlign: "center",
            fontSize: "51px",
            lineHeight: "54px",
            fontWeight: 500,
            letterSpacing: "-2.7px",
            color: "#231014",
            boxSizing: "border-box",
          }}
        >
          GST invoices in seconds, not spreadsheets.
          <br />
          not spreadsheets.
        </h1>


        {/* DESCRIPTION */}

        <div
          style={{
            marginTop: "7px",
            width: "100%",
            maxWidth: "685px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              padding: 0,
              fontSize: "13.2px",
              lineHeight: "20px",
              fontWeight: 400,
              color: "#635557",
              textAlign: "center",
            }}
          >
            Turn a won deal into a professional invoice without retyping a
            thing,
            <br />
            then send it and track it, all from the same place your client
            already lives.
          </p>
        </div>


        {/* BUTTONS */}

        <div
          style={{
            marginTop: "17px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >

          <button
            type="button"
            style={{
              width: "149px",
              height: "49px",
              border: "none",
              borderRadius: "999px",
              background: blue,
              color: "#FFFFFF",
              fontSize: "15.1px",
              lineHeight: "22px",
              fontWeight: 500,
              fontFamily: baseFont,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 180ms ease",
            }}
            onMouseEnter={(event) => {
              event.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Start Free
          </button>


          <button
            type="button"
            style={{
              width: "148px",
              height: "49px",
              border: "none",
              borderRadius: "999px",
              background: "#E5EDF5",
              color: "#231014",
              fontSize: "15.3px",
              lineHeight: "22px",
              fontWeight: 500,
              fontFamily: baseFont,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 180ms ease",
            }}
            onMouseEnter={(event) => {
              event.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Book a Demo
          </button>

        </div>


        {/* TRIAL */}

        <p
          style={{
            margin: "5px 0 0 0",
            padding: 0,
            fontSize: "9px",
            lineHeight: "20px",
            fontWeight: 400,
            color: "#635557",
            textAlign: "center",
          }}
        >
          7-day free trial · No card required · GST-ready · Works on any device
        </p>


        {/* =================================================
            DASHBOARD VISUAL
            ================================================= */}

        <div
          className="product-crm-hero-dashboard"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1280px",
            height: "720px",
            marginTop: "17px",
            boxSizing: "border-box",
          }}
        >

          {/* BACKGROUND */}

          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "18px",
              background:
                "linear-gradient(180deg, #EAF7FF 0%, #DCEFFF 42%, #F7FBFE 100%)",
              overflow: "hidden",
            }}
          />


          {/* BACKGROUND SHAPE */}

          <div
            style={{
              position: "absolute",
              left: "7%",
              top: "80px",
              width: "250px",
              height: "150px",
              borderRadius: "12px",
              background: "rgba(255,255,255,0.28)",
              border: "1px solid rgba(255,255,255,0.45)",
              pointerEvents: "none",
            }}
          />


          <div
            style={{
              position: "absolute",
              right: "7%",
              top: "120px",
              width: "280px",
              height: "180px",
              borderRadius: "12px",
              background: "rgba(255,255,255,0.24)",
              border: "1px solid rgba(255,255,255,0.42)",
              pointerEvents: "none",
            }}
          />


          <div
            style={{
              position: "absolute",
              left: "4%",
              bottom: "100px",
              width: "300px",
              height: "170px",
              borderRadius: "12px",
              background: "rgba(255,255,255,0.26)",
              border: "1px solid rgba(255,255,255,0.45)",
              pointerEvents: "none",
            }}
          />


          <div
            style={{
              position: "absolute",
              right: "4%",
              bottom: "90px",
              width: "280px",
              height: "170px",
              borderRadius: "12px",
              background: "rgba(255,255,255,0.26)",
              border: "1px solid rgba(255,255,255,0.45)",
              pointerEvents: "none",
            }}
          />


          {/* =================================================
              CENTER DASHBOARD IMAGE
              ================================================= */}

          <div
            className="product-crm-hero-center"
            style={{
              position: "absolute",
              left: "50%",
              top: "12px",
              transform: "translateX(-50%)",
              width: "calc(100% - 150px)",
              maxWidth: "1100px",
              height: "590px",
              borderRadius: "8px",
              overflow: "hidden",
              background: "#FFFFFF",
              boxShadow: "0 18px 45px rgba(0, 74, 140, 0.10)",
              zIndex: 3,
            }}
          >
            <ImagePlaceholder
              src={
                "https://res.cloudinary.com/tpxo8m6a/image/upload/v1787914893/4f6fdab536cdc21b0ea49f7910ec5ec64636b08b.png"
              }
              label="CENTER IMAGE"
            />
          </div>


          {/* LEFT */}

          <div
            className="product-crm-hero-left"
            style={{
              position: "absolute",
              left: "3%",
              top: "350px",
              width: "270px",
              height: "190px",
              borderRadius: "8px",
              overflow: "hidden",
              background: "#FFFFFF",
              boxShadow: "0 15px 35px rgba(0, 70, 130, 0.16)",
              zIndex: 10,
            }}
          >
            <ImagePlaceholder
              src={
                "https://res.cloudinary.com/tpxo8m6a/image/upload/v1787914890/7318c219e2b5c2c73ed078df153915c50d9cc106_1.png"
              }
              label="LEFT IMAGE"
            />
          </div>


          {/* RIGHT */}

          <div
            className="product-crm-hero-right"
            style={{
              position: "absolute",
              right: "3%",
              top: "260px",
              width: "270px",
              height: "190px",
              borderRadius: "8px",
              overflow: "hidden",
              background: "#FFFFFF",
              boxShadow: "0 15px 35px rgba(0, 70, 130, 0.16)",
              zIndex: 10,
            }}
          >
            <ImagePlaceholder
              src={
                "https://res.cloudinary.com/tpxo8m6a/image/upload/v1787914889/4d01db93f799a415806872a98c98c53edf0d83db.png"
              }
              label="RIGHT IMAGE"
            />
          </div>


          {/* WHITE FADE */}

          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: "150px",
              zIndex: 20,
              pointerEvents: "none",
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0), #FFFFFF)",
            }}
          />

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   BILLING SECTION
   ========================================================= */

function BillingSection() {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "880px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "80px",
        padding: "80px 112px",
        boxSizing: "border-box",
        background: "#FFFFFF",
      }}
    >

      {/* IMAGE */}

      <div
        style={{
          width: "600px",
          height: "720px",
          flexShrink: 0,
          borderRadius: "16px",
          overflow: "hidden",
          background: "#F8FAFC",
        }}
      >
        <ImagePlaceholder
          src={billingImage}
          label="IMAGE 1"
          imageStyle={{
            objectFit: "cover",
          }}
        />
      </div>


      {/* CONTENT */}

      <div
        style={{
          width: "536px",
          minHeight: "585px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "32px",
          boxSizing: "border-box",
        }}
      >

        <div
          style={{
            width: "536px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "14px",
          }}
        >

          <h2
            style={{
              width: "438px",
              margin: 0,
              padding: 0,
              fontFamily: baseFont,
              fontSize: "32px",
              lineHeight: "110%",
              fontWeight: 500,
              letterSpacing: "-2px",
              color: darkText,
            }}
          >
            Billing is the tax you pay on winning work.
          </h2>


          <p
            style={{
              width: "536px",
              margin: 0,
              padding: 0,
              fontFamily: baseFont,
              fontSize: "16px",
              lineHeight: "120%",
              fontWeight: 400,
              color: normalText,
            }}
          >
            The deal closes, and then the real chore begins. Open the other
            app, retype the client's name, address and GSTIN, rebuild the line
            items, work out the tax split, fix the format, send it, and note it
            down somewhere so you remember to chase it. Every invoice, every
            time.
          </p>

        </div>


        {/* PROBLEMS */}

        <div
          style={{
            width: "536px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >

          <div
            style={{
              width: "536px",
              height: "1px",
              background: border,
            }}
          />


          <div
            style={{
              width: "536px",
              minHeight: "58px",
              display: "flex",
              alignItems: "center",
              boxSizing: "border-box",
            }}
          >
            <p
              style={{
                width: "536px",
                margin: 0,
                fontFamily: baseFont,
                fontSize: "20px",
                lineHeight: "120%",
                fontWeight: 400,
                letterSpacing: "-0.05em",
                color: darkText,
              }}
            >
              The same client details entered twice, in two different tools
            </p>
          </div>


          <div
            style={{
              width: "536px",
              height: "1px",
              background: border,
            }}
          />


          <div
            style={{
              width: "536px",
              minHeight: "72px",
              display: "flex",
              alignItems: "center",
              boxSizing: "border-box",
            }}
          >
            <p
              style={{
                width: "536px",
                margin: 0,
                fontFamily: baseFont,
                fontSize: "20px",
                lineHeight: "120%",
                fontWeight: 400,
                letterSpacing: "-0.05em",
                color: darkText,
              }}
            >
              GST worked out by hand, and sometimes worked out wrong
            </p>
          </div>


          <div
            style={{
              width: "536px",
              height: "1px",
              background: border,
            }}
          />


          <div
            style={{
              width: "536px",
              minHeight: "58px",
              display: "flex",
              alignItems: "center",
              boxSizing: "border-box",
            }}
          >
            <p
              style={{
                width: "536px",
                margin: 0,
                fontFamily: baseFont,
                fontSize: "20px",
                lineHeight: "120%",
                fontWeight: 400,
                letterSpacing: "-0.05em",
                color: darkText,
              }}
            >
              Invoices that look slightly different every single time
            </p>
          </div>


          <div
            style={{
              width: "536px",
              height: "1px",
              background: border,
            }}
          />


          <div
            style={{
              width: "536px",
              minHeight: "72px",
              display: "flex",
              alignItems: "center",
              boxSizing: "border-box",
            }}
          >
            <p
              style={{
                width: "536px",
                margin: 0,
                fontFamily: baseFont,
                fontSize: "20px",
                lineHeight: "120%",
                fontWeight: 400,
                letterSpacing: "-0.05em",
                color: darkText,
              }}
            >
              No link between the invoice and everything else about that
              client
            </p>
          </div>


          <div
            style={{
              width: "536px",
              height: "1px",
              background: border,
            }}
          />

        </div>


        {/* BUTTON */}

        <button
          type="button"
          style={{
            width: "200px",
            height: "52px",
            padding: "16px 20px",
            border: "none",
            borderRadius: "32px",
            background: blue,
            color: "#FFFFFF",
            fontFamily: baseFont,
            fontSize: "16px",
            lineHeight: "120%",
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            cursor: "pointer",
          }}
        >
          <span>Explore Invoicing</span>
          <span
            style={{
              fontSize: "18px",
              lineHeight: "1",
            }}
          >
            →
          </span>
        </button>

      </div>

    </section>
  );
}


/* =========================================================
   TAX MATHS SECTION
   ========================================================= */

function TaxMathsSection() {

  const cards = [
    {
      title: "Same State",
      text: "CGST and SGST, split automatically at the right rate.",
    },
    {
      title: "Different State",
      text: "IGST applied instead, with nothing extra required.",
    },
    {
      title: "Every Field Covered",
      text: "GSTIN, HSN and SAC codes, invoice numbering in sequence.",
    },
  ];

  return (
    <section
      style={{
        width: "1280px",
        maxWidth: "calc(100% - 40px)",
        minHeight: "433px",
        margin: "0 auto",
        padding: "32px",
        boxSizing: "border-box",
        borderRadius: "12px",
        background: "#F3F9FC",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "62px",
      }}
    >

      {/* INTRO */}

      <div
        style={{
          width: "580px",
          maxWidth: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}
      >

        <h2
          style={{
            margin: 0,
            width: "480px",
            maxWidth: "100%",
            fontFamily: baseFont,
            fontSize: "32px",
            lineHeight: "120%",
            fontWeight: 500,
            letterSpacing: "-2px",
            textAlign: "center",
            color: "#1C1C1D",
          }}
        >
          The tax maths, handled.
        </h2>


        <p
          style={{
            margin: 0,
            width: "848px",
            maxWidth: "100%",
            fontFamily: baseFont,
            fontSize: "18px",
            lineHeight: "140%",
            fontWeight: 400,
            textAlign: "center",
            color: lightText,
          }}
        >
          CGST and SGST when your client is in your state, IGST when they
          aren't. HSN and SAC codes, tax-inclusive or exclusive pricing, and a
          format that carries every field a valid GST invoice needs, so your
          client never loses their input credit because of your paperwork.
        </p>

      </div>


      {/* CARDS */}

      <div
        style={{
          width: "1216px",
          maxWidth: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          justifyContent: "center",
          gap: "20px",
        }}
      >

        {cards.map((card, index) => (
          <div
            key={card.title}
            style={{
              boxSizing: "border-box",
              width: "392px",
              minHeight: "170px",
              flex: "1 1 0",
              padding: "24px",
              borderRadius: "16px",
              border: "1px solid #ECECEC",
              background: "#FFFFFF",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "18px",
            }}
          >

            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "27px",
                background: "rgba(0,133,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: blue,
                fontSize: "17px",
                fontFamily: baseFont,
              }}
            >
              {index === 0 && "◉"}
              {index === 1 && "◇"}
              {index === 2 && "✧"}
            </div>


            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "8px",
              }}
            >

              <h3
                style={{
                  margin: 0,
                  fontFamily: baseFont,
                  fontSize: "20px",
                  lineHeight: "110%",
                  fontWeight: 500,
                  color: "#1C1C1D",
                }}
              >
                {card.title}
              </h3>


              <p
                style={{
                  margin: 0,
                  fontFamily: baseFont,
                  fontSize: "14px",
                  lineHeight: "120%",
                  fontWeight: 400,
                  color: lightText,
                }}
              >
                {card.text}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}


/* =========================================================
   NEW SECTION 1
   NOT JUST INVOICES
   ========================================================= */

function NotJustInvoicesSection() {

  const items = [
    {
      icon: "▣",
      title: "Quotation",
    },
    {
      icon: "✣",
      title: "Proforma Invoice",
    },
    {
      icon: "▤",
      title: "GST Invoice",
    },
    {
      icon: "♟",
      title: "Delivery Challan",
    },
    {
      icon: "▤",
      title: "Debit Note",
    },
    {
      icon: "◆",
      title: "Credit Note",
    },
    {
      icon: "➜",
      title: "Purchase Order",
    },
    {
      icon: "◖",
      title: "Receipts",
    },
  ];

  return (
    <section
      style={{
        width: "100%",
        minHeight: "704px",
        padding: "78px 40px 72px",
        boxSizing: "border-box",
        background: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >

      {/* =================================================
          HEADING
          ================================================= */}

      <h2
        style={{
          margin: 0,
          padding: 0,
          fontFamily: baseFont,
          fontSize: "32px",
          lineHeight: "110%",
          fontWeight: 500,
          letterSpacing: "-1.7px",
          textAlign: "center",
          color: "#2B2C30",
        }}
      >
        Not just Invoices
      </h2>


      {/* =================================================
          DESCRIPTION
          ================================================= */}

      <p
        style={{
          width: "680px",
          maxWidth: "100%",
          margin: "14px 0 0 0",
          padding: 0,
          fontFamily: baseFont,
          fontSize: "16px",
          lineHeight: "140%",
          fontWeight: 400,
          letterSpacing: "-0.15px",
          textAlign: "center",
          color: "#78788D",
        }}
      >
        Quotations before the work, proforma invoices when the sale isn't
        final, delivery challans when goods move, and debit or credit notes
        when things change. All in one system, numbered in sequence.
      </p>


      {/* =================================================
          DOCUMENT GRID
          ================================================= */}

      <div
        style={{
          width: "1040px",
          maxWidth: "100%",
          marginTop: "42px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          columnGap: "30px",
          rowGap: "42px",
          boxSizing: "border-box",
        }}
      >

        {items.map((item, index) => (
          <div
            key={item.title}
            style={{
              width: "100%",
              minHeight: "118px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              boxSizing: "border-box",
            }}
          >

            {/* ICON CIRCLE */}

            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                background: "#FFFFFF",
                border: "1px solid #E7EEF5",
                boxShadow:
                  "0 4px 12px rgba(34, 89, 130, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: baseFont,
                fontSize: "16px",
                fontWeight: 500,
                color: blue,
                boxSizing: "border-box",
              }}
            >
              {item.icon}
            </div>


            {/* TITLE */}

            <h3
              style={{
                margin: "13px 0 0 0",
                padding: 0,
                fontFamily: baseFont,
                fontSize: "15px",
                lineHeight: "20px",
                fontWeight: 500,
                color: "#2B2C30",
                textAlign: "center",
              }}
            >
              {item.title}
            </h3>


            {/* SMALL DESCRIPTION */}

            <p
              style={{
                width: "190px",
                maxWidth: "100%",
                margin: "6px 0 0 0",
                padding: 0,
                fontFamily: baseFont,
                fontSize: "9px",
                lineHeight: "12px",
                fontWeight: 400,
                color: "#A0A0A7",
                textAlign: "center",
              }}
            >
              Lorem ipsum dolor sit amet consectetur
              <br />
              Sagittis eu nibh at
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}


/* =========================================================
   NEW SECTION 2
   MADE FOR INDIAN BILLING
   ========================================================= */

function MadeForIndianBillingSection() {

  const tags = [
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit",
    "Lorem ipsum dolor sit amet consectetur",
    "Lorem ipsum dolor",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit",
    "Lorem ipsum dolor sit amet consectetur",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit",
    "Lorem ipsum dolor sit amet consectetur",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet consectetur",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet consectetur",
    "Lorem ipsum dolor sit",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit",
    "Lorem ipsum dolor sit amet consectetur",
    "Lorem ipsum dolor sit amet",
  ];

  return (
    <section
      style={{
        width: "100%",
        minHeight: "576px",
        padding: "74px 40px 80px",
        boxSizing: "border-box",
        background: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >

      {/* =================================================
          TITLE
          ================================================= */}

      <h2
        style={{
          margin: 0,
          padding: 0,
          fontFamily: baseFont,
          fontSize: "32px",
          lineHeight: "110%",
          fontWeight: 500,
          letterSpacing: "-1.7px",
          color: "#2B2C30",
          textAlign: "center",
        }}
      >
        Made for Indian Billing, not Adapted to it
      </h2>


      {/* =================================================
          TAG GRID
          ================================================= */}

      <div
        style={{
          width: "1100px",
          maxWidth: "100%",
          marginTop: "34px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          columnGap: "10px",
          rowGap: "12px",
          boxSizing: "border-box",
        }}
      >

        {tags.map((tag, index) => (
          <div
            key={`${tag}-${index}`}
            style={{
              minWidth:
                index % 3 === 0
                  ? "180px"
                  : index % 3 === 1
                  ? "160px"
                  : "205px",
              height: "34px",
              padding: "0 16px",
              borderRadius: "999px",
              background: "#F7F7F8",
              border: "1px solid #EEEEEF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxSizing: "border-box",
              fontFamily: baseFont,
              fontSize: "11px",
              lineHeight: "14px",
              fontWeight: 400,
              color: "#707173",
              whiteSpace: "nowrap",
            }}
          >

            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                border: "1px solid #8A8A8D",
                marginRight: "7px",
                flexShrink: 0,
                boxSizing: "border-box",
              }}
            />

            {tag}

          </div>
        ))}

      </div>

    </section>
  );
}


/* =========================================================
   YOUR BRAND / CARD 3
   ========================================================= */

function InvoiceBrandSection() {
  return (
    <section
      style={{
        width: "1216px",
        maxWidth: "calc(100% - 40px)",
        height: "588px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        borderRadius: "8px",
        background: "#FFFFFF",
        boxSizing: "border-box",
      }}
    >

      {/* IMAGE */}

      <div
        className="product-crm-card-image"
        style={{
          width: "666px",
          height: "658.48px",
          flex: "1 1 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <ImagePlaceholder
          src={brandImage}
          label="IMAGE 2"
        />
      </div>


      {/* CONTENT */}

      <div
        className="product-crm-card-content"
        style={{
          width: "550px",
          height: "588px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: 0,
          boxSizing: "border-box",
        }}
      >

        <div
          style={{
            width: "550px",
            padding: "0 32px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "14px",
          }}
        >

          <span
            style={{
              fontFamily: baseFont,
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: 500,
              color: blue,
            }}
          >
            Your Brand
          </span>


          <h2
            style={{
              margin: 0,
              fontFamily: baseFont,
              fontSize: "24px",
              lineHeight: "28px",
              fontWeight: 600,
              letterSpacing: "-0.72px",
              color: "#1E1E1E",
            }}
          >
            Documents that look like you, not like software.
          </h2>


          <p
            style={{
              margin: 0,
              fontFamily: baseFont,
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: 400,
              letterSpacing: "-0.16px",
              color: "#252525",
            }}
          >
            Your logo, your details, clean professional layouts. The invoice a
            client receives should make your business look as good as your work
            does.
          </p>

        </div>


        {/* TAGS + LINK */}

        <div
          style={{
            width: "324px",
            padding: "0 32px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "32px",
          }}
        >

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                gap: "8px",
              }}
            >

              <span
                style={{
                  boxSizing: "border-box",
                  padding: "8px 16px",
                  height: "31px",
                  borderRadius: "100px",
                  background: "rgba(0,133,255,0.1)",
                  border: "1px solid rgba(0,133,255,0.3)",
                  fontFamily: baseFont,
                  fontSize: "12px",
                  lineHeight: "15px",
                  fontWeight: 600,
                  color: darkBlue,
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Your logo
              </span>


              <span
                style={{
                  boxSizing: "border-box",
                  padding: "8px 16px",
                  height: "31px",
                  borderRadius: "100px",
                  background: "rgba(0,133,255,0.1)",
                  border: "1px solid rgba(0,133,255,0.3)",
                  fontFamily: baseFont,
                  fontSize: "12px",
                  lineHeight: "15px",
                  fontWeight: 600,
                  color: darkBlue,
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Clean layouts
              </span>

            </div>


            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                gap: "8px",
              }}
            >

              <span
                style={{
                  boxSizing: "border-box",
                  padding: "8px 16px",
                  height: "31px",
                  borderRadius: "100px",
                  background: "rgba(0,133,255,0.1)",
                  border: "1px solid rgba(0,133,255,0.3)",
                  fontFamily: baseFont,
                  fontSize: "12px",
                  lineHeight: "15px",
                  fontWeight: 600,
                  color: darkBlue,
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Bank & UPI details
              </span>


              <span
                style={{
                  boxSizing: "border-box",
                  padding: "8px 16px",
                  height: "31px",
                  borderRadius: "100px",
                  background: "rgba(0,133,255,0.1)",
                  border: "1px solid rgba(0,133,255,0.3)",
                  fontFamily: baseFont,
                  fontSize: "12px",
                  lineHeight: "15px",
                  fontWeight: 600,
                  color: darkBlue,
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Terms & notes
              </span>

            </div>

          </div>


          <a
            href="#payments"
            style={{
              width: "260px",
              height: "24px",
              display: "flex",
              alignItems: "center",
              fontFamily: baseFont,
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: 700,
              letterSpacing: "-0.16px",
              color: blue,
              textDecoration: "none",
            }}
          >
            Explore Payments →
          </a>

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   DELIVERY / CARD 4
   ========================================================= */

function DeliverySection() {
  return (
    <section
      style={{
        width: "1216px",
        maxWidth: "calc(100% - 40px)",
        height: "588px",
        margin: "80px auto 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        borderRadius: "8px",
        background: "#FFFFFF",
        boxSizing: "border-box",
      }}
    >

      {/* CONTENT */}

      <div
        style={{
          width: "550px",
          height: "588px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          boxSizing: "border-box",
        }}
      >

        <div
          style={{
            width: "550px",
            paddingRight: "32px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "14px",
          }}
        >

          <span
            style={{
              fontFamily: baseFont,
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: 500,
              color: blue,
            }}
          >
            Deliver
          </span>


          <h2
            style={{
              margin: 0,
              fontFamily: baseFont,
              fontSize: "24px",
              lineHeight: "28px",
              fontWeight: 600,
              letterSpacing: "-0.72px",
              color: "#1E1E1E",
            }}
          >
            Out the door and on the record.
          </h2>


          <p
            style={{
              margin: 0,
              fontFamily: baseFont,
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: 400,
              letterSpacing: "-0.16px",
              color: "#252525",
            }}
          >
            Send by email or share it on WhatsApp, the way your clients
            actually work. Every document files itself against the right
            client, so the full history sits in one place instead of your sent
            folder.
          </p>

        </div>


        {/* TAGS */}

        <div
          style={{
            width: "320px",
            paddingRight: "32px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "32px",
          }}
        >

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                gap: "8px",
              }}
            >

              <span
                style={{
                  boxSizing: "border-box",
                  padding: "8px 16px",
                  height: "31px",
                  borderRadius: "100px",
                  background: "rgba(0,133,255,0.1)",
                  border: "1px solid rgba(0,133,255,0.3)",
                  fontFamily: baseFont,
                  fontSize: "12px",
                  lineHeight: "15px",
                  fontWeight: 600,
                  color: darkBlue,
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Email
              </span>


              <span
                style={{
                  boxSizing: "border-box",
                  padding: "8px 16px",
                  height: "31px",
                  borderRadius: "100px",
                  background: "rgba(0,133,255,0.1)",
                  border: "1px solid rgba(0,133,255,0.3)",
                  fontFamily: baseFont,
                  fontSize: "12px",
                  lineHeight: "15px",
                  fontWeight: 600,
                  color: darkBlue,
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                WhatsApp
              </span>

            </div>


            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                gap: "8px",
              }}
            >

              <span
                style={{
                  boxSizing: "border-box",
                  padding: "8px 16px",
                  height: "31px",
                  borderRadius: "100px",
                  background: "rgba(0,133,255,0.1)",
                  border: "1px solid rgba(0,133,255,0.3)",
                  fontFamily: baseFont,
                  fontSize: "12px",
                  lineHeight: "15px",
                  fontWeight: 600,
                  color: darkBlue,
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                PDF download
              </span>


              <span
                style={{
                  boxSizing: "border-box",
                  padding: "8px 16px",
                  height: "31px",
                  borderRadius: "100px",
                  background: "rgba(0,133,255,0.1)",
                  border: "1px solid rgba(0,133,255,0.3)",
                  fontFamily: baseFont,
                  fontSize: "12px",
                  lineHeight: "15px",
                  fontWeight: 600,
                  color: darkBlue,
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Filed against the client
              </span>

            </div>

          </div>


          <a
            href="#payments"
            style={{
              width: "288px",
              height: "24px",
              display: "flex",
              alignItems: "center",
              fontFamily: baseFont,
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: 700,
              letterSpacing: "-0.16px",
              color: blue,
              textDecoration: "none",
            }}
          >
            Explore Contact Management →
          </a>

        </div>

      </div>


      {/* IMAGE */}

      <div
        className="product-crm-card-image"
        style={{
          width: "666px",
          height: "658.48px",
          flex: "1 1 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <ImagePlaceholder
          src={deliveryImage}
          label="IMAGE 3"
        />
      </div>

    </section>
  );
}


/* =========================================================
   PAYMENTS SECTION
   ========================================================= */

function PaymentsSection() {
  return (
    <section
      id="payments"
      style={{
        width: "100%",
        minHeight: "1008px",
        padding: "80px 40px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "62px",
        background: "#FFFFFF",
      }}
    >

      {/* INTRO */}

      <div
        style={{
          width: "696px",
          maxWidth: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "14px",
          textAlign: "center",
        }}
      >

        <h2
          style={{
            margin: 0,
            fontFamily: baseFont,
            fontSize: "32px",
            lineHeight: "110%",
            fontWeight: 500,
            letterSpacing: "-2px",
            color: darkText,
          }}
        >
          An invoice is only half the job.
        </h2>


        <p
          style={{
            margin: 0,
            width: "655px",
            maxWidth: "100%",
            fontFamily: baseFont,
            fontSize: "16px",
            lineHeight: "120%",
            fontWeight: 400,
            color: normalText,
          }}
        >
          Sending it is easy. Getting paid is the part that keeps you up at
          night. Payment status, overdue alerts and automatic reminders pick
          up from here.
        </p>


        <a
          href="#payments"
          style={{
            fontFamily: baseFont,
            fontSize: "16px",
            lineHeight: "120%",
            fontWeight: 700,
            color: blue,
            textDecoration: "none",
          }}
        >
          See how payments work →
        </a>

      </div>


      {/* WIZARD — replaces static image */}

      <div
        className="product-crm-payment-card"
        style={{
          boxSizing: "border-box",
          width: "1216px",
          maxWidth: "100%",
          border: "1px solid #ECECEC",
          borderRadius: "8px",
          background: "#FFFFFF",
          overflow: "hidden",
        }}
      >
        <CreateInvoiceSection />
      </div>

    </section>
  );
}


/* =========================================================
   RESPONSIVE CSS
   ========================================================= */

function ResponsiveStyles() {
  return (
    <style>
      {`

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          padding: 0;
          background: #FFFFFF;
          font-family: Inter, Arial, sans-serif;
        }


        /* =================================================
           LARGE TABLET
           ================================================= */

        @media (max-width: 1200px) {

          .product-crm-billing {
            padding-left: 40px !important;
            padding-right: 40px !important;
            gap: 40px !important;
          }

          .product-crm-billing-image {
            width: 48% !important;
          }

          .product-crm-billing-content {
            width: 48% !important;
          }

          .product-crm-not-invoices-grid {
            width: 900px !important;
          }

          .product-crm-india-tags {
            width: 900px !important;
          }

        }


        /* =================================================
           TABLET
           ================================================= */

        @media (max-width: 1000px) {

          .product-crm-wide-section {
            width: calc(100% - 40px) !important;
          }

          .product-crm-card-section {
            height: auto !important;
            min-height: 588px !important;
          }

          .product-crm-not-invoices-grid {
            width: 760px !important;
          }

          .product-crm-india-tags {
            width: 760px !important;
          }

        }


        /* =================================================
           MOBILE
           ================================================= */

        @media (max-width: 800px) {

          .product-crm-billing {
            min-height: auto !important;
            flex-direction: column !important;
            padding: 60px 20px !important;
          }

          .product-crm-billing-image {
            width: 100% !important;
            height: 500px !important;
          }

          .product-crm-billing-content {
            width: 100% !important;
            min-height: auto !important;
          }

          .product-crm-billing-title,
          .product-crm-billing-description,
          .product-crm-problem {
            width: 100% !important;
          }


          /* TAX */

          .product-crm-tax {
            width: calc(100% - 40px) !important;
            padding: 24px !important;
          }

          .product-crm-tax-cards {
            flex-direction: column !important;
          }

          .product-crm-tax-card {
            width: 100% !important;
          }


          /* NOT JUST INVOICES */

          .product-crm-not-invoices {
            min-height: auto !important;
            padding: 70px 20px !important;
          }

          .product-crm-not-invoices-grid {
            width: 100% !important;
            grid-template-columns: repeat(2, 1fr) !important;
            column-gap: 20px !important;
            row-gap: 35px !important;
          }


          /* INDIAN BILLING */

          .product-crm-india {
            min-height: auto !important;
            padding: 70px 20px !important;
          }

          .product-crm-india-tags {
            width: 100% !important;
          }


          /* CARDS */

          .product-crm-card-section {
            width: calc(100% - 40px) !important;
            height: auto !important;
            min-height: auto !important;
            flex-direction: column !important;
            padding: 30px 0 !important;
          }

          .product-crm-card-image {
            width: 100% !important;
            height: 420px !important;
          }

          .product-crm-card-content {
            width: 100% !important;
            height: auto !important;
            min-height: 450px !important;
            padding: 30px !important;
          }


          /* PAYMENTS */

          .product-crm-payments {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }

          .product-crm-payment-card {
            height: 450px !important;
          }


          /* FINAL */

          .product-crm-final-title {
            font-size: 32px !important;
          }

        }


        /* =================================================
           SMALL MOBILE
           ================================================= */

        @media (max-width: 520px) {

          .product-crm-hero-dashboard {
            height: 500px !important;
          }

          .product-crm-hero-center {
            width: calc(100% - 30px) !important;
            height: 330px !important;
          }

          .product-crm-hero-left,
          .product-crm-hero-right {
            width: 140px !important;
            height: 100px !important;
          }

          .product-crm-hero-left {
            left: 2% !important;
            top: 240px !important;
          }

          .product-crm-hero-right {
            right: 2% !important;
            top: 200px !important;
          }


          .product-crm-not-invoices-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            column-gap: 10px !important;
          }


          .product-crm-not-invoices-grid h3 {
            font-size: 13px !important;
          }


          .product-crm-india h2 {
            font-size: 27px !important;
          }


          .product-crm-final {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }

        }

      `}
    </style>
  );
}


/* =========================================================
   MAIN PAGE
   ========================================================= */

export default function ProductCRM() {
  return (
    <>
      <main
        style={{
          width: "100%",
          minHeight: "100vh",
          margin: 0,
          padding: 0,
          overflowX: "hidden",
          background: "#FFFFFF",
          fontFamily: baseFont,
        }}
      >

        {/* =================================================
            1. HERO
            ================================================= */}

        <Hero />


        {/* =================================================
            2. TRUSTED AND USED BY
            ================================================= */}

        <TrustedAndUsedBy />


        {/* =================================================
            3. BILLING
            ================================================= */}

        <div className="product-crm-billing">
          <BillingSection />
        </div>


        {/* =================================================
            4. TAX MATHS
            ================================================= */}

        <div className="product-crm-tax">
          <TaxMathsSection />
        </div>


        {/* =================================================
            5. NEW — NOT JUST INVOICES
            ================================================= */}

        <div className="product-crm-not-invoices">
          <NotJustInvoicesSection />
        </div>


        {/* =================================================
            6. YOUR BRAND / CARD 3
            ================================================= */}

        <div className="product-crm-wide-section">
          <div className="product-crm-card-section">
            <InvoiceBrandSection />
          </div>
        </div>


        {/* =================================================
            7. DELIVERY / CARD 4
            ================================================= */}

        <div className="product-crm-wide-section">
          <div className="product-crm-card-section">
            <DeliverySection />
          </div>
        </div>


        {/* =================================================
            8. PAYMENTS
            ================================================= */}

        <div className="product-crm-payments">
          <PaymentsSection />
        </div>


        {/* =================================================
            9. MADE FOR INDIAN BILLING
            ================================================= */}

        <div className="product-crm-india">
          <MadeForIndianBillingSection />
        </div>


        {/* =================================================
            10. FINAL CTA
            ================================================= */}

        <div className="product-crm-final">
          <CTA />
        </div>

      </main>


      {/* =====================================================
          ALL CSS REMAINS INSIDE THIS JSX FILE
          ===================================================== */}

      <ResponsiveStyles />

    </>
  );
}
