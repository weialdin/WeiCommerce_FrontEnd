<template>
  <WeiHeader />
  <section class="women-banner spad">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <h3>== Produk Hijja ==</h3>
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
                  v-if="itemProduct.photos && itemProduct.photos.length > 0"
                  :src="itemProduct.photos[0]"
                  alt="Gambar Produk"
                />
                <!-- Jika tidak ada gambar utama, gunakan gambar default atau gambar dari parent -->
                <img
                  v-else-if="
                    itemProduct.childs &&
                    itemProduct.childs.length > 0 &&
                    itemProduct.childs[0].photo
                  "
                  :src="itemProduct.childs[0].photo"
                  alt="Gambar Produk dari Parent"
                />
                <img v-else src="/img/hija.png" alt="Default Image" />
                <ul>
                  <li class="w-icon active">
                    <a
                      @click.prevent="
                        saveCart(
                          itemProduct.id,
                          itemProduct.name,
                          itemProduct.price,
                          itemProduct.photo || 'default-image.jpg'
                        )
                      "
                      href="#"
                    >
                      <i class="icon_bag_alt"></i>
                    </a>
                  </li>
                  <li class="quick-view">
                    <router-link :to="'/hijja-produk/' + itemProduct.id">
                      + Quick View
                    </router-link>
                  </li>
                </ul>
              </div>
              <div class="pi-text">
                <div class="category-name">{{ itemProduct.type }}</div>
                <router-link :to="'/hijja-produk/' + itemProduct.id">
                  <h5>{{ itemProduct.name }}</h5>
                </router-link>
                <div class="product-price">
                  ${{ itemProduct.price }}
                  <span>$250</span>
                </div>
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
  <WeiFooter />
</template>

<script>
import axios from "axios";
import WeiHeader from "@/components/WeiHeader.vue";
import WeiFooter from "@/components/WeiFooter.vue";

export default {
  name: "ProductSlider",
  components: {
    WeiHeader,
    WeiFooter,
  },
  data() {
    return {
      products: [], // Menyimpan data produk dari API
      cartUser: [],
    };
  },
  mounted() {
    // Ambil data keranjang pengguna dari localStorage jika ada
    if (localStorage.getItem("cartUser")) {
      try {
        this.cartUser = JSON.parse(localStorage.getItem("cartUser"));
      } catch (e) {
        localStorage.removeItem("cartUser");
      }
    }
    this.fetchProducts();
  },
  methods: {
    // Fungsi untuk mendapatkan data produk dari API
    fetchProducts() {
      axios
        .get("https://sistemtoko.com/public/demo/product")
        .then((res) => {
          this.products = res.data.aaData || [];
        })
        .catch((err) => console.error("Error fetching products:", err));
    },
    // Fungsi untuk menyimpan produk ke keranjang
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
  },
};
</script>

<style scoped>
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
