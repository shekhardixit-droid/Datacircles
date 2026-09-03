import Navbar from "../components/Navbar";

export default function Pricing() {
  return (
    <div className="min-h-screen w-full bg-white text-[#37413D]">
      <section className="relative mt-5 w-full">
        <div className="relative z-20">
          <Navbar />
        </div>
      </section>

      <main className="w-full">

      {/* Hero / About Section */}
      <section className="flex h-auto w-full flex-col items-center mt-12 md:mt-16 lg:mt-20 px-4 sm:px-6">
        {/* Top Pill */}
<div className="mx-auto flex h-[25px] w-fit items-center justify-center gap-2 rounded-full bg-[#EBE6E033] px-3">
  <span className="h-[7px] w-[7px] flex-shrink-0 rounded-full bg-[#0085FF]" />

  <span className="whitespace-nowrap font-inter text-[11px] font-normal text-black">
    Simple, honest pricing
  </span>
</div>

        {/* Main Text */}
        <div className="mt-6 flex h-auto whitespace-nowrap w-full max-w-[700px] items-center justify-center text-center">
          <h1 className="font-inter text-[32px] font-semibold leading-[1.1] text-black sm:text-[40px] md:text-[48px]">
            One price for CRM and invoicing together.
           
          </h1>
        </div>

        {/* Description */}
        <div className="mt-3 flex h-auto w-full max-w-[635px] items-center justify-center text-center">
          <p className="font-inter text-[14px] font-normal leading-[20px] text-black/60 sm:text-[15px] md:text-[16px]">
          Start free for 7 days with everything unlocked. No credit card,<br/> no setup fee, no lock-in.
          </p>
        </div>

        {/* Billing Toggle */}
<div className="mx-auto mt-4 flex h-[38px] w-fit items-center rounded-full border border-[#C9D3CE] bg-[#EEF2F0] p-1">
  <button
    type="button"
    className="flex h-[30px] items-center justify-center rounded-full px-4 font-inter text-[12px] font-semibold text-[#52605A] transition-all duration-200 hover:text-[#0085FF]"
  >
    Monthly
  </button>

  <button
    type="button"
    className="flex h-[30px] items-center justify-center gap-2 rounded-full bg-white px-4 font-inter text-[12px] font-semibold text-[#0085FF] shadow-sm transition-all duration-200 hover:bg-[#0085FF] hover:text-white"
  >
    <span>Annual</span>
    <span className="whitespace-nowrap text-[11px]">
      save up to 20%
    </span>
  </button>
</div>
        {/* Bottom Text */}
        <div className="mt-5 flex h-auto w-full max-w-[420px] items-center justify-center text-center">
          <p className="font-inter text-[11px] font-normal text-black/50 sm:text-[12px]">
           All prices are per user, per month, and exclude 18% GST.
          </p>
        </div>
      </section>
        
    {/* =========================
    SECTION 02 — PRICING PLANS
========================== */}
<section className="mx-auto mt-4 w-[95%] rounded-[20px] bg-white ">
  <div className="mx-auto w-[90%] py-10 sm:py-12 md:py-14">


    {/* Pricing Cards */}
    <div className="mt-7 grid grid-cols-1 items-start gap-4 lg:grid-cols-3">

      {[
        {
          name: "Starter",
          description:
            "For solo owners and small teams getting organised.",
          price: "₹199",
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
          description:
            "For teams running more than one sales process.",
          price: "₹399",
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
          description:
            "For larger teams that need room to work.",
          price: "₹599",
          monthly: "₹650 if monthly",
          features: [
            "5 sales pipelines",
            "50 custom fields and 50 tags",
            "10 email templates",
            "5 website forms",
            "50,000 records per user",
            "5 GB storage per user",
          ],
          intro: "Everything in Growth, plus:",
        },
      ].map((plan, index) => (
        <div
          key={index}
          className={`relative rounded-[14px] bg-white px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
            plan.popular
              ? "border border-[#C9D3CE] hover:border-[#0085FF]"
              : "border border-[#C9D3CE] hover:border-[#0085FF]"
          }`}
        >

          {/* Popular Badge */}
          {plan.popular && (
            <div className="absolute -top-2.5 left-5 rounded-full bg-[#0085FF] px-3 py-1 font-inter text-[9px] font-semibold uppercase tracking-[0.4px] text-white">
              Most popular
            </div>
          )}

          {/* Plan Name */}
          <h3 className="font-inter text-[17px] font-semibold text-[#37413D]">
            {plan.name}
          </h3>

          {/* Description */}
          <p className="mt-1 font-inter text-[13px] leading-[1.6] text-[#8A9691]">
            {plan.description}
          </p>

          {/* Price */}
          <div className="mt-5 flex items-baseline gap-1">
            <span className="font-inter text-[34px] font-semibold leading-none tracking-[-1px] text-black">
              {plan.price}
            </span>

            <span className="font-inter text-[12px] text-[#8A9691]">
              / user / month
            </span>
          </div>

          {/* Billing */}
          <p className="mt-2 font-inter text-[12px] font-semibold text-[#0085FF]">
            Billed annually · {plan.monthly}
          </p>

          <p className="mt-1 font-inter text-[11px] text-[#8A9691]">
            + 18% GST
          </p>

          {/* CTA */}
          <button
            type="button"
            className={`mt-4 flex h-[36px] w-full items-center justify-center rounded-full border px-4 font-inter text-[12px] font-semibold transition-all duration-200 ${
              plan.popular
                ? "border-[#0085FF] bg-white text-[#0085FF] hover:bg-[#0085FF] hover:text-white"
                : "border-[#0085FF] bg-white text-[#0085FF] hover:bg-[#0085FF] hover:text-white"
            }`}
          >
            Start free for 7 days
          </button>

          {/* Divider */}
          <div className="my-5 h-px w-full bg-[#E5EAE7]" />

          {/* Intro */}
          {plan.intro && (
            <p className="mb-3 font-inter text-[12px] font-semibold text-[#37413D]">
              {plan.intro}
            </p>
          )}

          {/* Features */}
          <div className="space-y-2.5">
            {plan.features.map((feature, featureIndex) => {
              const parts = feature.split(", ");

              return (
                <p
                  key={featureIndex}
                  className="font-inter text-[13px] leading-[1.5] text-[#52605A]"
                >
                  {feature}
                </p>
              );
            })}
          </div>

        </div>
      ))}

    </div>

    {/* Bottom Note */}
    <p className="mt-3 text-center font-inter text-[11px] text-[#8A9691]">
      Start with one user. Add your team whenever you're ready.
    </p>

  </div>
</section>

{/* =========================
    SECTION 03 — PER-USER STORY
========================== */}
<section className="mx-auto w-[80%] rounded-[20px] bg-[#F1FAF6]">
  <div className="mx-auto w-[90%] py-5">

    

    {/* Content Card */}
    <div className="mt-5 flex flex-col gap-5 rounded-[14px] border border-[#C9D3CE] bg-white px-5 py-5 sm:px-6 md:flex-row md:items-center md:justify-between md:px-5">

      {/* Left Content */}
      <div className="flex items-center gap-5">

       {/* Icon */}
<div className="h-[44px] w-[44px] flex-shrink-0 overflow-hidden rounded-[12px] bg-[#E5EDF5]">
  <img
    src="/images/per-user.png"
    alt="Per user"
    className="h-full w-full object-cover"
  />
</div>

        {/* Text */}
        <div>
          <h3 className="font-inter text-[16px] font-semibold leading-[1.3] text-[#37413D] sm:text-[17px]">
            Your limits grow with your team.
          </h3>

          <p className="mt-1 font-inter text-[13px] leading-[1.65] text-[#52605A] sm:max-w-[560px] sm:text-[14px]">
            Records and storage are counted per user, not per company. So a team
            of four on Growth gets 1,00,000 records between them, not 25,000.
            Every person you add brings their own room with them.
          </p>
        </div>
      </div>

      {/* Highlight */}
      <div className="flex h-[38px] w-fit flex-shrink-0 items-center rounded-[10px] bg-[#F1FAF6] px-4">
        <span className="font-inter text-[12px] font-semibold text-[#0085FF]">
          4 users × 25,000 = 1,00,000 records
        </span>
      </div>

    </div>
  </div>
</section>

{/* Container 20 */}
<div className="mx-auto mt-15 flex w-[60%] flex-col items-center justify-center rounded-[14px]  bg-white px-5 py-6 text-center sm:py-7">

  {/* Heading */}
  <h3 className="font-inter text-[50px] font-semibold tracking-[=0.4] leading-[1.3] text-black">
    Larger team, or something<br/> specific in mind?
  </h3>

  {/* Description */}
  <p className="mt-1.5 font-inter text-[13px] leading-[1.6] text-[#52605A] sm:text-[14px]">
    We'll put together a plan that fits how your business actually runs.
  </p>

  {/* Button */}
<button
  type="button"
  className="mt-4 flex h-[40px] w-fit items-center justify-center rounded-full border border-[#0085FF] bg-white px-6 font-inter text-[13px] font-semibold text-[#0085FF] transition-all duration-200 hover:bg-[#0085FF] hover:text-white hover:shadow-[0_4px_12px_rgba(0,133,255,0.15)]"
>
  Talk to us
</button>

</div>

{/* =========================
    SECTION 05 — INCLUDED IN EVERY PLAN
========================== */}
<section className="mx-auto mt-15 w-[95%] rounded-[20px] bg-[#F6F9F7]">
  <div className="mx-auto w-[90%] py-10 sm:py-12 md:py-14">

    {/* Heading */}
    <div className="mt-5 text-center">
      <h2 className="font-inter text-[28px] font-semibold leading-[1.2] tracking-[-0.8px] text-black sm:text-[32px]">
        Even the ₹250 plan isn't a cut-down version.
      </h2>

      <p className="mt-3 font-inter text-[14px] leading-[1.6] text-[#52605A] sm:text-[15px]">
        These are on every plan, including the cheapest one.
      </p>
    </div>

    {/* Feature Cards */}
    <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">

      {[
        {
          title: "BILLING AND INVOICING",
          points: [
            <>
              <span className="font-semibold text-[#37413D]">
                Unlimited invoices.
              </span>{" "}
              No caps, on any plan.
            </>,
            "Quotations, pro-forma, sales invoices and credit notes",
            "Expense and indirect income documents",
            "Shipping labels and delivery challans",
            "Triplicate copies for customer, transporter and supplier",
          ],
        },
        {
          title: "CRM",
          points: [
            "Contacts, companies and vendors",
            "Contact lifecycle stages you can name yourself",
            "Activity timeline on every record",
            "Kanban views for records, deals and vendors",
            "Tasks, meetings, notes, calendar and call logs",
            "Two-way email sync with Google and Outlook",
            "Deal management and visual sales pipelines",
          ],
        },
        {
          title: "EVERYTHING ELSE",
          points: [
            "Dashboards and detailed reports",
            "CSV and Excel import and export",
            "Rename modules to match the words your team already uses",
            <>
              <span className="font-semibold text-[#37413D]">
                24×7 chat, email and phone support
              </span>
            </>,
            <>
              <span className="font-semibold text-[#37413D]">
                Personal onboarding with a dedicated account manager
              </span>
            </>,
          ],
        },
      ].map((card, index) => (
        <div
          key={index}
          className="min-h-[350px] rounded-[14px] border border-[#C9D3CE] bg-white px-5 py-5 transition-all duration-200 hover:-translate-y-1 hover:border-[#0085FF] hover:shadow-lg sm:px-6"
        >
          {/* Card Title */}
          <h3 className="font-inter text-[12px] font-semibold tracking-[0.3px] text-[#0085FF]">
            {card.title}
          </h3>

          {/* Points */}
          <div className="mt-4 space-y-3">
            {card.points.map((point, pointIndex) => (
              <div
                key={pointIndex}
                className="flex items-start gap-2"
              >
                {/* Tick Icon */}
                <span className="mt-[3px] flex h-[16px] w-[16px] flex-shrink-0 items-center justify-center rounded-full bg-[#E5EDF5] text-[#0085FF]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="h-[10px] w-[10px]"
                  >
                    <path
                      d="M4 10.5L8 14L16 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                {/* Point */}
                <p className="font-inter text-[13px] leading-[1.55] text-[#52605A]">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}

    </div>
  </div>
</section>

{/* =========================
    SECTION 06 — ADD-ONS
========================== */}
<section className="mx-auto w-[95%] rounded-[20px] bg-white">
  <div className="mx-auto w-[90%] py-10 sm:py-12 md:py-14">

    

    {/* Heading */}
    <h2 className="mt-5 font-inter text-[26px] font-semibold leading-[1.2] tracking-[-0.6px] text-black sm:text-[30px]">
      Need more room? Add it on.
    </h2>

    {/* Description */}
    <p className="mt-3 max-w-[590px] font-inter text-[13px] leading-[1.7] text-[#52605A] sm:text-[14px]">
      If you hit a limit, top it up without moving to a higher plan. Pay for
      the extra you need, nothing more.
    </p>

    {/* Add-on Cards */}
    <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-3">

      {[
        {
          title: "Extra records",
          description:
            "Top up your record limit when your database outgrows your plan.",
        },
        {
          title: "Extra storage",
          description:
            "More space for documents and attachments.",
        },
        {
          title: "More of what you use",
          description:
            "Pipelines, custom fields, tags and forms, as you need them.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="min-h-[92px] rounded-[12px] border border-dashed border-[#C9D3CE] bg-white px-4 py-4 transition-all duration-200 hover:-translate-y-1 hover:border-[#0085FF] hover:bg-[#F6F9F7] hover:shadow-sm sm:px-5"
        >
          <h3 className="font-inter text-[14px] font-semibold text-[#37413D] transition-colors duration-200 group-hover:text-[#0085FF]">
            {item.title}
          </h3>

          <p className="mt-1 font-inter text-[12px] leading-[1.6] text-[#8A9691] sm:text-[13px]">
            {item.description}
          </p>
        </div>
      ))}

    </div>

    {/* Bottom Note */}
    <p className="mt-3 font-inter text-[11px] leading-[1.6] text-[#8A9691]">
      Add-on pricing is being finalised. Talk to us if you're close to a limit.
    </p>

  </div>
</section>

{/* =========================
    SECTION 07 — COMPARISON TABLE
========================== */}
<section className="mx-auto w-[95%] rounded-[20px] bg-[#F6F9F7]">
  <div className="mx-auto w-[90%] py-6">

   
    {/* Heading */}
    <h2 className="mt-5 font-inter text-[28px] font-semibold leading-[1.2] tracking-[-0.7px] text-black sm:text-[32px]">
      Compare every plan, line by line.
    </h2>

    {/* Table */}
    <div className="mt-5 w-full overflow-x-auto rounded-[14px] border border-[#C9D3CE] bg-white">
      <table className="w-full min-w-[760px] border-collapse font-inter">

        {/* Header */}
        <thead>
          <tr className="border-b border-[#C9D3CE] bg-[#F1FAF6]">
            <th className="sticky left-0 z-10 w-[50%] px-4 py-3 text-left text-[12px] font-semibold text-[#37413D] sm:px-5">
              Feature
            </th>

            <th className="w-[16.66%] px-3 py-3 text-center text-[12px] font-semibold text-[#37413D]">
              Starter
            </th>

            <th className="w-[16.66%] bg-[#E5F3EC] px-3 py-3 text-center text-[12px] font-semibold text-[#0085FF]">
              Growth
            </th>

            <th className="w-[16.66%] px-3 py-3 text-center text-[12px] font-semibold text-[#37413D]">
              Business
            </th>
          </tr>
        </thead>

        <tbody>

          {/* Contact & Company Management */}
          <tr className="bg-[#F6F9F7]">
            <td
              colSpan="4"
              className="px-4 py-2 font-inter text-[10px] font-semibold uppercase tracking-[0.5px] text-[#0085FF] sm:px-5"
            >
              Contact & Company Management
            </td>
          </tr>

          {[
            ["Contact management", true, true, true],
            ["Companies and accounts", true, true, true],
            ["Contact lifecycle stages", true, true, true],
            ["Activity timeline", true, true, true],
            ["Kanban view for records", true, true, true],
            ["Records (per user)", "10,000", "25,000", "50,000"],
          ].map((row, index) => (
            <tr key={index} className="border-b border-[#E5EAE7]">
              {row.map((value, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`px-4 py-2.5 text-[12px] ${
                    cellIndex === 0
                      ? "text-left text-[#52605A]"
                      : "text-center text-[#52605A]"
                  }`}
                >
                  {cellIndex > 0 && value === true ? (
                    <span className="font-semibold text-[#0085FF]">✓</span>
                  ) : (
                    value
                  )}
                </td>
              ))}
            </tr>
          ))}

          {/* Activities & Collaboration */}
          <tr className="bg-[#F6F9F7]">
            <td
              colSpan="4"
              className="px-4 py-2 font-inter text-[10px] font-semibold uppercase tracking-[0.5px] text-[#0085FF] sm:px-5"
            >
              Activities & Collaboration
            </td>
          </tr>

          {[
            ["Tasks, meetings, notes, calendar, call logs", true, true, true],
            ["Two-way email sync (Google, Outlook)", true, true, true],
            ["Email templates", "3", "5", "10"],
          ].map((row, index) => (
            <tr key={index} className="border-b border-[#E5EAE7]">
              {row.map((value, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`px-4 py-2.5 text-[12px] ${
                    cellIndex === 0
                      ? "text-left text-[#52605A]"
                      : "text-center text-[#52605A]"
                  }`}
                >
                  {cellIndex > 0 && value === true ? (
                    <span className="font-semibold text-[#0085FF]">✓</span>
                  ) : (
                    value
                  )}
                </td>
              ))}
            </tr>
          ))}

          {/* CRM Customization */}
          <tr className="bg-[#F6F9F7]">
            <td
              colSpan="4"
              className="px-4 py-2 font-inter text-[10px] font-semibold uppercase tracking-[0.5px] text-[#0085FF] sm:px-5"
            >
              CRM Customization
            </td>
          </tr>

          {[
            ["Rename modules", true, true, true],
            ["Custom fields", "10", "25", "50"],
            ["Unique fields", true, true, true],
            ["Record tags", "10", "25", "50"],
          ].map((row, index) => (
            <tr key={index} className="border-b border-[#E5EAE7]">
              {row.map((value, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`px-4 py-2.5 text-[12px] ${
                    cellIndex === 0
                      ? "text-left text-[#52605A]"
                      : "text-center text-[#52605A]"
                  }`}
                >
                  {cellIndex > 0 && value === true ? (
                    <span className="font-semibold text-[#0085FF]">✓</span>
                  ) : (
                    value
                  )}
                </td>
              ))}
            </tr>
          ))}

          {/* Sales Pipeline Management */}
          <tr className="bg-[#F6F9F7]">
            <td
              colSpan="4"
              className="px-4 py-2 font-inter text-[10px] font-semibold uppercase tracking-[0.5px] text-[#0085FF] sm:px-5"
            >
              Sales Pipeline Management
            </td>
          </tr>

          {[
            ["Deal management", true, true, true],
            ["Visual sales pipelines", true, true, true],
            ["Rotten deal alerts", "—", true, true],
            ["Multiple sales pipelines", "1", "3", "5"],
          ].map((row, index) => (
            <tr key={index} className="border-b border-[#E5EAE7]">
              {row.map((value, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`px-4 py-2.5 text-[12px] ${
                    cellIndex === 0
                      ? "text-left text-[#52605A]"
                      : "text-center text-[#52605A]"
                  }`}
                >
                  {cellIndex > 0 && value === true ? (
                    <span className="font-semibold text-[#0085FF]">✓</span>
                  ) : (
                    value
                  )}
                </td>
              ))}
            </tr>
          ))}

          {/* Invoice & Accounting */}
          <tr className="bg-[#F6F9F7]">
            <td
              colSpan="4"
              className="px-4 py-2 font-inter text-[10px] font-semibold uppercase tracking-[0.5px] text-[#0085FF] sm:px-5"
            >
              Invoice & Accounting
            </td>
          </tr>

          {[
            ["Quotations, pro-forma, invoices, credit notes", true, true, true],
            ["Expense and indirect income documents", true, true, true],
            ["Shipping labels and delivery challans", true, true, true],
            ["Triplicate copies", true, true, true],
            ["Invoices", "Unlimited", "Unlimited", "Unlimited"],
          ].map((row, index) => (
            <tr key={index} className="border-b border-[#E5EAE7]">
              {row.map((value, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`px-4 py-2.5 text-[12px] ${
                    cellIndex === 0
                      ? "text-left text-[#52605A]"
                      : "text-center text-[#52605A]"
                  }`}
                >
                  {cellIndex > 0 && value === true ? (
                    <span className="font-semibold text-[#0085FF]">✓</span>
                  ) : (
                    value
                  )}
                </td>
              ))}
            </tr>
          ))}

          {/* Vendor Management */}
          <tr className="bg-[#F6F9F7]">
            <td
              colSpan="4"
              className="px-4 py-2 font-inter text-[10px] font-semibold uppercase tracking-[0.5px] text-[#0085FF] sm:px-5"
            >
              Vendor Management
            </td>
          </tr>

          {[
            ["Vendor management", true, true, true],
            ["Kanban view for vendors", true, true, true],
          ].map((row, index) => (
            <tr key={index} className="border-b border-[#E5EAE7]">
              {row.map((value, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`px-4 py-2.5 text-[12px] ${
                    cellIndex === 0
                      ? "text-left text-[#52605A]"
                      : "text-center text-[#52605A]"
                  }`}
                >
                  {cellIndex > 0 && value === true ? (
                    <span className="font-semibold text-[#0085FF]">✓</span>
                  ) : (
                    value
                  )}
                </td>
              ))}
            </tr>
          ))}

          {/* Reports & Dashboards */}
          <tr className="bg-[#F6F9F7]">
            <td
              colSpan="4"
              className="px-4 py-2 font-inter text-[10px] font-semibold uppercase tracking-[0.5px] text-[#0085FF] sm:px-5"
            >
              Reports & Dashboards
            </td>
          </tr>

          {[
            ["Dashboard", true, true, true],
            ["Reports", true, true, true],
          ].map((row, index) => (
            <tr key={index} className="border-b border-[#E5EAE7]">
              {row.map((value, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`px-4 py-2.5 text-[12px] ${
                    cellIndex === 0
                      ? "text-left text-[#52605A]"
                      : "text-center text-[#52605A]"
                  }`}
                >
                  {cellIndex > 0 && value === true ? (
                    <span className="font-semibold text-[#0085FF]">✓</span>
                  ) : (
                    value
                  )}
                </td>
              ))}
            </tr>
          ))}

          {/* Data Administration */}
          <tr className="bg-[#F6F9F7]">
            <td
              colSpan="4"
              className="px-4 py-2 font-inter text-[10px] font-semibold uppercase tracking-[0.5px] text-[#0085FF] sm:px-5"
            >
              Data Administration
            </td>
          </tr>

          {[
            ["CSV and Excel import and export", true, true, true],
            ["File storage (per user)", "1 GB", "2 GB", "5 GB"],
          ].map((row, index) => (
            <tr key={index} className="border-b border-[#E5EAE7]">
              {row.map((value, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`px-4 py-2.5 text-[12px] ${
                    cellIndex === 0
                      ? "text-left text-[#52605A]"
                      : "text-center text-[#52605A]"
                  }`}
                >
                  {cellIndex > 0 && value === true ? (
                    <span className="font-semibold text-[#0085FF]">✓</span>
                  ) : (
                    value
                  )}
                </td>
              ))}
            </tr>
          ))}

          {/* Website Integration */}
          <tr className="bg-[#F6F9F7]">
            <td
              colSpan="4"
              className="px-4 py-2 font-inter text-[10px] font-semibold uppercase tracking-[0.5px] text-[#0085FF] sm:px-5"
            >
              Website Integration
            </td>
          </tr>

          <tr className="border-b border-[#E5EAE7]">
            <td className="px-4 py-2.5 text-left text-[12px] text-[#52605A]">
              Website forms
            </td>
            <td className="px-3 py-2.5 text-center text-[12px] text-[#52605A]">
              1
            </td>
            <td className="px-3 py-2.5 text-center text-[12px] text-[#52605A]">
              3
            </td>
            <td className="px-3 py-2.5 text-center text-[12px] text-[#52605A]">
              5
            </td>
          </tr>

          {/* Support & Onboarding */}
          <tr className="bg-[#F6F9F7]">
            <td
              colSpan="4"
              className="px-4 py-2 font-inter text-[10px] font-semibold uppercase tracking-[0.5px] text-[#0085FF] sm:px-5"
            >
              Support & Onboarding
            </td>
          </tr>

          {[
            ["24×7 chat, email and phone support", true, true, true],
            ["Personal onboarding with an account manager", true, true, true],
          ].map((row, index) => (
            <tr key={index} className="border-b border-[#E5EAE7] last:border-b-0">
              {row.map((value, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`px-4 py-2.5 text-[12px] ${
                    cellIndex === 0
                      ? "text-left text-[#52605A]"
                      : "text-center text-[#52605A]"
                  }`}
                >
                  {cellIndex > 0 && value === true ? (
                    <span className="font-semibold text-[#0085FF]">✓</span>
                  ) : (
                    value
                  )}
                </td>
              ))}
            </tr>
          ))}

        </tbody>
      </table>
    </div>

    {/* Note */}
    <p className="mt-3 font-inter text-[11px] leading-[1.6] text-[#8A9691]">
      Sales pipelines, custom fields, tags, email templates and website forms
      are counted per organisation. Records and storage are counted per user.
    </p>

  </div>
