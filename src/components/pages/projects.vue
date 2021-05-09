
<template>
  <div
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <h2>
      {{projects.title}}
    </h2>

    <div
      v-html="getHTMLfromMD(projects.content)"
    >
    </div>

    <div>
      <div
        v-for="project in list"
        :key="project.title"
        ref="project"
      >
        <router-link
          v-bind:to="'/projekte/'+project.uuid"
        >
          {{project.title}}
        </router-link>
      </div>
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
        projects: contents.projects,
        list: contents.projectsList,
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

