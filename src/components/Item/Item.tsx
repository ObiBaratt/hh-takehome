import styles from "./Item.module.css";

interface Props {
  hex: string;
  height: number;
  width: number;
  detail?: boolean;
}

const Item: React.FC<Props> = ({ hex, height, width, detail }) => {
  return (
    <div
      className={styles.item}
      style={{
        backgroundColor: `#${hex}`,
        minHeight: `${height}vh`,
        minWidth: `${width}vw`,
      }}
    >
      <div className={styles.bottomSection}>
        <p className={styles.text}>{`#${hex}`}</p>
      </div>
    </div>
  );
};

export default Item;