</section>

{/* =========================
    SECTION 08 — SWITCHING
========================== */}
<section className="mx-auto mt-10 w-[80%] rounded-[20px] bg-[#F1FAF6]">
  <div className="mx-auto w-[95%] py-5">

    
    {/* Main Card */}
    <div className="mt-5 flex flex-col gap-5 rounded-[14px] border border-[#C9D3CE] bg-white px-5 py-5 sm:px-6 md:flex-row md:items-center md:justify-between">

      {/* Content */}
      <div>
        <h3 className="font-inter text-[16px] font-semibold leading-[1.3] text-[#37413D] sm:text-[17px]">
          Already on Excel or Tally? Bring your data across.
        </h3>

        <p className="mt-1.5 max-w-[650px] font-inter text-[13px] leading-[1.6] text-[#52605A] sm:text-[14px]">
          Export what you have, map your columns to ours, and import. Our team
          will sit with you and walk you through it, so nothing gets lost on
          the way in.
        </p>
      </div>

      {/* Button */}
      <button
        type="button"
        className="flex h-[41px] w-fit flex-shrink-0 items-center justify-center rounded-full border border-[#0085FF] bg-white px-5 font-inter text-[13px] font-semibold text-[#0085FF] transition-all duration-200 hover:bg-[#0085FF] hover:text-white hover:shadow-[0_4px_12px_rgba(0,133,255,0.15)]"
      >
        Talk to us about moving over
      </button>

    </div>
  </div>
