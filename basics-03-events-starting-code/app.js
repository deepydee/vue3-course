const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullname: '',
      confirmedName: '',
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        setTimeout(() => {
          this.counter = 0;
        }, 2000);
      }
    }
    // name(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //     return;
    //   }

    //   this.fullname = `${value} ${this.lastName}`;
    // },
    // lastName(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //     return;
    //   }

    //   this.fullname = `${this.name} ${value}`;
    // }
  },
  computed: {
    fullname() {
      console.log('Running');
      if (this.name === '' || this.lastName === '') {
        return '';
      }

      return `${this.name} ${this.lastName}`;
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
