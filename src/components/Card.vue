<template>
  <ul>
    <li>{{ item.title || item.name }}</li>
    <li>{{ item.original_title || item.original_name }}</li>
    <li><img :src="posterUrl" :alt="item.name" /></li>
    <li>
      <img v-if="hasFlag" :src="flagSrc" :alt="item.original_language" />
      <span v-else>{{ item.original_language }}</span>
    </li>
    <li>{{ item.vote_average }}</li>
  </ul>
</template>

<script>
export default {
  name: "Card",
  props: ["item"],
  data() {
    return {
      flags: ["it", "en"],
      basePosterUrl: "https://image.tmdb.org/t/p/",
    };
  },
  computed: {
    posterUrl() {
      return `${this.basePosterUrl}w342${this.item.poster_path}`;
    },
    flagSrc() {
      return require(`@/assets/img/${this.item.original_language}.png`);
    },
    hasFlag() {
      return this.flags.includes(this.item.original_language);
    },
  },
};
</script>

<style>
</style>