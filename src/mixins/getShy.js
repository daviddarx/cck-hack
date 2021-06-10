export default {
  methods: {
    getShy: function (string) {
      return string.replaceAll('///', '&shy;');
    }
  }
}
