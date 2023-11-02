<template>
  <div class="bg-tertiary">
    <NavBar :isHome="true"></NavBar>
    <div class="bg-primary">
      <div class="container d-flex align-items-end flex-column" style="min-height: 90vh;">
        <div style="min-height: 80px;"></div>
        <div class="row justify-content-center mb-5 mb-lg-0">
          <div class="col-8 col-md-6 col-lg-5">
            <img src="@/assets/images/home-logo.png" class="img-fluid ms-2">
          </div>
        </div>
        <div class="row justify-content-center d-lg-none mb-5">
          <div class="col-5 col-md-4 col-lg-3">
            <ul class="navbar-nav w-100">
                <li class="nav-item mx-0 mb-4">
                    <router-link to="/acerca">
                        <img src="@/assets/images/acerca-home.png" class="img-fluid">
                    </router-link>
                </li>
                <li class="nav-item mx-0 mb-4">
                    <router-link to="/proyectos">
                        <img src="@/assets/images/proyectos-home.png" class="img-fluid">
                    </router-link>
                </li>
                <li class="nav-item mx-0">
                    <router-link to="/contacto">
                        <img src="@/assets/images/contacto-home.png" class="img-fluid">
                    </router-link>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-tertiary">
      <div class="container">
        <div class="row justify-content-between py-4 px-2">
          <div class="col-8 col-sm-6 col-md-7 col-lg-6 position-relative">
            <img src="@/assets/images/footer-home.png" class="img-fluid position-absolute top-0 start-50 translate-middle" style="margin-top: -30px;">
          </div>
          <div class="col-4 col-md-3 col-lg-2">
              <img src="@/assets/images/media.png" class="img-fluid">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';

export default {
  name: 'HomeView',
  components: {
    NavBar
  }
}
</script>
