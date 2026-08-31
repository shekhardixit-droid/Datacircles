import React from "react";

function CTA() {
  return (
    <section
      className="
        flex
        h-auto
        w-full
        flex-col
        items-center
        justify-center
        gap-[28px]
        sm:gap-[34px]
        md:gap-[42px]
        overflow-hidden
        bg-gradient-to-r
        from-[#0a55af]
        to-[#0085ff]
        px-6
        sm:px-12
        md:px-24
        lg:px-[160px]
        xl:px-[320px]
        py-[48px]
        sm:py-[64px]
        md:py-[80px]
      "
    >
      {/* CONTENT */}
      <div className="flex flex-col items-center gap-[14px] sm:gap-[18px] text-center text-white">
        <h2
          className="
            m-0
            whitespace-normal
            sm:whitespace-nowrap
            text-[28px]
            sm:text-[34px]
            md:text-[42px]
            font-medium
            leading-[1.1]
            text-white
          "
        >
          Send your next invoice in under a minute.
        </h2>

        <p
          className="
            m-0
            w-full
            max-w-[662px]
            text-center
            text-[15px]
            sm:text-[16px]
            md:text-[18px]
            font-normal
            leading-[1.4]
            text-white
          "
        >
          Start free for 7 days at full limits. No credit card needed, and our
          team will help you bring your data across.
        </p>
      </div>

      {/* BUTTONS */}
      <div className="flex flex-col sm:flex-row items-center gap-[10px] sm:gap-[8px] w-full sm:w-auto px-4 sm:px-0">

        {/* Create Account */}
        <button
          type="button"
          className="
            flex
            h-[42px]
            w-full
            sm:w-[142px]
            items-center
            justify-center
            overflow-hidden
            rounded-full
            border
            border-white
            bg-transparent
            px-[12px]
            text-center
            text-[14px]
            font-medium
            leading-[1.2]
            text-white
            transition-all
            duration-200
            hover:bg-white
            hover:text-[#014c6c]
          "
        >
          Create Account
        </button>

        {/* Book a Demo */}
        <button
          type="button"
          className="
            flex
            h-[42px]
            w-full
            sm:w-[136px]
            items-center
            justify-center
            overflow-hidden
            rounded-full
            border
            border-white
            bg-transparent
            px-[12px]
            text-center
            text-[14px]
            font-medium
            leading-[1.2]
            text-white
            transition-all
            duration-200
            hover:bg-white
            hover:text-[#014c6c]
          "
        >
          Book a Demo
        </button>

      </div>
    </section>
  );
}

export default CTA;