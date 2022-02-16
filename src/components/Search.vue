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
@import "../assets/scss/vars.scss";

.search-input {
  width: 300px;
  border: 0;
  background-color: $bg_color;
  color: rgb(199, 199, 199);
  padding-left: 5px;
  border-radius: 5px;
}
button {
  background-color: $bg_color;
  border: 0;
  color: rgb(199, 199, 199);
}
</style>