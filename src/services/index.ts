import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyC61_mGVR0LEgEJ5tjPGJxUgUjmY-VSIoA',
  authDomain: 'todolist-2941c.firebaseapp.com',
  databaseURL: 'https://todolist-2941c-default-rtdb.firebaseio.com',
  projectId: 'todolist-2941c',
  storageBucket: 'todolist-2941c.appspot.com',
  messagingSenderId: '247617774529',
  appId: '1:247617774529:web:311082e0dc9b82b8a5c540',
  measurementId: 'G-MSZV3T9XYL',
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
