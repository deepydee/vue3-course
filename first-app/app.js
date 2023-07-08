Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: '',
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    }
  },
}).mount('#app');


// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// const addGoal = () => {
//   const enteredValue = inputEl.value;
//   const listItem = document.createElement('li');
//   listItem.textContent = enteredValue;
//   listEl.append(listItem);
//   inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);
