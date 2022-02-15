<template>
  <div class="search-container d-flex align-items-center">
    <input
      @keyup.enter="emitSearch"
      v-model="searchText"
      placeholder="Cerca un film"
      type="text"
    />
    <button @click="emitSearch" class="ms-1">Cerca</button>
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style>
</style>