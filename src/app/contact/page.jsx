import Image from "next/image";
import styles from "./contact.module.css";
import dynamic from "next/dynamic";
// import HydrationTest from "@/components/hydrationTest";

// preventing hydration 1:58

// const HydrationTestNoSSR = dynamic(() => import("@/components/hydrationTest"), {
//   ssr: false,
// });

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/contact.png"
          alt="contact image"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.formContainer}>
        {/* <HydrationTestNoSSR /> */}
        {/* <div suppressHydrationWarning>{a}</div> */}
        {/* above can be usedas alternative to Hydration Test component  */}
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="email" />
          <input type="text" placeholder="phone number (optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}
