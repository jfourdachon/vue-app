<template>
  <div class="main-row">
    <b-card>
    <b-card-img :src="require(`@/assets/img/tours/${image}`)"></b-card-img>
      <p>{{ name }}</p>
      <p>{{ difficulty }}</p>
      <p>{{ price }}</p>
      <p>{{ duration }}</p>
      <p>{{ date }}</p>
      <p>{{ summary }}</p>
      <p>{{ maxGroupSize }}</p>
      <p>{{ ratingsAverage }}</p>
      <p>{{ ratingsQuantity }}</p>
      <p>{{ startLocation }}</p>
      <p>{{ stops }}</p>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'TourCard',
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
};
</script>

<style scoped>
.main-row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
