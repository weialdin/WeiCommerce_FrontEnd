<template>
  <WeiHeader />

  <!-- Breadcrumb Section -->
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
        <!-- Kolom kiri: Foto utama & Thumbs -->
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

        <!-- Kolom kanan: Detail produk -->
        <div class="col-lg-6">
          <div class="product-details text-left">
            <div class="pd-title">
              <span>{{ productDetails.type }}</span>
              <h3>{{ productDetails.name }}</h3>
            </div>
            <div class="pd-desc">
              <!-- v-html agar HTML di description bisa dirender -->
              <p v-html="productDetails.description"></p>
              <h4>Rp. {{ productDetails.price }}</h4>
            </div>
            <div class="quantity">
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
              >
                Add To Cart
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Jika data belum siap / loading -->
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
import "owl.carousel"; // Pastikan sudah install owl.carousel
import GamisSlider from "@/components/GamisSlider.vue";

export default {
  name: "WeiProduct",
  components: {
    WeiHeader,
    GamisSlider,
    WeiFooter,
  },
  props: ["id"], // ID produk yang akan diambil
  data() {
    return {
      productDetails: null, // Data detail produk
      selectedImage: null, // Gambar produk yang sedang dipilih
      cartUser: [],
    };
  },
  methods: {
    // Fungsi untuk mengambil detail produk dari API
    fetchProductDetails() {
      const productId = this.id;
      axios
        .get("https://sistemtoko.com/public/demo/product", {
          params: { id: productId },
        })
        .then((response) => {
          /**
           * Karena struktur data dari API:
           * {
           *   "aaData": [ { ...satu produk... }, ... ]
           * }
           *
           * Kita ambil item pertama dari aaData (atau sesuai index).
           * Lalu kita transform data agar kompatibel dengan template lama.
           */
          const data = response.data.aaData[0];

          // Transformasi minimal agar sesuai dengan pemakaian template.
          this.productDetails = {
            id: data.id,
            name: data.name,
            type: data.type, // 'parent' atau 'child'
            description: data.description || "", // jika kosong
            price: data.price, // ex: "70.000"
            // Di template, kita gunakan productDetails.galleries
            // Sementara API kita berikan "photos" = array of string
            // Kita bungkus agar jadi array of object { photo: '...' }
            galleries: data.photos.map((p) => ({ photo: p })),
          };

          // Set gambar pertama sebagai default
          this.selectedImage = this.productDetails.galleries[0]?.photo || null;

          // Inisialisasi carousel setelah data sudah siap
          this.initOwlCarousel();
        })
        .catch((error) => {
          console.error("Failed to fetch product details:", error);
        });
    },
    // Fungsi untuk memperbarui gambar yang sedang ditampilkan
    updateSelectedImage(imageUrl) {
      this.selectedImage = imageUrl;
    },
    // Inisialisasi Owl Carousel
    initOwlCarousel() {
      this.$nextTick(() => {
        const $carousel = $(this.$refs.thumbsCarousel);
        // Hancurkan instance carousel sebelumnya jika ada
        $carousel.owlCarousel("destroy");
        $carousel.owlCarousel({
          loop: true,
          margin: 10,
          nav: true,
          items: 4,
        });
      });
    },
    // Simpan ke cart / localStorage
    saveCart(idProduct, nameProduct, priceProduct, photoProduct) {
      const productStored = {
        id: idProduct,
        name: nameProduct,
        price: priceProduct,
        photo: photoProduct,
      };
      this.cartUser.push(productStored);

      // Simpan ke localStorage
      localStorage.setItem("cartUser", JSON.stringify(this.cartUser));
    },
  },
  mounted() {
    // Jika sebelumnya pernah simpan cart, ambil dari localStorage
    if (localStorage.getItem("cartUser")) {
      try {
        this.cartUser = JSON.parse(localStorage.getItem("cartUser"));
      } catch (e) {
        localStorage.removeItem("cartUser");
      }
    }
    // Panggil API untuk fetch data produk
    this.fetchProductDetails();
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
