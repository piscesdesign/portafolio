<template>
  <div>
    <NavBar :isHome="false"></NavBar>
    <div style="min-height: 80px;"></div>
    <div class="bg-white vh-100">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="w-100 position-relative">
              <img src="@/assets/images/bg-acerca.png" class="img-fluid">
              <div class="position-absolute top-50 start-0 translate-middle-y w-50">
                <p>¡Hola! Mi nombre es Nataly. Soy Diseñadora Industrial y de productos. Me considero una persona empática, con una gran imaginación creativa, comprometida y en búsqueda constante de mostrar mi identidad en cada uno de mis proyectos, usando como punto inicial, el objetivo de comprometerme con la esencia de cada marca con la que trabajo y conservando mi identidad en el diseño de mis productos.</p>
                <p>Mi marca Pisces nace de la creatividad de una soñadora y esta creció con la inspiración de diseñar para obtener una conexión con mi entorno y con los demás, por medio del diseño de productos con identidad propia y que busca cumplir con las necesidades de las personas.</p>
                <p>Espero que a través de mi marca y de mis proyectos en mi portafolio puedas conocerme como diseñadora con una esencia única que busca conectar con cada persona y que al mismo tiempo sigue en búsqueda de la puerta que la lleve a cumplir todos sus sueños.</p>
              </div>              
            </div>
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
import Redirect from '@/components/Redirect.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'AboutView',
  components: {
    NavBar,
    Redirect,
    Footer
  }
}
</script>