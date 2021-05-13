
<template>
  <div
    class="transition"
  >
    <transition
      name="transition"
      v-on:after-enter="aferEnterIn"
    >
      <div
        class="transition__bg"
        v-if="this.isDisplayingIn"
      >
      </div>
    </transition>
  </div>
</template>
<script>
  import Vue from "vue";

  export default Vue.extend({
    data() {
      return {
        isDisplayingIn: false,
        isDisplayingOut: false,
        nextFunction: undefined
      }
    },
    mounted () {
      this.$router.beforeEach(this.beforeEach);
    },
    methods: {
      beforeEach: function (to, from, next) {
        document.body.classList.add('transition-out');

        this.isDisplayingIn = true;
        this.nextFunction = next;
      },
      aferEnterIn: function() {
        document.body.classList.remove('transition-out');

        this.isDisplayingIn = false;
        this.nextFunction();
        this.isDisplayingOut = true;
      },
      afterEnterOut: function() {
        this.isDisplayingOut = false;
      }
    }
  });
</script>
