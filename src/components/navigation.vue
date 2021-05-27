
<template>
  <nav
    class="navigation"
    v-bind:class="{ 'is-minified': this.isNavMinified, 'is-hidden': this.isNavHidden, 'is-mobile-opened': this.isNavMobileOpened }"
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
          to="/portfolio"
        >Portfolio</router-link><!--
        --><router-link
          class="navigation__link"
          to="/about"
        >About</router-link><!--
        --><router-link
          class="navigation__link"
          to="/home"
        >Home</router-link>
      </div>

      <div
        v-bind:class="{'is-close' : this.isNavMobileOpened}"
        v-on:click="this.toggleMobileNavigation"
        class="navigation__burger burger"
      >
        <div class="burger__bar burger__bar--01"></div>
        <div class="burger__bar burger__bar--02"></div>
        <div class="burger__bar burger__bar--03"></div>
      </div>
      <div
        v-on:click="this.toggleMobileNavigation"
        class="navigation__mobile-background"
      ></div>
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
        isNavMobileOpened: false,
        scrollDebounced: undefined,
        scrollTopRatioToHide: 0.01,
        scrollTop: 0,
        scrollTopLast: 0
      }
    },
    mounted () {
      requestAnimationFrame(this.displayNav);

      this.$router.beforeEach(this.beforeEach);

      this.scrollDebounced = debounce(this.scrollListener, 10);
      window.addEventListener('scroll', this.scrollDebounced);
    },
    methods: {
      displayNav: function () {
        this.isDisplayed = true;
      },
      beforeEach: function (to, from, next) {
        this.isNavMobileOpened = false;

        next();
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
      toggleMobileNavigation: function () {
        this.isNavMobileOpened = !this.isNavMobileOpened;
      },
      destroy: function () {
        window.removeEventListener('scroll', this.scrollDebounced);
      }
    }
  });
</script>
