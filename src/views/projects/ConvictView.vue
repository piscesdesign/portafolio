<template>
    <div>
      <NavBar :isHome="false" :bg="'bg-white'"></NavBar>
      <div class="bg-white">
        <div style="min-height: 100px;"></div>
        <div class="container-fluid pb-4">
          <div class="row">
            <div class="col-12 col-sm-10 col-md-8 col-lg-6">
              <img src="@/assets/projects/p-convict-title.png" class="img-fluid">
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-12 col-sm-10 col-md-6">
              <div class="p-4 bg-gray rounded-5 mt-4">
                <div class="row">
                  <div class="col-12 main-text">
                    <div class="row justify-content-center">
                      <div class="col-5 d-md-none">
                        <img src="@/assets/projects/p-convict-2.png" class="img-fluid">
                      </div>
                      <div class="col-7 col-md-10 col-lg-12">
                        <p class="text-primary">Convict History, la historia detrás del exilio de convictos, es la base principal para la realización de este proyecto junto a la marca de vino de “19 Crimes” para un empaque de edición especial, en el que cuenta la historia de cada una de las personas desterradas por uno de los 19 crímenes, que contiene una historia de lo que vivieron al ser transportados a un lugar desconocido, y lo que llegar otro país les dio, unos superando la adversidad.</p>
                      </div>
                      <div class="col-12 mb-3">
                        <img src="@/assets/projects/p-convict-3.png" class="img-fluid px-2 px-md-3">
                      </div>
                      <div class="col-12">
                        <img src="@/assets/projects/p-convict-1.png" class="img-fluid px-md-3">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-3 col-md-3 col-lg-3 p-md-4 position-relative d-none d-md-block">
              <img src="@/assets/projects/p-convict-2.png" class="img-fluid position-absolute top-30 start-80 translate-middle">
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
      name: 'ConvictView',
      components: {
        NavBar,
        Redirect,
        Footer
      }
    }
    </script>