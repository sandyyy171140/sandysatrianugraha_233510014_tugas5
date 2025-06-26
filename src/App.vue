<template>
  <div>
    <nav>
      <router-link to="/">Todo</router-link> |
      <router-link to="/home">Home</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
nav {
  padding: 10px;
  background: #333;
  color: white;
}
a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
}
.container {
  max-width: 700px;
  margin: auto;
  padding: 20px;
}
</style>
