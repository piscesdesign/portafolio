<template>
  <div>
    <NavBar :isHome="false"></NavBar>
    <div class="w-100 vh-100 bg-white">
      
    </div>
  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';

export default {
  name: 'AboutView',
  components: {
    NavBar
  }
}
</script>