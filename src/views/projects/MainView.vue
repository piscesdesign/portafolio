<template>
    <div>
      <NavBar :isHome="false" :bg="'bg-white'"></NavBar>
      <div style="min-height: 80px;"></div>
      <div class="bg-white mb-4">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-lg-8 d-flex justify-content-center">
              <img src="@/assets/images/proyectos-title.png" class="img-fluid">
            </div>
          </div>
          <div class="row justify-content-center g-md-5">
            <div class="col-12 col-sm-10 col-md-6 col-lg-4">
              <router-link to="/proyectos/singular-euforia" class="w-100 p-3">
                <img src="@/assets/projects/p-title-1.png" class="img-fluid">
              </router-link>
            </div>
            <div class="col-12 col-sm-10 col-md-6 col-lg-4">
              <router-link to="/proyectos/wild-flower" class="w-100 p-3">
                <img src="@/assets/projects/p-title-2.png" class="img-fluid">
              </router-link>
            </div>
          </div>
          <div class="row justify-content-center g-md-5">
            <div class="col-12 col-sm-10 col-md-6 col-lg-4">
              <div class="w-100 p-3">
                <img src="@/assets/projects/p-title-3.png" class="img-fluid">
              </div>
            </div>
            <div class="col-12 col-sm-10 col-md-6 col-lg-4">
              <div class="w-100 p-3">
                <img src="@/assets/projects/p-title-3.png" class="img-fluid">
              </div>
            </div>
          </div>
        </div>
      </div>
      <Redirect></Redirect>
      <Footer></Footer>
    </div>
  </template>
  
  <style lang="scss" scoped>
  div.w-100.p-3 {
    img.img-fluid {
      cursor: pointer;
    }
  }
  
  div.main-text {
    p {
      margin: 0;
      text-indent: 2rem;
      text-align: justify;
    }
  }
  
  .p-w-100 { width: 100% !important; }
  .p-w-80 { width: 80% !important; }
  .p-w-60 { width: 60% !important; }
  .p-w-40 { width: 40% !important; }
  .p-w-20 { width: 20% !important; }
  
  </style>
  
  <script>
    
    import NavBar from '@/components/NavBar.vue';
    import Redirect from '@/components/Redirect.vue';
    import Footer from '@/components/Footer.vue';
    
    export default {
      name: 'MainView',
      components: {
        NavBar,
        Redirect,
        Footer
      }
    }
    </script>