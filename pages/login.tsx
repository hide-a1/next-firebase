import Button from "../components/button";
import { login, logout } from "../lib/auth";

function LoginPage() {
  return (
    <div>
      <h1>ログイン</h1>
      <Button onClick={login}>ログインする</Button>
      <Button onClick={logout}>ログアウトする</Button>
    </div>
  );
}

export default LoginPage;
