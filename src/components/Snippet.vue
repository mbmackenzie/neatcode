<script setup>
import { RouterLink } from "vue-router";
const props = defineProps(["snippet"]);
</script>

<template>
  <RouterLink :to="{ name: 'snippet', params: { id: snippet.id } }">
    <div class="max-w-sm w-full flex">
      <div class="border-2 border-gray-400 p-2">
        <div class="mb-8">
          <p class="text-sm text-gray-600">
            From a {{ snippet.role }} (<span class="font-bold">{{
              snippet.lang
            }}</span
            >)
          </p>
          <p class="text-gray-700">{{ snippet.description }}</p>
        </div>
      </div>
    </div>
  </RouterLink>
</template>
