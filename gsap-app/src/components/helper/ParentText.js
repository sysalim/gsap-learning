import styles from "../../styles/components/app/ParentText.module.scss";
export default function ParrentText({ children }) {
  return (
    <>
      <div className={styles.parrent_text}>{children}</div>
    </>
  );
}
