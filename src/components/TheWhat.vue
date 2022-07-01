<script setup>
import { computed } from "vue";

import SubmitInput from "@/components/SubmitInput.vue";
import SubmitChoice from "@/components/SubmitChoice.vue";
import SubmitArea from "@/components/SubmitArea.vue";

const langs = ["javascript", "python", "rust", "sql", "other"];

const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const values = computed({
  get: () => props.modelValue,
  set: (value) => {
    console.log("set values", value);
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <form class="w-full">
    <SubmitChoice name="language" :choices="langs" v-model="values.lang" />
    <SubmitInput
      v-if="values.lang == 'other'"
      name="lang (other)"
      v-model="values.langOther"
    />

    <SubmitArea name="description" v-model="values.description" />
  </form>
</template>
