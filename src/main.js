import { createApp } from "vue";
import App from "./App.vue";
import router from './router'; 

import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';

import Button from "primevue/button";
import Toolbar from 'primevue/toolbar';
import Image from 'primevue/image';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Toast from 'primevue/toast';

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
}).use(router);

app.component("Button", Button);
app.component("Toolbar", Toolbar);
app.component("Image", Image);
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("Card", Card);
app.component("InputText", InputText);

app.mount("#app");
