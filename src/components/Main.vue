<template>
  <main>
    <div class="container my-3">
      <section v-if="movies.length > 0" id="movies">
        <h2 class="h1">Movies</h2>
        <div class="card-container d-flex flex-wrap justify-content-center">
          <Card v-for="movie in this.movies" :key="movie.id" :item="movie" />
        </div>
      </section>
      <section v-if="series.length > 0" id="series">
        <h2 class="h1">Series</h2>
        <div class="card-container d-flex flex-wrap">
          <Card v-for="serie in this.series" :key="serie.id" :item="serie" />
        </div>
      </section>
    </div>
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