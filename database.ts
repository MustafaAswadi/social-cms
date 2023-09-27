import * as firebase from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { firebaseConfig } from "./config";

export const database = firebase.initializeApp(firebaseConfig);

export const firestore = getFirestore(database);
