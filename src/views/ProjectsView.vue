<template>
  <div>
    <NavBar :isHome="false"></NavBar>
    <div style="min-height: 80px;"></div>
    <div class="bg-white mb-4">
      <div class="container">
        <div class="row">
          <div class="col-12 d-flex justify-content-center">
            <img src="@/assets/images/proyectos-title.png" class="img-fluid">
          </div>
        </div>
        <div class="row px-5 justify-content-center">
          <div class="col-12 col-md-6 col-lg-4">
            <div class="w-100 p-3">
              <img src="@/assets/images/p-singular-1.png" class="img-fluid">
            </div>
          </div>
          <div class="col-12 col-md-5 col-lg-4">

          </div>
        </div>
        <div class="row px-5">
          <div class="col-12 col-md-6">

          </div>
          <div class="col-12 col-md-6">

          </div>
        </div>
      </div>
    </div>
    <Redirect></Redirect>
    <Footer></Footer>
  </div>
</template>

  <script>
  
  import NavBar from '@/components/NavBar.vue';
  import Redirect from '@/components/Redirect.vue';
  import Footer from '@/components/Footer.vue';
  
  export default {
    name: 'ContactView',
    components: {
      NavBar,
      Redirect,
      Footer
    }
  }
  </script>