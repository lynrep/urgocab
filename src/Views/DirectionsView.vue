<template>
  <div id="Directions" class="flex flex-col h-screen bg-gray-300">
    <!-- new!!!!!!!!! -->
    <div class="grid grid-cols-12 mt-4 shadow-md">
      <div class="col-span-2 mx-auto">
        <div>
          <ArrowIcon :size="35" />
        </div>

        <div class="h-16 mt-4 w-full">
          <div :class="[isPickupActive ? 'circle-black' : 'circle-gray']" />
          <div class="line"></div>
          <div :class="[!isPickupActive ? 'square-black' : 'square-gray']" />
        </div>
      </div>
      <div class="col-span-1o pr-4">
        <div class="w-full h-5"></div>
        <div class="mb-2 mt-5">
          <AutoCompleteInput
            theId="firstInput"
            v-model:input="pickup"
            placeholder="Enter pick-up location"
            @clearInput="clearInputFunc('firstInput')"
            @isActive="isPickupActive = true"
          />
        </div>

        <div class="mb-3">
          <AutoCompleteInput
            theId="firstInput"
            v-model:input="pickup"
            placeholder="Enter pick-up location"
            @clearInput="clearInputFunc('firstInput')"
            @isActive="isPickupActive = true"
          />
        </div>
      </div>
    </div>
    <!-- new!!!!!!!!!!!!! -->
  </div>
</template>

<script>
//  New!!!!!!!!!!!!!!!
import AutoCompleteInput from "../components/AutoCompleteInput.vue";
import ArrowIcon from "vue-material-design-icons/ArrowLeft.vue";

export default {
  components: {
    ArrowIcon,
    AutoCompleteInput,
  },
  data() {
    return {
      isPickupActive: false,
      pickup: "",
    };
  },
};
// New!!!!!!!!!!!!!!!
</script>

<style>
/* new!!!!!!!!!!!!! */
#Directions .circle-black {
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
/* new!!!!!!!!!!!!! */
</style>
