import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: 'AIzaSyC1M0Mq6OuICtmLxXuZMq2Dj2MLnRVAPV4',
  authDomain: 'e-commerce-a75fd.firebaseapp.com',
  projectId: 'e-commerce-a75fd',
  storageBucket: 'e-commerce-a75fd.appspot.com',
  messagingSenderId: '674792490713',
  appId: '1:674792490713:web:089109f6ed6154ff0a60c8',
  measurementId: 'G-RHYK0ZPTGJ',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebaseApp.auth();
export const db = firebaseApp.database();
