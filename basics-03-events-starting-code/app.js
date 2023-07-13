const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  computed: {
    fullname() {
      console.log('Running');
      if (this.name === '') {
        return '';
      }

      return `${this.name} Semenoff`;
    }
  },
  methods: {
    add(num) {
      this.counter += num;
    },
    subtract(num) {
      this.counter -= num;
    },
    setName(event) {
      this.name = event.target.value;
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    outputFullName() {
      console.log('Running');
      if (this.name === '') {
        return '';
      }

      return `${this.name} Semenoff`;
    },
    submitForm() {
      alert('Submitted!');
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
