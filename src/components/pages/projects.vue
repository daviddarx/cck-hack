
<template>
  <div
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
    class="projects"
  >
    <div class="column column--centered">

      <h2 class="projects__subline subline"> {{projects.subline}} </h2>

      <div class="projects__title content__title">
        {{projects.title}}
      </div>

      <div
        v-html="getHTMLfromMD(projects.lead)"
        class="projects__lead"
      >
      </div>
    </div>

    <div class="projects__listing">
      <div
        v-for="project in list"
        :key="project.uuid"
        ref="project"
        class="projects-list"
      >
        <router-link
          v-bind:to="'/portfolio/'+project.uuid"
          class="projects-list__link"
        >
          <h3 class="projects-list__subline subline">
            {{project.subline}}
          </h3>
          <p
            class="projects-list__title"
            v-html="getShy(project.title)"
          >
          </p>
          <div
            v-html="getProjectTags(project.tags)"
            class="projects-list__tags"
          >
          </div>
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
  import getShyMixin from '../../mixins/getShy';
  import projectTags from '../../mixins/projectTags';

  export default Vue.extend({
    components: {
      'custom-footer': CustomFooter,
    },
    mixins: [
      getHTMLfromMDMixin,
      getShyMixin,
      projectTags
    ],
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

