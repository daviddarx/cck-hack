export default {
  methods: {
    getProjectTags: function (tags) {
      const tagsList = tags.split(', ');
      let DOM = '';

      tagsList.forEach(tag => {
        DOM += `<span class="tag">${tag}</span>`;
      });

      console.log(DOM);

      return DOM;
    }
  }
}
