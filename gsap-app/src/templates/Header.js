import { useCallback, useRef, useLayoutEffect } from "react";
import Navbar from "../components/Navbar";
import Logo from "../components/app/Logo";
import styles from "../styles/Header.module.scss";
import Button from "../components/app/Button";
import { buttonModel } from "../model/button";
import { headerScroll } from "../hooks/scroll";
import { useNavigate } from "react-router-dom";
import { handleScroll } from "../hooks/scrollUtil";
const Header = () => {
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const handleClick = useCallback((e) => {
    const { textContent } = e.target;
    navigate(`/${textContent.toLowerCase()}`);
  });
  useLayoutEffect(() => {
    const scrollCalback = () => {
      headerScroll(headerRef.current, window.scrollY);
    };
    const clineUp = handleScroll(scrollCalback);
    return () => clineUp;
  }, []);
  return (
    <header className={styles.header} ref={headerRef}>
      <div className={styles.container}>
        <Logo />
        <Navbar />
        <span className={styles.user}>
          <Button label={buttonModel.login.label} click={handleClick} />
          <Button label={buttonModel.register.label} click={handleClick} />
        </span>
      </div>
    </header>
  );
};

export default Header;
