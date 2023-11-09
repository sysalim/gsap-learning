import gsap from "gsap";

const onEnter = ({ currentTarget }) => {
  gsap.to(currentTarget, {
    scale: 1.2,
    duration: 0.1,
  });
};
const onLeave = ({ currentTarget }) => {
  gsap.to(currentTarget, {
    duration: 0.1,
    scale: 1,
  });
};
export default {
  onEnter,
  onLeave,
};