</section>

{/* =========================
    SECTION 09 — TRUST STRIP
========================== */}
<section className="mx-auto w-[95%] rounded-[20px] bg-white">
  <div className="mx-auto w-[90%] py-10 sm:py-12 md:py-14">


    {/* Stats */}
    <div className="mx-auto mt-5 grid max-w-[690px] grid-cols-1 gap-3 sm:grid-cols-3">

      {[
        {
          number: "100+",
          text: "businesses run on DataCircles",
        },
        {
          number: "1,00,000+",
          text: "invoices raised",
        },
        {
          number: "24×7",
          text: "support on every plan",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="flex min-h-[94px] flex-col items-center justify-center rounded-[12px] border border-[#C9D3CE] bg-white px-4 text-center transition-all duration-200 hover:-translate-y-1 hover:border-[#0085FF] hover:shadow-md"
        >
          <span className="font-inter text-[27px] font-semibold leading-none tracking-[-0.5px] text-[#0085FF]">
            {item.number}
          </span>

          <span className="mt-1.5 font-inter text-[12px] text-[#8A9691]">
            {item.text}
          </span>
        </div>
      ))}

    </div>

    {/* Bottom Text */}
    <p className="mt-5 text-center font-inter text-[13px] font-medium text-[#52605A]">
      Built in Mumbai, bootstrapped, and answering the phone since 2025.
    </p>

  </div>
