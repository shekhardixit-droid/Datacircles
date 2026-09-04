import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";




 const teamMembers = [
    {
      name: "Kshitij Nanagare",
      role: "Software Engineer",
      image: "/images/kshitij.jpg",
      description:
        "Here to solve problems that real businesses actually have, not imaginary ones.",
    },
    {
      name: "Roshan Yadav",
      role: "Software Engineer",
      image: "/images/roshan.jpg",
      description:
        "Building the parts you never think about, so that the app just works.",
    },
    {
      name: "Sarthak",
      role: "Software Engineer",
      image: "/images/sarthak.jpg",
      description:
        "Believes good software should feel obvious, and spends his days making it so.",
    },
    {
      name: "Abhishek Jadhav",
      role: "Full Stack Developer",
      image: "/images/abhishek.jpg",
      description:
        "Works across the whole product, from the database right up to the button you press.",
    },
    {
      name: "Rohit Zore",
      role: "Frontend Developer",
      image: "/images/rohit.jpg",
      description:
        "Makes sure it stays fast and simple on whatever page you're holding.",
    },
    {
      name: "Chaitya Doshi",
      role: "Full Stack Developer",
      image: "/images/chaitya.jpg",
      description:
        "Here to build something Indian businesses rely on every single day.",
    },
    {
      name: "Jivesh S",
      role: "UI/UX Designer",
      image: "/images/jivesh.jpg",
      description:
        "Fights for every extra click he can remove.",
    },
  ];

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen mt-5 w-full overflow-x-hidden bg-white font-inter text-black">
      <Navbar />

      {/* Hero / About Section */}
      <section className="flex h-auto w-full flex-col items-center mt-12 md:mt-16 lg:mt-20 px-4 sm:px-6">
        {/* Top Pill */}
        <div className="flex h-[25px] w-[135px] items-center justify-start gap-2 rounded-full px-3 bg-[#EBE6E033]">
          <span className="h-[7px] w-[7px] rounded-full bg-[#0085FF]" />
          <span className="font-inter text-[11px] font-normal text-black whitespace-nowrap">
            About DataCircles
          </span>
        </div>

        {/* Main Text */}
        <div className="mt-6 flex h-auto w-full max-w-[700px] items-center justify-center text-center">
          <h1 className="font-inter text-[32px] font-semibold leading-[1.1] text-black sm:text-[40px] md:text-[48px]">
            We're building the software we wish Indian businesses had.
           
          </h1>
        </div>

        {/* Description */}
        <div className="mt-3 flex h-auto w-full max-w-[635px] items-center justify-center text-center">
          <p className="font-inter text-[14px] font-normal leading-[20px] text-black/60 sm:text-[15px] md:text-[16px]">
           DataCircles keeps your leads, follow-ups, invoices and payments in one 
            <br className="hidden sm:block" />
            place, so you win more customers and get paid on time.
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
{/* Why We Built This */}
<section className="mx-auto mt-20 w-full max-w-[1118px] px-4 pb-24 sm:px-6 md:mt-28">
  <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">

    {/* Left Content */}
    <div className="max-w-[610px]">

      {/* Section Label */}
      

      {/* Heading */}
      <h2 className="mt-5 max-w-[600px] font-inter text-[24px] font-semibold leading-[1.15] tracking-[-0.7px] text-[#0085FF] sm:text-[27px]">
        Our founder built this because he needed it himself.
      </h2>

      {/* Founder Story */}
      <div className="mt-4 space-y-4 font-inter text-[14px] font-normal leading-[1.8] text-[#52605A] sm:text-[15px]">

        <p>
          Yash Mishra spent years selling CRM software across 83 countries.
          He knew the product inside out, and, more usefully, he knew every
          reason a business owner says no to one.
        </p>

        <p>
          Then he came home to Mumbai, joined the family textile business,
          and started his own clothing brand, Cottson. For the first time he
          wasn't selling CRM software, he was shopping for it. He compared
          everything on the market, picked what looked best, and got it
          running. And then he discovered he needed a second app just to
          raise his bills.
        </p>

        <p>
          That was the moment it clicked. A lead comes in, you follow it up,
          it converts into a happy customer, and then you open a completely
          different app and type all the same details in again, by hand,
          just to send an invoice. Nobody had stopped to ask why.
        </p>

        <p>
          The reason is that CRM is a borrowed idea. It was built for large,
          settled companies that have people whose whole job is keeping the
          data updated, and billing was always somebody else's software to
          worry about. That works fine in New York. It doesn't work for an
          owner in Mumbai who is doing the selling, the following up and the
          billing himself, in between serving customers.
        </p>

        <p>
          So Yash built the tool he had gone looking for and couldn't find.
          One place to capture a lead, follow up on time, raise a GST invoice
          and get paid, at a monthly per user price a small business can
          genuinely afford.
        </p>

        {/* Closing Statement */}
        <p className="font-semibold text-[#0085FF]">
          That's how DataCircles started, and it's still the thing we're
          building today.
        </p>

      </div>
    </div>

    {/* Founder Photo Placeholder */}
   <div className="flex w-full items-start justify-center lg:justify-end">
  <div className="aspect-[1.1/1] w-full max-w-[380px] overflow-hidden rounded-[16px] bg-[#F4F8F6] lg:translate-y-30">
    <img
      src="/images/yash-founder.jpg"
      alt=" founder of DataCircles"
      className="h-full w-full object-cover"
    />
  </div>
