import { modelLocalBussines } from "../../model/localBussines";
import styles from "../../styles/components/app/LocalBussines.module.scss";
import ContainerFlex from "../helper/FlexContainer";
import ParrentText from "../helper/ParentText";
import ChildLocal from "./ChildLocal";
const LocalBussines = () => {
  return (
    <div className={styles.local_bussines}>
      <ContainerFlex className={styles.container}>
        <div className={styles.heading_content}>
          <h1 className={styles.header}>
            {modelLocalBussines.heading1}
            <br />{" "}
            <span style={{ color: "red" }}>{modelLocalBussines.heading2}</span>
          </h1>
          <ParrentText>
            <p>{modelLocalBussines.paragraph}</p>
          </ParrentText>
        </div>
        <div className={styles.content}>
          {modelLocalBussines.content.map((item, index) => (
            <ChildLocal
              className={styles.child_content}
              key={index}
              image={process.env.PUBLIC_URL + "/icons/" + item.image}
              category={item.category}
              viwers={item.viwers}
            />
          ))}
        </div>
      </ContainerFlex>
    </div>
  );
};
export default LocalBussines;
