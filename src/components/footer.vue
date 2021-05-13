
<template>
  <div class="footer">
    <p class="footer__copyright">
      ©{{this.year}} Cédric Knapp <span class="footer__dash">–</span> <a href="mailto:hallo@cedric-knapp.ch" class="text-link">hallo@cedric-knapp.ch</a> <span class="footer__dash">–</span> <a href="tel:+41 77 425 60 66" class="text-link">+41 77 425 60 66</a>

    </p>
    <p class="footer__credits">
      Design + Code : <a href="https://www.daviddarx.com" target="_blank" class="text-link">David Darx</a>
    </p>
  </div>
</template>

<script>
  import Vue from "vue";

  export default Vue.extend({
    computed: {
      year: function () {
        return new Date().getFullYear();
      }
    },
    data() {
      return {}
    },
    mounted () {
    },
    methods: {
    }
  });
</script>
