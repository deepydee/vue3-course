const app = Vue.createApp({
  data() {
    return {
      enteredTask: '',
      tasks: [],
      isShown: true,
    }
  },
  computed: {
    buttonCaption() {
      return this.isShown ? 'Hide List' : 'Show List'
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
      this.enteredTask = '';
    },
    deleteTask(idx) {
      this.tasks.splice(idx, 1);
    },
    toggleList() {
      this.isShown = !this.isShown;
    }
  }
});

app.mount('#assignment');
