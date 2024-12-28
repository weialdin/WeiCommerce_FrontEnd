<template>
  <footer class="footer-section">
    <div class="container">
      <div class="row">
        <!-- Footer Logo and Contact -->
        <div class="col-lg-4 col-md-6">
          <div class="footer-left text-left">
            <div class="footer-logo">
              <a href="#">
                <img src="/img/logo/footer.png" alt="Website Logo" />
              </a>
            </div>
            <ul class="contact-info">
              <li><i class="fas fa-map-marker-alt"></i> Gondang, Mojokerto</li>
              <li><i class="fas fa-phone"></i> +6281 3347 00902</li>
              <li><i class="fas fa-envelope"></i> halo@weicommerce.com</li>
            </ul>
            <div class="footer-social">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-pinterest"></i></a>
            </div>
          </div>
        </div>
        <!-- Information Section -->
        <div class="col-lg-3 col-md-6">
          <div class="footer-widget text-left">
            <h5>Information</h5>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Checkout</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Services</a></li>
            </ul>
          </div>
        </div>
        <!-- My Account Section -->
        <div class="col-lg-3 col-md-6">
          <div class="footer-widget text-left">
            <h5>My Account</h5>
            <ul>
              <li><a href="#">My Account</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Shopping Cart</a></li>
              <li><a href="#">Shop</a></li>
            </ul>
          </div>
        </div>
        <!-- Newsletter Section -->
        <div class="col-lg-2 col-md-6">
          <div class="footer-widget text-left">
            <h5>Subscribe</h5>
            <form class="newsletter-form">
              <input type="email" placeholder="Your Email" />
              <button type="submit"><i class="fas fa-paper-plane"></i></button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Copyright Section -->
    <div class="copyright-reserved">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <p class="copyright-text">
              &copy; 2024 All rights reserved | Developed by Ahmad Aminudin
              (Weialdin)
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "WeiFooter",
};
</script>

<style scoped>
.footer-section {
  background-color: #222;
  color: #fff;
  padding: 50px 0;
}

.footer-logo img {
  max-width: 952px;
  height: 452px;
  margin-bottom: 20px;
}

.contact-info li {
  list-style: none;
  margin: 10px 0;
  font-size: 14px;
}

.contact-info li i {
  margin-right: 10px;
  color: #ffd700;
}

.footer-social a {
  display: inline-block;
  margin-right: 10px;
  font-size: 18px;
  color: #fff;
  transition: color 0.3s;
}

.footer-social a:hover {
  color: #ffd700;
}

.footer-widget h5 {
  font-size: 18px;
  margin-bottom: 20px;
  color: #ffd700;
}

.footer-widget ul {
  padding: 0;
}

.footer-widget ul li {
  list-style: none;
  margin-bottom: 10px;
}

.footer-widget ul li a {
  color: #fff;
  font-size: 14px;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-widget ul li a:hover {
  color: #ffd700;
}

.newsletter-form {
  display: flex;
}

.newsletter-form input {
  width: 70%;
  padding: 10px;
  border: none;
  border-radius: 5px 0 0 5px;
  outline: none;
}

.newsletter-form button {
  width: 30%;
  background-color: #ffd700;
  color: #222;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}

.newsletter-form button i {
  font-size: 16px;
}

.copyright-reserved {
  background-color: #111;
  padding: 20px 0;
}

.copyright-text {
  font-size: 14px;
  margin: 0;
  text-align: center;
}

.text-left {
  text-align: left;
}
</style>
