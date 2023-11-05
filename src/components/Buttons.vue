<template>
  <div class="px-4 py-2">
    <button :class="buttonClass">
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: ["text", "type"],
  computed: {
    buttonClass() {
      return {
        [this.type]: true,
      };
    },
  },
};
</script>
