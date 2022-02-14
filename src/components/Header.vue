<template>
  <header class="d-flex align-items-center justify-content-between">
    <div class="logo h1">BOOLFLIX</div>
    <div class="search-container d-flex align-items-center">
      <input placeholder="Cerca un film" type="text" />
      <input class="ms-1 me-3" type="button" />
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
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