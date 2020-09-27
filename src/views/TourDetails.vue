<template>
  <div>
    <b-row>
      <b-col class="header">
        <b-overlay
          :show="true"
          bg-color="#28b487"
          opacity="0.5"
          class="overlay"
        >
          <template v-slot:overlay><div /></template>
          <b-card-img-lazy
            :src="require(`@/assets/img/tours/${tour.data.imageCover}`)"
            class="w-100 h-100"
          />
        </b-overlay>
        <b-col class="header-content">
          <b-row class="title">
            <h1>{{ tour.data.name }} Tour</h1>
          </b-row>
          <b-row align-v="center" align-h="center" class="py-2 mt-4 pl-3">
            <b-row class="w-50" align-v="center">
              <b-icon icon="clock" font-scale="1.3" variant="light"></b-icon>
              <b-col class="pl-2 text-light bold" cols="6">
                {{ tour.data.duration }} DAYS
              </b-col>
            </b-row>
            <b-row align-v="center">
              <b-icon icon="geo-alt" variant="light"></b-icon>
              <b-col class="text-light bold">
                {{ tour.data.startLocation.description | toUpperCase }}
              </b-col>
            </b-row>
          </b-row>
        </b-col>
      </b-col>
    </b-row>
    <b-row class="description w-100">
      <b-row class="w-50 h-100 pt-5 description-left">
        <b-col class="description-left-content">
          <h3>Quick facts</h3>
          <b-row class="w-100" align-h="center">
            <b-row class="w-50 mt-3 mb-2 pl-5 ml-5">
              <b-icon
                icon="calendar2-event-fill"
                font-scale="1.3"
                variant="success"
              ></b-icon>
              <b-row class="w-50 text-secondary label pl-4">
                Next Date
              </b-row>
              <p class="text-secondary pl-5">{{ globalDate }}</p>
            </b-row>
          </b-row>
          <b-row class="w-100" align-h="center">
            <b-row class="w-50 mb-2 pl-5 ml-5" align-h="start">
              <b-icon
                icon="graph-up"
                font-scale="1.3"
                variant="success"
              ></b-icon>
              <b-row class="w-50 text-secondary label pl-4">DIFFICULTY</b-row>
              <p class="text-secondary pl-5 description-left-value">
                {{ tour.data.difficulty }}
              </p>
            </b-row>
          </b-row>
          <b-row class="w-100" align-h="center">
            <b-row class="w-50 mb-2 pl-5 ml-5" align-h="start">
              <b-icon icon="person" font-scale="1.3" variant="success"></b-icon>
              <b-row class="w-50 text-secondary label pl-4">
                PARTICIPANTS
              </b-row>
              <p class="text-secondary pl-5 description-left-value">
                {{ tour.data.maxGroupSize }}
              </p>
            </b-row>
          </b-row>
          <b-row class="w-100 mb-5" align-h="center">
            <b-row class="w-50 mb-3 pl-5 ml-5" align-h="start">
              <b-icon
                icon="calendar2-event-fill"
                font-scale="1.3"
                variant="success"
              ></b-icon>
              <b-row class="w-50 text-secondary label pl-4">
                Rating
              </b-row>
              <p class="text-secondary pl-5 description-left-value">
                {{ tour.data.ratingsAverage }} / 5
              </p>
            </b-row>
          </b-row>
          <h3>Your guides</h3>
        </b-col>
      </b-row>
      <b-row class="w-50 description-right">
        <b-col offset-md="2" class="description-right-content">
          <h3 class="mb-5">About {{tour.data.name}} Tour</h3>
          <b-row class="px-5 mx-5 text-secondary">
            {{tour.data.description}}
          </b-row>
        </b-col>
      </b-row>
    </b-row>
  </div>
</template>

<script>
import axios from '@/axios';
import moment from 'moment';
export default {
  name: 'TourDetails',
  data: function() {
    return {
      tour: {},
      globalDate: '',
    };
  },
  mounted: async function() {
    const result = await axios.get(`tours/name/${this.$route.params.name}`);
    this.tour = result.data.data;
    console.log(this.tour.data);

    const date = new Date(this.tour.data.startDates[0]);
    this.globalDate = moment(date).format('MMMM YYYY');
  },
};
</script>

<style scoped lang="css" src="../assets/css/common.css"></style>
<style scoped lang="css" src="../assets/css/tourDetails.css"></style>
