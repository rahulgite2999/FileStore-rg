import {getApp, getApps, initializeApp} from "firebase/app";
// import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// import {getFunctions} from "firebase/functions";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAMdAgLKVnPRr6zESQRf4UG1VmhBOPK0oc",
    authDomain: "dropbox-clone-rg.firebaseapp.com",
    projectId: "dropbox-clone-rg",
    storageBucket: "dropbox-clone-rg.appspot.com",
    messagingSenderId: "53462208743",
    appId: "1:53462208743:web:02b812f5ec5a5bfdc55242"
  };

  const app = getApps().length ? getApp():initializeApp(firebaseConfig);
  const db = getFirestore(app);
//   const auth = getAuth(app);
//   const functions = getFunctions(app);
  const storage = getStorage(app);

  export {db, storage};