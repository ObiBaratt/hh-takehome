import { Color } from "@prisma/client";
import Item from "../Item/Item";
import styles from "./Grid.module.css";

import { useRouter } from "next/router";

interface GridProps {
  items: Color[];
  page: number;
}

const Grid: React.FC<GridProps> = ({ items }) => {
  const router = useRouter();
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => router.push(`/details/${item.id}`)}
          className={styles.item}
        >
          <Item hex={item.hex.toLowerCase()} height={28} width={12} />
        </div>
      ))}
    </div>
  );
};

export default Grid;
