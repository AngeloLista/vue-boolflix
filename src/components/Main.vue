<template>
  <main>
    <div class="container my-3">
      <section v-if="movies.length > 0" id="movies" class="my-5">
        <div class="title-container">
          <h2 class="h1 text-center">Movies</h2>
        </div>
        <div class="card-container d-flex flex-wrap justify-content-center">
          <Card v-for="movie in this.movies" :key="movie.id" :item="movie" />
        </div>
      </section>
      <section v-if="series.length > 0" id="series" class="my-5">
        <div class="title-container">
          <h2 class="h1 text-center">Series</h2>
        </div>
        <div class="card-container d-flex flex-wrap justify-content-center">
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
.title-container {
  position: relative;
  h2 {
    font-family: "Martel Sans", sans-serif;
    font-weight: 900;
    font-size: 3rem;
  }
}
</style>