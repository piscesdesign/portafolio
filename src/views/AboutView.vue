<template>
  <div>
    <NavBar :isHome="false"></NavBar>
    <div style="min-height: 80px;"></div>
    <div class="bg-white min-vh-100">
      <div class="container">
        <div class="row" id="medium">
          <div class="col-12 col-md-8 h-100 d-flex align-items-end flex-column">
            <div class="w-100 my-auto">
              <p class="px-3">¡Hola! Mi nombre es Nataly. Soy Diseñadora Industrial y de productos. Me considero una persona empática, con una gran imaginación creativa, comprometida y en búsqueda constante de mostrar mi identidad en cada uno de mis proyectos, usando como punto inicial, el objetivo de comprometerme con la esencia de cada marca con la que trabajo y conservando mi identidad en el diseño de mis productos.</p>
              <p class="px-3">Mi marca Pisces nace de la creatividad de una soñadora y esta creció con la inspiración de diseñar para obtener una conexión con mi entorno y con los demás, por medio del diseño de productos con identidad propia y que busca cumplir con las necesidades de las personas.</p>
              <p class="px-3">Espero que a través de mi marca y de mis proyectos en mi portafolio puedas conocerme como diseñadora con una esencia única que busca conectar con cada persona y que al mismo tiempo sigue en búsqueda de la puerta que la lleve a cumplir todos sus sueños.</p>
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
div#medium, div#mobile {
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
}

div#mobile {
  background-size: cover;
}

div#medium {
  height: 500px;
  background-size: contain;
    p {
    margin: 0;
    text-indent: 2rem;
    text-align: justify;
  }
}

@media (min-width: 768px) {
  div#medium {
    background-image: url('./../assets/images/bg-acerca.png');
  }
}
</style>

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