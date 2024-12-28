<template>
  <header class="header-section">
    <div class="header-top">
      <div class="container">
        <div class="ht-left">
          <span class="mail-service">
            <i class="fas fa-envelope"></i> hai@weicommerce.com
          </span>
          <span class="phone-service">
            <i class="fas fa-phone"></i> +6281 33470 0902
          </span>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="inner-header">
        <!-- Logo Section -->
        <div class="logo">
          <router-link to="/">
            <img src="/img/logo/weiblack.png" alt="Logo" />
          </router-link>
        </div>

        <nav class="nav-menu">
          <ul>
            <li>
              <router-link to="/">
                <i class="fas fa-home"></i> Home
              </router-link>
            </li>
            <li>
              <router-link to="/about">
                <i class="fas fa-info-circle"></i> About
              </router-link>
            </li>
            <li>
              <router-link to="/produk-terbaru">
                <i class="fas fa-box-open"></i> All Product
              </router-link>
            </li>
            <li>
              <router-link to="/hijja">
                <i class="fa-solid fa-dumpster-fire"></i> Hijja
              </router-link>
            </li>
          </ul>
        </nav>

        <!-- Cart Icon Section -->
        <div class="nav-right">
          <div class="cart-icon">
            <a href="#" class="cart-link">
              <i class="icon_bag_alt"></i>
              <span class="cart-count">{{ cartUser.length }}</span>
            </a>
            <div class="cart-hover">
              <div class="select-items">
                <table>
                  <tbody v-if="cartUser.length > 0">
                    <tr v-for="cart in cartUser" :key="cart.id">
                      <td class="si-pic">
                        <img
                          class="photo-item"
                          :src="cart.photo"
                          alt="Product 1"
                        />
                      </td>
                      <td class="si-text">
                        <div class="product-selected">
                          <p>${{ cart.price }}</p>
                          <h6>{{ cart.name }}</h6>
                        </div>
                      </td>
                      <td @click="removeItem(cartUser.index)" class="si-close">
                        <i class="ti-close"></i>
                      </td>
                    </tr>
                  </tbody>
                  <tbody v-else>
                    <tr>
                      <td>Keranjang Kosong</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="select-total">
                <span>Total:</span>
                <h5>${{ totalPrice.toFixed(2) }}</h5>
              </div>
              <div class="select-button">
                <router-link to="/cart" class="primary-btn view-card"
                  >VIEW CART</router-link
                >
                <router-link to="/cart" class="primary-btn view-card"
                  >CHECKOUT</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "WeiHeader",
  data() {
    return {
      cartUser: [],
    };
  },
  methods: {
    removeItem(index) {
      this.cartUser.splice(index, 1);
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
  },
  computed: {
    totalPrice() {
      return this.cartUser.reduce(
        (items, data) => items + parseFloat(data.price || 0),
        0
      );
    },
  },
};
</script>

<style scoped>
.header-section {
  background-color: #fff;
}

.header-top {
  background-color: #fff;
  color: #000;
  padding: 8px 0;
  font-size: 14px;
}

.ht-left .mail-service,
.ht-left .phone-service {
  margin-right: 20px;
  display: inline-block;
  color: #000;
}

.ht-left i {
  margin-right: 8px;
}

/* Inner Header */
.inner-header {
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Logo Section */
.inner-header .logo img {
  max-height: 50px;
}

/* Navigation Menu */
.nav-menu {
  flex-grow: 1;
  text-align: center;
}

.nav-menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 30px;
}

.nav-menu li {
  font-size: 16px;
}

.nav-menu a {
  text-decoration: none;
  color: #333;
  transition: color 0.3s ease;
}

.nav-menu a:hover {
  color: #e74c3c;
}

/* Navigation Right Section */
.nav-right {
  display: flex;
  align-items: center;
}

/* Cart Icon and Link */
.cart-icon {
  position: relative;
}

.cart-link {
  display: flex;
  align-items: center;
  color: #333;
  font-size: 18px;
  text-decoration: none;
  transition: color 0.3s ease;
}

.cart-link:hover {
  color: #e74c3c;
}

.cart-count {
  background-color: #e74c3c;
  color: white;
  border-radius: 50%;
  padding: 3px 10px;
  font-size: 14px;
  margin-left: 8px;
}

/* Cart Hover Styling */
.cart-hover {
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  border-radius: 12px;
  border: 1px solid #ddd;
  width: 360px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  z-index: 100;
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 0.4s ease, transform 0.4s ease;
  padding: 15px;
  font-family: "Arial", sans-serif;
}

/* Show Cart on Hover */
.cart-icon:hover .cart-hover {
  display: block;
  opacity: 1;
  transform: translateY(0);
}

/* Cart Item List */
.select-items table {
  width: 100%;
  padding: 0;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.select-items .si-pic img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.select-items .si-pic img:hover {
  transform: scale(1.1);
}

.select-items .si-text {
  padding-left: 15px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.select-items .si-text h6 {
  font-size: 14px;
  color: #333;
  font-weight: 600;
  margin: 0;
}

.select-items .si-text p {
  font-size: 13px;
  color: #777;
  margin: 5px 0;
}

.select-items .si-close {
  cursor: pointer;
  font-size: 18px;
  color: #333;
  transition: color 0.3s ease;
}

.select-items .si-close:hover {
  color: #e74c3c;
}

/* Total and Button Styling */
.select-total {
  padding: 15px 0;
  border-top: 1px solid #ddd;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #333;
}

.select-total h5 {
  font-size: 16px;
  font-weight: 600;
}

.select-button {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.select-button a {
  display: inline-block;
  padding: 12px 20px;
  background-color: #3498db;
  color: white;
  text-align: center;
  border-radius: 30px;
  font-size: 14px;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
}

.select-button a:hover {
  background-color: #2980b9;
}

.select-button a:focus {
  outline: none;
}

/* Responsive Layout for Cart Hover */
@media (max-width: 768px) {
  .cart-hover {
    width: 280px;
    padding: 12px;
  }

  .select-items .si-text {
    padding-left: 10px;
  }

  .select-button a {
    font-size: 12px;
    padding: 10px 15px;
  }
}

a {
  text-decoration: none;
}

.photo-item {
  width: 80px;
  height: 80px;
}
</style>
