import styles from "./PostUser.module.css";

const getData = async (userId) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    // added no cache to test the fallback (loaidng indicator)
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("fetching post data error");
  }

  return res.json();
};

const PostUser = async ({ userId }) => {
  const user = await getData(userId);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.userName}>{user.name}</span>
    </div>
  );
};

export default PostUser;
