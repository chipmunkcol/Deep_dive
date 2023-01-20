import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, query, orderBy } from 'firebase/firestore/lite';

import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREMENTID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const DB = getFirestore()
export const postFB = async(order) => {
try {
    const docRef = await addDoc(collection(DB, "order"), order);
    console.log("저장완료 id챙겨~", docRef.id);
    return true;
  } catch (e) {
    console.error("실패!", e);
    return false;
  }
}
