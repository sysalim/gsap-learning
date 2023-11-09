import { Link } from "react-router-dom";
import { navigate } from "../model/navigate";
import styles from "../styles/components/Navbar.module.scss";
import mouse from "../hooks/mouse";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navigate}>
        {navigate.map((value, index) => (
          <li
            key={index}
            onMouseEnter={mouse.onEnter}
            onMouseLeave={mouse.onLeave}>
            <Link to={value.href}>{value.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
