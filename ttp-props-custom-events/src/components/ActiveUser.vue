<template>
  <header>
    <h2>{{ name }}</h2>
    <h3>{{ age }}</h3>
  </header>
</template>

<script>
export default {
  props: ['name', 'age']
}
</script>

<style scoped>
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: white;
  margin: 0 0 1rem 0;
}
</style>
