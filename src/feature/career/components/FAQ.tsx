"use client";
import React, { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

type ContentRef = HTMLDivElement | null;

interface FAQProps {
  faqData: { key: string; question: string; answer: string }[];
}
const FAQ = ({ faqData }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<ContentRef[]>([]);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    if (openIndex !== null && contentRefs.current[openIndex]) {
      contentRefs.current[openIndex]!.style.maxHeight = `${
        contentRefs.current[openIndex]!.scrollHeight
      }px`;
    }
    contentRefs.current.forEach((ref, index) => {
      if (ref && index !== openIndex) {
        ref.style.maxHeight = "0px";
      }
    });
  }, [openIndex]);

  return (
    <section className="bg-spark py-20">
      <div className="max-w-4xl mx-auto ">
        <div className="flex flex-col items-center justify-center mb-16">
          <h2 className="text-primary text-[32px] font-semibold mb-2">FAQ</h2>
          <h1 className=" section-title  text-white!">Have Questions?</h1>
        </div>

        <div className=" grid grid-cols-1 gap-4 px-4">
          <>
            {faqData && faqData.length > 0 && (
              <>
                {faqData.map(
                  (
                    faq: { question: string; answer: string },
                    index: number
                  ) => (
                    <div
                      key={index}
                      className="overflow-hidden border border-[#B6B6B6] transition-max-height duration-300 ease-in-out rounded-lg bg-transparent cursor-pointer relative lg:h-14 h-[65px] "
                      onClick={() => toggleAccordion(index)}
                      style={{
                        minHeight:
                          openIndex === index
                            ? `${contentRefs.current[index]?.scrollHeight}px`
                            : "50px",
                      }}
                    >
                      <div
                        ref={(el) => {
                          if (el) {
                            contentRefs.current[index] = el;
                          }
                        }}
                        className="accordion-content "
                      >
                        <div
                          className={`flex items-center justify-between px-5  ${
                            openIndex === index
                              ? " bg-primary h-14 text-white "
                              : " bg-transparent h-14"
                          }`}
                        >
                          <p
                            className={`lg:text-[18px] text-sm leading-6 font-medium   ${
                              openIndex === index
                                ? " text-white  "
                                : " text-white/90"
                            }`}
                          >
                            {faq?.question}
                          </p>
                          <p
                            className={` rounded-full h-10 w-10 flex-center transition-all  ${
                              openIndex === index
                                ? " bg-transparent border border-white"
                                : "bg-primary"
                            } `}
                          >
                            <MdKeyboardArrowRight
                              color="white"
                              className={` text-2xl    ${
                                openIndex === index ? "rotate-90 " : " rotate-0"
                              }`}
                            />
                          </p>
                        </div>
                        <div className="lg:text-[16px] text-sm leading-6 font-normal text-white/90 my-5 px-5 pb-3">
                          {faq?.answer}
                        </div>
                      </div>
                    </div>
                  )
                )}
              </>
            )}
          </>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
