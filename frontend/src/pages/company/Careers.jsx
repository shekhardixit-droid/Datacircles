import Navbar from "../../components/Navbar";

export default function Careers() {
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
        <div className="flex h-[25px] w-[160px] items-center justify-start gap-2 rounded-full px-3 bg-[#EBE6E033]">
          <span className="h-[7px] w-[7px] rounded-full bg-[#0085FF]" />
          <span className="font-inter text-[11px] font-normal text-black whitespace-nowrap">
           Careers at DataCircles
          </span>
        </div>

        {/* Main Text */}
        <div className="mt-6 flex h-auto w-full max-w-[700px] items-center justify-center text-center">
          <h1 className="font-inter text-[32px] font-semibold leading-[1.1] text-black sm:text-[40px] md:text-[48px]">
           Build software that Indian businesses actually depend on.
           
          </h1>
        </div>

        {/* Description */}
        <div className="mt-3 flex h-auto w-full max-w-[635px] items-center justify-center text-center">
          <p className="font-inter text-[14px] font-normal leading-[20px] text-black/60 sm:text-[15px] md:text-[16px]">
         We're a small, bootstrapped team in Mumbai building CRM and invoicing for the 
            <br className="hidden sm:block" />
           businesses the big players overlook. If that sounds like your kind of problem, we should talk.
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
    SECTION 02 — WHY BUILD WITH US
========================== */}
<section className="mx-auto  w-[80%] rounded-[20px] bg-white sm:mt-20 md:mt-24">
  <div className="w-full py-10 text-left sm:py-12 md:py-14">

    {/* Heading */}
    <h2 className="font-inter text-[38px] font-semibold leading-[1.15] tracking-[-0.8px] text-black ">
      Why build with us
    </h2>

    {/* Paragraph 1 */}
    <p className="mt-5 max-w-[900px] font-inter text-[14px] leading-[1.8] text-[#52605A] sm:text-[15px]">
      We won't pretend we're the safe, obvious choice. We're early, we're
      bootstrapped, and there's a lot still to build. What we can offer is
      the thing bigger companies can't.
    </p>

    {/* Paragraph 2 */}
    <p className="mt-5 max-w-[900px] font-inter text-[14px] leading-[1.8] text-[#52605A] sm:text-[15px]">
      Your work ships to real businesses, fast. There's no committee between
      you and the customer, and no roadmap that buries your idea for two
      years. You'll sit close to the founder, own real parts of the product,
      and see the difference you make in how an actual shop or agency runs
      its day.
    </p>

    {/* Highlight */}
    <p className="mt-6 max-w-[900px] font-inter text-[14px] font-semibold leading-[1.8] text-[#0085FF] sm:text-[15px]">
      If you want to be a small piece of a large machine, we're honestly not
      the right place. If you want your fingerprints on something people rely
      on every morning, you'll like it here.
    </p>

  </div>
</section>

{/* =========================
    SECTION 03 — WHAT WE LOOK FOR
========================== */}
<section className="mx-auto w-[80%] rounded-[20px] bg-white ">
  <div className="w-full py-10 sm:py-12 md:py-14">


    {/* Heading */}
    <h2 className=" text-center font-inter text-[38px] font-semibold leading-[1.15] tracking-[-0.8px] text-black ">
      What we look for
    </h2>

    {/* Cards */}
    
<div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
  {[
    {
      image: "/images/ownership.png",
      title: "Ownership over instructions.",
      description:
        "We hire people who take a problem and run with it, not people who wait to be told the next step.",
    },
    {
      image: "/images/simple.png",
      title: "Simple beats clever.",
      description:
        "The best work here makes something complicated feel obvious. Anyone can add features. We respect the people who remove friction.",
    },
    {
      image: "/images/customer.png",
      title: "Close to the customer.",
      description:
        "We build for real Indian businesses, so we care that you actually think about them, not just the code or the design.",
    },
    {
      image: "/images/honest.png",
      title: "Honest and low-ego.",
      description:
        `Small teams break when people protect turf. We'd rather work with people who say "I don't know" and "I was wrong" easily.`,
    },
  ].map((item, index) => (
    <div
      key={index}
      className="min-h-[168px] rounded-[12px] border border-[#DDE3E0] bg-white px-5 py-5 sm:px-6 sm:py-6"
    >
      {/* Icon */}
      <div className="mb-4 h-[40px] w-[40px] overflow-hidden rounded-[9px]">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Title */}
      <h3 className="font-inter text-[18px] font-semibold leading-[20px] text-black/80">
        {item.title}
      </h3>

      {/* Description */}
      <p className="mt-2 font-inter text-[13px] leading-[1.7] text-[#52605A] sm:text-[14px]">
        {item.description}
      </p>
    </div>
  ))}
