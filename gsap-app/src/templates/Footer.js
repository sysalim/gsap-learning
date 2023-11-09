import FooterLinks from "../components/app/LinkFooter";
import Logo from "../components/app/Logo";
import styles from "../styles/Footer.module.scss";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <Logo className={styles.logo}/>
          <p>
            Copyright © 2020 Nexcent ltd. <br />
            All rights reserved
          </p>
        </div>
        <div className={styles.links}>
          <FooterLinks />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
