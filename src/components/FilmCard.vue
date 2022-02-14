<template>
  <div>
    <div v-for="film in films" :key="film.id" class="film-card">
      <h3>{{ film.title }}</h3>
      <p>{{ film.original_title }}</p>
      <p>{{ film.original_language }}</p>
      <p>{{ film.vote_average }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["films"],
  name: "FilmCard",
};
</script>

<style>
.film-card {
  color: white;
  border: 1px solid white;
  display: inline-block;
  padding: 15px;
}
</style>