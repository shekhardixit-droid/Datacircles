import React from "react";
import TaxCard1 from "../../assets/TaxCard1.svg";
import TaxCard2 from "../../assets/TaxCard2.svg";

const features = [
  {
    icon: TaxCard1,
    title: "Same State",
    description:
      "CGST and SGST, split automatically at the right rate..",
  },
  {
    icon: TaxCard2,
    title: "Different State",
    description:
      "IGST applied instead, with no thinking required.",
  },
  {
    icon: TaxCard2,
    title: "Every Field Covered",
    description:
      "GSTIN, HSN and SAC codes, invoice numbering in sequence..",
  },
];

const TaxCards = () => {
  return (
    <section className="mx-auto mt-24 h-[433px] w-[1280px] bg-[#F3F9FC] rounded-[20px] pt-10">

      {/* Heading */}
      <div className="mx-auto flex h-[38px] w-[480px] items-center justify-center">
        <h2 className="whitespace-nowrap font-inter text-[32px] font-medium leading-[38px] tracking-[-2px] text-black">
        The tax maths, handled.
        </h2>
      </div>

      {/* Description */}
      <div className="mx-auto mt-2 flex h-[75px] w-[848px] items-center justify-center text-center">
        <p className="font-inter text-[18px] font-normal leading-[25px] text-[#78788D]">
         CGST and SGST when your client is in your state, IGST when they aren't. HSN and SAC codes, tax-inclusive or exclusive pricing, and a format that carries every field a valid GST invoice needs, so your client never loses their input credit because of your paperwork.
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto mt-10 flex h-[170px] w-[1216px] justify-between">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex h-[170px] w-[392px] flex-col rounded-[20px] border border-[#E0E0E1] bg-white p-6"
          >
            {/* Icon */}
            <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-white">
              <img
                src={feature.icon}
                alt=""
                className="h-[40px] w-[40px] object-contain"
              />
            </div>

            {/* Card Content */}
            <div className="mt-auto h-[64px] w-[344px]">
              <h3 className="font-inter text-[18px] font-medium leading-[24px] text-black">
                {feature.title}
              </h3>

              <p className="font-inter text-[14px] font-normal leading-[20px] text-[#78788D]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TaxCards;