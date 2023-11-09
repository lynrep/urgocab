<template>
  <nav class="main-nav">
    <router-link :to="{ name: 'planner' }">Planner</router-link>
    <router-link :to="{ name: 'AddProject' }">Add New Plan</router-link>
  </nav>

  <div class="flex">
    <nav class="filter-nav">
      <button
        @click="updateFilter('all')"
        :class="{ active: current === 'all' }"
      >
        All
      </button>
      <button
        @click="updateFilter('completed')"
        :class="{ active: current === 'completed' }"
      >
        Completed
      </button>
      <button
        @click="updateFilter('ongoing')"
        :class="{ active: current === 'ongoing' }"
      >
        Ongoing
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
