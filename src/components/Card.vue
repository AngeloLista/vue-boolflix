<template>
  <ul>
    <li>{{ item.title || item.name }}</li>
    <li>{{ item.original_title || item.original_name }}</li>
    <li>{{ item.original_language }}</li>
    <li>{{ item.vote_average }}</li>
  </ul>
</template>

<script>
export default {
  name: "Card",
  props: ["item"],
};
</script>

<style>
</style>