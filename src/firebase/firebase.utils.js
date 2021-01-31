import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDvgTcXXwLIlkqGU6lzd2XEt9VOCP8IVIM",
    authDomain: "udemy-clothing-c3a28.firebaseapp.com",
    projectId: "udemy-clothing-c3a28",
    storageBucket: "udemy-clothing-c3a28.appspot.com",
    messagingSenderId: "388378719554",
    appId: "1:388378719554:web:06eb9a7b9ac93c061744db",
    measurementId: "G-L84N6CYQMV"
  }; 
firebase.initializeApp(config); 

export const createUserProfileDocument = async(userAuth, moreData) => {
  if(!userAuth) return; 
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email }= userAuth;
    const createdDate = new Date();

    try {
      await userRef.set({
        displayName, email, createdDate, ...moreData
      })
    } catch (error){
      console.log('error creating user', error.message);
    }
      
  }

  return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;