import Navbar from "../components/Navbar";
import React from "react";
import FourCards from "../components/payments/FourCards";
import Explore from "../components/payments/Explore";
import CTA from "../components/payments/CTA";
import DataMigration from "../components/payments/DataMigration";
import IntegrationCTA from "../components/payments/IntegrationCTA";

const Payment1 = () => {
  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden">
      
      {/* Top Strip */}
      <div className="mb-5 h-[18px] w-full bg-[#ABABAB]" />

      {/* Navbar */}
      <Navbar />

      {/* Main Page */}
      <main className="w-full">
        
        {/* Hero / Payment Section */}
        <section className="flex h-auto w-full flex-col items-center mt-12 md:mt-16 lg:mt-20 px-4 sm:px-6">
          
          {/* Top Pill */}
          <div className="flex h-[25px] w-[160px] items-center justify-start gap-2 rounded-full px-3 bg-[#EBE6E033]">
            <span className="h-[7px] w-[7px] rounded-full bg-[#0085FF]" />

            <span className="font-inter text-[11px] font-normal text-black">
              Integrations
            </span>
          </div>

          {/* Main Text */}
          <div className="mt-6 flex h-auto w-full max-w-[635px] items-center justify-center text-center">
            <h1 className="font-inter text-[32px] sm:text-[40px] md:text-[48px] font-semibold leading-[1.1] text-black">
             Fewer tools to 
              <br />
       connect in the first place.
            </h1>
          </div>

          {/* Description */}
       <div className="mt-3 flex h-auto w-full max-w-[850px] items-center justify-center text-center">
  <p className="w-[850px] font-inter text-[14px] font-normal leading-[20px] text-black/60 sm:text-[15px] md:text-[16px]">
    Most software needs a dozen integrations because it only does one job. DataCircles already holds your leads,
    <br />
    invoices and payments together, so the connections you need are the ones that touch the outside world.
  </p>
</div>

          {/* Two Pills */}
          <div className="mt-5 flex h-auto w-full max-w-[307px] flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
           <button
  className="flex h-[49px] w-full sm:w-[149px] items-center justify-center rounded-full bg-[#E5EDF5] font-inter text-[14px] font-medium text-black transition-colors duration-200 hover:bg-[#0085FF] hover:text-white"
>
  Start Free
</button>

<button
  className="flex h-[49px] w-full sm:w-[149px] items-center justify-center rounded-full bg-[#E5EDF5] font-inter text-[14px] font-medium text-black transition-colors duration-200 hover:bg-[#0085FF] hover:text-white"
>
  Book a Demo
</button>

          </div>

          {/* Bottom Text */}
          <div className="mt-5 flex h-auto w-full max-w-[291px] items-center justify-center text-center">
            <p className="font-inter text-[11px] sm:text-[12px] whitespace-normal sm:whitespace-nowrap font-normal text-black/50">
              7-day free trial · No card required · GST-ready · Works on any device
            </p>
          </div>

        </section>

{/* Image */}
<div className="mt-8 w-full">
  <img
    src="https://ik.imagekit.io/qiap0iq38/DATACIRCLES_PROJECT/PAYMENTS/Hero%20Sction%20(2).png"
    alt="Payment"
    className="h-auto w-full object-cover"
  />
</div>

 {/* Heading */}
      <div className="mx-auto flex h-auto w-full max-w-[480px] items-center justify-center text-center">
        <h2 className="whitespace-normal sm:whitespace-nowrap font-inter text-[24px] sm:text-[28px] md:text-[32px] font-medium leading-[1.2] md:leading-[38px] tracking-[-1px] md:tracking-[-2px] text-black">
          What connects today
        </h2>
      </div>

      {/* Description */}
      <div className="mx-auto mt-[12px] flex h-auto w-full max-w-[1000px] items-center justify-center text-center">
        <p className="font-inter text-[15px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] md:leading-[25px] text-[#78788D]">
          Then comes the awkward bit. Was that one paid? Did anyone follow up? You don't want to annoy a good client by asking twice, and you don't want to write off money because nobody asked at all. So the chasing gets delayed, and the cash comes in later than it should.
        </p>
      </div>


      {/* Connections Section */}
<section className="mx-auto mt-20 h-auto min-h-[978px] w-full max-w-[1216px] rounded-[20px] bg-[#F3F9FC] px-6 py-10 md:px-10">

  {[
    {
    icon: "dist/assets/pic.svg",
    label: "BRINGING YOUR DATA IN",
    cards: [
      {
        icon: "dist/assets/pic2.svg",
        title: "Excel & CSV import",
        description:
          "Bring your existing clients, leads and items across, with our team helping map the columns.",
      },
      {
        icon: "dist/assets/pic2.svg",
        title: "Website forms",
        description:
          "Enquiries from your site land straight in your pipeline as new leads.",
      },
      {
        icon: "dist/assets/pic2.svg",
        title: "Export to Excel",
        description:
          "Your data is yours. Take it out whenever you want, in a standard format.",
      },
    ],
  },

  {
    icon: "dist/assets/pic.svg",
    label: "MEETINGS & COMMUNICATION",
    cards: [
      {
        icon: "dist/assets/pic2.svg",
        title: "Google Meet",
        description:
          "Meetings in your screens show Google Meet as a location. Confirm whether this is a live link-generating integration or a text field.",
      },
      {
        icon: "dist/assets/pic2.svg",
        title: "Zoom",
        description:
          "Enquiries from your site land straight in your pipeline as new leads.",
      },
      {
        icon: "dist/assets/pic2.svg",
        title: "WhatsApp Sharing",
        description:
          "Your data is yours. Take it out whenever you want, in a standard format.",
      },
    ],
  },

  {
    icon: "dist/assets/pic.svg",
    label: "RUNNING THE PLATFORM",
    cards: [
      {
        icon: "dist/assets/pic2.svg",
        title: "Razorpay",
        description:
          "Powers your DataCircles subscription payments, on UPI, cards and net banking. Card details never touch our servers.",
      },
      {
        icon: "dist/assets/pic2.svg",
        title: "Auth0",
        description:
          "Handles secure logins and user roles, so account security is managed by specialists.",
      },
      {
        icon: "dist/assets/pic2.svg",
        title: "Intercom",
        description:
          "The in-app chat that connects you to a real person, 24×7.",
      },
      ],
    },
  ].map((section, sectionIndex) => (
    <div
      key={sectionIndex}
      className="flex flex-col items-center"
    >
{/* Top Pill */}
<div className="flex h-[32px] w-max items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white px-4">
  <img
    src={section.icon}
    alt=""
    className="h-[18px] w-[18px] shrink-0 object-contain"
  />

  <span className="font-inter text-[14px] font-normal text-[#0085FF]">
    {section.label}
  </span>
</div>


{/* Cards */}
<div className="mt-8 mb-8 grid h-auto w-full max-w-[1216px] grid-cols-1 gap-5 md:grid-cols-3">

  {section.cards.map((card, cardIndex) => (
    <div
      key={cardIndex}
      className="flex h-[228px] w-full flex-col items-center rounded-[20px] border border-[#E0E0E1] bg-white p-6 text-center"
    >

{/* Circular Icon */}
<div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#E0E0E1] bg-[#F3F9FC] shadow-[0_4px_12px_rgba(0,0,0,0.10)]">
  <img
    src={card.icon}
    alt=""
    className="mt-3 h-[82px] w-[82px] max-w-none object-cover"
  />
</div>

      {/* Card Content */}
      <div className="mt-12 flex w-full flex-col items-center text-center">
        <h3 className="font-inter text-[20px] font-medium leading-[26px] text-black">
          {card.title}
        </h3>

        <p className="mt-2 max-w-[310px] font-inter text-[14px] font-normal leading-[20px] text-[#78788D]">
          {card.description}
        </p>
      </div>

    </div>
  ))}

</div>

</div>
))}

</section>

<DataMigration/>

<IntegrationCTA/>

<CTA/>
      </main>
    </div>
  );
};

export default Payment1;