</div>

  </div>
</section>

{/* =========================
    SECTION 04 — HOW WE WORK
========================== */}
<section className="mx-auto  w-[80%] mt-15">
  <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

    {/* =========================
        LEFT — HOW WE WORK
    ========================== */}
    <div className="rounded-[20px] bg-[#F1FAF6] px-6 py-6 ">

      {/* Heading */}
      <h2 className="mt-6 font-inter text-[30px] font-semibold leading-[1.15] tracking-[-0.8px] text-[#37413D] sm:text-[34px]">
        How we work
      </h2>

      {/* Paragraph 1 */}
      <p className="mt-4 font-inter text-[14px] leading-[1.8] text-[#52605A] sm:text-[15px]">
        We work from our office in Thane, Monday to Friday, 9 to 6. That's a
        choice, not a default. When you're this small and building this fast,
        the best ideas tend to happen out loud, across a desk, in the
        ten-minute conversations that never happen over a screen. We'd rather
        build shoulder to shoulder.
      </p>

      {/* Paragraph 2 */}
      <p className="mt-5 font-inter text-[14px] leading-[1.8] text-[#52605A] sm:text-[15px]">
        Decisions here happen in conversations, not in long approval chains.
        You'll work across more of the product than you would at a bigger
        company, and you'll learn faster for exactly that reason.
      </p>

    </div>


    {/* =========================
        RIGHT — WHERE WE ARE
    ========================== */}
    <div className="flex flex-col justify-between rounded-[20px] border border-[#DDE3E0] bg-white px-6 py-6">

      {/* Content */}
      <div>


        {/* Heading */}
        <h2 className="mt-6 font-inter text-[30px] font-semibold leading-[1.15] tracking-[-0.8px] text-[#0085FF] sm:text-[34px]">
          Where we are
        </h2>

        {/* Description */}
        <p className="mt-4 font-inter text-[14px] leading-[1.8] text-[#52605A] sm:text-[15px]">
          Our office is in Thane, Maharashtra. If you're excited about
          building products with us, we'd love to meet you here.
        </p>

      </div>

      {/* Location Box */}
      <div className="mt-8 rounded-[12px] border border-[#0085FF] bg-[#F6F9F7] px-5 py-4">
        <p className="font-inter text-[13px] leading-[1.7] text-[#37413D]">
          <span className="font-semibold text-[#0085FF]">
            Where we are:
          </span>{" "}
          No. 721, 7th Floor, Centura Square IT Park, Road No. 27,
          Wagle Estate, Thane 400604, Maharashtra.
        </p>
      </div>

    </div>

  </div>
</section>


