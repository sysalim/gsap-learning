import mouse from "../../hooks/mouse";
import styles from "../../styles/components/app/Button.module.scss";
const Button = ({ type, label, className, click, ref }) => {
  return (
    <>
      <button
        type={type}
        className={`${styles.button} ${className}`}
        onClick={click}
        ref={ref}>
        {label}
      </button>
    </>
  );
};

export default Button;
