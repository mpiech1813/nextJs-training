import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/PostUser/PostUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

// FETCH DATA WITH API
// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
//   if (!res.ok) {
//     throw new Error("fetching post data error");
//   }

//   return res.json();
// };

export default async function SinglePostPage({ params }) {
  const { slug } = params;

  console.log(params);

  // FETCH DATA WITH API
  // const post = await getData(slug);

  // FETCH DATA WITHOUT API
  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/about.jpg" alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            src="/about.jpg"
            alt=""
            className={styles.avatar}
            height={50}
            width={50}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Publised</span>
            <span className={styles.detailValue}>06,07,02</span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
}
//
