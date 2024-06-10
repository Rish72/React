// import {initializeApp} from "firebase";
// import { getFirestore } from "firebase/firestore";
// const firebaseConfig = {
//     apiKey: "AIzaSyCZBeHpWtU2ttFkUqkiFi_Vudm2I_XL8Lc",
//     authDomain: "blog-project-cb390.firebaseapp.com",
//     projectId: "blog-project-cb390",
//     storageBucket: "blog-project-cb390.appspot.com",
//     messagingSenderId: "391110209657",
//     appId: "1:391110209657:web:efbe371c77d628cfd764a8"
//   };

// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp)
// export default db;


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZBeHpWtU2ttFkUqkiFi_Vudm2I_XL8Lc",
  authDomain: "blog-project-cb390.firebaseapp.com",
  projectId: "blog-project-cb390",
  storageBucket: "blog-project-cb390.appspot.com",
  messagingSenderId: "391110209657",
  appId: "1:391110209657:web:efbe371c77d628cfd764a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
