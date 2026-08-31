import React from "react";

const IntegrationCTA = () => {
  return (
    <section
      className="
        mx-auto mb-24 mt-24 flex w-full max-w-[1280px]
        flex-col items-stretch gap-6 rounded-[12px] bg-[#F3F9FC]
        px-6 py-8
        sm:px-8
        md:h-[220px] md:flex-row md:items-center md:gap-0 md:py-0
      "
    >

      {/* Image */}
      <div className="flex h-[120px] w-[120px] shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
        <img
          src="https://ik.imagekit.io/qiap0iq38/DATACIRCLES_PROJECT/PAYMENTS/image%2017%20(1).png"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-center md:ml-6 md:h-[120px]">

        {/* Heading */}
        <h2 className="max-w-[550px] font-inter text-[22px] font-medium leading-[28px] tracking-[-0.6px] text-black sm:text-[26px] sm:leading-[31px] sm:tracking-[-1px]">
          Need something we don't connect to yet?
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-[600px] font-inter text-[14px] font-normal leading-[20px] text-[#78788D] sm:text-[15px] sm:leading-[21px]">
          We're a small team building fast, and what our customers ask for is what gets built
          next. Tell us what you use, and we'll tell you honestly whether it's on the way.
        </p>

      </div>

      {/* Right Buttons */}
      <div className="flex w-full shrink-0 flex-row items-center justify-start gap-4 md:mr-8 md:h-[120px] md:w-[190px] md:flex-col md:items-center md:justify-center md:gap-5">

        {/* Book a Call */}
        <button
          type="button"
          className="flex h-[48px] w-full max-w-[190px] items-center justify-center rounded-full bg-white font-inter text-[14px] font-medium text-[#0085FF] transition-colors duration-200 hover:bg-[#0085FF] hover:text-white"
        >
          Book a Call
        </button>

        {/* Start Now */}
        <button
          type="button"
          className="flex shrink-0 items-center gap-2 whitespace-nowrap font-inter text-[14px] font-medium text-[#0085FF]"
        >
          <span>Start Now</span>
          <span className="text-[18px] leading-none">→</span>
        </button>

      </div>

    </section>
  );
};

export default IntegrationCTA;