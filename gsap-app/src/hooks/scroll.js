import gsap from "gsap";
export const headerScroll = (headerRef, scroll) => {
  if (scroll > 60) {
    gsap.to(headerRef, {
      position: "fixed",
      background: "#717171",
      duration: 0.7,
    });
  } else {
    gsap.to(headerRef, {
      position: "relative",
      background: "#E0E0E0",
      duration: 0.7,
    });
  }
};
