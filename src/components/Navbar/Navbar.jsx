// use Link instead of <a> so the application can use cache

import Links from "./link/links";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <Links />
    </div>
  );
}
