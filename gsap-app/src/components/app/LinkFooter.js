import { Link } from "react-router-dom";
import { modelFooterLink } from "../../model/footerLink";
import styles from "../../styles/components/app/FooterLink.module.scss";
const FooterLinks = () => {
  return (
    <div className={styles.links}>
      <div className={styles.company}>
        <h3>{modelFooterLink.company.heding}</h3>
        <ul>
          {modelFooterLink.company.links.map((item, index) => (
            <li key={index}>
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.company}>
        <h3>{modelFooterLink.company.heding}</h3>
        <ul>
          {modelFooterLink.company.links.map((item, index) => (
            <li key={index}>
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.support}></div>
      <div className={styles.search}></div>
    </div>
  );
};
export default FooterLinks;
