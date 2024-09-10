// import Navbar from '@/components/Navbar' => @ at can be used instead of multiple ../../../
// app directory for pages only. src for components

import styles from "./home.module.css";
import Image from "next/image";

const Home = () => {
  // to test error page
  // throw new Error("error in home page");

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Main Title of the tage</h1>
        <p className={styles.desc}>Lorem ipsum some info text</p>
        <div className={styles.buttons}>
          <button className={styles.button}>Leaern More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.jpeg" alt="" fill className={styles.brandImage} />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/test.jpg"
          alt=""
          width="500"
          height="500"
          className={styles.heroImg}
        />
      </div>
    </div>
  );
};

export default Home;
