import React from "react";

const steps = [
  {
    title: "Send us your file",
    description:
      "Export from Excel, Tally or whatever you use today. A plain CSV is fine.",
    active: true,
  },
  {
    title: "We map it together",
    description:
      "We help match your columns to the right fields, so nothing lands in the wrong place.",
    active: false,
  },
  {
    title: "Check & Go",
    description:
      "You review the imported data, and start working. Your old files stay exactly where they are.",
    active: false,
  },
];

const DataMigration = () => {
  return (
    <section className="mx-auto mt-24 flex w-full max-w-[1216px] px-6">

      {/* Left Content */}
      <div className="w-full max-w-[430px] shrink-0">

        <h2 className="font-inter text-[28px] font-medium leading-[34px] tracking-[-1px] text-black">
          Moving your data across
        </h2>

        <p className="mt-2 max-w-[390px] font-inter text-[15px] font-normal leading-[21px] text-[#78788D]">
          It's a guided import, not a magic button. Our team does it with you,
          and most businesses are up and running the same week.
        </p>

      </div>

      {/* Right Timeline */}
      <div className="relative ml-25 flex-1">

        {/* Vertical Line */}
        <div className="absolute left-[8px] top-[8px] h-[305px] w-[1px] bg-gradient-to-b from-[#0085FF] via-[#B9DFFF] to-transparent" />

        {/* Steps */}
        <div className="relative flex flex-col gap-[60px]">

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex min-h-[64px]"
            >

              {/* Timeline Dot */}
              <div
                className={`relative z-10 mt-[3px] h-[13px] w-[13px] shrink-0 rounded-full ${
                  step.active
                    ? "bg-[#0085FF]"
                    : "bg-[#E8E8E8]"
                }`}
              />

              {/* Step Content */}
              <div className="ml-[9px]">

                <h3 className="font-inter text-[20px] font-medium leading-[24px] text-[#252525]">
                  {step.title}
                </h3>

                <p className="mt-2 max-w-[500px] font-inter text-[14px] font-normal leading-[18px] text-[#78788D]">
                  {step.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default DataMigration;