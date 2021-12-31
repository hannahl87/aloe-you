import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyDlmCidTUi3-tvqPbvn5sKsw3sPxc8TEzI',
  authDomain: 'aloe-you-db.firebaseapp.com',
  projectId: 'aloe-you-db',
  storageBucket: 'aloe-you-db.appspot.com',
  messagingSenderId: '640153378212',
  appId: '1:640153378212:web:19771a376fd6a348c23531',
  measurementId: 'G-1NKB3Q9DVH',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
