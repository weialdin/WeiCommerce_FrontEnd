<template>
  <WeiHeader />
  <section class="women-banner spad">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-search">
            <!-- Input Pencarian -->
            <div class="search-input-wrapper">
              <input
                v-model="searchQuery"
                @input="searchProducts"
                type="text"
                placeholder="Cari produk..."
                class="search-input"
              />
              <i class="fas fa-search search-icon"></i>
            </div>
          </div>
        </div>

        <!-- Tampilkan produk jika ada -->
        <div class="col-lg-12 mt-5" v-if="products.length > 0">
          <!-- Grid Layout -->
          <div class="product-grid">
            <div
              class="product-item"
              v-for="itemProduct in products"
              :key="itemProduct.id"
            >
              <div class="pi-pic">
                <img
                  v-if="
                    itemProduct.galleries && itemProduct.galleries.length > 0
                  "
                  :src="itemProduct.galleries[0].photo"
                  alt="Gambar Produk"
                />
                <img v-else src="default-image.jpg" alt="Default Image" />
                <ul>
                  <li class="w-icon active">
                    <a
                      @click.prevent="
                        saveCart(
                          itemProduct.id,
                          itemProduct.name,
                          itemProduct.price,
                          itemProduct.galleries[0]?.photo || 'default-image.jpg'
                        )
                      "
                      href="#"
                    >
                      <i class="icon_bag_alt"></i>
                    </a>
                  </li>
                  <li class="quick-view">
                    <router-link :to="'/product/' + itemProduct.id">
                      + Quick View
                    </router-link>
                  </li>
                </ul>
              </div>
              <div class="pi-text">
                <div class="category-name">{{ itemProduct.type }}</div>
                <router-link :to="'/product/' + itemProduct.id">
                  <h5>{{ itemProduct.name }}</h5>
                </router-link>
                <div class="product-price">
                  ${{ itemProduct.price }}
                  <span>$250</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <div class="pagination">
            <button
              :disabled="currentPage === 1"
              @click="fetchProducts(currentPage - 1)"
            >
              Prev
            </button>
            <button
              v-for="page in totalPages"
              :key="page"
              :class="{ active: page === currentPage }"
              @click="fetchProducts(page)"
            >
              {{ page }}
            </button>
            <button
              :disabled="currentPage === totalPages"
              @click="fetchProducts(currentPage + 1)"
            >
              Next
            </button>
          </div>
        </div>

        <!-- Tampilkan pesan jika tidak ada produk -->
        <div class="col-lg-12" v-else>
          <p>Maaf produk belum tersedia</p>
        </div>
      </div>
    </div>
  </section>
  <WeiFooter />
</template>

<script>
import WeiFooter from "@/components/WeiFooter.vue";
import WeiHeader from "@/components/WeiHeader.vue";
import axios from "axios";

export default {
  name: "ProductGrid",
  components: {
    WeiHeader,
    WeiFooter,
  },
  data() {
    return {
      products: [],
      cartUser: [],
      currentPage: 1,
      totalPages: 1,
      searchQuery: "",
    };
  },
  mounted() {
    // Ambil data keranjang dari localStorage jika ada
    if (localStorage.getItem("cartUser")) {
      try {
        this.cartUser = JSON.parse(localStorage.getItem("cartUser"));
      } catch (e) {
        localStorage.removeItem("cartUser");
      }
    }
    // Ambil data produk pada halaman awal
    this.fetchProducts(this.currentPage);
  },
  methods: {
    // Metode untuk mengambil data produk berdasarkan halaman
    fetchProducts(page = 1) {
      let url = `http://127.0.0.1:8000/api/products?page=${page}`;
      if (this.searchQuery) {
        url += `&name=${this.searchQuery}`; // Menambahkan query pencarian ke URL
      }

      axios
        .get(url)
        .then((res) => {
          this.products = res.data.data.data || [];
          this.currentPage = res.data.data.current_page || 1;
          this.totalPages = res.data.data.last_page || 1;
        })
        .catch((err) => console.error("Error fetching products:", err));
    },
    // Menyimpan produk ke keranjang
    saveCart(idProduct, nameProduct, priceProduct, photoProduct) {
      const productStored = {
        id: idProduct,
        name: nameProduct,
        price: priceProduct,
        photo: photoProduct,
      };

      this.cartUser.push(productStored);
      const parsed = JSON.stringify(this.cartUser);
      localStorage.setItem("cartUser", parsed);
    },
    // Fungsi untuk menangani input pencarian
    searchProducts() {
      this.fetchProducts(this.currentPage); // Menyegarkan produk sesuai dengan query pencarian
    },
  },
};
</script>

<style scoped>
/* Styling untuk search input */
.section-search {
  display: flex;
  justify-content: flex-end; /* Rata kanan */
}

.search-input-wrapper {
  position: relative;
  max-width: 300px;
  padding: 10px;
}

.search-input {
  width: 100%;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 25px;
  border: 1px solid #ddd;
  outline: none;
}

.search-icon {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  font-size: 20px;
  cursor: pointer;
}

a {
  text-decoration: none;
}

/* Grid produk tetap */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  padding: 0 15px;
}

.product-item {
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.pi-pic {
  position: relative;
  width: 100%;
  height: 350px;
  overflow: hidden;
  border-radius: 10px;
}

.pi-pic img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.pi-pic:hover img {
  transform: scale(1.05);
}

.pi-text {
  margin-top: 15px;
}

.category-name {
  font-size: 14px;
  color: #b5b5b5;
  margin-bottom: 5px;
}

.product-item h5 {
  font-size: 16px;
  font-weight: 600;
  margin: 10px 0;
  color: #333;
}

.product-price {
  font-size: 18px;
  font-weight: bold;
  color: #ff4500;
}

.product-price span {
  text-decoration: line-through;
  color: #aaa;
}

/* Tombol interaksi */
.w-icon {
  margin-top: 10px;
}

.quick-view {
  display: inline-block;
  margin-top: 10px;
  font-size: 14px;
  color: #ff4500;
  cursor: pointer;
  font-weight: 600;
}

.quick-view:hover {
  color: #333;
}

/* Styling Pagination */
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
}

.pagination button {
  padding: 10px 15px;
  border: 1px solid #ddd;
  background-color: #fff;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.pagination button.active {
  background-color: #ff4500;
  color: #fff;
  border-color: #ff4500;
}

.pagination button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.pagination button:hover:not(:disabled) {
  background-color: #f0f0f0;
}

/* Responsif */
@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .product-item {
    padding: 15px;
  }

  .pi-pic {
    height: 200px;
  }

  .product-price {
    font-size: 16px;
  }
}
</style>