{/* =========================
    SECTION 05 — OPEN ROLES
========================== */}
<section className="mx-auto mt-16 w-[95%] rounded-[20px]  bg-[#F6F9F7] px-6 py-10 sm:mt-20 sm:px-8 sm:py-12 md:mt-24 md:px-10 md:py-14">
  <div className="w-full">


    {/* Heading */}
    <h2 className="mt-6 font-inter text-[50px] font-semibold leading-[1.15] tracking-[-0.8px] text-black ">
      Open roles
    </h2>

    {/* Intro */}
    <p className="mt-4 max-w-[650px] font-inter text-[20px] leading-[1.7] text-[#52605A] ">
      We're hiring in Mumbai, in person. If one of these sounds like you,
      we'd love to hear from you.
    </p>

    {/* =========================
        FULL-TIME
    ========================== */}
    <div className="mt-6">

      <p className="mb-3 font-inter text-[12px] font-semibold uppercase text-[#0085FF]">
        Full-time
      </p>

      {/* Roles */}
      <div className="space-y-3">

        {/* Software Engineer */}
        <div className="rounded-[12px] border border-[#DDE3E0] bg-white px-5 py-5 sm:px-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div className="min-w-0 flex-1">
              <h3 className="font-inter text-[16px] font-semibold text-[#37413D] sm:text-[17px]">
                Software Engineer (SDE)
              </h3>

              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#E5F7F1] px-3 py-1 font-inter text-[11px] font-semibold text-[#0085FF]">
                  Engineering
                </span>

                <span className="rounded-full bg-[#EEF2F0] px-3 py-1 font-inter text-[11px] font-medium text-[#8A9691]">
                  Thane · in office
                </span>
              </div>

              <p className="mt-3 max-w-[850px] font-inter text-[13px] leading-[1.7] text-[#52605A] sm:text-[14px]">
                You know the MERN stack inside out and can move confidently
                across both backend and frontend. You'll build real features
                that ship to real businesses, week after week.
              </p>
            </div>

            <button
              type="button"
              className="flex h-[36px] w-fit flex-shrink-0 items-center justify-center rounded-[9px] bg-[#0085FF] px-4 font-inter text-[12px] font-semibold text-white transition-all duration-200 hover:bg-white hover:text-[#0085FF] hover:border hover:border-[#0085FF]"
            >
              Apply →
            </button>

          </div>
        </div>

        {/* Account Executive */}
        <div className="rounded-[12px] border border-[#DDE3E0] bg-white px-5 py-5 sm:px-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div className="min-w-0 flex-1">
              <h3 className="font-inter text-[16px] font-semibold text-[#37413D] sm:text-[17px]">
                Account Executive
              </h3>

              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#E5F7F1] px-3 py-1 font-inter text-[11px] font-semibold text-[#0085FF]">
                  Sales
                </span>

                <span className="rounded-full bg-[#EEF2F0] px-3 py-1 font-inter text-[11px] font-medium text-[#8A9691]">
                  Thane · in office
                </span>
              </div>

              <p className="mt-3 max-w-[850px] font-inter text-[13px] leading-[1.7] text-[#52605A] sm:text-[14px]">
                You're comfortable talking to business owners, understanding
                what they need, and closing the deal. You'll be the person who
                turns interest into customers.
              </p>
            </div>

            <button
              type="button"
              className="flex h-[36px] w-fit flex-shrink-0 items-center justify-center rounded-[9px] bg-[#0085FF] px-4 font-inter text-[12px] font-semibold text-white transition-all duration-200 hover:bg-white hover:text-[#0085FF] hover:border hover:border-[#0085FF]"
            >
              Apply →
            </button>

          </div>
        </div>

      </div>
    </div>

    {/* =========================
        INTERNSHIPS
    ========================== */}
    <div className="mt-6">

      <p className="mb-3 font-inter text-[12px] font-semibold uppercase text-[#0085FF]">
        Internships
      </p>

      <div className="space-y-3">

        {/* Full Stack Developer */}
        <div className="rounded-[12px] border border-[#DDE3E0] bg-white px-5 py-5 sm:px-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div className="min-w-0 flex-1">
              <h3 className="font-inter text-[16px] font-semibold text-[#37413D] sm:text-[17px]">
                Full Stack Developer (Intern)
              </h3>

              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#E5F7F1] px-3 py-1 font-inter text-[11px] font-semibold text-[#0085FF]">
                  Engineering
                </span>

                <span className="rounded-full bg-[#EEF2F0] px-3 py-1 font-inter text-[11px] font-medium text-[#8A9691]">
                  Thane · in office
                </span>
              </div>

              <p className="mt-3 max-w-[850px] font-inter text-[13px] leading-[1.7] text-[#52605A] sm:text-[14px]">
                You know the MERN stack and want to learn by building things
                people actually use, not toy projects. You'll work alongside
                the team on the live product from day one.
              </p>
            </div>

            <button
              type="button"
              className="flex h-[36px] w-fit flex-shrink-0 items-center justify-center rounded-[9px] bg-[#0085FF] px-4 font-inter text-[12px] font-semibold text-white transition-all duration-200 hover:bg-white hover:text-[#0085FF] hover:border hover:border-[#0085FF]"
            >
              Apply →
            </button>

          </div>
        </div>

        {/* UI/UX Designer */}
        <div className="rounded-[12px] border border-[#DDE3E0] bg-white px-5 py-5 sm:px-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div className="min-w-0 flex-1">
              <h3 className="font-inter text-[16px] font-semibold text-[#37413D] sm:text-[17px]">
                UI/UX Designer (Intern)
              </h3>

              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#E5F7F1] px-3 py-1 font-inter text-[11px] font-semibold text-[#0085FF]">
                  Design
                </span>

                <span className="rounded-full bg-[#EEF2F0] px-3 py-1 font-inter text-[11px] font-medium text-[#8A9691]">
                  Thane · in office
                </span>
              </div>

              <p className="mt-3 max-w-[850px] font-inter text-[13px] leading-[1.7] text-[#52605A] sm:text-[14px]">
                You know your way around Figma and care about making software
                feel simple. You'll help shape how thousands of businesses
                experience DataCircles every day.
              </p>
            </div>

            <button
              type="button"
              className="flex h-[36px] w-fit flex-shrink-0 items-center justify-center rounded-[9px] bg-[#0085FF] px-4 font-inter text-[12px] font-semibold text-white transition-all duration-200 hover:bg-white hover:text-[#0085FF] hover:border hover:border-[#0085FF]"
            >
              Apply →
            </button>

          </div>
        </div>

      </div>
    </div>

    {/* No Role */}
    <div className="mt-3 rounded-[12px]  px-5 py-5 text-center">
      <h3 className="font-inter text-[14px] font-semibold text-[#37413D]">
        Don't see your role?
      </h3>

      <p className="mt-1 font-inter text-[13px] leading-[1.6] text-[#52605A]">
        If you think you'd add something here, write to us anyway. Small teams
        make room for the right person.
      </p>
    </div>

  </div>
