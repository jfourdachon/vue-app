<template>
  <b-card class="card" no-body>
    <div class="header">
      <b-overlay :show="true" bg-color="#28b487" opacity="0.5" class="overlay">
        <template v-slot:overlay><div /></template>
        <b-card-img-lazy
          :src="require(`@/assets/img/tours/${image}`)"
          class="w-100 h-100"
        />
      </b-overlay>
      <b-card-title class="card-title"
        ><span>{{ name }}</span></b-card-title
      >
    </div>
    <p class="mt-2 pl-3">
      {{ difficulty | toUpperCase }} - {{ duration }} DAYS TOUR
    </p>
    <p class="mb-4 mt-3 pl-3">{{ summary }}</p>
    <b-container>
      <b-row align-v="center" class="pl-3">
        <b-icon icon="geo-alt" variant="success"></b-icon>
        <b-col class="pl-2" cols="5">{{ startLocation }}</b-col>
        <b-icon icon="calendar2-event-fill" variant="success"></b-icon>
        <b-col>{{ globalDate }}</b-col>
      </b-row>
      <b-row align-v="center" class="pl-3 py-2 mb-2">
        <b-icon icon="flag" variant="success"></b-icon>
        <b-col class="pl-2" cols="5">{{ stops }} stops</b-col>
        <b-icon icon="person" variant="success"></b-icon>
        <b-col>{{ maxGroupSize }}people</b-col>
      </b-row>
    </b-container>
    <b-card-footer>
      <b-row>
        <b-col cols="8">
          <b-card-text>${{ price }} per person</b-card-text>
          <b-card-text
            >{{ ratingsAverage }} rating ({{ ratingsQuantity }})</b-card-text
          >
        </b-col>
        <b-col align-self="center" cols="3">
          <b-row align-h="end">
            <b-button pill variant="green" href="#">Details</b-button>
          </b-row>
        </b-col>
      </b-row>
    </b-card-footer>
  </b-card>
</template>

<script>
import moment from "moment";
export default {
  name: "TourCard",
  data: function () {
    return {
      globalDate: "",
    };
  },
  props: [
    "name",
    "difficulty",
    "price",
    "duration",
    "image",
    "summary",
    "maxGroupSize",
    "ratingsAverage",
    "ratingsQuantity",
    "date",
    "stops",
    "startLocation",
  ],
  mounted: function () {
    const date = new Date(this.date);
    this.globalDate = moment(date).format("YYYY MMMM");
    console.log(this.globalDate);
  },
};
</script>

<style scoped lang="css" src="../assets/css/common.css"></style>
<style scoped lang="css" src="../assets/css/card.css"></style>

