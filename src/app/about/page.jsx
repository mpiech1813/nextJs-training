import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "Next App About Page",
  description: "About page description",
};

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>We Create Brighter Future</h1>
        <p className={styles.desc}>Lorem Ipsum Main Body Text Area</p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1 className={styles.title}>10 K</h1>
            <p className={styles.desc}>Years</p>
          </div>
          <div className={styles.box}>
            <h1 className={styles.title}>10 K</h1>
            <p className={styles.desc}>Years</p>
          </div>
          <div className={styles.box}>
            <h1 className={styles.title}>10 K</h1>
            <p className={styles.desc}>Years</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="/about.jpg" alt="kol" fill />
      </div>
    </div>
  );
}

// to add images from remote addresses, video: 1:05:48
// next.config.js > images:{ remotePatterns: [{}]}
