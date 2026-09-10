import { useState } from "react";

const PLANS = [
  {
    name: "Starter",
    description: "For solo owners and small teams getting organised.",
    annualPrice: "₹199",
    monthlyPrice: "₹250",
    monthly: "₹250 if monthly",
    features: [
      "1 sales pipeline",
      "10 custom fields and 10 tags",
      "3 email templates",
      "1 website form",
      "10,000 records per user",
      "1 GB storage per user",
    ],
  },
  {
    name: "Growth",
    description: "For teams running more than one sales process.",
    annualPrice: "₹399",
    monthlyPrice: "₹450",
    monthly: "₹450 if monthly",
    popular: true,
    features: [
      "3 sales pipelines",
      "25 custom fields and 25 tags",
      "5 email templates",
      "3 website forms",
      "Rotten deal alerts, so nothing goes quietly cold",
      "25,000 records per user",
      "2 GB storage per user",
    ],
  },
  {
    name: "Business",
    description: "For larger teams that need room to work.",
    annualPrice: "₹599",
    monthlyPrice: "₹650",
    monthly: "₹650 if monthly",
    intro: "Everything in Growth, plus:",
    features: [
      "5 sales pipelines",
      "50 custom fields and 50 tags",
      "10 email templates",
      "5 website forms",
      "50,000 records per user",
      "5 GB storage per user",
    ],
  },
];

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState("annual");

  return (
    <div className="w-full bg-white">

      {/* ── Header ── */}
      <section className="flex h-auto w-full flex-col items-center px-4 pt-16 sm:px-6 md:pt-20">

        {/* Pill */}
        <div className="mx-auto flex h-[25px] w-fit items-center justify-center gap-2 rounded-full bg-[#EBE6E033] px-3">
          <span className="h-[7px] w-[7px] flex-shrink-0 rounded-full bg-[#0085FF]" />
          <span className="whitespace-nowrap font-inter text-[11px] font-normal text-black">
            Simple, honest pricing
          </span>
        </div>

        {/* Heading */}
        <div className="mt-6 flex w-full max-w-[700px] items-center justify-center text-center">
          <h1 className="font-inter text-[32px] font-semibold leading-[1.1] text-black sm:text-[40px] md:text-[48px]">
            One price for CRM and invoicing together.
          </h1>
        </div>

        {/* Description */}
        <div className="mt-3 flex w-full max-w-[635px] items-center justify-center text-center">
          <p className="font-inter text-[14px] font-normal leading-[20px] text-black/60 sm:text-[15px] md:text-[16px]">
            Start free for 7 days with everything unlocked. No credit card,<br />
            no setup fee, no lock-in.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="mx-auto mt-4 flex h-[38px] w-fit items-center gap-1 rounded-full border border-[#C9D3CE] bg-[#EEF2F0] p-1">
          <button
            type="button"
            onClick={() => setBillingPeriod("monthly")}
            className={`flex h-[30px] cursor-pointer items-center justify-center rounded-full px-4 font-inter text-[12px] font-semibold transition-all duration-200 active:scale-95 ${
              billingPeriod === "monthly"
                ? "bg-white text-[#0085FF] shadow-sm"
                : "text-[#52605A] hover:bg-white/60 hover:text-[#0085FF]"
            }`}
          >
            Monthly
          </button>

          <button
            type="button"
            onClick={() => setBillingPeriod("annual")}
            className={`flex h-[30px] cursor-pointer items-center justify-center gap-2 rounded-full px-4 font-inter text-[12px] font-semibold transition-all duration-200 active:scale-95 ${
              billingPeriod === "annual"
                ? "bg-white text-[#0085FF] shadow-sm"
                : "text-[#52605A] hover:bg-white/60 hover:text-[#0085FF]"
            }`}
          >
            <span>Annual</span>
            <span className="whitespace-nowrap text-[11px]">save up to 20%</span>
          </button>
        </div>

        {/* Note */}
        <div className="mt-5 flex w-full max-w-[420px] items-center justify-center text-center">
          <p className="font-inter text-[11px] font-normal text-black/50 sm:text-[12px]">
            All prices are per user, per month, and exclude 18% GST.
          </p>
        </div>
      </section>

      {/* ── Plans ── */}
      <section className="mx-auto mt-4 w-[95%] rounded-[20px] bg-white">
        <div className="mx-auto w-[90%] py-10 sm:py-12 md:py-14">

          <div className="mt-7 grid grid-cols-1 items-start gap-4 lg:grid-cols-3">
            {PLANS.map((plan, index) => (
              <div
                key={index}
                className="relative rounded-[14px] border border-[#C9D3CE] bg-white px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0085FF] hover:shadow-lg"
              >
                {plan.popular && (
                  <div className="absolute -top-2.5 left-5 rounded-full bg-[#0085FF] px-3 py-1 font-inter text-[9px] font-semibold uppercase tracking-[0.4px] text-white">
                    Most popular
                  </div>
                )}

                <h3 className="font-inter text-[17px] font-semibold text-[#37413D]">
                  {plan.name}
                </h3>

                <p className="mt-1 font-inter text-[13px] leading-[1.6] text-[#8A9691]">
                  {plan.description}
                </p>

                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-inter text-[34px] font-semibold leading-none tracking-[-1px] text-black">
                    {billingPeriod === "annual" ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="font-inter text-[12px] text-[#8A9691]">/ user / month</span>
                </div>

                <p className="mt-2 font-inter text-[12px] font-semibold text-[#0085FF]">
                  {billingPeriod === "annual"
                    ? `Billed annually · ${plan.monthly}`
                    : "Billed monthly"}
                </p>

                <p className="mt-1 font-inter text-[11px] text-[#8A9691]">+ 18% GST</p>

                <button
                  type="button"
                  onClick={() => window.location.href = "/pricing"}
                  className="mt-4 flex h-[36px] w-full items-center justify-center rounded-full border border-[#0085FF] bg-white px-4 font-inter text-[12px] font-semibold text-[#0085FF] transition-all duration-200 hover:bg-[#0085FF] hover:text-white"
                >
                  Start free for 7 days
                </button>

                <div className="my-5 h-px w-full bg-[#E5EAE7]" />

                {plan.intro && (
                  <p className="mb-3 font-inter text-[12px] font-semibold text-[#37413D]">
                    {plan.intro}
                  </p>
                )}

                <div className="space-y-2.5">
                  {plan.features.map((feature, i) => (
                    <p key={i} className="font-inter text-[13px] leading-[1.5] text-[#52605A]">
                      {feature}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-3 text-center font-inter text-[11px] text-[#8A9691]">
            Start with one user. Add your team whenever you're ready.
          </p>
        </div>
      </section>

      {/* ── Per-user story ── */}
      <section className="mx-auto w-[80%] rounded-[20px] bg-[#F1FAF6]">
        <div className="mx-auto w-[90%] py-5">
          <div className="mt-5 flex flex-col gap-5 rounded-[14px] border border-[#C9D3CE] bg-white px-5 py-5 sm:px-6 md:flex-row md:items-center md:justify-between md:px-5">
            <div className="flex items-center gap-5">
              <div className="h-[44px] w-[44px] flex-shrink-0 overflow-hidden rounded-[12px] bg-[#E5EDF5]">
                <img src="/images/per-user.png" alt="Per user" className="h-full w-full object-cover" />
              </div>
              <div>
                <h3 className="font-inter text-[16px] font-semibold leading-[1.3] text-[#37413D] sm:text-[17px]">
                  Your limits grow with your team.
                </h3>
                <p className="mt-1 font-inter text-[13px] leading-[1.65] text-[#52605A] sm:max-w-[560px] sm:text-[14px]">
                  Records and storage are counted per user, not per company. So a team of four on Growth gets 1,00,000 records between them, not 25,000. Every person you add brings their own room with them.
                </p>
              </div>
            </div>
            <div className="flex h-[38px] w-fit flex-shrink-0 items-center rounded-[10px] bg-[#F1FAF6] px-4">
              <span className="font-inter text-[12px] font-semibold text-[#0085FF]">
                4 users × 25,000 = 1,00,000 records
              </span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
