import styles from "../styles/components/Home.module.scss";
import Clients from "./app/Clients";
import Info from "./app/Info";
import InfoFooter from "./app/InfoFooter";
import LocalBussines from "./app/LocalBussines";
import Slider from "./app/Slider";
const HomePage = () => {
  return (
    <div className={styles.home}>
      <Slider />
      <Clients />
      <Info />
      <LocalBussines />
      <InfoFooter />
    </div>
  );
};
export default HomePage;
