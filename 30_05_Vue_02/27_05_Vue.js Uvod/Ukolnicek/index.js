console.log("funguju")
new Vue({
  el: "#app",
  data: {
    tasks: ["dishes", "laundry", "hoover", "mop", "cook"],
  },
  methods: {
    taskDone(index) {
      this.tasks.splice(index, 1);
    },

    addTask() {
      this.tasks.push("learn JS!")
    }
  }
})