
<template>
  <div
    class="home"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <div class="column column--centered">
      <h2>
        {{home.title}}
      </h2>

      <div
        class="home__desc"
        v-html="getHTMLfromMD(home.content)"
      >
      </div>

      <router-link
        class="home__cta cta"
        to="/portfolio"
      >
        {{home.buttonLabel}}
      </router-link>
    </div>

    <custom-footer></custom-footer>
  </div>
</template>

<script>
  import Vue from "vue";
  import CustomFooter from '../footer.vue';
  import contents from '../../contents';
  import getHTMLfromMDMixin from '../../mixins/getHTMLFromMD';

  export default Vue.extend({
    components: {
      'custom-footer': CustomFooter,
    },
    mixins: [getHTMLfromMDMixin],
    data() {
      return {
        home: contents.home,
        isDisplayed : false,
      }
    },
    mounted () {
      setTimeout(this.display, 100);
    },

    methods: {
      display: function () {
        if (this.$parent.isLoaded == true) {
          this.isDisplayed = true;
        }
      }
    }
  });
</script>

