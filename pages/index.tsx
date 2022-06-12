import Link from "next/link";

import styles from "../styles/index.module.css";

export default function HomePage() {
	return (
		<div className={styles.content}>
			<h1>Олимпиады по программированию Республики Саха (Якутия)</h1>
			<p><Link href="/tuy-2005">Туймаада-2005</Link></p>
			<p><Link href="/tuy-2016">Туймаада-2016</Link></p>
			<p><Link href="/tuy-2021">Туймаада-2021</Link></p>
		</div>
	);
}
