<template>
  <header>
    <div
      class="container d-flex align-items-center justify-content-between h-100"
    >
      <div class="logo h1">BOOLFLIX</div>
      <div class="search-container d-flex align-items-center">
        <input placeholder="Cerca un film" type="text" />
        <input class="ms-1" type="button" />
      </div>
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