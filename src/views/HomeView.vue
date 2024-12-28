<template>
  <div class="home">
    <WeiHeader />
    <HomeSlider />
    <ProductSlider />
    <HMSlider />
    <FakeProduct />
    <InstaGallery />
    <WeiPartner />
    <WeiFooter />
  </div>
</template>

<script>
// Importing WeiHeader component
import HomeSlider from "@/components/HomeSlider.vue";
import InstaGallery from "@/components/InstaGallery.vue";
import ProductSlider from "@/components/ProductSlider.vue";
import WeiHeader from "@/components/WeiHeader.vue";
import WeiPartner from "@/components/WeiPartner.vue";
import WeiFooter from "@/components/WeiFooter.vue";
import HMSlider from "@/components/HMSlider.vue";
import FakeProduct from "@/components/FakeProduct.vue";

export default {
  name: "HomeView",
  components: {
    WeiHeader,
    HomeSlider,
    ProductSlider,
    InstaGallery,
    WeiPartner,
    WeiFooter,
    HMSlider,
    FakeProduct,
  },
};
</script>
