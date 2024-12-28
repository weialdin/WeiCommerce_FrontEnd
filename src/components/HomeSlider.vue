<template>
  <section class="hero-section">
    <div class="hero-items owl-carousel">
      <div
        class="single-hero-items set-bg"
        style="background-image: url('/img/heronew/herowhite.jpg')"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <span>Bag, kids</span>
              <h1>Black Friday</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
              <a href="#" class="primary-btn">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
      <div
        class="single-hero-items set-bg"
        style="background-image: url('/img/heronew/herowhite1.jpg')"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-5">
              <span>Bag, kids</span>
              <h1>Black Friday</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
              <a href="#" class="primary-btn">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Importing necessary libraries
import $ from "jquery";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel";

export default {
  name: "HomeSlider",

  mounted() {
    // Initialize Owl Carousel after component has been mounted
    $(this.$el)
      .find(".owl-carousel")
      .owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000, // Delay between slides
        items: 1, // Show 1 item per slide
        dots: true, // Show navigation dots
        nav: true, // Show next/prev navigation arrows
        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>',
        ],
        animateOut: "fadeOut", // Fade transition effect
      });
  },
};
</script>

<style scoped>
.hero-section {
  position: relative;
  padding: 0;
}

.single-hero-items {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
}

.primary-btn {
  background-color: #ff6f61;
  padding: 15px 30px;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 50px;
  font-weight: bold;
}

.primary-btn:hover {
  background-color: #e65c4e;
}

/* Optional: Styling for Owl Carousel navigation buttons */
.owl-nav {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
}

.owl-nav .owl-prev,
.owl-nav .owl-next {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  border-radius: 50%;
  font-size: 20px;
  z-index: 100;
}
</style>
