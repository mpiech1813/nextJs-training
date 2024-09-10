// use Link instead of <a> so the application can use cache

import Link from "next/link";
import Links from "./link/links";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Logo
      </Link>
      <Links />
    </div>
  );
}
