<template>
  <div id="main-colum-center">
    <!-- <div id="title">
      <div
        v-bind:class="{ isSignupActive: isSignupActive, 'title-signup': true }"
        @click="showSignUp"
      >
        <h2>Sign Up</h2>
      </div>
      <div
        class="title-signin"
        v-bind:class="{ isSigninActive: isSigninActive, 'title-signin': true }"
        @click="showSignin"
      >
        <h2>Sign In</h2>
      </div>
    </div>
    <transition name="bounce1" mode="out-in">
      <signup-form v-show="isSignupActive" key="isSignupActive" />
    </transition>
    <transition name="bounce1" mode="out-in">
      <signin-form v-show="isSigninActive" key="isSigninActive" />
    </transition>-->
      <tours-overview />
  </div> 
</template>

<script>
// @ is an alias to /src
// import SigninForm from '@/components/SigninForm.vue';
// import SignupForm from '@/components/SignupForm.vue';
import ToursOverview from '@/layouts/ToursOverview.vue'

export default {
  name: 'Home',
  components: {
    // SigninForm,
    // SignupForm,
    ToursOverview
  },
  data() {
    return {
      isSignupActive: true,
      isSigninActive: false,
      isShowed: false,
    };
  },
  methods: {
    showSignUp() {
      if (!this.isSignupActive) {
        setTimeout(() => {
          this.isSignupActive = true;
        }, 500);
        this.isSigninActive = false;
      }
    },
    showSignin() {
      if (!this.isSigninActive) {
        setTimeout(() => {
          this.isSigninActive = true;
        }, 500);
        this.isSignupActive = false;
      }
    },
  },
  mounted () {
    setTimeout(() => {
      this.isShowed = true
    }, 3500);
  }
};
</script>

<style scoped lang="css" src="../assets/css/home.css"></style>
