<template>
  <div>
   {{tour.data.name}}
  </div>
</template>

<script>
import axios from '@/axios';

export default {
  name: 'TourDetails',
  data: function() {
    return {
      tour: {},
    };
  },
  mounted: async function() {
    const result = await axios.get(`tours/name/${this.$route.params.name}`);
    this.tour = result.data.data;
    console.log(this.tour.data);
  },
};
</script>
