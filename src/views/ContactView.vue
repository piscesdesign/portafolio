<template>
  <div>
    <NavBar :isHome="false" :bg="'bg-white'"></NavBar>
    <div style="min-height: 100px;"></div>
    <div class="bg-white pb-3">
      <div class="container">
        <div class="row justify-content-end mb-3">
          <div class="col-12 col-lg-10">
            <img src="@/assets/images/header-contacto.png" class="img-fluid">
          </div>
        </div>
        <div class="row justify-content-center justify-content-md-start mb-3">
          <div class="col-12 col-md-6 p-4">
            <img src="@/assets/images/contacto-title.png" class="img-fluid">
          </div>
        </div>
        <div class="row justify-content-center mb-3">
          <div class="col-10 col-md-6 col-lg-5 bg-primary rounded-4">
            <form action="" class="p-3">
              <div class="mb-3">
                <label class="form-label text-white h4">Nombre:</label>
                <input type="text" class="form-control bg-transparent rounded-0 border-0 border-bottom text-white">
              </div>
              <div class="mb-3">
                <label class="form-label text-white h4">Email:</label>
                <input type="email" class="form-control bg-transparent rounded-0 border-0 border-bottom text-white">
              </div>
              <div class="mb-3">
                <label class="form-label text-white h4">Mensaje:</label>
                <textarea class="form-control bg-transparent rounded-0 border-0 border-bottom text-white"></textarea>
              </div>
              <div class="mb-3">
                <button type="submit" class="btn btn-light text-primary"><h4 class="m-0">Enviar</h4></button>
              </div>
            </form>
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
    name: 'ContactView',
    components: {
      NavBar,
      Redirect,
      Footer
    }
  }
  </script>