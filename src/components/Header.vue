<template>
  <header>
    <div
      class="container d-flex align-items-center justify-content-between h-100"
    >
      <div class="logo h1">BOOLFLIX</div>

      <!-- Search -->
      <Search @search="emitSearch" />
    </div>
  </header>
</template>

<script>
import Search from "./Search.vue";
export default {
  name: "Header",
  components: {
    Search,
  },

  methods: {
    emitSearch(searchText) {
      this.$emit("search", searchText);
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