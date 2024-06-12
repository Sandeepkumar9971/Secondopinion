import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
import { getStorage, uploadBytes } from 'firebase/storage';
import { getDownloadURL, ref } from 'firebase/storage';


let auth;
let storage;

if (typeof window !== 'undefined') {
    const firebaseConfig = {
        apiKey: "AIzaSyAI445PX1sRCsypwjVjJAUS-GURiTj7Ojk",
        authDomain: "secondopinion-891ae.firebaseapp.com",
        projectId: "secondopinion-891ae",
        storageBucket: "secondopinion-891ae.appspot.com",
        messagingSenderId: "374264493615",
        appId: "1:374264493615:web:706fd72e8d89dbb8fbf8da",
        measurementId: "G-CEHT13SCPS"
    };

    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    storage = getStorage(app);
    const analytics = getAnalytics(app);
}

export { auth,storage};