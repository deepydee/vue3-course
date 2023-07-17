<template>
  <active-user :name="userName" :age="userAge"></active-user>
  <user-data @add-data="change"></user-data>
</template>

<script>
export default {
  data() {
    return {
      userName: 'No Name',
      userAge: 'No Age'
    }
  },
  methods: {
    change(name, age) {
      this.userName = name
      this.userAge = age
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}
</style>
