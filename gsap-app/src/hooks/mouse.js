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

const onEnterFlip = ({ currentTarget }) => {
  gsap.to(currentTarget, {
    rotateY: 180,
    duration: 0.5,
  });
};
export default {
  onEnter,
  onLeave,
  onEnterFlip
};
