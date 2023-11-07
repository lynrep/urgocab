<template>
  <div id="Directions" class="flex flex-col h-screen bg-indigo-800">
    <!-- new!!!!!!!!! -->
    <div class="grid grid-cols-12 mt-4 shadow-md">
      <div class="col-span-2 mx-auto">
        <div>
          <RouterLink :to="{ name: 'home' }">
            <ArrowIcon :size="35" />
          </RouterLink>
        </div>

        <div class="h-16 mt-4 w-full">
          <div :class="[isPickupActive ? 'circle-black' : 'circle-gray']"></div>
          <div class="line"></div>
          <div
            :class="[!isPickupActive ? 'square-black' : 'square-gray']"
          ></div>
        </div>
      </div>
      <div class="col-span-10 pr-4">
        <div class="w-full h-5"></div>
        <div class="mb-2 mt-5">
          <AutoCompleteInput
            theId="firstInput"
            v-model:input="pickup"
            placeholder="Enter pick-up location"
            @clearInput="clearInputFunc('firstInput')"
            @isActive="isPickupActive"
          />
        </div>

        <div class="mb-3">
          <AutoCompleteInput
            theId="secondInput"
            v-model:input="pickup"
            placeholder="Where to?"
            @clearInput="clearInputFunc('firstInput')"
            @isActive="!isPickupActive"
          />
        </div>
      </div>
    </div>
    <div class="flex items-center costom-border-bottom bg-gray-200">
      <div class="bg-gray-400 mx-5 my-3.5 p-1.5 rounded-full">
        <MapMarkerIcon :size="30" fillcolor="#f5f5f5" />
      </div>
      <div>
        <div class="text-lg text-gray-600">Barcelona, Spain</div>
        <div class="text-lg text-gray-400">Spain</div>
      </div>
    </div>

    <!-- new!!!!!!!!!!!!! -->
  </div>
</template>

<script>
//  New!!!!!!!!!!!!!!!
import AutoCompleteInput from "../components/AutoCompleteInput.vue";
import ArrowIcon from "vue-material-design-icons/ArrowLeft.vue";
import MapMarkerIcon from "vue-material-design-icons/MapMarker.vue";

export default {
  components: {
    ArrowIcon,
    AutoCompleteInput,
    MapMarkerIcon,
  },
  data() {
    return {
      isPickupActive: true,
      pickup: "",
    };
  },
};
// New!!!!!!!!!!!!!!!
</script>

<style>
/* new!!!!!!!!!!!!! */
#Directions {
  .circle-black {
    margin: 0 auto;
    width: 9px;
    height: 9px;
    background-color: black;
    border-radius: 100%;
  }

  .circle-gray {
    margin: 0 auto;
    width: 9px;
    height: 9px;
    background-color: rgb(191, 191, 191);
    border-radius: 100%;
  }

  .square-black {
    margin: 0 auto;
    width: 9px;
    height: 9px;
    background-color: black;
  }

  .square-gray {
    margin: 0 auto;
    width: 9px;
    height: 9px;
    background-color: rgb(191, 191, 191);
  }

  .line {
    margin: 0 auto;
    width: 2px;
    height: 45px;
    background-color: rgb(191, 191, 191);
  }
}
/* new!!!!!!!!!!!!! */
</style>
