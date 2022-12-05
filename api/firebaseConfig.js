// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";
import dotenv from 'dotenv'
dotenv.config();


// const firebaseConfig = {
//     apiKey: process.env.APIKEY,
//     authDomain: process.env.AUTHDOMAIN,
//     projectId: process.env.PROJECTID,
//     storageBucket: process.env.STORAGEBUCKET,
//     messagingSenderId: process.env.MESSAGINGSENDERID,
//     appId: process.env.APPID,
//     measurementId: process.env.MEASUREMENTID
// };

const firebaseConfig = {
    apiKey: "AIzaSyB8xjSwxm-0wJptZDayGeE0Qt9JrsNkwwg",
    authDomain: "radio-stations-ce7cc.firebaseapp.com",
    projectId: "radio-stations-ce7cc",
    storageBucket: "radio-stations-ce7cc.appspot.com",
    messagingSenderId: "73665985644",
    appId: "1:73665985644:web:d649813e866c080b68ac49",
    measurementId: "G-NFQ6RJ4WC9"
};






// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize Collection References
export const stationCollectionRef = collection(db,"stations")
export const userCollectionRef = collection(db,"users")


