<template>
    <div>
      <NavBar :isHome="false" :bg="'bg-white'"></NavBar>
      <div class="bg-white">
        <div class="container min-vh-100 d-flex justify-content-center align-items-center flex-column">
          <div class="col-10 col-md-6 col-lg-4">
            <img src="@/assets/images/home.png" class="img-fluid">
          </div>
          <div class="col-10 col-md-6 col-lg-4">
            <h2 class="text-center mt-3">Pagina No Encontrada</h2>
            <router-link to="/" class="text-center"><h4>Volver al Inicio</h4></router-link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </template>
    
    <script>
    
    import NavBar from '@/components/NavBar.vue';
    import Footer from '@/components/Footer.vue';
    
    export default {
      name: 'Error404View',
      components: {
        NavBar,
        Footer
      }
    }
    </script>