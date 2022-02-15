<template>
  <header>
    <div
      class="container d-flex align-items-center justify-content-between h-100"
    >
      <div class="logo h1">BOOLFLIX</div>

      <!-- Search -->
      <div class="search-container d-flex align-items-center">
        <input
          @keyup.enter="emitSearch"
          v-model="searchText"
          placeholder="Cerca un film"
          type="text"
        />
        <button @click="emitSearch" class="ms-1">Cerca</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
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

header {
  height: 70px;
  background-color: #000;
  .logo {
    color: $main_color;
  }
}
</style>