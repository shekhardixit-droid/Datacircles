import React from "react";
import Navbar from "../components/Navbar";
import FAQ from "../components/freetools/FAQ";
import InvoiceBuilder from "../components/freetools/InvoiceBuilder";

const FreeTools = () => {
  const cards = [
  {
    image: "YOUR_GST_INVOICE_IMAGE",
    title: "GST Invoice Generator",
    description:
      "Create a clean, GST-ready invoice in seconds and send it to your client.",
    button: "Explore",
  },
  {
    image: "YOUR_GST_INVOICE_IMAGE",
    title: "GST Invoice Generator",
    description:
      "Create a clean, GST-ready invoice in seconds and send it to your client.",
    button: "Explore",
  },
  {
    image: "YOUR_GST_INVOICE_IMAGE",
    title: "GST Invoice Generator",
    description:
      "Create a clean, GST-ready invoice in seconds and send it to your client.",
    button: "Explore",
  },
  {
    image: "YOUR_QUOTATION_IMAGE",
    title: "Quotation Generator",
    description:
      "Send a professional quote that wins the deal.",
    button: "Explore",
  },
  {
    image: "YOUR_PRO_FORMA_INVOICE_IMAGE",
    title: "Pro-Forma Invoice Generator",
    description:
      "Share an estimated invoice before the sale is final.",
    button: "Explore",
  },
  {
    image: "YOUR_DELIVERY_CHALLAN_IMAGE",
    title: "Delivery Challan Generator",
    description:
      "Send goods with a proper challan, every detail in place.",
    button: "Explore",
  },
];

const pills = [
  "100% Free",
  "No Sign Up",
  "No Watermark",
  "GST Ready",
];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">

      {/* Top Strip */}
      <div className="mb-5 h-[18px] w-full bg-[#ABABAB]" />

      {/* Navbar */}
      <Navbar />

      {/* Main Page */}
      <main className="w-full">

        <div
  className="
    flex
    ml-30
    mt-10
    h-[20px]
    w-[265px]
    items-center
    justify-center
    font-['Inter']
    text-[16px]
    font-light
    leading-[100%]
    tracking-[-1px]
    text-black/40
  "
>
  Free Tools GST Invoice Generator
</div>



<div className="ml-36 mt-4 h-[168px] w-[705px]">

  {/* Heading */}
  <h2
    className="
      h-[38px]
      w-[480px]
      font-['Inter']
      text-[32px]
      font-medium
      leading-[100%]
      tracking-[-2px]
      text-black
    "
  >
    Free GST Invoice Generator
  </h2>

  {/* Description */}
  <div
    className="
      h-[50px]
      w-[705px]
      ml-1
      font-['Inter']
      text-[18px]
      font-normal
      leading-[140%]
      tracking-[0px]
      text-black/40
    "
  >
    Make a clean, GST-ready invoice in seconds. No sign-up, no watermark, and it's yours to download and share.
  </div>

  {/* Pills */}
  <div className="flex mt-3 h-[32px] w-[496px] items-center gap-[8px]">
    {pills.map((pill) => (
      <div
        key={pill}
        className="
          flex
          h-[32px]
          w-fit
          items-center
          justify-center
          rounded-full
          bg-[#0085FF]
          px-[14px]
          font-['Inter']
          text-[14px]
          font-medium
          leading-[16px]
          tracking-[-0.04em]
          text-white
          whitespace-nowrap
        "
      >
        {pill}
      </div>
    ))}
  </div>

</div>


        <InvoiceBuilder/>

        {/* Main Container */}
        <section className="mx-auto mt-16 h-auto min-h-[981px] w-full max-w-[1216px] px-4 sm:px-6 md:px-0">

          {/* Upper Left Content */}
          <div className="flex h-[164px] w-full max-w-[493px] flex-col">

            {/* Top Text */}
            <div className="flex h-[26px] w-full items-start justify-start">
              <span className="font-inter text-[18px] font-medium leading-[26px] text-[#0085FF]">
                Free tools
              </span>
            </div>

            {/* Heading */}
            <div className="mt-3 flex h-[64px] w-[233px] items-start justify-start whitespace-nowrap">
              <h1 className="font-inter text-[32px] font-medium leading-[38px] text-black">
                More free tools
                <br/>
for your business
              </h1>
            </div>

            {/* Description */}
            <div className="mt-3 flex h-[26px] w-full items-start justify-start">
              <p className="font-inter text-[18px] font-normal leading-[26px] text-black/40">
                All free, all yours. No Sign-Up needed
              </p>
            </div>

          </div>


          {/* Cards Container */}
          <div className="mt-10 h-auto min-h-[779px] w-full">

            {/* Cards Grid */}
            <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

              {cards.map((card, index) => (
                <div
                  key={index}
                  className="flex h-[382px] w-full flex-col overflow-hidden rounded-[20px] border border-[#E0E0E1] bg-white"
                >

                  {/* Card Image */}
                  <div className="h-[245px] w-full shrink-0 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover"
                    />
                  </div>


                  {/* Card Bottom Content */}
                  <div className="flex h-[137px] w-full flex-col px-4 py-3">

                    {/* Heading + Paragraph */}
                    <div className="flex h-[61px] w-full flex-col">

                      {/* Heading */}
                      <h2 className="font-inter text-[16px] font-medium leading-[22px] text-black">
                        {card.title}
                      </h2>

                      {/* Paragraph */}
                      <p className="mt-1 font-inter text-[14px] font-normal leading-[19px] text-black/40">
                        {card.description}
                      </p>

                    </div>


                    {/* Button */}
                    <button
                      type="button"
                      className="mt-auto flex h-[32px] w-full items-center justify-center rounded-[8px] border border-[#0085FF] bg-white font-inter text-[14px] font-normal leading-[18px] text-[#0085FF] transition-colors duration-200 hover:bg-[#0085FF] hover:text-white"
                    >
                      {card.button}
                    </button>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* FAQ Section */}
<section className="mx-auto mt-25 flex h-auto min-h-[556px] w-full max-w-[1216px] flex-col md:flex-row">

  {/* Left Part */}
  <div className="flex h-[556px] w-full flex-col justify-start md:w-[608px]">

    {/* Text Content */}
    <div className="flex w-full max-w-[493px] flex-col">

      {/* Top Text */}
      <div className="flex h-[26px] w-full items-start justify-start">
        <span className="font-inter text-[18px] font-medium leading-[26px] text-[#0085FF]">
        Questions? We’ve Got You.
        </span>
      </div>

      {/* Heading */}
      <div className="mt-3 flex h-[64px] w-[233px] items-start justify-start whitespace-nowrap">
        <h2 className="font-inter text-[32px] font-semibold leading-[32px] tracking-[-2px] text-black">
  Everything You Want to Know
  <br />
  Before You Start
</h2>
      </div>

      {/* Paragraph */}
      <div className="mt-3 flex h-auto w-full items-start justify-start">
        <p className="font-inter text-[18px] font-normal leading-[26px] text-black/40">
          Clear answers to common doubts no hidden terms.
        </p>
      </div>

    </div>

  </div>

<FAQ/>

</section>

      </main>

    </div>
  );
};

export default FreeTools;