import { signInWithGoogle, signOutGoogle } from "../services";
import { useAuthGoogleStore } from "../store";

export function useAuthGoogle() {
  const { user, setUser } = useAuthGoogleStore();

  const login = async () => {
    const userInfo = await signInWithGoogle();
    if (userInfo) {
      setUser(userInfo);
    }
  };

  const logout = async () => {
    await signOutGoogle();
    setUser(null);
  };

  return {
    user,
    login,
    logout,
    isLoggedIn: !!user,
  };
}