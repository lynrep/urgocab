<template>
  <div id="AutoCompleteInput" class="flex items-center">
    <input
      :id="theId"
      v-model="inputComputed"
      @click="emit('isActive', 'true')"
      class="text-md bg-gray-100 appearance-none rounded w-96 py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-gray-200"
      type="text"
      :placeholder="placeholder"
      autocomplete="off"
    />
    <WindowCloseIcon @click="$emit('clearInput')" fillcolor="#2e2e2d" />
  </div>
</template>

<script>
import { computed, defineEmits, defineProps, toRefs } from "vue";
import WindowCloseIcon from "vue-material-design-icons/WindowClose.vue";

const emit = defineEmits(["update:input", "clearInput", "isActive"]);

const props = defineProps({
  theId: String,
  input: String,
  placeholder: String,
});

const { theId, input, placeholder } = toRefs(props);

const inputComputed = computed({
  get: () => input.value,
  set: (val) => emit("update:input", val),
});
</script>
<style></style>
