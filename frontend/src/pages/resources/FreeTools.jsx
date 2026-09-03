
import React from "react";
import Navbar from "../../components/Navbar";
import FAQ from "../../components/freetools/FAQ";
import InvoiceBuilder from "../../components/freetools/InvoiceBuilder";

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

        {/* Hero Breadcrumb */}
        <div
          className="
            ml-30
            mt-10
            flex
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
            max-[767px]:mx-auto
            max-[767px]:mt-8
            max-[767px]:w-auto
            max-[767px]:max-w-[calc(100%-32px)]
            max-[480px]:text-[14px]
          "
        >
          Free Tools GST Invoice Generator
        </div>

        {/* Hero Content */}
        <div
          className="
            ml-36
            mt-4
            h-[168px]
            w-[705px]
            max-[767px]:mx-auto
            max-[767px]:h-auto
            max-[767px]:w-[calc(100%-32px)]
            max-[480px]:mt-4
          "
        >

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
              max-[767px]:h-auto
              max-[767px]:w-full
              max-[767px]:text-[30px]
              max-[480px]:text-[26px]
              max-[480px]:leading-[110%]
            "
          >
            Free GST Invoice Generator
          </h2>

          {/* Description */}
          <div
            className="
              ml-1
              mt-0
              h-[50px]
              w-[705px]
              font-['Inter']
              text-[18px]
              font-normal
              leading-[140%]
              tracking-[0px]
              text-black/40
              max-[767px]:mt-3
              max-[767px]:h-auto
              max-[767px]:w-full
              max-[480px]:text-[16px]
            "
          >
            Make a clean, GST-ready invoice in seconds. No sign-up, no watermark, and it's yours to download and share.
          </div>

          {/* Pills */}
          <div
            className="
              mt-3
              flex
              h-[32px]
              w-[496px]
              items-center
              gap-[8px]
              max-[767px]:h-auto
              max-[767px]:w-full
              max-[767px]:flex-wrap
              max-[480px]:gap-[6px]
            "
          >
            {pills.map((pill) => (
              <div
                key={pill}
                className="
                  flex
                  h-[32px]
                  w-fit
                  shrink-0
                  items-center
                  justify-center
                  whitespace-nowrap
                  rounded-full
                  bg-[#0085FF]
                  px-[14px]
                  font-['Inter']
                  text-[14px]
                  font-medium
                  leading-[16px]
                  tracking-[-0.04em]
                  text-white
                  max-[480px]:px-[12px]
                  max-[480px]:text-[13px]
                "
              >
                {pill}
              </div>
            ))}
          </div>

        </div>

        {/* Invoice Builder */}
        <div className="w-full">
          <InvoiceBuilder />
        </div>

        {/* Main Container */}
        <section
          className="
            mx-auto
            mt-16
            h-auto
            min-h-[981px]
            w-full
            max-w-[1216px]
            px-4
            sm:px-6
            md:px-0
            max-[767px]:mt-12
          "
        >

          {/* Upper Left Content */}
          <div
            className="
              flex
              h-[164px]
              w-full
              max-w-[493px]
              flex-col
              max-[767px]:h-auto
            "
          >

            {/* Top Text */}
            <div className="flex h-[26px] w-full items-start justify-start">
              <span className="font-inter text-[18px] font-medium leading-[26px] text-[#0085FF]">
                Free tools
              </span>
            </div>

            {/* Heading */}
            <div
              className="
                mt-3
                flex
                h-[64px]
                w-[233px]
                items-start
                justify-start
                whitespace-nowrap
                max-[767px]:h-auto
                max-[767px]:w-full
              "
            >
              <h1
                className="
                  font-inter
                  text-[32px]
                  font-medium
                  leading-[38px]
                  text-black
                  max-[480px]:text-[28px]
                  max-[480px]:leading-[34px]
                "
              >
                More free tools
                <br />
                for your business
              </h1>
            </div>

            {/* Description */}
            <div
              className="
                mt-3
                flex
                h-[26px]
                w-full
                items-start
                justify-start
                max-[767px]:h-auto
              "
            >
              <p
                className="
                  font-inter
                  text-[18px]
                  font-normal
                  leading-[26px]
                  text-black/40
                  max-[480px]:text-[16px]
                  max-[480px]:leading-[24px]
                "
              >
                All free, all yours. No Sign-Up needed
              </p>
            </div>

          </div>

          {/* Cards Container */}
          <div className="mt-10 h-auto min-h-[779px] w-full max-[767px]:mt-8">

            {/* Cards Grid */}
            <div
              className="
                grid
                w-full
                grid-cols-1
                gap-5
                md:grid-cols-2
                lg:grid-cols-3
              "
            >
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="
                    flex
                    h-[382px]
                    w-full
                    flex-col
                    overflow-hidden
                    rounded-[20px]
                    border
                    border-[#E0E0E1]
                    bg-white
                    max-[480px]:h-auto
                    max-[480px]:min-h-[382px]
                  "
                >

                  {/* Card Image */}
                  <div
                    className="
                      h-[245px]
                      w-full
                      shrink-0
                      overflow-hidden
                      max-[480px]:h-[220px]
                    "
                  >
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
                      className="
                        mt-auto
                        flex
                        h-[32px]
                        w-full
                        items-center
                        justify-center
                        rounded-[8px]
                        border
                        border-[#0085FF]
                        bg-white
                        font-inter
                        text-[14px]
                        font-normal
                        leading-[18px]
                        text-[#0085FF]
                        transition-colors
                        duration-200
                        hover:bg-[#0085FF]
                        hover:text-white
                      "
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
        <section
          className="
            mx-auto
            mt-25
            flex
            h-auto
            min-h-[556px]
            w-full
            max-w-[1216px]
            flex-col
            md:flex-row
            max-[767px]:mt-16
          "
        >

          {/* Left Part */}
          <div
            className="
              flex
              h-[556px]
              w-full
              flex-col
              justify-start
              md:w-[608px]
              max-[767px]:h-auto
            "
          >

            {/* Text Content */}
            <div className="flex w-full max-w-[493px] flex-col">

              {/* Top Text */}
              <div className="flex h-[26px] w-full items-start justify-start">
                <span
                  className="
                    font-inter
                    text-[18px]
                    font-medium
                    leading-[26px]
                    text-[#0085FF]
                    max-[480px]:text-[16px]
                  "
                >
                  Questions? We’ve Got You.
                </span>
              </div>

              {/* Heading */}
              <div
                className="
                  mt-3
                  flex
                  h-[64px]
                  w-[233px]
                  items-start
                  justify-start
                  whitespace-nowrap
                  max-[767px]:h-auto
                  max-[767px]:w-full
                "
              >
                <h2
                  className="
                    font-inter
                    text-[32px]
                    font-semibold
                    leading-[32px]
                    tracking-[-2px]
                    text-black
                    max-[480px]:text-[28px]
                    max-[480px]:leading-[32px]
                  "
                >
                  Everything You Want to Know
                  <br />
                  Before You Start
                </h2>
              </div>

              {/* Paragraph */}
              <div className="mt-3 flex h-auto w-full items-start justify-start">
                <p
                  className="
                    font-inter
                    text-[18px]
                    font-normal
                    leading-[26px]
                    text-black/40
                    max-[480px]:text-[16px]
                    max-[480px]:leading-[24px]
                  "
                >
                  Clear answers to common doubts no hidden terms.
                </p>
              </div>

            </div>

          </div>

          {/* FAQ */}
          <div className="w-full md:w-[608px]">
            <FAQ />
          </div>

        </section>

      </main>

    </div>
  );
};

export default FreeTools;

