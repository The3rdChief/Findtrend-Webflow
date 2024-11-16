export const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
      ease: "easeInOut",
    },
  }),
};

export const popupVariants = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: (index) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: index * 0.05,
    },
  }),
};
