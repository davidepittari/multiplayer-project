import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDh2kPnxA9Nq6YgbHQQn_HAAUYzcTMViOc",
  authDomain: "multiplayer-project-6a3b3.firebaseapp.com",
  projectId: "multiplayer-project-6a3b3",
  storageBucket: "multiplayer-project-6a3b3.appspot.com",
  messagingSenderId: "530933936310",
  appId: "1:530933936310:web:771dd780d6e523bd8b7617",
  measurementId: "G-NLM5WYC2YJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
