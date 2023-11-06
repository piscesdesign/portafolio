<template>
    <div>
      <NavBar :isHome="false" :bg="'bg-tertiary border-tertiary'" :tx="'text-white'"></NavBar>
      <div class="bg-tertiary">
        <div style="min-height: 80px;"></div>
        <div class="container-fluid">
              <div class="row justify-content-center">
                <div class="col-12">
                  <img src="@/assets/projects/p-singular-title.png" class="img-fluid">
                </div>
                <div class="col-12 col-md-6">
                  <div class="p-md-4 bg-white rounded-5 mt-4 d-flex">
                    <div class="w-75 main-text">
                      <p class="p-3 text-primary">El proyecto se baso en presentar una solución ante la estigmatización de los símbolos patrios y sobre toda la cultura del país, por lo que esta coleccción ayudará a potenciar tanto a la cultura salvadoreña como ayudar a las mujeres a obtener una prenda que cumpla con sus expectativas. Además, para este se tomo como enfoque principal nuestra ave nacional, el cual posee una vistosidad de colores que servieron como base para la colección.</p>
                      <img src="@/assets/projects/p-singular-1.png" class="img-fluid">
                    </div>
                    <div class="w-25">
                      <img src="@/assets/projects/p-singular-3.png" class="img-fluid">
                    </div>
                  </div>
                </div>
                <div class="col-1 d-none d-md-block"></div>
                <div class="col-6 col-md-2 p-md-4 position-relative">
                  <img src="@/assets/projects/p-singular-2.png" class="img-fluid position-absolute top-30 start-80 translate-middle">
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
      name: 'SingularView',
      components: {
        NavBar,
        Redirect,
        Footer
      }
    }
    </script>