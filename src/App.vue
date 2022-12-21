<template>
  <div class="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>

<style lang="scss">
:root {
  --grey: #6d7ea1;
  // --grey: #b4d7f7;
  --light: #f1f5f9;
  --text: #f1f6fe;
  --navbar-width: 100%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira sans', sans-serif;
}

body {
  background: var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  border-radius: 50px;
  outline: none;
  background: #0a47f5;
  color: #fff;
  padding: 15px;
  width: 50%;
  font-size: 18px;
}
</style>
