import gsap from "gsap";
const fadeIn = (currentTarget) => {
  gsap.to(currentTarget, {
    duration: 1,
    opacity: 1,
    y: 0,
  });
};

const fadeOutUp = (currentTarget) => {
  gsap.to(currentTarget, {
    duration: 1,
    opacity: 0,
    y: -50,
  });
};
const fadeOutDown = (currentTarget) => {
  gsap.to(currentTarget, {
    duration: 1,
    opacity: 0,
    y: 50,
  });
};

const fadeInLeft = (currentTarget) => {
  gsap.to(currentTarget, {
    opacity: 1,
    x: 0,
    duration: 1,
  });
};

const fadeOutRight = (currentTarget) => {
  gsap.to(currentTarget, {
    opacity: 0,
    x: 100,
    duration: 1,
  });
};
export default {
  fadeIn,
  fadeOutUp,
  fadeOutDown,
  fadeInLeft,
  fadeOutRight,
};
