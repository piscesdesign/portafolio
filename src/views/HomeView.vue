<template>
  <div>
    <NavBar :isHome="true"></NavBar>
    <div class="bg-tertiary">
      <div class="container min-vh-100 d-flex align-items-end flex-column">
        <div style="min-height: 80px;"></div>
        <div class="row justify-content-center mb-5 mb-lg-0">
          <div class="col-10 col-sm-8 col-md-6 col-lg-5">
            <img src="@/assets/images/home-logo.png" class="img-fluid ms-2">
          </div>
        </div>
        <div class="row justify-content-center d-lg-none">
          <div class="col-6 col-sm-5 col-md-4 col-lg-3">
            <ul class="navbar-nav w-100">
                <li class="nav-item mx-0 mb-3">
                    <router-link to="/acerca">
                        <img src="@/assets/images/acerca-home.png" class="img-fluid">
                    </router-link>
                </li>
                <li class="nav-item mx-0 mb-3">
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
        <div class="row justify-content-end py-3 mt-auto">
          <div class="col-6 col-md-4 col-lg-2">
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
