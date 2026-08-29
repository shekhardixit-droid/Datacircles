import React from "react";

const Explore = ({
  image,
  imageAlt = "Explore",
  label,
  heading,
  paragraph,
  pills = [],
  linkText,
}) => {
  return (
    <section className="mx-auto mt-12 sm:mt-16 md:mt-24 flex h-auto w-full max-w-[1216px] flex-col md:flex-row overflow-hidden rounded-[20px] bg-white px-4 sm:px-6 md:px-0">

      {/* Left Image */}
      <div className="h-[220px] sm:h-[320px] md:h-[588px] w-full md:w-[666px] shrink-0">
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="flex h-auto w-full md:w-[550px] flex-col">

        {/* Top Content */}
        <div className="h-auto w-full">

          {/* Label */}
          <div className="ml-0 sm:ml-6 md:ml-8 mt-6 md:mt-0 pt-0 md:pt-8">
            <p className="font-inter text-[15px] sm:text-[16px] font-medium leading-[24px] text-[#0085FF]">
              {label}
            </p>
          </div>

          {/* Heading */}
          <div className="ml-0 sm:ml-6 md:ml-8 mt-2">
            <h2 className="font-inter text-[20px] sm:text-[22px] md:text-[24px] font-semibold leading-[1.25] md:leading-[28px] text-black">
              {heading}
            </h2>
          </div>

          {/* Paragraph */}
          <div className="ml-0 sm:ml-6 md:ml-8 mt-2 w-full md:w-[490px]">
            <p className="font-inter text-[15px] sm:text-[16px] font-normal leading-[24px] text-[#252525]">
              {paragraph}
            </p>
          </div>

        </div>

        {/* Bottom Content */}
        <div className="mt-6 md:mt-auto mb-6 md:mb-8 ml-0 sm:ml-6 md:ml-8 h-auto w-full md:w-[324px]">

          {/* Pills */}
          <div className="flex flex-wrap gap-x-1 gap-y-1">
            {pills.map((pill, index) => (
              <div
                key={index}
                className="flex w-max items-center rounded-full border border-[#0085FF4D] bg-[#0085FF1A] px-4 py-2"
              >
                <span className="whitespace-nowrap font-inter text-[13px] font-semibold text-[#0085FF]">
                  {pill}
                </span>
              </div>
            ))}
          </div>

          {/* Link */}
          <button
            type="button"
            className="mt-4 ml-2 flex items-center gap-2 font-inter text-[14px] font-semibold text-[#0085FF]"
          >
            <span>{linkText}</span>
            <span className="text-[18px] leading-none">→</span>
          </button>

        </div>

      </div>

    </section>
  );
};

export default Explore;