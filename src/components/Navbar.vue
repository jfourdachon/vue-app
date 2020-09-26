<template>
  <div>
    <b-navbar type="dark" variant="dark" class="relative-row">
      <b-row class="w-100 px-5 mx-0" align-v="center" align-h="between">
        <b-navbar-brand class="home" href="#">All tours</b-navbar-brand>
        <b-img
          v-bind="mainProps"
          center
          src="@/assets/img/logo-white.png"
          alt="Center image"
          class="centered-logo"
        ></b-img>
        <b-navbar-nav>
          <b-nav-item
            ><b-button
              pill
              variant="green"
              href="#"
              :pressed="true"
              class="button"
              >Login</b-button
            ></b-nav-item
          >
          <b-nav-item
            ><b-button pill variant="green" href="#" :pressed="true"
              >Sign up</b-button
            ></b-nav-item
          >
        </b-navbar-nav>
      </b-row>
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

<style scoped lang="css" src="../assets/css/navbar.css"></style>
<style scoped lang="css" src="../assets/css/common.css"></style>
