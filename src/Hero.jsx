import Header from "./Header";
import { useState } from "react";
import tab1 from "./assets/tabs/tab1.svg";
import tab2 from "./assets/tabs/tab2.svg";
import tab3 from "./assets/tabs/tab3.svg";
import tab4 from "./assets/tabs/tab4.svg";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <section className="min-h-dvh w-full bg-[url('./assets/bg-images/mobile.jpg')] sm:bg-[url('./assets/bg-images/website.jpg')] text-white flex flex-col items-center">
        <Header />
        <section className="w-full min-h-[90vh] flex flex-col justify-center items-center p-12">
          <header className="gap-y-6 flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold text-center">
              <span>Minimize your tabs.</span> <br />
              <span>Find the trends!</span>
            </h1>

            <p className="max-w-[60ch] text-center text-grey300 font-light">
              Don&#39;t let your computer memories consume all of those browser
              tabs. Findtrend lets you gather all of your favorite websites into
              one place.
            </p>

            <div className="relative mt-6">
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="rounded-3xl bg-primColor text-black font-medium w-44 h-12 group"
              >
                <div className="group-hover:-translate-x-3 transition-all duration-300">
                  Get Started
                </div>
                <AnimatePresence>
                  {isHovered == true && (
                    <motion.div
                      className="absolute top-[24.5%] right-[20%]"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {" "}
                      🔥
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              <div className="absolute flex flex-col items-center justify-center -right-24 -top-4 -translate-x-8 min-[390px]:translate-x-0">
                <p className="text-[0.55rem] min-[390px]:text-xs max-w-[14ch] text-center font-serif rotate-[8deg]">
                  All research starts from here
                </p>
                <svg
                  className="rotate-[105deg] scale-75 -translate-x-4 -translate-y-1"
                  width="29"
                  height="35"
                  viewBox="0 0 29 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_23_117)">
                    <path
                      d="M0.4375 1.02701C1.86871 0.0903884 3.29994 0.386162 4.5831 0.829824C6.35978 1.47067 8.0871 2.3087 9.66637 3.29461C16.8224 8.027 21.1161 14.7805 22.8927 23.1115C23.3369 25.2312 23.485 27.4495 23.7811 29.865C25.7552 28.7312 26.7916 26.5129 28.7657 25.2312C29.0124 26.2171 28.5189 26.858 28.1241 27.4002C26.4955 29.6185 24.8175 31.8368 23.0902 34.0059C22.2512 35.0411 21.6096 35.1397 20.7213 34.2523C18.8459 32.4284 17.7108 30.2101 17.3653 27.6467C17.3653 27.5481 17.5134 27.4002 17.7108 27.1538C19.8329 27.696 19.3394 30.4073 21.1654 31.3932C21.9551 27.9918 21.3628 24.7383 20.4745 21.5833C19.5368 18.2805 18.303 15.1256 16.3289 12.3157C14.4042 9.55517 11.9859 7.33686 9.32089 5.26644C6.70523 3.14672 3.7441 1.81574 0.4375 1.02701Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_23_117">
                      <rect
                        width="28.3944"
                        height="34.4457"
                        fill="white"
                        transform="translate(0.4375 0.410156)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </header>

          <div className="grid md:grid-cols-9 md:grid-rows-2 justify-items-center items-center w-full mt-24 max-w-96 md:max-w-3xl [&_img]:h-auto [&_img]:w-full [&_img]:object-cover">
            <img
              src={tab4}
              alt=""
              className="-rotate-[4deg] translate-y-2 z-[4] md:row-start-1 md:col-start-1 md:col-end-4"
            />
            <img
              src={tab3}
              alt=""
              className="rotate-[4deg] md:-translate-y-2 z-[3] md:row-start-2 md:col-start-3 md:col-end-6"
            />
            <img
              src={tab2}
              alt=""
              className="-rotate-[4deg] -translate-y-4 md:translate-y-4 z-[2] md:row-start-1 md:col-start-5 md:col-end-8"
            />
            <img
              src={tab1}
              alt=""
              className="rotate-[4deg] -translate-y-5 md:-translate-y-2 z-[1] md:row-start-2 md:col-start-7 md:col-end-10"
            />
          </div>
        </section>
      </section>
    </>
  );
};

export default Hero;
