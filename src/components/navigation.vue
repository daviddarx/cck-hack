
<template>
  <nav
    class="navigation"
  >
    <h2 class="visually-hidden">Navigation</h2>
    <div
      class="navigation__container"
      v-if="this.isDisplayed"
    >
      <a href="mailto:hallo@cedric-knapp.ch" class="navigation__link navigation__link--secondary navigation__email">hallo@cedric-knapp.ch</a><!--
      --><a href="tel:+41 77 425 60 66" class="navigation__link navigation__link--secondary navigation__phone">+41 77 425 60 66</a><!--
      --><router-link
        class="navigation__link"
        to="/projekte"
      >Projekte</router-link><!--
      --><router-link
        class="navigation__link"
        to="/ueber-mich"
      >Über mich</router-link>
    </div>
  </nav>
</template>

<script>
  import Vue from "vue";

  export default Vue.extend({
    data() {
      return {
        isDisplayed: false,
      }
    },
    mounted () {
      requestAnimationFrame(this.displayNav);
    },
    methods: {
      displayNav: function () {
        this.isDisplayed = true;
      }
    }
  });
</script>
