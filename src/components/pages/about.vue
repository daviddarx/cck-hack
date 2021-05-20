
<template>
  <div
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
    class="about"
  >
    <div class="content__centered">

      <span class="about__subline subline"> {{about.subline}} </span>

      <h2 class="about__title">
        {{about.title}}
      </h2>

      <p class="about__lead">
        {{about.lead}}
      </p>

      <img
        :src = about.image
        class="about__img"
      >

      <a
        :href = about.cvdoc
        target="_blank"
        class="about__link"
      >
        {{about.cvlabel}}
      </a>

      <h3 class="about__subtitle subline">
        {{about.positionstitle}}
      </h3>

      <div
        v-for="position in about.positions"
        v-bind:key="position.title"
      >
        <span>
          {{position.dates}}
        </span>
        <h4>
          {{position.agency}}
        </h4>
        <div
          v-html="getHTMLfromMD(position.description)"
        >
        </div>
      </div>

      <h3 class="about__subtitle subline">
        {{about.languagestitle}}
      </h3>

      <div
        v-for="language in about.languages"
        v-bind:key="language.title"
        ref="language"
      >
        <span>
          {{language.language}}
        </span>
        <div>
          {{language.level}}
        </div>
      </div>

      <h3 class="about__subtitle subline">
        {{about.skillstitle}}
      </h3>

      <span
        v-for="skill in about.skills"
        v-bind:key="skill.title"
      >
        {{skill.skill}}
      </span>
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
        about: contents.about,
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