</div>

  </div>
</section>

{/* Why "DataCircles"? */}
<section className="w-full bg-white">
  <div className="mx-auto w-[80%] py-16 md:py-20 lg:py-24">

   
    {/* Content */}
    <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">

     {/* Left - Logo / Visual */}
<div className="flex w-full items-center justify-center lg:justify-start">
  <div className="w-full max-w-[700px] h-[300px] overflow-hidden rounded-[16px] border border-[#E2E5E3]">
    <img
      src="/images/datacircles-logo.png"
      alt="DataCircles logo"
      className="h-auto w-full object-contain"
    />
  </div>
</div>

      {/* Right - Content */}
      <div className="max-w-[620px] bg-white">

        <h2 className="font-inter text-[25px] font-semibold leading-[1.15] tracking-[-0.7px] text-[#0085FF] sm:text-[28px]">
          Why "DataCircles"?
        </h2>

        <div className="mt-5 space-y-5 font-inter text-[14px] font-normal leading-[1.75] text-[#52605A] sm:text-[15px]">

          <p>
            Every business runs on data, and yours shouldn't be scattered
            across six apps that don't talk to each other.
          </p>

          <p>
            Look closely at our logo and you'll see a circle made of ones
            and zeros, which is what all data is made of at the end of the
            day. That's the whole idea in one picture: your leads, your
            customers, your invoices and your payments, linked together
            and in sync, coming full circle.
          </p>

          <p>
            CRM and invoicing are where we started, and over time we'll add
            whatever an Indian business needs next. Same circle, with more
            of your business inside it.
          </p>

        </div>
      </div>

    </div>
  </div>
