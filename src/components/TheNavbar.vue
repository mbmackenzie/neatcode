<script setup>
import { RouterLink } from "vue-router";

const getRandomSnippet = () => {
  return 1;
};
</script>

<template>
  <nav>
    <div class="left">
      <RouterLink :to="{ name: 'home' }" class="font-bold">
        neatcode
      </RouterLink>
      |
      <RouterLink :to="{ name: 'about' }"> about </RouterLink>
    </div>
    <div class="right">
      <RouterLink :to="{ name: 'snippet', params: { id: getRandomSnippet() } }">
        random
      </RouterLink>
      |
      <RouterLink :to="{ name: 'submit' }"> submit a snippet </RouterLink>
    </div>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: row;
}

.right {
  margin-left: auto;
}

a {
  color: #000;
  text-decoration: none;
}
</style>
