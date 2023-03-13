import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCcx-B52q-jaa9_h6ndwbXnxXTwu-dMS9g",
    authDomain: "suit-your-self-db.firebaseapp.com",
    projectId: "suit-your-self-db",
    storageBucket: "suit-your-self-db.appspot.com",
    messagingSenderId: "202746025724",
    appId: "1:202746025724:web:f5cb812903fd6bb6466979"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);