<template>
  <div>
    <NavBar :isHome="true"></NavBar>
    <div class="w-100 vh-100 bg-tertiary">
      <div class="container h-100 d-flex alig-items-center">
        <div class="vh-100 row justify-content-center align-items-center">
          <div class="col-10 col-sm-8 col-md-6 col-lg-4">
            <img src="@/assets/images/home-logo.png" class="img-fluid">
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
