import Navbar from "../../components/Navbar";


const faqs = [
  {
    question: "Can I bill a project in stages?",
    answer:
      "Yes. Raise an invoice for the advance, another at each milestone, and each one sits against the same client and project.",
  },
  {
    question: "We're a team of four. Does that get expensive?",
    answer:
      "Pricing is per user, from ₹199 each per month on annual billing. Start with one user and add the team as you go.",
  },
  {
    question:
      "We already use Excel for clients and a separate app for invoices.",
    answer:
      "That's exactly the situation this was built for. Your client information and invoicing can live together in one place.",
  },
  {
    question: "Can I send a quotation before the client commits?",
    answer:
      "Yes. Quotations and proforma invoices are both included, on every plan.",
  },
];

export default function CreativeMarketing() {
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
    Creative & Marketing
  </span>
</div>

        {/* Main Text */}
        <div className="mt-6 flex h-auto w-full max-w-[700px] items-center justify-center text-center">
          <h1 className="font-inter text-[32px] font-semibold leading-[1.1] text-black sm:text-[40px] md:text-[48px]">
          For agencies and studios that pitch, deliver and chase.
           
          </h1>
        </div>

        {/* Description */}
        <div className="mt-3 flex h-auto w-full max-w-[635px] items-center justify-center text-center">
          <p className="font-inter text-[14px] font-normal leading-[20px] text-black/60 sm:text-[15px] md:text-[16px]">
          Keep every pitch in one pipeline, turn the won ones into invoices without retyping a thing, and stop wondering which client still owes you for the last project.
            <br className="hidden sm:block" />
            
          </p>
        </div>

        {/* Two Pills */}
        <div className="mt-5 flex h-auto w-full max-w-[307px] flex-col items-center justify-between gap-3 sm:flex-row sm:gap-0">
          <button
            type="button"
            className="flex h-[49px] w-full items-center justify-center rounded-full bg-[#E5EDF5] font-inter text-[14px] font-medium text-black transition-colors duration-200 hover:bg-[#0085FF] hover:text-white sm:w-[149px]"
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

{/* Bottom Text */}
        <div className="mt-5 flex h-auto w-full max-w-[420px] items-center justify-center text-center">
          <p className="font-inter text-[11px] font-normal text-black/50 sm:text-[12px]">
           7-day free trial · No credit card · GST-ready
          </p>
        </div>
      

      </section>

{/* =========================
    HERO IMAGE
========================== */}
<section className="mx-auto mt-10 w-[980px] max-w-[100%] sm:mt-12 md:mt-14">
  <div className="h-[260px] w-full border border-[#C3CEDB] overflow-hidden rounded-[20px]">
    <img
      src="/images/creative-marketing.png"
      alt="Creative and Marketing"
      className="h-full w-full object-cover"
    />
  </div>
</section>

{/* =========================
    SECTION 02 — THE PROBLEM
========================== */}
<section className="mx-auto  w-[100%] rounded-[20px] bg-white  ">
  <div className="mx-auto w-[90%] py-10 sm:py-12 md:py-14">


    {/* Content */}
    <div className="mt-5 max-w-[650px]">
      <h2 className="font-inter text-[35px] font-semibold leading-[1.2] tracking-[-0.6px] text-black ">
        You pitched three clients this month.
      </h2>

      <p className="mt-3 font-inter text-[18px] font-normal leading-[1.8] text-[#52605A] ">
        Two are still deciding, one said yes, and the invoice from the last
        project is somewhere in your sent folder, unpaid. The proposal lives
        in a Drive folder, the client's number is in someone's phone, the
        budget was agreed on a call nobody wrote down, and the invoice was made
        in a completely different app. Nothing is broken exactly. It's just
        scattered, and things fall through the gaps.
      </p>
    </div>

  </div>
</section>

{/* =========================
    SECTION 03 — HOW IT WORKS
========================== */}
<section className="mx-auto mt-8 w-[80%] rounded-[20px] bg-white ">
  <div className="mx-auto w-[90%] py-10 sm:py-12 md:py-14">

    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">

      {/* =========================
          LEFT — HEADING + DESCRIPTION
      ========================== */}
      <div className="flex flex-col items-start lg:pr-10">

        <h2 className="mt-0 text-left font-inter text-[30px] font-semibold leading-[1.15] tracking-[-0.8px] text-black sm:text-[34px]">
          Pitch, win, deliver, bill, repeat.
        </h2>

        <p className="mt-3 max-w-[500px] text-left font-inter text-[14px] leading-[1.7] text-[#52605A] sm:text-[15px]">
          Creative work is rarely one invoice at the end. It's an advance, a stage payment, and a balance that needs chasing. Every step sits on the same client record.
        </p>

      </div>

      {/* =========================
          RIGHT — ROADMAP
      ========================== */}
      <div className="relative">

        {/* Vertical Roadmap Line */}
        <div className="absolute bottom-[18px] left-[16px] top-[18px] hidden w-[2px] bg-[#DDE3E0] sm:block" />

        <div className="flex flex-col gap-3">

          {[
            {
              title: "Pitch",
              description: "The Enquiry arrives",
            },
            {
              title: "Proposal",
              description: "quote goes out",
            },
            {
              title: "Win",
              description: "advance invoiced",
            },
            {
              title: "Milestones",
              description: "Build in stages",
            },
            {
              title: "Balance paid",
              description: "chased automatically",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative flex items-center gap-3"
            >

              {/* Roadmap Number */}
              <div className="relative z-10 flex h-[32px] w-[32px] flex-shrink-0 items-center justify-center rounded-full border-2 border-[#0085FF] bg-white font-inter text-[10px] font-semibold text-[#0085FF] transition-all duration-300 group-hover:bg-[#0085FF] group-hover:text-white">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Roadmap Card */}
              <div className="w-full max-w-[430px] rounded-[10px] border border-[#DDE3E0] bg-white px-4 py-3 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#0085FF] group-hover:shadow-[0_6px_16px_rgba(0,133,255,0.07)]">

                <h3 className="font-inter text-[13px] font-semibold text-[#37413D] transition-colors duration-300 group-hover:text-[#0085FF]">
                  {item.title}
                </h3>

                <p className="mt-1 font-inter text-[11px] leading-[1.5] text-[#52605A]">
                  {item.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>

  </div>
</section>

{/* =========================
    SECTION 04 — PILLAR · THE PITCH PIPELINE
========================== */}
<section className="mx-auto mt-8 w-[100%]  bg-[#F5F8FC] ">
  <div className="mx-auto w-[90%] py-10 sm:py-12 md:py-14">

    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">

      {/* =========================
          LEFT CONTENT
      ========================== */}
      <div className="flex flex-col items-start">

      
        {/* Small Label */}
        <p className=" font-inter text-[14px] font-semibold uppercase text-[#0085FF]">
          Win the work
        </p>

        {/* Heading */}
        <h2 className=" text-left font-inter text-[30px] font-semibold leading-[1.2] tracking-[-0.5px] text-black ">
          Every pitch in one place, not four inboxes.
        </h2>

        {/* Description */}
        <p className="mt-3 max-w-[500px] text-left font-inter text-[14px] leading-[1.8] text-[#52605A] sm:text-[15px]">
          Referrals, website enquiries and the client who messaged your
          creative director directly all land in the same pipeline. See which
          pitches are live, what they're worth, and which one has gone quiet
          for three weeks.
        </p>

        {/* Pills */}
        <div className="mt-4 flex max-w-[500px] flex-wrap gap-2">
          {[
            "Custom stages",
            "Deal values",
            "Website forms",
            "Rotten deal alerts",
          ].map((item, index) => (
            <span
              key={index}
              className="flex h-[29px] w-fit items-center rounded-full bg-[#E5EDF5] px-3 font-inter text-[11px] font-semibold text-[#0085FF] transition-all duration-200 hover:bg-[#0085FF] hover:text-white"
            >
              {item}
            </span>
          ))}
        </div>

      </div>

      {/* =========================
          RIGHT IMAGE
      ========================== */}
      <div className="flex h-[250px] w-full items-center justify-center overflow-hidden rounded-[14px] border border-dashed border-[#C9D3E0] bg-[#F5F8FC]">

        {/* Actual Image */}
        <img
          src="/images/pipeline-kanban.png"
          alt="Pipeline kanban"
          className="h-full w-full object-cover"
        />

        {/* Icon */}
        <div className="absolute flex h-[40px] w-[40px] items-center justify-center rounded-[10px] bg-[#E5EDF5]">
          <img
            src="/images/pipeline-icon.png"
            alt="Pipeline icon"
            className="h-[22px] w-[22px] object-contain"
          />
        </div>

      </div>

    </div>

  </div>
</section>

{/* =========================
    SECTION 05 — PILLAR · PROPOSAL TO INVOICE
========================== */}
<section className="mx-auto w-[100%]  bg-white ">
  <div className="mx-auto w-[90%] py-10 sm:py-12 md:py-14">

    

    {/* Main Content */}
    <div className="mt-7 grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_1fr] lg:gap-10">

      {/* =========================
          LEFT — IMAGE
      ========================== */}
      <div className="relative flex h-[210px] w-full items-center justify-center overflow-hidden rounded-[14px] border border-dashed border-[#C9D3E0] bg-[#F5F8FC] sm:h-[230px]">

        <img
          src="/images/quotation-invoice.png"
          alt="Quotation or invoice screen"
          className="h-full w-full object-cover"
        />

        {/* Image Overlay / Icon */}
        <div className="absolute flex flex-col items-center justify-center text-center">
          <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-[#E5EDF5]">
            <img
              src="/images/invoice-icon.png"
              alt="Invoice icon"
              className="h-[20px] w-[20px] object-contain"
            />
          </div>

          <h3 className="mt-2 font-inter text-[13px] font-semibold text-[#52605A]">
            Quotation or invoice screen
          </h3>

          <p className="mt-1 font-inter text-[11px] text-[#8A9691]">
            A creative-services quote with line items.
          </p>
        </div>

      </div>

      {/* =========================
          RIGHT — CONTENT
      ========================== */}
      <div className="flex flex-col items-start">

        {/* Small Label */}
        <p className="font-inter text-[14px] font-semibold uppercase tracking-[0.4px] text-[#0085FF]">
          Bill it
        </p>

        {/* Heading */}
        <h2 className="mt-2 text-left font-inter text-[30px] font-semibold leading-[1.2] tracking-[-0.5px] text-black sm:text-[26px]">
          The quote you sent becomes the invoice you send.
        </h2>

        {/* Description */}
        <p className="mt-3 max-w-[520px] text-left font-inter text-[14px] leading-[1.8] text-[#52605A] sm:text-[15px]">
          Scope, line items and the agreed amount are already there from the
          proposal stage. When the client says yes, the invoice is a click away
          rather than fifteen minutes of retyping into another app.
        </p>

        {/* Feature Pills */}
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Quotations",
            "Proforma",
            "GST invoices",
            "Your branding",
          ].map((item, index) => (
            <span
              key={index}
              className="flex h-[29px] w-fit items-center rounded-full bg-[#E5EDF5] px-3 font-inter text-[11px] font-semibold text-[#0085FF] transition-all duration-200 hover:bg-[#0085FF] hover:text-white"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Link */}
        <button
          type="button"
          className="mt-3 flex items-center gap-1 font-inter text-[12px] font-semibold text-[#0085FF] transition-all duration-200 hover:gap-2"
        >
          See how invoicing works
          <span className="text-[15px]">→</span>
        </button>

      </div>

    </div>

  </div>
</section>

{/* =========================
    SECTION 06 — PILLAR · GETTING PAID
========================== */}
<section className="mx-auto mt-4 w-[100%] rounded-[20px] bg-[#F5F8FC] ">
  <div className="mx-auto w-[90%] py-10 sm:py-12 md:py-14">

    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-10">

      {/* =========================
          LEFT CONTENT
      ========================== */}
      <div className="flex flex-col items-start">


        {/* Small Label */}
        <p className="mt-5 font-inter text-[11px] font-semibold uppercase tracking-[0.4px] text-[#0085FF]">
          Get paid
        </p>

        {/* Heading */}
        <h2 className="mt-2 max-w-[500px] text-left font-inter text-[24px] font-semibold leading-[1.2] tracking-[-0.5px] text-[#37413D] sm:text-[26px]">
          Creative work gets delivered. Payment gets delayed.
        </h2>

        {/* Description */}
        <p className="mt-3 max-w-[500px] text-left font-inter text-[14px] leading-[1.8] text-[#52605A] sm:text-[15px]">
          You handed over the files weeks ago and the balance is still sitting
          there. Overdue invoices are flagged the day they're late, and
          reminders go out without you having to write the awkward message to a
          client you want to keep working with.
        </p>

        {/* Feature Pills */}
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Overdue flags",
            "Payment reminders",
            "Collected vs pending",
          ].map((item, index) => (
            <span
              key={index}
              className="flex h-[29px] w-fit items-center rounded-full bg-[#E5EDF5] px-3 font-inter text-[11px] font-semibold text-[#0085FF] transition-all duration-200 hover:bg-[#0085FF] hover:text-white"
            >
              {item}
            </span>
          ))}
        </div>

      </div>

      {/* =========================
          RIGHT VISUAL
      ========================== */}
      <div className="relative flex h-[210px] w-full items-center justify-center overflow-hidden rounded-[14px] border border-dashed border-[#C9D3E0] bg-[#F5F8FC] sm:h-[230px]">

        {/* Icon */}
        <div className="flex flex-col items-center justify-center text-center">

          <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-[#E5EDF5]">
            <img
              src="/images/financial-overview-icon.png"
              alt="Financial overview"
              className="h-[20px] w-[20px] object-contain"
            />
          </div>

          <h3 className="mt-2 font-inter text-[13px] font-semibold text-[#52605A]">
            Financial overview
          </h3>

          <p className="mt-1 font-inter text-[11px] text-[#8A9691]">
            Pending and overdue amounts.
          </p>

        </div>

      </div>

    </div>

  </div>
</section>

{/* =========================
    SECTION 07 — RETAINER CLIENTS
========================== */}
<section className="mx-auto mt-4 w-[100%] rounded-[20px] bg-white">
  <div className="mx-auto  w-[90%] py-10 sm:py-12 md:py-14">

    {/* Content */}
   <div className="mx-auto mt-2 max-w-[650px] text-center">

     <h2 className="text-center font-inter text-[30px] font-semibold leading-[1.2] tracking-[-0.5px] text-black ">
  Retainer clients, handled the same way.
</h2>
      <p className="mt-3 font-inter text-[14px] leading-[1.8] text-[#52605A] sm:text-[15px]">
        Most agencies run a mix: a few steady monthly retainers and a stream of
        project work. Both live on the same client record, so the retainer
        invoice going out this month sits alongside the project you're pitching
        them next quarter.
      </p>

    </div>

  </div>
</section>



<section className="mx-auto w-[100%] rounded-[20px]  ">
  <div className="mx-auto w-[90%] py-10 sm:py-12 md:py-14">
    {/* Heading + description */}
    <div className="mt-5">
      <h2 className="font-inter text-[24px] font-semibold leading-[1.2] tracking-[-0.5px] text-black sm:text-[26px]">
        Made for creative businesses of every kind
      </h2>

      <p className="mt-3 font-inter text-[14px] leading-[1.6] text-[#52605A] sm:text-[15px]">
        Different work, same problem of pitching, delivering and chasing payment.
      </p>
    </div>

    {/* Category pills */}
    <div className="mt-4 flex flex-wrap gap-2">
      {[
        "Branding agencies",
        "Digital marketing agencies",
        "Advertising agencies",
        "Media houses",
        "Design studios",
        "Photography & video studios",
      ].map((item) => (
        <div
          key={item}
          className="flex h-[34px] w-fit items-center justify-center rounded-full border border-[#D3DBE5] bg-white px-4 font-inter text-[12px] font-semibold text-[#4A5665] transition-all duration-200 hover:border-[#0085FF] hover:bg-[#0085FF] hover:text-white"
        >
          {item}
        </div>
      ))}
    </div>

  </div>
</section>

<section className="mx-auto  w-[100%] rounded-[20px] bg-white">
  <div className="mx-auto w-[90%] py-10 sm:py-12 md:py-14">

    

    {/* Content */}
    <div className="mt-5 grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_1fr] md:gap-10">

      {/* Customer video */}
      <div className="h-[244px] max-w-full overflow-hidden rounded-[14px] bg-[#12395E]">
  <video
    className="h-full w-full object-cover"
    controls
    playsInline
    preload="metadata"
  >
    <source src="/videos/customer-story.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
      </div>

      {/* Quote */}
      <div className="max-w-[500px]">
        <h2 className="font-inter text-[23px] font-semibold leading-[1.25] tracking-[-0.5px] text-[#1B2430] sm:text-[26px]">
          "[Pulled quote from a creative business customer.]"
        </h2>

        <p className="mt-4 font-inter text-[14px] text-[#52605A] sm:text-[15px]">
          [Name] · [Business] · [City]
        </p>

        <a
          href="#"
          className="mt-6 inline-flex items-center font-inter text-[13px] font-semibold text-[#0085FF] transition-all duration-200 hover:translate-x-1"
        >
          Read their story →
        </a>
      </div>

    </div>
  </div>
</section>


<section className="mx-auto  w-[80%] rounded-[20px] bg-[#F5F8FC] ">
  <div className="mx-auto flex w-[90%] flex-col items-center py-10 sm:py-12 md:py-14">

    {/* Heading */}
    <div className="w-full max-w-[700px] text-center">
      <h2 className="font-inter text-[24px] font-semibold leading-[1.2] tracking-[-0.6px] text-[#37413D] sm:text-[28px]">
        Questions agencies ask
      </h2>
    </div>

    {/* FAQ */}
    <div className="mt-7 w-full max-w-[700px]">
      {faqs.map((faq, index) => (
        <details
          key={index}
          className="group border-b border-[#DDE3E0] first:border-t"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-1 py-5">
            {/* Question */}
            <span className="font-inter text-[14px] font-semibold text-[#37413D] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#0085FF] group-open:text-[#0085FF] sm:text-[15px]">
              {faq.question}
            </span>

            {/* Plus / Minus */}
            <span className="relative flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-full border border-[#C9D3E0] text-[#0085FF] transition-all duration-300 group-hover:border-[#0085FF] group-open:border-[#0085FF] group-open:bg-[#0085FF] group-open:text-white">
              {/* Horizontal */}
              <span className="absolute h-[1.5px] w-[10px] bg-current" />

              {/* Vertical */}
              <span className="absolute h-[10px] w-[1.5px] bg-current transition-transform duration-300 group-open:rotate-90" />
            </span>
          </summary>

          {/* Answer */}
          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-in-out group-open:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <p className="max-w-[620px] pb-5 pr-10 font-inter text-[13px] leading-[1.7] text-[#52605A] sm:text-[14px]">
                {faq.answer}
              </p>
            </div>
          </div>
        </details>
      ))}
    </div>

  </div>
</section>

<section className="mx-auto mt-16 w-[100%] bg-[#0085FF] sm:mt-20 md:mt-24">
  <div className="mx-auto flex w-[90%] flex-col items-center py-12 text-center sm:py-14 md:py-16">

    {/* Heading */}
    <h2 className="font-inter text-[28px] font-semibold leading-[1.2] tracking-[-0.8px] text-white sm:text-[32px] md:text-[36px]">
      See it on your own pitches.
    </h2>

    {/* Description */}
    <p className="mt-4 max-w-[650px] font-inter text-[14px] leading-[1.7] text-white/75 sm:text-[15px]">
      Start free for 7 days at full limits, and bring your client list across
      with our help. No credit card needed.
    </p>

    {/* Buttons */}
    <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row">

      {/* Start Free */}
      <button
        className="
          flex h-[42px] w-fit items-center justify-center
          rounded-full
           border border-white/50
          bg-[#0085FF] px-6
          font-inter text-[13px] font-semibold text-white
          transition-all duration-200 ease-in-out
          hover:bg-white
          hover:text-[#0085FF]
          hover:shadow-[0_6px_18px_rgba(0,133,255,0.25)]
        "
      >
        Start free
      </button>

      {/* Book a Demo */}
      <button
        className="
          flex h-[42px] w-fit items-center justify-center
          rounded-full
          border border-white/50
          bg-transparent px-6
          font-inter text-[13px] font-semibold text-white
          transition-all duration-200 ease-in-out
          
          hover:bg-white
          hover:text-[#0085FF]
          hover:shadow-[0_6px_18px_rgba(0,133,255,0.25)]
        "
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