<template>
  <div id="app">
    <Header @search="search" />
    <Main />
    <ul v-for="movie in movies" :key="movie.id">
      <li>{{ movie.title }}</li>
      <li>{{ movie.original_title }}</li>
      <li>{{ movie.original_language }}</li>
      <li>{{ movie.vote_average }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

export default {
  name: "App",

  components: {
    Header,
    Main,
  },
  data() {
    return {
      movies: [],
      api: {
        language: "it-IT",
        key: "536914e634dd4cef9d03dbc7349c9e01",
        baseUri: "https://api.themoviedb.org/3",
      },
    };
  },
  methods: {
    search(searchText) {
      console.log(searchText);
      const { key, baseUri, language } = this.api;
      const config = {
        params: {
          language,
          api_key: key,
          query: searchText,
        },
      };

      axios
        .get(`${baseUri}/search/movie`, config)
        .then((res) => {
          this.movies = res.data.results;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";

ul {
  color: white;
}
</style>
