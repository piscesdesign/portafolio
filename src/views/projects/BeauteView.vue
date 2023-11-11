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
                        <p class="text-primary">El proyecto “Wild flower in the mind” se baso en presentar una colección que representa el empoderamiento de la mujer sin necesidad de abandonar los estereotipos desde hace décadas, utilizando así tonalidades rosas que destacan con un estampado miniminalista y armonioso. Con un estilo de temporada de primavera-verano, en el que la mujer le encanta sentirse libre y cómoda con las prendas que lleva durante esta época del año, conectando así con las mujeres para que se sientan seguras ante la sociedad que estigmatiza el poder de una mujer en la actualidad.</p>
                      </div>
                      <div class="col-5 d-md-none">
                        <img src="@/assets/projects/p-beaute-2.png" class="img-fluid">
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