
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
          <span class="logo__last-name">Cédric</span>
          <span class="logo__name">Knapp</span>
        </h1>
        <p class="logo__desc">
          content<br>that matters.
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