</section>

{/* =========================
    SECTION 06 — APPLICATION PROCESS
========================== */}
<section className="mx-auto  w-[100%] rounded-[20px] bg-white ">
  <div className="w-full px-6 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14">

    

    {/* Heading */}
    <h2 className="mt-6 text-center font-inter text-[30px] font-semibold leading-[1.15] tracking-[-0.8px] text-black sm:text-[34px]">
      What to expect after you apply
    </h2>

    {/* Steps */}
    <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {[
        {
          number: "1",
          title: "You apply",
          description:
            "Send your CV and a line on why this, not a generic cover letter.",
        },
        {
          number: "2",
          title: "A first conversation",
          description:
            "A relaxed call to understand what you're looking for, and to tell you honestly what the job is.",
        },
        {
          number: "3",
          title: "A practical round",
          description:
            "A real problem close to the work you'd actually do, not a trick puzzle.",
        },
        {
          number: "4",
          title: "Meet the team",
          description:
            "You meet the people you'd work with, ask us anything, and we both decide if it fits.",
        },
      ].map((step, index) => (
        <div
          key={index}
          className="min-h-[174px] rounded-[12px] border border-[#DDE3E0] bg-white px-5 py-5"
        >
          {/* Number */}
          <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#0085FF] font-inter text-[13px] font-semibold text-white">
            {step.number}
          </div>

          {/* Title */}
          <h3 className="mt-4 font-inter text-[18px] font-semibold leading-[20px] text-[#37413D]">
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
    SECTION 07 — FINAL CTA
========================== */}
<section className="mx-auto mt-16 w-[100%] overflow-hidden  bg-[#0085FF] sm:mt-20 md:mt-24">
  <div className="flex min-h-[275px] flex-col items-center justify-center px-6 py-10 text-center sm:px-8">

    {/* Heading */}
    <h2 className="mt-5 font-inter text-[30px] font-semibold leading-[1.15] tracking-[-0.8px] text-white sm:text-[32px]">
      Think you'd fit here?
    </h2>

    {/* Description */}
    <p className="mt-3 font-inter text-[14px] leading-[1.6] text-white/85 sm:text-[15px]">
      Tell us what you'd want to build. We read every message.
    </p>

    {/* Buttons */}
    <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row">

      <button
        type="button"
        className="flex h-[42px] min-w-[138px] items-center justify-center rounded-[10px] border border-white/60 bg-[#0085FF] px-5 font-inter text-[13px] font-semibold text-white  transition-all duration-200 hover:bg-white hover:text-[#0085FF]"
      >
        See open roles
      </button>

      <a
        href="mailto:careers@datacircles.in"
        className="flex h-[42px] min-w-[112px] items-center justify-center rounded-[10px] border border-white/60 bg-transparent px-5 font-inter text-[13px] font-semibold text-white transition-all duration-200 hover:bg-white hover:text-[#0085FF]"
      >
        Write to us
      </a>

    </div>

    {/* Email */}
    <a
      href="mailto:careers@datacircles.in"
      className="mt-4 font-inter text-[12px] text-white/70 transition-colors hover:text-white"
    >
      careers@datacircles.in
    </a>

  </div>
</section>

      </main>

    </div>
  );
}