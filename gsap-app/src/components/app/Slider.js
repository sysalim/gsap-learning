import { useLayoutEffect, useRef, useState } from "react";
import styles from "../../styles/components/app/Slider.module.scss";
import Button from "./Button";
import gsap from "gsap";
import { modelSlide } from "../../model/slider";
const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const slideRef = useRef(null);
  const headingRef = useRef(null);
  const images = modelSlide.images;
  useLayoutEffect(() => {
    const intervalSlide = setInterval(() => {
      gsap.to(slideRef.current, {
        opacity: 0,
        duration: 1,
        scale: 1.2,
        onComplete: () => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
          setTimeout(() => {
            gsap.fromTo(
              slideRef.current,
              { scale: 0.8 },
              { scale: 1, duration: 1, opacity: 1 }
            );
          }, 500);
        },
      });
    }, 4000);
    const intervalTrans = setInterval(() => {
      gsap.fromTo(
        headingRef.current,
        { duration: 1, opacity: 0, y: -100 },
        { duration: 1, opacity: 1, y: 0 }
      );
    }, 4000);
    return () => {
      clearInterval(intervalSlide);
      clearInterval(intervalTrans);
    };
  }, [images]);
  return (
    <div className={styles.slider}>
      <div className={styles.container}>
        <div className={styles.header_content}>
          <h1 ref={headingRef}>
            {modelSlide.heading[0]}
            <br /> <span>{modelSlide.heading[1]}</span>
          </h1>
          <p>{modelSlide.paragraf}</p>
          <Button label={"register"} />
        </div>
        <div className={styles.content_slider}>
          <img
            src={process.env.PUBLIC_URL + images[currentImageIndex]}
            alt="slider"
            ref={slideRef}
          />
        </div>

        <div className={styles.slider_docts}>
          {images.map((_, index) => (
            <span
              key={index}
              className={styles.slider_navigate}
              style={{
                backgroundColor: currentImageIndex === index ? "black" : "gray",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
