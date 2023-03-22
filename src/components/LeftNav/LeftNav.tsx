import { TOTAL_ENTRIES } from "@/src/lib/constants";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Loader from "../Loader/Loader";
import styles from "./LeftNav.module.css";

const colors = [
  { name: "Red", id: 60 },
  { name: "Orange", id: 84 },
  { name: "Yellow", id: 2 },
  { name: "Green", id: 9 },
  { name: "Blue", id: 3 },
  { name: "Purple", id: 59 },
  { name: "Brown", id: 21 },
  { name: "Gray", id: 95 },
];

const LeftNav: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

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
              <Link href={`/details/${color.id}`}>{color.name}</Link>
            </li>
          );
        })}

        <button
          className={styles.randomButton}
          onClick={() => {
            setShow(!show);
          }}
        >
          Click here to see the loader.
        </button>

        {show && (
          <div>
            <Loader />
          </div>
        )}
      </ul>
    </nav>
  );
};

export default LeftNav;
