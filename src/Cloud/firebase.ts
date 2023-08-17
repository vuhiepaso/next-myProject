// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB9EYRqXKFakZ3KoRH5GYTMUWLLnNpf4x0',
  authDomain: 'fir-e5e02.firebaseapp.com',
  projectId: 'fir-e5e02',
  storageBucket: 'fir-e5e02.appspot.com',
  messagingSenderId: '788409533197',
  appId: '1:788409533197:web:491e614b1fe16b708b6644',
  measurementId: 'G-50Z09ZYGFV',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const database = getDatabase(app)
