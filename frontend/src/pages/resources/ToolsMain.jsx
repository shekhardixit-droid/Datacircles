import React from "react";
import Navbar from "../../components/Navbar";
import CTA from "../../components/freetools/CTA";

const ToolsMain = () => {
  const salesTools = [
    {
      title: "GST Invoice Generator",
      description:
        "Create a clean, GST-ready invoice in seconds and send it to your client.",
    },
    {
      title: "Quotation Generator",
      description:
        "Send a professional quote that wins the deal.",
    },
    {
      title: "Pro-Forma Invoice Generator",
      description:
        "Share an estimated invoice before the sale is final.",
    },
    {
      title: "Delivery Challan Generator",
      description:
        "Send goods with a proper challan, every detail in place.",
    },
  ];

  const purchaseTools = [
    {
      title: "Purchase Order Generator",
      description:
        "Order from your vendors with a clear, professional PO.",
    },
    {
      title: "Expense Receipt Generator",
      description:
        "Record what you've spent, neatly and on record.",
    },
    {
      title: "Invoice Receipt Generator",
      description:
        "Give your customer a clean receipt for what they've paid.",
    },
    {
      title: "Payment Receipt Generator",
      description:
        "Confirm a payment received, in a format they'll trust.",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Fill in your details",
      description:
        "Add your business, your client, and what you're billing for. Watch it come together live as you type.",
    },
    {
      number: "2",
      title: "Make it yours",
      description:
        "Pick a theme and colour that fits your brand. No design skills needed.",
    },
    {
      number: "3",
      title: "Download and share",
      description:
        "Save it as a PDF, or share it straight away. It's yours to keep, with your name on it, not ours.",
    },
  ];

  const renderToolCard = (tool) => (
    <div
      key={tool.title}
      className="
        flex
        min-h-[124px]
        w-full
        rounded-[14px]
        border
        border-[#ECECEC]
        bg-white
        p-[18px]
      "
    >
      <div className="flex w-full items-start gap-[16px]">

        {/* Icon */}
        <div
          className="
            h-[52px]
            w-[52px]
            shrink-0
            rounded-[10px]
            bg-[#F3F9FC]
          "
        />

        {/* Content */}
        <div className="flex min-w-0 flex-1 flex-col">

          <div className="flex flex-wrap items-center gap-[9px]">
            <h3
              className="
                font-['Inter']
                text-[17px]
                font-medium
                leading-[22px]
                text-[#1C1C1D]
              "
            >
              {tool.title}
            </h3>

            <span
              className="
                rounded-full
                bg-[#F3F9FC]
                px-[9px]
                py-[3px]
                font-['Inter']
                text-[10px]
                font-medium
                leading-[13px]
                text-[#0085FF]
              "
            >
              FREE
            </span>
          </div>

          <p
            className="
              mt-[4px]
              font-['Inter']
              text-[14px]
              font-normal
              leading-[20px]
              text-[#78788D]
            "
          >
            {tool.description}
          </p>

          <button
            type="button"
            className="
              mt-[8px]
              w-fit
              font-['Inter']
              text-[13px]
              font-medium
              leading-[17px]
              text-[#0085FF]
              transition-opacity
              duration-200
              hover:opacity-70
            "
          >
            Open tool →
          </button>

        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen mt-5 w-full overflow-x-hidden bg-white">


      {/* ========================================================
          NAVBAR
          ======================================================== */}

      <Navbar />

      {/* ========================================================
          MAIN
          ======================================================== */}

      <main className="w-full">

        {/* ======================================================
            HERO
            ====================================================== */}

        <section className="w-full">

          <div
            className="
              mx-auto
              flex
              w-full
              max-w-[1216px]
              flex-col
              items-center
              px-4
              pb-[32px]
              pt-[64px]
              text-center
              sm:px-6
              md:px-0
            "
          >

            {/* Eyebrow */}
            <div
              className="
                font-['Inter']
                text-[16px]
                font-medium
                leading-[22px]
                text-[#0085FF]
              "
            >
              FREE TOOLS
            </div>

            {/* Heading */}
            <h1
              className="
                mt-[12px]
                max-w-[850px]
                font-['Inter']
                text-[50px]
                font-medium
                leading-[108%]
                tracking-[-2px]
                text-[#1C1C1D]
                max-[767px]:text-[38px]
                max-[480px]:text-[32px]
              "
            >
              Free tools to help Indian businesses grow.
            </h1>

            {/* Description */}
            <p
              className="
                mt-[16px]
                max-w-[660px]
                font-['Inter']
                text-[17px]
                font-normal
                leading-[27px]
                tracking-[0px]
                text-[#78788D]
              "
            >
              Make professional invoices, quotations and more,
              genuinely free. No sign-up, no watermark, no catch.
              It's our small way of backing the businesses building India.
            </p>

            {/* Pills */}
            <div
              className="
                mt-[24px]
                flex
                flex-wrap
                items-center
                justify-center
                gap-[10px]
                max-[480px]:gap-[8px]
              "
            >
              {[
                "100% free",
                "No sign-up",
                "No watermark",
                "Your branding, your document",
              ].map((pill) => (
                <div
                  key={pill}
                  className="
                    flex
                    h-[42px]
                    items-center
                    justify-center
                    whitespace-nowrap
                    rounded-full
                    bg-[#F3F9FC]
                    px-[20px]
                    font-['Inter']
                    text-[14px]
                    font-medium
                    leading-[18px]
                    text-[#0085FF]
                    max-[480px]:px-[14px]
                  "
                >
                  {pill}
                </div>
              ))}
            </div>

          </div>

        </section>


        {/* ======================================================
            TOOLS
            ====================================================== */}

        <section
  className="
    w-[80%]
    max-w-[1280px]
    mx-auto
    my-12
    bg-[#F3F9FC]
    border
    border-[#ECECEC]
    rounded-[24px]
    px-6
    py-8
    lg:px-6
    lg:py-8
    md:w-[90%]
    md:px-5
    md:py-7
    max-[767px]:w-[94%]
    max-[767px]:rounded-[20px]
    max-[767px]:px-4
    max-[767px]:py-6
    box-border
  "
>
  {/* Your content */}


          <div
            className="
              mx-auto
              w-full
              max-w-[1216px]
              px-4
              py-[48px]
              sm:px-6
              md:px-0
            "
          >



            {/* Sales Documents */}
            <div>

              <div
                className="
                  mb-[14px]
                  font-['Inter']
                  text-[22px]
                  font-medium
                  leading-[18px]
                  tracking-[0.5px]
                  text-[#0085FF]
                "
              >
                SALES DOCUMENTS
              </div>

              <div className="grid grid-cols-1 gap-[14px] md:grid-cols-2">
                {salesTools.map(renderToolCard)}
              </div>

            </div>


            {/* Purchases & Receipts */}
            <div className="mt-[36px]">

              <div
                className="
                  mb-[14px]
                  font-['Inter']
                  text-[22px]
                  font-medium
                  leading-[18px]
                  tracking-[0.5px]
                  text-[#0085FF]
                "
              >
                PURCHASES & RECEIPTS
              </div>

              <div className="grid grid-cols-1 gap-[14px] md:grid-cols-2">
                {purchaseTools.map(renderToolCard)}
              </div>

            </div>

          </div>

        </section>


        {/* ======================================================
            HOW IT WORKS
            ====================================================== */}

        <section className="w-full bg-white">

          <div
            className="
              mx-auto
              w-full
              max-w-[1216px]
              px-4
              py-[52px]
              sm:px-6
              md:px-0
            "
          >



            {/* Heading */}
            <h2
              className="
                mt-[24px]
                text-center
                font-['Inter']
                text-[45px]
                font-medium
                leading-[34px]
                tracking-[-0.5px]
                text-[#0085FF]
              "
            >
              Three steps, no sign-up
            </h2>


            {/* Steps */}
            <div
              className="
                mt-[28px]
                grid
                grid-cols-1
                gap-[14px]
                md:grid-cols-3
              "
            >

              {steps.map((step) => (
                <div
                  key={step.number}
                  className="
                    min-h-[150px]
                    rounded-[12px]
                    border
                    border-[#ECECEC]
                    bg-white
                    p-[18px]
                  "
                >

                  <div
                    className="
                      flex
                      h-[28px]
                      w-[28px]
                      items-center
                      justify-center
                      rounded-full
                      bg-[#0085FF]
                      font-['Inter']
                      text-[13px]
                      font-medium
                      text-white
                    "
                  >
                    {step.number}
                  </div>

                  <h3
                    className="
                      mt-[12px]
                      font-['Inter']
                      text-[16px]
                      font-medium
                      leading-[22px]
                      text-[#1C1C1D]
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      mt-[5px]
                      font-['Inter']
                      text-[13px]
                      font-normal
                      leading-[19px]
                      text-[#78788D]
                    "
                  >
                    {step.description}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </section>


        {/* ======================================================
            WHY WE GIVE THESE AWAY
            ====================================================== */}

        <section className="w-full bg-white">

          <div
            className="
              mx-auto
              w-full
              max-w-[1216px]
              px-4
              py-[48px]
              sm:px-6
              md:px-0
            "
          >



            {/* Content */}
            <div className="mt-[22px] max-w-[820px]">

              <h2
                className="
                  font-['Inter']
                  text-[40px]
                  font-medium
                  leading-[34px]
                  tracking-[-0.5px]
                  text-[#1C1C1D]
                "
              >
                Why we give these away
              </h2>

              <p
                className="
                  mt-[14px]
                  font-['Inter']
                  text-[15px]
                  font-normal
                  leading-[24px]
                  text-[#78788D]
                "
              >
                We're building DataCircles for the long run, for a growing
                India and the businesses driving it. Not every business is
                ready for a full CRM and invoicing app yet, and that's
                completely fine. If a free tool helps you send a better
                invoice today and get paid a little faster, we've done
                something worth doing.
              </p>

              <p
                className="
                  mt-[14px]
                  font-['Inter']
                  text-[15px]
                  font-normal
                  leading-[24px]
                  text-[#78788D]
                "
              >
                So use these as much as you like. No account, no cost,
                no strings. When your business grows to the point where
                you want everything in one place, your leads, your
                follow-ups, your invoices and your payments, we'll be
                right here.
              </p>

            </div>

          </div>

        </section>


      </main>

      <CTA/>

    </div>
  );
};

export default ToolsMain;