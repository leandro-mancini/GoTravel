import { create } from 'zustand';
import { User } from '@react-native-google-signin/google-signin';

interface AuthGoogleState {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useAuthGoogleStore = create<AuthGoogleState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));