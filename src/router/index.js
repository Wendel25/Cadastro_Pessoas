import { createRouter, createWebHistory } from "vue-router";
import RegisterNewPerson from "../view/RegisterNewPerson.vue";
import Table from "../view/Table.vue";

const routes = [
  {
    path: "/",
    name: "table",
    component: Table,
  },
  {
    path: "/new-register",
    name: "new-register",
    component: RegisterNewPerson,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
