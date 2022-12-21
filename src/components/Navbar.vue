<template>
  <nav>
    <div class="left">
      <div class="logo">
        <h1>Homesphere</h1>
      </div>
      <ul>
        <router-link class="list" to='/how'>How It Works</router-link>
        <router-link class="list" to='/features'>Features</router-link>
        <router-link class="list" to='/about'>About</router-link>
        <!-- <li>How It Works</li>
        <li>Features</li>
        <li>About</li> -->
      </ul>
    </div>
    <div class="right">
        <button>Contact Us</button>
    </div>
  </nav>
</template>
<script setup></script>
<style lang="scss" scoped>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // margin-top: 40px;
    padding: 40px;
    height: 100px;
    color: var(--text);
    background: var(--grey);
}

.logo h1 {
    font-size: 28px;
    font-weight: 500;
}

.left {
    flex: 3;
    display: flex;
    justify-content: space-evenly;
    // align-items: center;
}

ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 50%;
}

.list {
    list-style: none;
    color: var(--light);
    text-decoration: none;
}

.right {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
