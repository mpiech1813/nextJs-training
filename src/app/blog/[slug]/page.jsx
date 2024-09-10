import Image from "next/image";
import styles from "./singlePost.module.css";

export default function SinglePostPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/about.jpg" alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="/about.jpg"
            alt=""
            className={styles.avatar}
            height={50}
            width={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Jam Łasica</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Publised</span>
            <span className={styles.detailValue}>06,07,02</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officia
          quod amet alias recusandae architecto esse nostrum reprehenderit
          placeat corporis odio doloremque similique, odit, laudantium quos eius
          minus ipsam ut!
        </div>
      </div>
    </div>
  );
}
//
