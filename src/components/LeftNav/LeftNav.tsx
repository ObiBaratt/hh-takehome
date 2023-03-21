import { TOTAL_ENTRIES } from "@/src/lib/constants";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./LeftNav.module.css";

const colors = [
  { name: "Red", hex: "FF0000" },
  { name: "Orange", hex: "FFA500" },
  { name: "Yellow", hex: "FFFF00" },
  { name: "Green", hex: "008000" },
  { name: "Blue", hex: "0000FF" },
  { name: "Purple", hex: "800080" },
  { name: "Brown", hex: "A52A2A" },
  { name: "Gray", hex: "808080" },
];

const LeftNav: React.FC = () => {
  const router = useRouter();

  const handleButton = () => {
    const random = Math.floor(Math.random() * TOTAL_ENTRIES) + 1;
    router.push(`/details/${random}`);
  };

  return (
    <nav className={styles.navigation}>
      <button onClick={handleButton} className={styles.randomButton}>
        Random Color
      </button>
      <ul className={styles.leftList}>
        {colors.map((color) => {
          return (
            <li key={color.name} className={styles.leftList}>
              <Link href={`/details/${color.hex}`}>{color.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default LeftNav;
