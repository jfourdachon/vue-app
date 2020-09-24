<template>
  <div class="main-form">
    <b-container>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="form">
        <b-form-group
          id="input-group-1"
          label="Email address"
          label-for="input-3"
          class="label"
        >
          <b-form-input id="input-3" v-model="form.email" type="email" required>
          </b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Password"
          label-for="input-4"
          class="label"
        >
          <b-form-input
            id="input-4"
            v-model="form.password"
            type="password"
            required
          >
          </b-form-input>
        </b-form-group>
        <b-button class="submit-btn" type="submit" variant="primary"
          >Submit</b-button
        >
        <b-button class="reset-btn" type="reset" variant="danger"
          >Reset</b-button
        >
      </b-form>
    </b-container>
  </div>
</template>

<script>
import axios from '@/axios';
export default {
  name: 'SigninForm',
  data() {
    return {
      form: {
        email: '',
        firstname: '',
        lastname: '',
        dateOfBirth: '',
        password: '',
      },
      show: true,
      max: new Date(),
    };
  },
  methods: {
    async createUser() {
      await axios.post('user/register', this.form);
    },
    onSubmit(evt) {
      evt.preventDefault();
      // Post info on Node serve with vue resource
      this.createUser().catch((err) => console.log({ err }));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = '';
      this.form.firstname = '';
      this.form.lastname = '';
      this.form.dateOfBirth = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css" src="../assets/css/form.css"></style>

