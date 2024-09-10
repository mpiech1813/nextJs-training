import { handleLogin } from "@/lib/actions";

const LoginPage = async () => {
  return (
    <div>
      <form action={handleLogin}>
        <button>Login with github</button>
      </form>
    </div>
  );
};

export default LoginPage;
