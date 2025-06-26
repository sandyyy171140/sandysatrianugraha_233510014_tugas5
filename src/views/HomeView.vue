<template>
  <div class="home-container">
    <h1>🏠 Selamat datang di halaman Home</h1>
    <p>Gunakan menu di atas untuk mengelola tugasmu!</p>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.home-container {
  max-width: 700px;
  margin: 40px auto;
  padding: 30px;
  background-color: #1f1f1f;
  color: #e0e0e0;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 0 10px #000;
}

h1 {
  margin-bottom: 10px;
}
</style>
