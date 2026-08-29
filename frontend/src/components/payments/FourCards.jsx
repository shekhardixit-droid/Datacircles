import React from "react";
import apartmentIcon from "../../assets/apartment.svg";
import corporateFareIcon from "../../assets/corporate_fare.svg";
import domainAddIcon from "../../assets/domain_add.svg";
import updateIcon from "../../assets/update.svg";

const cards = [
  {
    icon: apartmentIcon,
    label: "Total Invoiced",
    amount: "₹17,28,339",
    change: "12.4%",
    changeText: "vs prev. 30 days",
    description: "Everything you've billed",
    positive: true,
  },
  {
    icon: corporateFareIcon,
    label: "Pending",
    amount: "₹82,93,898",
    change: "in the last 30 days",
    description: "Sent, not yet due",
    positive: true,
  },
  {
    icon: domainAddIcon,
    label: "Overdue",
    amount: "₹12,93,898",
    change: "7.3%",
    changeText: "vs prev. 30 days",
    description: "Past the date",
    positive: false,
  },
  {
    icon: updateIcon,
    label: "Collected",
    amount: "₹2,93,898",
    change: "12.4%",
    changeText: "vs prev. 30 days",
    description: "Money in the bank",
    positive: true,
  },
];

const TaxCards = () => {
  return (
    <section className="mx-auto mt-12 sm:mt-16 md:mt-24 h-auto w-full max-w-[1280px] rounded-[20px] bg-[#F3F9FC] pt-[28px] sm:pt-[33px] pb-[28px] sm:pb-[33px] px-4 sm:px-6 md:px-0">

      {/* Heading */}
      <div className="mx-auto flex h-auto w-full max-w-[480px] items-center justify-center text-center">
        <h2 className="whitespace-normal sm:whitespace-nowrap font-inter text-[24px] sm:text-[28px] md:text-[32px] font-medium leading-[1.2] md:leading-[38px] tracking-[-1px] md:tracking-[-2px] text-black">
          Invoiced, pending, overdue, collected.
        </h2>
      </div>

      {/* Description */}
      <div className="mx-auto mt-[12px] flex h-auto w-full max-w-[848px] items-center justify-center text-center">
        <p className="font-inter text-[15px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] md:leading-[25px] text-[#78788D]">
          Four numbers that tell you where your business actually stands.
          Open the dashboard and you know what's come in, what's still out
          there, and what's late enough to worry about.
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto mt-[18px] flex h-auto w-full max-w-[1216px] flex-col sm:flex-row sm:flex-wrap md:flex-nowrap justify-between gap-3 sm:gap-3 md:gap-0">

        {cards.map((card) => (
          <div
            key={card.label}
            className="flex h-auto min-h-[112px] w-full sm:w-[calc(50%-6px)] md:w-[279px] items-center rounded-[10px] border border-[#E0E0E1] bg-white px-[12px] py-3 md:py-0"
          >
            {/* Icon */}
            <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[5px] border border-[#E0E0E1]">
              <img
                src={card.icon}
                alt=""
                className="h-[40px] w-[40px] object-contain"
              />
            </div>

            {/* Card Details */}
            <div className="ml-[12px] flex h-auto flex-1 flex-col justify-center">

              {/* Label */}
              <p className="font-inter text-[12px] font-normal leading-[14px] text-[#707173]">
                {card.label}
              </p>

              {/* Amount */}
              <p
                className={`font-inter text-[18px] font-medium leading-[20px] ${
                  card.positive === false
                    ? "text-[#FF3B30]"
                    : card.label === "Collected"
                      ? "text-[#00B956]"
                      : "text-black"
                }`}
              >
                {card.amount}
              </p>

              {/* Percentage */}
              <div className="flex items-center flex-wrap gap-[4px]">
                {card.positive !== undefined && (
                  <span
                    className={`font-inter text-[10px] font-medium ${
                      card.positive
                        ? "text-[#00B956]"
                        : "text-[#FF3B30]"
                    }`}
                  >
                    {card.positive ? "▲" : "▼"} {card.change}
                  </span>
                )}

                {card.changeText && (
                  <span className="font-inter text-[10px] font-normal text-[#707173]">
                    {card.changeText}
                  </span>
                )}
              </div>

              {/* Bottom Description */}
              <p className="mt-[2px] font-inter text-[12px] font-normal leading-[14px] text-[#707173]">
                {card.description}
              </p>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default TaxCards;