import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function SolutionMain() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen mt-5 w-full overflow-x-hidden bg-white font-inter text-black">
      <Navbar />

      <main className="w-full">
       
       {/* Hero / About Section */}
      <section className="flex h-auto w-full flex-col items-center mt-12 md:mt-16 lg:mt-20 px-4 sm:px-6">
        {/* Top Pill */}
                {/* Top Pill */}
<div className="flex h-[25px] w-fit items-center justify-center gap-2 rounded-full bg-[#EBE6E033] px-3">
  <span className="h-[7px] w-[7px] flex-shrink-0 rounded-full bg-[#0085FF]" />

  <span className="whitespace-nowrap font-inter text-[11px] font-normal text-black">
    Solutions
  </span>
</div>

        {/* Main Text */}
        <div className="mt-6 flex h-auto w-full max-w-[700px] items-center justify-center text-center">
          <h1 className="font-inter text-[32px] font-semibold leading-[1.1] text-black sm:text-[40px] md:text-[48px]">
          Built for businesses that chase leads and send invoices.
           
          </h1>
        </div>

        {/* Description */}
        <div className="mt-3 flex h-auto w-full max-w-[635px] items-center justify-center text-center">
          <p className="font-inter text-[14px] font-normal leading-[20px] text-black/60 sm:text-[15px] md:text-[16px]">
          If your work starts with an enquiry and ends with a payment you had to follow up on, DataCircles was built for you. Find your kind of business below. 
            <br className="hidden sm:block" />
            
          </p>
        </div>

        {/* Two Pills */}
        <div className="mt-5 flex h-auto w-full max-w-[307px] flex-col items-center justify-between gap-3 sm:flex-row sm:gap-0">
          <button
            type="button"
            className="flex h-[49px] w-full items-center justify-center rounded-full bg-[#E5EDF5] font-inter text-[14px] font-medium text-black transition-colors duration-200 hover:bg-[#0085FF] hover:text-white sm:w-[149px]"
            onClick={() => window.location.href = "/pricing"}
          >
            Start free
          </button>

          <button
            type="button"
            className="flex h-[49px] w-full items-center justify-center rounded-full bg-[#E5EDF5] font-inter text-[14px] font-medium text-black transition-colors duration-200 hover:bg-[#0085FF] hover:text-white sm:w-[149px]"
          >
          Book a Demo
          </button>
        </div>
      </section>

      {/* =========================
    SECTION 02 — WHO IT'S FOR
========================== */}
<section className="mx-auto mt-8 w-[100%] rounded-[20px] bg-white sm:mt-20 md:mt-24">
  <div className="mx-auto w-[90%] py-10 sm:py-12 md:py-14">

    {/* Heading */}
    <h2 className="mt-6 font-inter text-[30px] font-semibold leading-[1.15] tracking-[-0.8px] text-black sm:text-[34px]">
      A CRM only matters if you have leads to chase.
    </h2>

    {/* Description */}
    <p className="mt-4 max-w-[720px] font-inter text-[14px] font-normal leading-[1.7] text-[#52605A] sm:text-[15px]">
      We'd rather be straight with you than sell to everyone. DataCircles is
      built for B2B businesses with a sales process: an enquiry comes in,
      someone follows it up, a quote goes out, and eventually an invoice needs
      chasing. If that's not how your business works, there are better tools
      for you than ours.
    </p>

    {/* Comparison Cards */}
    <div className="mt-5 grid grid-cols-1 justify-center gap-4 md:grid-cols-2">

      {/* Built For You */}
      <div className="group rounded-[14px] border border-[#B8E5D5] bg-[#F1FAF6] px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0085FF] hover:bg-white sm:px-6 sm:py-6">

        <div className="flex items-center gap-3">
          <div className="flex h-[23px] w-[23px] items-center justify-center rounded-full bg-[#D9F3E8] transition-colors duration-300 ">
            <span className="font-inter text-[12px] font-bold text-[#087B52] ">
              ✓
            </span>
          </div>

          <h3 className="font-inter text-[15px] font-semibold text-[#087B52] ">
            Built for you if
          </h3>
        </div>

        <ul className="mt-4 space-y-3">
          {[
            "Enquiries come in by phone, email, WhatsApp or your website",
            "Someone has to follow up before the work is won",
            "You send quotations or proposals before invoices",
            "You raise GST invoices to other businesses",
            "Payments arrive later than you'd like",
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-2 font-inter text-[13px] leading-[1.5] text-[#52605A] transition-transform duration-300 group-hover:translate-x-1 sm:text-[14px]"
            >
              <span className="mt-[7px] h-[4px] w-[4px] flex-shrink-0 rounded-full bg-[#52605A]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

      </div>

      {/* Probably Not For You */}
      <div className="group rounded-[14px] border border-[#F1C9C4] bg-[#FFF8F7] px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0085FF] hover:bg-white sm:px-6 sm:py-6">

        <div className="flex items-center gap-3">
          <div className="flex h-[23px] w-[23px] items-center justify-center rounded-full bg-[#FCE4E1] transition-colors duration-300 ">
            <span className="font-inter text-[12px] font-bold text-[#D65348] ">
              ×
            </span>
          </div>

          <h3 className="font-inter text-[15px] font-semibold text-[#D65348] ">
            Probably not for you if
          </h3>
        </div>

        <ul className="mt-4 space-y-3">
          {[
            "Customers walk in, buy, and pay at the counter",
            "There are no leads to follow up on",
            "You need billing at a shop counter with a barcode scanner",
            "Your business is retail or direct-to-consumer",
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-2 font-inter text-[13px] leading-[1.5] text-[#52605A] transition-transform duration-300 group-hover:translate-x-1 sm:text-[14px]"
            >
              <span className="mt-[7px] h-[4px] w-[4px] flex-shrink-0 rounded-full bg-[#52605A]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

      </div>

    </div>

  </div>
</section>

{/* =========================
    SECTION 03 — FIND YOUR KIND OF BUSINESS
========================== */}
<section className="mx-auto mt-8 w-[95%] rounded-[20px] bg-[#F5F8FC] ">
  <div className="mx-auto w-[85%] py-10 sm:py-12 md:py-14">

    {/* Heading */}
    <h2 className="mt-1 text-center font-inter text-[45px] font-semibold leading-[1.15] tracking-[-0.8px] text-black ">
      Find your kind of business
    </h2>

    {/* Category Cards */}
    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">

      {[
        {
          title: "Professional Services",
          description:
            "Retainers, renewals and compliance work billed month after month.",
          categories:
            "Law firms · CA firms · CS firms · Tax consultants · Financial advisors · Business consultants",
        },
        {
          title: "Creative & Marketing",
          description:
            "Pitches to win, projects to deliver, milestones to bill.",
          categories:
            "Branding · Digital marketing · Advertising · Media houses · Design studios · Photography & video",
        },
        {
          title: "Technology & IT",
          description:
            "Project work and recurring support, often for the same client.",
          categories:
            "Software development · IT services · Web development · Cloud consultants · Cybersecurity",
        },
        {
          title: "Architecture, Design & Construction",
          description:
            "Long projects, staged payments, and clients who need chasing.",
          categories:
            "Architects · Interior designers · Civil contractors · Engineering consultants",
        },
        {
          title: "HR & Staffing",
          description:
            "Placements, retainers and monthly billing across many clients.",
          categories:
            "Recruitment agencies · HR consultants · Staffing companies · Payroll companies",
        },
        {
          title: "B2B Supply & Manufacturing",
          description:
            "Quotation to purchase order to delivery challan to invoice.",
          categories:
            "Uniform manufacturers · Corporate gifts · Industrial equipment · Machinery dealers · Packaging",
        },
        {
          title: "Field Services & AMC",
          description:
            "Site visits, annual contracts and renewals that must not be missed.",
          categories:
            "Facility management · Security · Pest control · HVAC · Solar · CCTV · Fire safety · Electrical",
        },
        {
          title: "Travel & Events",
          description:
            "Advances, balances and deadlines that don't move.",
          categories:
            "Event management · Travel agencies · Visa consultants · Wedding planners",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="group min-h-[150px] rounded-[12px] border border-[#DDE3E0] bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#0085FF] hover:shadow-[0_8px_24px_rgba(0,133,255,0.08)] sm:px-5 sm:py-5"
        >

          {/* Title */}
          <h3 className="font-inter text-[15px] font-bold leading-[1.3] text-black transition-colors duration-300 group-hover:text-[#0085FF]">
            {item.title}
          </h3>

          {/* Description */}
          <p className="mt-2 font-inter text-[13px] leading-[1.5] text-[#4A5665] sm:text-[14px]">
            {item.description}
          </p>

          {/* Categories */}
          <p className="mt-3 font-inter text-[11px] leading-[1.6] text-[#7C8899] sm:text-[12px]">
            {item.categories}
          </p>

          {/* Link */}
          <button
            type="button"
            className="mt-2 flex items-center gap-1 font-inter text-[12px] font-semibold text-[#0085FF] transition-all duration-200 group-hover:gap-2"
          >
            See how it works
            <span className="text-[14px]">→</span>
          </button>

        </div>
      ))}

    </div>

  </div>
</section>

{/* =========================
    SECTION 04 — FIVE BILLING MOTIONS
========================== */}
<section className="mx-auto mt-8 w-[100%] rounded-[20px] bg-white ">
  <div className="mx-auto w-[90%] py-10 sm:py-12 md:py-14">

    <div className="grid grid-cols-1 gap-8 items-start lg:grid-cols-[0.9fr_1.5fr] ">

      {/* Left — Heading + Description */}
      <div>
        <h2 className=" text-left font-inter text-[30px] font-semibold leading-[1.15] tracking-[-0.8px] text-black sm:text-[34px]">
          Different industries, same five ways of getting paid.
        </h2>

        <p className="mt-3 max-w-[650px] text-left font-inter text-[14px] leading-[1.7] text-[#52605A] sm:text-[15px]">
          Your industry has its own language, but billing usually follows one of
          these. Whichever one is yours, the flow from enquiry to payment stays in
          one place.
        </p>
      </div>

      {/* Right — Billing Motion Cards */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2">

        {[
          {
            title: "Retainer & recurring",
            description:
              "The same clients, billed every month, with renewals to remember.",
          },
          {
            title: "Project & milestone",
            description:
              "Quote, win, deliver in stages, and bill each one lands.",
          },
          {
            title: "Quote to supply",
            description:
              "Quotation, purchase order, delivery challan, then the invoice.",
          },
          {
            title: "Service calls & AMC",
            description:
              "Site visits, annual contracts, and renewals that pay the bills.",
          },
          {
            title: "Bookings & advances",
            description:
              "An advance up front, the balance before the date arrives.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="group min-h-[104px] rounded-[12px] border border-[#C9D3E0] bg-white px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#0085FF] hover:shadow-[0_8px_20px_rgba(0,133,255,0.08)]"
          >
            <h3 className="font-inter text-[14px] font-semibold leading-[1.3] text-[#37413D] transition-colors duration-300 group-hover:text-[#0085FF]">
              {item.title}
            </h3>

            <p className="mt-2 font-inter text-[12px] leading-[1.6] text-[#52605A]">
              {item.description}
            </p>
          </div>
        ))}

      </div>

    </div>

  </div>
</section>

{/* =========================
    SECTION 05 — SHARED PROMISE
========================== */}
<section className="mx-auto mt-4 w-[100%] rounded-[20px] bg-white ">
  <div className="mx-auto w-[100%] py-10 sm:py-12 md:py-14">

    {/* Heading */}
    <h2 className="mt-6 text-center font-inter text-[30px] font-semibold leading-[1.15] tracking-[-0.8px] text-black sm:text-[34px]">
      Whatever you do, the same thing is true.
    </h2>

    {/* Description */}
    <p className="mt-3 text-center font-inter text-[14px] leading-[1.7] text-[#52605A] sm:text-[15px]">
      Your leads and your invoices stop living in two different places.
    </p>

    {/* Shared Benefits */}
    <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
      {[
        "Full CRM on every plan",
        "Unlimited GST invoices",
        "From ₹199 per user",
        "24×7 human support",
        "Data hosted in India",
      ].map((item, index) => (
        <div
          key={index}
          className="flex h-[35px] w-fit items-center justify-center rounded-full border border-[#C9D3E0] bg-white px-5 font-inter text-[12px] font-semibold text-[#0085FF] transition-all duration-200 hover:border-[#0085FF] hover:bg-[#0085FF] hover:text-white"
        >
          {item}
        </div>
      ))}
    </div>

  </div>
</section>

{/* =========================
    SECTION 06 — FINAL CTA
========================== */}
<section className="mx-auto mt-8 w-[100%] bg-[#0085FF] ">
  <div className="mx-auto flex w-[90%] flex-col items-center py-10 text-center sm:py-12 md:py-14">


    {/* Heading */}
    <h2 className="mt-6 font-inter text-[30px] font-semibold leading-[1.15] tracking-[-0.8px] text-white sm:text-[34px]">
      Not sure if it fits your business?
    </h2>

    {/* Description */}
    <p className="mt-3 max-w-[650px] font-inter text-[14px] leading-[1.7] text-white/75 sm:text-[15px]">
      Book a 30-minute call and we'll walk you through it on your own kind of
      work. Or just start free for 7 days and see.
    </p>

    {/* CTA Buttons */}
    <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">

      {/* Start Free */}
      <button
        type="button"
        className="flex h-[42px] w-fit items-center justify-center rounded-full bg-[#0085FF] border border-white/50 px-6 font-inter text-[13px] font-semibold text-white transition-all duration-200 hover:bg-white hover:text-[#0085FF]"
        onClick={() => window.location.href = "/pricing"}
      >
        Start free
      </button>

      {/* Book a Demo */}
      <button
        type="button"
        className="flex h-[42px] w-fit items-center justify-center rounded-full border border-white/50 bg-transparent px-6 font-inter text-[13px] font-semibold text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-[#0085FF]"
      >
        Book a demo
      </button>

    </div>

  </div>
</section>

      </main>
    </div>
  );
}