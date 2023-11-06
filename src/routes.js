import HomeView from "./Views/HomeView.vue";
import AboutView from "./Views/AboutView.vue";
import ContactView from "./Views/ContactView.vue";
import DirectionsView from "./Views/DirectionsView.vue";
import MapView from "./Views/MapView.vue";
import WeatherView from "./Views/WeatherView.vue";
import RegisterView from "./Views/RegisterView.vue";
import LogInView from "./Views/LogInView.vue";
import FoodView from "./Views/FoodView.vue";

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
  {
    path: "/weather",
    name: "weather",
    component: WeatherView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/login",
    name: "login",
    component: LogInView,
  },
  {
    path: "/food",
    name: "food",
    component: FoodView,
  },
];
