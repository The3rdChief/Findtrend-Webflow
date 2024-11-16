import Icon from "./components/Icon";
import LogoName from "./components/LogoName";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const textRef = useRef(null);

  useEffect(() => {
    // Initialize SplitType on text content
    const splitText = new SplitType(textRef.current, { types: "chars" });

    // Create a GSAP timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 95%",
        end: "top 60%",
        scrub: true,
      },
    });

    // Add staggered color change for each character
    tl.fromTo(
      splitText.chars,
      { color: "#87D322" },
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

  return (
    <footer className="w-screen">
      <section className="bg-primColor py-10 md:py-24 flex flex-col items-center justify-center">
        <div className="w-11/12 flex flex-col gap-8 sm:gap-10 items-center justify-center">
          <p
            ref={textRef}
            className="max-w-[18ch] text-center text-3xl sm:text-5xl text-myGreen font-semibold"
          >
            Join us on email for <br /> more trending topics
          </p>
          <button className="rounded-full px-10 py-3 bg-black text-white">
            Join now
          </button>
        </div>
      </section>
      <section className="p-8 grid place-items-center">
        <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between gap-8 items-center">
          <div id="logo" className="flex items-center gap-2.5 z-20">
            <Icon fill={"black"} />
            <LogoName fill={"black"} />
          </div>

          <ul className="flex items-center flex-col md:flex-row gap-6">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
