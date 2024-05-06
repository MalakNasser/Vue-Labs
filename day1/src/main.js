import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import AddBook from "./Components/Pages/AddBook.vue";
import BookDetails from "./Components/Pages/BookDetails.vue";
import HomeProps from "./Components/Props/HomeProps.vue";
import ErrorPage from "./Components/Pages/ErrorPage.vue";
import BooksPage from "./Components/Pages/BooksPage.vue";

const routes = [
  {
    path: "/",
    component: HomeProps,
  },
  {
    path: "/books",
    component: BooksPage,
  },
  {
    path: "/books/:id",
    component: BookDetails,
  },
  {
    path: "/add",
    component: AddBook,
  },
  {
    path: "/add/:id",
    component: AddBook,
  },
  {
    path: "/:NotFound(.*)*",
    component: ErrorPage,
  },
];

let router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
