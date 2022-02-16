<template>
  <div
    class="card d-flex justify-content-end"
    :style="{ 'background-image': `url(${posterUrl})` }"
  >
    <!-- <img class="img-fluid h-100" :src="posterUrl" :alt="item.name" /> -->
    <div class="hover-description h-100">
      <div class="title-container">
        <p class="title mb-1">{{ item.title || item.name }}</p>
        <p class="original-title">
          {{ item.original_title || item.original_name }}
        </p>
      </div>
      <div>
        <img
          class="flag"
          v-if="hasFlag"
          :src="flagSrc"
          :alt="item.original_language"
        />
        <span v-else>{{ item.original_language }}</span>
        <div class="star-rating">
          <i
            v-for="i in 5"
            :key="i"
            :class="isThisIconSolidOrRegular(starVote, i)"
            class="fa-star"
          ></i>
        </div>
      </div>
      <div class="overview-container">
        <span v-if="item.overview"><strong>Overview:</strong></span>
        <p class="overview">{{ item.overview }}</p>
      </div>
    </div>
  </div>
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
      if (this.item.poster_path != null) {
        return `${this.basePosterUrl}w342${this.item.poster_path}`;
      }
      return `https://i.pinimg.com/originals/aa/f7/05/aaf705e06726ce3881288ae4be3ac5fe.jpg`;
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

<style scoped lang="scss">
.card {
  display: inline-block;
  margin: 30px;
  height: 500px;
  width: 342px;
  background-color: black;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px;
  border: 1px solid rgb(214, 214, 214);
  img {
    object-fit: fill;
    border-radius: 15px;
  }
  .hover-description {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    text-align: center;
    background-color: black;
    border-radius: 15px;
    opacity: 0;
    &:hover {
      opacity: 0.85;
      transition: 0.3s;
    }
    .title {
      font-size: 1.5rem;
      font-weight: bold;
    }
    .original-title {
      font-size: 0.9rem;
    }
    .flag {
      width: 50px;
      height: 30px;
      margin-bottom: 10px;
    }
    .star-rating {
      display: block;
    }
    .overview {
      height: 180px;
      overflow: auto;
      text-align: left;
      margin-top: 10px;
      padding-left: 15px;
      padding-right: 15px;
    }
  }
}
</style>