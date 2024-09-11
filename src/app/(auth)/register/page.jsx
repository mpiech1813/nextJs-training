import { register } from "@/lib/actions";
import styles from "./register.module.css";
// import RegisterForm from

export default function RegisterPage() {
  "use server";

  return (
    <div>
      <form action=" ">
        <input type="text" placeholder="username" name="username" />
        <input type="text" placeholder="email" name="email" />
        <input type="text" placeholder="password" name="password" />
        <input
          type="text"
          placeholder="password repeat"
          name="passwordRepeat"
        />
        <button>register</button>
      </form>
    </div>
  );
}
