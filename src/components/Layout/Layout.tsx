import LeftNav from "../LeftNav/LeftNav";
import Header from "../Header/Header";
import styles from "./Layout.module.css";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.content}>
        <LeftNav />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
