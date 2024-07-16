// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCT5rSFUs5AfseRDzGh83Fz4F7x7cPOu3M",
  authDomain: "ai-npu-compiler-iith.firebaseapp.com",
  projectId: "ai-npu-compiler-iith",
  storageBucket: "ai-npu-compiler-iith.appspot.com",
  messagingSenderId: "1038319112285",
  appId: "1:1038319112285:web:43842bbc414e861b507db4",
  measurementId: "G-B3DZNNJYZR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };
