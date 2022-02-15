<template>
  <ul>
    <li>{{ item.title || item.name }}</li>
    <li>{{ item.original_title || item.original_name }}</li>
    <li><img :src="posterUrl" :alt="item.name" /></li>
    <li>
      <img v-if="hasFlag" :src="flagSrc" :alt="item.original_language" />
      <span v-else>{{ item.original_language }}</span>
    </li>
    <li>
      <i :class="isThisIconSolidOrRegular(starVote, 1)" class="fa-star"></i>
      <i :class="isThisIconSolidOrRegular(starVote, 2)" class="fa-star"></i>
      <i :class="isThisIconSolidOrRegular(starVote, 3)" class="fa-star"></i>
      <i :class="isThisIconSolidOrRegular(starVote, 4)" class="fa-star"></i>
      <i :class="isThisIconSolidOrRegular(starVote, 5)" class="fa-star"></i>
    </li>
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
  methods: {
    isThisIconSolidOrRegular(vote, index) {
      return vote >= index ? "fa-solid" : "fa-regular";
    },
  },
  computed: {
    starVote() {
      return Math.ceil(this.item.vote_average / 2);
    },
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