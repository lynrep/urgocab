<template>
  <div id="mapView" class="flex flex-col h-screen">
    <div id="map"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  setTimeout(() => {
    initMap();
  }, 50);
});

const initMap = () => {
  const map = new window.google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });

  console.log(map);
};
</script>

<style>
#mapView {
  #map {
    width: 100%;
    height: 45vh;
    top: 0px;
    left: 0px;
  }
}
</style>