</section>
{/* What We Believe */}
<section className="w-full bg-white">
  <div className="mx-auto w-[80%] py-16 md:py-20 lg:py-24">

    {/* Heading */}
    <h2 className="mt-5 text-center font-inter text-[45px] font-semibold leading-[1.15] tracking-[-0.7px] text-[#0085FF]">
      What we believe
    </h2>

    {/* 4 Image Cards */}
    <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:gap-4">

      {[
        {
          image: "/images/belief-1.png",
          alt: "Simple to use",
          title: "Simple enough to use without training.",
          description:
            "If you need a manual, we've done our job badly. You should be able to raise your first invoice on day one.",
        },
        {
          image: "/images/belief-2.png",
          alt: "Built for India",
          title: "Built for India, not adapted for it.",
          description:
            "GST, UPI, WhatsApp and the way Indian businesses actually run. These aren't add-ons here, they're the starting point.",
        },
        {
          image: "/images/belief-3.png",
          alt: "Your data is yours",
          title: "Your data is yours.",
          description:
            "Encrypted, backed up, and exportable whenever you want. No lock-in.",
        },
        {
          image: "/images/belief-4.png",
          alt: "Real person support",
          title: "A real person answers.",
          description:
            "When something breaks, you talk to someone who knows the product.",
        },
      ].map((card, index) => (
        <div
          key={index}
          className="rounded-[14px] border border-[#DDE3E0] bg-white p-5 sm:p-6"
        >
          {/* Image */}
          <div className="mb-3 h-[45px] w-[45px] overflow-hidden rounded-[9px]">
            <img
              src={card.image}
              alt={card.alt}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Title */}
          <h3 className="font-inter text-[18px] font-bold leading-[1.3] text-black">
            {card.title}
          </h3>

          {/* Description */}
          <p className="mt-2 font-inter text-[14px] font-normal leading-[1.55] text-[#52605A]">
            {card.description}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>


{/* The People Behind DataCircles */}
<section className="mx-auto w-[80%] overflow-hidden rounded-[20px] border border-[#DDE3E0] bg-[#F6F9F7]">

  <div className="px-5 py-12 sm:px-8 sm:py-14 md:px-10 md:py-16 lg:px-12 lg:py-20">

    {/* Heading */}
    <div className="text-center">
      <h2 className="font-inter text-[35px] font-semibold leading-[1.15] tracking-[-0.8px] text-[#0085FF]">
        The people behind DataCircles
      </h2>

      <p className="mt-3 font-inter text-[18px] font-normal leading-[1.6] text-[#52605A] sm:text-[20px]">
        A small, growing team in Mumbai, building for businesses like yours.
      </p>
    </div>

    {/* Founder Rectangular Card */}
    <div className="mt-7 flex w-full flex-col items-center gap-5 rounded-[16px] border border-[#CDD8D3] bg-white p-5 sm:flex-row sm:gap-6 sm:p-6">

      {/* Founder Image */}
      <div className="h-[110px] w-[110px] shrink-0 overflow-hidden rounded-full border border-[#D6DFDB] bg-[#EEF3F0]">
        <img
          src="/images/yash-founder.jpg"
          alt="Yash Mishra"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Founder Details */}
      <div className="flex-1 text-center sm:text-left">
        <h3 className="font-inter text-[16px] font-semibold text-black">
          Yash Mishra
        </h3>

        <p className="mt-0.5 font-inter text-[13px] font-semibold text-[#0085FF]">
          Founder
        </p>

        <p className="mt-2 max-w-[850px] font-inter text-[14px] font-normal leading-[1.6] text-[#52605A]">
          Ran a textile business, sold CRM software in 83 countries, and got
          tired of copying customer details from one app into another. An
          IIM Indore alumnus and a KPMG-certified Lean Six Sigma Black Belt.
        </p>
      </div>

    </div>

    {/* Team Grid */}
    <div className="mt-12 grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">

      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center"
        >

          {/* Circular Image */}
          <div className="h-[190px] w-[190px] overflow-hidden rounded-full border border-[#D3DDD8] bg-[#EEF3F0] sm:h-[200px] sm:w-[200px]">
            <img
              src={member.image}
              alt={member.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Name */}
          <h3 className="mt-3 font-inter text-[15px] font-semibold leading-[1.3] text-black">
            {member.name}
          </h3>

          {/* Role */}
          <p className="mt-0.5 font-inter text-[12px] font-semibold leading-[1.3] text-[#0085FF]">
            {member.role}
          </p>

          {/* Description */}
          <p className="mt-2 max-w-[230px] font-inter text-[13px] font-normal leading-[1.55] text-[#8A9691]">
            {member.description}
          </p>

        </div>
      ))}

      {/* Join Us Card */}
      <div className="flex min-h-[190px] flex-col items-center justify-center rounded-[14px]  px-6 text-center sm:min-h-[200px]">

        <h3 className="font-inter text-[14px] font-semibold text-[#0085FF]">
          You?
        </h3>

        <p className="mt-2 font-inter text-[12px] font-normal text-[#8A9691]">
          5+ roles open in Mumbai.
        </p>

      </div>

    </div>

  </div>
</section>
{/* The Basics */}
<section className="mx-auto w-[80%] py-16 md:py-20 lg:py-24">

  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

    {[
      {
        label: "Registered as",
        value: "DataCircles Technology",
      },
      {
        label: "Based in",
        value: "Mumbai, Maharashtra, India",
      },
      {
        label: "Started in",
        value: "2025",
      },
      {
        label: "Team",
        value: "10 people, and growing",
      },
      {
        label: "GSTIN",
        value: "27GUFPM3357H1ZB",
      },
      {
        label: "Funding",
        value: "Bootstrapped by a father and son, building for family businesses",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="rounded-[14px] border border-[#C9D3CE] bg-white p-4 transition-shadow duration-200 hover:shadow-sm"
      >

        {/* Label */}
        <p className="font-inter text-[10px] font-medium uppercase tracking-[0.5px] text-black">
          {item.label}
        </p>

        {/* Value */}
        <p className="mt-1 font-inter text-[16px] font-semibold leading-[1.4] text-[#0085FF]">
          {item.value}
        </p>
      </div>
    ))}

  </div>

</section>

