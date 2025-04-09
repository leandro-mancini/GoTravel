import { signInWithGoogle, signOutGoogle } from "../services";
import { useAuthStore } from "../store";

export function useAuth() {
  const { user, setUser } = useAuthStore();

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