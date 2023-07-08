const app = Vue.createApp({
  data() {
    return {
      name: 'Vitalii',
      age: 33,
      imageLink: 'https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg',
    };
  },
  methods: {
    calculateAge(age) {
      return this.age + age;
    },
    getRandomNumber() {
      return Math.random().toFixed(2);
    }
  }
});

app.mount('#assignment');
