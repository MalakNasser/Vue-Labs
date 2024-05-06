import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Store from "./Store.js";
import ComAllBooks from "./Components/CompositionAPI/ComAllBooks.vue";
import ComBookDetails from "./Components/CompositionAPI/ComBookDetails.vue";

const routes = [
  {
    path: "/",
    component: ComAllBooks,
  },
  {
    path: "/:id",
    component: ComBookDetails,
  },
];

let router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(Store).use(router).mount("#app");
