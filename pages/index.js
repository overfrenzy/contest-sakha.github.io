import Link from "next/link";

import styles from "./index.module.css";

export default function HomePage() {
  return (
    <div className={styles.content}>
      <h1>Олимпиады по программированию Республики Саха (Якутия)</h1>
      <Link href="/tuymaada">Туймаада-2021</Link>
    </div>
  );
}
