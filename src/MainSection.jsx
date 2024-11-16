import "./App.css";
import GetDeal from "./GetDeal";
import OpenNewTabs from "./OpenNewTabs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

// Brands icons
import brand1 from "./assets/brand-icons/brand1.svg";
import brand2 from "./assets/brand-icons/brand2.svg";
import brand3 from "./assets/brand-icons/brand3.svg";
import brand4 from "./assets/brand-icons/brand4.svg";
import brand5 from "./assets/brand-icons/brand5.svg";
import brand6 from "./assets/brand-icons/brand6.svg";
import brand7 from "./assets/brand-icons/brand7.svg";
import brand8 from "./assets/brand-icons/brand8.svg";
import brand9 from "./assets/brand-icons/brand9.svg";
import brand10 from "./assets/brand-icons/brand10.svg";
import brand11 from "./assets/brand-icons/brand11.svg";
import brand12 from "./assets/brand-icons/brand12.svg";
import brand13 from "./assets/brand-icons/brand13.svg";
import brand14 from "./assets/brand-icons/brand14.svg";
import brand15 from "./assets/brand-icons/brand15.svg";
import brand16 from "./assets/brand-icons/brand16.svg";
// Socials icons
import social1 from "./assets/social-icons/social-media1.svg";
import social2 from "./assets/social-icons/social-media2.svg";
import social3 from "./assets/social-icons/social-media3.svg";
import social4 from "./assets/social-icons/social-media4.svg";
import social5 from "./assets/social-icons/social-media5.svg";
import social6 from "./assets/social-icons/social-media6.svg";
import social7 from "./assets/social-icons/social-media7.svg";
import social8 from "./assets/social-icons/social-media8.svg";
// Twitter screenshots
import tweet1 from "./assets/twitter-screenshots/tweet-1.png";
import tweet2 from "./assets/twitter-screenshots/tweet-2.png";
import tweet3 from "./assets/twitter-screenshots/tweet-3.png";

import { fadeInAnimationVariants, popupVariants } from "./AnimationVariants";

const MainSection = () => {
  const textRef = useRef(null);

  useEffect(() => {
    // Initialize SplitType on text content
    const splitText = new SplitType(textRef.current, { types: "chars" });

    // Create a GSAP timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 95%",
        end: "top 35%",
        scrub: true,
      },
    });

    // Add staggered color change for each character
    tl.fromTo(
      splitText.chars,
      { color: "#ADADAD" },
      {
        color: "black",
        stagger: 0.1,
        duration: 1, // Duration for each character's animation
      }
    );

    return () => {
      splitText.revert();
    };
  }, []);

  const brands = [
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    brand7,
    brand8,
    brand9,
    brand10,
    brand11,
    brand12,
    brand13,
    brand14,
    brand15,
    brand16,
  ];
  const socials = [
    social8,
    social7,
    social6,
    social5,
    social4,
    social3,
    social2,
    social1,
  ];
  const tweets = [tweet1, tweet2, tweet3];

  return (
    <main className="w-screen">
      <OpenNewTabs />
      <section className="py-10 md:py-24 flex items-center justify-center">
        <p
          ref={textRef}
          className="max-w-2xl w-11/12 text-3xl sm:text-4xl text-grey300 font-semibold"
        >
          Findtrend helps you to increase your productivity and reduce your
          computer&#39;s memory load, an application that can fulfill your daily
          browsing needs.
        </p>
      </section>
      <section className="py-10 md:py-24 flex flex-col items-center justify-center">
        <div className="w-11/12 flex flex-col gap-16 items-center justify-center">
          <h3 className="text-3xl sm:text-4xl font-semibold text-center">
            Findtrend makes +1000 Startups grow
          </h3>
          <ul className="grid grid-cols-[repeat(auto-fit,_minmax(130px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(190px,_1fr))] gap-4 max-w-4xl w-11/12">
            {brands.map((brand, index) => {
              return (
                <motion.li
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index}
                  key={index}
                  className="bg-grey200 rounded-sm h-20 grid place-items-center"
                >
                  <img src={brand} alt="logo" className="w-[60%]" />
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>
      <section className="bg-greyBg py-10 md:py-24 flex items-center justify-center">
        <div className="w-11/12 flex flex-col gap-6 md:gap-16 items-center justify-center">
          <h3 className="text-3xl sm:text-4xl font-semibold text-center">
            All platforms connect to Findtrend
          </h3>
          {/* socials select slider */}
          <div className="max-w-[90vw] self-start min-[580px]:self-center overflow-x-auto scrollbar-hidden">
            <ul
              id="socials"
              className="flex gap-3 gap-x-3 [&_li]:size-14 [&_li]:min-w-14 md:[&_li]:size-20 md:[&_li]:min-w-20 [&_li]:bg-white [&_li]:rounded-md [&_li]:grid [&_li]:place-items-center"
            >
              {socials.map((social, index) => {
                return (
                  <motion.li
                    variants={popupVariants}
                    initial="initial"
                    whileInView="animate"
                    custom={index}
                    key={index}
                    className="cursor-pointer hover:bg-gray-200 transition-colors duration-200"
                  >
                    <img src={social} alt="logo" className="w-[50%]" />
                  </motion.li>
                );
              })}
            </ul>
          </div>
          {/* Twitter screenshots */}
          <div className="flex flex-col gap-5 items-center justify-center max-w-xl">
            {tweets.map((tweet, idx) => {
              return (
                <motion.img
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  key={idx}
                  src={tweet}
                  alt="screenshot"
                />
              );
            })}
          </div>

          <button className="py-3 px-6 rounded-3xl bg-black text-white capitalize">
            View More Trends
          </button>
        </div>
      </section>
      <GetDeal />
    </main>
  );
};

export default MainSection;
