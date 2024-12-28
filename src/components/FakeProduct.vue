<template>
  <section class="women-banner spad">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>StoreApi</h2>
          </div>
        </div>
        <div class="col-lg-12 mt-5" v-if="products.length > 0">
          <div ref="productSlider" class="product-slider owl-carousel">
            <div
              class="product-item"
              v-for="product in products"
              :key="product.id"
            >
              <div class="pi-pic">
                <img :src="product.image || 'default-image.jpg'" alt="" />
                <ul>
                  <li class="w-icon active">
                    <a @click.prevent="saveCart(product)" href="#"
                      ><i class="icon_bag_alt"></i
                    ></a>
                  </li>
                  <li class="quick-view">
                    <router-link :to="'/storeku/' + product.id"
                      >+ Quick View</router-link
                    >
                  </li>
                </ul>
              </div>
              <div class="pi-text">
                <div class="category-name">{{ product.category }}</div>
                <router-link :to="'/storeku/' + product.id">
                  <h5>{{ product.title }}</h5>
                </router-link>
                <div class="product-price">${{ product.price }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tampilkan pesan jika tidak ada produk -->
        <div class="col-lg-12" v-else>
          <p>Produk belum tersedia, sabar ya</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from "jquery";
import axios from "axios";

export default {
  name: "FakeProduct",
  data() {
    return {
      products: [],
      cartUser: [],
    };
  },
  mounted() {
    // Mengambil data cart dari localStorage jika ada
    if (localStorage.getItem("cartUser")) {
      try {
        this.cartUser = JSON.parse(localStorage.getItem("cartUser"));
      } catch (e) {
        localStorage.removeItem("cartUser");
      }
    }
    // Mengambil produk dari API
    this.fetchProducts();
  },
  methods: {
    // Fungsi untuk mendapatkan data produk
    fetchProducts() {
      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
          this.products = res.data || [];
          // Inisialisasi carousel setelah data dimuat
          this.$nextTick(() => {
            $(this.$refs.productSlider).owlCarousel({
              loop: false,
              margin: 15,
              nav: true,
              responsive: {
                0: { items: 1 },
                600: { items: 2 },
                1000: { items: 4 },
              },
            });
          });
        })
        .catch((err) => console.error("Error fetching products:", err));
    },

    // Fungsi untuk menormalisasi data produk agar memiliki struktur yang sama
    normalizeProductData(product) {
      return {
        id: product.id || product.idProduct, // Menyesuaikan ID produk
        name: product.title || product.nameProduct, // Menyesuaikan nama produk
        price: product.price || product.priceProduct, // Menyesuaikan harga produk
        photo: product.image || product.photoProduct, // Menyesuaikan foto produk
      };
    },

    // Fungsi untuk menyimpan data ke keranjang
    saveCart(product) {
      // Menormalisasi data agar memiliki struktur yang sama
      const normalizedProduct = this.normalizeProductData(product);

      // Menyimpan produk yang sudah dinormalisasi ke dalam keranjang
      this.cartUser.push(normalizedProduct);

      // Menyimpan keranjang dalam localStorage
      localStorage.setItem("cartUser", JSON.stringify(this.cartUser));
    },
  },
};
</script>

<style scoped>
/* Styling untuk slider */
.product-slider {
  position: relative;
}

.product-slider .product-item {
  text-align: center;
  padding: 20px;
}

.product-slider .product-item .pi-pic {
  position: relative;
  width: 100%;
  height: 300px; /* Tentukan tinggi tetap untuk gambar */
  overflow: hidden;
}

.product-slider .product-item .pi-pic img {
  width: 100%; /* Lebar gambar mengikuti lebar kontainer */
  height: 100%; /* Tinggi gambar mengikuti tinggi kontainer */
  object-fit: contain; /* biar gambar tidak terpotong*/
  border-radius: 10px;
  transition: transform 0.3s ease;
}

/* Efek hover pada gambar */
.product-slider .product-item .pi-pic:hover img {
  transform: scale(1.05); /* Membesarkan gambar sedikit saat hover */
}

.product-slider .product-item .pi-text {
  margin-top: 10px;
}

.product-slider .product-item .category-name {
  font-size: 14px;
  color: #b5b5b5;
}

.product-slider .product-item h5 {
  font-size: 16px;
  font-weight: 600;
  margin: 10px 0;
}

.product-slider .product-item .product-price {
  font-size: 18px;
  font-weight: bold;
}

.product-slider .product-item .product-price span {
  text-decoration: line-through;
  color: #aaa;
}

.product-slider .owl-nav {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
}

.product-slider .owl-nav .owl-prev,
.product-slider .owl-nav .owl-next {
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border-radius: 50%;
  padding: 10px;
  z-index: 10;
  transition: background-color 0.3s ease;
}

/* Efek hover pada tombol navigasi */
.product-slider .owl-nav .owl-prev:hover,
.product-slider .owl-nav .owl-next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Menjaga tombol navigasi tetap terlihat pada layar mobile */
@media (max-width: 600px) {
  .product-slider .owl-nav {
    display: none;
  }
}

a {
  text-decoration: none;
}
</style>
