import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { routes } from "./routes.js";
import { createRouter, createWebHistory } from "vue-router";
import Vue3Geolocation from "vue3-geolocation";
//import { initializeApp } from "firebase/app";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const firebaseConfig = {
  apiKey: "AIzaSyDkEh9fMnYdY-UQxy-EjGxP32Ut_PONg2U",
  authDomain: "urgocabprojectregistration.firebaseapp.com",
  projectId: "urgocabprojectregistration",
  storageBucket: "urgocabprojectregistration.appspot.com",
  messagingSenderId: "560532399675",
  appId: "1:560532399675:web:9b189f62ae7f7e57505e1e",
};

//firebase.initializeApp(firebaseConfig);

app.use(router); // Agrega el router a la instancia de Vue
app.use(Vue3Geolocation);
app.mount("#app");
