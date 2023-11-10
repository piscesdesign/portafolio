<template>
    <div>
      <NavBar :isHome="false" :bg="'bg-white'"></NavBar>
      <div style="min-height: 80px;"></div>
      <div class="bg-white mb-4">
        <div class="container-fluid">
          <div class="row justify-content-center min-h-title">
            <div class="col-12 position-relative min-h-title">
              <img src="@/assets/images/proyectos-title.png" class="img-fluid p-2 position-absolute top-0 start-50 translate-middle-x">
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row justify-content-center g-md-5">
            <div class="col-10 col-sm-10 col-md-6 col-lg-3">
              <router-link to="/proyectos/singular-euforia" class="w-100 cursor">
                <img src="@/assets/projects/p-title-1.png" class="img-fluid p-1 p-md-2 p-lg-3">
              </router-link>
            </div>
            <div class="col-10 col-sm-10 col-md-6 col-lg-3">
              <router-link to="/proyectos/wild-flower" class="w-100 cursor">
                <img src="@/assets/projects/p-title-2.png" class="img-fluid p-1 p-md-2 p-lg-3">
              </router-link>
            </div>
          </div>
          <div class="row justify-content-center g-md-5">
            <div class="col-10 col-sm-10 col-md-6 col-lg-3">
              <router-link to="/proyectos/convict-history" class="w-100 cursor">
                <img src="@/assets/projects/p-title-3.png" class="img-fluid p-1 p-md-2 p-lg-3">
              </router-link>
            </div>
            <div class="col-10 col-sm-10 col-md-6 col-lg-3">
              <router-link to="/proyectos/beaute-volcanique" class="w-100 cursor">
                <img src="@/assets/projects/p-title-4.png" class="img-fluid p-1 p-md-2 p-lg-3">
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <Redirect></Redirect>
      <Footer></Footer>
    </div>
  </template>
  
  <style lang="scss" scoped>
  div.w-100.cursor {
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

  .min-h-title {
    min-height: 190px;
  }

  // Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  .min-h-title {
    min-height: 250px;
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {

}

// X-Large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
 }
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