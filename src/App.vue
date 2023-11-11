<template>
  <div id="app" class="overflow-hidden">
    <transition 
    enter-active-class="animate__animated animate__fadeInRight"
    leave-active-class="animate__animated animate__fadeOutLeft"
    mode="out-in">
      <router-view></router-view>  
    </transition>
    <OffCanvas></OffCanvas>
  </div>
</template>

<script>
import OffCanvas from '@/components/OffCanvas.vue';

export default {
  components: {
    OffCanvas
}
}
</script>

<style lang="scss">
  
// 1. Include functions first (so you can manipulate colors, SVGs, calc, etc)
@import "../node_modules/bootstrap/scss/functions";

// 2. Include any default variable overrides here
$primary: #f3142e;
$secondary: #f54358;

// 3. Include remainder of required Bootstrap stylesheets
@import "../node_modules/bootstrap/scss/variables";

// 4. Include any default map overrides here
// Create your own map
$theme-colors: map-merge($theme-colors, (
  "tertiary": #fb4e4e,
  "gray": #cccccc
));

$position-values: map-merge($position-values, (
  20: 20%,
  30: 30%,
  40: 40%,
  60: 60%,
  70: 70%,
  80: 80%,
  90: 90%
));

// 5. Include remainder of required parts
@import "../node_modules/bootstrap/scss/maps";
@import "../node_modules/bootstrap/scss/mixins";
@import "../node_modules/bootstrap/scss/utilities";

// Layout & components
@import "../node_modules/bootstrap/scss/root";
@import "../node_modules/bootstrap/scss/reboot";
@import "../node_modules/bootstrap/scss/type";
@import "../node_modules/bootstrap/scss/images";
@import "../node_modules/bootstrap/scss/containers";
@import "../node_modules/bootstrap/scss/grid";
//@import "../node_modules/bootstrap/scss/tables";
@import "../node_modules/bootstrap/scss/forms";
@import "../node_modules/bootstrap/scss/buttons";
@import "../node_modules/bootstrap/scss/transitions";
//@import "../node_modules/bootstrap/scss/dropdown";
//@import "../node_modules/bootstrap/scss/button-group";
@import "../node_modules/bootstrap/scss/nav";
@import "../node_modules/bootstrap/scss/navbar";
//@import "../node_modules/bootstrap/scss/card";
//@import "../node_modules/bootstrap/scss/accordion";
//@import "../node_modules/bootstrap/scss/breadcrumb";
//@import "../node_modules/bootstrap/scss/pagination";
//@import "../node_modules/bootstrap/scss/badge";
//@import "../node_modules/bootstrap/scss/alert";
//@import "../node_modules/bootstrap/scss/progress";
//@import "../node_modules/bootstrap/scss/list-group";
@import "../node_modules/bootstrap/scss/close";
//@import "../node_modules/bootstrap/scss/toasts";
@import "../node_modules/bootstrap/scss/modal";
//@import "../node_modules/bootstrap/scss/tooltip";
//@import "../node_modules/bootstrap/scss/popover";
//@import "../node_modules/bootstrap/scss/carousel";
//@import "../node_modules/bootstrap/scss/spinners";
@import "../node_modules/bootstrap/scss/offcanvas";
@import "../node_modules/bootstrap/scss/placeholders";

// Helpers
@import "../node_modules/bootstrap/scss/helpers";

// Utilities
@import "../node_modules/bootstrap/scss/utilities/api";

@font-face {
   font-family: hatolie;
   src: url('~@/assets/fonts/hatolie/Hatolie.ttf') format('truetype');
}

@font-face {
  font-family: 'century schoolbook';
  src: url('~@/assets/fonts/century_schoolbook/Century_schoolbook.ttf') format('truetype');
}

label.form-label, button[type=submit] {
  font-family: hatolie !important;
}

p {
  font-family: 'century schoolbook';
}
</style>
