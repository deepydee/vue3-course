<template>
  <form @submit.prevent="submit">
    <div class="wrapper">
      <label for="user-name">Name: </label>
      <input v-model="enteredName" id="user-name" type="text" />
      <label for="user-age">Age: </label>
      <input v-model="enteredAge" id="user-age" type="text" />
    </div>
    <button>Change</button>
  </form>
</template>

<script>
export default {
  emits: ['add-data'],
  data() {
    return {
      enteredName: '',
      enteredAge: ''
    }
  },
  methods: {
    submit() {
      this.$emit('add-data', this.enteredName, this.enteredAge)
      this.enteredName = ''
      this.enteredAge = ''
    }
  }
}
</script>

<style scoped>
form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

input {
  border: none;
  background-color: #e9e9e9;
  border-radius: 9px;
  font: inherit;
  padding: 0.15rem;
  margin-right: 1rem;
}

label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
}

.wrapper {
  margin-bottom: 2rem;
}

button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

button:hover,
button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
