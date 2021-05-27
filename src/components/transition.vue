
<template>
  <div
    class="transition"
  >
    <transition
      name="transition"
      v-on:after-enter="aferEnterIn"
    >
      <div
        class="transition__container"
        v-if="this.isDisplayingIn"
      >
        <div
          class="transition__words"
          v-bind:class="{
            'pos-01': this.wordsPosCurrentID==0,
            'pos-02': this.wordsPosCurrentID==1,
            'pos-03': this.wordsPosCurrentID==2,
          }"
        >
          <div
            class="transition-word transition-word--01"
          >
            {{ this.wordsDir[0] }}
          </div>
          <div
            class="transition-word transition-word--02"
          >
            {{ this.wordsDir[1] }}
          </div>
          <div
            v-bind:html="this.wordsDir[2]"
            class="transition-word transition-word--03"
          >
            {{ this.wordsDir[2] }}
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  import Vue from "vue";
  import contents from '../contents';

  export default Vue.extend({
    data() {
      return {
        words: contents.transitions.words,
        isDisplayingIn: false,
        isDisplayingOut: false,
        nextFunction: undefined,
        wordsDir: [
          "Word 1",
          "Word 2",
          "Word 3"
        ],
        wordsSetCurrentID: 0,
        wordsPosTotal: 3,
        wordsPosCurrentID: 0,
      }
    },
    mounted () {
      this.$router.beforeEach(this.beforeEach);

      this.setWords();

      // for positioning preview, outside transition
      // document.body.addEventListener('click', ()=>{
      //   this.updateWordsSets();
      //   this.updateWordsPositions();
      // });
    },
    methods: {
      beforeEach: function (to, from, next) {
        document.body.classList.add('transition-out');

        this.isDisplayingIn = true;
        this.nextFunction = next;

        // final setting, inside transition
        this.updateWordsSets();
        this.updateWordsPositions();
      },
      aferEnterIn: function() {
        document.body.classList.remove('transition-out');

        this.isDisplayingIn = false;
        this.nextFunction();
        this.isDisplayingOut = true;
      },
      afterEnterOut: function() {
        this.isDisplayingOut = false;
      },
      setWords: function () {
        this.words.forEach((word, i) => {
          this.words[i] = word.word;
        });

        this.randomizeWords();
      },
      randomizeWords: function () {
        let currentIndex = this.words.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = this.words[currentIndex];
          this.words[currentIndex] = this.words[randomIndex];
          this.words[randomIndex] = temporaryValue;
        }
      },
      updateWordsSets: function () {
        const wordsDirLength = this.wordsDir.length;

        this.wordsDir = [];

        for (let i=0; i<wordsDirLength; i++) {
          this.wordsDir[i] = this.words[this.wordsSetCurrentID];

          this.wordsSetCurrentID = (this.wordsSetCurrentID+1 < this.words.length) ? this.wordsSetCurrentID+1 : 0;
        }
      },
      updateWordsPositions: function () {
        this.wordsPosCurrentID = (this.wordsPosCurrentID+1 <= this.wordsPosTotal-1 ) ? this.wordsPosCurrentID+1 : 0;
      }
    }
  });
</script>
