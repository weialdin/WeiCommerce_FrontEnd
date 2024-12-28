<template>
  <WeiHeader />
  <div class="breadcrumb-section" v-if="productDetails">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-left">
          <div class="breadcrumb-text product-more">
            <router-link to="/"><i class="fa fa-home"></i> Home</router-link>
            <span>{{ productDetails.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Breadcrumb Section End -->

  <!-- Product Shop Section Begin -->
  <section class="product-shop spad page-details">
    <div class="container">
      <div class="row" v-if="productDetails">
        <div class="col-lg-6">
          <div class="product-pic-zoom">
            <img
              class="product-big-img"
              :src="selectedImage || productDetails.galleries[0]?.photo"
              alt="Product Image"
            />
          </div>
          <div class="product-thumbs">
            <div
              class="product-thumbs-track owl-carousel owl-theme"
              ref="thumbsCarousel"
            >
              <div
                class="pt"
                :class="{ active: selectedImage === gallery.photo }"
                v-for="(gallery, index) in productDetails.galleries"
                :key="index"
                @click="updateSelectedImage(gallery.photo)"
              >
                <img :src="gallery.photo" :alt="'Thumbnail ' + index" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="product-details text-left">
            <div class="pd-title">
              <span>{{ productDetails.type }}</span>
              <h3>{{ productDetails.name }}</h3>
            </div>
            <div class="pd-desc">
              <p v-html="productDetails.description"></p>
              <h4>${{ productDetails.price }}</h4>
            </div>
            <div class="quantity">
              <!-- <router-link  -->
              <a
                @click="
                  saveCart(
                    productDetails.id,
                    productDetails.name,
                    productDetails.price,
                    productDetails.galleries[0].photo
                  )
                "
                href="#"
                class="primary-btn pd-cart"
                >Add To Cart</a
              >
              <!-- </router-link> -->
            </div>
          </div>
        </div>
      </div>
      <div class="row" v-else>
        <div class="col-lg-12">
          <p>Loading product details...</p>
        </div>
      </div>
    </div>
  </section>
  <!-- Product Shop Section End -->

  <GamisSlider />
  <WeiFooter />
</template>

<script>
import WeiFooter from "@/components/WeiFooter.vue";
import WeiHeader from "@/components/WeiHeader.vue";
import axios from "axios";
import $ from "jquery";
import "owl.carousel";
import GamisSlider from "@/components/GamisSlider.vue";

export default {
  name: "WeiProduct",
  components: {
    WeiHeader,
    GamisSlider,
    WeiFooter,
  },
  props: ["id"], // Mengambil ID produk dari URL via props
  data() {
    return {
      productDetails: null, // Menyimpan detail produk
      selectedImage: null, // Menyimpan gambar produk yang dipilih
      cartUser: [],
    };
  },
  methods: {
    // Fungsi untuk mengambil data produk berdasarkan ID
    fetchProductDetails() {
      const productId = this.id;
      axios
        .get(`http://127.0.0.1:8000/api/products`, {
          params: { id: productId },
        })
        .then((response) => {
          this.productDetails = response.data.data; // Menyimpan detail produk
          this.selectedImage = this.productDetails.galleries[0]?.photo || null;

          // Inisialisasi Owl Carousel setelah data produk dimuat
          this.initOwlCarousel();
        })
        .catch((error) => {
          console.error("Failed to fetch product details:", error);
        });
    },
    // Fungsi untuk mengupdate gambar produk yang dipilih
    updateSelectedImage(imageUrl) {
      this.selectedImage = imageUrl;
    },
    // Fungsi untuk inisialisasi OwlCarousel2
    initOwlCarousel() {
      this.$nextTick(() => {
        const $carousel = $(this.$refs.thumbsCarousel);
        $carousel.owlCarousel("destroy"); // Hancurkan instance sebelumnya jika ada
        $carousel.owlCarousel({
          loop: true,
          margin: 10,
          nav: true,
          items: 4,
        });
      });
    },
    saveCart(idProduct, nameProduct, priceProduct, photoProduct) {
      var productStored = {
        id: idProduct,
        name: nameProduct,
        price: priceProduct,
        photo: photoProduct,
      };

      this.cartUser.push(productStored);
      const parsed = JSON.stringify(this.cartUser);
      localStorage.setItem("cartUser", parsed);
    },
  },
  mounted() {
    if (localStorage.getItem("cartUser")) {
      try {
        this.cartUser = JSON.parse(localStorage.getItem("cartUser"));
      } catch (e) {
        localStorage.removeItem("cartUser");
      }
    }
    this.fetchProductDetails(); // Memanggil API saat komponen dimuat
  },
};
</script>

<style scoped>
.product-thumbs-track .pt {
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.product-thumbs-track .pt.active {
  opacity: 1;
}

.product-thumbs-track .pt:hover {
  opacity: 1;
}

.product-big-img {
  width: 50%;
  height: auto;
  max-width: 250px;
  margin: 0 auto;
  object-fit: contain;
}

.text-left {
  text-align: left;
}

a {
  text-decoration: none;
}
</style>
