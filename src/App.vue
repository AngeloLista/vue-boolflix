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
      series: [],
      api: {
        language: "it-IT",
        key: "536914e634dd4cef9d03dbc7349c9e01",
        baseUri: "https://api.themoviedb.org/3",
      },
    };
  },
  methods: {
    search(searchText) {
      if (!searchText) {
        this.movies = [];
        this.series = [];
        return;
      }

      const { key, language } = this.api;

      const config = {
        params: {
          language,
          api_key: key,
          query: searchText,
        },
      };

      this.fetchApi("search/movie", config, "movies");
      this.fetchApi("search/tv", config, "series");
    },

    fetchApi(endpoint, config, target) {
      axios
        .get(`${this.api.baseUri}/${endpoint}`, config)
        .then((res) => {
          this[target] = res.data.results;
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
