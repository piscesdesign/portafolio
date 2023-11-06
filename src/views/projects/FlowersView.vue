<template>
    <div>
      <NavBar :isHome="false" :bg="'bg-primary border-primary'" :tx="'text-white'"></NavBar>
      <div class="bg-primary">
        <div style="min-height: 80px;"></div>
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-12">
                    <img src="@/assets/projects/p-flowers-title.png" class="img-fluid">
                </div>
                <div class="col-12 col-md-6">
                    <div class="p-md-4 bg-white rounded-5 mt-4 d-flex">
                    <div class="w-100 main-text">
                        <p class="p-3 primary-text">El proyecto “Wild flower in the mind” se baso en presentar una colección que representa el empoderamiento de la mujer sin necesidad de abandonar los estereotipos desde hace déca- das, utilizando así tonalidades rosas que destacan con un estampado miniminalista y ar- monioso. Con un estilo de temporada de primavera-verano, en el que la mujer le encanta sentirse libre y cómoda con las prendas que lleva durante esta época del año, conectando así con las mujeres para que se sientan seguras ante la sociedad que estigmatiza el poder de una mujer en la actualidad.</p>
                        <img src="@/assets/projects/p-flowers-1.png" class="img-fluid p-3">
                    </div>
                    <div class="w-25 d-none">
                        <img src="@/assets/projects/p-flowers-3.png" class="img-fluid">
                    </div>
                    </div>
                </div>
                <div class="col-1 d-none d-md-block"></div>
                <div class="col-6 col-md-2 p-md-4 position-relative">
                    <img src="@/assets/projects/p-flowers-2.png" class="img-fluid position-absolute top-30 start-80 translate-middle">
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
      name: 'FlowersView',
      components: {
        NavBar,
        Redirect,
        Footer
      }
    }
    </script>