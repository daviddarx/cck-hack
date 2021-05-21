
<template>
  <nav
    class="navigation"
    v-bind:class="{ 'is-minified': this.isNavMinified, 'is-hidden': this.isNavHidden }"
  >
    <div
      class="navigation__container"
      v-if="this.isDisplayed"
    >
      <logo></logo>
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
  import debounce from 'lodash/debounce';
  import Logo from './logo.vue';

  export default Vue.extend({
    components: {
      'logo': Logo
    },
    data() {
      return {
        isDisplayed: false,
        isNavMinified: false,
        isNavHidden: false,
        scrollDebounced: undefined,
        scrollTopRatioToHide: 0.01,
        scrollTop: 0,
        scrollTopLast: 0
      }
    },
    mounted () {
      requestAnimationFrame(this.displayNav);

      this.scrollDebounced = debounce(this.scrollListener, 10);
      window.addEventListener('scroll', this.scrollDebounced);
    },
    methods: {
      displayNav: function () {
        this.isDisplayed = true;
      },
      scrollListener: function () {
        const windowH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        this.isNavHidden = (this.scrollTop  > windowH * this.scrollTopRatioToHide) ? true : false;

        if (this.scrollTop != this.scrollTopLast) {
          this.isNavMinified = (this.scrollTop > this.scrollTopLast) ? false : true;
        }

        if ((this.scrollTop < windowH * this.scrollTopRatioToHide)) {
          this.isNavMinified = false;
        }

        this.scrollTopLast = this.scrollTop <= 0 ? 0 : this.scrollTop;
      },
      destroy: function () {
        this.stopAnimation();
        window.removeEventListener('scroll', this.scrollDebounced);
      }
    }
  });
</script>
