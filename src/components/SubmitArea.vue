<script setup>
import { computed, ref } from "vue";

const props = defineProps(["name", "modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const nameSlug = computed(() => {
  return props.name.toLowerCase().replace(/\s/g, "-");
});

const value = ref(props.modelValue);
const handleInput = () => emit("update:modelValue", value.value);
</script>

<template>
  <div class="form-item">
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/5">
        <label class="block md:text-right mb-1 md:mb-0 pr-4" :for="nameSlug">
          {{ name }}
        </label>
      </div>
      <div class="md:w-4/5">
        <textarea
          class="border-2 border-gray-200 w-full py-2 px-2 text-gray-700 focus:outline-none resize-none"
          :id="nameSlug"
          v-model="value"
          @input="handleInput"
        />
      </div>
    </div>
  </div>
</template>
