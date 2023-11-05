<template>
  <div>
    <NavBar :isHome="false"></NavBar>
    <div style="min-height: 80px;"></div>
    <div class="bg-white mb-4">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-8 d-flex justify-content-center">
            <img src="@/assets/images/proyectos-title.png" class="img-fluid">
          </div>
        </div>
        <div class="row justify-content-center g-5">
          <div class="col-12 col-md-6 col-lg-4">
            <div class="w-100 p-3" @click="modal(0)">
              <img src="@/assets/projects/p-singular-1.png" class="img-fluid">
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div class="w-100 p-3" @click="modal(1)">
              <img src="@/assets/projects/p-singular-1.png" class="img-fluid">
            </div>
          </div>
        </div>
        <div class="row justify-content-center g-5">
          <div class="col-12 col-md-6 col-lg-4">
            <div class="w-100 p-3" @click="modal(2)">
              <img src="@/assets/projects/p-singular-1.png" class="img-fluid">
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div class="w-100 p-3" @click="modal(3)">
              <img src="@/assets/projects/p-singular-1.png" class="img-fluid">
            </div>
          </div>
        </div>
      </div>
    </div>
    <Redirect></Redirect>
    <Footer></Footer>
    <div class="modal fade show" :class="[visible ? 'd-block' : '']">
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content" :class="[selectedIndex > -1 ? projects[selectedIndex].background : '']">
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row justify-content-center">
                <div class="col-12">
                  <img src="@/assets/projects/p-singular-title.png" class="img-fluid">
                </div>
                <div class="col-12 col-md-6">
                  <div class="w-100 p-md-4 bg-white rounded-5 mt-4">
                    <p class="p-3" :class="[selectedIndex > -1 ? projects[selectedIndex].text : '']">El proyecto se baso en presentar una solución ante la estigmatización de los símbolos patrios y sobre toda la cultura del país, por lo que esta coleccción ayudará a potenciar tanto a la cultura salvadoreña como ayudar a las mujeres a obtener una prenda que cumpla con sus expectativas. Además, para este se tomo como enfoque principal nuestra ave nacional, el cual posee una vistosidad de colores que servieron como base para la colección.</p>
                    <img src="@/assets/projects/p-singular-1.png" class="w-75 h-auto">
                  </div>
                </div>
                <div class="col-1 d-none d-md-block"></div>
                <div class="col-6 col-md-2 p-md-4 position-relative bg-white rounded-5">
                  <img src="@/assets/projects/p-singular-2.png" class="img-fluid position-absolute top-30 start-80 translate-middle">
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="float-end">
                      <div @click="modal()" style="cursor: pointer;">
                          <img src="@/assets/images/go-home.png" class="h-auto" style="max-width: 60px;">
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade show d-none"></div>
  </div>
</template>

<style lang="scss" scoped>
div.w-100.p-3 {
  img.img-fluid {
    cursor: pointer;
  }
}
</style>

<script>
  
  import NavBar from '@/components/NavBar.vue';
  import Redirect from '@/components/Redirect.vue';
  import Footer from '@/components/Footer.vue';
  
  export default {
    name: 'ProjectsView',
    components: {
      NavBar,
      Redirect,
      Footer
    },
    data() {
      return {
        visible: false,
        selectedIndex: -1,
        projects: [
          {
            background: 'bg-tertiary',
            text: 'text-primary'
          },
          {
            background: 'bg-primary',
            text: 'text-primary'
          },
          {
            background: 'bg-tertiary',
            text: 'text-primary'
          },
          {
            background: 'bg-primary',
            text: 'text-primary'
          }
        ]
      }
    },
    methods: {
      modal(index = -1) {
        this.visible = !this.visible;
        this.selectedIndex = index;
        if(this.visible)
        {
          document.body.classList.add('overflow-hidden');
          document.body.classList.add('modal-open');
        }
        else
        {
          document.body.classList.remove('overflow-hidden');
          document.body.classList.remove('modal-open');
        }
      }
    }
  }
  </script>