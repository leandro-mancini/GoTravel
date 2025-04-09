import { GoogleSignin, User } from '@react-native-google-signin/google-signin';
import {
    LoginManager,
    AccessToken,
    Profile,
} from 'react-native-fbsdk-next';

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

export async function signInWithFacebook() {
    try {
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  
      if (result.isCancelled) {
        throw new Error('Login cancelado');
      }
  
      const data = await AccessToken.getCurrentAccessToken();
      if (!data) {
        throw new Error('Não foi possível obter token de acesso');
      }
  
      const profile = await Profile.getCurrentProfile();
      return {
        token: data.accessToken,
        name: profile?.name ?? '',
        id: profile?.userID ?? '',
      };
    } catch (error) {
      console.error('Erro ao logar com Facebook:', error);
      return null;
    }
}
  
export async function signOutFacebook() {
    try {
      await LoginManager.logOut();
    } catch (error) {
      console.error('Erro ao sair:', error);
    }
}