
<template>
  <div
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
    class="projects"
  >
    <div class="content__centered">

      <h2 class="projects__subline subline"> {{projects.subline}} </h2>

      <div class="projects__title content__title">
        {{projects.title}}
      </div>

      <div
        v-html="getHTMLfromMD(projects.lead)"
        class="projects__lead"
      >
      </div>

      <div class="projects__listing">
        <div
          v-for="project in list"
          :key="project.title"
          ref="project"
          class="projects-list"
        >
          <router-link
            v-bind:to="'/projekte/'+project.uuid"
          >
            <h3 class="projects-list__subline">
              {{project.subline}}
            </h3>
            <p class="projects-list__title">
              {{project.title}}
            </p>
            <div class="projects-list__tags">
              {{project.tags}}
            </div>
          </router-link>
        </div>
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

