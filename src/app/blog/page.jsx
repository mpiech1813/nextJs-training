import styles from "./blog.module.css";
import PostCard from "@/components/postCard/postcard";

export default function BlogPage() {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
    </div>
  );
}
