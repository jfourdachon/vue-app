<template>
  <div>
    <b-row class="header m-0">
      <b-overlay :show="true" bg-color="#28b487" opacity="0.2" class="overlay">
        <template v-slot:overlay><div /></template>
        <b-card-img-lazy
          :src="require(`@/assets/img/tours/${tour.imageCover}`)"
          class="w-100 h-100 img"
        />
      </b-overlay>
      <b-col class="header-content" sm="10" lg="4">
        <b-row class="title" align-h="center">
          <h1>{{ tour.name }} Tour</h1>
        </b-row>
        <b-row align-v="center" align-h="center" class="py-2 mt-4 pl-3">
          <b-row class="w-50" align-v="center">
            <b-icon icon="clock" font-scale="1.3" variant="light"></b-icon>
            <b-col class="pl-2 text-light bold" cols="6">
              {{ tour.duration }} DAYS
            </b-col>
          </b-row>
          <b-row align-v="center">
            <b-icon icon="geo-alt" variant="light"></b-icon>
            <b-col class="text-light bold">
              {{ tour.startLocation.description | toUpperCase }}
            </b-col>
          </b-row>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="description m-0">
      <b-col class="py-5 description-left" lg="6" md="12">
        <b-col class="description-left-content">
          <h3 class="mb-5">Quick facts</h3>
          <b-col offset="3">
            <b-row>
              <b-icon
                icon="calendar2-event-fill"
                font-scale="1.3"
                variant="success"
              ></b-icon>
              <b-row class="text-secondary label pl-4 w-25"> Next Date </b-row>
              <p class="text-secondary pl-5">{{ globalDate }}</p>
            </b-row>
            <b-row>
              <b-icon
                icon="graph-up"
                font-scale="1.3"
                variant="success"
              ></b-icon>
              <b-row class="text-secondary label pl-4 w-25">DIFFICULTY</b-row>
              <p class="text-secondary pl-5 description-left-value">
                {{ tour.difficulty }}
              </p>
            </b-row>
            <b-row>
              <b-icon icon="person" font-scale="1.3" variant="success"></b-icon>
              <b-row class="text-secondary label pl-4 w-25">
                PARTICIPANTS
              </b-row>
              <p class="text-secondary pl-5 description-left-value">
                {{ tour.maxGroupSize }}
              </p>
            </b-row>
            <b-row>
              <b-icon
                icon="calendar2-event-fill"
                font-scale="1.3"
                variant="success"
              ></b-icon>
              <b-row class="text-secondary label pl-4 w-25"> Rating </b-row>
              <p class="text-secondary pl-5 description-left-value">
                {{ tour.ratingsAverage }} / 5
              </p>
            </b-row>
          </b-col>
          <h3 class="my-4">Your guides</h3>
          <b-col offset="3" lg="9" v-for="guide in tour.guides" :key="guide.id">
            <b-row align-v="center" class="mb-3">
              <b-img
                rounded="circle"
                width="50"
                alt="Guide picture"
                :src="require(`@/assets/img/users/${guide.photo}`)"
              />
              <span
                v-if="guide.role === 'lead-guide'"
                class="text-secondary label ml-3"
                >LEAD GUIDE</span
              >
              <span v-else class="text-secondary label ml-3">TOUR GUIDE</span>
              <b-col class="text-secondary" offset="1">{{ guide.name }}</b-col>
            </b-row>
          </b-col>
        </b-col>
      </b-col>
      <b-col class="description-right" lg="6" md="12">
        <b-col offset-md="2" class="description-right-content">
          <h3 class="mb-5">About {{ tour.name }} Tour</h3>
          <b-row class="px-5 mx-5 text-secondary paragraph">
            {{ tour.description }}
          </b-row>
        </b-col>
      </b-col>
    </b-row>
    <b-row class="pictures m-0" cols="12">
      <b-col
        class="p-0"
        md="4"
        v-for="(image, index) in tour.images"
        :key="index"
      >
        <b-card-img-lazy
          :src="require(`@/assets/img/tours/${image}`)"
          v-bind:class="`index-${index}`"
          class="pic"
        />
      </b-col>
    </b-row>
    <div id="map" class="map">
      <vl-map
        :load-tiles-while-animating="true"
        :load-tiles-while-interacting="true"
        data-projection="EPSG:4326"
      >
        <vl-view
          :zoom.sync="zoom"
          :center.sync="center"
          :rotation.sync="rotation"
        ></vl-view>
        <vl-feature v-for="(coor, index) in coordinates" :key="index">
          <vl-geom-point :coordinates="coor"></vl-geom-point>
        </vl-feature>
        <vl-feature id="line-string" :properties="{prop: 'value', prop2: 'value'}">
          <vl-geom-line-string :coordinates="coordinates"></vl-geom-line-string>
      </vl-feature>
        <vl-geoloc @update:position="geolocPosition = $event">
          <template slot-scope="geoloc">
            <vl-feature v-if="geoloc.position" id="position-feature">
              <vl-geom-point :coordinates="geoloc.position"></vl-geom-point>
              <vl-style-box>
                <vl-style-icon
                  src="_media/marker.png"
                  :scale="3"
                  :anchor="[0.5, 1]"
                ></vl-style-icon>
              </vl-style-box>
            </vl-feature>
          </template>
        </vl-geoloc>

        <vl-layer-tile id="osm">
          <vl-source-osm></vl-source-osm>
        </vl-layer-tile>
      </vl-map>
    </div>
  </div>
</template>

<script>
import axios from "@/axios";
import moment from "moment";

export default {
  name: "TourDetails",
  data: function () {
    return {
      tour: {},
      globalDate: "",
      zoom: 9,
      rotation: 0,
      center: [],
      geolocPosition: [],
      coordinates: []
    };
  },
  mounted: async function () {
    const result = await axios.get(`tours/name/${this.$route.params.name}`);
    this.tour = result.data.tour;
    this.center = result.data.tour.startLocation.coordinates;
    const date = new Date(this.tour.startDates[0]);
    this.globalDate = moment(date).format("MMMM YYYY");
    result.data.tour.locations.map(loc => {
      this.coordinates.push(loc.coordinates)
    })
  },
};
</script>

<style scoped lang="css" src="../assets/css/common.css"></style>
<style scoped lang="css" src="../assets/css/tourDetails.css"></style>
