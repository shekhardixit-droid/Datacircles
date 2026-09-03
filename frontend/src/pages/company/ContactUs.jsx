import Navbar from "../../components/Navbar";

export default function ContactUs() {
  return (
    <div className="min-h-screen w-full bg-white text-[#37413D]">

      {/* =========================
          NAVBAR
      ========================== */}
      <section className="relative w-full mt-5 overflow-hidden">
        <div className="relative z-20">
          <Navbar />
        </div>
      </section>
<main className="w-full">


<section className="flex h-auto w-full flex-col items-center mt-12 md:mt-16 lg:mt-20 px-4 sm:px-6">
        {/* Top Pill */}
<div className="flex h-[25px] w-fit items-center justify-center gap-2 rounded-full bg-[#EBE6E033] px-3">
  <span className="h-[7px] w-[7px] flex-shrink-0 rounded-full bg-[#0085FF]" />

  <span className="whitespace-nowrap font-inter text-[11px] font-normal text-black">
    Contact Us
  </span>
</div>

        {/* Main Text */}
        <div className="mt-6 flex h-auto w-full max-w-[700px] items-center justify-center text-center">
          <h1 className="font-inter text-[28px] font-semibold leading-[1.15] text-black sm:text-[40px] md:text-[48px] md:leading-[1.1]">
          Talk to us. A real person will answer.
           
          </h1>
        </div>

        {/* Description */}
        <div className="mt-3 flex h-auto w-full max-w-[635px] items-center justify-center text-center">
          <p className="font-inter text-[14px] font-normal leading-[20px] text-black/60 sm:text-[15px] md:text-[16px]">
        Questions, a demo, or just want to see if DataCircles fits your business?<br/>
            Here's how to reach us. We're a real team at a real desk in Thane.
          
          </p>
        </div>

        {/* Two Pills */}
        <div className="mt-5 flex h-auto w-full max-w-[307px] flex-col items-center justify-between gap-3 sm:flex-row sm:gap-0">
          <button
            type="button"
            className="flex h-[49px] w-full items-center justify-center rounded-full bg-[#E5EDF5] font-inter text-[14px] font-medium text-black transition-colors duration-200 hover:bg-[#0085FF] hover:text-white sm:w-[149px]"
          >
            See open roles
          </button>

          <button
            type="button"
            className="flex h-[49px] w-full items-center justify-center rounded-full bg-[#E5EDF5] font-inter text-[14px] font-medium text-black transition-colors duration-200 hover:bg-[#0085FF] hover:text-white sm:w-[149px]"
          >
            Write to us
          </button>
        </div>

        {/* Bottom Text */}
        <div className="mt-5 flex h-auto w-full max-w-[420px] items-center justify-center text-center">
          <p className="font-inter text-[11px] font-normal text-black/50 sm:text-[12px]">
            Built for businesses · Simple to use · GST-ready · Works on any device
          </p>
        </div>
      </section>

      {/* =========================
    SECTION 02 — DIRECT DETAILS
========================== */}
<section className="mx-auto mt-16 w-[95%] rounded-[20px] bg-[#F6F9F7] sm:mt-20 md:mt-24">
  <div className="w-full px-6 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14">


    {/* Contact Cards */}
    <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
      {[
        {
          image: "/images/email.png",
          label: "Email",
          value: "contact@datacircles.in",
          description: "We reply within 4 hours.",
          href: "mailto:contact@datacircles.in",
        },
        {
          image: "/images/phone.png",
          label: "Phone",
          value: (
            <>
              +91 98922 97764
              <br />
              022 4662 7501
            </>
          ),
          description: "Mon to Fri, 9am to 6pm IST",
          href: "tel:+919892297764",
        },
        {
          image: "/images/office.png",
          label: "Office",
          value: (
            <>
              Regd. Office No. 721, 7th Floor,
              <br />
              Centura Square IT Park, Road No. 27,
              <br />
              Wagle Estate, Thane 400604,
              <br />
              Maharashtra
            </>
          ),
          href: "https://maps.app.goo.gl/7vFHe1uKixEczeDi9",
        },
      ].map((item, index) => (
        <a
          key={index}
          href={item.href}
          target={index === 2 ? "_blank" : undefined}
          rel={index === 2 ? "noopener noreferrer" : undefined}
          className="min-h-[195px] rounded-[14px] border border-[#DDE3E0] bg-white px-5 py-5 transition-all duration-200 hover:border-[#0085FF]"
        >
          {/* Icon */}
          <div className="mb-4 h-[40px] w-[40px] overflow-hidden rounded-[10px]">
            <img
              src={item.image}
              alt={item.label}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Label */}
          <p className="font-inter text-[11px] font-medium uppercase tracking-[0.5px] text-[#8A9691]">
            {item.label}
          </p>

          {/* Main Content */}
          <p
  className={`mt-1 font-inter leading-[20px] ${
    item.label === "Email" || item.label === "Phone"
      ? "text-[15px] font-semibold text-[#0085FF]"
      : "text-[13px] text-[#37413D]"
  }`}
>
            {item.value}
          </p>

          {/* Description */}
          {item.description && (
            <p className="mt-2 font-inter text-[12px] leading-[18px] text-[#8A9691]">
              {item.description}
            </p>
          )}
        </a>
      ))}
    </div>
  </div>
</section>

{/* =========================
    DEMO CTA
========================== */}
<section className="mx-auto mt-8 w-[92%] sm:w-[85%] md:w-[75%] rounded-[14px] border border-[#C9D3CE] bg-white sm:mt-10">
  <div className="flex min-h-[107px] flex-col items-start gap-4 px-5 py-5 sm:flex-row sm:items-center sm:gap-5 sm:px-6 md:px-7">

    {/* Icon */}
    <div className="h-[46px] w-[46px] flex-shrink-0 overflow-hidden rounded-[12px] bg-[#E7F6F0]">
      <img
        src="/images/demo.png"
        alt="Demo"
        className="h-full w-full object-cover"
      />
    </div>

    {/* Content */}
    <div className="min-w-0 flex-1">
      <h3 className="font-inter text-[16px] font-semibold leading-[20px] text-black">
        Want to see it in action?
      </h3>

      <p className="mt-1 font-inter text-[13px] leading-[20px] text-[#52605A] sm:text-[14px]">
        Book a 30-minute call and we'll walk you through DataCircles on your
        own kind of business. No obligation.
      </p>
    </div>

    {/* Button */}
    <button
      type="button"
      className="flex h-[40px] w-full flex-shrink-0 items-center justify-center rounded-[9px] bg-[#0085FF] px-5 font-inter text-[13px] font-semibold text-white transition-all duration-200 hover:bg-white hover:text-[#0085FF] hover:border hover:border-[#0085FF] sm:hidden md:flex md:w-auto"
    >
      Book a demo
    </button>

  </div>
</section>

{/* =========================
    SECTION 04 — QUICK ROUTES
========================== */}
<section className="mx-auto mt-16 w-[92%] sm:w-[90%] rounded-[20px] bg-[#F1FAF6] sm:mt-20 md:mt-24">
  <div className="mx-auto flex w-full md:w-[75%] items-center justify-between px-6 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14">


    {/* Cards */}
    <div className="grid w-full grid-cols-1 gap-6 md:gap-10 md:grid-cols-2">

      {/* Already a Customer */}
      <div className="rounded-[12px] border border-[#C9D3CE] bg-white px-5 py-5 sm:px-6">
        <div className="flex gap-4">

          {/* Icon */}
          <div className="h-[36px] w-[36px] flex-shrink-0 overflow-hidden rounded-[9px]">
            <img
              src="/images/customer-support.png"
              alt="Customer support"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="font-inter text-[15px] font-semibold text-[#37413D]">
              Already a customer?
            </h3>

            <p className="mt-1.5 font-inter text-[13px] leading-[1.65] text-[#52605A]">
              The fastest way to reach us is the in-app chat, right inside
              your account. You can also email us and we'll pick it up
              quickly.
            </p>

            <button
              type="button"
              className="mt-2 font-inter text-[13px] font-semibold text-[#0085FF] transition-colors hover:text-[#37413D]"
            >
              Open in-app chat →
            </button>
          </div>

        </div>
      </div>


      {/* Looking for a Job */}
      <div className="rounded-[12px] border border-[#C9D3CE] bg-white px-5 py-5 sm:px-6">
        <div className="flex gap-4">

          {/* Icon */}
          <div className="h-[36px] w-[36px] flex-shrink-0 overflow-hidden rounded-[9px]">
            <img
              src="/images/careers.png"
              alt="Careers"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="font-inter text-[15px] font-semibold text-[#37413D]">
              Looking for a job?
            </h3>

            <p className="mt-1.5 font-inter text-[13px] leading-[1.65] text-[#52605A]">
              We're hiring in Mumbai. See the open roles and how to apply.
            </p>

            <button
              type="button"
              className="mt-2 font-inter text-[13px] font-semibold text-[#0085FF] transition-colors hover:text-[#37413D]"
            >
              See careers →
            </button>
          </div>

        </div>
      </div>

    </div>

  </div>
</section>

{/* =========================
    SECTION 05 — WHERE TO FIND US
========================== */}
<section className="mx-auto mt-16 w-[95%] sm:w-[90%] md:w-[80%] rounded-[20px] bg-white sm:mt-20 md:mt-24">
  <div className="mx-auto w-full sm:w-[90%] py-10 sm:py-12 md:py-14">

    {/* Heading */}
    <h2 className="mt-6 font-inter text-[26px] font-semibold leading-[1.15] tracking-[-0.8px] text-[#37413D] sm:text-[30px] md:text-[34px]">
      Where to find us
    </h2>

    {/* Description */}
    <p className="mt-4 max-w-[650px] font-inter text-[14px] leading-[1.7] text-[#52605A] sm:text-[15px]">
      We're at Centura Square IT Park in Wagle Estate, Thane. Come say hello,
      or find us on the map below.
    </p>

    {/* Google Map */}
    <div className="mt-5 h-[220px] w-full overflow-hidden rounded-[12px] border border-[#DDE3E0] bg-[#F1F5F3] sm:h-[280px] md:h-[320px]">
      <iframe
        title="DataCircles Office Location"
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2178.4405317793394!2d72.94460302924111!3d19.19567500934527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9006b3febdb%3A0x62673843b2869185!2sCentura%20Square%20IT%20Park!5e0!3m2!1sen!2sin!4v1788346792234!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>

  </div>
</section>

{/* =========================
    SECTION 06 — FINAL LINE
========================== */}
<section className="mx-auto mt-16 w-[100%] overflow-hidden  bg-[#0085FF] sm:mt-20 md:mt-24">
  <div className="flex min-h-[252px] flex-col items-center justify-center px-6 py-10 text-center sm:px-8">


    {/* Heading */}
    <h2 className="mt-5 font-inter text-[26px] font-semibold leading-[1.15] tracking-[-0.8px] text-white sm:text-[30px] md:text-[32px]">
      We read every message.
    </h2>

    {/* Description */}
    <p className="mt-3 font-inter text-[14px] leading-[1.6] text-white/85 sm:text-[15px]">
      Whether it's a question, a demo, or feedback, we'd love to hear from you.
    </p>

    {/* Buttons */}
    <div className="mt-5 flex flex-wrap items-center justify-center gap-3">

      <a
        href="mailto:contact@datacircles.in"
        className="flex h-[42px] min-w-[93px] items-center justify-center rounded-[9px] bg-[#0085FF] px-5 font-inter text-[13px] font-semibold border border-white/60 text-white transition-all duration-200 hover:bg-white hover:text-[#0085FF] hover:border hover:border-white"
      >
        Email us
      </a>

      <button
        type="button"
        className="flex h-[42px] min-w-[126px] items-center justify-center rounded-[9px] border border-white/60 bg-transparent px-5 font-inter text-[13px] font-semibold text-white transition-all duration-200 hover:bg-white hover:text-[#0085FF]"
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