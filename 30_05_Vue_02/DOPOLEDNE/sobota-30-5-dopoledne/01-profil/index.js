'use strict';

new Vue({
  el: "#app",
  data: {
    name: "Marketa",
    about: "I like classical music.",
    imgSrc: "piano",
    imgAlt: "piano",
    favMusicians: ["Chopin", "Rachmanninof", "Tchaikovskij"]
  },
  methods: {
    showInfo() {
      this.name = "Anezka"
      this.about = "I like jazz.",
      this.imgSrc = "jazz",
      this.imgAlt = "jazz"
      this.favMusicians = ["Nina Simone", "Ella Fitzgerald", "Ray Charles"]
    }
  }
})