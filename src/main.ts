import { createApp } from "vue";
import "./styles.css";
import App from "./App.vue";
// import router from "./router";
import vuetify from "./plugins/vuetify";

const app = createApp(App);

// app.use(router)
app.use(vuetify).mount("#app");

// createApp(App).mount("#app");