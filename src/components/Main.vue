<template>
  <main>
    <section id="movies">
      <h2>Movies</h2>
      <Card v-for="movie in this.movies" :key="movie.id" :item="movie" />
    </section>
    <section id="series">
      <h2>Series</h2>
      <Card v-for="serie in this.series" :key="serie.id" :item="serie" />
    </section>
  </main>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "Main",
  components: { Card },
  props: ["movies", "series"],
};
</script>

<style scoped lang="scss">
</style>