</section>

{/* =========================
    SECTION 10 — PRICING FAQ
========================== */}
<section className="mx-auto w-[95%] rounded-[20px] bg-[#F6F9F7]">
  <div className="mx-auto w-[90%] py-10 sm:py-12 md:py-14">

    {/* Section Label */}
    <div className="flex flex-wrap items-center gap-2">
      <span className="flex h-[18px] min-w-[29px] items-center justify-center rounded-[6px] bg-[#0085FF] px-2 font-inter text-[10px] font-semibold text-white">
        10
      </span>

      <span className="font-inter text-[12px] font-semibold text-[#37413D]">
        Pricing FAQ
      </span>

      <span className="font-inter text-[11px] text-[#8A9691]">
        the objections that actually stop the sale
      </span>
    </div>

    {/* Heading */}
    <h2 className="mt-5 font-inter text-[26px] font-semibold leading-[1.2] tracking-[-0.7px] text-[#37413D] sm:text-[30px]">
      Questions people ask before they pay.
    </h2>

    {/* FAQ List */}
    <div className="mt-5 overflow-hidden rounded-[14px] border border-[#C9D3CE] bg-white">
      {[
        {
          question: "Is GST included in these prices?",
          answer:
            "No. All prices are exclusive of 18% GST, which is added at checkout. You can add your GSTIN while paying and claim the input credit.",
        },
        {
          question: "Do I need a credit card to start?",
          answer:
            "No. The 7-day trial needs no card and no payment details.",
        },
        {
          question: "What do I get during the trial?",
          answer:
            "Everything. The trial runs on our Business plan at full limits, so you can test the whole product and then decide which plan actually fits you.",
        },
        {
          question: "What happens after 7 days?",
          answer:
            "Your account switches to read-only. Nothing is deleted and you can still see all your data. To add, edit or delete again, pick a plan or book a call with us.",
        },
        {
          question: "Is there a free forever plan?",
          answer:
            "No. We've kept the paid plans genuinely cheap instead, starting at ₹199 per user per month on annual billing.",
        },
        {
          question: "How does per-user pricing work?",
          answer:
            "You pay for each person who uses DataCircles, and you can start with just one. Records and storage are counted per user too, so a bigger team automatically gets more room.",
        },
        {
          question: "What if I add someone mid-month?",
          answer:
            "Add them whenever you like. We'll prorate the cost against your next bill, so you only pay for what you use.",
        },
        {
          question: "What if I hit my record or storage limit?",
          answer:
            "You'll be able to buy an add-on to top up your limit without moving to a higher plan. Add-ons are being finalised now, so talk to us if you're getting close.",
        },
        {
          question: "Can I cancel, upgrade or downgrade?",
          answer:
            "Any time, with no lock-in and no exit fee. Changes are prorated against your next bill, so you only ever pay for what you consume.",
        },
        {
          question: "Do you offer refunds?",
          answer:
            "We don't refund a plan once it has started, which is exactly why the 7-day trial gives you the full product at full limits first. Try everything before you pay a rupee. If something has genuinely gone wrong, talk to us and we'll sort it out. Full details are in our refund and cancellation policy.",
        },
        {
          question: "How can I pay?",
          answer:
            "Through Razorpay, so UPI, credit and debit cards, net banking and the usual methods all work.",
        },
        {
          question: "Will I get an invoice for my subscription?",
          answer:
            "Yes, a GST invoice every time you're billed. Add your GSTIN at checkout to claim the input credit.",
        },
        {
          question: "Is my data safe, and can I take it with me?",
          answer:
            "Your data sits on AWS, encrypted and backed up, and you can export it to CSV or Excel whenever you want. It's your data.",
        },
        {
          question: "Any discounts?",
          answer:
            "Annual billing saves you up to 20%. We also have a referral programme, and discounted annual plans for NGOs and early-stage startups. Talk to us.",
        },
      ].map((item, index) => (
        <details
          key={index}
          className="group border-b border-[#E5EAE7] last:border-b-0"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 transition-all duration-300 hover:bg-[#F6F9F7] sm:px-5">
            <span className="font-inter text-[13px] font-semibold leading-[1.4] text-[#37413D] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#0085FF] group-open:text-[#0085FF] sm:text-[14px]">
              {item.question}
            </span>

            {/* + / − */}
            <span className="relative flex h-[25px] w-[25px] flex-shrink-0 items-center justify-center rounded-full border border-[#C9D3CE] bg-white text-[#0085FF] transition-all duration-300 group-hover:border-[#0085FF] group-open:border-[#0085FF] group-open:bg-[#0085FF] group-open:text-white">
              <span className="absolute h-[1.5px] w-[9px] bg-current" />
              <span className="absolute h-[9px] w-[1.5px] bg-current transition-transform duration-300 group-open:rotate-90" />
            </span>
          </summary>

          {/* Answer */}
          <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-in-out group-open:grid-rows-[1fr] group-open:opacity-100">
            <div className="overflow-hidden">
              <p className="px-4 pb-4 pr-12 font-inter text-[12px] leading-[1.65] text-[#52605A] sm:px-5 sm:text-[13px]">
                {item.answer}
              </p>
            </div>
          </div>
        </details>
      ))}
    </div>

  </div>
</section>

      </main>
    </div>
  );
}