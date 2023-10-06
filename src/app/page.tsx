import styles from "./page.module.css";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Home() {
  const client = createClient();
  const page = await client.getSingle("quickIntro");

  return (
    <main className={styles.main}>
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  );
}
