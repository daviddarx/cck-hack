
<template>
  <nav
    class="navigation"
    v-bind:class="{ 'is-minified': this.isNavMinified }"
  >
    <div
      class="navigation__container"
      v-if="this.isDisplayed"
    >
      <logo class="navigation__logo"></logo>

      <div class="navigation__links">
        <h2 class="visually-hidden">Navigation</h2>

        <a href="mailto:talk@justknapp.com" class="navigation__link navigation__link--secondary navigation__email">talk@justknapp.com</a><!--
        --><a href="tel:+41 77 425 60 66" class="navigation__link navigation__link--secondary navigation__phone">+41 77 425 60 66</a><!--
        --><router-link
          class="navigation__link"
          to="/projekte"
        >Portfolio</router-link><!--
        --><router-link
          class="navigation__link"
          to="/ueber-mich"
        >About</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
  import Vue from "vue";
  import Logo from './logo.vue';

  export default Vue.extend({
    components: {
      'logo': Logo
    },
    data() {
      return {
        isDisplayed: false,
        isNavMinified: false,
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
