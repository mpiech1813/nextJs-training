// use Link instead of <a> so the application can use cache

import Link from "next/link";
import Links from "./link/Links";
import styles from "./Navbar.module.css";
import { auth } from "@/lib/auth";

const Navbar = async () => {
  const session = await auth();

  console.log(session);
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Logo
      </Link>
      <Links session={session} />
    </div>
  );
};

export default Navbar;
