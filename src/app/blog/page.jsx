import styles from "./blog.module.css";
import PostCard from "@/components/postCard/postcard";
import { getPosts } from "@/lib/data";

// export default function BlogPage({ params, searchParams }) {
//   console.log(params);
//   console.log(searchParams);

// FETCH DATA WITH API
// const getData = async () => {
//   // next caches the responses, but in order to prevent that, add cache: 'no-store'
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     cache: "no-store",
//     // forces next to refresh the data
//     next: { revalidate: 3600 },
//   });
//   if (!res.ok) {
//     throw new Error("fetching post data error");
//   }

//   return res.json();
// };

// FETCH DATA FROM MY OWN API
// const getData = async () => {
//   // next caches the responses, but in order to prevent that, add cache: 'no-store'
//   const res = await fetch("https://localhost:3000/api/posts");

//   if (!res.ok) {
//     throw new Error("fetching post data error");
//   }

//   return res.json();
// };

export default async function BlogPage() {
  // FETCH DATA WITH API
  // const posts = await getData();

  // FETCH DATA WITHOUT API
  const posts = await getPosts();

  // FETCH DATA WITH MY OWN API
  // const posts = await getData();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}
