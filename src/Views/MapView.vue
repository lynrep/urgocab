<template>
  <div id="mapView" class="flex flex-col h-screen bg-gray-300">
    <div id="map"></div>
  </div>
</template>

<script>
import { onMounted } from "vue";

onMounted(() => {
  setTimeout(() => {
    initMap();
  }, 50);
});

const initMap = () => {
  const map = tt.map({
    key: "DH91sqcc9iFTpWTV7XDyZQ1mf1tT92LY",
    container: "map",
    dragPan: !isMobileOrTablet(),
  });

  map.addControl(new tt.FullscreenControl());
  map.addControl(new tt.NavigationControl());

  console.log(map);
};
</script>

<style>
#MapView {
  #map {
    width: 100%;
    height: 45vh;
    top: 0px;
    left: 0px;
  }
}
</style>
