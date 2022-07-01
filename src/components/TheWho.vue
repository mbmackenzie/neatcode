<script setup>
import { computed } from "vue";

import SubmitInput from "@/components/SubmitInput.vue";
import SubmitChoice from "@/components/SubmitChoice.vue";

const roles = ["student", "developer", "data scientist", "other"];

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
    <SubmitInput name="name" v-model="values.name" />
    <SubmitInput name="email" v-model="values.email" />

    <SubmitChoice name="role" :choices="roles" v-model="values.role" />
    <SubmitInput
      v-if="values.role == 'other'"
      name="role (other)"
      v-model="values.roleOther"
    />

    <SubmitInput name="github" v-model="values.github" />
  </form>
</template>
