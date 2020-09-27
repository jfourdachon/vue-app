<template>
  <b-container fluid class="mt-5">
    <b-row align-h="center">
      <b-col md="10" lg="6" xl="4" v-for="tour in tours.data" :key="tour.id" class="my-4 px-4">
        <tour-card
          :name="tour.name"
          :image="tour.imageCover"
          :summary="tour.summary"
          :difficulty="tour.difficulty"
          :maxGroupSize="tour.maxGroupSize"
          :price="tour.price"
          :ratingsAverage="tour.ratingsAverage"
          :ratingsQuantity="tour.ratingsQuantity"
          :duration="tour.duration"
          :stops="tour.locations.length"
          :date="tour.startDates[0]"
          :startLocation="tour.startLocation.description"
          :slug="tour.slug"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "@/axios";
import TourCard from "../components/TourCard";

export default {
  name: "ToursOverview",
  data: function () {
    return {
      tours: [],
    };
  },
  components: {
    TourCard,
  },
  mounted: async function () {
    const result = await axios.get("tours");
    this.tours = result.data.data;
  },
  methods: {

  },
};
</script>
