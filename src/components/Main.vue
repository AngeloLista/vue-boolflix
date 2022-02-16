<template>
  <main>
    <div class="container my-3">
      <ResultSection id="movies" title="Film" :items="movies" />
      <ResultSection id="series" title="Serie TV" :items="series" />
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
</style>