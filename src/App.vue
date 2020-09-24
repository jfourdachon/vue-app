<template>
  <div id="app">
    <div id="main">
      <navbar class="navbar" />

      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <prout class="footer" />
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Prout from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Prout,
  },
};
</script>
<style lang="scss">
#app {
  font-family: 'Comfortaa', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  // background-color: #252424;
  height: 100vh;
  margin: 3rem;
}

#main {
  background-color: #f7f7f7;
  height: calc(100% - 5rem);
  position: relative;
}

.navbar {
  width: 100%;
  height: 80px;
  padding: 0;
  margin-bottom: 1rem;
}

.footer {
  position: absolute;
  bottom: 0%;
  left: 1rem;
}

</style>
