import Navbar from "../../components/Navbar";

export default function Referral() {
  return (
    <div className="min-h-screen w-full bg-white text-[#37413D]">

      {/* =========================
          NAVBAR
      ========================== */}
      <section className="relative mt-5 w-full">
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
    Referral
  </span>
</div>

        {/* Main Text */}
        <div className="mt-6 flex h-auto w-full max-w-[700px] items-center justify-center text-center">
          <h1 className="font-inter text-[28px] font-semibold leading-[1.15] text-black sm:text-[40px] md:text-[48px] md:leading-[1.1]">
          Refer a business. You both get 3 months off.
           
          </h1>
        </div>

        {/* Description */}
        <div className="mt-3 flex h-auto w-full max-w-[635px] items-center justify-center text-center">
          <p className="font-inter text-[14px] font-normal leading-[20px] text-black/60 sm:text-[15px] md:text-[16px]">
        Share DataCircles with another business. When they upgrade to a paid plan, they save 3 months, and so do you.
          
          </p>
        </div>

        <div className="flex h-[62px] ml-2 mt-4 w-fit items-center rounded-[14px] bg-[#E7F6F0] px-5">
  {/* Main Offer */}
  <span className="font-inter text-[30px] font-semibold leading-none text-[#0085FF]">
    3 + 3
  </span>

  {/* Offer Text */}
  <div className="ml-3 flex flex-col">
    <span className="font-inter text-[12px] font-semibold leading-[16px] text-[#0085FF]">
      months off,
    </span>

    <span className="font-inter text-[12px] font-semibold leading-[16px] text-[#0085FF]">
      one for each of you
    </span>
  </div>
</div>

        {/* Two Pills */}
<div className="mt-5 flex h-auto w-full flex-col items-center justify-center gap-3 sm:flex-row">
  <button
    type="button"
    className="flex h-[49px] w-fit items-center justify-center rounded-full bg-[#E5EDF5] px-6 font-inter text-[14px] font-medium text-black transition-colors duration-200 hover:bg-[#0085FF] hover:text-white"
  >
    Go to my referral code
  </button>

          <button
            type="button"
            className="flex h-[49px] w-full items-center justify-center rounded-full bg-[#E5EDF5] font-inter text-[14px] font-medium text-black transition-colors duration-200 hover:bg-[#0085FF] hover:text-white sm:w-[149px]"
          >
           Start free
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
    SECTION 02 — HOW IT WORKS
========================== */}
<section className="mx-auto  w-[100%] rounded-[20px] bg-[#F6F9F7] sm:mt-20 md:mt-24">
  <div className="mx-auto w-[90%] py-6 ">

    

    {/* Heading */}
    <h2 className="mt-6 text-center font-inter text-[38px] font-semibold leading-[1.15] tracking-[-0.8px] text-[#37413D] ">
      How it works
    </h2>

    {/* Steps */}
    <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {[
        {
          number: "1",
          title: "Share your code",
          description:
            "Every account has its own referral code. Send it to a business that would find DataCircles useful.",
        },
        {
          number: "2",
          title: "They try it free",
          description:
            "They start their free 7-day trial and see how DataCircles fits their business.",
        },
        {
          number: "3",
          title: "They upgrade & save",
          description: (
            <>
              They apply your code at checkout and get{" "}
              <span className="font-semibold text-[#0085FF]">
                3 months of that plan off.
              </span>{" "}
              Growth at ₹450? That's ₹450 off, three times.
            </>
          ),
        },
        {
          number: "4",
          title: "You save too",
          description: (
            <>
              You get{" "}
              <span className="font-semibold text-[#0085FF]">
                3 months off your own current plan.
              </span>{" "}
              No limit, just keep referring to keep saving.
            </>
          ),
        },
      ].map((step, index) => (
        <div
          key={index}
          className="min-h-[174px] rounded-[12px] border border-[#C9D3CE] bg-white px-4 py-4 sm:px-5"
        >
          {/* Number */}
          <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#0085FF] font-inter text-[13px] font-semibold text-white">
            {step.number}
          </div>

          {/* Title */}
          <h3 className="mt-3 font-inter text-[20px] font-semibold leading-[20px] text-[#37413D]">
            {step.title}
          </h3>

          {/* Description */}
          <p className="mt-1.5 font-inter text-[15px] leading-[1.65] text-[#52605A]">
            {step.description}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

{/* =========================
    SECTION 03 — GOOD FOR BOTH
========================== */}
<section className="mx-auto  w-[80%] rounded-[20px] bg-white ">
  <div className="mx-auto w-[90%] py-10 sm:py-12 md:py-14">
    
    {/* Heading */}
    <h2 className="mt-6 text-center font-inter text-[30px] font-semibold leading-[1.15] tracking-[-0.8px] text-[#37413D] sm:text-[34px]">
      Good for both of you
    </h2>
    {/* Reward Cards */}
    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
      {/* Business You Invite */}
      <div className="min-h-[194px] rounded-[14px] border border-[#C9D3CE] bg-white px-5 py-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#0085FF] hover:shadow-lg sm:px-6">
        <p className="font-inter text-[12px] font-semibold uppercase tracking-[0.3px] text-[#0085FF]">
          The business you invite
        </p>
        <h3 className="mt-4 font-inter text-[24px] font-semibold leading-[1.2] tracking-[-0.5px] text-[#37413D]">
          3 months off their plan
        </h3>
        <p className="mt-2 font-inter text-[13px] leading-[1.7] text-[#52605A] sm:text-[14px]">
          3 months off whichever plan they choose. Pick Starter, get 3
          months of Starter off. Pick Business, get 3 months of Business
          off. It comes straight off their checkout when they upgrade.
        </p>
      </div>
      {/* You */}
      <div className="min-h-[194px] rounded-[14px] border border-[#C9D3CE] bg-white px-5 py-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#0085FF] hover:shadow-lg sm:px-6">
        <p className="font-inter text-[12px] font-semibold uppercase tracking-[0.3px] text-[#0085FF]">
          You
        </p>
        <h3 className="mt-4 font-inter text-[24px] font-semibold leading-[1.2] tracking-[-0.5px] text-[#37413D]">
          3 months off your plan
        </h3>
        <p className="mt-2 font-inter text-[13px] leading-[1.7] text-[#52605A] sm:text-[14px]">
          3 months off the plan you're on right now. If you're on Starter,
          you get 3 months of Starter off, whatever plan the business you
          referred takes. Refer as many businesses as you like, there's no cap.
        </p>
      </div>
    </div>
  </div>
</section>

{/* =========================
    SECTION 04 — WHERE TO FIND YOUR CODE
========================== */}
<section className="mx-auto mt-16 w-[90%] rounded-[20px] bg-[#F1FAF6] sm:mt-20 md:mt-24">
  <div className="mx-auto w-[90%] py-10 sm:py-12 md:py-14">


    {/* Main Code Card */}
    <div className="mt-6 flex flex-col gap-6 rounded-[14px] border border-[#C9D3CE] bg-white px-5 py-6 sm:px-6 md:flex-row md:items-center md:justify-between">

      {/* Left Content */}
      <div className="flex items-center gap-4">

        {/* Image / Icon */}
        <div className="h-[46px] w-[46px] flex-shrink-0 overflow-hidden rounded-[12px] bg-[#E7F6F0]">
          <img
            src="/images/referral-code.png"
            alt="Referral code"
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <h3 className="font-inter text-[17px] font-semibold leading-[1.2] text-[#37413D]">
            Your code is in your settings
          </h3>

          <p className="mt-1 font-inter text-[13px] leading-[1.6] text-[#52605A]">
            Go to Settings, open Referral, and you'll find your unique code ready to share.
          </p>

          {/* Referral Code */}
          <button
            type="button"
            className="mt-3 flex w-fit items-center gap-3 rounded-[8px] border border-dotted border-[#0085FF] bg-[#F1FAF6] px-3 py-2"
          >
            <span className="font-inter text-[13px] font-semibold tracking-[1px] text-[#006B4F]">
              DATA-XXXX-XXXX
            </span>

            <span className="font-inter text-[10px] font-medium text-[#8A9691]">
              tap to copy
            </span>
          </button>
        </div>
      </div>

      {/* CTA */}
      <button
        type="button"
        className="flex h-[40px] w-full items-center justify-center rounded-[9px] border border-[#0085FF] bg-white px-5 font-inter text-[13px] font-semibold text-[#0085FF] transition-all duration-200 hover:bg-[#0085FF] hover:text-white md:w-fit"
      >
        Go to my referral code
      </button>

    </div>

  </div>
</section>

{/* =========================
    SECTION 05 — WHO TO INVITE
========================== */}
<section className="mx-auto  w-[95%] rounded-[20px] bg-white ">
  <div className="mx-auto w-[90%] py-10 sm:py-12 md:py-14">

   

    {/* Content */}
    <div className="mt-6 max-w-[620px]">
      <h2 className="font-inter text-[40px] font-semibold leading-[1.15] tracking-[-0.8px] text-[#37413D] ">
        Not sure who to invite?
      </h2>

      <p className="mt-4 font-inter text-[14px] font-normal leading-[1.7] text-[#52605A] sm:text-[15px]">
        Think of the businesses around you. Another shop owner. Someone in your
        network still running everything on Excel. A business juggling a
        separate CRM and billing app. If they'd benefit from having it all in
        one place, they're worth a referral.
      </p>
    </div>

  </div>
</section>

{/* =========================
    SECTION 06 — FAQ
========================== */}
<section className="mx-auto  w-[95%] rounded-[20px] bg-[#F6F9F7] ">
  <div className="mx-auto w-[90%] py-10 sm:py-12 md:py-14">

    {/* Heading */}
    <h2 className="mt-6 font-inter text-[30px] font-semibold leading-[1.15] tracking-[-0.8px] text-[#37413D] sm:text-[34px]">
      Questions about referrals
    </h2>

    {/* FAQ List */}
    <div className="mt-5 overflow-hidden rounded-[14px] border border-[#C9D3CE] bg-white">

      {[
        {
          question: "When do I get my discount?",
          answer:
            "Once the business you referred upgrades from their trial to a paid plan and their payment goes through, your reward is ready to use.",
        },
        {
          question: "What exactly does the other business get?",
          answer:
            "3 months of their chosen plan, taken off at checkout. If their plan is ₹450 a month, they save ₹450 a month for three months.",
        },
        {
          question: "And what do I get?",
          answer:
            "3 months off the plan you're currently on. Your discount is based on your own plan, not the plan the business you referred picks.",
        },
        {
          question: "Is there a limit to how many businesses I can refer?",
          answer:
            "No. There's no cap. Every business you bring on earns you another 3 months off.",
        },
        {
          question: "Does the code expire?",
          answer:
            "No. Your referral code never expires, so share it whenever you like.",
        },
        {
          question: "Does the business I invite have to pay to redeem it?",
          answer:
            "Yes. The discount applies when they upgrade from the free trial to a paid plan. It's a discount on a paid plan, not free account time.",
        },
        {
          question: "Can I use my own code for myself?",
          answer:
            "No. Your code is for bringing new businesses on board, so you can't redeem your own code on your own account.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="group cursor-pointer border-b border-[#E5EAE7] px-4 py-4 transition-all duration-300 last:border-b-0 hover:bg-[#F6F9F7] sm:px-5"
        >
          {/* Question */}
          <h3 className="font-inter text-[13px] font-semibold leading-[1.4] text-[#37413D] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#0085FF] sm:text-[14px]">
            {item.question}
          </h3>

          {/* Answer */}
          <p className="mt-2 max-h-0 overflow-hidden font-inter text-[12px] font-normal leading-[1.6] text-[#52605A] opacity-0 transition-all duration-500 ease-in-out group-hover:max-h-[100px] group-hover:opacity-100 sm:text-[13px]">
            {item.answer}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>

{/* =========================
    SECTION 07 — FINAL CTA
========================== */}
<section className="mx-auto mt-16 w-[100%]  bg-[#0085FF] sm:mt-20 md:mt-24">
  <div className="mx-auto flex w-[90%] flex-col items-center py-10 text-center sm:py-12 md:py-14">

    
    {/* Heading */}
    <h2 className="mt-6 font-inter text-[30px] font-semibold leading-[1.15] tracking-[-0.8px] text-white sm:text-[34px]">
      Know a business that could use this?
    </h2>

    {/* Description */}
    <p className="mt-3 font-inter text-[13px] font-normal leading-[1.6] text-white/80 sm:text-[14px]">
      Open your settings, grab your code, and share it. You both save 3 months.
    </p>

    {/* Buttons */}
    <div className="mt-5 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">

      {/* Primary Button */}
      <button
        type="button"
        className="flex h-[41px] w-fit items-center justify-center rounded-[9px] bg-[#0085FF] px-5 font-inter text-[13px] border border-white/60 font-semibold text-white transition-all duration-200 hover:bg-white hover:text-[#0085FF]"
      >
        Go to my referral code
      </button>

      {/* Secondary Button */}
      <button
        type="button"
        className="flex h-[41px] w-fit items-center justify-center rounded-[9px] border border-white/60 bg-transparent px-5 font-inter text-[13px] font-semibold text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-[#0085FF]"
      >
        Start free
      </button>

    </div>

  </div>
</section>
        
      </main>

    </div>
  );
}