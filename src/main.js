import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import PrimeVue from 'primevue/config';
import Breadcrumb from 'primevue/breadcrumb';
import Dropdown from 'primevue/dropdown';
import 'primevue/resources/themes/saga-blue/theme.css'      
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

const app = createApp(App);

app.use(router);
app.use(PrimeVue);
app.component('Breadcrumb', Breadcrumb);
app.component('Dropdown', Dropdown);
app.mount("#app");
