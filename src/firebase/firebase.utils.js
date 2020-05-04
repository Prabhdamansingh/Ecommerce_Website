import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyAhXts_E7gCXZy7MP9PXBuLSS_IiSXEvII',
    authDomain: 'crw-db-1a7c9.firebaseapp.com',
    databaseURL: 'https://crw-db-1a7c9.firebaseio.com',
    projectId: 'crw-db-1a7c9',
    storageBucket: 'crw-db-1a7c9.appspot.com',
    messagingSenderId: '769320561475',
    appId: '1:769320561475:web:5e8ddd23508b20d9109df6',
    measurementId: 'G-YCP81LJ738',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
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
            console.error('error creating user', err.message);
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
