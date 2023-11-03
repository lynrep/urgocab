import HomeView from "./Views/HomeView.vue";
import AboutView from "./Views/AboutView.vue";
import ContactView from "./Views/ContactView.vue";
import DirectionsView from "./Views/DirectionsView.vue";
import MapView from "./Views/MapView.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/directions",
    name: "directions",
    component: DirectionsView,
  },
  {
    path: "/map",
    name: "map",
    component: MapView,
  },
];
