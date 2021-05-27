
<template>
  <div
    class="logo"
    v-bind:class="{'is-deactived': this.isDeactived}"
  >
    <div class="logo__container">
      <router-link
        to="/"
      >
        <h1 class="logo__title">
          Cédric Knapp
        </h1>
        <p class="logo__desc">
          content that matters.
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";

  export default Vue.extend({
    data() {
      return {
        isDeactived: true
      }
    },
    mounted () {
      this.checkDeactivation();
      this.$router.afterEach(this.checkDeactivation);
    },
    methods: {
      checkDeactivation: function () {
        this.isDeactived = (this.$route.name=='home') ? true : false ;
      }
    }
  });
</script>
