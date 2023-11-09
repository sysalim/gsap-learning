import { useLayoutEffect, useRef } from "react";
import styles from "../../styles/components/app/Info.module.scss";
import ContainerFlex from "../helper/FlexContainer";
import Button from "./Button";
import ParrentText from "../helper/ParentText";
import styleButton from "../../styles/components/app/Button.module.scss";
import { modelInfo } from "../../model/info";
const Info = () => {
  useLayoutEffect(()=> {
    
  })
  return (
    <div className={styles.info}>
      <ContainerFlex className={styles.container}>
        <div className={styles.content_logo}>
          <img
            src={process.env.PUBLIC_URL + modelInfo.image.link}
            alt={modelInfo.image.altImage}
          />
        </div>
        <div className={styles.content_text}>
          <h1>{modelInfo.heading}</h1>
          <ParrentText>
            <p>{modelInfo.paragraph}</p>
            <Button
              label={modelInfo.button.label}
              className={styleButton.buttonText}
            />
          </ParrentText>
        </div>
      </ContainerFlex>
    </div>
  );
};

export default Info;
