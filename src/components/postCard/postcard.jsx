import Image from "next/image";
import Link from "next/link";

import styles from "./postCard.module.css";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="" alt="" fill className={styles.img} />
        </div>
        <span className={styles.date}>01,02,03</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
          deserunt beatae quis possimus. Quibusdam dolor sequi asperiores velit
          explicabo accusantium? Laboriosam unde rem culpa? Illo iusto doloribus
          ea labore optio.
        </p>
        <Link className={styles.link} href="/blog/post">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
