<template>
  <div id="app">
    <div id="main">
      <app-nav-bar class="navbar" />
      <router-view />
      <app-footer class="footer" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
};
</script>
<style lang="scss">
#app {
  font-family: 'Comfortaa', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // color: #2c3e50;
  // background-color: #252424;
  // height: 100;
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
  // position: absolute;
  // bottom: 0%;
  // left: 1rem;
}

</style>
