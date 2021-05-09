
<template>
  <nav
    class="navigation"
  >
    <h2 class="visually-hidden">Navigation</h2>
    <div
      class="navigation__container"
      v-if="this.isDisplayed"
    >
      <router-link
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
