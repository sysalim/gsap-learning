import { useEffect, useRef } from "react";
import { modelClient } from "../../model/client";
import styles from "../../styles/components/Clients.module.scss";
import fade from "../../hooks/fade";
import { handleScroll } from "../../hooks/scrollUtil";
import { Link } from "react-router-dom";
import Member from "../helper/Member";
import { modelMember } from "../../model/member";
const Clients = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    const scrollCallback = () => {
      if (window.scrollY > 370) {
        fade.fadeIn(containerRef.current);
      }
    };
    const clineUp = handleScroll(scrollCallback);
    return () => clineUp;
  }, []);
  return (
    <div className={styles.client}>
      <div className={styles.container} ref={containerRef}>
        <h1 className={styles.heading}>{modelClient.heading}</h1>
        <p className={styles.paragraf}>{modelClient.paragraf}</p>
        <div className={styles.content_logo}>
          {modelClient.logoClinet.map((item, index) => (
            <Link key={index} to={"/"}>
              <img
                src={process.env.PUBLIC_URL + "/client/" + item}
                alt={"gambar" + item}
              />
            </Link>
          ))}
        </div>
        <h1 className={styles.heading_manage}>
          {modelClient.headingManage[0]} <br /> {modelClient.headingManage[1]}
        </h1>
        <p className={styles.pMenage}>{modelClient.paragraf_manage}</p>
        <div className={styles.content_member}>
          {modelMember.map((item, index) => (
            <Member
              key={index}
              heading1={item.heading1}
              heading2={item.heading2}
              imageContent={item.icon}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
