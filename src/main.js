import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { routes } from "./routes.js";
import { createRouter, createWebHistory } from "vue-router";
import Vue3Geolocation from "vue3-geolocation";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router); // Agrega el router a la instancia de Vue
app.use(Vue3Geolocation);
app.mount("#app");
