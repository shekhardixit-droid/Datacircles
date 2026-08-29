import React from "react";
import Navbar from "../components/Navbar";
import CTA from "../components/payments/CTA";

const PlatformOverview = () => {
  const cards = [
    {
      image: "YOUR_QUOTES_IMAGE",
      title: "Quotes",
      description:
        "Create and manage quotes effortlessly. Customize pricing, terms, and conditions to win more deals.",
      button: "Explore Quotes",
    },
    {
      image: "YOUR_SALES_ORDERS_IMAGE",
      title: "Sales Orders",
      description:
        "Convert quotes into sales orders seamlessly. Track orders and manage fulfillment with ease.",
      button: "Explore Sales Orders",
    },
    {
      image: "YOUR_INVOICES_IMAGE",
      title: "Invoices",
      description:
        "Generate professional invoices in seconds. Send, track, and get paid faster.",
      button: "Explore Invoices",
    },
    {
      image: "YOUR_CREDIT_NOTES_IMAGE",
      title: "Credit Notes",
      description:
        "Issue credit notes and manage refunds smoothly. Maintain transparency with your customers.",
      button: "Explore Credit Notes",
    },
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">

      {/* Top Strip */}
      <div className="mb-5 h-[18px] w-full bg-[#ABABAB]" />

      {/* Navbar */}
      <Navbar />

      {/* Main Page */}
      <main className="w-full">

        {/* Hero / Payment Section */}
        <section className="mt-12 flex h-auto w-full flex-col items-center px-4 sm:mt-16 sm:px-6 lg:mt-20">

          {/* Top Pill */}
          <div className="flex w-fit items-center justify-center gap-2 rounded-full bg-[#EBE6E033] px-3 py-1">
            <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-[#0085FF]" />

            <span className="font-inter text-[11px] font-normal leading-none text-black">
              Free Tools
            </span>
          </div>

          {/* Main Text */}
          <div className="mt-6 flex h-auto w-full max-w-[635px] items-center justify-center text-center">
            <h1 className="font-inter text-[32px] font-semibold leading-[1.1] text-black sm:text-[40px] md:text-[48px]">
              Free Tools to help
              <br />
              Indian businesses to Grow
            </h1>
          </div>

          {/* Description */}
          <div className="mt-3 flex h-auto w-full max-w-[850px] items-center justify-center text-center">
            <p className="w-[850px] font-inter text-[14px] font-normal leading-[20px] text-black/60 sm:text-[15px] md:text-[16px]">
              Make professional invoices, quotations and more, genuinely free.
              <br />
              No sign-up, no watermark, no catch. It's our small way of backing the businesses building India.
            </p>
          </div>

          {/* Two Pills */}
          <div className="mt-5 flex h-auto w-full max-w-[307px] flex-col items-center justify-between gap-3 sm:flex-row sm:gap-0">

            <button
              className="flex h-[49px] w-full items-center justify-center rounded-full bg-[#E5EDF5] font-inter text-[14px] font-medium text-black transition-colors duration-200 hover:bg-[#0085FF] hover:text-white sm:w-[149px]"
            >
              Explore Tools
            </button>

            <button
              className="flex h-[49px] w-full items-center justify-center rounded-full bg-[#E5EDF5] font-inter text-[14px] font-medium text-black transition-colors duration-200 hover:bg-[#0085FF] hover:text-white sm:w-[149px]"
            >
              Book a Demo
            </button>

          </div>

          {/* Bottom Text */}
          <div className="mt-5 flex h-auto w-full max-w-[291px] items-center justify-center text-center">
            <p className="whitespace-normal font-inter text-[11px] font-normal text-black/50 sm:whitespace-nowrap sm:text-[12px]">
              100% Free · No Sign Up · No Watermark · Your Branding Your Document
            </p>
          </div>

        </section>


        {/* ====================================================== */}
        {/* HERO IMAGE + FIRST CARDS */}
        {/* ====================================================== */}

        <div className="relative -mt-8 w-full pb-[1050px]">

          {/* Hero Image */}
          <img
            src="https://ik.imagekit.io/qiap0iq38/DATACIRCLES_PROJECT/Platform2/Hero%20Sction%20(3).png"
            alt="Sales Document"
            className="h-auto w-full object-contain"
          />

          {/* Sales Document Pill */}
          <button
            type="button"
            className="absolute left-[8%] top-[8%] flex h-[32px] w-max items-center justify-center rounded-full bg-[#0085FF] px-4 font-inter text-[14px] ml-15 font-normal leading-[16px] text-white"
          >
            Sales Document
          </button>


          {/* First Cards */}
          <section className="absolute left-1/2 top-[25%] z-10 w-full max-w-[1216px] -mt-80 -translate-x-1/2 p-4 sm:p-6 md:p-8">

            {/* Cards Grid */}
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">

              {cards.map((card, index) => (
                <div
                  key={index}
                  className="relative h-[518.5px] w-full overflow-hidden rounded-[20px] border border-[#E0E0E1] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${card.image})`,
                  }}
                >

                  {/* Card Content */}
                  <div className="absolute bottom-0 left-0 flex h-[128px] w-full flex-col bg-white px-4 py-4">

                    {/* Heading */}
                    <div className="w-full">
                      <h3 className="font-inter text-[16px] font-semibold leading-[22px] text-black">
                        {card.title}
                      </h3>

                      {/* Paragraph */}
                      <p className="mt-1 font-inter text-[14px] font-normal leading-[20px] text-black/40">
                        {card.description}
                      </p>
                    </div>

                    {/* Button */}
                    <button
                      type="button"
                      className="mt-auto flex translate-y-1 h-[34px]  w-full shrink-0 items-center justify-center rounded-[8px] border border-[#0085FF] bg-white font-inter text-[14px] font-normal text-[#0085FF] transition-colors duration-200 hover:bg-[#0085FF] hover:text-white"
                    >
                      {card.button}
                    </button>

                  </div>

                </div>
              ))}

            </div>

          </section>

        </div>


        {/* ====================================================== */}
        {/* SECOND PILL + SECOND CARDS */}
        {/* ====================================================== */}

        <section className="mx-auto w-full max-w-[1216px] px-4 sm:px-6 md:px-8 -mt-170">

          {/* Second Pill */}
          <div className="mb-4 flex">
            <button
              type="button"
              className="flex h-[32px] w-max items-center justify-center rounded-full bg-[#0085FF] px-4 font-inter text-[14px] font-normal leading-[16px] text-white"
            >
              Sales Document
            </button>
          </div>


          {/* Second Cards Grid */}
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">

            {cards.map((card, index) => (
              <div
                key={index}
                className="relative h-[518.5px] w-full overflow-hidden rounded-[20px] border border-[#E0E0E1] bg-cover bg-center"
                style={{
                  backgroundImage: `url(${card.image})`,
                }}
              >

                {/* Card Content */}
                <div className="absolute bottom-0 left-0 flex h-[128px] w-full flex-col bg-white px-4 py-4">

                  {/* Heading */}
                  <div className="w-full">
                    <h3 className="font-inter text-[16px] font-semibold leading-[22px] text-black">
                      {card.title}
                    </h3>

                    {/* Paragraph */}
                    <p className="mt-1 font-inter text-[14px] font-normal leading-[20px] text-black/40">
                      {card.description}
                    </p>
                  </div>

                  {/* Button */}
                  <button
                    type="button"
                    className="mt-auto flex h-[36px] translate-y-1 w-full shrink-0 items-center justify-center rounded-[8px] border border-[#0085FF] bg-white font-inter text-[14px] font-normal text-[#0085FF] transition-colors duration-200 hover:bg-[#0085FF] hover:text-white"
                  >
                    {card.button}
                  </button>

                </div>

              </div>
            ))}

          </div>

        </section>

        {/* Bottom Heading */}
<div className="mx-auto mt-30 flex h-[35px] w-[306px] items-center justify-center">
  <h2 className="font-inter text-[32px] font-medium leading-[35px] text-black">
    3 Steps, No Sign Up
  </h2>
</div>

{/* Three Feature Cards */}
<section className="mx-auto mt-6 h-auto w-full max-w-[1216px]">

  <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">

   {[
      {
        icon: "dist/assets/i1.svg",
        number: "01",
        title: "Fill in your details",
        description:
          "Add your business, your client, and what you're billing for. Watch it come together live as you type.",
      },
      {
        icon: "dist/assets/i2.svg",
        number: "02",
        title: "Make it Yours",
        description:
          "Pick a theme and colour that fits your brand. No design skills needed.",
      },
      {
        icon: "dist/assets/i3.svg",
        number: "03",
        title: "Download and Share",
        description:
          "Save it as a PDF, or share it straight away. It's yours to keep, with your name on it, not ours.",
      },
    ].map((card, index) => (
      <div
        key={index}
        className="h-[154px] w-full rounded-[20px] bg-[#ECECEC] p-4"
      >

        {/* Top Row */}
        <div className="flex h-[44px] w-full items-center justify-between">

          {/* Icon */}
          <div className="h-[44px] w-[44px] shrink-0">
            <img
              src={card.icon}
              alt=""
              className="h-[44px] w-[44px] object-contain"
            />
          </div>

          {/* Number */}
          <span className="font-inter text-[24px] font-bold leading-[26px] text-black opacity-[0.08]">
            {card.number}
          </span>

        </div>


        {/* Card Content */}
        <div className="mt-4 flex h-[62px] w-full flex-col items-start text-left">

          {/* Heading */}
          <h3 className="font-inter text-[18px] font-medium leading-[22px] text-black">
            {card.title}
          </h3>

          {/* Paragraph */}
          <p className="mt-1 font-inter text-[14px] font-normal leading-[20px] text-[#78788D]">
            {card.description}
          </p>

        </div>

      </div>
    ))}

  </div>

</section>


{/* Bottom Information Section */}
<section className="mx-auto mt-20 mb-20 flex h-[588px] w-full max-w-[1216px]">

  {/* Left Part */}
  <div className="flex h-[588px] w-[550px] items-center justify-center">

    <div className="flex h-[311px] w-[550px] flex-col justify-center px-4">

      {/* Label */}
      <div className="flex h-[24px] w-[518px] items-start justify-start">
        <span className="font-inter text-[16px] font-medium leading-[24px] text-[#0085FF]">
          Reason behind Resources
        </span>
      </div>

      {/* Heading */}
      <div className="mt-3 flex h-[29px] w-[518px] items-start justify-start">
        <h2 className="font-inter text-[24px] font-semibold leading-[29px] text-black">
          Why we give these away
        </h2>
      </div>

      {/* Paragraphs */}
      <div className="mt-6 w-[518px]">

        <p className="font-inter text-[16px] font-normal leading-[24px] text-black">
          We're building DataCircles for the long run, for a growing India and the businesses driving it. Not every business is ready for a full CRM and invoicing app yet, and that's completely fine. If a free tool helps you send a better invoice today and get paid a little faster, we've done something worth doing.
        </p>

        <br />

        <p className="font-inter text-[16px] font-normal leading-[24px] text-black">
          So use these as much as you like. No account, no cost, no strings. When your business grows to the point where you want everything in one place, your leads, your follow-ups, your invoices and your payments, we'll be right here.
        </p>

      </div>

    </div>

  </div>


  {/* Right Part */}
  <div className="flex h-[588px] flex-1 items-center justify-center overflow-hidden">

    <img
      src="https://ik.imagekit.io/qiap0iq38/DATACIRCLES_PROJECT/PAYMENTS/Explore1?updatedAt=1787913088733"
      alt="Professional document"
      className="h-auto w-full object-contain"
    />

  </div>

</section>


        {/* CTA */}
        <CTA />

      </main>
    </div>
  );
};

export default PlatformOverview;