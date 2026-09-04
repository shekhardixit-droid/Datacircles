import { useState, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LOGO_URL =
  "https://res.cloudinary.com/tpxo8m6a/image/upload/v1787721139/36b813d8bb9bc0141c6a096a0d4f0ae45d345450.png";

const RESOURCES_ITEMS = {
  learn: [
    {
      label: "Blog",
      sub: "Sales, GST & growth tips",
      route: "/blogs",
      image: "",
    },
    {
      label: "Guides & learn",
      sub: "How-tos & playbooks",
      route: "/how-to-guide",
      image: "",
    },
    {
      label: "Help centre",
      sub: "Setup & support",
      route: "/freetools",
      image: "",
    },
  ],

  tools: [
    {
      label: "Free tools",
      sub: "Invoice & GST calculators",
      route: "/freetools",
      image: "",
    },
    {
      label: "Templates",
      sub: "quotation formats",
      route: "",
      image: "",
    },
    {
      label: "Customer stories",
      sub: "Real SME results",
      route: "/customer-stories",
      image: "",
    },
    {
      label: "Comparisons",
      sub: "vs the alternatives",
      route: "/comparison",
      image: "",
    },
  ],
};

const PRODUCT_ITEMS = {
  billing: [
    {
      label: "CRM",
      sub: "Leads, contacts & pipeline",
      route: "/product-crm",
      image: "",
    },
    {
      label: "Lead capture",
      sub: "Web forms, WhatsApp, imports",
      route: "",
      image: "",
    },
    {
      label: "Follow-ups & tasks",
      sub: "Never drop a lead",
      route: "",
      image: "",
    },
  ],

  payments: [
    {
      label: "Invoicing & billing",
      sub: "GST invoices & quotes",
      route: "/invoicing-billing",
      image: "",
    },
    {
      label: "Payments",
      sub: "UPI, links & reminders",
      route: "/payment1",
      image: "",
    },
    {
      label: "Integrations",
      sub: "WhatsApp, Tally, gateways",
      route: "",
      image: "",
    },
  ],
};

const SOLUTION_ITEMS = [
  {
    label: "Retailers & shops",
    sub: "Counter sales to follow-ups",
    route: "/solutions",
    image: "",
  },
  {
    label: "Agencies & services",
    sub: "Proposals to paid",
    route: "",
    image: "",
  },
  {
    label: "Consultants & freelancers",
    sub: "Simple CRM + billing",
    route: "",
    image: "",
  },
  {
    label: "Distributors & wholesale",
    sub: "Orders, credit & collections",
    route: "",
    image: "",
  },
];


function ResourceImageSlot({ item }) {
  return (
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: 8,
        overflow: "hidden",
        flexShrink: 0,
        background: "rgba(232, 240, 254, 0.75)",
      }}
    >
      {item.image && (
        <img
          src={item.image}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      )}
    </div>
  );
}

