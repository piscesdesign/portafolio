<template>
    <div>
      <NavBar :isHome="false" :bg="'bg-primary border-primary'" :tx="'text-white'"></NavBar>
      <div class="bg-primary">
        <div style="min-height: 80px;"></div>
        <div class="container-fluid pb-4">
          <div class="row justify-content-center">
            <div class="col-12">
              <img src="@/assets/projects/p-beaute-title.png" class="img-fluid">
            </div>
            <div class="col-12 col-sm-10 col-md-6">
              <div class="p-4 bg-white rounded-5 mt-4">
                <div class="row">
                  <div class="col-12 main-text">
                    <div class="row justify-content-center">
                      <div class="col-7 col-md-10 col-lg-12">
                        <p class="text-primary">Beauté volcanique sereine, es la inspiración de este proyecto para representar el objetivo de la marca, que es ofrecer un producto hidrantante, el cual le genere frescura en el rostro al consumidor para sentir una serenidad absoluta con su piel, y que a su vez se sienta satisfecha y bella con los resultados satisfactorios del producto. Además, el empaque esta diseñado para representar la relación del producto con el consumidor.</p>
                      </div>
                      <div class="col-5 d-md-none">
                        <img src="@/assets/projects/p-beaute-2-mobile.png" class="img-fluid">
                      </div>
                      <div class="col-12 mt-3">
                        <img src="@/assets/projects/p-beaute-1.png" class="img-fluid px-1 px-lg-3">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4 col-md-3 col-lg-3 p-md-4 position-relative d-none d-md-block">
              <img src="@/assets/projects/p-beaute-2.png" class="img-fluid position-absolute top-30 start-80 translate-middle">
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
    import Footer from '@/components/Footer.vue';
    import Redirect from '@/components/Redirect.vue';
    
    export default {
      name: 'BeauteView',
      components: {
        NavBar,
        Redirect,
        Footer
      }
    }
    </script>