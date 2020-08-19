<template>
  <div class="main-form">
    <h1>Sign Up Form</h1>
    <b-container>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="form">
        <b-form-group id="input-group-1" label="Firstname:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.firstname"
            type="text"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Your Lastname:"
          label-for="input-2"
        >
          <b-form-input id="input-2" v-model="form.lastname" required>
          </b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-3"
        >
          <b-form-input id="input-1" v-model="form.email" type="email" required>
          </b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Date of birth:"
          label-for="input-4"
        >
          <b-form-datepicker
            id="input-4"
            v-model="form.dateOfBirth"
            type="date"
            required
            :max="max"
            placeholder=""
            locale="en"
            :dark="true"
            :date-format-options="{
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
            }"
            :label-no-date-selected="'Select a date'"
            :label-help="{}"
          ></b-form-datepicker>
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
// import Home from "./Home.vue";
export default {
  name: "Form",
  components: {},
  props: {
    msg: String,
  },
  data() {
    return {
      form: {
        email: "",
        firstname: "",
        lastname: "",
        dateOfBirth: "",
      },
      show: true,
      max: new Date(),
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
      // Post info on Node serve with vue resource
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.firstname = "";
      this.form.lastname = "";
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
<style scoped>
.main-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1 {
  margin-bottom: 70px;
}
.form {
  width: 50%;
  margin: auto;
}
.submit-btn {
  margin-right: 10px;
}
.reset-btn {
  margin-left: 10px;
}
</style>
