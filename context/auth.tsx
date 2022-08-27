import {
  onAuthStateChanged,
  Unsubscribe,
  User as FirebaseUser,
} from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth, db } from "../firebase/client";
import { User } from "../types/user";

type ContextType = {
  fbUser: FirebaseUser | null | undefined;
  isLoading: boolean;
  user: User | null | undefined;
};

const AuthContext = createContext<ContextType>({
  fbUser: undefined,
  isLoading: true,
  user: undefined,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [fbUser, setFbuser] = useState<FirebaseUser | null | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null | undefined>();

  useEffect(() => {
    let unsubscribe: Unsubscribe;
    onAuthStateChanged(auth, (resultUser) => {
      unsubscribe?.();
      setFbuser(resultUser);
      setIsLoading(true);

      if (resultUser) {
        const ref = doc(db, `users/${resultUser.uid}`);
        unsubscribe = onSnapshot(ref, (snap) => {
          setUser(snap.data() as User);
        });
        setIsLoading(false);
      } else {
        setUser(null);
        setIsLoading(false);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ fbUser, isLoading, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
