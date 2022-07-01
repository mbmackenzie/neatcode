<script setup>
import { defineProps } from "vue";

const props = defineProps(["id"]);
</script>

<template>
  <div class="view">
    <h1>snippet {{ id }}</h1>
  </div>
</template>
