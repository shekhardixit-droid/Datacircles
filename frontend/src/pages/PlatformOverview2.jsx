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
            <p className="w-full font-inter text-[14px] font-normal leading-[20px] text-black/60 sm:text-[15px] md:text-[16px]">
              Make professional invoices, quotations and more, genuinely free.
              <br className="hidden sm:block" />
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
        {/*
          On desktop (lg+) the cards float over the hero image using
          absolute positioning against a fixed reserved height, matching
          the original design exactly. Below lg, that fixed-height /
          percentage-based overlay doesn't track the image's real
          (fluid) height, so the cards instead flow in normal
          document order right under the image.
        */}

        <div className="relative w-full lg:-mt-8 lg:pb-[1050px]">

          {/* Hero Image */}
          <img
            src="https://ik.imagekit.io/qiap0iq38/DATACIRCLES_PROJECT/Platform2/Hero%20Sction%20(3).png"
            alt="Sales Document"
            className="h-auto w-full object-contain"
          />

          {/* Sales Document Pill */}
          <button
            type="button"
            className="absolute left-[5%] top-[6%] flex h-[28px] w-max items-center justify-center rounded-full bg-[#0085FF] px-3 font-inter text-[12px] font-normal leading-[16px] text-white sm:left-[8%] sm:top-[8%] sm:ml-15 sm:h-[32px] sm:px-4 sm:text-[14px]"
          >
            Sales Document
          </button>


          {/* First Cards */}
          <section className="relative z-10 mx-auto mt-6 w-full max-w-[1216px] px-4 sm:px-6 md:p-8 lg:absolute lg:left-1/2 lg:top-[25%] lg:mx-0 lg:-mt-80 lg:-translate-x-1/2">

            {/* Cards Grid */}
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">

              {cards.map((card, index) => (
                <div
                  key={index}
                  className="relative h-[380px] w-full overflow-hidden rounded-[20px] border border-[#E0E0E1] bg-cover bg-center sm:h-[450px] lg:h-[518.5px]"
                  style={{
                    backgroundImage: `url(${card.image})`,
                  }}
                >

                  {/* Card Content */}
                  <div className="absolute bottom-0 left-0 flex min-h-[128px] w-full flex-col bg-white px-4 py-4">

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
                      className="mt-auto flex h-[34px] w-full shrink-0 translate-y-1 items-center justify-center rounded-[8px] border border-[#0085FF] bg-white font-inter text-[14px] font-normal text-[#0085FF] transition-colors duration-200 hover:bg-[#0085FF] hover:text-white"
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

        <section className="mx-auto mt-10 w-full max-w-[1216px] px-4 sm:px-6 md:px-8 lg:-mt-[680px]">

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
                className="relative h-[380px] w-full overflow-hidden rounded-[20px] border border-[#E0E0E1] bg-cover bg-center sm:h-[450px] lg:h-[518.5px]"
                style={{
                  backgroundImage: `url(${card.image})`,
                }}
              >

                {/* Card Content */}
                <div className="absolute bottom-0 left-0 flex min-h-[128px] w-full flex-col bg-white px-4 py-4">

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
                    className="mt-auto flex h-[36px] w-full shrink-0 translate-y-1 items-center justify-center rounded-[8px] border border-[#0085FF] bg-white font-inter text-[14px] font-normal text-[#0085FF] transition-colors duration-200 hover:bg-[#0085FF] hover:text-white"
                  >
                    {card.button}
                  </button>

                </div>

              </div>
            ))}

          </div>

        </section>

        {/* Bottom Heading */}
        <div className="mx-auto mt-16 flex h-auto w-full max-w-[320px] items-center justify-center px-4 text-center sm:mt-20 md:mt-24">
          <h2 className="font-inter text-[26px] font-medium leading-[1.15] text-black sm:text-[32px] sm:leading-[35px]">
            3 Steps, No Sign Up
          </h2>
        </div>

        {/* Three Feature Cards */}
        <section className="mx-auto mt-6 h-auto w-full max-w-[1216px] px-4 sm:px-6 md:px-8">

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
                className="h-auto min-h-[154px] w-full rounded-[20px] bg-[#ECECEC] p-4"
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
                <div className="mt-4 flex h-auto w-full flex-col items-start text-left">

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
        <section className="mx-auto mt-20 mb-20 flex h-auto w-full max-w-[1216px] flex-col gap-10 px-4 sm:px-6 md:px-8 lg:h-[588px] lg:flex-row lg:gap-0 lg:px-0">

          {/* Left Part */}
          <div className="flex h-auto w-full items-center justify-center lg:h-[588px] lg:w-[550px]">

            <div className="flex h-auto w-full flex-col justify-center lg:h-[311px] lg:w-[550px] lg:px-4">

              {/* Label */}
              <div className="flex h-auto w-full items-start justify-start lg:h-[24px] lg:w-[518px]">
                <span className="font-inter text-[16px] font-medium leading-[24px] text-[#0085FF]">
                  Reason behind Resources
                </span>
              </div>

              {/* Heading */}
              <div className="mt-3 flex h-auto w-full items-start justify-start lg:h-[29px] lg:w-[518px]">
                <h2 className="font-inter text-[24px] font-semibold leading-[29px] text-black">
                  Why we give these away
                </h2>
              </div>

              {/* Paragraphs */}
              <div className="mt-6 w-full lg:w-[518px]">

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
          <div className="flex h-auto w-full flex-1 items-center justify-center overflow-hidden lg:h-[588px]">

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