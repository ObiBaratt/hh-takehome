import Header from "@/src/components/Header/Header";
import LeftNav from "@/src/components/LeftNav/LeftNav";
import Item from "@/src/components/Item/Item";

import styles from './Details.module.css';

const Details: React.FC<string> = (hex) => {
    return (
      <>
        <Header />
        <main>
          <div className={styles.container}>
            <LeftNav />
            <div className={styles.item}>
              <Item hex={hex}/>
            </div>
          </div>
        </main>
      </>
    );
}

export default Details;
