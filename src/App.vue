<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

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
    "tertiary": #fb4e4e
  ));

  // 5. Include remainder of required parts
  @import "../node_modules/bootstrap/scss/maps";
  @import "../node_modules/bootstrap/scss/mixins";
  @import "../node_modules/bootstrap/scss/root";

  // 6. Optionally include any other parts as needed
  @import "../node_modules/bootstrap/scss/utilities";
  @import "../node_modules/bootstrap/scss/reboot";
  @import "../node_modules/bootstrap/scss/type";
  @import "../node_modules/bootstrap/scss/images";
  @import "../node_modules/bootstrap/scss/containers";
  @import "../node_modules/bootstrap/scss/grid";
  @import "../node_modules/bootstrap/scss/helpers";

  // 7. Optionally include utilities API last to generate classes based on the Sass map in `_utilities.scss`
  @import "../node_modules/bootstrap/scss/utilities/api";

  // 8. Add additional custom code here
</style>
