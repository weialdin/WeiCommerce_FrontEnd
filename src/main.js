import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "owl.carousel/dist/owl.carousel.js";
import "swiper/css/bundle";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";

createApp(App).use(router).mount("#app");
