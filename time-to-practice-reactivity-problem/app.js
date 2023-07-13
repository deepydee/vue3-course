const app = Vue.createApp({
  data() {
    return {
      result: 0,
    }
  },
  watch: {
    output() {
      // console.log(this.result);
      setTimeout(() => {
        this.result = 0;
      }, 5000);
    }
  },
  computed: {
    output() {
      switch(true) {
        case (this.result < 37):
          return 'Not there yet!';
        case (this.result === 37):
          return this.result;
        case (this.result > 37):
          return 'Too much!';
      }
    }
  },
  methods: {
    addCounter(value) {
      this.result += value;
    },
  }
});

app.mount('#assignment');
