import React from "react";

const IntegrationCTA = () => {
  return (
    <section className="mx-auto mt-24 mb-24 flex h-[220px] w-full max-w-[1280px] items-center rounded-[12px] bg-[#F3F9FC] px-8">

      {/* Image */}
      <div className="flex h-[120px] w-[120px] shrink-0 items-center justify-center overflow-hidden rounded-[8px]">
        <img
          src="https://ik.imagekit.io/qiap0iq38/DATACIRCLES_PROJECT/PAYMENTS/image%2017%20(1).png"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="ml-6 flex h-[120px] flex-1 flex-col justify-center">

        {/* Heading */}
        <h2 className="max-w-[550px] font-inter text-[26px] font-medium leading-[31px] tracking-[-1px] text-black">
          Need something we don't connect
          <br />
          to yet?
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-[600px] font-inter text-[15px] font-normal leading-[21px] text-[#78788D]">
          We're a small team building fast, and what our customers ask for is what gets built
          next. Tell us what you use, and we'll tell you honestly whether it's on the way.
        </p>

      </div>

      {/* Right Buttons */}
      <div className="mr-8 flex h-[120px] w-[190px] flex-col items-center justify-center gap-5">

        {/* Book a Call */}
        <button
          type="button"
          className="flex h-[48px] w-[190px] items-center justify-center rounded-full bg-white font-inter text-[14px] font-medium text-[#0085FF] transition-colors duration-200 hover:bg-[#0085FF] hover:text-white"
        >
          Book a Call
        </button>

        {/* Start Now */}
        <button
          type="button"
          className="flex items-center gap-2 font-inter text-[14px] font-medium text-[#0085FF]"
        >
          <span>Start Now</span>
          <span className="text-[18px] leading-none">→</span>
        </button>

      </div>

    </section>
  );
};

export default IntegrationCTA;