<template>
  <div>
    <NavBar :isHome="false"></NavBar>
    <div style="min-height: 80px;"></div>
    <div class="bg-white vh-100">
      <div class="container">
        <div class="row">
          <div class="col-12">

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