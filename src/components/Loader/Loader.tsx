import styles from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
  );
};

export default Loader;
