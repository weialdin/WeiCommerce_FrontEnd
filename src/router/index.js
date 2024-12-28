import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Product from "@/views/Product.vue";
import ShoppingCart from "@/views/ShoppingCart.vue";
import SuccessPaid from "@/views/SuccessPaid.vue";
import ProdukTerbaru from "@/views/ProdukTerbaru.vue";
import HijaProduct from "@/views/HijaProduct.vue";
import Storeku from "@/views/Storeku.vue";
import HijjaDetail from "@/views/HijjaDetail.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/product/:id",
    props: true,
    name: "product",
    component: Product,
  },
  {
    path: "/cart",
    name: "cart",
    component: ShoppingCart,
  },
  {
    path: "/success",
    name: "success",
    component: SuccessPaid,
  },
  {
    path: "/produk-terbaru",
    name: "produk-terbaru",
    component: ProdukTerbaru,
  },
  {
    path: "/hijja",
    name: "hijja",
    component: HijaProduct,
  },
  {
    path: "/storeku/:id",
    props: true,
    name: "storeku",
    component: Storeku,
  },
  {
    path: "/hijja-produk/:id",
    props: true,
    name: "hijja-produk",
    component: HijjaDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
