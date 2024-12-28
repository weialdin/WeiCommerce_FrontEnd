<!-- About 7 - Bootstrap Brain Component -->
<template>
  <WeiHeader />
  <section class="py-3 py-md-5 py-xl-8">
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
          <h2 class="mb-4 display-5 text-center">About Us</h2>
          <p class="text-secondary mb-4 text-center lead mb-4">
            Selamat datang di WeiCommerce, destinasi fashion terpercaya untuk
            memenuhi kebutuhan gaya Anda! Kami adalah toko online yang berfokus
            pada menyediakan beragam pilihan fashion berkualitas tinggi,
            termasuk gamis, hijab, pakaian wanita, dan aksesori lainnya. Kami
            percaya bahwa setiap wanita berhak tampil cantik, anggun, dan
            percaya diri. Oleh karena itu, koleksi kami dirancang dengan
            mengutamakan kenyamanan, tren terkini, dan nilai-nilai yang sesuai
            untuk segala kesempatan.
          </p>
          <hr class="w-100 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row gy-4 gy-lg-0 align-items-lg-center">
        <div class="col-12 col-lg-6">
          <img
            class="img-fluid rounded border border-dark"
            loading="lazy"
            src="/img/logo/office.jpg"
            alt="About Us"
          />
        </div>
        <div class="col-12 col-lg-6 col-xxl-6">
          <div class="row justify-content-lg-end">
            <div class="col-12 col-lg-11">
              <div class="about-wrapper">
                <p class="lead mb-4 mb-md-5">
                  Dengan menghadirkan kualitas terbaik, kami memastikan semua
                  produk dipilih secara cermat agar Anda mendapatkan yang
                  terbaik. Koleksi kami yang beragam, mulai dari gamis elegan
                  hingga hijab modern, dibuat untuk melengkapi setiap gaya Anda.
                  Selain itu, kami menawarkan harga terjangkau tanpa mengurangi
                  kualitas, sehingga Anda bisa menikmati fashion berkualitas
                  dengan lebih hemat. Pelayanan ramah dan kepuasan pelanggan
                  selalu menjadi prioritas utama kami. Mari berbelanja dengan
                  nyaman di WeiCommerce dan temukan keindahan dalam setiap
                  detail fashion kami!
                </p>
                <div class="row gy-4 mb-4 mb-md-5">
                  <div class="col-12 col-md-6">
                    <div class="card border border-dark">
                      <div class="card-body p-4">
                        <h3
                          class="display-5 fw-bold text-primary text-center mb-2"
                        >
                          370+
                        </h3>
                        <p class="fw-bold text-center m-0">Produk</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="card border border-dark">
                      <div class="card-body p-4">
                        <h3
                          class="display-5 fw-bold text-primary text-center mb-2"
                        >
                          18k+
                        </h3>
                        <p class="fw-bold text-center m-0">Penjualan Produk</p>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="https://wa.me/send?text=hallo&phone=+6281334700902"
                  class="btn btn-primary bsb-btn-2xl"
                >
                  Hubungi Kami
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-arrow-right-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                    />
                  </svg>
                </a>
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

export default {
  name: "AboutView",
  components: {
    WeiHeader,
    WeiFooter,
  },
};
</script>

<style scoped=""></style>
