<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">All tours</b-navbar-brand>
      <b-img
        v-bind="mainProps"
        center
        src="@/assets/img/logo-white.png"
        alt="Center image"
      ></b-img>
      <b-navbar-nav>
        <b-nav-item
          ><b-button pill variant="outline-success" href="#" :pressed="true" class="button"
            >Login</b-button
          ></b-nav-item
        >
        <b-nav-item
          ><b-button pill variant="outline-success" href="#" :pressed="true" class="button"
            >Sign up</b-button
          ></b-nav-item
        >
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      mainProps: { width: '45%', height: 'auto' },
    };
  },
};
</script>

<style scoped>
  .button:hover {
    transform: scale(1.07)
  }
</style>
