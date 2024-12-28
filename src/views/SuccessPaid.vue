<template>
  <div class="success-page-container">
    <div class="success-content text-center">
      <img src="/img/success-buy.png" alt="Success" class="success-image" />
      <h3 class="success-title">Sukses Terbayar!</h3>
      <p class="success-description">
        Silakan tunggu update terbaru dari kami via email yang sudah Anda
        daftarkan sebelumnya.
      </p>
      <router-link to="/" class="btn-back-to-home">Back to Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuccessPaid",
};
</script>

<style scoped>
/* Background dan layout */
.success-page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f0f4f8, #e9eff5);
}

.success-content {
  background-color: #fff;
  border-radius: 12px;
  padding: 40px 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px;
  width: 100%;
  animation: fadeIn 1s ease-in-out;
}

/* Gambar */
.success-image {
  width: 150px;
  margin-bottom: 20px;
  animation: bounceIn 1.5s ease-in-out;
}

/* Judul */
.success-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #4caf50;
  margin-top: 20px;
  margin-bottom: 15px;
  animation: fadeInUp 1s ease-in-out;
}

/* Deskripsi */
.success-description {
  font-size: 1rem;
  color: #555;
  margin-bottom: 25px;
  animation: fadeInUp 1.5s ease-in-out;
}

/* Tombol */
.btn-back-to-home {
  display: inline-block;
  padding: 12px 24px;
  background-color: #4caf50;
  color: #fff;
  border-radius: 30px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.btn-back-to-home:hover {
  background-color: #45a049;
}

/* Animasi */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounceIn {
  0% {
    transform: scale(0.3);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
