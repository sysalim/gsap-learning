import styles from "../styles/components/Home.module.scss";
import Clients from "./app/Clients";
import Slider from "./app/Slider";
const HomePage = () => {
  return (
    <div className={styles.home}>
      <Slider />
      <Clients />
    </div>
  );
};
export default HomePage;
