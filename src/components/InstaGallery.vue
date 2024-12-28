<template>
  <div class="instagram-photo owl-carousel">
    <div
      class="insta-item set-bg"
      style="background-image: url('/img/px1.jpg')"
    >
      <div class="inside-text">
        <i class="ti-instagram"></i>
        <h5><a href="#">weicommerce_gallery</a></h5>
      </div>
    </div>
    <div
      class="insta-item set-bg"
      style="background-image: url('/img/px2.jpg')"
    >
      <div class="inside-text">
        <i class="ti-instagram"></i>
        <h5><a href="#">weicommerce_gallery</a></h5>
      </div>
    </div>
    <div
      class="insta-item set-bg"
      style="background-image: url('/img/px3.jpg')"
    >
      <div class="inside-text">
        <i class="ti-instagram"></i>
        <h5><a href="#">weicommerce_gallery</a></h5>
      </div>
    </div>
    <div
      class="insta-item set-bg"
      style="background-image: url('/img/px4.jpg')"
    >
      <div class="inside-text">
        <i class="ti-instagram"></i>
        <h5><a href="#">weicommerce_gallery</a></h5>
      </div>
    </div>
    <div
      class="insta-item set-bg"
      style="background-image: url('/img/px5.jpg')"
    >
      <div class="inside-text">
        <i class="ti-instagram"></i>
        <h5><a href="#">weicommerce_gallery</a></h5>
      </div>
    </div>
    <div
      class="insta-item set-bg"
      style="background-image: url('/img/insta-6.jpg')"
    >
      <div class="inside-text">
        <i class="ti-instagram"></i>
        <h5><a href="#">weicommerce_gallery</a></h5>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import "owl.carousel";

export default {
  name: "InstaGallery",
  mounted() {
    // Initialize Owl Carousel when the component is mounted
    $(".instagram-photo").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });
  },
};
</script>

<style scoped>
/* Style your gallery here */
.instagram-photo {
  position: relative;
}

.insta-item {
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 300px;
}

.insta-item .inside-text {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
}

.insta-item .inside-text i {
  font-size: 24px;
  margin-right: 10px;
}

.insta-item .inside-text h5 a {
  color: white;
  font-size: 18px;
}
</style>
