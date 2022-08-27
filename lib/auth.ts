import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/client";

export const login = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider).then((resut) => {
    alert("login complete" + resut.user.displayName);
  });
};

export const logout = () => {
  signOut(auth).then(() => {
    alert("サインアウト完了");
  });
};
