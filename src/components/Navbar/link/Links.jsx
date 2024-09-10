// use Link instead of <a> to use cached page
"use client";

import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import { useState } from "react";
import { handleLogOut } from "@/lib/actions";

const links = [
  { title: "Homepage", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];

const Links = ({ session }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link, idx) => (
          <NavLink item={link} key={idx} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLink item={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={handleLogOut}>
              <button className={styles.logout}>Log Out</button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button className={styles.menuButton} onClick={() => setOpen(!open)}>
        Menu
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link, idx) => (
            <NavLink item={link} key={idx} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
