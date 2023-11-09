import { Link } from "react-router-dom";
import styles from "../../styles/components/app/Logo.module.scss";
import mouse from "../../hooks/mouse";
const Logo = ({ className }) => {
  return (
    <>
      <Link
        to={"/"}
        className={`${styles.logo} ${className}`}
        onMouseEnter={mouse.onEnter}
        onMouseLeave={mouse.onLeave}>
        <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Logo" />
        <h1>Nexcent</h1>
      </Link>
    </>
  );
};

export default Logo;
