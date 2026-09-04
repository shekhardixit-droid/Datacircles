import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function PrivacyPolicy() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
        background: "linear-gradient(180deg, #e8f4ff 0%, #ffffff 320px)",
        fontFamily: "Inter, Arial, Helvetica, sans-serif",
        color: "#242424",
      }}
    >
      {/* Navbar */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          display: "flex",
          justifyContent: "center",
          padding: "12px 16px 0",
        }}
      >
        <Navbar />
      </div>

      {/* Page content */}
      <main
        style={{
            maxWidth: 1100,
          margin: "0 auto",
          padding: "48px 24px 80px",
        }}
      >
        {/* Legal Pages badge */}
        <div style={{ marginBottom: 24 }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "5px 14px",
              borderRadius: 999,
              border: "1px solid #b6d4f7",
              background: "#f0f7ff",
              fontSize: 13,
              fontWeight: 500,
              color: "#2563eb",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#2563eb",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            Legal Pages
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: "clamp(26px, 4vw, 38px)",
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#111",
            margin: "0 0 16px",
            letterSpacing: "-0.5px",
          }}
        >
          DataCircles Privacy Policy
        </h1>

        {/* Intro */}
        <p style={styles.body}>
          This Privacy Policy explains how DataCircles Technologies ("we", "our", "the platform") collects, uses, and protects your personal data.
        </p>
        <p style={styles.body}>
          At DataCircles, we take your privacy seriously. This policy outlines the type of information we collect, why we collect it, and how we use your data to improve our services.
        </p>

        {/* 1 */}
        <h2 style={styles.h2}>1. Information We Collect</h2>
        <p style={styles.body}>We may collect the following information to provide and improve our services:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Name</li>
          <li style={styles.li}>Email Address</li>
          <li style={styles.li}>Phone Number</li>
          <li style={styles.li}>Business Information</li>
          <li style={styles.li}>Usage Data</li>
          <li style={styles.li}>Device &amp; Browser Metadata</li>
        </ul>

        {/* 2 */}
        <h2 style={styles.h2}>2. How We Use Your Information</h2>
        <p style={styles.body}>Your information helps us:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Provide access to the platform</li>
          <li style={styles.li}>Improve product experience and features</li>
          <li style={styles.li}>Offer customer support</li>
          <li style={styles.li}>Send updates, security alerts, and service notifications</li>
          <li style={styles.li}>Analyze usage trends to enhance DataCircles</li>
        </ul>

        {/* 3 */}
        <h2 style={styles.h2}>3. Data Sharing &amp; Disclosure</h2>
        <p style={styles.body}>
          We do not sell your data. Data may be shared only with trusted partners who help us operate our platform securely — such as cloud hosting, analytics providers, or payment processors.
        </p>

        {/* 4 */}
        <h2 style={styles.h2}>4. Data Security</h2>
        <p style={styles.body}>
          We implement industry-grade encryption, secure authentication, and regular security audits to ensure your information remains safe.
        </p>

        {/* 5 */}
        <h2 style={styles.h2}>5. Your Rights</h2>
        <p style={styles.body}>You have the right to:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Access your data</li>
          <li style={styles.li}>Request corrections</li>
          <li style={styles.li}>Request deletion (where applicable)</li>
          <li style={styles.li}>Opt-out of marketing communications</li>
        </ul>

        {/* 6 */}
        <h2 style={styles.h2}>6. Cookies & Tracking</h2>
        <p style={styles.body}>
          We use cookies to remember your preferences, enhance navigation, and analyze platform performance.
        </p>

        {/* 7 */}
        <h2 style={styles.h2}>7. Changes to This Policy</h2>
        <p style={styles.body}>
          We may update this Privacy Policy periodically. The updated date will always be provided at the top of the page.
        </p>

        {/* 8 */}
        <h2 style={styles.h2}>8. Contact Us</h2>
        <p style={styles.body}>For privacy inquiries, reach out at:</p>
        <p style={{ ...styles.body, fontWeight: 600 }}>
          <a href="mailto:support@datacircles.com" style={styles.link}>
            support@datacircles.com
          </a>
        </p>
      </main>

      <Footer />
    </div>
  );
}

const styles = {
  h2: {
    fontSize: "clamp(18px, 2.5vw, 22px)",
    fontWeight: 700,
    color: "#111",
    margin: "36px 0 12px",
    letterSpacing: "-0.3px",
  },
  body: {
    fontSize: 15,
    lineHeight: 1.75,
    color: "#374151",
    margin: "0 0 12px",
  },
  ul: {
    margin: "8px 0 12px 0",
    paddingLeft: 24,
    listStyleType: "disc",
  },
  li: {
    fontSize: 15,
    lineHeight: 1.75,
    color: "#374151",
    marginBottom: 4,
  },
  link: {
    color: "#111",
    textDecoration: "underline",
    fontWeight: 600,
  },
};
