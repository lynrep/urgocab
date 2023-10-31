<template>
   <div id="AutoCompleteInput" class="flex items-center">
    <input 
        :id="theId"
        v-model="inputComputed"
        @click="emit('isActive', true)"
        class="
            text-md
            bg-gray-100
            appearance-none 
            rounded 
            w-full 
            py-2.5
            px-3
            text-gray-700 
            leading-tight 
            focus:outline-none 
            focus:shadow-outline
            focus:bg-gray-200
            "   
            type="text"
            placeholder="placeholder"
            autocomplete="off"
    >
      <WindowCloseIcon 
      fillColor="#2e2e2d" 
      @click="$emit('clearInput')" 
      />
   </div>
</template>

<script>

import WindowCloseIcon from 'vue-material-design-icons/WindowClose.vue';

export default {
  components: {
    WindowCloseIcon
  },
  props: {
    theId: String,
    input: String,
    placeholder: String
  },
  setup(props) {
    const emit = defineEmits(['update:input', 'clearInput', 'isActive']);

    const { theId, input, placeholder } = toRefs(props);

    const inputComputed = computed({
      get: () => input.value,
      set: (val) => emit('update:input', val)
    });

    return {
      theId,
      input,
      placeholder,
      inputComputed
    };
  }
}
</script>

<style>
  
</style>
