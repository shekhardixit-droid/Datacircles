import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const questions = [
    {
      question: "Lorem ipsum dolor self amet, consectetur",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      link: "Learn More",
    },
    {
      question: "Lorem ipsum dolor self amet, consectetur",
      answer: "",
    },
    {
      question: "Lorem ipsum dolor self amet, consectetur",
      answer: "",
    },
    {
      question: "Lorem ipsum dolor self amet, consectetur",
      answer: "",
    },
    {
      question: "Lorem ipsum dolor self amet, consectetur",
      answer: "",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex h-[556px] w-full max-w-[608px] flex-col">

      {questions.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="w-full border-b border-[#48494C66]"
          >

            {/* Question */}
            <button
              type="button"
              onClick={() => toggleFAQ(index)}
              className="flex min-h-[72px] w-full items-center justify-between px-4 text-left"
            >
              <span className="font-inter text-[16px] font-normal leading-[24px] text-black">
                {item.question}
              </span>

              {/* Plus / Minus */}
              <span className="ml-4 flex h-[24px] w-[24px] shrink-0 items-center justify-center font-inter text-[24px] font-normal leading-none text-black">
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {/* Answer */}
            <div
              className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0 overflow-hidden px-4">
                {item.answer && (
                  <div className="pb-6">

                    <p className="font-inter text-[16px] font-normal leading-[20px] text-[#78788D]">
                      {item.answer}
                    </p>

                    {item.link && (
                      <button
                        type="button"
                        className="mt-5 font-inter text-[14px] font-normal text-[#0085FF] underline underline-offset-2"
                      >
                        {item.link}
                      </button>
                    )}

                  </div>
                )}
              </div>
            </div>

          </div>
        );
      })}

    </div>
  );
};

export default FAQ;