import { create } from "zustand";

interface AuthFacebookState {
    user: { name: string; id: string } | null;
    setUser: (user: AuthFacebookState['user']) => void;
}

export const useAuthFacebookStore = create<AuthFacebookState>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
}));