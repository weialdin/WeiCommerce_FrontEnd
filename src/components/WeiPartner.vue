<template>
  <div class="partner-logo">
    <div class="container">
      <swiper
        :slidesPerView="1"
        :spaceBetween="10"
        :pagination="{
          clickable: true,
        }"
        :breakpoints="{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }"
        :modules="modules"
        class="mySwiper"
      >
        <!-- Slide untuk setiap logo -->
        <swiper-slide v-for="(logo, index) in logos" :key="index">
          <div class="logo-item">
            <div class="tablecell-inner">
              <img :src="logo.src" :alt="logo.alt" />
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

export default {
  name: "WeiPartner",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const logos = [
      { src: "img/logo-carousel/zara.png", alt: "Logo 1" },
      { src: "img/logo-carousel/hm.png", alt: "Logo 2" },
      { src: "img/logo-carousel/aero.png", alt: "Logo 3" },
      { src: "img/logo-carousel/erigo.png", alt: "Logo 4" },
      { src: "img/logo-carousel/logo-1.png", alt: "Logo 5" },
    ];
    return {
      modules: [Pagination],
      logos,
    };
  },
};
</script>

<style scoped>
.partner-logo {
  padding: 20px 0;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.logo-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}
.tablecell-inner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
img {
  max-width: 100%;
  max-height: 100%;
}
.mySwiper {
  padding: 10px 0;
}
</style>
