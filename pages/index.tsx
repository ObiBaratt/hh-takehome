import Head from "next/head";
import { Source_Serif_Pro } from "next/font/google";
import Header from "@/src/components/Header/Header";
import LeftNav from "@/src/components/LeftNav/LeftNav";
import styles from "./index.module.css";
import ListView from "@/src/components/ListView/ListView";

const font = Source_Serif_Pro({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Color Picker</title>
        <meta name="description" content="Color picker with related shades" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />

      <main className={font.className}>
        <div className={styles.container}>
          <LeftNav />
          <ListView />
        </div>
      </main>
    </>
  );
}
