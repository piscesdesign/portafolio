<template>
  <div>
    <NavBar :isHome="false" :bg="'bg-white'"></NavBar>
    <div style="min-height: 100px;"></div>
    <div class="bg-white min-vh-100 mb-4">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-11 d-none d-lg-block">
            <img src="@/assets/images/bg-acerca.png" class="img-fluid">
          </div>
        </div>
        <div class="col-12 d-lg-none position-relative">
            <img src="@/assets/images/bg-acerca-mobile.png" class="img-fluid">
        </div>
      </div>
    </div>
    <Redirect></Redirect>
    <Footer></Footer>
  </div>
</template>

<style lang="scss" scoped>
div.w-100.position-absolute.start-50.top-60.translate-middle {
    p {
    margin: 0;
    text-indent: 2rem;
    text-align: justify;
  }
}

</style>

<script>

import NavBar from '@/components/NavBar.vue';
import Redirect from '@/components/Redirect.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'AboutView',
  components: {
    NavBar,
    Redirect,
    Footer
  }
}
</script>