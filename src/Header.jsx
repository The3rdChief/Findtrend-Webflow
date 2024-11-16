import { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import HamburgerBtn from "./components/HamburgerBtn";
import Icon from "./components/Icon";
import LogoName from "./components/LogoName";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuControls = useAnimationControls();

  const handleMenu = () => {
    if (!isOpen) {
      menuControls.start("open");
      document.body.style.overflowY = "hidden";
    } else {
      menuControls.start("closed");
      document.body.style.overflowY = "unset";
    }
  };

  return (
    <>
      <header className="relative flex items-center justify-between gap-12 p-5 max-w-6xl font-normal w-full text-xl lg:text-[1rem]">
        <div id="logo" className="flex items-center gap-2.5 z-20">
          <Icon fill={"#A8FF35"} />
          <LogoName fill={"white"} />
        </div>

        <motion.nav
          variants={{
            closed: {
              visibility: "",
            },
            open: {
              visibility: "visible",
              opacity: 1,
            },
          }}
          transition={{
            duration: 0.3,
          }}
          animate={menuControls}
          className="fixed invisible opacity-0 lg:visible lg:opacity-100 lg:relative top-0 left-0 right-0 bottom-0 bg-black lg:bg-transparent flex flex-col lg:flex-row gap-5 items-center justify-center lg:justify-between lg:w-[70%] z-10"
        >
          <ul className="flex flex-col lg:flex-row gap-3 lg:gap-9 items-center justify-center">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">How it works</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Solution</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
          </ul>

          <div className="[&_button]:py-1 [&_button]:px-3.5 flex flex-col lg:flex-row gap-3">
            <button>Login</button>
            <button className="bg-white rounded-3xl text-black">
              Register
            </button>
          </div>
        </motion.nav>

        <div className="z-20 block lg:hidden">
          <HamburgerBtn
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            handleMenu={handleMenu}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