{/* Where We Are Today */}
<section className="mx-auto w-[80%] rounded-[24px] border border-[#DDE3E0] bg-[#F1FAF6]">

  <div className="mx-auto w-[90%] py-14 sm:py-16 md:py-20">

    {/* Heading */}
    <h2 className="mt-5 text-center font-inter text-[30px] font-semibold leading-[1.15] tracking-[-0.8px] text-black sm:text-[35px]">
      Where we are today
    </h2>

    {/* Stats */}
    <div className="mx-auto mt-7 grid max-w-[900px] grid-cols-1 gap-4 sm:grid-cols-3">

      {[
        {
          number: "100+",
          text: (
            <>
              businesses run on
              <br />
              DataCircles
            </>
          ),
        },
        {
          number: "1,00,000+",
          text: "invoices raised",
        },
        {
          number: "2025",
          text: "and we're just getting started",
        },
      ].map((stat, index) => (
        <div
          key={index}
          className="flex min-h-[110px] flex-col items-center justify-center rounded-[14px] border border-[#D5DEDA] bg-white px-5 py-5 text-center"
        >
          <h3 className="font-inter text-[28px] font-semibold leading-none tracking-[-0.5px] text-[#0085FF] sm:text-[30px]">
            {stat.number}
          </h3>

          <p className="mt-2 font-inter text-[13px] font-normal leading-[1.35] text-[#8A9691]">
            {stat.text}
          </p>
        </div>
      ))}

    </div>

  </div>

</section>
{/* Trust & Security */}
<section className="w-full bg-white">
  <div className="mx-auto w-[80%] py-16 md:py-20 lg:py-24">

    {/* Main Content */}
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">

      {/* Left Side - Main Information */}
      <div className="w-full max-w-[660px]">


        {/* Heading */}
        <h2 className="mt-5 font-inter text-[28px] font-semibold leading-[1.15] tracking-[-0.7px] text-[#37413D] sm:text-[32px]">
          Your business data, kept safe.
        </h2>

        {/* Description */}
        <p className="mt-4 font-inter text-[14px] font-normal leading-[1.7] text-[#52605A] sm:text-[15px]">
          Your data sits on AWS servers, encrypted and backed up automatically,
          and every connection is secured with SSL and HTTPS. You can export all
          of it whenever you like, because it's your data.
        </p>

        {/* Security Pills */}
        <div className="mt-5 flex flex-wrap gap-2">
          {[
            "AWS servers",
            "Encrypted",
            "Automatic backups",
            "SSL / HTTPS",
            "Export anytime",
          ].map((item, index) => (
            <span
              key={index}
              className="rounded-full border border-[#D5DEDA] bg-white px-4 py-2 font-inter text-[12px] font-normal text-[#52605A]"
            >
              {item}
            </span>
          ))}
        </div>

      </div>

      {/* Right Side - Honest Note + CTA */}
      <div className="flex w-full items-end lg:justify-end">
        <div className="w-full max-w-[560px]">

          {/* Honest Note */}
          <div className="rounded-[10px] border border-[#0085FF] bg-[#F8FBFF] px-4 py-3 lg:-translate-y-25">
            <p className="font-inter text-[13px] font-normal leading-[1.7] text-[#52605A] sm:text-[14px]">
              We're a 2025 company, so we'd rather be straight with you about
              where we are. Formal certifications like ISO and SOC 2 are on our
              roadmap and not on our wall. What we can tell you is exactly how
              your data is protected today.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-5 flex justify-end">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-[9px] border border-[#0085FF] bg-white px-4 py-2 font-inter text-[13px] font-semibold text-[#0085FF] transition-colors duration-200 hover:bg-[#0085FF] hover:text-white"
            >
              See how we keep your data safe
              <span className="text-[16px] leading-none">→</span>
            </button>
          </div>

        </div>
      </div>

    </div>

  </div>
</section>

