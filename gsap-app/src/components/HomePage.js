import styles from "../styles/components/Home.module.scss";
import Clients from "./app/Clients";
import Info from "./app/Info";
import Slider from "./app/Slider";
const HomePage = () => {
  return (
    <div className={styles.home}>
      <Slider />
      <Clients />
      <Info />
    </div>
  );
};
export default HomePage;
