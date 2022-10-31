import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD23lMx-qtRvOkDENXN8wQTGKWw09QLZ1Q",
  authDomain: "portfolio-b58ee.firebaseapp.com",
  projectId: "portfolio-b58ee",
  storageBucket: "portfolio-b58ee.appspot.com",
  messagingSenderId: "919289979544",
  appId: "1:919289979544:web:52733631d2b1d7414d66ed",
  measurementId: "G-BZWZH22D06",
  storageBucket: "gs://portfolio-b58ee.appspot.com/",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const storageRef = ref(
  storage,
  "gs://portfolio-b58ee.appspot.com/Itish's Resume (3).pdf"
);

export default storageRef;
