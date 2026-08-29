import React, { useState } from "react";

const plans = [
  {
    name: "Starter",
    price: "₹199",
    features: [
      "Full CRM and invoicing",
      "Unlimited invoices",
      "1 pipeline",
      "24x7 Support",
      "Tasks and follow-ups",
      "GST-ready invoicing",
    ],
  },
  {
    name: "Growth",
    price: "₹399",
    features: [
      "Full CRM and invoicing",
      "Unlimited invoices",
      "Multiple pipelines",
      "24x7 Support",
      "Advanced deal tracking",
      "Team collaboration",
    ],
  },
  {
    name: "Business",
    price: "₹599",
    features: [
      "Full CRM and invoicing",
      "Unlimited invoices",
      "Multiple pipelines",
      "24x7 Support",
      "Advanced reporting",
      "Priority support",
    ],
  },
];

const iconPricingCheck =
  "https://www.figma.com/api/mcp/asset/dded33c0-9508-44ef-97d2-c45407d62b29.svg";

function PricingCard({ plan }) {
  return (
    <div
      className="
        group
        relative
        flex
        w-full
        flex-col
        rounded-[20px]
        border
        border-[rgba(0,0,0,0.12)]
        bg-white
        p-3
        pb-12
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#0085ff]
        hover:shadow-[0_15px_40px_rgba(0,133,255,0.10)]
      "
    >
      <div
        className="
          rounded-xl
          bg-[#fafafa]
          p-5
          transition-all
          duration-300
          group-hover:bg-[#f8fbff]
        "
      >
        <h3
          className="
            text-[20px]
            font-semibold
            text-[#1e1e1e]
          "
        >
          {plan.name}
        </h3>

        <div className="mt-4 flex items-end gap-1.5">
          <span
            className="
              text-[44px]
              font-medium
              leading-[1.2]
              tracking-[-0.72px]
              text-[#1e1e1e]
            "
          >
            {plan.price}
          </span>

          <span
            className="
              mb-1
              text-[16px]
              text-[#252525]
            "
          >
            /User/Month
          </span>
        </div>

        <button
          type="button"
          className="
            mt-4
            flex
            h-10
            w-full
            items-center
            justify-center
            rounded-lg
            bg-[#0085ff]
            text-[14px]
            font-semibold
            text-white
            transition-all
            duration-300
            hover:-translate-y-[1px]
            hover:bg-[#087ce8]
            hover:shadow-[0_7px_18px_rgba(0,133,255,0.2)]
          "
        >
          Get Started
        </button>
      </div>

      <div className="flex flex-col gap-4 px-5 pt-8">
        {plan.features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-2.5"
          >
            <img
              src={iconPricingCheck}
              alt=""
              className="h-6 w-6 shrink-0"
            />

            <span
              className="
                text-[16px]
                font-medium
                text-[#252525]
              "
            >
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CRMPrice() {
  const [billing, setBilling] = useState("Monthly");

  return (
    <section
      id="pricing"
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-white
        via-[#f7fbff]
        to-white
        px-6
        py-24
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          left-[5%]
          top-[25%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#0085ff]/10
          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[10%]
          right-[5%]
          h-[320px]
          w-[320px]
          rounded-full
          bg-[#0085ff]/10
          blur-[100px]
        "
      />

      <div
        className="
          relative
          mx-auto
          flex
          max-w-[1180px]
          flex-col
          items-center
        "
      >
        <div className="text-center">
          <h2
            className="
              mx-auto
              max-w-[550px]
              text-[32px]
              font-medium
              leading-[1.13]
              tracking-[-1.08px]
              text-[#2b2c30]
              md:text-[35px]
            "
          >
            One price for CRM and invoicing together.
          </h2>

          <p
            className="
              mt-3
              text-[15px]
              leading-6
              text-[#707173]
            "
          >
            Per user, per month, billed yearly. Plus 18% GST. No setup fee,
            no lock-in.
          </p>
        </div>

        {/* BILLING SWITCH */}
        <div
          className="
            mt-10
            flex
            items-center
            gap-1.5
            rounded-[10px]
            bg-white
            p-1.5
            shadow-[0_3px_4px_-1.5px_rgba(0,0,0,0.14),0_0_0_1px_rgba(0,0,0,0.06)]
          "
        >
          {["Monthly", "Yearly"].map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setBilling(item)}
              className={`
                rounded-lg
                px-3.5
                py-2
                text-[14px]
                transition-all
                duration-300
                ${
                  billing === item
                    ? "bg-[#0085ff] font-semibold text-white"
                    : "font-medium text-[#1e1e1e] hover:bg-[#f5f5f5]"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>

        {/* PRICING CARDS */}
        <div
          className="
            mt-10
            grid
            w-full
            grid-cols-1
            gap-6
            md:grid-cols-3
          "
        >
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              plan={plan}
            />
          ))}
        </div>

        <p
          className="
            mt-10
            text-center
            text-[15px]
            leading-6
            text-[#707173]
          "
        >
          Every plan starts with a 7-day free trial at full limits. No credit
          card needed.
        </p>
      </div>
    </section>
  );
}