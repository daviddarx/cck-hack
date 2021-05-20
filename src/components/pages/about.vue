
<template>
  <div
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <span> {{about.subline}} </span>

    <h2>
      {{about.title}}
    </h2>

    <p>
      {{about.lead}}
    </p>

    <img
      :src = about.image
    >

    <a
      :href = about.cvdoc
      target="_blank"
    >
      {{about.cvlabel}}
    </a>

    <h3>
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

    <h3>
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

    <h3>
      {{about.skillstitle}}
    </h3>

    <span
      v-for="skill in about.skills"
      v-bind:key="skill.title"
    >
      {{skill.skill}}
    </span>

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

