import { useLayoutEffect, useRef } from "react";
import styles from "../../styles/components/helper/Member.module.scss";
import { handleScroll } from "../../hooks/scrollUtil";
import fade from "../../hooks/fade";
const Member = ({ imageContent, altImage, heading1, heading2, content }) => {
  const memberRef = useRef(null);

  useLayoutEffect(() => {
    const scrollCallback = () => {
      if (window.scrollY > 744) {
        fade.fadeInLeft(memberRef.current);
      } else {
        fade.fadeOutRight(memberRef.current);
      }
    };
    const clineUp = handleScroll(scrollCallback);
    return () => clineUp;
  });
  return (
    <div className={styles.member} ref={memberRef}>
      <img
        src={process.env.PUBLIC_URL + "/icons/" + imageContent}
        alt={altImage}
        width={48}
        height={48}
      />
      <h1 className={styles.heading}>
        {heading1} <br /> {heading2}
      </h1>
      <div className={styles.content}>
        <p>{content}</p>
      </div>
    </div>
  );
};
export default Member;
