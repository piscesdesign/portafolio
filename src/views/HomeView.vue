<template>
  <div>
    <NavBar :isHome="true"></NavBar>
    <div class="w-100 vh-100 bg-primary">
      
    </div>
  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';

export default {
  name: 'HomeView',
  components: {
    NavBar
  }
}
</script>
