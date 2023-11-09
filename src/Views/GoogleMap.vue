<template>
  <div id="googlemap" class="flex flex-col h-screen">
    <GoogleMap
      api-key="GOOGLE_MAPS_API_KEY"
      style="width: 100%; height: 500px"
      :center="{ lat: lat, lng: lng }"
      :zoom="17"
    >
      <Marker :options="{ position: { lat: lat, lng: lng }, label }" />

      <Marker :options="{ position: { lat: lat, lng: lng } }" />
    </GoogleMap>

    <div class="flex justify-between">
      <GoogleAddressAutocomplete
        v-model="origin"
        class="bg-indigo-500 text-xl py-4 px-4 rounded-lg w-full m-4 text-indigo-50"
        placeholder="Enter origin"
      />

      <GoogleAddressAutocomplete
        v-model="destination"
        class="bg-indigo-500 text-xl py-4 px-4 rounded-lg w-full m-4 text-indigo-50"
        placeholder="Enter destination"
      />

      <button
        @click="findPlace"
        class="bg-indigo-500 text-xl py-4 px-4 rounded-lg m-4 text-indigo-50"
      >
        Search
      </button>
      <button
        @click="clearMap"
        class="bg-indigo-500 text-xl py-4 px-4 rounded-lg m-4 text-indigo-50"
      >
        Clear
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
import GoogleAddressAutocomplete from "vue3-google-address-autocomplete";

export default {
  components: { GoogleMap, Marker, GoogleAddressAutocomplete },
  data() {
    return {
      lat: null,
      lng: null,
    };
  },
  created() {
    this.$getLocation()
      .then((coordinates) => {
        console.log(coordinates);
        this.lat = coordinates.lat;
        this.lng = coordinates.lng;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    findPlace() {
      this.markers = [{ position: origin }, { position: destination }];
    },

    clearMap() {
      this.origin = [];
      this.destination = [];
    },
  },
};
</script>
