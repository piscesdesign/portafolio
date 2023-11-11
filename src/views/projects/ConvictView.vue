<template>
    <div>
      <NavBar :isHome="false" :bg="'bg-tertiary border-primary'" :tx="'text-white'"></NavBar>
      <div class="bg-primary">
        <div style="min-height: 80px;"></div>

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