function SolutionDropdown({ onNavigate }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "calc(100% + 12px)",
        left: "50%",
        transform: "translateX(-50%)",
        width: 760,
        maxWidth: "calc(100vw - 32px)",
        background: "rgba(255, 255, 255, 0.72)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderRadius: 16,
        boxShadow: "none",
        border: "1px solid rgba(255, 255, 255, 0.35)",
        padding: "20px 20px 16px",
        zIndex: 99999,
        display: "flex",
        flexWrap: "wrap",
        gap: 12,
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <div style={{ flex: "1 1 320px", minWidth: 0 }}>
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: "#888",
            letterSpacing: 1,
            textTransform: "uppercase",
            marginBottom: 10,
          }}
        >
          BY BUSINESS
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: 18,
            rowGap: 2,
          }}
        >
          {SOLUTION_ITEMS.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => item.route && onNavigate(item.route)}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
                width: "100%",
                minWidth: 0,
                padding: "8px 10px",
                borderRadius: 8,
                border: "none",
                background: "transparent",
                cursor: item.route ? "pointer" : "default",
                textAlign: "left",
                marginBottom: 2,
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "rgba(244, 248, 255, 0.30)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              <ResourceImageSlot item={item} />

              <div style={{ minWidth: 0, paddingTop: 2 }}>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#111",
                    lineHeight: "17px",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    if (item.route) e.currentTarget.style.color = "#0085FF";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#111";
                  }}
                >
                  {item.label}

                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 400,
                      color: "#777",
                      marginLeft: 4,
                    }}
                  >
                    {item.sub}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div style={{ flex: "0 1 216px", width: 216, minWidth: 160 }}>
        <div
          style={{
            background: "rgba(232, 240, 254, 0.48)",
            borderRadius: 12,
            padding: "14px 14px 12px",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            border: "1px solid rgba(255, 255, 255, 0.30)",
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: "rgba(0, 133, 255, 0.15)",
              marginBottom: 10,
              overflow: "hidden",
              flexShrink: 0,
            }}
          />

          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: "#0085FF",
              textTransform: "uppercase",
              letterSpacing: 0.5,
              marginBottom: 4,
            }}
          >
            MAKING THE SWITCH
          </div>

          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#111",
              lineHeight: "17px",
              marginBottom: 6,
            }}
          >
            Moving from Excel or Tally?
          </div>

          <div
            style={{
              fontSize: 11,
              color: "#555",
              lineHeight: "15px",
              marginBottom: 10,
              flex: 1,
            }}
          >
            We import your customers and invoices in minutes — nothing lost.
          </div>

          <button
            type="button"
            onClick={() => onNavigate("/customer-stories")}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              fontSize: 12,
              fontWeight: 700,
              color: "#0085FF",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            Read a switch story
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductDropdown({ onNavigate }) {
  const renderProductItem = (item) => (
    <button
      key={item.label}
      type="button"
      onClick={() => item.route && onNavigate(item.route)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        width: "100%",
        padding: "8px 10px",
        borderRadius: 8,
        border: "none",
        background: "transparent",
        cursor: item.route ? "pointer" : "default",
        textAlign: "left",
        marginBottom: 2,
        transition: "background 0.15s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background =
          "rgba(244, 248, 255, 0.30)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
      }}
    >
      <ResourceImageSlot item={item} />

      <div style={{ minWidth: 0 }}>
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "#111",
            transition: "color 0.15s",
          }}
          onMouseEnter={(e) => {
            if (item.route) e.currentTarget.style.color = "#0085FF";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#111";
          }}
        >
          {item.label}

          <span
            style={{
              fontSize: 12,
              fontWeight: 400,
              color: "#777",
              marginLeft: 4,
            }}
          >
            {item.sub}
          </span>
        </div>
      </div>
    </button>
  );

  return (
    <div
      style={{
        position: "absolute",
        top: "calc(100% + 12px)",
        left: "50%",
        transform: "translateX(-50%)",
        width: 620,
        maxWidth: "calc(100vw - 32px)",
        background: "rgba(255, 255, 255, 0.72)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderRadius: 16,
        boxShadow: "none",
        border: "1px solid rgba(255, 255, 255, 0.35)",
        padding: "20px 20px 16px",
        zIndex: 99999,
        display: "flex",
        flexWrap: "wrap",
        gap: 12,
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <div style={{ flex: "1 1 200px", minWidth: 0 }}>
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: "#888",
            letterSpacing: 1,
            textTransform: "uppercase",
            marginBottom: 10,
          }}
        >
          CAPTURE & CONVERT
        </div>

        {PRODUCT_ITEMS.billing.map(renderProductItem)}
      </div>

      <div style={{ flex: "1 1 200px", minWidth: 0 }}>
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: "#888",
            letterSpacing: 1,
            textTransform: "uppercase",
            marginBottom: 10,
          }}
        >
          BILL & GET PAID
        </div>

        {PRODUCT_ITEMS.payments.map(renderProductItem)}
      </div>

      <div style={{ flex: "0 1 150px", width: 150, minWidth: 130 }}>
        <div
          style={{
            background: "rgba(244, 248, 255, 0.35)",
            borderRadius: 12,
            padding: "14px 14px 12px",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            border: "1px solid rgba(255, 255, 255, 0.30)",
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: "rgba(232, 240, 254, 0.45)",
              marginBottom: 10,
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            {/* Insert image here later */}
          </div>

          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: "#0085FF",
              textTransform: "uppercase",
              letterSpacing: 0.5,
              marginBottom: 4,
            }}
          >
            THE FULL JOURNEY
          </div>

          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#111",
              lineHeight: "17px",
              marginBottom: 6,
            }}
          >
            Platform overview
          </div>

          <div
            style={{
              fontSize: 11,
              color: "#555",
              lineHeight: "15px",
              marginBottom: 10,
              flex: 1,
            }}
          >
            One system, from first enquiry to money in the bank.
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 5,
              marginBottom: 10,
            }}
          >
            {["Lead", "Invoice", "Paid"].map((item) => (
              <span
                key={item}
                style={{
                  fontSize: 9,
                  fontWeight: 600,
                  color: "#0085FF",
                  background: "rgba(255, 255, 255, 0.70)",
                  borderRadius: 999,
                  padding: "3px 6px",
                }}
              >
                {item}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={() => onNavigate("/platform-overview")}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              fontSize: 12,
              fontWeight: 700,
              color: "#0085FF",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            Book a demo
          </button>
        </div>
      </div>
    </div>
  );
}

function ResourcesDropdown({ onNavigate }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "calc(100% + 12px)",
        left: "50%",
        transform: "translateX(-50%)",
        width: 760,
        maxWidth: "calc(100vw - 32px)",

        /* TRANSPARENT GLASS EFFECT */
        background: "rgba(255, 255, 255, 0.72)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",

        borderRadius: 16,

        /* NO SHADOW */
        boxShadow: "none",

        border: "1px solid rgba(255, 255, 255, 0.35)",

        padding: "20px 20px 16px",

        zIndex: 99999,

        display: "flex",
        flexWrap: "wrap",
        gap: 12,

        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      {/* LEARN */}
      <div
        style={{
          flex: "1 1 190px",
          minWidth: 0,
        }}
      >
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: "#888",
            letterSpacing: 1,
            textTransform: "uppercase",
            marginBottom: 10,
          }}
        >
          LEARN
        </div>

        {RESOURCES_ITEMS.learn.map((item) => (
          <button
            key={item.label}
            type="button"
            onClick={() => onNavigate(item.route)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              width: "100%",
              padding: "8px 10px",
              borderRadius: 8,
              border: "none",
              background: "transparent",
              cursor: "pointer",
              textAlign: "left",
              marginBottom: 2,
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "rgba(244, 248, 255, 0.30)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            <ResourceImageSlot item={item} />

            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#111",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#0085FF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#111";
                }}
              >
                {item.label}

                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 400,
                    color: "#777",
                    marginLeft: 4,
                  }}
                >
                  {item.sub}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* TOOLS & PROOF */}
      <div
        style={{
          flex: "1 1 300px",
          minWidth: 0,
        }}
      >
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: "#888",
            letterSpacing: 1,
            textTransform: "uppercase",
            marginBottom: 10,
          }}
        >
          TOOLS & PROOF
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: 14,
            rowGap: 2,
          }}
        >
          {RESOURCES_ITEMS.tools.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => item.route && onNavigate(item.route)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                width: "100%",
                minWidth: 0,
                padding: "8px 0",
                borderRadius: 8,
                border: "none",
                background: "transparent",
                cursor: item.route ? "pointer" : "default",
                textAlign: "left",
                marginBottom: 2,
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "rgba(244, 248, 255, 0.30)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              <ResourceImageSlot item={item} />

              <div style={{ minWidth: 0 }}>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#111",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    if (item.route) e.currentTarget.style.color = "#0085FF";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#111";
                  }}
                >
                  {item.label}

                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 400,
                      color: "#777",
                      marginLeft: 4,
                    }}
                  >
                    {item.sub}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* TRY IT NOW CARD */}
      <div style={{ flex: "0 1 170px", width: 170, minWidth: 140 }}>
        <div
          style={{
            background: "rgba(244, 248, 255, 0.35)",
            borderRadius: 12,
            padding: "14px 14px 12px",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            border: "1px solid rgba(255, 255, 255, 0.30)",
          }}
        >
          {/* IMAGE SLOT */}
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: "rgba(232, 240, 254, 0.45)",
              marginBottom: 10,
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            {/* Insert image here later */}
          </div>

          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: "#0085FF",
              textTransform: "uppercase",
              letterSpacing: 0.5,
              marginBottom: 4,
            }}
          >
            TRY IT NOW
          </div>

          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#111",
              lineHeight: "17px",
              marginBottom: 6,
            }}
          >
            Free GST invoice generator
          </div>

          <div
            style={{
              fontSize: 11,
              color: "#555",
              lineHeight: "15px",
              marginBottom: 10,
              flex: 1,
            }}
          >
            Make a compliant invoice in seconds — no signup needed.
          </div>

          <button
            type="button"
            onClick={() => onNavigate("/freetools")}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              fontSize: 12,
              fontWeight: 700,
              color: "#0085FF",
              cursor: "pointer",
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            Open the tool{" "}
            <span
              style={{
                color: "#1683F7",
                fontSize: 16,
                lineHeight: 1,
              }}
            >
              •
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);
  const [productOpen, setProductOpen] = useState(false);
  const [productPinned, setProductPinned] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [solutionsPinned, setSolutionsPinned] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [resourcesPinned, setResourcesPinned] = useState(false);

  const navigate = useNavigate();
  const closeTimer = useRef(null);

  const handleProductEnter = () => {
    clearTimeout(closeTimer.current);
    setResourcesOpen(false);
    setResourcesPinned(false);
    setProductOpen(true);
  };

  const handleProductLeave = () => {
    if (productPinned) return;

    closeTimer.current = setTimeout(() => {
      setProductOpen(false);
    }, 150);
  };

  const handleProductClick = () => {
    clearTimeout(closeTimer.current);

    setProductOpen((current) => {
      const next = !current;

      if (next) {
        setResourcesOpen(false);
        setResourcesPinned(false);
      }

      setProductPinned(next);

      return next;
    });
  };

  const handleSolutionsEnter = () => {
    clearTimeout(closeTimer.current);
    setProductOpen(false);
    setProductPinned(false);
    setSolutionsOpen(false);
    setSolutionsPinned(false);
    setResourcesOpen(false);
    setResourcesPinned(false);
    setSolutionsOpen(true);
  };

  const handleSolutionsLeave = () => {
    if (solutionsPinned) return;

    closeTimer.current = setTimeout(() => {
      setSolutionsOpen(false);
    }, 150);
  };

  const handleSolutionsClick = () => {
    clearTimeout(closeTimer.current);

    setSolutionsOpen((current) => {
      const next = !current;

      if (next) {
        setProductOpen(false);
        setProductPinned(false);
        setResourcesOpen(false);
        setResourcesPinned(false);
      }

      setSolutionsPinned(next);

      return next;
    });
  };

  const handleResourcesEnter = () => {
    clearTimeout(closeTimer.current);
    setProductOpen(false);
    setProductPinned(false);
    setSolutionsOpen(false);
    setSolutionsPinned(false);
    setResourcesOpen(true);
  };

  const handleResourcesLeave = () => {
    if (resourcesPinned) return;

    closeTimer.current = setTimeout(() => {
      setResourcesOpen(false);
    }, 150);
  };

  const handleResourcesClick = () => {
    clearTimeout(closeTimer.current);

    setResourcesOpen((current) => {
      const next = !current;

      if (next) {
        setProductOpen(false);
        setProductPinned(false);
        setSolutionsOpen(false);
        setSolutionsPinned(false);
      }

      setResourcesPinned(next);

      return next;
    });
  };

  const handleNavigate = (route) => {
    setProductOpen(false);
    setProductPinned(false);
    setResourcesOpen(false);
    setResourcesPinned(false);
    navigate(route);
  };

  const toggleMobileSection = (section) => {
    setMobileSection((current) => (current === section ? null : section));
  };

  const handleMobileToggle = () => {
    setMobileOpen((o) => {
      const next = !o;
      if (!next) setMobileSection(null);
      return next;
    });
  };

  return (
    <div className="relative  z-[100] w-full">
      <nav
        className="
          relative
          z-[100]
          mx-auto
          flex
          h-[56px]
          w-max
          
          max-w-[calc(100vw-32px)]
          items-center
          gap-[28px]
          rounded-full
          bg-black
          px-[12px]
          font-inter
          max-[900px]:gap-[18px]
          max-[900px]:px-[10px]
          max-[600px]:h-[52px]
          max-[400px]:h-[50px]
        "
      >
        {/* Logo */}
        <a
          href="/"
          className="flex w-[180px] shrink-0 items-center max-[1024px]:ml-[7px] max-[1024px]:w-auto"
        >
          <img
            src={LOGO_URL}
            alt="DataCircles"
            className="h-auto w-[180px] object-contain brightness-0 invert opacity-[0.22] max-[1024px]:w-[145px] max-[480px]:w-[130px] max-[400px]:w-[120px]"
            fetchPriority="high"
            decoding="async"
          />
        </a>

        {/* Desktop Nav */}
        <div className="flex h-full shrink-0 items-center justify-center gap-[28px] max-[1024px]:hidden">
          <a
            href="/"
            className="whitespace-nowrap text-[14px] font-normal leading-none text-white"
          >
            Home
          </a>

          {/* PRODUCT */}
          <div
            className="relative z-[9999]"
            onMouseEnter={handleProductEnter}
            onMouseLeave={handleProductLeave}
          >
            <button
              type="button"
              onClick={handleProductClick}
              className="flex items-center whitespace-nowrap text-[14px] font-normal leading-none text-white"
              style={{
                color: productOpen ? "#1683F7" : undefined,
              }}
            >
              <span>Product</span>
            </button>

            {productOpen && (
              <div
                className="absolute left-1/2 top-full z-[99999] -translate-x-1/2 pt-[12px]"
                onMouseEnter={handleProductEnter}
                onMouseLeave={handleProductLeave}
              >
                <ProductDropdown onNavigate={handleNavigate} />
              </div>
            )}
          </div>

          {/* SOLUTIONS */}
          <div
            className="relative z-[9999]"
            onMouseEnter={handleSolutionsEnter}
            onMouseLeave={handleSolutionsLeave}
          >
            <button
              type="button"
              onClick={handleSolutionsClick}
              className="flex items-center whitespace-nowrap text-[14px] font-normal leading-none text-white"
              style={{
                color: solutionsOpen ? "#0085FF" : undefined,
              }}
            >
              <span>Solutions</span>
            </button>

            {solutionsOpen && (
              <div
                className="absolute left-1/2 top-full z-[99999] -translate-x-1/2 pt-[12px]"
                onMouseEnter={handleSolutionsEnter}
                onMouseLeave={handleSolutionsLeave}
              >
                <SolutionDropdown onNavigate={handleNavigate} />
              </div>
            )}
          </div>

          {/* RESOURCES */}
          <div
            className="relative z-[9999]"
            onMouseEnter={handleResourcesEnter}
            onMouseLeave={handleResourcesLeave}
          >
            <button
              type="button"
              onClick={handleResourcesClick}
              className="flex items-center whitespace-nowrap text-[14px] font-normal leading-none text-white"
              style={{
                color: resourcesOpen ? "#1683F7" : undefined,
              }}
            >
              <span>Resources</span>
            </button>

            {resourcesOpen && (
              <div
                className="absolute left-1/2 top-full z-[99999] -translate-x-1/2 pt-[12px]"
                onMouseEnter={handleResourcesEnter}
                onMouseLeave={handleResourcesLeave}
              >
                <ResourcesDropdown onNavigate={handleNavigate} />
              </div>
            )}
          </div>

          <a
            href="/pricing"
            className="whitespace-nowrap text-[14px] font-normal leading-none text-white"
          >
            Pricing
          </a>
        </div>

        {/* Desktop Login + Book a demo */}
        <div className="flex shrink-0 items-center gap-[28px] max-[1024px]:hidden">
          <a
            href="/login"
            className="whitespace-nowrap text-[14px] font-normal leading-none text-white"
          >
            Login
          </a>

          <a
            href="/contact"
            className="flex h-[40px] w-[112px] items-center justify-center rounded-full bg-[#0085FF] text-[13px] font-semibold leading-none text-white transition hover:bg-[#087de4]"
          >
            Book a demo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
          className="ml-auto mr-[6px] hidden h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-[#1683F7] text-white transition hover:bg-[#087de4] max-[1024px]:flex max-[480px]:mr-[5px] max-[480px]:h-[40px] max-[480px]:w-[40px] max-[400px]:h-[38px] max-[400px]:w-[38px]"
        >
          {mobileOpen ? (
            <X size={20} strokeWidth={2} />
          ) : (
            <Menu size={21} strokeWidth={2} />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="absolute left-1/2 top-[64px] z-[9999] w-[calc(100%-24px)] max-w-[360px] -translate-x-1/2 overflow-hidden rounded-[20px] bg-black p-3 shadow-2xl min-[1025px]:hidden max-[400px]:top-[58px] max-[400px]:w-[calc(100%-16px)]">
          <div className="flex flex-col gap-1">
            <a
              href="/"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3 text-[14px] text-white transition hover:bg-white/10"
            >
              Home
            </a>

            {/* Product mobile items */}
            <div className="rounded-xl px-2">
              <button
                type="button"
                onClick={() => toggleMobileSection("product")}
                aria-expanded={mobileSection === "product"}
                className="flex w-full items-center justify-between rounded-xl px-2 py-3 text-left text-[14px] text-white transition hover:bg-white/10"
              >
                <span>Product</span>
                <ChevronDown
                  size={16}
                  strokeWidth={2}
                  className={`text-white/50 transition-transform duration-200 ${
                    mobileSection === "product" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileSection === "product" && (
                <div className="pb-2 pl-2">
                  {[...PRODUCT_ITEMS.billing, ...PRODUCT_ITEMS.payments].map(
                    (item) => (
                      <button
                        key={item.label}
                        type="button"
                        disabled={!item.route}
                        onClick={() => {
                          if (!item.route) return;
                          setMobileOpen(false);
                          setMobileSection(null);
                          navigate(item.route);
                        }}
                        className="block w-full rounded-lg px-2 py-2 text-left text-[13px] text-white transition hover:bg-white/10 disabled:cursor-default disabled:opacity-60"
                      >
                        {item.label}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>

            {/* Solutions mobile items */}
            <div className="rounded-xl px-2">
              <button
                type="button"
                onClick={() => toggleMobileSection("solutions")}
                aria-expanded={mobileSection === "solutions"}
                className="flex w-full items-center justify-between rounded-xl px-2 py-3 text-left text-[14px] text-white transition hover:bg-white/10"
              >
                <span>Solutions</span>
                <ChevronDown
                  size={16}
                  strokeWidth={2}
                  className={`text-white/50 transition-transform duration-200 ${
                    mobileSection === "solutions" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileSection === "solutions" && (
                <div className="pb-2 pl-2">
                  {SOLUTION_ITEMS.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      disabled={!item.route}
                      onClick={() => {
                        if (!item.route) return;
                        setMobileOpen(false);
                        setMobileSection(null);
                        navigate(item.route);
                      }}
                      className="block w-full rounded-lg px-2 py-2 text-left text-[13px] text-white transition hover:bg-white/10 disabled:cursor-default disabled:opacity-60"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Resources mobile items */}
            <div className="rounded-xl px-2">
              <button
                type="button"
                onClick={() => toggleMobileSection("resources")}
                aria-expanded={mobileSection === "resources"}
                className="flex w-full items-center justify-between rounded-xl px-2 py-3 text-left text-[14px] text-white transition hover:bg-white/10"
              >
                <span>Resources</span>
                <ChevronDown
                  size={16}
                  strokeWidth={2}
                  className={`text-white/50 transition-transform duration-200 ${
                    mobileSection === "resources" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileSection === "resources" && (
                <div className="pb-2 pl-2">
                  {[...RESOURCES_ITEMS.learn, ...RESOURCES_ITEMS.tools].map(
                    (item) => (
                      <button
                        key={item.label}
                        type="button"
                        disabled={!item.route}
                        onClick={() => {
                          if (!item.route) return;
                          setMobileOpen(false);
                          setMobileSection(null);
                          navigate(item.route);
                        }}
                        className="block w-full rounded-lg px-2 py-2 text-left text-[13px] text-white transition hover:bg-white/10 disabled:cursor-default disabled:opacity-60"
                      >
                        {item.label}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>

            <a
              href="/pricing"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3 text-[14px] text-white transition hover:bg-white/10"
            >
              Pricing
            </a>

            <a
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3 text-[14px] text-white transition hover:bg-white/10"
            >
              Login
            </a>

            <a
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex h-[44px] items-center justify-center rounded-full bg-[#1683F7] text-[14px] font-semibold text-white transition hover:bg-[#087de4]"
            >
              Book a demo
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
