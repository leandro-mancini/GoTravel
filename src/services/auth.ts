import { GoogleSignin, User } from '@react-native-google-signin/google-signin';

export function configureGoogleSignIn() {
  GoogleSignin.configure({
    webClientId: 'SEU_WEB_CLIENT_ID_DO_FIREBASE',
    offlineAccess: true,
  });
}

export async function signInWithGoogle(): Promise<User | null> {
    try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        return userInfo.data;
    } catch (error) {
        console.error('Erro ao fazer login com Google:', error);
        return null;
    }
}

export async function signOutGoogle(): Promise<void> {
    try {
        await GoogleSignin.signOut();
    } catch (error) {
        console.error('Erro ao sair:', error);
    }
}