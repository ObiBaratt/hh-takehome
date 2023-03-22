import Item from "@/src/components/Item/Item";
import styles from "./Details.module.css";
import { Color } from "@prisma/client";
import { TOTAL_ENTRIES } from "@/src/lib/constants";
import { genShadeRow } from "@/src/lib/helpers";
import { useRouter } from "next/router";

interface DetailProps {
  data: Color;
}

const Details: React.FC<DetailProps> = ({ data }) => {
  const router = useRouter();

  const handleButton = () => {
    router.push(`/`);
  };

  const shadeRow = genShadeRow(data.hex);

  return (
    <>
      <Item hex={data.hex.toLowerCase()} height={50} width={35} detail={true} />
      <div className={styles.shadeRow}>
        {shadeRow.map((shade) => {
          return (
            <Item
              key={shade}
              hex={shade.toLowerCase()}
              height={20}
              width={10}
            />
          );
        })}
      </div>
      <button onClick={handleButton} className={styles.clearButton}>
        Clear
      </button>
    </>
  );
};

export default Details;

export async function getStaticPaths() {
  const min = 1;
  const max = TOTAL_ENTRIES;
  const paths = [];

  for (let id = min; id <= max; id++) {
    paths.push({ params: { id: id.toString() } });
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: { params: { id: string } }) {
  const res = await fetch(
    `https://hh-takehome.vercel.app/api/colors?id=${context.params.id}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
