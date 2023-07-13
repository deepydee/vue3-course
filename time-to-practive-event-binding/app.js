const app = Vue.createApp({
  data() {
    return {
      text: 'Hello!',
      userInput: 'Output',
      userInputConfirmed: '',
    }
  },
  methods: {
    showAlert() {
      alert(this.text);
    },
    saveInput(event) {
      this.userInput = event.target.value;
    },
    saveInputConfirmed() {
      this.userInputConfirmed = this.userInput;
    }
  }
});

app.mount('#assignment');
