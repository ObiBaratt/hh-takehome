import styles from "./Item.module.css";

interface Props {
  hex: string
}

const Item: React.FC<Props> = ({hex}) => {
  return (
    <div className={styles.item}>
      <div className={styles.topSection} style={{ backgroundColor: `#${hex}` }} />
      <div className={styles.bottomSection}>
        <p className={styles.text}>{`#${hex}`}</p>
      </div>
    </div>
  );
};

export default Item;
