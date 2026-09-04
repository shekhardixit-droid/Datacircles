import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function SecurityCompliance() {
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
        {/* Security & Compliance badge */}
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
            Security &amp; Compliance
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
          Security & Compliance at DataCircles
        </h1>

        {/* Intro */}
        <p style={styles.intro}>
          We prioritize the complete protection of your data and ensure uninterrupted access to your products.{" "}
          Your data remains private, secure, and available at all times.
        </p>

        {/* Two column section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "40px 60px",
            marginTop: 40,
          }}
        >
          {/* Left */}
          <div>
            <h2 style={styles.h2}>Your Security, Our Highest Priority</h2>
            <p style={styles.body}>
              At DataCircles, your data security is paramount. We follow global security standards and implement strong policies and processes to ensure confidentiality, integrity, and availability of your data.
            </p>
          </div>

          {/* Right */}
          <div>
            <h2 style={styles.h2}>Continuous Monitoring &amp; Audits</h2>
            <p style={styles.body}>
              Our systems undergo continuous monitoring and periodic audits. Through rigorous internal testing, we proactively identify and resolve potential vulnerabilities before they become threats, keeping your data safe at all times.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

const styles = {
  intro: {
    fontSize: 15,
    lineHeight: 1.75,
    color: "#374151",
    margin: "0 0 12px",
  },
  h2: {
    fontSize: "clamp(16px, 2vw, 19px)",
    fontWeight: 700,
    color: "#111",
    margin: "0 0 12px",
    letterSpacing: "-0.2px",
  },
  body: {
    fontSize: 15,
    lineHeight: 1.75,
    color: "#374151",
    margin: "0 0 12px",
  },
};
