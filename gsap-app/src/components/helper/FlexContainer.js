import styles from "../../styles/components/helper/Flex.module.scss";
export default function ContainerFlex({ className, ref, children }) {
  return (
    <>
      <div className={`${styles.container} ${className}`} ref={ref}>
        {children}
      </div>
    </>
  );
}
