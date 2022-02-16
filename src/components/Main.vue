<template>
  <main>
    <div class="container my-3">
      <ResultSection id="movies" title="Film" :items="movies" />
      <ResultSection id="series" title="Serie TV" :items="series" />
      <p
        class="section-placeholder h1 text-center"
        v-if="(movies.length && series.length) === 0"
      >
        Cerca un Film o una Serie TV!
      </p>
    </div>
  </main>
</template>

<script>
import ResultSection from "./ResultSection.vue";

export default {
  name: "Main",
  components: { ResultSection },
  props: ["movies", "series"],
};
</script>

<style scoped lang="scss">
.section-placeholder {
  font-family: "Martel Sans", sans-serif;
  font-weight: 900;
  padding: 50px;
}
</style>