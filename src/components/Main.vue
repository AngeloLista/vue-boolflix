<template>
  <main>
    <FilmCard />
  </main>
</template>

<script>
import axios from "axios";
import FilmCard from "./FilmCard.vue";

export default {
  name: "Main",
  components: {
    FilmCard,
  },
  data() {
    return {
      films: [],
      query: "prova",
      api_key: "536914e634dd4cef9d03dbc7349c9e01",
    };
  },
  methods: {
    fetchFilms() {
      //   const config = {
      //     params: {
      //       api_key: this.api_key,
      //       query: this.query,
      //       language: "it_IT",
      //     },
      //   };
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=536914e634dd4cef9d03dbc7349c9e01&query=prova"
        )
        .then((res) => {
          this.films = res.data.results;
        });
    },
  },
  created() {
    this.fetchFilms();
  },
};
</script>

<style scoped lang="scss">
main {
}
</style>