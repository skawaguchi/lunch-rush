import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyDgHsUmd8Foj1BTCQ8s0_PVNCA6TEBloBo',
    authDomain: 'lunch-rush-cf8ea.firebaseapp.com',
    databaseURL: 'https://lunch-rush-cf8ea.firebaseio.com',
    projectId: 'lunch-rush-cf8ea',
    storageBucket: 'lunch-rush-cf8ea.appspot.com',
    messagingSenderId: '889311576590'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
