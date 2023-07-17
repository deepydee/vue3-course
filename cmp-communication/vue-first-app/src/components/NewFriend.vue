<template>
  <form @submit.prevent="submitData">
    <div>
      <label
        >Name
        <input type="text" v-model="enteredName" />
      </label>
    </div>
    <div>
      <label>Phone <input type="tel" v-model="enteredPhone" /></label>
    </div>
    <div>
      <label>Email <input type="email" v-model="enteredEmail" /></label>
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ['add-contact'],
  data() {
    return {
      enteredName: '',
      enteredPhone: '',
      enteredEmail: ''
    }
  },
  methods: {
    submitData() {
      this.$emit('add-contact', this.enteredName, this.enteredPhone, this.enteredEmail)
      this.enteredName = ''
      this.enteredPhone = ''
      this.enteredEmail = ''
    }
  }
}
</script>

<style>
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
  font: inherit;
  padding: 0.15rem;
}

label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
}

form div {
  margin: 1rem 0;
}
</style>
