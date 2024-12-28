<template>
  <WeiHeader />
  <div class="breacrumb-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-left">
          <div class="breadcrumb-text product-more">
            <router-link to="/"><i class="fa fa-home"></i> Home</router-link>
            <span>Shopping Cart</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Breadcrumb Section Begin -->

  <!-- Shopping Cart Section Begin -->
  <section class="shopping-cart spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="row">
            <div class="col-lg-12">
              <div
                class="cart-table table-responsive border rounded bg-light p-4"
              >
                <table class="table table-striped">
                  <thead class="thead-dark">
                    <tr>
                      <th>Image</th>
                      <th class="p-name text-center">Product Name</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="cart in cartUser" :key="cart.id">
                      <td class="cart-pic">
                        <img
                          class="img-cart img-thumbnail"
                          :src="cart.photo"
                          alt="Product Image"
                        />
                      </td>
                      <td class="cart-title text-center">
                        <h5 class="cart-name mb-0">{{ cart.name }}</h5>
                      </td>
                      <td class="p-price">${{ cart.price }}</td>
                      <td
                        @click="removeItem(cartUser.index)"
                        class="text-danger cursor-pointer"
                      >
                        <i class="ti-close"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-lg-8 text-left mt-4">
              <h4 class="mb-4">Informasi Pembeli:</h4>
              <div class="user-checkout p-4 border rounded bg-dark text-white">
                <form>
                  <div class="form-group mb-3">
                    <label for="namaLengkap" class="form-label"
                      >Nama Lengkap</label
                    >
                    <input
                      type="text"
                      class="form-control shadow-sm bg-secondary text-white"
                      id="namaLengkap"
                      aria-describedby="namaHelp"
                      placeholder="Masukan Nama"
                      v-model="customerInfo.name"
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label for="emailAddress" class="form-label"
                      >Email Address</label
                    >
                    <input
                      type="email"
                      class="form-control shadow-sm bg-secondary text-white"
                      id="emailAddress"
                      aria-describedby="emailHelp"
                      placeholder="Masukan Email"
                      v-model="customerInfo.email"
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label for="noHP" class="form-label">No. HP</label>
                    <input
                      type="text"
                      class="form-control shadow-sm bg-secondary text-white"
                      id="noHP"
                      aria-describedby="noHpHelp"
                      placeholder="Masukan No. HP"
                      v-model="customerInfo.number"
                    />
                  </div>
                  <div class="form-group mb-3">
                    <label for="alamatLengkap" class="form-label"
                      >Alamat Lengkap</label
                    >
                    <textarea
                      class="form-control shadow-sm bg-secondary text-white"
                      id="alamatLengkap"
                      rows="3"
                      placeholder="Masukan Alamat Lengkap"
                      v-model="customerInfo.address"
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="row">
            <div class="col-lg-12">
              <div class="proceed-checkout text-left">
                <ul>
                  <li class="subtotal">
                    ID Transaction
                    <span>#SH12000</span>
                  </li>
                  <li class="subtotal mt-3">
                    Subtotal
                    <span>${{ totalPrice.toFixed(2) }}</span>
                  </li>
                  <li class="subtotal mt-3">
                    Pajak 12%
                    <span>${{ tax.toFixed(2) }}</span>
                  </li>
                  <li class="subtotal mt-3">
                    Total Biaya
                    <span>${{ totalAmount.toFixed(2) }}</span>
                  </li>
                  <li class="subtotal mt-3">
                    Bank Transfer
                    <span>Mandiri</span>
                  </li>
                  <li class="subtotal mt-3">
                    No. Rekening
                    <span>2208 1996 1403</span>
                  </li>
                  <li class="subtotal mt-3">
                    Nama Penerima
                    <span>Ahmad Aminudin</span>
                  </li>
                </ul>
                <!-- <router-link to="/success"> -->
                <a @click="checkout()" href="#" class="proceed-btn"
                  >I ALREADY PAID</a
                >
                <!-- </router-link> -->
              </div>
            </div>
          </div>
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
  name: "ShoppingCart",
  components: {
    WeiHeader,
    WeiFooter,
  },
  data() {
    return {
      cartUser: [],
      customerInfo: {
        name: "",
        email: "",
        number: "",
        address: "",
      },
    };
  },
  methods: {
    removeItem(index) {
      this.cartUser.splice(index, 1);
      const parsed = JSON.stringify(this.cartUser);
      localStorage.setItem("cartUser", parsed);
    },
    checkout() {
      let productIds = this.cartUser.map(function (product) {
        return product.id;
      });

      let checkoutData = {
        name: this.customerInfo.name,
        email: this.customerInfo.email,
        number: this.customerInfo.number,
        address: this.customerInfo.address,
        transaction_total: this.totalAmount,
        transaction_status: "PENDING",
        transaction_details: productIds,
      };

      axios
        .post("http://127.0.0.1:8000/api/checkout", checkoutData)
        .then(() => this.$router.push("success"))
        .catch((err) => console.log(err));
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
    tax() {
      return (this.totalPrice * 12) / 100;
    },
    totalAmount() {
      return this.totalPrice + this.tax;
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.text-left {
  text-align: left;
}

.img-cart {
  width: 100px;
  height: 100px;
}

.cart-name {
  text-align: left;
  size: 10px;
}
</style>
