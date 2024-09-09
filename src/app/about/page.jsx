import Image from "next/image";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image src="/about.jpg" alt="kol" fill />
      </div>
    </div>
  );
}

// to add images from remote addresses, video: 1:05:48
// next.config.js > images:{ remotePatterns: [{}]}
