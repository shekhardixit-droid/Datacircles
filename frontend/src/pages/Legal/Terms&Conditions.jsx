import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function TermsOfService() {
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
          DataCircles Terms of Service &amp; End User License Agreement
        </h1>

        {/* Intro */}
        <p style={styles.intro}>
          This Terms of Service ("TOS") and End User License Agreement ("EULA") governs your use of the DataCircles platform, software, and services.
        </p>

        {/* ── 1. Scope and Applicability ── */}
        <h2 style={styles.h2}>Scope and Applicability</h2>

        <p style={styles.body}>
          1.1. This User Agreement ("UA") between You and M/s DataCircles Technology ("DataCircles") covers Your use of the DataCircles Services related to the Products ("Service").
        </p>

        <p style={styles.body}>You agree to be bound by this EULA through:</p>

        <ul style={styles.ul}>
          <li style={styles.li}>Your download, installation, or use of the Service; or</li>
          <li style={styles.li}>Your express agreement to this EULA.</li>
        </ul>

        <p style={styles.body}>
          1.2. You must be of legal age to use the Service. You must provide accurate and complete registration information and maintain the confidentiality of your account credentials. DataCircles may terminate your account if information provided is inaccurate or incomplete.
        </p>

        {/* ── 2. Definitions ── */}
        <h2 style={styles.h2}>Definitions</h2>

        <p style={styles.body}><strong>"Affiliate"</strong> means any corporation or company that controls or is controlled by the relevant party.</p>
        <p style={styles.body}><strong>"Inactivated Account"</strong> means a free plan account inactive for 90+ days.</p>
        <p style={styles.body}><strong>"Subscription Plan"</strong> refers to the DataCircles plan opted by You.</p>
        <p style={styles.body}><strong>"Usage Term"</strong> means Your active subscription period.</p>
        <p style={styles.body}><strong>"You"</strong> means the individual or entity using DataCircles Services.</p>

        {/* ── 3. Using DataCircles Service ── */}
        <h2 style={styles.h2}>Using DataCircles Service</h2>

        <p style={styles.subhead}>3.1 License and Right to Use:</p>
        <p style={styles.body}>
          DataCircles grants You a non-exclusive, non-transferable, limited license to access and use the Service for internal business purposes during the Usage Term.
        </p>

        <p style={styles.subhead}>3.2 Restrictions:</p>
        <p style={styles.body}>You shall NOT:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Reverse engineer, decompile, reproduce, or exploit the Service.</li>
          <li style={styles.li}>Sell, rent, lease, sublicense, or distribute the Service.</li>
          <li style={styles.li}>Transfer usage rights to a third party.</li>
          <li style={styles.li}>Use the Service to harm, overload, or impair DataCircles systems.</li>
        </ul>

        <p style={styles.subhead}>3.3 Trial / Free Use</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Trial access is provided for 7 days (or a duration determined by DataCircles).</li>
          <li style={styles.li}>You may upgrade to a paid subscription at any time.</li>
        </ul>

        <p style={styles.subhead}>3.4 Paid Use of the Service</p>
        <p style={styles.body}>
          Subscription plans vary by duration and pricing. Fees exclude taxes. You agree to pay all applicable taxes. DataCircles may revise pricing with 30 days prior notice.
        </p>

        <p style={styles.subhead}>3.5 Additional Services</p>
        <p style={styles.body}>Additional paid add-ons may be purchased as needed.</p>

        <p style={styles.subhead}>3.6 Payment</p>
        <p style={styles.body}>
          Subscription fees must be paid before the Subscription Period begins. A Sales Quotation and Tax Invoice will be issued accordingly.
        </p>

        <p style={styles.subhead}>3.7 Refund Policy</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Mistaken payments may be refunded.</li>
          <li style={styles.li}>
            Refund eligibility:
            <ul style={{ ...styles.ul, marginTop: 6, marginBottom: 0 }}>
              <li style={styles.li}>Within 14 working days (annual subscription)</li>
              <li style={styles.li}>Within 30 working days (4+ month subscription)</li>
            </ul>
          </li>
        </ul>

        <p style={{ ...styles.body, fontWeight: 700, marginTop: 16 }}>Refund Procedure:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>
            Email request with bank details + KYC to{" "}
            <a href="mailto:support@datacircles.in" style={styles.link}>support@datacircles.in</a>
          </li>
          <li style={styles.li}>Refund processed within 20 working days after verification.</li>
        </ul>

        {/* ── 4. Termination ── */}
        <h2 style={styles.h2}>Termination</h2>
        <p style={styles.body}>Your account may be terminated if:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Free plan is inactive for 3+ months</li>
          <li style={styles.li}>Violation of User Agreement</li>
          <li style={styles.li}>Non-payment for 3+ months</li>
        </ul>
        <p style={styles.body}>Upon termination, all associated data may be deleted and access revoked.</p>

        {/* ── 5. Ownership ── */}
        <h2 style={styles.h2}>Ownership</h2>

        <p style={styles.subhead}>5.1 Data Ownership</p>
        <p style={styles.body}>All data created by You remains Your property. DataCircles will not use or share your data without consent.</p>

        <p style={styles.subhead}>5.2 Reservation of Rights</p>
        <p style={styles.body}>You do not acquire ownership of DataCircles Services. All intellectual property remains with DataCircles.</p>

        <p style={styles.subhead}>5.3 Intellectual Property Rights</p>
        <p style={styles.body}>Unauthorized use, reproduction, or distribution of DataCircles IP is prohibited.</p>

        {/* ── 6. Indemnification ── */}
        <h2 style={styles.h2}>Indemnification</h2>
        <p style={styles.body}>You agree to indemnify DataCircles from claims arising due to:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Use of the Service</li>
          <li style={styles.li}>Losses, damages, or disputes</li>
          <li style={styles.li}>Illegal use of the Service</li>
          <li style={styles.li}>Breach of this EULA</li>
        </ul>

        {/* ── 7. Disclaimer of Warranties ── */}
        <h2 style={styles.h2}>Disclaimer of Warranties</h2>
        <p style={styles.body}>
          Services are provided "as is" and "as available." DataCircles does not guarantee uninterrupted or error-free service.
        </p>

        {/* ── 8. Limitations of Liability ── */}
        <h2 style={styles.h2}>Limitations of Liability</h2>
        <p style={styles.body}>
          DataCircles shall not be liable for indirect or consequential damages. Liability is limited to the value of the subscription fee paid.
        </p>

        {/* ── 9. Miscellaneous ── */}
        <h2 style={styles.h2}>Miscellaneous</h2>
        <p style={styles.body}><strong>9.1 Severability:</strong> Invalid clauses do not affect the remainder of the Agreement.</p>
        <p style={styles.body}><strong>9.2 Governing Law:</strong> Indian law applies. Jurisdiction: Mumbai courts.</p>
        <p style={styles.body}><strong>9.3 Entire Agreement:</strong> This EULA supersedes all prior versions.</p>
        <p style={styles.body}><strong>9.4 Assignment:</strong> Neither party may assign rights without written consent.</p>
        <p style={styles.body}><strong>9.5 Force Majeure:</strong> DataCircles is not liable for delays due to events beyond control.</p>

        {/* ── 10. Technical Support & Grievances ── */}
        <h2 style={styles.h2}>Technical Support &amp; Grievances</h2>
        <p style={styles.body}>For technical issues:</p>
        <p style={{ ...styles.body, fontWeight: 700, marginTop: -8 }}>
          <a href="mailto:support@datacircles.in" style={styles.link}>support@datacircles.in</a>
        </p>
        <p style={styles.body}>For complaints, contact the designated Grievance Officer in writing.</p>

        {/* Company details */}
        <div style={{ marginTop: 32, borderTop: "1px solid #e5eaf0", paddingTop: 24 }}>
          <p style={{ ...styles.body, fontWeight: 700, marginBottom: 4 }}>M/s DataCircles Technology</p>
          <p style={{ ...styles.body, margin: "2px 0" }}>MSME (UDYAM-MH-33-0638838)</p>
          <p style={{ ...styles.body, margin: "2px 0" }}>GST (27AJXPM6211H2ZT)</p>
          <p style={{ ...styles.body, marginTop: 12 }}>
            Registered Office: No. 721, Centura Square IT Park, Road No. 27, Wagle Estate, Thane (West) - 400604, Maharashtra, India.
          </p>
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
    margin: "0 0 36px",
    fontWeight: 400,
  },
  h2: {
    fontSize: "clamp(20px, 3vw, 26px)",
    fontWeight: 700,
    color: "#111",
    margin: "40px 0 14px",
    letterSpacing: "-0.3px",
  },
  subhead: {
    fontSize: 15,
    fontWeight: 600,
    color: "#111",
    margin: "22px 0 6px",
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
