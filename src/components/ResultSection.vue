<template>
  <section v-if="items.length > 0" :id="id" class="my-5">
    <div class="title-container">
      <h2 class="h1 text-center">{{ title }}</h2>
    </div>
    <div class="card-container d-flex flex-wrap justify-content-center">
      <Card v-for="item in items" :key="item.id" :item="item" />
    </div>
  </section>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "ResultSection",
  components: { Card },
  props: ["id", "title", "items"],
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