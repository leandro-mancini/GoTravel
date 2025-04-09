import { signInWithFacebook, signOutFacebook } from "../services";
import { useAuthFacebookStore } from "../store";

export function useAuthFacebook() {
    const { user, setUser } = useAuthFacebookStore();
  
    const login = async () => {
      const userInfo = await signInWithFacebook();
      if (userInfo) setUser(userInfo);
    };
  
    const logout = async () => {
      await signOutFacebook();
      setUser(null);
    };
  
    return {
      user,
      isLoggedIn: !!user,
      login,
      logout,
    };
}