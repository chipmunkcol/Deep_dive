import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, query, orderBy } from 'firebase/firestore/lite';

import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBlmyA6ZK4aJ44O6lC010M5c17JWpiUAMA",
    authDomain: "auth-c1322.firebaseapp.com",
    databaseURL: "https://auth-c1322-default-rtdb.firebaseio.com",
    projectId: "auth-c1322",
    storageBucket: "auth-c1322.appspot.com",
    messagingSenderId: "831677399464",
    appId: "1:831677399464:web:263a95b8b7053be22a1d9d",
    measurementId: "G-P1F9JG76X8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const DB = getFirestore(app);

export const postFB = async(order) => {
try {
    const docRef = await addDoc(collection(DB, "order"), order);
    console.log("저장완료 id챙겨~", docRef.id);
  } catch (e) {
    console.error("실패!", e);
  }
}
