<template>
  <div class="row">
    <b-img
      v-bind="mainProps"
      left
      src="@/assets/img/logo-green.png"
      alt="Footer logo"
    ></b-img>
    <p>Powered by Julien Fourdachon</p>
  </div>
</template>

<script>
export default {
  name: 'Prout',
  data() {
    return {
      mainProps: { width: '170%', height: 'auto' },
    };
  },
};
</script>

<style scoped lang="css" src="../assets/css/footer.css"></style>
