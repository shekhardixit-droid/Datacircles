import Navbar from "../components/navbar";


export default function SecurityCompliance() {
  return (
    <div className="min-h-screen w-full bg-white text-[#37413D]">
      {/* =========================
          HERO
      ========================== */}
      <section className="relative w-full mt-5 overflow-hidden">
        {/* Navbar */}
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
            Security & compliance
          </span>
        </div>

        {/* Main Text */}
        <div className="mt-6 flex h-auto w-full max-w-[700px] items-center justify-center text-center">
          <h1 className="font-inter text-[32px] font-semibold leading-[1.1] text-black sm:text-[40px] md:text-[48px]">
           Your business data, kept safe.
           
          </h1>
        </div>

        {/* Description */}
        <div className="mt-3 flex h-auto w-full max-w-[635px] items-center justify-center text-center">
          <p className="font-inter text-[14px] font-normal leading-[20px] text-black/60 sm:text-[15px] md:text-[16px]">
          Here's exactly how we protect your data, in plain language. No jargon, and no 
            <br className="hidden sm:block" />
            claims we can't stand behind. 
          </p>
        </div>

        {/* Two Pills */}
        <div className="mt-5 flex h-auto w-full max-w-[307px] flex-col items-center justify-between gap-3 sm:flex-row sm:gap-0">
          <button
            type="button"
            className="flex h-[49px] w-full items-center justify-center rounded-full bg-[#E5EDF5] font-inter text-[14px] font-medium text-black transition-colors duration-200 hover:bg-[#0085FF] hover:text-white sm:w-[149px]"
          >
            Get Started
          </button>

          <button
            type="button"
            className="flex h-[49px] w-full items-center justify-center rounded-full bg-[#E5EDF5] font-inter text-[14px] font-medium text-black transition-colors duration-200 hover:bg-[#0085FF] hover:text-white sm:w-[149px]"
          >
            Learn More
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
    SECTION 02 — WHERE YOUR DATA LIVES
========================== */}
<section className="mx-auto mt-16 w-[80%] rounded-[20px] bg-[#F6F9F7] sm:mt-20 md:mt-24">
  <div className="mx-auto w-[80%]  py-12 sm:py-14 md:py-16">

    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">

      {/* LEFT SIDE */}
      <div className="w-full">

        {/* Heading */}
        <h2 className="font-inter text-[34px] font-semibold leading-[1.15] tracking-[-0.8px] text-[#0085FF]">
          Your data stays in India.
        </h2>

       {/* Card BELOW HEADING */}
<div className="mt-7 w-full max-w-[380px] overflow-hidden rounded-[14px] border border-[#0085FF] bg-white px-5 py-5 sm:px-6">

  <div className="flex items-center gap-4">

    {/* Card Image */}
    <div className="h-[46px] w-[46px] flex-shrink-0 overflow-hidden rounded-[12px]">
      <img
        src="/images/aws-mumbai.png"
        alt="AWS Mumbai"
        className="h-full w-full object-cover"
      />
    </div>

    {/* Card Text */}
    <div>
      <h3 className="font-inter text-[15px] font-semibold leading-[20px] text-[#37413D]">
        Hosted in India
      </h3>

      <p className="font-inter text-[12px] font-semibold leading-[18px] text-[#0085FF]">
        AWS Mumbai (ap-south-1)
      </p>

      <p className="font-inter text-[11px] leading-[17px] text-[#8A9691]">
        3-node replica set · auto backups
      </p>
    </div>

  </div>
</div>
</div>

      {/* RIGHT SIDE — BOTH PARAGRAPHS */}
      <div className="w-full mt-1 lg:pt-1">

        {/* Paragraph 1 */}
        <p className="max-w-[600px] font-inter text-[14px] font-normal leading-[1.7] text-[#52605A] sm:text-[15px]">
          Your data is hosted in India, in Amazon Web Services' Mumbai
          region, on the same infrastructure that runs a large part of the
          internet. It never leaves the country.
        </p>

        {/* Paragraph 2 */}
        <p className="mt-6 max-w-[600px] font-inter text-[14px] font-normal leading-[1.7] text-[#52605A] sm:text-[15px]">
          It's also copied across three separate servers in real time, so if
          one has a problem, the others carry on without missing a beat. On
          top of that, your data is backed up automatically, so a lost laptop
          or a broken phone never means lost work.
        </p>

      </div>

    </div>
  </div>
</section>
{/* =========================
    SECTION 03 — HOW YOUR DATA IS PROTECTED
========================== */}
<section className="mx-auto mt-16 w-[80%] rounded-[20px] bg-white sm:mt-20 md:mt-24">
  <div className="py-12 sm:py-14 md:py-16">

    {/* Section Header */}
    <div className="mx-auto max-w-[700px] text-center">

      <h2 className="font-inter text-[50px] font-semibold leading-[1.15] tracking-[-0.8px] text-[#0085FF] ">
        How your data is protected
      </h2>

      <p className="mx-auto mt-4 max-w-[700px] font-inter text-[14px] font-normal leading-[1.7] text-[#52605A] sm:text-[15px]">
        Your data is encrypted twice over: while it travels between your
        device and us,<br/> and while it sits in storage. In plain terms, it
        can't be read in transit and it can't be read at rest.
      </p>
    </div>

<div className="mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
  {[
    {
      image: "/images/encrypted-transit.png",
      title: "Encrypted in transit",
      description:
        "SSL and HTTPS on every connection to DataCircles.",
    },
    {
      image: "/images/encrypted-rest.png",
      title: "Encrypted at rest",
      description:
        "Both in our database and in file storage.",
    },
    {
      image: "/images/three-servers.png",
      title: "Copied across three servers",
      description:
        "For reliability, with automatic backups.",
    },
    {
      image: "/images/auth0.png",
      title: "Logins handled by Auth0",
      description:
        "A specialist trusted by thousands of companies.",
    },
    {
      image: "/images/user-roles.png",
      title: "User roles",
      description:
        "You decide who's a super admin, who's an admin, and who sees what.",
    },
  ].map((card, index) => (
    <div
      key={index}
      className="
        aspect-square
        w-full
        rounded-[16px]
        border border-[#DDE3E0]
        bg-white
        px-5 py-6
        flex flex-col
        items-center
        justify-center
        text-center
      "
    >
      {/* Card Image */}
      <div className="mb-5 h-[52px] w-[52px] overflow-hidden rounded-[12px]">
        <img
          src={card.image}
          alt={card.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Card Title */}
      <h3 className="font-inter text-[14px] font-semibold leading-[20px] text-black">
        {card.title}
      </h3>

      {/* Card Description */}
      <p className="mt-2 max-w-[170px] font-inter text-[12px] leading-[18px] text-[#0085FF]">
        {card.description}
      </p>
    </div>
  ))}
</div>
</div>
</section>

{/* =========================
    SECTION 04 — DATA OWNERSHIP
========================== */}
<section className="mx-auto mt-8 w-[80%] rounded-[20px] bg-[#F1FAF6] ">
  <div className="mx-auto w-[80%] py-6 ">
   

    {/* Heading */}
    <h2 className="mt-6 font-inter text-[38px] font-semibold leading-[1.15] tracking-[-0.8px] text-black ">
      Your data belongs to you.
    </h2>

    {/* First Paragraph */}
    <p className="mt-4 max-w-[760px] font-inter text-[14px] leading-[1.8] text-[#52605A] sm:text-[15px]">
      We don't lock your data away. You can export your contacts, deals,
      invoices and records to CSV or Excel whenever you want, as often as
      you want. If you ever decide to leave, you take everything with you.
      It's your business, and it's your data.
    </p>

    {/* Second Paragraph */}
    <p className="mt-5 max-w-[760px] font-inter text-[14px] leading-[1.8] text-[#52605A] sm:text-[15px]">
      We also don't sell your data or share it for advertising. You gave it
      to us to run your business, and that's the only thing we ever use it
      for.
    </p>

    {/* Export Button */}
    <button
      type="button"
      className="
        mt-5
        flex h-[32px]
        items-center justify-center
        rounded-full
        border border-[#DDE3E0]
        bg-white
        px-5
        font-inter text-[12px] font-semibold
        text-[#0085FF]
        transition-colors duration-200
        hover:bg-[#0085FF]
        hover:text-white
      "
    >
      Export anytime
    </button>

  </div>
</section>

{/* =========================
    SECTION 05 — PAYMENTS
========================== */}
<section className="mx-auto w-[80%] rounded-[20px] bg-white sm:mt-20 md:mt-24">
  <div className="mx-auto w-[80%] py-12 sm:py-7 md:py-7">


    {/* Main Content */}
    <div className=" grid grid-cols-1 items-start gap-8 lg:grid-cols-[310px_1fr] lg:gap-10">

      {/* Razorpay Card */}
      <div className="flex min-h-[84px] w-full items-center gap-4 rounded-[14px] border border-[#0085FF] bg-white px-5 py-4">
        
        {/* Image */}
        <div className="flex h-[46px] w-[46px] flex-shrink-0 items-center justify-center overflow-hidden rounded-[12px] bg-[#E8F7F2]">
          <img
            src="/images/razorpay.png"
            alt="Razorpay"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Card Content */}
        <div>
          <h3 className="font-inter text-[14px] font-semibold leading-[20px] text-[#37413D]">
            Razorpay
          </h3>

          <p className="mt-1 font-inter text-[12px] leading-[18px] text-[#0085FF]">
            Card details never touch our servers
          </p>
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full">
        <h2 className="font-inter text-[28px] font-semibold leading-[1.2] tracking-[-0.7px] text-[#0085FF] sm:text-[32px]">
          Payments are handled safely.
        </h2>

        <p className="mt-4 max-w-[700px] font-inter text-[14px] leading-[1.8] text-[#52605A] sm:text-[15px]">
          When you pay for DataCircles, the payment runs through Razorpay,
          one of India's most trusted payment gateways. Your card and bank
          details go straight to them and are never stored on our servers,
          so the sensitive part of every payment is handled by specialists
          whose entire job is keeping it secure.
        </p>

        <p className="mt-5 max-w-[700px] font-inter text-[14px] leading-[1.8] text-[#52605A] sm:text-[15px]">
          You can pay by UPI, credit or debit card, or net banking, and you
          get a proper GST invoice every time.
        </p>
      </div>

    </div>
  </div>
</section>

{/* =========================
    SECTION 06 — GST & COMPLIANCE
========================== */}
<section className="ml-10 w-[60%] rounded-[20px] bg-white sm:mt-20 md:mt-24">
  <div className="mx-auto w-[60%] text-left ">

    {/* Heading */}
    <h2 className="font-inter text-left text-[30px] font-semibold leading-[1.15] tracking-[-0.8px] text-[#0085FF] sm:text-[34px]">
      Built for GST and Indian compliance.
    </h2>

    {/* Description */}
    <p className="mt-4 max-w-[800px] text-left font-inter text-[14px] leading-[1.8] text-[#52605A] sm:text-[15px]">
      Every invoice you raise in DataCircles is built to be GST-compliant,
      with the fields and formats Indian businesses actually need. Add your
      GSTIN and the numbers fall into place, so you stay on the right side
      of compliance without thinking about it.
    </p>

    {/* Second Paragraph */}
    <p className="mt-5 max-w-[800px] text-left font-inter text-[14px] leading-[1.8] text-[#52605A] sm:text-[15px]">
      For your own subscription, you'll always receive a GST invoice,<br/> so you
      can claim the input credit.
    </p>

  </div>
</section>

{/* =========================
    SECTION 07 — CERTIFICATIONS
========================== */}
<section className="mx-auto  w-[80%] rounded-[20px] bg-white ">
  <div className="w-full ">

    {/* Content Box */}
    <div className="ml-auto  w-[60%] rounded-[12px] mt-16 bg-white px-5 py-5 sm:px-6 sm:py-6 md:px-7 md:py-7">

      {/* Heading */}
      <h2 className="font-inter text-[30px] font-semibold leading-[1.2] tracking-[-0.5px] text-[#0085FF]">
        Where we are on certifications
      </h2>

      {/* Paragraph 1 */}
      <p className="mt-4 max-w-[900px] font-inter text-[14px] leading-[1.75] text-[#52605A] sm:text-[15px]">
        We'll be straight with you, because that's the whole point of this
        page. DataCircles is a young company, started in 2025, and formal
        certifications like ISO 27001 and SOC 2 are on our roadmap rather
        than on our wall today.
      </p>

      {/* Paragraph 2 */}
      <p className="mt-5 max-w-[900px] font-inter text-[14px] leading-[1.75] text-[#52605A] sm:text-[15px]">
        Here's what that means in practice. We've built on secure, proven
        infrastructure, our data sits in India, it's encrypted coming and
        going, and sign-ins are handled by a specialist. What we haven't
        done yet is go through the months-long external audits those
        particular badges require. We're working toward them, and we'll
        update this page the moment we have them. Until then, we'd rather
        tell you exactly what we do than hide behind a logo.
      </p>

    </div>
  </div>
</section>

{/* =========================
    SECTION 08 — SECURITY QUESTIONS
========================== */}
<section className="mx-auto mt-16 w-[60%] rounded-[12px] border border-[#C9D3CE] bg-white sm:mt-20 md:mt-24">
  <div className="px-5 py-5 sm:px-6 sm:py-6">

    {/* Heading */}
    <h2 className="font-inter text-[24px] font-semibold leading-[1.3] text-black ">
      Have a security question?
    </h2>

    {/* Description */}
    <p className="mt-2 max-w-[850px] font-inter text-[15px] leading-[1.6] text-[#52605A] ">
      If you're weighing up DataCircles for your business and your team has
      questions about how we handle data, we're happy to answer them properly.
      Write to us and a real person will get back to you.
    </p>

    {/* Email */}
    <a
      href="mailto:compliance@datacircles.in"
      className="mt-3 block w-fit font-inter text-[13px] font-semibold text-[#0085FF] transition-colors hover:text-[#0085FF] sm:text-[14px]"
    >
      compliance@datacircles.in
    </a>

    {/* Links */}
    <div className="mt-3 flex flex-wrap gap-2">
      <a
        href="#"
        className="rounded-full bg-[#F1FAF6] px-4 py-1.5 font-inter text-[12px] font-semibold text-[#0085FF] transition-colors hover:bg-[#0085FF] hover:text-white"
      >
        Privacy policy
      </a>

      <a
        href="#"
        className="rounded-full bg-[#F1FAF6] px-4 py-1.5 font-inter text-[12px] font-semibold text-[#0085FF] transition-colors hover:bg-[#0085FF] hover:text-white"
      >
        Terms of service
      </a>

      <a
        href="#"
        className="rounded-full bg-[#F1FAF6] px-4 py-1.5 font-inter text-[12px] font-semibold text-[#0085FF] transition-colors hover:bg-[#0085FF] hover:text-white"
      >
        Refund & cancellation
      </a>
    </div>

  </div>
</section>

{/* =========================
    SECTION 09 — FINAL CTA
========================== */}
<section className="mx-auto mt-16 w-[100%] overflow-hidden  bg-[#0085FF] sm:mt-20 md:mt-24">
  <div className="flex min-h-[276px] flex-col items-center justify-center px-5 py-12 text-center sm:px-8">


    {/* Heading */}
    <h2 className="mt-5 font-inter text-[30px] font-semibold leading-[1.15] tracking-[-0.8px] text-white sm:text-[34px]">
      Ready when you are.
    </h2>

    {/* Description */}
    <p className="mt-3 max-w-[620px] font-inter text-[14px] leading-[1.6] text-white/85 sm:text-[15px]">
      Try everything free for 7 days, and see how your data is handled before
      you commit a rupee.
    </p>

    {/* Buttons */}
    <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row">
      <button
  type="button"
  className="flex h-[42px] min-w-[101px] items-center justify-center border border-white/60 rounded-[10px] bg-[#0085FF] px-5 font-inter text-[13px] font-semibold text-white transition-all duration-200 hover:bg-white hover:text-[#0085FF]"
>
  Start free
</button>

      <button
        type="button"
        className="flex h-[42px] min-w-[103px] items-center justify-center rounded-[10px] border border-white/60 bg-transparent px-5 font-inter text-[13px] font-semibold text-white transition-all duration-200 hover:bg-white hover:text-[#0085FF]"
      >
        Talk to us
      </button>
    </div>

  </div>
</section>


      </main>
    </div>
  );
}