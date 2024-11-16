import "./App.css";
import DealSwitcher from "./components/DealSwitcher";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "./AnimationVariants";

const GetDeal = () => {
  const [plan, setPlan] = useState("month");
  const plans = [
    {
      title: "Personal",
      copy: "Special first packet for all",
      price: plan == "month" ? 8 : 96,
      benefits: [
        "Up to 5 page each group",
        "Up to 10 group page",
        "5 Days group page saved",
      ],
    },
    {
      title: "Regular",
      copy: "Recommended for personal pro",
      price: plan == "month" ? 20 : 236,
      benefits: [
        "Up to 15 page each group",
        "Download page up to 20 page",
        "Up to 10 group page",
        "15 Days group page saved",
      ],
    },
    {
      title: "Premium",
      copy: "Packet for Startup & Company",
      price: plan == "month" ? 48 : 550,
      benefits: [
        "Unlimited group pages",
        "Unlimited download page",
        "Unlimited page each group",
        "Customize sorting group pages",
        "Customize group page name",
        "30 Days group page saved",
      ],
    },
  ];
  return (
    <section className="bg-black py-10 md:py-24 flex items-center justify-center">
      <div className="w-11/12 flex flex-col gap-6 md:gap-16 items-center justify-center">
        <h3 className="text-3xl text-white sm:text-4xl font-semibold text-center">
          Get your best deal
        </h3>
        <div className="relative flex items-center gap-4 justify-center text-white mb-16 sm:mb-0">
          <p className={`${plan == "month" ? "text-white" : "text-grey300"}`}>
            Monthly
          </p>
          <DealSwitcher plan={plan} setPlan={setPlan} />
          <p className={`${plan == "year" ? "text-white" : "text-grey300"}`}>
            Yearly
          </p>

          {/* right hover */}
          <div className="absolute flex flex-col items-center justify-center right-0 -bottom-20 sm:-right-24 sm:-top-24 -translate-x-8 min-[390px]:translate-x-0">
            <p className="text-[0.55rem] min-[390px]:text-xs max-w-[8ch] text-center font-serif rotate-[4deg] sm:rotate-[14deg] sm:translate-y-2 order-2 sm:order-1">
              Save 10% per {plan}
            </p>
            <svg
              className="rotate-[300deg] sm:rotate-[105deg] scale-75 -scale-y-100 sm:scale-y-100 sm:-translate-x-8 order-1 sm:order-2"
              width="29"
              height="35"
              viewBox="0 0 29 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_23_115)">
                <path
                  d="M0 0.616851C1.43121 -0.319768 2.86244 -0.0239941 4.1456 0.419668C5.92228 1.06051 7.6496 1.89854 9.22887 2.88445C16.3849 7.61685 20.6786 14.3704 22.4552 22.7013C22.8994 24.8211 23.0475 27.0394 23.3436 29.4549C25.3177 28.3211 26.3541 26.1028 28.3282 24.8211C28.5749 25.807 28.0814 26.4478 27.6866 26.9901C26.058 29.2084 24.38 31.4267 22.6527 33.5957C21.8137 34.6309 21.1721 34.7295 20.2838 33.8422C18.4084 32.0182 17.2733 29.7999 16.9278 27.2366C16.9278 27.138 17.0759 26.9901 17.2733 26.7436C19.3954 27.2858 18.9019 29.9971 20.7279 30.983C21.5176 27.5816 20.9253 24.3281 20.037 21.1732C19.0993 17.8704 17.8655 14.7154 15.8914 11.9056C13.9667 9.14502 11.5484 6.92671 8.88339 4.85628C6.26773 2.73657 3.3066 1.40558 0 0.616851Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_23_115">
                  <rect width="28.3944" height="34.4457" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        <div
          id="plans"
          className="flex flex-wrap items-center justify-center gap-8"
        >
          {plans.map((option, index) => {
            const { title, copy, price, benefits } = option;
            return (
              <motion.div
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                custom={index}
                viewport={{ once: true }}
                key={index}
                className="w-[20rem] max-[330px]:w-11/12 rounded-md p-8 h-[32.7rem] max-[330px]:h-max flex flex-col divide-y-[1px] divide-black/15 odd:bg-greyBg even:bg-primColor [&_button]:bg-primColor"
              >
                {" "}
                <header className="pb-4">
                  <h4 className="text-3xl">{title}</h4>
                  <p className="font-light text-sm">{copy}</p>
                </header>
                <article className="pt-4 flex flex-col gap-6 flex-1 justify-between">
                  <div className="space-y-6">
                    <p className="capitalize">
                      <span className="text-5xl">${price}</span> /{plan}
                    </p>
                    <ul className="space-y-3">
                      {benefits.map((benefit, i) => {
                        return (
                          <li key={i} className="flex items-start gap-2">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M18.6946 7.93136C19.1467 8.45305 19.0904 9.2425 18.5687 9.69463L11.0687 16.1946C10.5731 16.6241 9.82984 16.5976 9.36612 16.1339L5.36612 12.1339C4.87796 11.6457 4.87796 10.8543 5.36612 10.3661C5.85427 9.87798 6.64573 9.87798 7.13388 10.3661L10.3109 13.5431L16.9313 7.80541C17.453 7.35327 18.2425 7.40966 18.6946 7.93136Z"
                                fill="black"
                              />
                            </svg>
                            {benefit}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <button className="rounded-full w-full py-3">
                    Start Free Trial
                  </button>
                </article>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GetDeal;
