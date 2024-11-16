// src/useLenis.js
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.45, // Duration of the scrolling
      easing: (t) => 1 - Math.pow(1 - t, 2), // Easing function, you can customize it
      smooth: true, // Enable smooth scrolling
      direction: "vertical", // Vertical scrolling
      gestureDirection: "vertical", // Gesture direction
      smoothTouch: true, // Smooth touch (if you want to disable for touch devices)
    });

    // Update function to run on each frame
    const update = (time) => {
      lenis.raf(time);
      requestAnimationFrame(update);
    };

    // Start the animation loop
    requestAnimationFrame(update);

    // Cleanup function to destroy the Lenis instance
    return () => {
      lenis.destroy();
    };
  }, []);
};

export default useLenis;
