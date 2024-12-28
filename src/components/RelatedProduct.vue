<template>
  <div class="related-products spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>Related Products</h2>
          </div>
        </div>
      </div>
      <div class="owl-carousel owl-theme">
        <div class="item">
          <div class="product-item">
            <div class="pi-pic">
              <img src="/img/products/women-1.jpg" alt="" />
              <ul>
                <li class="w-icon active">
                  <a href="#"><i class="icon_bag_alt"></i></a>
                </li>
                <li class="quick-view"><a href="#">+ Quick View</a></li>
              </ul>
            </div>
            <div class="pi-text">
              <div class="catagory-name">Coat</div>
              <a href="#">
                <h5>Pure Pineapple</h5>
              </a>
              <div class="product-price">
                $14.00
                <span>$35.00</span>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="product-item">
            <div class="pi-pic">
              <img src="/img/products/women-2.jpg" alt="" />
              <ul>
                <li class="w-icon active">
                  <a href="#"><i class="icon_bag_alt"></i></a>
                </li>
                <li class="quick-view"><a href="#">+ Quick View</a></li>
              </ul>
            </div>
            <div class="pi-text">
              <div class="catagory-name">Shoes</div>
              <a href="#">
                <h5>Guangzhou sweater</h5>
              </a>
              <div class="product-price">$13.00</div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="product-item">
            <div class="pi-pic">
              <img src="/img/products/women-3.jpg" alt="" />
              <ul>
                <li class="w-icon active">
                  <a href="#"><i class="icon_bag_alt"></i></a>
                </li>
                <li class="quick-view"><a href="#">+ Quick View</a></li>
              </ul>
            </div>
            <div class="pi-text">
              <div class="catagory-name">Towel</div>
              <a href="#">
                <h5>Pure Pineapple</h5>
              </a>
              <div class="product-price">$34.00</div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="product-item">
            <div class="pi-pic">
              <img src="/img/products/women-4.jpg" alt="" />
              <ul>
                <li class="w-icon active">
                  <a href="#"><i class="icon_bag_alt"></i></a>
                </li>
                <li class="quick-view"><a href="#">+ Quick View</a></li>
              </ul>
            </div>
            <div class="pi-text">
              <div class="catagory-name">Towel</div>
              <a href="#">
                <h5>Converse Shoes</h5>
              </a>
              <div class="product-price">$34.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Pastikan Owl Carousel 2 sudah diimport
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import $ from "jquery";
import "owl.carousel";

export default {
  name: "RelatedProduct",
  mounted() {
    // Initialize Owl Carousel setelah komponen terpasang
    $(".owl-carousel").owlCarousel({
      loop: true, // Mengulangi carousel
      margin: 10, // Margin antar item
      nav: true, // Tombol navigasi (prev/next)
      responsive: {
        0: {
          items: 1, // Menampilkan 1 item di perangkat mobile
        },
        600: {
          items: 2, // Menampilkan 2 item di perangkat dengan lebar 600px+
        },
        1000: {
          items: 4, // Menampilkan 4 item di perangkat dengan lebar 1000px+
        },
      },
    });
  },
};
</script>

<style scoped>
/* Menambahkan gaya khusus untuk owl-carousel */
.owl-carousel .item {
  margin: 0 10px;
}
a {
  text-decoration: none;
}
</style>