{/* Careers */}
<section className="mx-auto w-[90%] max-w-[1050px]">
  <div className="flex min-h-[122px] w-full flex-col items-start justify-between gap-5 rounded-[20px] border border-[#DDE3E0] bg-[#F6F9F7] px-6 py-5 sm:flex-row sm:items-center sm:px-8">

    {/* Left Content */}
    <div className="max-w-[650px]">
      <h2 className="font-inter text-[24px] font-semibold leading-[1.15] tracking-[-0.7px] text-[#0085FF] sm:text-[28px]">
        Want to build this with us?
      </h2>

      <p className="mt-2 max-w-[620px] font-inter text-[13px] font-normal leading-[1.5] text-[#52605A] sm:text-[14px]">
        We're hiring in Mumbai, with 5+ open roles right now. If you want to
        build software that Indian businesses depend on every day, we should
        talk.
      </p>
    </div>

    {/* CTA */}
    <button
      type="button"
      className="inline-flex h-[44px] w-full shrink-0 items-center justify-center gap-2 rounded-[10px] bg-[#0085FF] px-5 font-inter text-[13px] font-semibold text-white transition-all duration-200 hover:opacity-90 sm:ml-6 sm:w-auto"
    >
      See open roles
      <span className="text-[17px] leading-none">→</span>
    </button>

  </div>
</section>

{/* Contact */}
<section className="mx-auto w-[100%] mt-10  bg-[#0085FF]">
  <div className="mx-auto w-[100%] py-14 sm:py-16 md:py-20">

    
    {/* Main Content */}
    <div className="mx-auto mt-8 max-w-[750px] text-center px-4">

      <h2 className="font-inter text-[28px] font-semibold leading-[1.15] tracking-[-0.8px] text-white sm:text-[36px] md:text-[42px] lg:text-[50px] lg:whitespace-nowrap">
        Talk to us, a real person will answer.
      </h2>

      <p className="mx-auto mt-4 max-w-[650px] font-inter text-[14px] font-normal leading-[1.6] text-white/80 sm:text-[16px]">
        Questions about DataCircles, or want to see it working on your own
        data?
        <br className="hidden sm:block" />
        Call us, message us, or start free today.
      </p>

      {/* CTA Buttons */}
      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">

        {/* Primary */}
       <button
          type="button"
          className="
            flex
            h-[42px]
            w-full
            sm:w-[142px]
            items-center
            justify-center
            overflow-hidden
            rounded-full
            border
            border-white
            bg-transparent
            px-[12px]
            text-center
            text-[14px]
            font-medium
            leading-[1.2]
            text-white
            transition-all
            duration-200
            hover:bg-white
            hover:text-[#014c6c]
          "
          onClick={() => navigate("/#")}
        >
          Start free
        </button>

        {/* Secondary */}
        <button
          type="button"
          className="
            flex
            h-[42px]
            w-full
            sm:w-[142px]
            items-center
            justify-center
            overflow-hidden
            rounded-full
            border
            border-white
            bg-transparent
            px-[12px]
            text-center
            text-[14px]
            font-medium
            leading-[1.2]
            text-white
            transition-all
            duration-200
            hover:bg-white
            hover:text-[#014c6c]
          "
        
        >
          <a href="https://wa.me/919892297764" target="_blank" rel="noopener noreferrer">
          Message us on WhatsApp
          </a>
        </button>

      </div>
    </div>

    {/* Contact Information */}
    <div className="mx-auto mt-7 max-w-[660px] px-4">

      {/* Phone + Email */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

        <div className="rounded-[12px] border border-white/30 bg-white/10 px-5 py-4">
          <p className="font-inter text-[10px] font-semibold uppercase tracking-[0.5px] text-white/70">
            Phone / WhatsApp
          </p>

          <p className="mt-2 font-inter text-[14px] font-semibold text-white">
            +91 98922 97764
          </p>
        </div>

        <div className="rounded-[12px] border border-white/30 bg-white/10 px-5 py-4">
          <p className="font-inter text-[10px] font-semibold uppercase tracking-[0.5px] text-white/70">
            Email
          </p>

          <p className="mt-2 font-inter text-[14px] font-semibold text-white">
            contact@datacircles.in
          </p>
        </div>

      </div>

      {/* Office */}
      <div className="mt-3 rounded-[12px] border border-white/30 bg-white/10 px-5 py-4">
        <p className="font-inter text-[10px] font-semibold uppercase tracking-[0.5px] text-white/70">
          Office
        </p>

        <p className="mt-2 font-inter text-[14px] font-semibold leading-[1.5] text-white">
          Regd. Office No. 721, Centura Square IT Park, Road No. 27,
          Wagle Estate, Thane West, 400604, Maharashtra, India
        </p>
      </div>

      {/* Availability */}
      <p className="mt-4 text-center font-inter text-[12px] font-normal text-white/70">
        Phone Mon to Fri, 9am to 6pm IST. Chat support 24×7.
      </p>

    </div>

  </div>
</section>
  

      <Footer />
    </div>
  );
}
