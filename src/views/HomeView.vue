<script setup>
import { ref } from "vue";
import Snippet from "@/components/Snippet.vue";

import snippets from "@/data.json";
</script>

<template>
  <div class="view">
    <div class="snippets grid grid-flow-col gap-4">
      <div v-for="snippet in snippets" :key="snippet.id">
        <Snippet :snippet="snippet" />
      </div>
    </div>
  </div>
</template>
