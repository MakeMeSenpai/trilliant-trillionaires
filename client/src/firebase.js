
import firebase from 'firebase'
import 'firebase/auth'

// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyBc2RrctMXrmMus9s4ukLNtmskomRvDT48",
    authDomain: "trilliant-5ed97.firebaseapp.com",
    databaseURL: "https://trilliant-5ed97.firebaseio.com",
    projectId: "trilliant-5ed97",
    storageBucket: "trilliant-5ed97.appspot.com",
    messagingSenderId: "831213855089",
    appId: "1:831213855089:web:84dee11880700715e3d6d0"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


export const auth = app.auth()
export default app;
