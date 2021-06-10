
<template>
  <div
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
    class="project"
  >
    <div class="column column--centered">

      <h2 class="project__subline subline"> {{content.subline}} </h2>

      <span class="project__year">
        {{content.year}}
      </span>
      <span class="project__agency">
        {{content.agency}}
      </span>

      <div class="project__title content__title">
        {{content.title}}
      </div>

      <div
        v-html="getProjectTags(content.tags)"
        class="project__tags"
      >
      </div>

      <div class="project__metas">

      </div>

      <div
        v-html="getHTMLfromMD(content.lead)"
        class="project__lead"
      >
      </div>
    </div>

    <div
      v-if="content.images && content.images.length"
      class="project__images"
    >
      <div
        v-for="(img, i) in content.images"
        :key="img.image+i"
        ref="image"
        class="project__image"
      >
        <img
          :src = img.image
          :alt = content.title
          class = "img-to-load project__image-el"
          @load="imgLoaded"
        >
      </div>
    </div>

    <div
      v-if="content.imagesduos && content.imagesduos.length"
      class="project__images-duos"
    >
      <div
        v-for="(duo, i) in content.imagesduos"
        :key="duo.imageleft+i"
        ref="imageduo"
        class="images-duo"
      >
        <img
          :src = duo.imageduo.imageleft
          :alt = content.title
          class = "img-to-load images-duo__img images-duo__img--left"
          @load="imgLoaded"
        >
        <img
          :src = duo.imageduo.imageright
          :alt = content.title
          class = "img-to-load images-duo__img images-duo__img--right"
          @load="imgLoaded"
        >
      </div>
    </div>

    <div
      class="project__videos"
    >
      <div
        v-for="(vid, i) in content.videos"
        :key="vid.vimeoid+i"
        class="project__video"
      >
        <vimeo-player
          ref="player"
          :video-id="vid.vimeoid"
          :options="{'responsive':true}"
          class="project__video-el"
        >
        </vimeo-player>
      </div>
    </div>

    <div class="column column--centered">
      <h3
        v-if="content.links && content.links.length"
        class="content__subtitle subline"
      >
        Links
      </h3>

      <div
        v-if="content.links && content.links.length"
        class="project__links"
      >
        <a
          v-for="(link, i) in content.links"
          :key="link.linkurl+i"
          :href="link.linkurl"
          target="_blank"
          class="project__link"
        >
          {{ link.linklabel }}
        </a>
      </div>

      <h3
        v-if="content.credits"
        class="content__subtitle subline"
      >
        Credits
      </h3>

      <div
        v-if="content.credits"
        v-html="getHTMLfromMD(content.credits)"
        class="project__credits"
      >
      </div>
    </div>

    <div class="project__pagination pagination">
      <router-link
        v-bind:to="this.linkPrev.path"
        class="pagination-link pagination-link--prev"
      >
        <span class="pagination-link__subline subline">
          Prev
        </span>

        <span class="pagination-link__title">
          {{this.linkPrev.title}}
        </span>

        <div class="pagination-link__arrow arrow"></div>
      </router-link>

      <router-link
        v-bind:to="this.linkNext.path"
        class="pagination-link pagination-link--next"
      >
        <span class="pagination-link__subline subline">
          Next
        </span>

        <span class="pagination-link__title">
          {{this.linkNext.title}}
        </span>

        <div class="pagination-link__arrow pagination-link__arrow--next arrow"></div>
      </router-link>
    </div>

    <custom-footer></custom-footer>
  </div>
</template>

<script>
  import { vueVimeoPlayer } from 'vue-vimeo-player'
  import Vue from "vue";
  import CustomFooter from '../footer.vue';
  import contents from '../../contents';
  import getHTMLfromMDMixin from '../../mixins/getHTMLFromMD';
  import imgToLoad from '../../mixins/imgToLoad';
  import projectTags from '../../mixins/projectTags';

  Vue.use(vueVimeoPlayer);

  export default Vue.extend({
    components: {
      'custom-footer': CustomFooter,
      'vimeo-player': vueVimeoPlayer,
    },
    mixins: [
      getHTMLfromMDMixin,
      imgToLoad,
      projectTags
    ],
    computed: {
      content: function () {
        return this.$route.meta.content;
      },
      id: function () {
        return this.$route.meta.id;
      },
      linkNext: function () {
        const id = (this.id < this.projectsList.length - 1 ) ? this.id + 1: 0;

        return {
          path: '/portfolio/'+this.projectsList[id].uuid,
          title: this.projectsList[id].title
        }
      },
      linkPrev: function () {
        const id = (this.id == 0 ) ? this.projectsList.length - 1 : this.id - 1 ;

        return {
          path: '/portfolio/'+this.projectsList[id].uuid,
          title: this.projectsList[id].title
        }
      }
    },
    data() {
      return {
        projectsList: contents.projectsList,
        isDisplayed : false,
      }
    },
    mounted () {
      setTimeout(this.display, 100);
      console.log(this.content);
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

