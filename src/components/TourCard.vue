<template>
  <b-card class="card h-100" no-body>
    <b-overlay :show="true" bg-color="#28b487" opacity="0.5" class="overlay">
      <template v-slot:overlay><div /></template>
      <b-card-img-lazy
        :src="require(`@/assets/img/tours/${image}`)"
        class="w-100 h-100"
      />
    </b-overlay>
    <b-card-title class="card-title">
      <span>{{ name }}</span>
    </b-card-title>
    <b-container class="px-4 h-100">
      <b-col class="mt-2 upper">
        {{ difficulty | toUpperCase }} - {{ duration }} DAYS TOUR
      </b-col>
      <b-col class="mb-4 mt-3 h-25 summary text-secondary">{{ summary }}</b-col>
      <b-col>
        <b-row align-v="center" class="pl-3">
          <b-icon icon="geo-alt" variant="success"></b-icon>
          <b-col class="pl-2 text-secondary" cols="5">{{
            startLocation
          }}</b-col>
          <b-icon icon="calendar2-event-fill" variant="success"></b-icon>
          <b-col class="text-secondary">{{ globalDate }}</b-col>
        </b-row>
        <b-row align-v="center" class="py-2 mb-2 pl-3">
          <b-icon icon="flag" variant="success"></b-icon>
          <b-col class="pl-2 text-secondary" cols="5">{{ stops }} stops</b-col>
          <b-icon icon="person" variant="success"></b-icon>
          <b-col class="text-secondary">{{ maxGroupSize }}people</b-col>
        </b-row>
      </b-col>
    </b-container>
    <b-card-footer>
      <b-row class="px-4">
        <b-col cols="8">
          <b-card-text class="text-secondary">
            <strong>${{ price }}</strong> per person
          </b-card-text>
          <b-card-text class="text-secondary">
            <strong>{{ ratingsAverage }}</strong> rating ({{ ratingsQuantity }})
          </b-card-text>
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
import moment from 'moment';
export default {
  name: 'TourCard',
  data: function() {
    return {
      globalDate: '',
    };
  },
  props: [
    'name',
    'difficulty',
    'price',
    'duration',
    'image',
    'summary',
    'maxGroupSize',
    'ratingsAverage',
    'ratingsQuantity',
    'date',
    'stops',
    'startLocation',
  ],
  mounted: function() {
    const date = new Date(this.date);
    this.globalDate = moment(date).format('YYYY MMMM');
    console.log(this.globalDate);
  },
};
</script>

<style scoped lang="css" src="../assets/css/common.css"></style>
<style scoped lang="css" src="../assets/css/card.css"></style>
