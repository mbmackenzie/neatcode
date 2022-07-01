<script setup>
import { RouterView } from "vue-router";
import TheNavbar from "@/components/TheNavbar.vue";
</script>

<template>
  <TheNavbar />
  <div class="main-page mt-10">
    <RouterView />
  </div>
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

.view {
  display: flex;
  justify-content: center;
}
</style>
