<template>
  <div class="search-container d-flex align-items-center">
    <input
      @keyup.enter="emitSearch"
      v-model.trim="searchText"
      placeholder="Cerca un film o una serie tv"
      type="text"
      class="search-input"
    />
    <button @click="emitSearch" class="ms-1">
      <i class="fa-solid fa-magnifying-glass"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    emitSearch() {
      this.$emit("search", this.searchText);
    },
  },
};
</script>

<style scoped lang="scss">
.search-input {
  width: 300px;
  border: 0;
}
button {
  border: 0;
  color: gray;
}
</style>