
<template>
  <div
    :class="{ 'is-displayed': this.isDisplayed }"
    class="about"
  >
    <div class="column column--centered">

      <h2 class="about__subline subline content__subtitle"> {{about.subline}} </h2>

      <div
        class="about__title content__title"
        v-html="getShy(about.title)"
      >
      </div>
    </div>

    <div class="column column--wide">
      <img
        :src = about.image
        @load="imgLoaded"
        alt="Cédric Knapp"
        class="img-to-load about__img"
      >
    </div>

    <div class="column column--centered">
      <div
        v-html="getHTMLfromMD(about.lead)"
        class="about__lead"
      >
      </div>

      <div class="about__cv">
        <a
          :href = about.cvdocde
          target="_blank"
          class="about__cta cta"
        >
          {{about.cvlabelde}}
        </a>

        <a
          :href = about.cvdocen
          target="_blank"
          class="about__link cta"
        >
          {{about.cvlabelen}}
        </a>
      </div>
    </div>

    <div class="column column--centered">
      <h3 class="content__subline subline">
        {{about.positionstitle}}
      </h3>

      <div class="about__positions">
        <div
          v-for="position in about.positions"
          :key="position.title"
          class="about__position"
        >
          <h4>
            <span class="about__position-title">
              {{position.agency}}
            </span>
            <span class="about__position-dates subline">
              {{position.dates}}
            </span>
          </h4>
          <div
            class="about__position-desc"
            v-html="getHTMLfromMD(position.description)"
          >
          </div>
        </div>
      </div>
    </div>

    <div class="column column--centered">
      <h3 class="content__subline subline">
        {{about.languagestitle}}
      </h3>

      <div class="about__languages">
        <div
          v-for="language in about.languages"
          :key="language.title"
          :rel="language.title"
          ref="language"
          class="about__language"
        >
          <span class="about__language-title">
            {{language.language}}
          </span>
          <div class="about__language-value value">
            {{language.level}}
          </div>
        </div>
      </div>

      <h3 class="content__subline subline">
        {{about.skillstitle}}
      </h3>

      <div class="about__skills">
        <span
          v-for="skill in about.skills"
          :key="skill.title"
          class="about__skill tag"

        >
          {{skill.skill}}
        </span>
      </div>

      <h3 class="content__subline subline">
        {{about.clientstitle}}
      </h3>

      <div
        v-html="getHTMLfromMD(about.clients)"
        class="about__clients"
      >
      </div>

      <h3 class="content__subline subline">
        {{about.contacttitle}}
      </h3>

      <div
        v-html="getHTMLfromMD(about.contact)"
        class="about__contact"
      >
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
  import imgToLoad from '../../mixins/imgToLoad';

  export default Vue.extend({
    components: {
      'custom-footer': CustomFooter,
    },
    mixins: [
      getHTMLfromMDMixin,
      getShyMixin,
      imgToLoad
    ],
    data() {
      return {
        about: contents.about,
        isDisplayed : false,
      }
    },
    mounted () {
      setTimeout(this.display, 100);

      this.setLanguagesLevels();
    },
    methods: {
      display: function () {
        if (this.$parent.isLoaded == true) {
          this.isDisplayed = true;
        }
      },
      setLanguagesLevels: function () {
        this.$refs.language.forEach(language => {
          const value = language.querySelector('.value')
          const level = parseInt(value.innerHTML);

          value.innerHTML = '';

          for (let i = 0; i < 5; i++) {
            const span = document.createElement("span");

            if (i <= level - 1) {
              span.classList.add('active');
            }
            value.appendChild(span);
          }
        });
      }
    }
  });
</script>

