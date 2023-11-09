import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDkEh9fMnYdY-UQxy-EjGxP32Ut_PONg2U",
  authDomain: "urgocabprojectregistration.firebaseapp.com",
  projectId: "urgocabprojectregistration",
  storageBucket: "urgocabprojectregistration.appspot.com",
  messagingSenderId: "560532399675",
  appId: "1:560532399675:web:9b189f62ae7f7e57505e1e",
};
//initialize Firebase
const app = initializeApp(firebaseConfig);
//get a reference to the database service
const db = getDatabase(app);
//setter method
export function updateData(itemsLogin) {
  set(ref(db, "items"), itemsLogin);
}
//getter method
export async function getData() {
  const dbRef = ref(db);
  try {
    const snapshot = await get(child(dbRef, "items/"));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No data available");
      return [];
    }
  } catch (error) {
    console.error(error);
  }
}
