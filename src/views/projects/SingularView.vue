<template>
    <div>
      <NavBar :isHome="false" :bg="'bg-white'"></NavBar>
      <div class="bg-white">
        <div style="min-height: 100px;"></div>
        <div class="container-fluid pb-4">
          <div class="row">
            <div class="col-12 col-sm-10 col-md-8 col-lg-6">
              <img src="@/assets/projects/p-singular-title.png" class="img-fluid">
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-12 col-sm-10 col-md-6">
              <div class="p-4 bg-gray rounded-5 mt-4">
                <div class="row">
                  <div class="col-12 col-lg-9 main-text">
                    <div class="row justify-content-center">
                      <div class="col-4 d-md-none">
                        <img src="@/assets/projects/p-singular-2.png" class="img-fluid">
                      </div>
                      <div class="col-8 col-md-10 col-lg-12">
                        <p class="text-primary">El proyecto se baso en presentar una solución ante la estigmatización de los símbolos patrios y sobre toda la cultura del país, por lo que esta coleccción ayudará a potenciar tanto a la cultura salvadoreña como ayudar a las mujeres a obtener una prenda que cumpla con sus expectativas. Además, para este se tomo como enfoque principal nuestra ave nacional, el cual posee una vistosidad de colores que servieron como base para la colección.</p>
                        <img src="@/assets/projects/p-singular-4.png" class="img-fluid d-lg-none">
                      </div>
                      <div class="col-12">
                        <img src="@/assets/projects/p-singular-1.png" class="img-fluid">
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 d-none d-lg-block">
                    <img src="@/assets/projects/p-singular-3.png" class="img-fluid">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-3 col-md-3 col-lg-3 p-md-4 position-relative d-none d-md-block">
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