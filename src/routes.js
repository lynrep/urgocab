import HomeView from "./Views/HomeView.vue";
import DirectionsView from "./Views/DirectionsView.vue";
import MapView from "./Views/MapView.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
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
